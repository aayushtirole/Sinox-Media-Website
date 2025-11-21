import { Card } from "@/components/ui/card";
import { StatCard } from "@/components/ui/stat-card";
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
      <div className="container mx-auto px-4 xl:px-8 relative z-10">
        {/* Header with Subtle Gradient Behind Text */}
        <div className="text-center mb-20 relative">
          {/* Removed Badge - keeping only heading and description */}
          
          {/* Subtle radial gradient behind heading only */}
          <div className="relative inline-block">
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 50% 30%, rgba(255, 138, 0, 0.12), rgba(255, 62, 108, 0.08), transparent 70%)',
                filter: 'blur(40px)',
                transform: 'scale(1.5)',
                zIndex: -1
              }}
            />
            <h2 
              className="font-extrabold mb-4 relative"
              style={{
                fontSize: 'clamp(34px, 5vw, 48px)',
                fontWeight: 800,
                lineHeight: 1.2
              }}
            >
              Why Choose <span className="gradient-text-enhanced">Sinox Media</span>
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" style={{ lineHeight: 1.5 }}>
            See how we compare to other agencies and discover the Sinox advantage
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          {/* VS Badge - Overlapping Cards with Enhanced Design */}
          <div className="absolute left-1/2 -translate-x-1/2 z-20 flex justify-center" style={{ top: '-32px' }}>
            <div 
              className="vs-badge flex items-center justify-center rounded-full text-white font-bold shadow-vs transition-transform hover:scale-110"
              style={{
                width: 'clamp(44px, 5vw, 64px)',
                height: 'clamp(44px, 5vw, 64px)',
                fontSize: 'clamp(16px, 2vw, 20px)',
                background: 'radial-gradient(circle at 30% 30%, rgba(255, 46, 46, 1), rgba(255, 62, 108, 0.9))',
                boxShadow: '0 8px 24px rgba(255, 46, 46, 0.4), 0 0 0 4px rgba(255, 255, 255, 0.1), inset 0 2px 4px rgba(255, 255, 255, 0.3)',
              }}
              role="img"
              aria-label="Versus"
            >
              VS
            </div>
          </div>

          {/* Comparison Cards Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 pt-8">
            {/* Other Agencies Card */}
            <Card 
              className="comparison-card transition-all duration-300 hover:shadow-lg focus-within:ring-2 focus-within:ring-border"
              tabIndex={0}
              style={{ 
                borderRadius: '28px',
                background: '#f7f7f7',
                border: '1px solid #e5e5e5',
                padding: 'clamp(32px, 4vw, 48px)'
              }}
            >
              <div className="text-center mb-8 pb-6" style={{ borderBottom: '1px solid #e0e0e0' }}>
                <h3 
                  className="font-bold text-muted-foreground mb-2"
                  style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 700 }}
                >
                  Other Agencies
                </h3>
                <p className="text-sm text-muted-foreground/70" style={{ fontSize: '14px', lineHeight: 1.5 }}>
                  Standard industry offerings
                </p>
              </div>
              
              <ul className="space-y-5">
                {comparisonPoints.map((point, index) => (
                  <li 
                    key={index} 
                    className="flex items-center gap-4 transition-colors"
                    style={{
                      paddingLeft: '4px',
                      lineHeight: 1.5
                    }}
                  >
                    <div 
                      className="flex-shrink-0 flex items-center justify-center rounded-full"
                      style={{
                        width: '32px',
                        height: '32px',
                        background: 'rgba(239, 68, 68, 0.1)'
                      }}
                    >
                      <X className="w-4 h-4" style={{ color: '#ef4444', strokeWidth: 2.5 }} />
                    </div>
                    <span 
                      className="text-muted-foreground line-through"
                      style={{ 
                        fontSize: 'clamp(14px, 1.5vw, 16px)',
                        fontWeight: 400,
                        textDecorationColor: '#d1d5db',
                        textDecorationThickness: '1px'
                      }}
                    >
                      {point.feature}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
            
            {/* Sinox Media Card */}
            <Card 
              className="comparison-card sinox-card relative overflow-hidden group transition-all duration-300 hover:scale-[1.01] focus-within:ring-2 focus-within:ring-primary"
              tabIndex={0}
              style={{ 
                borderRadius: '28px',
                background: '#ffffff',
                border: '2px solid transparent',
                backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #FF2E2E 0%, #FF3E6C 33%, #FF8A00 66%, #8C1EFF 100%)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
                padding: 'clamp(32px, 4vw, 48px)',
                boxShadow: '0 20px 40px rgba(255, 46, 46, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
              }}
            >
              {/* Subtle inner glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 50% 0%, rgba(255, 46, 46, 0.03), transparent 60%)",
                  borderRadius: '28px'
                }}
              />
              
              <div className="text-center mb-8 pb-6 relative z-10" style={{ borderBottom: '1px solid rgba(255, 46, 46, 0.15)' }}>
                <div className="inline-flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-primary fill-primary" />
                  <h3 
                    className="font-bold gradient-text-enhanced"
                    style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 700 }}
                  >
                    Sinox Media
                  </h3>
                  <Zap className="w-5 h-5 text-primary fill-primary" />
                </div>
                <p className="text-sm text-muted-foreground" style={{ fontSize: '14px', lineHeight: 1.5 }}>
                  Premium content production excellence
                </p>
              </div>
              
              <ul className="space-y-5 relative z-10">
                {comparisonPoints.map((point, index) => (
                  <li 
                    key={index} 
                    className="flex items-center gap-4 transition-all duration-200 hover:translate-x-1"
                    style={{
                      paddingLeft: '4px',
                      lineHeight: 1.5
                    }}
                  >
                    <div 
                      className="flex-shrink-0 flex items-center justify-center rounded-full"
                      style={{
                        width: '32px',
                        height: '32px',
                        background: 'rgba(255, 46, 46, 0.1)',
                        border: '2px solid rgba(255, 46, 46, 0.2)'
                      }}
                    >
                      <Check className="w-4 h-4 text-primary" strokeWidth={3} />
                    </div>
                    <span 
                      className="font-semibold text-foreground"
                      style={{ 
                        fontSize: 'clamp(14px, 1.5vw, 16px)',
                        fontWeight: 600
                      }}
                    >
                      {point.feature}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Bottom Stats with Animated Counting */}
          <div className="mt-20 grid grid-cols-2 xl:grid-cols-4 gap-6">
            <StatCard
              value={100}
              label="Client Satisfaction"
              suffix="%"
              duration={1400}
            />
            <StatCard
              value={50}
              label="Active Projects"
              suffix="+"
              duration={1200}
            />
            <StatCard
              value={4000}
              label="Videos Delivered"
              suffix="+"
              duration={1600}
            />
            <StatCard
              value={24}
              label="Support Available"
              suffix="/7"
              duration={1000}
            />
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        /* Enhanced gradient text with better legibility */
        .gradient-text-enhanced {
          background: linear-gradient(135deg, #FF2E2E 0%, #FF3E6C 50%, #FF8A00 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 1px 0 rgba(0, 0, 0, 0.04);
          filter: contrast(1.1) brightness(1.05);
        }

        /* VS Badge shadow */
        .shadow-vs {
          box-shadow: 
            0 8px 24px rgba(255, 46, 46, 0.4),
            0 0 0 4px rgba(255, 255, 255, 0.1),
            inset 0 2px 4px rgba(255, 255, 255, 0.3);
        }

        /* Card focus states */
        .comparison-card:focus {
          outline: none;
        }

        /* Responsive adjustments */
        @media (max-width: 1279px) {
          .vs-badge {
            position: relative !important;
            top: 0 !important;
            transform: none !important;
            margin: 0 auto 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
