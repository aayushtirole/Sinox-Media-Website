import { Card } from "@/components/ui/card";
import { X, Check } from "lucide-react";

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
    <section className="py-20 xl:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 xl:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl xl:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">Sinox Media</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            See how we compare to other agencies
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
            <Card 
              className="p-8"
              style={{ 
                borderRadius: '1.75rem',
                background: 'hsl(0 0% 96%)'
              }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center">Other Agencies</h3>
              <ul className="space-y-4">
                {comparisonPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <X className="w-5 h-5 text-destructive flex-shrink-0" />
                    <span>{point.feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
            
            <Card 
              className="gradient-border p-8 shadow-glow"
              style={{ borderRadius: '1.75rem' }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center gradient-text">Sinox Media</h3>
              <ul className="space-y-4">
                {comparisonPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium">{point.feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold shadow-glow">
              VS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
