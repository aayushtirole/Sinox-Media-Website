import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";

const moreItems = [
  {
    id: 1,
    image: "https://miaoda-site-img.s3cdn.medo.dev/images/826e5ca1-86cc-4b09-b1d9-7f15a0a99daf.jpg",
    views: "1.2M",
    title: "Product Launch"
  },
  {
    id: 2,
    image: "https://miaoda-site-img.s3cdn.medo.dev/images/a5b31fce-3b61-4127-9118-cdbbe839c6e0.jpg",
    views: "980K",
    title: "Corporate Video"
  },
  {
    id: 3,
    image: "https://miaoda-site-img.s3cdn.medo.dev/images/9e551523-bf3f-4554-804e-c0e3c2b4f53a.jpg",
    views: "1.5M",
    title: "Influencer Content"
  },
  {
    id: 4,
    image: "https://miaoda-site-img.s3cdn.medo.dev/images/b3a767c1-f19b-4e1e-be6f-18c21af1efd1.jpg",
    views: "2.1M",
    title: "Behind The Scenes"
  }
];

export default function MorePortfolio() {
  return (
    <section className="py-20 xl:py-32 bg-background">
      <div className="container mx-auto px-4 xl:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl xl:text-5xl font-bold mb-4">More From Our Portfolio</h2>
          <p className="text-xl text-muted-foreground">Explore our diverse range of content</p>
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {moreItems.map((item) => (
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
                  className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm text-foreground font-bold"
                >
                  <Eye className="w-4 h-4 mr-1" />
                  {item.views}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
