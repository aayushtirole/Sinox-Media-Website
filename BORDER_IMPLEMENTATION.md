# Modern Clean Border Implementation

## Overview
Added subtle, professional borders to all portfolio and video carousel cards.

## Implementation Details

### Border Specifications
- **Width**: 2px (`border-2` class)
- **Color**: `border-border/40` (40% opacity of #e5e5e5)
- **Hover Color**: `border-border/60` (60% opacity for subtle emphasis)
- **Border Radius**: 1.5rem (24px) - matches existing card design
- **Transition**: 300ms smooth color transition on hover

### Color Values
- Base border color: `hsl(0, 0%, 90%)` = `#e5e5e5`
- With 40% opacity: Subtle, barely visible gray
- With 60% opacity (hover): More defined but still subtle

### Applied Components

#### 1. Portfolio Section (`src/components/sections/Portfolio.tsx`)
```tsx
<Card 
  className="... border-2 border-border/40 hover:border-border/60 transition-colors duration-300"
  style={{ borderRadius: '1.5rem' }}
>
```

#### 2. Video Carousel Section (`src/components/sections/VideoCarousel.tsx`)
```tsx
<Card
  className="... border-2 border-border/40 hover:border-border/60 transition-all duration-300"
  style={{ borderRadius: '1.5rem' }}
>
```

## Design Principles Met
✅ Soft, subtle border (2px)
✅ Slightly visible color (#e5e5e5 at 40% opacity)
✅ Rounded corners maintained (1.5rem)
✅ Natural appearance with shadows and images
✅ No animation (only smooth transition)
✅ Premium and minimal aesthetic

## Visual Result
- Cards now have clear definition and separation
- Border is visible but not distracting
- Hover effect provides subtle interactive feedback
- Professional, modern appearance
- Maintains the premium feel of the design

## Technical Notes
- Used Tailwind's opacity modifier (`/40`, `/60`) for precise control
- `transition-colors` ensures smooth hover effect
- Border color uses design system variable for consistency
- No custom CSS required - all Tailwind utility classes
