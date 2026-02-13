import { ArrowUp } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative bg-sand-900 text-sand-300 overflow-hidden">
      {/* Organic curve at top */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0L60 8C120 16 240 32 360 38C480 44 600 40 720 34C840 28 960 20 1080 18C1200 16 1320 20 1380 22L1440 24V60H0V0Z"
            fill="currentColor"
            className="text-sand-100"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="font-serif text-2xl text-white hover:text-warm-300 transition-colors duration-300"
            >
              #CashForKeys
            </a>
            <p className="mt-4 text-sand-400 leading-relaxed text-sm">
              Professional tenant buyout services by Dennis Munoz. Facilitating
              fair, voluntary agreements with professionalism, empathy, and
              proven results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-white text-lg mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sand-400 hover:text-warm-300 transition-colors duration-300 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-serif text-white text-lg mb-4">
              Ready to Get Started?
            </h4>
            <p className="text-sand-400 text-sm mb-4 leading-relaxed">
              Contact us today for your free consultation and take the first
              step toward a successful tenant buyout.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-2.5 bg-sage-600 text-white text-sm font-medium rounded-full hover:bg-sage-500 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-sand-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sand-500 text-sm">
            &copy; {new Date().getFullYear()} #CashForKeys by Dennis Munoz. All
            rights reserved.
          </p>

          {/* Back to top */}
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-sand-500 hover:text-warm-300 transition-colors duration-300 text-sm"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
