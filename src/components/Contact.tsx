import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(626) 759-5727",
    href: "tel:+16267595727",
  },
  {
    icon: Mail,
    label: "Email",
    value: "thenegotiatorcash@gmail.com",
    href: "mailto:thenegotiatorcash@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Los Angeles, CA",
    href: "#",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri, 9AM–6PM",
    href: "#",
  },
];

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Contact from ${formData.name} — #CashForKeys`,
          from_name: formData.name,
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  }

  const isLoading = status === "loading";

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-linear-to-b from-parchment to-sand-100 overflow-hidden"
    >
      {/* Organic blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sage-50/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-warm-50/30 rounded-full blur-3xl pointer-events-none" />

      {/* Top curve */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L80 50C160 40 320 20 480 15C640 10 800 20 960 25C1120 30 1280 30 1360 30L1440 30V0H1360C1280 0 1120 0 960 0C800 0 640 0 480 0C320 0 160 0 80 0H0V60Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-warm-600 font-medium text-sm tracking-widest uppercase mb-3">
            Get In Touch
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-sand-900 mb-5">
            Contact Us
          </h2>
          <p className="text-sand-500 text-lg leading-relaxed">
            Ready to explore a tenant buyout? Reach out today for a free
            consultation and let us help you negotiate a fair, voluntary
            agreement.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="flex items-start gap-4 group p-4 rounded-2xl hover:bg-white/60 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-sage-50 rounded-2xl flex items-center justify-center group-hover:bg-sage-100 transition-colors duration-300 shrink-0">
                  <info.icon className="w-5 h-5 text-sage-600" />
                </div>
                <div>
                  <p className="text-sand-400 text-sm">{info.label}</p>
                  <p className="text-sand-700 font-medium">{info.value}</p>
                </div>
              </a>
            ))}

            {/* Trust Badge */}
            <div className="mt-8 p-6 bg-white/60 backdrop-blur-sm rounded-3xl border border-sand-100">
              <p className="font-serif text-lg text-sand-800 mb-2">
                Free Consultation
              </p>
              <p className="text-sand-500 text-sm leading-relaxed">
                Every engagement starts with a free, no-obligation consultation.
                We'll assess your situation and provide a clear action plan.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-white/80 backdrop-blur-sm rounded-4xl p-8 lg:p-10 shadow-lg shadow-sand-200/20 border border-sand-100"
          >
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sand-600 text-sm font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-5 py-3 bg-sand-50/50 border border-sand-200 rounded-xl text-sand-800 placeholder:text-sand-300 focus:outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-100 transition-all duration-300"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sand-600 text-sm font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-5 py-3 bg-sand-50/50 border border-sand-200 rounded-xl text-sand-800 placeholder:text-sand-300 focus:outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-100 transition-all duration-300"
                />
              </div>
            </div>

            <div className="mb-5">
              <label
                htmlFor="phone"
                className="block text-sand-600 text-sm font-medium mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
                className="w-full px-5 py-3 bg-sand-50/50 border border-sand-200 rounded-xl text-sand-800 placeholder:text-sand-300 focus:outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-100 transition-all duration-300"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sand-600 text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell us about your property and the buyout situation..."
                className="w-full px-5 py-3 bg-sand-50/50 border border-sand-200 rounded-xl text-sand-800 placeholder:text-sand-300 focus:outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-100 transition-all duration-300 resize-none"
              />
            </div>

            {/* Status messages */}
            {status === "success" && (
              <div className="mb-5 flex items-center gap-3 p-4 bg-sage-50 border border-sage-200 rounded-xl text-sage-700">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <p className="text-sm">
                  Thank you! Your message has been sent. We'll get back to you
                  soon.
                </p>
              </div>
            )}

            {status === "error" && (
              <div className="mb-5 flex items-center gap-3 p-4 bg-warm-50 border border-warm-200 rounded-xl text-warm-700">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <p className="text-sm">
                  Something went wrong. Please try again or contact us directly.
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-all duration-300 hover:shadow-xl hover:shadow-sage-200/50 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
