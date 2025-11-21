import { Card } from "@/components/ui/card";
import { useCountUp } from "@/hooks/useCountUp";

interface StatCardProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * StatCard component with animated counting effect
 * Automatically triggers animation when scrolled into view
 * Accessible with ARIA live region for screen readers
 */
export function StatCard({
  value,
  label,
  suffix = '',
  prefix = '',
  decimals = 0,
  duration = 1200,
  className = '',
  style = {},
}: StatCardProps) {
  const { formattedCount, elementRef, isAnimating } = useCountUp({
    start: 0,
    end: value,
    duration,
    decimals,
    suffix,
    prefix,
    separator: ',',
    enableScrollSpy: true,
    scrollSpyOnce: true,
  });

  return (
    <Card
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`p-6 text-center bg-secondary/30 border-0 transition-transform hover:scale-105 ${className}`}
      style={{ borderRadius: '20px', ...style }}
      role="region"
      aria-label={`${label} statistic`}
    >
      <div
        className="text-3xl font-bold text-primary mb-1"
        aria-live="polite"
        aria-atomic="true"
        aria-label={isAnimating ? 'Loading statistic' : `${formattedCount} ${label}`}
      >
        {formattedCount}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </Card>
  );
}
