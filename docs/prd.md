# Sinox Media Website Requirements Document

## 1. Website Overview

### 1.1 Website Name
Sinox Media

### 1.2 Website Description
A premium content-production studio website showcasing high-end content creation services for brands and ventures, featuring portfolio reels, client testimonials, service offerings, and pricing plans.

### 1.3 Website Purpose
To present Sinox Media as a luxury content studio, attract potential clients, showcase past work, and facilitate service bookings through a premium, modern, and cinematic web experience.

---

## 2. Brand Identity & Design Style

### 2.1 Color Palette
- Primary Color: Red (#FF2E2E)
- Hover/Dark Red: #C91F1F
- Base Background: White (#FFFFFF), Soft Gray (#FAFAFA)
- Text: Jet Black (#0A0A0A)\n- Gradient Accent: Orange (#FF8A00), Pink (#FF3E6C), Purple (#8C1EFF)
- Gradient Style: Soft noise-style background gradient edges

### 2.2 Visual Design Elements
- Rounded Corners: 24–30px on cards
- Shadow: Soft floating shadow effect
- Gradient Borders: Red → Orange → Pink → Purple on featured cards
- Typography: Bold large headings with tight line spacing
- Layout: Premium whitespace, perfect column alignment,36px–48px vertical gaps

### 2.3 Animation Effects
- Soft fade-on-scroll transitions
- Pill buttons: elevate + glow on hover
- Cards: smooth zoom + shadow on hover
- Gradient glow borders on important cards
- Subtle parallax on hero background
- Smooth scroll transitions between sections

### 2.4 Overall Feel
Premium, modern, minimal, clean, cinematic, luxury content studio vibe

---

## 3. Navigation Bar

### 3.1 Layout & Structure
- Sticky top navigation bar with floating pill design
- White rounded rectangular bar anchored to top with soft drop shadow
- Border-radius: 16px\n- Vertical padding: 24px
- Horizontal padding: 28–36px
- Shadow: y-offset 8px, blur 24px, opacity 0.08
- Top margin when sticky: 12px

### 3.2 Content Layout
- **Left**: Logo area with Sinox Media red square logo (#FF2E2E), size 48x48px
- **Center**: Horizontal menu items with ~16px font size (Inter/Poppins bold)
  - Menu items: Home · Process · Portfolio · Pricing · About
  - Items spaced horizontally with consistent gaps
- **Right**: Two CTA buttons\n  - Outline button 'Audit Your Page': white background, black border\n  - Primary filled button 'Contact Us': red background (#FF2E2E)\n
### 3.3 Responsive Behavior
- **Desktop**: Menu centered, logo left, CTAs right
- **Mobile**: Collapse into hamburger menu on right, logo remains left, CTAs inside collapsed menu

### 3.4 Interactive States
- **Menu hover**: Underline slide animation
- **CTA hover**: Slight lift effect with enhanced shadow
- **Sticky scroll**: Fixed position with12px top margin and slightly reduced padding

---
\n## 4. Website Structure & Sections

### 4.1 Hero Section
- Full-width soft gradient background\n- Top badge: '50+ Projects Managed Daily with Sinox Media'
- Main headline: 'Content Production for Brands & Ventures.'
- Subtext: 'Strategy → Storytelling → High-quality content'\n- Two CTA buttons:\n  - Primary Red Button: 'Book Your Call'
  - Outline Button: 'Contact Us'
- Row of client badges at bottom

### 4.2 Swipeable Video Cards Collection
\n#### 4.2.1 Layout Structure
- Horizontal scrollable container with smooth swipe/drag functionality
- Cards arranged in a single row with consistent spacing
- Overflow hidden with horizontal scroll enabled
- Snap-to-card behavior on mobile devices
\n#### 4.2.2 Card Design Specifications
- **Card Dimensions**: Consistent width across all cards (approximately 380–420px)
- **Border Radius**: 24–30px for premium rounded corners
- **Card Shadow**: Soft floating shadow (y-offset 12px, blur 32px, opacity 0.10)
- **Border Style**: 2–3px gradient border (Red → Orange → Pink → Purple)
- **Spacing**: 24–32px horizontal gap between cards
\n#### 4.2.3 Card Content Elements
- **Video Thumbnail**: Full-width background image covering entire card
- **Overlay Gradient**: Subtle dark gradient from bottom (opacity 0.6) to transparent top
- **Title Label**: Positioned at bottom-left corner
  - White bold text (18–22px font size)
  - Background: Semi-transparent dark overlay
  - Padding: 12px 20px
  - Border-radius: 12px
- **Duration Badge**: Positioned at bottom-left corner
  - Red background (#FF2E2E)\n  - White text displaying video duration (e.g., '15:42', '12:34', '18:20')
  - Padding: 8px 16px
  - Border-radius: 8px\n  - Font: Bold, 14–16px
- **View Count Badge** (optional): Positioned at bottom-right corner
  - Red eye icon + view count text (e.g., '300K+ Views', '450K+ Views')
  - Semi-transparent white background
  - Padding: 8px 14px
  - Border-radius: 8px
\n#### 4.2.4 Card Variations
- **Type 1**: Brand Documentary card featuring professional portrait
  - Title: 'Brand Documentary'
  - Duration: '15:42'
  - Reference image: Screenshot2025-11-19 031401.png
- **Type 2**: Podcast Interview card featuring studio setup
  - Title: 'Podcast Interview'
  - Duration: '12:34'
  - Reference image: image.png (studio camera setup)
- **Type 3**: Product Deep Dive card featuring creator with camera
  - Title: 'Product Deep Dive'
  - Duration: '18:20'
  - Reference image: image-2.png (creator filming)
- **Type 4**: Additional video cards with various content types
  - 30s Reels with300K+ Views
  - 60s Shorts with 450K+ Views
  - 45s Reels with 520K+ Views
  - Reference images: Screenshot 2025-11-21 005802.png, Screenshot 2025-11-21 005311.png

#### 4.2.5 Interactive States
- **Hover Effect**: Card elevates with enhanced shadow (y-offset 16px, blur 40px)\n- **Hover Scale**: Smooth zoom effect (scale 1.03)
- **Cursor**: Pointer cursor on hover
- **Transition**: All effects with0.3s ease-in-out timing

#### 4.2.6 Responsive Behavior
- **Desktop**: Display3–4 cards visible at once with horizontal scroll
- **Tablet**: Display 2–3 cards visible with swipe gesture
- **Mobile**: Display 1.2–1.5 cards visible with snap-to-card scroll behavior
- **Navigation**: Optional left/right arrow buttons on desktop for card navigation

### 4.3 Featured Testimonial Video Section
- Left side: Video player\n- Right side: Black card with gradient border
- Display client metrics: follower counts, engagement numbers\n- Smooth slide animation\n
### 4.4 More Portfolio Reels Section
- 4 cards per row\n- Bold view count badges
- Soft gradient border on each card
- Consistent grid spacing

### 4.5 'Every Video, Expertly Designed' Section
- Small top pill label
- Bold headline
- 4 service points: Reliability, Fast Production, Quality, Support
- Right side: YouTube dashboard style preview
- Balanced grid layout

### 4.6 'Wave Goodbye To…' Section
- Left: Large bold text
- Right: Faded gray text list
- Middle: Gradient-highlighted keyword
- Premium whitespace
- Stats row displaying:\n  - Projects completed
  - Total views
  - Years of experience
  - Revenue generated

### 4.7 Testimonials Section
- Card-based layout\n- Past client quotes
- Instagram icon on right side of each card
- Soft pastel backgrounds with red-themed accents
\n### 4.8 Social Proof / Screenshot Collage
- Large gradient-bordered card\n- Screenshots collage inside\n- Smooth animation effects
\n### 4.9 Pricing Section
- 3 pricing cards with identical size and spacing
- Icons at top of each card
- Large bold monthly price
- Features list below price
- Primary red CTA button
- Hover: smooth elevation effect
- Toggle switch: 'For Indian / Outside India'

### 4.10 About / Founders Section
- Left: Text content
- Right: Image with gradient frame
- Headline: 'The Journey Behind Sinox Media'
- Premium whitespace
- Stats row:
  - 10,000+ Community\n  - 50+ Cohort\n  - 4,000+ Videos
  - 98% Satisfaction

### 4.11 Comparison Section
- Left card: 'Other Agencies' (gray background)
- Right card: 'Sinox Media' (white + gradient frame)
- Checkmarks and icon style comparison
- 'VS' connector in middle
\n### 4.12 Industry Insights Section
- Top tabs: Content / Shootings / Ideations / Packaging / Distribution
- Info card below tabs
- CTA button: 'Start2-Week Paid Trial'
- Bottom badges: Agile, Communication, Security, etc.

### 4.13 FAQ Section
- Double-column accordion layout
- Clean minimal lines
- White background\n- Consistent spacing
\n### 4.14 Footer
- Full black background
- Left: Sinox Media logo & tagline
- Middle: Navigation links
- Right: Social media icons
- Bottom: Legal information & status indicator

---
\n## 5. Technical Requirements

### 5.1 Responsive Design
- Fully responsive across desktop, tablet, and mobile devices
- Maintain premium spacing and visual hierarchy on all screen sizes
\n### 5.2 Performance\n- Smooth animations without lag
- Optimized image loading
- Fast page transitions
- Lazy loading for video card thumbnails

### 5.3 Interactive Elements
- Hover effects on all buttons and cards
- Smooth scroll behavior
- Horizontal swipe/drag functionality for video cards
- Snap-to-card scroll behavior on mobile
- Accordion functionality in FAQ section
- Tab switching in Industry Insights section
- Toggle switch in Pricing section
- Sticky navigation bar with scroll behavior
- Hamburger menu functionality on mobile

---

## 6. Content Guidelines

### 6.1 Tone & Voice
- Professional and premium
- Confident and authoritative
- Clear and concise
- Client-focused
\n### 6.2 Imagery
- High-quality portfolio reels and screenshots
- Professional client testimonial videos
- Clean product/service visuals
- Consistent visual style across all media

---

## 7. Key Features Summary

- BM Studios-inspired sticky navigation bar with Sinox Media red branding
- Premium BM Studios-inspired layout with Sinox Media red branding
- Swipeable video cards collection with gradient borders and interactive hover effects
- Comprehensive portfolio showcase with view metrics\n- Client testimonials and social proof
- Detailed service explanations
- Transparent pricing with regional toggle
- Founder story and company stats
- Competitive comparison section
- Industry insights with categorized tabs
- Comprehensive FAQ section
- Professional footer with social links

---
\n## 8. Reference Images

- Screenshot 2025-11-19 031401.png: Brand Documentary card design reference
- image.png: Podcast Interview studio setup card\n- image-2.png: Product Deep Dive creator filming card
- Screenshot 2025-11-21 005802.png: Additional video card variations with view counts
- Screenshot 2025-11-21 005311.png: Video card grid layout reference