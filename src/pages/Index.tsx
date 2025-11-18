import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";
import WaveGoodbye from "@/components/sections/WaveGoodbye";
import Pricing from "@/components/sections/Pricing";
import About from "@/components/sections/About";
import Comparison from "@/components/sections/Comparison";
import IndustryInsights from "@/components/sections/IndustryInsights";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <Portfolio />
      <div id="process">
        <Services />
      </div>
      <WaveGoodbye />
      <div id="pricing">
        <Pricing />
      </div>
      <div id="about">
        <About />
      </div>
      <Comparison />
      <IndustryInsights />
      <FAQ />
      <Footer />
    </div>
  );
}
