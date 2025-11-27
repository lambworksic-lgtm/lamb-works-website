# Lamb Works Corporation - Design Specifications

## Color Palette

### Primary Colors
- **Brand Gold/Yellow**: `#D4A017` - Main brand color
- **Dark Gold**: `#B8860B` - Secondary brand color for gradients
- **Dark Gray/Black**: `#1a1a1a` - Primary text and footer background
- **Light Gray**: `#a6a6a5` - Secondary text in footer

### Background Colors
- **Pure White**: `#ffffff` - Card backgrounds, form backgrounds
- **Off-White**: `#fafafa` - Body background
- **Light Beige 1**: `#fefdfb` - Hero section, alternating sections
- **Light Beige 2**: `#faf8f3` - Network section, alternating sections

### Text Colors
- **Primary Text**: `#1a1a1a` - Headings and body text
- **Secondary Text**: `#4a4a4a` - Navigation links
- **Tertiary Text**: `#6a6a6a` - Descriptions and subtitles
- **Muted Text**: `#8a8a8a` - Labels
- **Light Text**: `#b0b0b0` - Footer text
- **White Text**: `#ffffff` - Footer and buttons

### Border Colors
- **Light Border**: `rgba(212, 160, 23, 0.1)` - Card borders
- **Strong Border**: `rgba(212, 160, 23, 0.2)` - Badge borders
- **Divider**: `#f0f0f0` - Mobile menu dividers
- **Footer Divider**: `rgba(255, 255, 255, 0.1)`

---

## Typography

### Font Families
- **Headings (H1-H6)**: `'Space Grotesk', sans-serif`
- **Body Text**: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- **Logo/Brand**: `'Yeseva One', serif`

### Font Sizes

#### Desktop
- **H1 (Hero Title)**: `3.5rem` (56px)
- **H2 (Section Titles)**: `2.75rem` (44px)
- **H3 (Subsection)**: `2rem` (32px)
- **H4 (Card Titles)**: `1.25rem` (20px)
- **Body Large**: `1.2rem` (19.2px) - Hero subtitle
- **Body Regular**: `1.1rem` (17.6px) - Section descriptions
- **Body Base**: `1rem` (16px) - General text
- **Body Small**: `0.95rem` (15.2px) - Form inputs, buttons
- **Caption**: `0.9rem` (14.4px) - Labels
- **Small**: `0.85rem` (13.6px)

#### Mobile (max-width: 768px)
- **H1 (Hero Title)**: `2.25rem` (36px)
- **H2 (Section Titles)**: `2rem` (32px)
- **Body Large**: `1rem` (16px)
- **Body Base**: `0.95rem` (15.2px)

#### Mobile Small (max-width: 480px)
- **H1 (Hero Title)**: `1.75rem` (28px)

### Font Weights
- **Regular**: `400`
- **Medium**: `500`
- **Semi-Bold**: `600`
- **Bold**: `700`

### Line Heights
- **Tight**: `1` - Logo, stat numbers
- **Snug**: `1.2` - Headings, titles
- **Normal**: `1.6` - Body text, descriptions
- **Relaxed**: `1.7` - Service descriptions
- **Loose**: `1.8` - About section paragraphs

---

## Spacing & Layout

### Container
- **Max Width**: `1400px`
- **Padding**: `0 2rem` (desktop), `0 1rem` (mobile)

### Section Padding
- **Desktop**: `6rem 2rem` (96px top/bottom, 32px left/right)
- **Tablet**: `4rem 1.5rem`
- **Mobile**: `4rem 1.5rem`

### Component Spacing
- **Gap Small**: `0.5rem` (8px)
- **Gap Medium**: `1rem` (16px)
- **Gap Large**: `2rem` (32px)
- **Gap XL**: `3rem` (48px)

### Margins
- **Section Header Bottom**: `4rem` (64px)
- **Card Spacing**: `2rem` (32px)
- **Paragraph Bottom**: `1.5rem` (24px)

---

## Components

### Navigation Bar
- **Position**: Fixed, top: 0
- **Background**: `rgba(255, 255, 255, 0.95)` with `backdrop-filter: blur(12px)`
- **Border Bottom**: `1px solid rgba(212, 160, 23, 0.1)`
- **Padding**: `1rem 0`
- **Z-index**: `1000`

#### Logo
- **Image Size**: `50px × 50px`
- **Font**: Yeseva One, `1.25rem` (20px)
- **Color**: `#1a1a1a`
- **Gap**: `1rem` (16px)

#### Nav Links
- **Font Size**: `0.95rem` (15.2px)
- **Font Weight**: `500`
- **Color**: `#4a4a4a`
- **Hover Color**: `#D4A017`
- **Gap Between Links**: `2rem` (32px)
- **Underline on Hover**: `2px` height, `#D4A017`

### Buttons

#### Primary CTA Button
- **Background**: `linear-gradient(135deg, #D4A017 0%, #B8860B 100%)`
- **Color**: `white`
- **Padding**: `0.75rem 1.5rem` (12px 24px)
- **Padding Large**: `1rem 2rem` (16px 32px)
- **Border Radius**: `8px`
- **Font Weight**: `600`
- **Font Size**: `0.95rem` (15.2px)
- **Font Size Large**: `1.05rem` (16.8px)
- **Hover Effect**: `translateY(-2px)`, `box-shadow: 0 8px 20px rgba(212, 160, 23, 0.3)`

#### Outline Button
- **Background**: `transparent`
- **Color**: `#D4A017`
- **Border**: `2px solid #D4A017`
- **Padding**: `0.75rem 1.5rem`
- **Border Radius**: `8px`
- **Font Weight**: `600`
- **Hover**: Background `#D4A017`, Color `white`

### Cards

#### Standard Card
- **Background**: `white`
- **Border**: `1px solid rgba(212, 160, 23, 0.1)`
- **Border Radius**: `16px`
- **Box Shadow**: `0 4px 20px rgba(0, 0, 0, 0.05)`
- **Hover Shadow**: `0 8px 30px rgba(212, 160, 23, 0.15)`
- **Hover Transform**: `translateY(-5px)`
- **Transition**: `0.3s ease`

#### Stat Card
- **Background**: `white`
- **Border Radius**: `16px`
- **Box Shadow**: `0 4px 20px rgba(0, 0, 0, 0.05)`
- **Padding**: `2rem` (32px)
- **Min Width**: `150px`
- **Text Align**: `center`

### Forms

#### Input Fields
- **Padding**: `0.625rem 0.75rem` (10px 12px)
- **Border**: `1px solid #e5e5e5`
- **Border Radius**: `6px`
- **Font Size**: `0.95rem` (15.2px)
- **Focus Border**: `#D4A017`

#### Select Dropdown
- **Padding**: `0.625rem 0.75rem`
- **Border**: `1px solid #e5e5e5`
- **Border Radius**: `6px`
- **Font Size**: `0.95rem`
- **Background**: `white`

#### Textarea
- **Padding**: `0.625rem 0.75rem`
- **Border**: `1px solid #e5e5e5`
- **Border Radius**: `6px`
- **Font Size**: `0.95rem`
- **Rows**: `4`

#### Labels
- **Font Size**: `0.9rem` (14.4px)
- **Font Weight**: `600`
- **Color**: `#1a1a1a`
- **Margin Bottom**: `0.5rem` (8px)

---

## Section-Specific Styling

### Hero Section
- **Min Height**: `100vh`
- **Background**: `linear-gradient(180deg, #fefdfb 0%, #faf8f3 100%)`
- **Padding**: `8rem 2rem 4rem` (128px top, 32px sides, 64px bottom)
- **Text Align**: `center`

#### Hero Badge
- **Background**: `rgba(212, 160, 23, 0.1)`
- **Color**: `#B8860B`
- **Padding**: `0.5rem 1.25rem` (8px 20px)
- **Border Radius**: `50px`
- **Border**: `1px solid rgba(212, 160, 23, 0.2)`
- **Font Size**: `0.9rem` (14.4px)
- **Margin Bottom**: `2rem` (32px)

#### Hero Stats
- **Gap**: `3rem` (48px)
- **Margin Top**: `5rem` (80px)

#### Stat Number
- **Font Size**: `3rem` (48px)
- **Font Weight**: `700`
- **Color**: `#D4A017`
- **Font Family**: Space Grotesk

#### Stat Label
- **Font Size**: `1rem` (16px)
- **Color**: `#6a6a6a`
- **Margin Top**: `0.5rem` (8px)
- **Font Weight**: `500`

### About Section
- **Background**: `white`
- **Padding**: `6rem 2rem`

### Network Section
- **Background**: `linear-gradient(180deg, #faf8f3 0%, #fefdfb 100%)`
- **Padding**: `6rem 2rem`

#### Network Icon Wrapper
- **Size**: `64px × 64px`
- **Background**: `linear-gradient(135deg, rgba(212, 160, 23, 0.1) 0%, rgba(184, 134, 11, 0.1) 100%)`
- **Border Radius**: `12px`
- **Margin Bottom**: `1rem` (16px)

#### Network Icon
- **Size**: `32px × 32px`
- **Color**: `#D4A017`

### Subsidiaries Section
- **Background**: `white`
- **Padding**: `6rem 2rem`

#### Feature Badge
- **Background**: `linear-gradient(135deg, #D4A017 0%, #B8860B 100%)`
- **Color**: `white`
- **Padding**: `0.5rem 1.5rem` (8px 24px)
- **Border Radius**: `50px`
- **Font Size**: `0.9rem` (14.4px)
- **Font Weight**: `600`

#### Feature Number
- **Font Size**: `2.5rem` (40px)
- **Font Weight**: `700`
- **Color**: `#D4A017`
- **Opacity**: `0.3`
- **Font Family**: Space Grotesk
- **Margin Bottom**: `1rem` (16px)

#### Feature Item
- **Background**: `linear-gradient(135deg, #faf8f3 0%, #fefdfb 100%)`
- **Border**: `1px solid rgba(212, 160, 23, 0.1)`
- **Border Radius**: `12px`
- **Padding**: `2rem` (32px)

### Services Section
- **Background**: `linear-gradient(180deg, #faf8f3 0%, #fefdfb 100%)`
- **Padding**: `6rem 2rem`

### Investors Section
- **Background**: `linear-gradient(180deg, #faf8f3 0%, #fefdfb 100%)`
- **Padding**: `6rem 2rem`

#### Opportunity Stat
- **Font Size**: `2.5rem` (40px)
- **Font Weight**: `700`
- **Color**: `#D4A017`
- **Font Family**: Space Grotesk
- **Margin Bottom**: `0.5rem` (8px)

#### Opportunity Label
- **Font Size**: `0.95rem` (15.2px)
- **Color**: `#B8860B`
- **Font Weight**: `600`
- **Margin Bottom**: `1rem` (16px)

#### Investors CTA Box
- **Background**: `white`
- **Border Radius**: `16px`
- **Box Shadow**: `0 4px 20px rgba(0, 0, 0, 0.05)`
- **Padding**: `3rem` (48px)
- **Text Align**: `center`

### Contact Section
- **Background**: `white`
- **Padding**: `6rem 2rem`

#### Contact Grid
- **Grid**: `1fr 1.5fr` (2 columns)
- **Gap**: `3rem` (48px)

#### Contact Icon
- **Size**: `24px × 24px`
- **Color**: `#D4A017`

#### Social Links
- **Size**: `44px × 44px`
- **Background**: `linear-gradient(135deg, rgba(212, 160, 23, 0.1) 0%, rgba(184, 134, 11, 0.1) 100%)`
- **Border Radius**: `8px`
- **Color**: `#D4A017`
- **Hover Background**: `linear-gradient(135deg, #D4A017 0%, #B8860B 100%)`
- **Hover Color**: `white`
- **Hover Transform**: `translateY(-3px)`

### Footer
- **Background**: `#1a1a1a`
- **Color**: `white`
- **Padding**: `4rem 2rem 2rem` (64px top, 32px sides, 32px bottom)

#### Footer Logo
- **Image Size**: `50px × 50px`
- **Image Filter**: `brightness(0) saturate(0%) brightness(0.65)`
- **Font**: Yeseva One, `1.25rem` (20px)
- **Color**: `#a6a6a5`
- **Gap**: `1rem` (16px)

#### Footer Tagline
- **Font Size**: `0.95rem` (15.2px)
- **Color**: `#b0b0b0`
- **Line Height**: `1.6`

#### Footer Links
- **Font Size**: `0.9rem` (14.4px)
- **Color**: `#b0b0b0`
- **Hover Color**: `#D4A017`
- **Margin Bottom**: `0.75rem` (12px)

#### Footer Bottom
- **Border Top**: `1px solid rgba(255, 255, 255, 0.1)`
- **Padding Top**: `2rem` (32px)
- **Text Align**: `center`
- **Color**: `#8a8a8a`
- **Font Size**: `0.9rem` (14.4px)

---

## Grid Layouts

### Mission Cards (About Section)
- **Grid**: `repeat(auto-fit, minmax(300px, 1fr))`
- **Gap**: `2rem` (32px)

### Network Grid
- **Grid**: `repeat(auto-fit, minmax(350px, 1fr))`
- **Gap**: `2rem` (32px)

### Product Features Grid (4 items)
- **Grid**: `repeat(auto-fit, minmax(250px, 1fr))`
- **Gap**: `2rem` (32px)

### Opportunity Grid (3 items)
- **Grid**: `repeat(auto-fit, minmax(320px, 1fr))`
- **Gap**: `2rem` (32px)

---

## Animations & Transitions

### Hover Effects
- **Cards**: `transform: translateY(-5px)`, `transition: 0.3s ease`
- **Buttons**: `transform: translateY(-2px)`, `transition: 0.2s ease`
- **Social Links**: `transform: translateY(-3px)`, `transition: 0.3s ease`

### Badge Pulse Animation
```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```
- **Duration**: `2s`
- **Iteration**: `infinite`

### Nav Link Underline
- **Width Transition**: `0.3s ease`
- **From**: `width: 0`
- **To**: `width: 100%`

---

## Responsive Breakpoints

### Desktop
- **Width**: `> 1024px`
- All standard sizes apply

### Tablet
- **Width**: `768px - 1024px`
- Contact grid becomes single column
- Footer content becomes single column

### Mobile
- **Width**: `< 768px`
- Navigation becomes hamburger menu
- Hero title: `2.25rem`
- Section title: `2rem`
- Grid layouts become single column
- Stat cards: min-width `120px`

### Mobile Small
- **Width**: `< 480px`
- Hero title: `1.75rem`
- Buttons become full width
- Reduced padding on sections

---

## Special Elements

### Logo
- **Image**: Custom uploaded logo (colorful)
- **Size**: `50px × 50px`
- **Header**: Original colors
- **Footer**: Grayscale filter `brightness(0) saturate(0%) brightness(0.65)`

### Trademark Symbol (™)
- **Used On**: Rapid Feeds™, Farmcuts™, Classic Gudde™
- **Rendering**: Standard HTML `™`

### Navigation Scroll Behavior
- **Scroll**: `smooth`
- **Offset**: Accounts for fixed header

---

## Content Structure

### Navigation Items (Order)
1. Home
2. About
3. Network
4. Subsidiaries
5. Services
6. Investors
7. Contact

### Subsidiaries (6 Total)
1. Farmers Market Farms
2. Farmers Market Training
3. Rapid Feeds™
4. Farmers Market Poultry
5. Classic Gudde™
6. Farmcuts™

### Services (5 Total)
1. Exclusive Animal Buying
2. Buy Back Guarantee
3. Feed Supplements Supply
4. Integration Services
5. Investment Opportunities

### Contact Information
- **Email**: info@lambworkscorporation.in
- **Phone 1**: +91 9902514269
- **Phone 2**: +91 9108208475
- **Address**: Lamb Works India Corporation Limited, Hebbal, Bengaluru, Karnataka 560032

### Social Media
- **Facebook**: https://www.facebook.com/FarmersMarketKannada/
- **Instagram**: https://www.instagram.com/farmers_marketyt/
- **YouTube**: https://www.youtube.com/c/FarmersMarketShorts

---

## Image Assets

### Logo
- **File**: Main Logo.png
- **URL**: https://customer-assets.emergentagent.com/job_farm-integrate/artifacts/dg1tcpri_Main%20Logo.png
- **Format**: PNG with transparency
- **Colors**: Multicolor gradient (red, orange, yellow, purple)

### Image Usage
- No stock photos used
- Logo appears in navigation and footer
- All design elements are CSS-based

---

## Browser Compatibility

### Supported Browsers
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### CSS Features Used
- Flexbox
- CSS Grid
- Backdrop Filter
- Linear Gradients
- CSS Transitions
- CSS Transforms

---

## Notes for WordPress Implementation

1. **Use Elementor or Gutenberg blocks** for sections
2. **Custom CSS** will be needed for exact color matching
3. **Google Fonts integration** required for Space Grotesk, Inter, and Yeseva One
4. **Smooth scroll plugin** may be needed for navigation
5. **Contact form plugin** (Contact Form 7 or WPForms) for form functionality
6. **Consider using ACF (Advanced Custom Fields)** for dynamic content
7. **Mobile menu plugin** or custom code for hamburger navigation

---

## Additional Recommendations

### Performance
- Optimize logo image (compress PNG)
- Use font-display: swap for Google Fonts
- Lazy load images if added in future

### Accessibility
- Maintain color contrast ratios (all current colors pass WCAG AA)
- Add aria-labels to social media links
- Ensure form labels are properly associated
- Add skip navigation link

### SEO
- Add meta descriptions for each section
- Use semantic HTML (h1, h2, h3 hierarchy)
- Add alt text to logo image
- Implement schema markup for organization and contact info

---

**Document Version**: 1.0  
**Last Updated**: January 2025  
**Website**: Lamb Works Corporation  
**Built By**: Emergent AI
