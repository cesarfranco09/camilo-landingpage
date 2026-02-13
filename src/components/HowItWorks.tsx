import { Phone, Search, FileSignature, Home } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Free Consultation",
    description:
      "Reach out for a free consultation. We'll discuss your property situation, understand your goals, and determine if a tenant buyout is the right path.",
  },
  {
    icon: Search,
    step: "02",
    title: "Assessment & Strategy",
    description:
      "We assess the tenant situation, research applicable local regulations, and develop a customized buyout strategy tailored to your property.",
  },
  {
    icon: FileSignature,
    step: "03",
    title: "Negotiation & Agreement",
    description:
      "Our team handles all tenant outreach and negotiation, working toward a fair, voluntary buyout agreement that satisfies both parties.",
  },
  {
    icon: Home,
    step: "04",
    title: "Successful Buyout",
    description:
      "Once a voluntary agreement is reached, we manage the entire process through to completion — ensuring a smooth transition for everyone involved.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 bg-parchment overflow-hidden">
      {/* Organic blobs */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-sage-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-warm-100/20 rounded-full blur-3xl pointer-events-none" />

      {/* Top curve */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 48C1200 48 1320 40 1380 36L1440 32V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V80Z"
            fill="white"
            fillOpacity="0.5"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-warm-600 font-medium text-sm tracking-widest uppercase mb-3">
            Our Process
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-sand-900 mb-5">
            How It Works
          </h2>
          <p className="text-sand-500 text-lg leading-relaxed">
            A simple, transparent process designed to make tenant buyouts as
            smooth and fair as possible for everyone involved.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div key={step.step} className="relative group">
              {/* Connector line (hidden on last item and on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] right-[calc(-50%+2rem)] h-[2px] bg-linear-to-r from-sage-200 to-sage-100" />
              )}

              <div className="relative bg-white/80 backdrop-blur-sm rounded-4xl p-8 text-center hover:shadow-xl hover:shadow-sage-100/30 transition-all duration-500 hover:-translate-y-1 border border-sand-100 hover:border-sage-200">
                {/* Step number */}
                <span className="absolute top-4 right-6 font-serif text-5xl text-sand-100 group-hover:text-sage-100 transition-colors duration-300">
                  {step.step}
                </span>

                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto bg-linear-to-br from-sage-100 to-sage-50 rounded-full flex items-center justify-center mb-5 group-hover:from-sage-200 group-hover:to-sage-100 transition-all duration-300">
                    <step.icon className="w-7 h-7 text-sage-600" />
                  </div>
                  <h3 className="font-serif text-xl text-sand-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sand-500 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
