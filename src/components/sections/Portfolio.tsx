import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { getPortfolioItems } from "@/db/api";
import type { PortfolioItem } from "@/types/types";

export default function Portfolio() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPortfolioItems() {
      setLoading(true);
      const items = await getPortfolioItems();
      setPortfolioItems(items);
      setLoading(false);
    }
    loadPortfolioItems();
  }, []);

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
        
        {/* Scrollable Container */}
        <div className="relative mb-12">
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
            {loading ? (
              <div className="flex items-center justify-center w-full py-20">
                <p className="text-muted-foreground">Loading portfolio...</p>
              </div>
            ) : portfolioItems.length === 0 ? (
              <div className="flex items-center justify-center w-full py-20">
                <p className="text-muted-foreground">No portfolio items available</p>
              </div>
            ) : (
              portfolioItems.map((item) => (
              <Card 
                key={item.id}
                className="flex-shrink-0 w-[300px] xl:w-[360px] overflow-hidden group cursor-pointer relative snap-start p-0 border-2 border-border/40 hover:border-border/60 transition-colors duration-300"
                style={{ borderRadius: '1.5rem' }}
              >
                {/* Curved Corner Indicators */}
                <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none z-20">
                  <svg viewBox="0 0 64 64" className="w-full h-full">
                    <path
                      d="M 0 0 L 0 32 Q 0 0 32 0 L 0 0"
                      fill="none"
                      stroke="url(#gradient-tl-portfolio-${item.id})"
                      strokeWidth="3"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <defs>
                      <linearGradient id={`gradient-tl-portfolio-${item.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
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
                      stroke="url(#gradient-tr-portfolio-${item.id})"
                      strokeWidth="3"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <defs>
                      <linearGradient id={`gradient-tr-portfolio-${item.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
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
                      stroke="url(#gradient-bl-portfolio-${item.id})"
                      strokeWidth="3"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <defs>
                      <linearGradient id={`gradient-bl-portfolio-${item.id}`} x1="0%" y1="100%" x2="100%" y2="0%">
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
                      stroke="url(#gradient-br-portfolio-${item.id})"
                      strokeWidth="3"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <defs>
                      <linearGradient id={`gradient-br-portfolio-${item.id}`} x1="100%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#FF3E6C" />
                        <stop offset="100%" stopColor="#8C1EFF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="relative aspect-[9/16] overflow-hidden rounded-[1.5rem] z-10">
                  <img 
                    src={item.image_url}
                    alt={item.title || item.type || "Portfolio content"}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <Badge className="bg-background/90 backdrop-blur-sm text-foreground border-0 shadow-lg text-xs">
                      {item.type}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 z-20">
                    <Badge className="bg-primary/90 backdrop-blur-sm text-white border-0 shadow-lg">
                      <Eye className="w-3 h-3 mr-1" />
                      {item.views} Views
                    </Badge>
                  </div>
                </div>
              </Card>
            )))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            ← Swipe to explore more reels →
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
