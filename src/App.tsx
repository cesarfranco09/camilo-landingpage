import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { HowItWorks } from "./components/HowItWorks";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ChatWidget } from "./components/ChatWidget";

function App() {
  return (
    <div className="font-sans antialiased text-sand-800 bg-cream">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <HowItWorks />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;
