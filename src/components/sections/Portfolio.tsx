import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    image: "https://miaoda-site-img.s3cdn.medo.dev/images/70eff5cb-49bc-4192-81cb-5e7fd9e2e7e0.jpg",
    views: "2.5M",
    title: "Brand Campaign"
  },
  {
    id: 2,
    image: "https://miaoda-site-img.s3cdn.medo.dev/images/fa3f4d5a-62c8-49ca-a969-bc87f9a88ec3.jpg",
    views: "1.8M",
    title: "Social Content"
  },
  {
    id: 3,
    image: "https://miaoda-site-img.s3cdn.medo.dev/images/39eec0a7-4401-4bd1-85bc-f241994eb8ca.jpg",
    views: "3.2M",
    title: "Marketing Video"
  }
];

export default function Portfolio() {
  return (
    <section className="py-20 xl:py-32 bg-background">
      <div className="container mx-auto px-4 xl:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl xl:text-5xl font-bold mb-4">Featured Reels</h2>
          <p className="text-xl text-muted-foreground">Our best work in action</p>
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Card 
              key={item.id}
              className="gradient-border overflow-hidden group cursor-pointer transition-smooth hover:scale-105 shadow-glow-hover"
              style={{ borderRadius: '1.75rem' }}
            >
              <div className="relative aspect-[9/16] overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <Badge 
                  className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm text-foreground"
                >
                  <Eye className="w-4 h-4 mr-1" />
                  {item.views} Views
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
