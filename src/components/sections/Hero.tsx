import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Enhanced Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        {/* Main gradient layer */}
        <div 
          className="absolute inset-0 gradient-shift opacity-20"
        />
        
        {/* Radial gradient overlay for depth */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 30% 20%, hsl(0 100% 59% / 0.15), transparent 50%), radial-gradient(circle at 70% 80%, hsl(25 100% 50% / 0.12), transparent 50%), radial-gradient(circle at 50% 50%, hsl(340 100% 62% / 0.08), transparent 70%)',
          }}
        />
        
        {/* Subtle noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
          }}
        />
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
              className="px-8 py-6 text-lg rounded-full bg-primary hover:bg-primary-hover shadow-glow hover:shadow-glow-hover transition-smooth hover-scale"
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
