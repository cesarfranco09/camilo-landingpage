import type { VercelRequest, VercelResponse } from "@vercel/node";
import OpenAI from "openai";
import { Resend } from "resend";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const resend = new Resend(process.env.RESEND_API_KEY);

const SYSTEM_PROMPT = `You are the friendly and professional virtual assistant for Dennis Munoz and #CashForKeys — a tenant buyout specialist company based in Los Angeles, CA.

ABOUT THE BUSINESS:
- Dennis Munoz has over 10 years of experience specializing in tenant buyouts.
- A tenant buyout (also known as "cash for keys") is a voluntary, mutually beneficial agreement between a property owner and a tenant where the tenant agrees to vacate the property in exchange for compensation.
- #CashForKeys facilitates the negotiation between property owners and tenants to reach these voluntary agreements.
- Services include: Tenant Buyout Negotiation, Tenant Outreach & Communication, Buyout Agreement Preparation, Property Owner Representation, Legal Compliance Guidance, and End-to-End Buyout Management.
- The company is multilingual — English, Spanish, and more.
- Every engagement starts with a free, no-obligation consultation.

HOW THE PROCESS WORKS:
1. Free Consultation — Discuss the property situation and determine if a buyout is the right path.
2. Assessment & Strategy — Assess the tenant situation, research local regulations, and develop a customized buyout strategy.
3. Negotiation & Agreement — Handle all tenant outreach and negotiation toward a fair, voluntary buyout agreement.
4. Successful Buyout — Manage the process through completion, ensuring a smooth transition for everyone.

KEY STATS:
- 500+ buyouts negotiated
- 98% success rate
- 10+ years of experience
- 100% client satisfaction

YOUR BEHAVIOR:
- Be warm, professional, and concise. Keep responses 2-4 sentences unless more detail is needed.
- If someone asks about pricing, say that every situation is unique and recommend scheduling a free consultation to get a personalized assessment.
- If someone wants to schedule a consultation or speak with Dennis, collect their name, phone number, email, and a brief description of their situation. Once you have at least their name and one contact method (phone or email), use the submit_lead function to submit their information. Do NOT ask for confirmation before submitting — just submit and confirm.
- Do not make up information you don't have. If you're unsure about something specific, recommend they schedule a consultation.
- You can answer in English or Spanish depending on the user's language.
- Never reveal that you are an AI. Present yourself as the #CashForKeys assistant.
- Do not discuss topics unrelated to tenant buyouts, real estate, or the business.`;

const tools: OpenAI.ChatCompletionTool[] = [
  {
    type: "function",
    function: {
      name: "submit_lead",
      description:
        "Submit the user's contact information to schedule a free consultation with Dennis. Call this once you have collected at least their name and one contact method (phone or email).",
      parameters: {
        type: "object",
        properties: {
          name: { type: "string", description: "The user's full name" },
          email: { type: "string", description: "The user's email address" },
          phone: { type: "string", description: "The user's phone number" },
          role: {
            type: "string",
            enum: ["landlord", "tenant", "other"],
            description: "Whether the user is a landlord, tenant, or other",
          },
          situation: {
            type: "string",
            description:
              "Brief description of their property or tenant situation",
          },
        },
        required: ["name"],
      },
    },
  },
];

interface LeadData {
  name: string;
  email?: string;
  phone?: string;
  role?: string;
  situation?: string;
}

async function sendLeadEmail(lead: LeadData): Promise<boolean> {
  const { data, error } = await resend.emails.send({
    from: "CashForKeys Chatbot <onboarding@resend.dev>",
    to: "thenegotiatorcash@gmail.com",
    subject: `New Lead from #CashForKeys Chatbot: ${lead.name}`,
    html: `
      <h2>New Lead from Chatbot</h2>
      <table style="border-collapse:collapse;width:100%;max-width:500px;">
        <tr><td style="padding:8px;font-weight:bold;">Name</td><td style="padding:8px;">${lead.name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Phone</td><td style="padding:8px;">${lead.phone ?? "Not provided"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;">${lead.email ?? "Not provided"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Role</td><td style="padding:8px;">${lead.role ?? "Not specified"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Situation</td><td style="padding:8px;">${lead.situation ?? "Not provided"}</td></tr>
      </table>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return false;
  }

  console.log("Lead email sent:", data?.id);
  return true;
}

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { messages } = req.body as { messages: ChatMessage[] };

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array is required" });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      tools,
      max_tokens: 300,
      temperature: 0.7,
    });

    const choice = completion.choices[0];

    if (choice?.finish_reason === "tool_calls" && choice.message.tool_calls) {
      const toolCall = choice.message.tool_calls[0];

      if (toolCall.type !== "function") {
        return res.status(200).json({
          message: "I'm sorry, something went wrong. Please try again.",
        });
      }

      const leadData: LeadData = JSON.parse(toolCall.function.arguments);

      const emailSent = await sendLeadEmail(leadData);

      const followUp = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
          choice.message,
          {
            role: "tool" as const,
            tool_call_id: toolCall.id,
            content: emailSent
              ? "Lead submitted successfully. Dennis will reach out to them shortly."
              : "There was an issue submitting the lead. Ask the user to try the contact form on the website instead.",
          },
        ],
        max_tokens: 300,
        temperature: 0.7,
      });

      const reply =
        followUp.choices[0]?.message?.content ??
        "Your information has been submitted! Dennis will reach out shortly.";

      return res.status(200).json({ message: reply });
    }

    const reply =
      choice?.message?.content ??
      "I'm sorry, I couldn't process that. Please try again.";

    return res.status(200).json({ message: reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return res
      .status(500)
      .json({ error: "Something went wrong. Please try again." });
  }
}
