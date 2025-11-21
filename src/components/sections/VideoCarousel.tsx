import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";
import { useRef } from "react";

interface VideoCard {
  id: number;
  title: string;
  duration: string;
  views: string;
  thumbnail: string;
  category: string;
}

const videoCards: VideoCard[] = [
  {
    id: 1,
    title: "Brand Documentary",
    duration: "15:42",
    views: "300K+ Views",
    thumbnail: "https://miaoda-site-img.s3cdn.medo.dev/images/9a659321-d8f4-475b-b770-69a68e3b002e.jpg",
    category: "30s Reels"
  },
  {
    id: 2,
    title: "Podcast Interview",
    duration: "12:34",
    views: "450K+ Views",
    thumbnail: "https://miaoda-site-img.s3cdn.medo.dev/images/aa198532-9f17-4f57-a5f4-fbfe761cd280.jpg",
    category: "60s Shorts"
  },
  {
    id: 3,
    title: "Product Deep Dive",
    duration: "18:20",
    views: "520K+ Views",
    thumbnail: "https://miaoda-site-img.s3cdn.medo.dev/images/8e8f9255-de16-4555-b4d7-47833f733a3d.jpg",
    category: "45s Reels"
  },
  {
    id: 4,
    title: "Behind The Scenes",
    duration: "08:15",
    views: "280K+ Views",
    thumbnail: "https://miaoda-site-img.s3cdn.medo.dev/images/4e54de14-9800-42ac-8f1a-f7e6b40f481c.jpg",
    category: "30s Reels"
  },
  {
    id: 5,
    title: "Client Success Story",
    duration: "14:50",
    views: "390K+ Views",
    thumbnail: "https://miaoda-site-img.s3cdn.medo.dev/images/aeb943e8-48d2-4c23-bf29-5e2acb36d745.jpg",
    category: "60s Shorts"
  }
];

export default function VideoCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollPosition = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 xl:py-32 bg-background">
      <div className="container mx-auto px-4 xl:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl xl:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Video Collection</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Swipe through our premium video portfolio showcasing diverse content styles
          </p>
        </div>

        {/* Scrollable Container */}
        <div className="relative">
          {/* Left Scroll Button */}
          <button
            onClick={() => scroll('left')}
            className="hidden xl:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-background shadow-float items-center justify-center hover:bg-primary hover:text-white transition-smooth"
            aria-label="Scroll left"
          >
            ←
          </button>

          {/* Right Scroll Button */}
          <button
            onClick={() => scroll('right')}
            className="hidden xl:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-background shadow-float items-center justify-center hover:bg-primary hover:text-white transition-smooth"
            aria-label="Scroll right"
          >
            →
          </button>

          {/* Cards Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {videoCards.map((video) => (
              <Card
                key={video.id}
                className="flex-shrink-0 w-[340px] xl:w-[400px] gradient-border overflow-hidden group cursor-pointer hover:shadow-float transition-smooth snap-start relative video-card-swipe p-0"
                style={{ borderRadius: '1.5rem' }}
              >
                {/* Curved Corner Indicators */}
                <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none z-20">
                  <svg viewBox="0 0 64 64" className="w-full h-full">
                    <path
                      d="M 0 0 L 0 32 Q 0 0 32 0 L 0 0"
                      fill="none"
                      stroke="url(#gradient-tl)"
                      strokeWidth="3"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <defs>
                      <linearGradient id="gradient-tl" x1="0%" y1="0%" x2="100%" y2="100%">
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
                      stroke="url(#gradient-tr)"
                      strokeWidth="3"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <defs>
                      <linearGradient id="gradient-tr" x1="0%" y1="0%" x2="100%" y2="100%">
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
                      stroke="url(#gradient-bl)"
                      strokeWidth="3"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <defs>
                      <linearGradient id="gradient-bl" x1="0%" y1="100%" x2="100%" y2="0%">
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
                      stroke="url(#gradient-br)"
                      strokeWidth="3"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <defs>
                      <linearGradient id="gradient-br" x1="100%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#FF3E6C" />
                        <stop offset="100%" stopColor="#8C1EFF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="relative aspect-video overflow-hidden rounded-[1.5rem] z-10">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Title and Duration */}
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <h3 className="text-white font-bold text-xl mb-2">
                      {video.title}
                    </h3>
                    <Badge className="bg-primary/90 text-white border-0">
                      {video.duration}
                    </Badge>
                  </div>
                  
                  {/* Category Badge - Top Left */}
                  <div className="absolute top-4 left-4 z-20">
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                      {video.category}
                    </Badge>
                  </div>
                  
                  {/* Views Badge - Bottom Right */}
                  <div className="absolute bottom-4 right-4 z-20">
                    <Badge className="bg-primary/90 text-white border-0 flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {video.views}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            ← Swipe to explore more videos →
          </p>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
