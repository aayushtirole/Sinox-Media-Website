import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Award, Headphones } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Reliability",
    description: "Consistent delivery on time, every time"
  },
  {
    icon: Zap,
    title: "Fast Production",
    description: "Quick turnaround without compromising quality"
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Industry-leading standards in every frame"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Always here when you need us"
  }
];

export default function Services() {
  return (
    <section className="py-20 xl:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 xl:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="text-center">
              <Badge variant="secondary" className="mb-4">
                Our Approach
              </Badge>
              <h2 className="text-4xl xl:text-5xl font-bold mb-6">
                Every Video, <br />
                <span className="gradient-text">Expertly Designed</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We combine creativity with strategy to deliver content that resonates with your audience and drives results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 pt-8">
              {services.map((service, index) => (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-float transition-smooth cursor-pointer"
                  style={{ borderRadius: '1.5rem' }}
                >
                  <service.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
