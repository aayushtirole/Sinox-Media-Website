import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import FeaturedTestimonial from "@/components/sections/FeaturedTestimonial";
import MorePortfolio from "@/components/sections/MorePortfolio";
import Services from "@/components/sections/Services";
import WaveGoodbye from "@/components/sections/WaveGoodbye";
import Testimonials from "@/components/sections/Testimonials";
import SocialProof from "@/components/sections/SocialProof";
import Pricing from "@/components/sections/Pricing";
import About from "@/components/sections/About";
import Comparison from "@/components/sections/Comparison";
import IndustryInsights from "@/components/sections/IndustryInsights";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Portfolio />
      <FeaturedTestimonial />
      <MorePortfolio />
      <Services />
      <WaveGoodbye />
      <Testimonials />
      <SocialProof />
      <Pricing />
      <About />
      <Comparison />
      <IndustryInsights />
      <FAQ />
      <Footer />
    </div>
  );
}
