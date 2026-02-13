import { ArrowDown, TrendingUp, Users, Award, Handshake } from "lucide-react";

const stats = [
  { icon: Users, value: "900+", label: "Buyouts Negotiated" },
  { icon: Handshake, value: "98%", label: "Success Rate" },
  { icon: TrendingUp, value: "10+", label: "Years Experience" },
  { icon: Award, value: "100%", label: "Client Satisfaction" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-cream via-sand-50 to-parchment"
    >
      {/* ── Decorative background layer ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large soft blobs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-sage-100/60 rounded-full blur-3xl animate-blob-float" />
        <div className="absolute top-1/3 -left-24 w-80 h-80 bg-warm-100/50 rounded-full blur-3xl animate-blob-float animation-delay-200" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-sand-200/40 rounded-full blur-3xl animate-blob-float animation-delay-400" />

        {/* Floating solid circles — scattered */}
        <div className="absolute top-[12%] left-[8%] w-5 h-5 rounded-full bg-sage-300/40 animate-drift animation-delay-200" />
        <div className="absolute top-[18%] right-[12%] w-3 h-3 rounded-full bg-warm-300/50 animate-drift-alt" />
        <div className="absolute top-[45%] right-[6%] w-6 h-6 rounded-full bg-sage-200/30 animate-drift animation-delay-600" />
        <div className="absolute bottom-[30%] left-[5%] w-4 h-4 rounded-full bg-warm-200/40 animate-drift-alt animation-delay-400" />
        <div className="absolute top-[60%] left-[15%] w-3 h-3 rounded-full bg-sand-300/50 animate-drift animation-delay-800" />
        <div className="absolute top-[25%] left-[45%] w-2 h-2 rounded-full bg-sage-400/30 animate-drift-alt animation-delay-200" />
        <div className="absolute bottom-[40%] right-[18%] w-4 h-4 rounded-full bg-warm-300/30 animate-drift animation-delay-400" />

        {/* Ring outlines — hollow circles */}
        <div className="absolute top-[8%] right-[25%] w-16 h-16 rounded-full border-2 border-sage-200/30 animate-pulse-soft" />
        <div className="absolute bottom-[25%] left-[10%] w-20 h-20 rounded-full border-2 border-warm-200/25 animate-pulse-soft animation-delay-400" />
        <div className="absolute top-[55%] right-[8%] w-12 h-12 rounded-full border border-sand-300/30 animate-pulse-soft animation-delay-600" />
        <div className="absolute top-[15%] left-[30%] w-10 h-10 rounded-full border border-sage-300/20 animate-pulse-soft animation-delay-800" />

        {/* Dot cluster — top right */}
        <div className="absolute top-[20%] right-[30%] grid grid-cols-3 gap-2 opacity-30">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={`dot-tr-${i}`}
              className="w-1.5 h-1.5 rounded-full bg-sage-400"
            />
          ))}
        </div>

        {/* Dot cluster — bottom left */}
        <div className="absolute bottom-[20%] left-[20%] grid grid-cols-4 gap-1.5 opacity-20">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={`dot-bl-${i}`}
              className="w-1 h-1 rounded-full bg-warm-400"
            />
          ))}
        </div>

        {/* Large decorative ring — background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] rounded-full border border-dashed border-sand-200/30 animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] lg:w-[650px] lg:h-[650px] rounded-full border border-sage-100/20 animate-spin-slow-reverse" />
      </div>

      {/* Organic curved shape divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L48 108C96 96 192 72 288 60C384 48 480 48 576 54C672 60 768 72 864 78C960 84 1056 84 1152 78C1248 72 1344 60 1392 54L1440 48V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Avatar / Image with orbital rings */}
          <div className="shrink-0 animate-fade-in">
            <div className="relative">
              {/* Outer orbit ring */}
              <div className="absolute -inset-8 lg:-inset-10 animate-spin-slow">
                <div className="w-full h-full rounded-full border border-dashed border-sage-300/40" />
                {/* Orbiting dot */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-sage-400/60" />
              </div>

              {/* Inner orbit ring */}
              <div className="absolute -inset-4 lg:-inset-5 animate-spin-slow-reverse">
                <div className="w-full h-full rounded-full border border-warm-200/30" />
                {/* Orbiting dot */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-warm-400/50" />
              </div>

              {/* Decorative ring glow */}
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-sage-300 to-warm-300 blur-md scale-105 opacity-60" />

              {/* Photo */}
              <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-sand-200/50">
                <img
                  src="/assets/Camilo-green-2.JPG"
                  alt="Dennis Munoz"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating accent badge */}
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-warm-400 rounded-full flex items-center justify-center shadow-lg animate-pulse-soft">
                <Handshake className="w-6 h-6 text-white" />
              </div>

              {/* Small floating circles near avatar */}
              <div className="absolute -top-3 -left-4 w-5 h-5 rounded-full bg-sage-200/50 animate-drift animation-delay-200" />
              <div className="absolute top-1/4 -right-6 w-3 h-3 rounded-full bg-warm-300/40 animate-drift-alt animation-delay-600" />
              <div className="absolute -bottom-4 left-1/4 w-4 h-4 rounded-full border border-sage-300/40 animate-drift animation-delay-400" />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left flex-1">
            <div className="animate-fade-in-up">
              <p className="text-warm-600 font-medium text-sm tracking-widest uppercase mb-3">
                Tenant Buyout Specialist
              </p>
              <h1 className="font-serif text-5xl lg:text-7xl text-sand-900 leading-tight mb-4">
                Dennis Munoz
              </h1>
              <div className="inline-flex items-center gap-2 bg-sand-100/80 backdrop-blur-sm rounded-full px-5 py-2 mb-6">
                <span className="w-2 h-2 bg-sage-500 rounded-full animate-pulse-soft" />
                <span className="font-serif text-xl lg:text-2xl text-sage-700">
                  #CashForKeys
                </span>
              </div>
              <p className="text-sand-600 text-lg lg:text-xl max-w-xl leading-relaxed mb-8">
                Over 10 years specializing in facilitating negotiations between
                property owners and tenants for mutually beneficial, voluntary
                agreements — AKA <strong>#TenantsBuyouts</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-all duration-300 hover:shadow-xl hover:shadow-sage-200/50 hover:-translate-y-0.5"
                >
                  Schedule Consultation
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-sand-700 font-medium rounded-full border border-sand-200 hover:border-warm-300 hover:text-warm-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  View Services
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 lg:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up animation-delay-400">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-sand-100"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-sage-50 rounded-2xl mb-3">
                <stat.icon className="w-6 h-6 text-sage-600" />
              </div>
              <p className="font-serif text-3xl text-sand-800">{stat.value}</p>
              <p className="text-sand-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-sand-400 hover:text-warm-500 transition-colors duration-300"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
