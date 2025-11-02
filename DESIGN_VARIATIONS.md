# MT Tires Website - Design Variations

This document tracks different design variations for the home/hero section to help compare and choose the best approach.

---

## Version 1 - Dark Background (Original)

**Status:** 📦 Archived

### Visual Description
- Dark gradient background (black to dark gray)
- Large centered logo (white background box)
- White text on dark background
- Red CTA button
- Clean, professional look

### Feeling
- Professional and corporate
- Strong contrast
- Bold and modern
- A bit serious/formal

### Screenshot
![Version 1](../images/version1_current.png)

### Notes
- Logo stands out well
- Good contrast for readability
- May feel too corporate/serious for a "friendly local shop"
- Could be warmer and more approachable

---

## Version 1.1 - Logo Hero (Tire-Themed)

**Status:** ✅ Currently Live

### Implementation Details

**Visual Design:**
- Dark asphalt-themed background with layered textures
- Tire track patterns (diagonal crisscross design)
- Subtle red accent stripes
- Asphalt texture with radial gradients for depth
- Centered layout (like V1, but enhanced)

**Logo Treatment:**
- **MASSIVE size**: 650px max-width (30% larger than V1's 500px)
- Main focal point of the entire hero section
- Enhanced shadow effects:
  - Deep black drop shadow (0 20px 40px)
  - Red glow effect (0 0 30px red)
- Subtle floating animation (moves up/down 10px over 3 seconds)
- Hover effect: Scales to 1.05x with intensified glow

**Background Layers:**
1. Base gradient (dark black to gray)
2. Vertical red accent stripes (subtle, 3% opacity)
3. Tire track pattern (diagonal crisscross at ±45°)
4. Asphalt texture (radial gradients for realistic look)

**Typography:**
- Title: 3.2rem with red glow text-shadow
- Subtitle: 1.3rem with subtle shadow
- Both have shadows for depth against textured background

**Colors:**
- Background: #1a1a1a to #2c2c2c (asphalt tones)
- Patterns: Black (15% opacity) for tire tracks
- Accents: Red (#E31E24) at very low opacity
- Logo glow: Red with increasing intensity on hover

**Responsive:**
- Desktop: 650px logo
- Tablet: 500px logo
- Mobile: 340px logo
- Animation disabled on mobile for performance

### Feeling Achieved
- ✅ Logo is THE star - impossible to miss
- ✅ Automotive/tire shop atmosphere
- ✅ Professional garage aesthetic
- ✅ Dynamic with floating animation
- ✅ Textured and dimensional (not flat)
- ✅ Bold brand presence

### Improvements Over V1
- Logo 30% larger and more commanding
- Tire-themed background instead of plain gradient
- Multiple texture layers create depth
- Animated logo adds life and movement
- Enhanced shadows and glows for drama
- More visually interesting and engaging
- Strong automotive/tire shop identity

### Technical Features
- 3-layer background gradient system
- CSS-only tire track patterns (no images needed)
- Smooth keyframe animation
- Multiple drop-shadow filters for depth
- Optimized for mobile (animation disabled)

### Philosophy
"The logo IS the hero. Everything else supports it. Make it big, make it float, make it glow. This is a tire shop - show the professional garage aesthetic with asphalt and tire tracks."

---

## Version 2 - Light & Friendly

**Status:** 📦 Archived

### Implementation Details

**Visual Elements:**
- Light gradient background (#f8f9fa to #e9ecef)
- Subtle diagonal tire-tread pattern (45° red stripes at 2% opacity)
- Logo: 420px max-width with subtle drop shadow
- Clean, airy spacing
- Smooth hover effect on logo (slight scale)

**Colors:**
- Background: Light gray gradient
- Text: Dark black (#1a1a1a) for headlines
- Subtitle: Medium gray (#555)
- CTA Button: Brand red (#E31E24) with enhanced shadow
- Pattern: Transparent red stripes

**Typography:**
- Headline: "Hey Neighbor! Need Tires?" (3.5rem, bold)
- Subtitle: Conversational, friendly tone (1.3rem)
- Better letter spacing and line height for readability

**Cover Image Positioning:**
- Centered with max-width: 420px (desktop)
- 350px on tablet
- 260px on mobile
- 2.5rem margin below logo
- Drop shadow for depth
- Hover animation for interactivity

### Feeling Achieved
- ✅ Warm and welcoming
- ✅ Approachable like a neighbor
- ✅ Trust-building through openness
- ✅ Friendly and conversational
- ✅ Light and airy (not heavy/corporate)

### Improvements Over V1
- Much warmer and more inviting
- Better reflects "local shop" vibe
- More conversational headline
- Easier on the eyes (light background)
- Logo feels integrated, not "stuck on"
- Subtle pattern adds interest without distraction

---

## Version 3 - Split Screen (with accent lines)

**Status:** 📦 Archived

### Implementation Details

**Layout:**
- 50/50 split screen design
- Left side: Dark background with logo and value props
- Right side: Light background with headline and CTA
- Responsive: Stacks vertically on mobile/tablet

**Left Side (Visual):**
- Dark gradient background (#1a1a1a to #2c2c2c)
- Subtle diagonal red tire-tread pattern (5% opacity)
- MT Tires logo (400px max-width)
- Three accent lines with key values:
  - "Quality Service"
  - "Fair Prices"
  - "Honest Advice"
- Red left border on accent text
- Semi-transparent red background on text

**Right Side (Content):**
- Light gradient background (#f8f9fa to white)
- Left-aligned text for better readability
- "Hey Neighbor! Need Tires?" headline
- Conversational subtitle
- Red CTA button

**Colors:**
- Left: Dark (#1a1a1a) with red accents
- Right: Light (#f8f9fa to white)
- Accent bars: Red (#E31E24)
- Text overlay: rgba(227, 30, 36, 0.1)

**Typography:**
- Headline: 3.5rem, bold, left-aligned
- Subtitle: 1.25rem, comfortable line height
- Accent text: 1.3rem, semi-bold

**Responsive Behavior:**
- Desktop: Side-by-side (50/50)
- Tablet (≤768px): Stacked vertically, centered text
- Mobile (≤480px): Smaller logo, compact spacing

### Feeling Achieved
- ✅ Dynamic and modern
- ✅ Personal connection through value props
- ✅ Professional yet approachable
- ✅ Clear visual hierarchy
- ✅ Story-telling layout (values on left, CTA on right)

### Improvements Over V2
- More visual interest with split design
- Better use of white space
- Stronger brand presence (logo + values)
- More professional while maintaining warmth
- Better storytelling (what we offer → take action)
- Creates visual flow: logo → values → headline → CTA

---

## Version 3.1 - Split Screen Clean (Logo Focus)

**Status:** 📦 Archived

### Implementation Details

**Layout:**
- 50/50 split screen design (same as V3)
- Left side: Dark background with LOGO ONLY (clean, minimal)
- Right side: Light background with headline and CTA
- Responsive: Stacks vertically on mobile/tablet

**Left Side (Visual) - SIMPLIFIED:**
- Dark gradient background (#1a1a1a to #2c2c2c)
- Subtle diagonal red tire-tread pattern (5% opacity)
- MT Tires logo - **LARGER and MORE PROMINENT**
  - Desktop: 520px max-width (vs 400px in V3)
  - Tablet: 420px
  - Mobile: 320px
- Enhanced drop shadow for depth
- Smooth hover animation (scale to 1.04)
- **NO accent lines** - logo is the star

**Right Side (Content):**
- Unchanged from V3
- Light gradient background (#f8f9fa to white)
- Left-aligned text for better readability
- "Hey Neighbor! Need Tires?" headline
- Conversational subtitle
- Red CTA button

**Colors:**
- Left: Dark (#1a1a1a to #2c2c2c) with red pattern
- Right: Light (#f8f9fa to white)
- Logo shadow: Enhanced for prominence

**Typography:**
- Same as V3
- Headline: 3.5rem, bold, left-aligned
- Subtitle: 1.25rem, comfortable line height

**Key Differences from V3:**
- ❌ Removed "Quality Service / Fair Prices / Honest Advice" accent lines
- ✅ Logo increased from 400px to 520px (30% larger)
- ✅ Enhanced drop shadow (12px vs 8px blur, deeper opacity)
- ✅ Cleaner, more minimal left side
- ✅ Logo is now the undisputed focal point

### Feeling Achieved
- ✅ Clean and modern
- ✅ Logo-centric branding
- ✅ Less busy, more impactful
- ✅ Professional minimalism
- ✅ Strong brand presence without distraction
- ✅ Balanced: Bold logo on left, warm content on right

### Improvements Over V3
- Cleaner, less cluttered design
- Logo commands more attention
- More breathing room and white space
- Simpler visual hierarchy
- Better balance between sides
- More elegant and refined
- Logo tells the story without needing extra text

### Philosophy
"Let the logo speak for itself. The brand is strong enough without extra messaging on the visual side. Keep it clean, keep it bold."

---

## Version 4 - Gradient Red to Black (Suggested)

**Status:** 💡 Idea

### Design Changes
- Diagonal gradient from brand red to black
- White text throughout
- Logo integrated into the flow
- Dynamic and energetic

### Colors
- Gradient: Red (#E31E24) → Dark Red → Black
- Text: Pure white
- CTA: White button with red text (inverted)

### Feeling Target
- Bold and energetic
- Eye-catching
- Modern and dynamic
- Strong brand presence

---

## Version 5 - White/Clean with Red Accents (Suggested)

**Status:** 💡 Idea

### Design Changes
- Clean white background
- Red accent bar or shape
- Minimalist approach
- Logo in full color (stands out against white)
- Dark text for contrast

### Colors
- Background: Pure white or off-white
- Text: Dark gray/black
- Accent: Brand red in strategic places
- CTA: Solid red button

### Feeling Target
- Clean and trustworthy
- Easy to read
- Modern simplicity
- Professional but approachable

---

## Comparison Matrix

| Version | Warmth | Professional | Approachable | Modern | Bold |
|---------|--------|-------------|--------------|--------|------|
| V1 (Current) | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| V2 (Light) | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| V3 (Split) | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| V4 (Red Gradient) | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| V5 (White Clean) | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |

---

## Recommendations

Based on the goal of "conversational, approachable, like a local shop talking to neighbors":

**Best Options:**
1. **Version 2 (Light & Friendly)** - Most aligned with the warm, neighborhood feel
2. **Version 3 (Split Screen)** - Shows personality and builds personal connection
3. **Version 5 (White Clean)** - Balance of professional and approachable

**To Test:**
- Version 2 first (easiest to implement, most different from current)
- Get feedback
- Try Version 3 or 5 next

---

## Next Steps

1. Which version would you like to see implemented first?
2. Any specific elements from multiple versions to combine?
3. Do you have photos of your shop/team for Version 3?
