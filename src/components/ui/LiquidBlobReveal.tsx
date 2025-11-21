import { useRef, useEffect, useMemo } from "react";

/**
 * LiquidBlobReveal Component
 * 
 * Creates an interactive image reveal effect with an organic, animated blob mask.
 * - Desktop: Blob follows cursor with inertia, revealing color image on hover
 * - Mobile: Tap to toggle full reveal
 * - Fallback: Static color reveal for unsupported environments
 * 
 * Props:
 * - imageUrl (string): URL of the image to show
 * - alt (string): Alt text for accessibility
 * - className (string): Tailwind classes like "aspect-[4/5]"
 * - blobSize (number): Base radius in px (default: 250)
 * - blurAmount (number): Gaussian blur stdDeviation (default: 45)
 * - wobbleSpeed (number): Multiplier for wobble speed 0.4-1.6 (default: 0.8)
 * - inertia (number): Lerp factor 0-1, smaller = heavier inertia (default: 0.12)
 * - hoverThreshold (number): Px threshold to activate (default: 100)
 */

interface LiquidBlobRevealProps {
  imageUrl: string;
  alt?: string;
  className?: string;
  blobSize?: number;
  blurAmount?: number;
  wobbleSpeed?: number;
  inertia?: number;
  hoverThreshold?: number;
  imageStyle?: React.CSSProperties;
}

export default function LiquidBlobReveal({
  imageUrl,
  alt = "Interactive reveal image",
  className = "",
  blobSize = 250,
  blurAmount = 45,
  wobbleSpeed = 0.8,
  inertia = 0.12,
  hoverThreshold = 100,
  imageStyle,
}: LiquidBlobRevealProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  
  // Generate unique IDs per instance to avoid conflicts
  const svgId = useMemo(() => `maskBlob_${Math.random().toString(36).slice(2, 9)}`, []);
  const groupId = useMemo(() => `maskShapes_${Math.random().toString(36).slice(2, 9)}`, []);
  const filterId = useMemo(() => `blobFilter_${Math.random().toString(36).slice(2, 9)}`, []);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    // Get elements
    const grayImg = wrap.querySelector(".lbr-gray") as HTMLImageElement;
    const shapesGroup = wrap.querySelector(`#${groupId}`) as SVGGElement;
    const circles = Array.from(shapesGroup.querySelectorAll("circle"));

    // Configuration
    const config = {
      circleR: blobSize,
      blur: blurAmount,
      inertia: Math.max(0.01, Math.min(0.5, inertia)),
      hoverDelay: 50,
      activeRadiusMul: 1.0,
      hoverThreshold,
      wobbleSpeed: Math.max(0.4, Math.min(1.6, wobbleSpeed)),
    };

    // Apply mask to the gray image (userSpaceOnUse mask)
    try {
      grayImg.style.webkitMask = `url(#${svgId})`;
      grayImg.style.mask = `url(#${svgId})`;
    } catch (e) {
      // Fallback handled below
    }

    // Check mask support
    const supportsMask =
      typeof CSS !== "undefined" &&
      (CSS.supports("mask-image", `url(#${svgId})`) ||
        CSS.supports("-webkit-mask-image", `url(#${svgId})`));

    // Helper to compute mask scale (1000x1000 mask space)
    function getMaskScale() {
      const rect = wrap.getBoundingClientRect();
      return {
        scaleX: 1000 / rect.width,
        scaleY: 1000 / rect.height,
        left: rect.left,
        top: rect.top,
      };
    }

    function setCirclePositions(cx_px: number, cy_px: number, r_px: number) {
      const sc = getMaskScale();
      const mx = (cx_px - sc.left) * sc.scaleX;
      const my = (cy_px - sc.top) * sc.scaleY;
      const spread = r_px * 0.32;
      
      const positions = [
        { cx: mx - spread * 0.2, cy: my - spread * 0.12, r: r_px * 1.0 },
        { cx: mx + spread * 0.45, cy: my + spread * 0.05, r: r_px * 0.72 },
        { cx: mx - spread * 0.05, cy: my + spread * 0.55, r: r_px * 0.6 },
      ];
      
      positions.forEach((p, i) => {
        const c = circles[i];
        if (!c) return;
        c.setAttribute("cx", Math.round(p.cx).toString());
        c.setAttribute("cy", Math.round(p.cy).toString());
        c.setAttribute("r", Math.round(p.r).toString());
        c.style.opacity = "1";
      });
    }

    // Lerp variables
    let target = { x: -9999, y: -9999, r: 10 };
    let current = { x: target.x, y: target.y, r: target.r };
    let rafId: number | null = null;
    let activateTimeout: NodeJS.Timeout | null = null;

    function animateLoop() {
      const lerp = config.inertia;
      current.x += (target.x - current.x) * lerp;
      current.y += (target.y - current.y) * lerp;
      current.r += (target.r - current.r) * lerp;
      setCirclePositions(current.x, current.y, current.r);
      rafId = requestAnimationFrame(animateLoop);
    }

    function activate() {
      if (!wrap.classList.contains("active")) {
        wrap.classList.add("active");
        wrap.setAttribute("aria-pressed", "true");
        if (!rafId) rafId = requestAnimationFrame(animateLoop);
      }
    }

    function deactivate() {
      wrap.classList.remove("active");
      wrap.setAttribute("aria-pressed", "false");
      circles.forEach((c) => (c.style.opacity = "0"));
      setTimeout(() => {
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      }, 360);
    }

    // Pointer handling
    function moveHandler(e: MouseEvent | TouchEvent) {
      const isTouch = "touches" in e;
      const clientX = isTouch ? e.touches[0].clientX : e.clientX;
      const clientY = isTouch ? e.touches[0].clientY : e.clientY;
      target.x = clientX;
      target.y = clientY;
      target.r = config.circleR;
      if (activateTimeout) clearTimeout(activateTimeout);
      activateTimeout = setTimeout(activate, config.hoverDelay);
    }

    function leaveHandler() {
      if (activateTimeout) clearTimeout(activateTimeout);
      deactivate();
    }

    function clickToggle(e: MouseEvent | TouchEvent) {
      if (!supportsMask) {
        // Fallback: toggle active class and remove grayscale via CSS
        wrap.classList.toggle("active");
        return;
      }
      // Center on click if toggling
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      target.x = clientX;
      target.y = clientY;
      target.r = config.circleR * 1.05;
      if (wrap.classList.contains("active")) deactivate();
      else activate();
    }

    function keyHandler(e: KeyboardEvent) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const r = wrap.getBoundingClientRect();
        target.x = r.left + r.width / 2;
        target.y = r.top + r.height / 2;
        activate();
        setTimeout(deactivate, 1300);
      }
      if (e.key === "Escape") deactivate();
    }

    // Event listeners
    wrap.addEventListener("mousemove", moveHandler as EventListener);
    wrap.addEventListener("touchstart", (ev) => {
      moveHandler(ev as TouchEvent);
      clickToggle(ev as TouchEvent);
    }, { passive: true });
    wrap.addEventListener("touchmove", moveHandler as EventListener, { passive: true });
    wrap.addEventListener("mouseleave", leaveHandler);
    wrap.addEventListener("blur", leaveHandler);
    wrap.addEventListener("click", clickToggle as EventListener);
    wrap.addEventListener("keydown", keyHandler as EventListener);

    // Start small off-screen so nothing visible until interaction
    const rect = wrap.getBoundingClientRect();
    target.x = rect.left - 300;
    target.y = rect.top - 300;
    target.r = 10;
    current.x = target.x;
    current.y = target.y;
    current.r = target.r;

    // Fallback CSS if mask unsupported
    if (!supportsMask) {
      grayImg.style.webkitMask = "none";
      grayImg.style.mask = "none";
      const fallbackStyle = document.createElement("style");
      fallbackStyle.textContent = `
        .lbr-wrap.active .lbr-gray { filter: none !important; transition: filter 0.28s ease; }
      `;
      document.head.appendChild(fallbackStyle);
    }

    // Cleanup
    return () => {
      wrap.removeEventListener("mousemove", moveHandler as EventListener);
      wrap.removeEventListener("touchstart", moveHandler as EventListener);
      wrap.removeEventListener("touchmove", moveHandler as EventListener);
      wrap.removeEventListener("mouseleave", leaveHandler);
      wrap.removeEventListener("click", clickToggle as EventListener);
      wrap.removeEventListener("keydown", keyHandler as EventListener);
      if (rafId) cancelAnimationFrame(rafId);
      if (activateTimeout) clearTimeout(activateTimeout);
    };
  }, [svgId, groupId, blobSize, blurAmount, wobbleSpeed, inertia, hoverThreshold, filterId]);

  return (
    <div
      ref={wrapRef}
      className={`lbr-wrap relative overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${className}`}
      tabIndex={0}
      role="button"
      aria-label="Interactive image reveal"
      aria-pressed="false"
    >
      {/* Color image underneath */}
      <img
        src={imageUrl}
        alt={alt}
        className="lbr-color w-full h-full object-cover"
        style={imageStyle}
        draggable={false}
      />

      {/* Grayscale image on top that will be masked */}
      <img
        src={imageUrl}
        alt=""
        className="lbr-gray absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ filter: "grayscale(100%)", ...imageStyle }}
        draggable={false}
        aria-hidden="true"
      />

      {/* Inline SVG mask defs */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0 }}
        aria-hidden="true"
      >
        <defs>
          <filter id={filterId}>
            <feGaussianBlur in="SourceGraphic" stdDeviation={blurAmount} />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
            />
          </filter>

          <mask id={svgId} maskUnits="userSpaceOnUse" x="0" y="0" width="1000" height="1000">
            {/* White rect keeps top image visible by default */}
            <rect x="0" y="0" width="1000" height="1000" fill="white" />
            {/* Black circles reveal color (positioned via JS) */}
            <g id={groupId} filter={`url(#${filterId})`}>
              <circle cx="500" cy="500" r="0" fill="black" style={{ opacity: 0 }} />
              <circle cx="500" cy="500" r="0" fill="black" style={{ opacity: 0 }} />
              <circle cx="500" cy="500" r="0" fill="black" style={{ opacity: 0 }} />
            </g>
          </mask>
        </defs>
      </svg>
    </div>
  );
}
