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

const longFormSamples = [
  {
    image: "https://miaoda-site-img.s3cdn.medo.dev/images/59a88efd-b9dd-45d2-9af9-2c5dae8a5382.jpg",
    title: "Brand Documentary",
    duration: "15:42"
  },
  {
    image: "https://miaoda-site-img.s3cdn.medo.dev/images/70eff5cb-49bc-4192-81cb-5e7fd9e2e7e0.jpg",
    title: "Podcast Interview",
    duration: "12:34"
  },
  {
    image: "https://miaoda-site-img.s3cdn.medo.dev/images/fa3f4d5a-62c8-49ca-a969-bc87f9a88ec3.jpg",
    title: "Product Deep Dive",
    duration: "18:20"
  }
];

export default function Portfolio() {
  return (
    <>
      {/* SHORT-FORM PORTFOLIO */}
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
                className="gradient-border overflow-hidden group cursor-pointer"
                style={{ borderRadius: '1.5rem' }}
              >
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

      {/* BRIDGE TEXT */}
      <section className="py-12 xl:py-16 bg-secondary/30">
        <div className="container mx-auto px-4 xl:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl xl:text-3xl font-bold mb-3">
              Content That Works Everywhere
            </h3>
            <p className="text-lg text-muted-foreground">
              Short-form for reach. Long-form for depth, trust, and conversions.
            </p>
          </div>
        </div>
      </section>

      {/* LONG-FORM PORTFOLIO */}
      <section id="longform" className="py-20 xl:py-32 bg-background">
        <div className="container mx-auto px-4 xl:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl xl:text-5xl font-bold mb-4">
              Long-Form Videos & Podcasts
            </h2>
          </div>
          
          {/* Simple 3-Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {longFormSamples.map((sample, index) => (
              <Card 
                key={index}
                className="overflow-hidden group cursor-pointer hover:shadow-float transition-smooth"
                style={{ borderRadius: '1.5rem' }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={sample.image}
                    alt={sample.title}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-bold text-base mb-2">{sample.title}</p>
                    <Badge className="bg-primary/90 text-white border-0 text-sm">
                      {sample.duration}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
