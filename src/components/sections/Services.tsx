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
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <Badge variant="secondary" className="mb-4">
                Our Approach
              </Badge>
              <h2 className="text-4xl xl:text-5xl font-bold mb-6">
                Every Video, <br />
                <span className="gradient-text">Expertly Designed</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                We combine creativity with strategy to deliver content that resonates with your audience and drives results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
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
          
          <Card 
            className="p-8 bg-foreground text-background"
            style={{ borderRadius: '1.75rem' }}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-background/20">
                <span className="text-lg font-semibold">Analytics Dashboard</span>
                <Badge className="bg-primary text-primary-foreground">Live</Badge>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="opacity-80">Total Views</span>
                  <span className="text-2xl font-bold">45.2M</span>
                </div>
                <div className="w-full h-2 bg-background/20 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: '85%' }} />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="opacity-80">Engagement Rate</span>
                  <span className="text-2xl font-bold">12.8%</span>
                </div>
                <div className="w-full h-2 bg-background/20 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: '65%' }} />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="opacity-80">Conversion Rate</span>
                  <span className="text-2xl font-bold">8.4%</span>
                </div>
                <div className="w-full h-2 bg-background/20 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: '55%' }} />
                </div>
              </div>
              
              <div className="pt-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm opacity-70">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-sm opacity-70">Satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">24h</div>
                  <div className="text-sm opacity-70">Avg Response</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
