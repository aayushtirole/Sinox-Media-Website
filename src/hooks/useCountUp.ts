import { useEffect, useRef, useState } from 'react';

interface CountUpOptions {
  start?: number;
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  separator?: string;
  enableScrollSpy?: boolean;
  scrollSpyOnce?: boolean;
}

/**
 * Custom hook for animated counting effect
 * Counts from start to end value with smooth easing animation
 * Supports IntersectionObserver for scroll-triggered animations
 */
export function useCountUp({
  start = 0,
  end,
  duration = 1200,
  decimals = 0,
  suffix = '',
  prefix = '',
  separator = ',',
  enableScrollSpy = true,
  scrollSpyOnce = true,
}: CountUpOptions) {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(!enableScrollSpy);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | undefined>(undefined);

  // Easing function for smooth animation (easeOutExpo)
  const easeOutExpo = (t: number): number => {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  };

  // Format number with separators
  const formatNumber = (num: number): string => {
    const fixed = num.toFixed(decimals);
    const parts = fixed.split('.');
    const integerPart = parts[0]?.replace(/\B(?=(\d{3})+(?!\d))/g, separator) || '0';
    const decimalPart = parts[1] ? `.${parts[1]}` : '';
    return `${prefix}${integerPart}${decimalPart}${suffix}`;
  };

  // Animation logic
  useEffect(() => {
    if (!isVisible || (scrollSpyOnce && hasAnimated)) {
      return;
    }

    const startTime = performance.now();
    const range = end - start;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);
      const currentCount = start + range * easedProgress;

      setCount(currentCount);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
        setHasAnimated(true);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [isVisible, start, end, duration, hasAnimated, scrollSpyOnce]);

  // IntersectionObserver for scroll spy
  useEffect(() => {
    if (!enableScrollSpy || !elementRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (scrollSpyOnce) {
              observer.disconnect();
            }
          } else if (!scrollSpyOnce) {
            setIsVisible(false);
            setCount(start);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px',
      }
    );

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, [enableScrollSpy, scrollSpyOnce, start]);

  return {
    count,
    formattedCount: formatNumber(count),
    elementRef,
    isAnimating: isVisible && !hasAnimated,
  };
}
