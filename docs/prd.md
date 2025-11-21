# Sinox Media Website Requirements Document

## 1. Website Overview

### 1.1 Website Name
Sinox Media

### 1.2 Website Description
A premium content-production studio website showcasing high-end content creation services for brands and ventures, featuring portfolio reels, client testimonials, service offerings, and pricing plans.

### 1.3 Website Purpose
To present Sinox Media as a luxury content studio, attract potential clients, showcase past work, and facilitate service bookings through a premium, modern, and cinematic web experience enhanced with cutting-edge 2025 animation techniques.

---

## 2. Brand Identity & Design Style

### 2.1 Color Palette
- Primary Color: Red (#FF2E2E)
- Hover/Dark Red: #C91F1F
- Base Background: White (#FFFFFF), Soft Gray (#FAFAFA)
- Text: Jet Black (#0A0A0A)\n- Gradient Accent: Orange (#FF8A00), Pink (#FF3E6C), Purple (#8C1EFF)
- Gradient Style: Soft noise-style background gradient edges with dynamic noise layer

### 2.2 Visual Design Elements
- Rounded Corners: 24–30px on cards\n- Shadow: Soft floating shadow effect with dynamic elevation on hover
- Gradient Borders: Red → Orange → Pink → Purple on featured cards with neon pulse animation
- Typography: Bold large headings with tight line spacing and AI-style scanner reveal effect
- Layout: Premium whitespace, perfect column alignment, 36px–48px vertical gaps
- Dynamic Noise Layer: Moving grain texture overlay on gradient backgrounds for premium Webflow-style feel

### 2.3 Animation Effects
\n#### 2.3.1 Magnetic Hover Effects
- Buttons and clickable elements attract cursor when nearby
- Elements drag slightly toward cursor on approach
- Snap-back effect when cursor moves away
- Applied to: Navigation CTAs, primary buttons, card elements

#### 2.3.2 Fluid Morph Transitions
- Shapes softly morph between states
- Hero background features liquid-like gradient movement
- Cards melt → form → stabilize on hover
- Smooth organic transitions throughout

#### 2.3.3 3D Depth & Layered Parallax
- Multiple parallax layers create depth perception
- Cursor movement triggers 3D depth feel
- Cards tilt with soft motion inertia on hover
- Hero section features subtle parallax on background

#### 2.3.4 Infrared Glow / Neon Pulse
- Animated neon gradient pulse on button and card edges
- 0% to 25% glow cycle for cyber-aesthetic feel
- Applied to: Featured cards, primary CTAs, gradient borders

#### 2.3.5 Elastic Snap Animations
- Accordions and dropdowns open with rubber-band stretch effect
- Scroll bounce on section end\n- Tab switches feature elastic transitions
\n#### 2.3.6 Scroll-Triggered Magnetic Sections
- New sections automatically snap and stick during scroll
- Content aligns smoothly like Apple product pages
- GSAP scroll momentum with glide and inertia feel

#### 2.3.7 AI-Style Typographic Animations
- Headings appear with AI text scanner effect
- Words reveal with glitch-free neon line wipe
- Applied to: Section headlines, hero text\n
#### 2.3.8 Smooth Perspective Flip Cards
- Hover triggers perspective tilt → rotation → shadow stretch
- Applied to: Testimonial cards, service cards

#### 2.3.9 Floating Micro-Particles
- 0.5–1px floating particles in background
- Random movement, super subtle
- Premium futuristic vibe throughout site

#### 2.3.10 Hover Activated Spotlight
- Soft light beam follows cursor
- Highlights buttons and hero text
- Ultra-clean look in dark mode sections

#### 2.3.11 Page Transition Cinematic Sweep
- Soft gradient left→right sweep on page changes
- Circular reveal option for section transitions
- Super smooth,0% jarring, 0.3s ease-in-out timing

#### 2.3.12 Live Cursor Trail
- Soft blur trail behind cursor
- Very subtle, minimal aesthetic
- Not distracting like gaming trails

#### 2.3.13 Interactive Liquid Blob Mask Reveal Effect
- **Default State**: Images display in full-bleed grayscale
- **Desktop Hover Behavior**:
  + Soft, blurred organic liquid blob mask follows cursor with gentle inertia
  + Blob reveals full-color image underneath grayscale layer
  + Blob constructed from multiple SVG circles merged with Gaussian blur
  + Subtle wobble animation creates organic liquid feel
  + Smooth collapse animation on mouseleave
- **Touch Device Behavior**: Single tap toggles between grayscale and full-color reveal
- **Technical Specifications**:
  + Self-contained HTML/CSS/vanilla-JS implementation (GSAP optional)
  + SVG or CSS mask-based approach
  + Responsive sizing across all devices
  + Adjustable variables: blob size, blur intensity, wobble speed, inertia damping, hover threshold
  + Accessible fallback: static color reveal for environments without mask support
  + Clear inline comments and easy-to-edit configuration variables
  + High-performance rendering (60fps target)
- **Applied to**: Portfolio images, featured project cards, About section images

#### 2.3.14 General Animation Timing
- All effects: 0.3s ease-in-out standard\n- Scroll animations: fade-on-scroll with momentum
- Card zoom: scale1.03on hover
- Button elevation: lift + glow on hover
\n### 2.4 Overall Feel
Premium, modern, minimal, clean, cinematic, luxury content studio vibe with cutting-edge 2025 animation aesthetics\n
---

## 3. Navigation Bar\n
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
- **Right**: Two CTA buttons\n  - Outline button 'Audit Your Page': white background, black border\n  - Primary filled button 'Contact Us': red background (#FF2E2E)\n\n### 3.3 Animation Effects
- **Menu hover**: Underline slide animation with magnetic hover effect
- **CTA hover**: Magnetic attraction to cursor, slight lift effect with enhanced shadow and neon glow
- **Sticky scroll**: Fixed position with 12px top margin and slightly reduced padding, smooth transition
- **Logo**: Subtle floating micro-animation\n
### 3.4 Responsive Behavior
- **Desktop**: Menu centered, logo left, CTAs right
- **Mobile**: Collapse into hamburger menu on right with elastic snap animation, logo remains left, CTAs inside collapsed menu

---

## 4. Website Structure & Sections

### 4.1 Hero Section
- Full-width soft gradient background with dynamic noise layer and liquid gradient movement
- Top badge: '50+ Projects Managed Daily with Sinox Media' with neon pulse effect
- Main headline: 'Content Production for Brands & Ventures.' with AI-style scanner reveal animation
- Subtext: 'Strategy → Storytelling → High-quality content' with fade-in effect
- Two CTA buttons with magnetic hover effects:\n  - Primary Red Button: 'Book Your Call' with infrared glow on hover
  - Outline Button: 'Contact Us' with magnetic attraction\n- Row of client badges at bottom with subtle parallax\n- Floating micro-particles in background\n- Hover activated spotlight following cursor

### 4.2 Swipeable Video Cards Collection
\n#### 4.2.1 Layout Structure
- Horizontal scrollable container with smooth swipe/drag functionality and GSAP scroll momentum
- Cards arranged in a single row with consistent spacing
- Overflow hidden with horizontal scroll enabled
- Snap-to-card behavior on mobile devices with elastic snap animation
\n#### 4.2.2 Card Design Specifications
- **Card Dimensions**: Consistent width across all cards (approximately 380–420px)
- **Border Radius**: 24–30px for premium rounded corners
- **Card Shadow**: Soft floating shadow (y-offset 12px, blur 32px, opacity 0.10)
- **Border Style**: 2–3px gradient border (Red → Orange → Pink → Purple) with neon pulse animation (0-25% glow cycle)
- **Spacing**: 24–32px horizontal gap between cards
\n#### 4.2.3 Card Content Elements
- **Video Thumbnail**: Full-width background image covering entire card with liquid blob mask reveal effect
- **Overlay Gradient**: Subtle dark gradient from bottom (opacity 0.6) to transparent top with fluid morph effect
- **Title Label**: Positioned at bottom-left corner\n  - White bold text (18–22px font size)
  - Background: Semi-transparent dark overlay
  - Padding: 12px 20px
  - Border-radius: 12px
- **Duration Badge**: Positioned at bottom-left corner
  - Red background (#FF2E2E)
  - White text displaying video duration (e.g., '15:42', '12:34', '18:20')
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
  - Reference image: image.png
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
  - Reference images: Screenshot2025-11-21005802.png, Screenshot 2025-11-21 005311.png

#### 4.2.5 Interactive States
- **Hover Effect**: Card elevates with enhanced shadow (y-offset 16px, blur 40px) and 3D tilt with motion inertia
- **Hover Scale**: Smooth zoom effect (scale 1.03) with fluid morph transition
- **Magnetic Effect**: Cards slightly attract cursor on approach
- **Border Glow**: Neon pulse intensifies on hover
- **Image Reveal**: Liquid blob mask reveals full-color image on hover (desktop) or tap (mobile)
- **Cursor**: Pointer cursor with live cursor trail
- **Transition**: All effects with 0.3s ease-in-out timing

#### 4.2.6 Responsive Behavior
- **Desktop**: Display3–4 cards visible at once with horizontal scroll and GSAP momentum
- **Tablet**: Display 2–3 cards visible with swipe gesture
- **Mobile**: Display 1.2–1.5 cards visible with snap-to-card scroll behavior and elastic snap\n- **Navigation**: Optional left/right arrow buttons on desktop with magnetic hover for card navigation

### 4.3 Featured Testimonial Video Section
- Left side: Video player with smooth perspective flip on interaction and liquid blob mask reveal
- Right side: Black card with animated gradient border (neon pulse effect)\n- Display client metrics: follower counts, engagement numbers\n- Smooth slide animation with 3D depth parallax
- Floating micro-particles in background
\n### 4.4 More Portfolio Reels Section
- 4 cards per row with magnetic section snap on scroll
- Bold view count badges with neon glow
- Soft gradient border on each card with pulse animation
- Consistent grid spacing with scroll-triggered animations
- Cards feature 3D tilt on hover with motion inertia
- AI-style typographic animation for section headline
- Liquid blob mask reveal effect on card images

### 4.5 'Every Video, Expertly Designed' Section
- Small top pill label with neon pulse\n- Bold headline with AI scanner reveal effect
- 4 service points: Reliability, Fast Production, Quality, Support
- Right side: YouTube dashboard style preview with subtle parallax
- Balanced grid layout with elastic snap animations
- Hover activated spotlight on service cards

### 4.6 'Wave Goodbye To…' Section
- Left: Large bold text with AI-style typographic animation
- Right: Faded gray text list with strikethrough fluid morph effect
- Middle: Gradient-highlighted keyword with neon pulse
- Premium whitespace with floating micro-particles
- Stats row displaying with scroll-triggered magnetic alignment:\n  - Projects completed\n  - Total views
  - Years of experience
  - Revenue generated
- Dynamic noise layer on background

### 4.7 Testimonials Section
- Card-based layout with smooth perspective flip on hover
- Past client quotes with AI-style reveal animation
- Instagram icon on right side of each card with magnetic hover
- Soft pastel backgrounds with red-themed accents
- Cards feature 3D depth and layered parallax
- Neon glow borders on featured testimonials

### 4.8 Social Proof / Screenshot Collage
- Large gradient-bordered card with animated neon pulse
- Screenshots collage inside with fluid morph transitions
- Smooth animation effects with3D tilt on hover
- Hover activated spotlight effect\n- Floating micro-particles overlay

### 4.9 Pricing Section
- 3 pricing cards with identical size and spacing
- Icons at top of each card with subtle floating animation
- Large bold monthly price with AI-style reveal
- Features list below price with elastic reveal on scroll
- Primary red CTA button with magnetic hover and infrared glow
- Hover: smooth elevation effect with 3D depth and neon pulse
- Toggle switch:'For Indian / Outside India' with fluid morph transition
- Cards feature perspective tilt on hover with motion inertia
- Scroll-triggered magnetic section alignment

### 4.10 About / Founders Section
- Left: Text content with AI-style typographic animations
- Right: Image with gradient frame, neon pulse border, and liquid blob mask reveal effect
- Headline: 'The Journey Behind Sinox Media' with scanner reveal effect
- Premium whitespace with floating micro-particles\n- Stats row with scroll-triggered animations:
  - 10,000+ Community\n  - 50+ Cohort\n  - 4,000+ Videos
  - 98% Satisfaction\n- 3D depth parallax on image\n- Dynamic noise layer on background

### 4.11 About Section\n- Clean, centered layout with premium whitespace
- Section headline: 'About Sinox Media' with AI-style scanner animation
- Company introduction paragraph with fade-in reveal\n- Key highlights presented in grid format with elastic snap animations:\n  - Company founding year and vision
  - Core services and expertise
  - Team composition and experience
  - Industry recognition or achievements
- Subtle background with dynamic noise layer
- Optional: Team photo or studio workspace image with3D tilt on hover and liquid blob mask reveal
- Consistent typography with rest of website
- Red accent elements with neon pulse effect
- Hover activated spotlight on key highlights

### 4.12 Comparison Section
- Left card: 'Other Agencies' (gray background) with subtle animations
- Right card: 'Sinox Media' (white + gradient frame with neon pulse)
- Checkmarks and icon style comparison with elastic reveal\n- 'VS' connector in middle with magnetic hover effect
- Cards feature smooth perspective flip on hover
- 3D depth and motion inertia on interaction
- Scroll-triggered magnetic alignment

### 4.13 Industry Insights Section
- Top tabs: Content / Shootings / Ideations / Packaging / Distribution with magnetic hover
- Tab switching with elastic snap and fluid morph transitions
- Info card below tabs with 3D tilt on hover
- CTA button: 'Start2-Week Paid Trial' with infrared glow and magnetic effect
- Bottom badges: Agile, Communication, Security, etc. with neon pulse
- AI-style typographic animations for headlines
- Floating micro-particles in background
\n### 4.14 FAQ Section
- Double-column accordion layout\n- Accordions open with elastic snap and rubber-band stretch effect
- Clean minimal lines with neon glow on active items
- White background with dynamic noise layer
- Consistent spacing with scroll-triggered animations
- Hover activated spotlight on questions
- Magnetic hover effects on accordion headers

### 4.15 Footer
- Full black background with dynamic noise layer
- Left: Sinox Media logo & tagline with subtle floating animation
- Middle: Navigation links with magnetic hover and underline slide\n- Right: Social media icons with neon pulse on hover
- Bottom: Legal information & status indicator\n- Floating micro-particles overlay
- Smooth page transition sweep when navigating

---

## 5. Technical Requirements

### 5.1 Responsive Design
- Fully responsive across desktop, tablet, and mobile devices
- Maintain premium spacing and visual hierarchy on all screen sizes
- Adaptive animation complexity based on device performance
\n### 5.2 Performance\n- Smooth animations without lag (60fps target)
- Optimized image loading with lazy loading
- Fast page transitions with cinematic sweep effects
- Lazy loading for video card thumbnails
- GPU-accelerated animations for magnetic and 3D effects
- Efficient particle system rendering
- Dynamic noise layer optimized for performance
- Liquid blob mask effect optimized with requestAnimationFrame

### 5.3 Interactive Elements
- Magnetic hover effects on all buttons and cards
- Smooth scroll behavior with GSAP momentum and inertia
- Horizontal swipe/drag functionality for video cards
- Snap-to-card scroll behavior on mobile with elastic snap\n- Accordion functionality in FAQ section with rubber-band stretch
- Tab switching in Industry Insights section with fluid morph
- Toggle switch in Pricing section with smooth transition
- Sticky navigation bar with scroll behavior and magnetic effects
- Hamburger menu functionality on mobile with elastic animation
-3D depth and layered parallax throughout
- AI-style typographic animations on headlines
- Neon pulse effects on featured elements
- Hover activated spotlight following cursor
- Live cursor trail (subtle)\n- Floating micro-particles system
- Page transition cinematic sweep effects
- Smooth perspective flip cards\n- Scroll-triggered magnetic section alignment
- Interactive liquid blob mask reveal effect with cursor tracking and touch support

### 5.4 Animation Libraries & Technologies
- GSAP (GreenSock Animation Platform) for scroll momentum and complex animations
- CSS3 transforms and transitions for performance\n- WebGL for particle systems and advanced effects
- Intersection Observer API for scroll-triggered animations
- RequestAnimationFrame for smooth 60fps rendering
- SVG filters and masks for liquid blob reveal effect
- Vanilla JavaScript for blob mask cursor tracking and touch handling
\n---

## 6. Content Guidelines

### 6.1 Tone & Voice
- Professional and premium\n- Confident and authoritative
- Clear and concise
- Client-focused
- Modern and innovative
\n### 6.2 Imagery
- High-quality portfolio reels and screenshots
- Professional client testimonial videos
- Clean product/service visuals
- Consistent visual style across all media
- Optimized for fast loading and smooth animations
- Enhanced with interactive liquid blob mask reveal effects

---

## 7. Key Features Summary

- BM Studios-inspired sticky navigation bar with Sinox Media red branding and magnetic hover effects
- Premium BM Studios-inspired layout with Sinox Media red branding and 2025 ultra-modern animations
- Swipeable video cards collection with gradient borders, neon pulse,3D tilt, magnetic hover effects, and liquid blob mask reveal
- Comprehensive portfolio showcase with view metrics and advanced animations
- Client testimonials with smooth perspective flip cards and social proof
- Detailed service explanations with hover activated spotlight\n- Transparent pricing with regional toggle and elastic animations
- Founder story and company stats with AI-style reveals
- Standard About section with company information and floating particles
- Competitive comparison section with perspective flip cards
- Industry insights with categorized tabs and fluid morph transitions
- Comprehensive FAQ section with elastic snap accordions\n- Professional footer with social links and dynamic noise layer
- Cutting-edge 2025 animation system including:\n  - Magnetic hover effects throughout
  - Fluid morph transitions
  - 3D depth and layered parallax
  - Infrared glow and neon pulse effects
  - Elastic snap animations
  - Scroll-triggered magnetic sections with GSAP momentum
  - AI-style typographic animations
  - Dynamic noise layer on gradients
  - Smooth perspective flip cards
  - Floating micro-particles system
  - Hover activated spotlight
  - Page transition cinematic sweep\n  - Live cursor trail (minimal)
  - Interactive liquid blob mask reveal effect with organic animation and touch support

---

## 8. Reference Images

- image.png: Brand Documentary card design reference
- image.png: Podcast Interview studio setup card\n- image-2.png: Product Deep Dive creator filming card
- Screenshot2025-11-21 005802.png: Additional video card variations with view counts
- Screenshot 2025-11-21 005311.png: Video card grid layout reference