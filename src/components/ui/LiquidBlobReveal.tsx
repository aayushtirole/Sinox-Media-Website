import { useEffect, useRef, useState } from 'react';

/**
 * LiquidBlobReveal Component
 * 
 * Creates an interactive image reveal effect with an organic, animated blob mask.
 * - Desktop: Blob follows cursor with inertia, revealing color image on hover
 * - Mobile: Tap to toggle full reveal
 * - Fallback: Static color reveal for unsupported environments
 */

interface LiquidBlobRevealProps {
  imageUrl: string;
  alt?: string;
  className?: string;
  // Tunable parameters
  blobSize?: number;        // Base blob diameter in pixels (default: 200)
  blurAmount?: number;      // Gaussian blur radius (default: 40)
  wobbleSpeed?: number;     // Animation speed multiplier (default: 1)
  inertia?: number;         // Cursor follow smoothness 0-1 (default: 0.15)
  hoverThreshold?: number;  // Distance to activate hover (default: 50)
}

export default function LiquidBlobReveal({
  imageUrl,
  alt = 'Interactive reveal image',
  className = '',
  blobSize = 200,
  blurAmount = 40,
  wobbleSpeed = 1,
  inertia = 0.15,
  hoverThreshold = 50,
}: LiquidBlobRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [maskSupported, setMaskSupported] = useState(true);
  
  // Cursor position tracking
  const mousePos = useRef({ x: 0, y: 0 });
  const blobPos = useRef({ x: 0, y: 0 });
  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    // Detect touch device
    const hasTouchScreen = 'ontouchstart' in window || 
      (navigator.maxTouchPoints !== undefined && navigator.maxTouchPoints > 0);
    setIsTouchDevice(hasTouchScreen);
    
    // Check mask support
    const testDiv = document.createElement('div');
    testDiv.style.maskImage = 'url(#test)';
    setMaskSupported(testDiv.style.maskImage !== '');
  }, []);

  useEffect(() => {
    if (!containerRef.current || isTouchDevice) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();

    // Initialize blob position to center
    blobPos.current = {
      x: rect.width / 2,
      y: rect.height / 2,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const containerRect = container.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - containerRect.left,
        y: e.clientY - containerRect.top,
      };

      // Check if mouse is within hover threshold
      const distance = Math.sqrt(
        Math.pow(e.clientX - (containerRect.left + containerRect.width / 2), 2) +
        Math.pow(e.clientY - (containerRect.top + containerRect.height / 2), 2)
      );
      
      setIsHovering(distance < Math.max(containerRect.width, containerRect.height) / 2 + hoverThreshold);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      // Reset blob to center on leave
      const rect = container.getBoundingClientRect();
      mousePos.current = {
        x: rect.width / 2,
        y: rect.height / 2,
      };
    };

    // Smooth animation loop with inertia
    const animate = () => {
      if (!isHovering) {
        // Collapse to center when not hovering
        const rect = container.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        blobPos.current.x += (centerX - blobPos.current.x) * inertia * 2;
        blobPos.current.y += (centerY - blobPos.current.y) * inertia * 2;
      } else {
        // Follow cursor with inertia
        blobPos.current.x += (mousePos.current.x - blobPos.current.x) * inertia;
        blobPos.current.y += (mousePos.current.y - blobPos.current.y) * inertia;
      }

      updateBlobPosition();
      animationFrame.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [isHovering, inertia, hoverThreshold, isTouchDevice]);

  const updateBlobPosition = () => {
    if (!svgRef.current) return;
    
    const circles = svgRef.current.querySelectorAll('circle');
    circles.forEach((circle, index) => {
      circle.setAttribute('cx', String(blobPos.current.x));
      circle.setAttribute('cy', String(blobPos.current.y));
    });
  };

  const handleTouchToggle = () => {
    if (isTouchDevice) {
      setIsRevealed(!isRevealed);
    }
  };

  // Fallback for unsupported environments
  if (!maskSupported) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <img
          src={imageUrl}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden cursor-pointer ${className}`}
      onClick={handleTouchToggle}
      style={{ touchAction: 'manipulation' }}
    >
      {/* Grayscale base layer */}
      <img
        src={imageUrl}
        alt={alt}
        className="w-full h-full object-cover"
        style={{ filter: 'grayscale(100%)' }}
      />

      {/* Color reveal layer with blob mask */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: isHovering || isRevealed ? 1 : 0,
          maskImage: isTouchDevice && isRevealed ? 'none' : 'url(#blob-mask)',
          WebkitMaskImage: isTouchDevice && isRevealed ? 'none' : 'url(#blob-mask)',
        }}
      >
        <img
          src={imageUrl}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* SVG Blob Mask */}
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0 }}
      >
        <defs>
          <filter id="blob-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation={blurAmount} />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
            />
          </filter>
          
          <mask id="blob-mask">
            <g filter="url(#blob-filter)">
              {/* Multiple circles create organic blob shape */}
              <circle
                cx="50%"
                cy="50%"
                r={blobSize * 0.5}
                fill="white"
                className="blob-circle-1"
              >
                <animate
                  attributeName="r"
                  values={`${blobSize * 0.5};${blobSize * 0.55};${blobSize * 0.5}`}
                  dur={`${3 / wobbleSpeed}s`}
                  repeatCount="indefinite"
                />
              </circle>
              
              <circle
                cx="50%"
                cy="50%"
                r={blobSize * 0.4}
                fill="white"
                className="blob-circle-2"
              >
                <animate
                  attributeName="r"
                  values={`${blobSize * 0.4};${blobSize * 0.35};${blobSize * 0.4}`}
                  dur={`${2.5 / wobbleSpeed}s`}
                  repeatCount="indefinite"
                />
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0,0; 15,10; 0,0"
                  dur={`${4 / wobbleSpeed}s`}
                  repeatCount="indefinite"
                />
              </circle>
              
              <circle
                cx="50%"
                cy="50%"
                r={blobSize * 0.45}
                fill="white"
                className="blob-circle-3"
              >
                <animate
                  attributeName="r"
                  values={`${blobSize * 0.45};${blobSize * 0.5};${blobSize * 0.45}`}
                  dur={`${3.5 / wobbleSpeed}s`}
                  repeatCount="indefinite"
                />
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0,0; -10,15; 0,0"
                  dur={`${3.8 / wobbleSpeed}s`}
                  repeatCount="indefinite"
                />
              </circle>
              
              <circle
                cx="50%"
                cy="50%"
                r={blobSize * 0.35}
                fill="white"
                className="blob-circle-4"
              >
                <animate
                  attributeName="r"
                  values={`${blobSize * 0.35};${blobSize * 0.4};${blobSize * 0.35}`}
                  dur={`${2.8 / wobbleSpeed}s`}
                  repeatCount="indefinite"
                />
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0,0; 12,-8; 0,0"
                  dur={`${3.2 / wobbleSpeed}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </mask>
        </defs>
      </svg>

      {/* Touch instruction overlay */}
      {isTouchDevice && !isRevealed && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 pointer-events-none">
          <span className="text-white text-sm font-medium px-4 py-2 bg-black/50 rounded-full">
            Tap to reveal
          </span>
        </div>
      )}
    </div>
  );
}
