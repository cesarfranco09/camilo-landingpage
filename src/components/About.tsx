import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Multilingual services — English, Spanish & more",
  "Deep understanding of tenant buyout laws",
  "Compassionate approach to every negotiation",
  "Proven track record of successful buyouts",
  "Transparent pricing with no hidden fees",
];

export function About() {
  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 bg-linear-to-b from-white via-sand-50/30 to-parchment overflow-hidden"
    >
      {/* Organic background shapes */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-sage-50/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-warm-50/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="relative">
              {/* Main image container with organic shape */}
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-sand-200/40 aspect-4/5">
                <img
                  src="/assets/Camilo-aboutUs-pic.JPG"
                  alt="Dennis Munoz making a deal"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-white rounded-3xl p-5 shadow-xl shadow-sand-200/30 border border-sand-100">
                <p className="font-serif text-3xl text-sage-700">10+</p>
                <p className="text-sand-500 text-sm">Years of Expertise</p>
              </div>

              {/* Decorative dots */}
              <div className="absolute -top-4 -left-4 grid grid-cols-3 gap-2">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-warm-200" />
                ))}
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="inline-block text-warm-600 font-medium text-sm tracking-widest uppercase mb-3">
              About Us
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl text-sand-900 mb-6 leading-tight">
              Your Trusted Partner in Tenant Buyouts
            </h2>
            <p className="text-sand-600 text-lg leading-relaxed mb-6">
              Over the last 10 years, Dennis Munoz has specialized in
              facilitating the negotiation between property owners and tenants
              for mutually exclusive and voluntary agreements — AKA{" "}
              <strong>#TenantsBuyouts</strong>. Through{" "}
              <strong>#CashForKeys</strong>, he has built one of the most
              respected names in the business.
            </p>
            <p className="text-sand-500 leading-relaxed mb-8">
              We believe every buyout negotiation can be handled with
              professionalism and empathy. Our approach ensures that both
              property owners and tenants walk away satisfied, turning
              potentially difficult conversations into positive, voluntary
              outcomes for everyone involved.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sage-500 mt-0.5 shrink-0" />
                  <span className="text-sand-600 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-warm-500 text-white font-medium rounded-full hover:bg-warm-600 transition-all duration-300 hover:shadow-xl hover:shadow-warm-200/50 hover:-translate-y-0.5"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
