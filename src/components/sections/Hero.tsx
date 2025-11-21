import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Zap, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Animated Gradient Background */}
      <div 
        className="absolute inset-0 z-0 gradient-shift opacity-30"
        style={{
          background: 'linear-gradient(135deg, hsl(0 0% 98%), hsl(0 100% 59% / 0.05), hsl(25 100% 50% / 0.05), hsl(0 0% 100%))',
        }}
      />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 float-subtle opacity-20">
          <Sparkles className="w-12 h-12 text-primary" />
        </div>
        <div className="absolute top-1/3 right-1/4 float-animation opacity-20" style={{ animationDelay: '1s' }}>
          <Zap className="w-16 h-16 text-gradient-orange" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 float-subtle opacity-20" style={{ animationDelay: '2s' }}>
          <Star className="w-10 h-10 text-gradient-pink" />
        </div>
        <div className="absolute top-1/2 right-1/3 float-animation opacity-20" style={{ animationDelay: '0.5s' }}>
          <Sparkles className="w-14 h-14 text-gradient-purple" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 xl:px-8 py-20 xl:py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <Badge 
            variant="secondary" 
            className="px-6 py-2 text-sm font-medium rounded-full bg-secondary/80 backdrop-blur-sm fade-in-up stagger-1"
          >
            ⚡ 50+ Projects Managed Daily with Sinox Media
          </Badge>
          
          <h1 className="text-5xl xl:text-7xl font-bold leading-tight tracking-tight fade-in-up stagger-2">
            Content Production for <br />
            <span className="gradient-text-shimmer">Brands & Ventures.</span>
          </h1>
          
          <p className="text-xl xl:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed fade-in-up stagger-3">
            Strategy → Storytelling → High-quality content
          </p>
          
          <div className="flex justify-center items-center pt-4 fade-in-up stagger-4">
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg rounded-full bg-primary hover:bg-primary-hover shadow-glow hover:shadow-glow-hover transition-smooth ripple hover-scale"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Us
            </Button>
          </div>
          
          <div className="pt-12 xl:pt-16 fade-in-up stagger-5">
            <p className="text-sm text-muted-foreground mb-6">Trusted by leading brands</p>
            <div className="flex flex-wrap justify-center items-center gap-8 xl:gap-12 opacity-60">
              <div className="text-2xl font-bold hover-scale cursor-pointer">BRAND</div>
              <div className="text-2xl font-bold hover-scale cursor-pointer">BRAND</div>
              <div className="text-2xl font-bold hover-scale cursor-pointer">BRAND</div>
              <div className="text-2xl font-bold hover-scale cursor-pointer">BRAND</div>
              <div className="text-2xl font-bold hover-scale cursor-pointer">BRAND</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
