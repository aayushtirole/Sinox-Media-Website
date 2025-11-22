# Brand Carousel Implementation

## Overview
Successfully converted the static "Trusted by leading brands" section into a smooth, auto-scrolling infinite carousel with pause-on-hover functionality.

## Implementation Details

### 1. New Component Created
**File:** `src/components/ui/brand-carousel.tsx`

#### Features:
- ✅ **Auto-scrolling**: Smooth continuous horizontal movement using `requestAnimationFrame`
- ✅ **Infinite loop**: Brands array is tripled to create seamless infinite effect
- ✅ **Pause on hover**: Animation pauses when user hovers over the carousel
- ✅ **Responsive**: Works perfectly across all screen sizes (mobile to desktop)
- ✅ **Flexible content**: Supports both text-based placeholders and image logos
- ✅ **Smooth transitions**: Uses CSS transitions for hover effects
- ✅ **Even spacing**: Consistent gaps between brand items (8px mobile, 12px desktop)

#### Props Interface:
```typescript
interface BrandItem {
  id: string;        // Unique identifier
  name: string;      // Brand name (displayed if no logo)
  logo?: string;     // Optional logo image URL
}

interface BrandCarouselProps {
  brands: BrandItem[];  // Array of brand items
  speed?: number;       // Scroll speed (default: 30)
  className?: string;   // Additional CSS classes
}
```

### 2. Updated Component
**File:** `src/components/sections/Hero.tsx`

#### Changes:
- Imported the new `BrandCarousel` component
- Defined brands array with 5 placeholder items
- Replaced static flex layout with `<BrandCarousel brands={brands} speed={30} />`
- Maintained all existing styling and animations

### 3. CSS Utilities Added
**File:** `src/index.css`

Added `.scrollbar-hide` utility class to hide scrollbars while maintaining scroll functionality:
```css
.scrollbar-hide {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;     /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;             /* Chrome, Safari, Opera */
}
```

## Technical Implementation

### Animation Logic
The carousel uses `requestAnimationFrame` for smooth 60fps animation:

1. **Scroll Position Tracking**: Maintains current scroll position
2. **Continuous Movement**: Increments position by 0.5px per frame
3. **Loop Reset**: When scroll reaches halfway point (maxScroll), resets to 0
4. **Pause Control**: `isPaused` state stops animation on hover

### Infinite Loop Strategy
- Original brands array is duplicated 3 times: `[...brands, ...brands, ...brands]`
- When scroll reaches 50% of total width, it resets to 0
- Creates seamless infinite loop effect without visible jumps

### Responsive Design
- **Mobile**: `gap-8` (32px), `min-w-[120px]` per item
- **Desktop (xl)**: `gap-12` (48px), `min-w-[150px]` per item
- Font size: `text-2xl` (24px) for brand text
- Opacity: 60% default, 100% on hover

## Usage Example

### With Text Placeholders (Current):
```tsx
const brands = [
  { id: "1", name: "BRAND" },
  { id: "2", name: "BRAND" },
  { id: "3", name: "BRAND" },
  { id: "4", name: "BRAND" },
  { id: "5", name: "BRAND" },
];

<BrandCarousel brands={brands} speed={30} />
```

### With Logo Images (Future):
```tsx
const brands = [
  { id: "1", name: "Nike", logo: "/logos/nike.png" },
  { id: "2", name: "Adidas", logo: "/logos/adidas.png" },
  { id: "3", name: "Puma", logo: "/logos/puma.png" },
];

<BrandCarousel brands={brands} speed={30} />
```

## Styling Details

### Brand Items:
- **Container**: `flex-shrink-0` prevents compression
- **Hover Effect**: `hover-scale` class (1.05x scale)
- **Cursor**: `cursor-pointer` for interactivity
- **Transition**: `transition-smooth` (0.3s cubic-bezier)

### Images (when used):
- **Height**: `h-8` (32px) mobile, `h-10` (40px) desktop
- **Width**: `w-auto` maintains aspect ratio
- **Object Fit**: `object-contain` prevents distortion
- **Opacity**: 60% → 100% on hover

## Browser Compatibility
- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Considerations
- Uses `requestAnimationFrame` for optimal performance
- Cleanup function cancels animation on component unmount
- No heavy computations in animation loop
- CSS transitions handled by GPU

## Future Enhancements
1. Add configurable scroll direction (left-to-right or right-to-left)
2. Add touch/swipe support for mobile devices
3. Add keyboard navigation (arrow keys)
4. Add accessibility labels (ARIA)
5. Add click handlers for brand items
6. Add loading states for brand logos

## Testing Checklist
- ✅ Auto-scroll works smoothly
- ✅ Infinite loop has no visible jumps
- ✅ Hover pauses animation
- ✅ Mouse leave resumes animation
- ✅ Responsive on all screen sizes
- ✅ No console errors
- ✅ Passes ESLint validation
- ✅ Works with both text and images

## Files Modified
1. `src/components/ui/brand-carousel.tsx` (NEW)
2. `src/components/sections/Hero.tsx` (UPDATED)
3. `src/index.css` (UPDATED)

## Commit Message
```
feat: Add auto-scrolling brand carousel with infinite loop

- Create BrandCarousel component with smooth auto-scroll
- Implement pause-on-hover functionality
- Add infinite loop with seamless transitions
- Support both text and image brand items
- Add responsive design for all screen sizes
- Add scrollbar-hide utility class
```
