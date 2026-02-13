import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Kevin Bernotas",
    role: "Property Owner",
    content:
      "Dennis' broad property management experience and keen communication skills give him a competitive edge in tenant buyout negotiations. \n \n When I faced a challenging buyout after insulting a tenant, Dennis disarmed him and brought him to a constructive conversation. I'm excited to see what we can accomplish together.",
    rating: 5,
  },
  {
    name: "Robert Chen",
    role: "Real Estate Investor",
    content:
      "Working with #CashForKeys was a game-changer for my portfolio. Dennis's approach to tenant buyouts is both firm and compassionate, he gets results while keeping everyone happy.",
    rating: 5,
  },
  {
    name: "William Rojas",
    role: "Real Estate Investor",
    content:
      "Dennis is a landlord-tenant negotiation professional. During the COVID-19 pandemic, he successfully negotiated a buy-out for a property I was purchasing in just two days, after others had failed for two months. \n \n His approach focused on understanding both parties' needs, quickly building relationships, and achieving a win-win deal. I look forward to working with Dennis again.",
    rating: 5,
  },
  {
    name: "Ray Juarez",
    role: "Landlord",
    content:
      "Dennis Munoz is a vital asset for landlords managing tenant evictions and move-outs. His strategic skills and deep understanding of local laws ensure cost-effective solutions. \n \n Dennis excels in delicate negotiations, like tenant buy-out agreements, and his tactful approach leads to successful outcomes. Early engagement with Dennis mitigates costs and minimizes exposure, making his expertise invaluable for landlords.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background shapes */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-warm-50/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-sage-50/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-warm-600 font-medium text-sm tracking-widest uppercase mb-3">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-sand-900 mb-5">
            What Our Clients Say
          </h2>
          <p className="text-sand-500 text-lg leading-relaxed">
            Don't just take our word for it — hear from property owners and
            investors who have experienced our services firsthand.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`relative bg-linear-to-br from-sand-50/60 to-white p-8 lg:p-10 rounded-4xl border border-sand-100 hover:border-warm-200 transition-all duration-500 hover:shadow-xl hover:shadow-warm-100/20 ${
                index % 2 === 1 ? "md:translate-y-6" : ""
              }`}
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-8 w-10 h-10 text-sand-100" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-warm-400 text-warm-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-sand-600 leading-relaxed mb-6 relative z-10 whitespace-pre-line">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-sage-200 to-warm-200 flex items-center justify-center">
                  <span className="font-serif text-sm text-sand-700">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-sand-800">
                    {testimonial.name}
                  </p>
                  <p className="text-sand-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
