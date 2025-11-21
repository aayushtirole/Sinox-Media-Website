# LiquidBlobReveal Component

## Overview

The `LiquidBlobReveal` component creates a smooth, organic liquid blob reveal effect on images. The image displays in grayscale by default, and a soft blurred liquid shape reveals the color version on hover.

## Features

- ✅ **Grayscale Default**: Image appears black & white initially
- ✅ **Liquid Blob Reveal**: Organic, morphing blob shape reveals color on hover
- ✅ **Cursor Tracking**: Blob follows mouse with smooth inertia
- ✅ **Blurred Edges**: Gaussian blur creates soft, natural edges
- ✅ **Mobile Support**: Tap to toggle reveal on touch devices
- ✅ **Keyboard Accessible**: Enter/Space to activate, Escape to dismiss
- ✅ **Unique IDs**: Multiple instances work without conflicts
- ✅ **Graceful Fallback**: Works even when CSS masks are unsupported
- ✅ **High Performance**: Uses requestAnimationFrame for smooth 60fps

## Usage

```tsx
import LiquidBlobReveal from "@/components/ui/LiquidBlobReveal";

function MyComponent() {
  return (
    <LiquidBlobReveal
      imageUrl="https://example.com/image.jpg"
      alt="Description of image"
      className="aspect-[4/5]"
      blobSize={250}
      blurAmount={45}
      wobbleSpeed={0.8}
      inertia={0.12}
      hoverThreshold={100}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `imageUrl` | `string` | **required** | URL of the image to display |
| `alt` | `string` | `"Interactive reveal image"` | Alt text for accessibility |
| `className` | `string` | `""` | Tailwind classes (e.g., `"aspect-[4/5]"`) |
| `blobSize` | `number` | `250` | Base blob radius in pixels |
| `blurAmount` | `number` | `45` | Gaussian blur intensity (stdDeviation) |
| `wobbleSpeed` | `number` | `0.8` | Animation speed multiplier (0.4-1.6) |
| `inertia` | `number` | `0.12` | Cursor follow smoothness (0-1, lower = heavier) |
| `hoverThreshold` | `number` | `100` | Distance in pixels to activate effect |

## Adjusting Variables

### Blob Size (`blobSize`)

Controls the diameter of the reveal blob.

```tsx
// Small, precise reveal
<LiquidBlobReveal blobSize={150} />

// Medium reveal (default)
<LiquidBlobReveal blobSize={250} />

// Large, dramatic reveal
<LiquidBlobReveal blobSize={400} />
```

**Recommended range**: 100-500px

### Blur Amount (`blurAmount`)

Controls the softness of the blob edges.

```tsx
// Sharp edges
<LiquidBlobReveal blurAmount={20} />

// Soft edges (default)
<LiquidBlobReveal blurAmount={45} />

// Very soft, dreamy edges
<LiquidBlobReveal blurAmount={70} />
```

**Recommended range**: 20-80

### Wobble Speed (`wobbleSpeed`)

Controls how fast the blob morphs and wobbles.

```tsx
// Slow, gentle wobble
<LiquidBlobReveal wobbleSpeed={0.5} />

// Medium wobble (default)
<LiquidBlobReveal wobbleSpeed={0.8} />

// Fast, energetic wobble
<LiquidBlobReveal wobbleSpeed={1.5} />
```

**Recommended range**: 0.4-1.6

### Inertia (`inertia`)

Controls how smoothly the blob follows the cursor. Lower values = heavier, slower following.

```tsx
// Heavy, slow following
<LiquidBlobReveal inertia={0.05} />

// Smooth following (default)
<LiquidBlobReveal inertia={0.12} />

// Quick, responsive following
<LiquidBlobReveal inertia={0.3} />
```

**Recommended range**: 0.05-0.3

### Hover Threshold (`hoverThreshold`)

Distance in pixels from the image edge where the effect activates.

```tsx
// Activate only when very close
<LiquidBlobReveal hoverThreshold={50} />

// Activate with some distance (default)
<LiquidBlobReveal hoverThreshold={100} />

// Activate from far away
<LiquidBlobReveal hoverThreshold={200} />
```

**Recommended range**: 50-300px

## Preset Configurations

### Subtle & Elegant
```tsx
<LiquidBlobReveal
  blobSize={200}
  blurAmount={50}
  wobbleSpeed={0.6}
  inertia={0.08}
  hoverThreshold={80}
/>
```

### Bold & Dramatic
```tsx
<LiquidBlobReveal
  blobSize={350}
  blurAmount={60}
  wobbleSpeed={1.2}
  inertia={0.15}
  hoverThreshold={150}
/>
```

### Fast & Responsive
```tsx
<LiquidBlobReveal
  blobSize={180}
  blurAmount={35}
  wobbleSpeed={1.4}
  inertia={0.25}
  hoverThreshold={60}
/>
```

### Smooth & Dreamy
```tsx
<LiquidBlobReveal
  blobSize={300}
  blurAmount={70}
  wobbleSpeed={0.5}
  inertia={0.1}
  hoverThreshold={120}
/>
```

## How It Works

### 1. **Layered Images**
- **Bottom layer**: Color image (always visible)
- **Top layer**: Grayscale image with SVG mask applied

### 2. **SVG Mask System**
- Uses `userSpaceOnUse` coordinate system (1000x1000)
- White rectangle keeps grayscale visible by default
- Black circles create "holes" that reveal color underneath
- Gaussian blur merges circles into organic blob shape

### 3. **Cursor Tracking**
- JavaScript tracks mouse position in real-time
- Lerp (linear interpolation) creates smooth inertia effect
- Circles reposition dynamically via `setAttribute`
- Uses `requestAnimationFrame` for 60fps performance

### 4. **Unique IDs**
- Each instance generates random IDs for SVG elements
- Prevents conflicts when multiple components exist on same page
- Uses `useMemo` to ensure IDs remain stable

## Browser Support

### Fully Supported
- Chrome/Edge 120+
- Firefox 115+
- Safari 16+
- Opera 100+

### Fallback Mode
- Older browsers without CSS mask support
- Toggles grayscale filter on/off instead
- Still functional, just less fancy

## Accessibility

- **Keyboard Navigation**: Tab to focus, Enter/Space to activate
- **ARIA Labels**: Proper `role="button"` and `aria-pressed` attributes
- **Screen Readers**: Alt text on color image, grayscale hidden with `aria-hidden`
- **Focus Indicator**: Visible focus ring with `focus:ring-2`

## Performance Tips

### Reduce Lag
- Lower `blobSize` (smaller = faster rendering)
- Increase `inertia` (higher = fewer updates)
- Reduce `blurAmount` (less blur = faster)

### Optimize for Mobile
- Use tap-toggle instead of continuous tracking
- Component automatically detects touch devices
- No animation loop runs on mobile (saves battery)

## Troubleshooting

### Blob not visible
- Check that `blobSize` is appropriate for image dimensions
- Verify browser supports CSS masks (check console)
- Ensure image URL is accessible

### Laggy performance
- Reduce `blobSize` to 150-200
- Increase `inertia` to 0.2-0.3
- Lower `blurAmount` to 30-40

### Blob moves too fast/slow
- Adjust `inertia`: lower = slower, higher = faster
- Range: 0.05 (very slow) to 0.3 (very fast)

### Effect not activating
- Check `hoverThreshold` isn't too small
- Verify mouse is within threshold distance
- Check browser console for errors

## Example: Current Implementation

In the Sinox Media website, the About section uses:

```tsx
<LiquidBlobReveal
  imageUrl="https://miaoda-conversation-file.s3cdn.medo.dev/..."
  alt="The Journey Behind Sinox Media - Office workspace"
  className="aspect-[4/5]"
  blobSize={250}
  blurAmount={45}
  wobbleSpeed={0.8}
  inertia={0.12}
  hoverThreshold={100}
/>
```

This creates a smooth, professional reveal effect that matches the premium brand aesthetic.

## Technical Details

### Mask Coordinate System
- SVG mask uses `userSpaceOnUse` with 1000x1000 space
- JavaScript converts pixel coordinates to mask space
- Allows consistent behavior across different image sizes

### Circle Positioning
- 3 circles with different sizes create organic shape
- Positioned with slight offsets from cursor center
- Spread calculated as 32% of blob radius

### Animation Loop
- Runs only when effect is active (saves CPU)
- Uses lerp for smooth interpolation
- Cancels on mouse leave to prevent memory leaks

### Fallback Strategy
- Detects CSS mask support on mount
- Injects fallback CSS if unsupported
- Toggles grayscale filter instead of mask

## License

This component is part of the Sinox Media website project.
