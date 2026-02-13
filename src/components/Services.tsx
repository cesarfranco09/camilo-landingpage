import {
  DollarSign,
  FileText,
  MessageCircle,
  Shield,
  Scale,
  HeartHandshake,
} from "lucide-react";

const services = [
  {
    icon: DollarSign,
    title: "Tenant Buyout Negotiation",
    description:
      "Expert facilitation of cash-for-keys and tenant buyout agreements that create fair, voluntary, and mutually beneficial outcomes.",
  },
  {
    icon: MessageCircle,
    title: "Tenant Outreach & Communication",
    description:
      "Professional, empathetic outreach and ongoing communication with tenants to build trust and guide the buyout conversation.",
  },
  {
    icon: FileText,
    title: "Buyout Agreement Preparation",
    description:
      "Comprehensive drafting and management of voluntary buyout agreements and all supporting documentation for full legal compliance.",
  },
  {
    icon: Shield,
    title: "Property Owner Representation",
    description:
      "Dedicated representation of property owners' interests throughout the buyout process while ensuring fair and ethical treatment of tenants.",
  },
  {
    icon: Scale,
    title: "Legal Compliance Guidance",
    description:
      "Navigate complex tenant buyout laws and local regulations with confidence, ensuring every step meets current legal requirements.",
  },
  {
    icon: HeartHandshake,
    title: "End-to-End Buyout Management",
    description:
      "Full-service management from initial tenant contact through final agreement signing, so you can focus on your property goals.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-white">
      {/* Subtle organic shapes */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-sage-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-warm-50/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-warm-600 font-medium text-sm tracking-widest uppercase mb-3">
            What We Offer
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-sand-900 mb-5">
            Our Services
          </h2>
          <p className="text-sand-500 text-lg leading-relaxed">
            Comprehensive tenant buyout services designed to protect your
            investment while ensuring every tenant is treated with dignity,
            respect, and fairness.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative bg-linear-to-br from-sand-50/50 to-white p-8 rounded-4xl border border-sand-100 hover:border-sage-200 transition-all duration-500 hover:shadow-xl hover:shadow-sage-100/30 hover:-translate-y-1 ${
                index % 2 === 1 ? "lg:translate-y-4" : ""
              }`}
            >
              <div className="w-14 h-14 bg-sage-50 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-sage-100 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-sage-600" />
              </div>
              <h3 className="font-serif text-xl text-sand-800 mb-3">
                {service.title}
              </h3>
              <p className="text-sand-500 leading-relaxed">
                {service.description}
              </p>
              {/* Decorative corner accent */}
              <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-sand-100 rounded-tr-2xl group-hover:border-warm-200 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
