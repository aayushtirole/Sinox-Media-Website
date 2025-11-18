import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(180deg, hsl(0 0% 98%) 0%, hsl(0 0% 100%) 100%)',
        }}
      />
      
      <div className="container mx-auto px-4 xl:px-8 py-20 xl:py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <Badge 
            variant="secondary" 
            className="px-6 py-2 text-sm font-medium rounded-full bg-secondary/80 backdrop-blur-sm"
          >
            ⚡ 50+ Projects Managed Daily with Sinox Media
          </Badge>
          
          <h1 className="text-5xl xl:text-7xl font-bold leading-tight tracking-tight">
            Content Production for <br />
            <span className="gradient-text">Brands & Ventures.</span>
          </h1>
          
          <p className="text-xl xl:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Strategy → Storytelling → High-quality content
          </p>
          
          <div className="flex flex-col xl:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg rounded-full bg-primary hover:bg-primary-hover shadow-glow transition-smooth"
            >
              Book Your Call
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-6 text-lg rounded-full border-2 transition-smooth"
            >
              Contact Us
            </Button>
          </div>
          
          <div className="pt-12 xl:pt-16">
            <p className="text-sm text-muted-foreground mb-6">Trusted by leading brands</p>
            <div className="flex flex-wrap justify-center items-center gap-8 xl:gap-12 opacity-60">
              <div className="text-2xl font-bold">BRAND</div>
              <div className="text-2xl font-bold">BRAND</div>
              <div className="text-2xl font-bold">BRAND</div>
              <div className="text-2xl font-bold">BRAND</div>
              <div className="text-2xl font-bold">BRAND</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
