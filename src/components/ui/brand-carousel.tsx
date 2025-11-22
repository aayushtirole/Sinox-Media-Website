import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface BrandItem {
  id: string;
  name: string;
  logo?: string;
}

interface BrandCarouselProps {
  brands: BrandItem[];
  speed?: number;
  className?: string;
}

export default function BrandCarousel({ 
  brands, 
  speed = 30,
  className 
}: BrandCarouselProps) {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;

    const animate = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += 0.5;
        
        const maxScroll = scrollContainer.scrollWidth / 2;
        
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPaused, speed]);

  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <div className={cn("w-full overflow-hidden", className)}>
      <div
        ref={scrollRef}
        className="flex gap-8 xl:gap-12 overflow-x-hidden scrollbar-hide"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          scrollBehavior: 'auto',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {duplicatedBrands.map((brand, index) => (
          <div
            key={`${brand.id}-${index}`}
            className="flex-shrink-0 flex items-center justify-center min-w-[120px] xl:min-w-[150px] transition-smooth hover-scale cursor-pointer"
          >
            {brand.logo ? (
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-8 xl:h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-smooth"
              />
            ) : (
              <div className="text-2xl font-bold opacity-60 hover:opacity-100 transition-smooth">
                {brand.name}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
