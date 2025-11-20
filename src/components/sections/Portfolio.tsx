import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

const shortFormItems = [
  {
    image: "https://miaoda-site-img.s3cdn.medo.dev/images/70eff5cb-49bc-4192-81cb-5e7fd9e2e7e0.jpg",
    views: "300K+",
    type: "30s Reels"
  },
  {
    image: "https://miaoda-site-img.s3cdn.medo.dev/images/fa3f4d5a-62c8-49ca-a969-bc87f9a88ec3.jpg",
    views: "450K+",
    type: "60s Shorts"
  },
  {
    image: "https://miaoda-site-img.s3cdn.medo.dev/images/39eec0a7-4401-4bd1-85bc-f241994eb8ca.jpg",
    views: "520K+",
    type: "45s Reels"
  }
];

export default function Portfolio() {
  return (
    <section id="shortform" className="py-20 xl:py-32 bg-background">
      <div className="container mx-auto px-4 xl:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-semibold">
            Short-Form Content
          </Badge>
          <h2 className="text-4xl xl:text-5xl font-bold mb-4">
            Featured Reels
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Short, high-retention edits — perfect for Reels & Shorts
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {shortFormItems.map((item, index) => (
            <Card 
              key={index}
              className="gradient-border overflow-hidden group cursor-pointer relative"
              style={{ borderRadius: '1.5rem' }}
            >
              {/* Curved Corner Indicators */}
              <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none z-20">
                <svg viewBox="0 0 64 64" className="w-full h-full">
                  <path
                    d="M 0 0 L 0 32 Q 0 0 32 0 L 0 0"
                    fill="none"
                    stroke="url(#gradient-tl-portfolio)"
                    strokeWidth="3"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <defs>
                    <linearGradient id="gradient-tl-portfolio" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF2E2E" />
                      <stop offset="100%" stopColor="#FF8A00" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              
              <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none z-20">
                <svg viewBox="0 0 64 64" className="w-full h-full">
                  <path
                    d="M 64 0 L 32 0 Q 64 0 64 32 L 64 0"
                    fill="none"
                    stroke="url(#gradient-tr-portfolio)"
                    strokeWidth="3"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <defs>
                    <linearGradient id="gradient-tr-portfolio" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF8A00" />
                      <stop offset="100%" stopColor="#FF3E6C" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              
              <div className="absolute bottom-0 left-0 w-16 h-16 pointer-events-none z-20">
                <svg viewBox="0 0 64 64" className="w-full h-full">
                  <path
                    d="M 0 64 L 0 32 Q 0 64 32 64 L 0 64"
                    fill="none"
                    stroke="url(#gradient-bl-portfolio)"
                    strokeWidth="3"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <defs>
                    <linearGradient id="gradient-bl-portfolio" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FF2E2E" />
                      <stop offset="100%" stopColor="#8C1EFF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              
              <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none z-20">
                <svg viewBox="0 0 64 64" className="w-full h-full">
                  <path
                    d="M 64 64 L 32 64 Q 64 64 64 32 L 64 64"
                    fill="none"
                    stroke="url(#gradient-br-portfolio)"
                    strokeWidth="3"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <defs>
                    <linearGradient id="gradient-br-portfolio" x1="100%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#FF3E6C" />
                      <stop offset="100%" stopColor="#8C1EFF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="relative aspect-[9/16] overflow-hidden">
                <img 
                  src={item.image}
                  alt={`Short-form content ${index + 1}`}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-background/90 backdrop-blur-sm text-foreground border-0 shadow-lg text-xs">
                    {item.type}
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4">
                  <Badge className="bg-primary/90 backdrop-blur-sm text-white border-0 shadow-lg">
                    <Eye className="w-3 h-3 mr-1" />
                    {item.views} Views
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" className="px-8 py-6 rounded-xl border-2 border-foreground hover:bg-secondary transition-smooth">
            View All Reels
          </Button>
        </div>
      </div>
    </section>
  );
}
