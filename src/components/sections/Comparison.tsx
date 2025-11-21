import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Check, Zap } from "lucide-react";

const comparisonPoints = [
  { feature: "Fast Turnaround", others: false, sinox: true },
  { feature: "Unlimited Revisions", others: false, sinox: true },
  { feature: "Dedicated Account Manager", others: false, sinox: true },
  { feature: "24/7 Support", others: false, sinox: true },
  { feature: "Strategic Content Planning", others: false, sinox: true },
  { feature: "Premium Quality Guarantee", others: false, sinox: true },
  { feature: "Transparent Pricing", others: false, sinox: true },
  { feature: "Advanced Analytics", others: false, sinox: true }
];

export default function Comparison() {
  return (
    <section className="py-20 xl:py-32 bg-background relative overflow-hidden">
      {/* Background Gradient Decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 xl:px-8 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-semibold">
            Comparison
          </Badge>
          <h2 className="text-4xl xl:text-6xl font-bold mb-6">
            Why Choose <span className="gradient-text">Sinox Media</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how we compare to other agencies and discover the Sinox advantage
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* VS Badge - Positioned Above */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary via-accent to-primary text-white text-2xl font-bold shadow-glow pulse-glow">
              VS
            </div>
          </div>

          {/* Comparison Cards Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* Other Agencies Card */}
            <Card 
              className="p-8 xl:p-10 transition-all duration-300 hover:shadow-lg"
              style={{ 
                borderRadius: '1.75rem',
                background: 'linear-gradient(135deg, hsl(0 0% 97%) 0%, hsl(0 0% 94%) 100%)',
                border: '2px solid hsl(0 0% 88%)'
              }}
            >
              <div className="text-center mb-8 pb-6 border-b border-border/50">
                <h3 className="text-3xl font-bold text-muted-foreground mb-2">
                  Other Agencies
                </h3>
                <p className="text-sm text-muted-foreground/70">
                  Standard industry offerings
                </p>
              </div>
              
              <ul className="space-y-1">
                {comparisonPoints.map((point, index) => (
                  <li 
                    key={index} 
                    className="flex items-center gap-4 p-4 rounded-xl transition-colors hover:bg-background/50"
                    style={{
                      background: index % 2 === 0 ? 'transparent' : 'rgba(0, 0, 0, 0.02)'
                    }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                      <X className="w-5 h-5 text-destructive" />
                    </div>
                    <span className="text-base text-muted-foreground line-through">
                      {point.feature}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
            
            {/* Sinox Media Card */}
            <Card 
              className="p-8 xl:p-10 gradient-border shadow-glow pulse-glow relative overflow-hidden group transition-all duration-300 hover:scale-[1.02]"
              style={{ borderRadius: '1.75rem' }}
            >
              {/* Animated Glow Effect */}
              <div className="absolute inset-0 rounded-[1.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 46, 46, 0.05), rgba(255, 138, 0, 0.05), rgba(255, 62, 108, 0.05), rgba(140, 30, 255, 0.05))"
                }}
              />

              {/* Premium Badge */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-50" />
              
              <div className="text-center mb-8 pb-6 border-b border-primary/20 relative z-10">
                <div className="inline-flex items-center gap-2 mb-3">
                  <Zap className="w-6 h-6 text-primary fill-primary" />
                  <h3 className="text-3xl font-bold gradient-text">
                    Sinox Media
                  </h3>
                  <Zap className="w-6 h-6 text-primary fill-primary" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Premium content production excellence
                </p>
              </div>
              
              <ul className="space-y-1 relative z-10">
                {comparisonPoints.map((point, index) => (
                  <li 
                    key={index} 
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 hover:bg-primary/5 hover:translate-x-1"
                    style={{
                      background: index % 2 === 0 ? 'transparent' : 'rgba(255, 46, 46, 0.02)'
                    }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center ring-2 ring-primary/20">
                      <Check className="w-5 h-5 text-primary font-bold" strokeWidth={3} />
                    </div>
                    <span className="text-base font-semibold text-foreground">
                      {point.feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Bottom Accent */}
              <div className="mt-8 pt-6 border-t border-primary/20 text-center relative z-10">
                <p className="text-sm font-medium text-primary">
                  ✨ Everything you need for content success
                </p>
              </div>
            </Card>
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 grid grid-cols-2 xl:grid-cols-4 gap-6">
            <Card className="p-6 text-center bg-secondary/30 border-0" style={{ borderRadius: '1.25rem' }}>
              <div className="text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </Card>
            <Card className="p-6 text-center bg-secondary/30 border-0" style={{ borderRadius: '1.25rem' }}>
              <div className="text-3xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Active Projects</div>
            </Card>
            <Card className="p-6 text-center bg-secondary/30 border-0" style={{ borderRadius: '1.25rem' }}>
              <div className="text-3xl font-bold text-primary mb-1">4,000+</div>
              <div className="text-sm text-muted-foreground">Videos Delivered</div>
            </Card>
            <Card className="p-6 text-center bg-secondary/30 border-0" style={{ borderRadius: '1.25rem' }}>
              <div className="text-3xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
