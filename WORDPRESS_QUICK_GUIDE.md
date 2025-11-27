# WordPress Implementation Quick Guide
## Lamb Works Corporation Website

---

## Quick Color Reference

```
Primary Brand: #D4A017 (Dark Yellow/Gold)
Dark Background: #1a1a1a
Main Text: #1a1a1a
Light Text: #6a6a6a
White Backgrounds: #ffffff, #fafafa, #fefdfb, #faf8f3
Footer Text: #a6a6a5
```

---

## Fonts to Install

Add to WordPress theme or use Google Fonts plugin:

```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=Yeseva+One&display=swap" rel="stylesheet">
```

**Font Usage:**
- **Space Grotesk**: All headings (H1-H6)
- **Inter**: Body text, paragraphs
- **Yeseva One**: Logo "LAMB WORKS CORPORATION"

---

## Button Styles (CSS)

### Primary Button
```css
.primary-btn {
  background: linear-gradient(135deg, #D4A017 0%, #B8860B 100%);
  color: white;
  padding: 16px 32px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16.8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(212, 160, 23, 0.3);
}
```

### Outline Button
```css
.outline-btn {
  background: transparent;
  color: #D4A017;
  border: 2px solid #D4A017;
  padding: 16px 32px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.outline-btn:hover {
  background: #D4A017;
  color: white;
}
```

---

## Section Backgrounds (Alternating)

```
Hero Section: linear-gradient(180deg, #fefdfb 0%, #faf8f3 100%)
About Section: #ffffff (white)
Network Section: linear-gradient(180deg, #faf8f3 0%, #fefdfb 100%)
Subsidiaries: #ffffff (white)
Services: linear-gradient(180deg, #faf8f3 0%, #fefdfb 100%)
Investors: linear-gradient(180deg, #faf8f3 0%, #fefdfb 100%)
Contact: #ffffff (white)
Footer: #1a1a1a (dark)
```

---

## Header/Navigation

- **Height**: Auto (padding 1rem = 16px)
- **Background**: Semi-transparent white `rgba(255, 255, 255, 0.95)` with blur effect
- **Position**: Fixed/Sticky at top
- **Logo Size**: 50px × 50px
- **Logo Image**: Download from `/app/` or use URL provided
- **Company Name**: "LAMB WORKS CORPORATION" in Yeseva One, 20px, color #1a1a1a

### Navigation Links
- Font: Inter, 15.2px, weight 500
- Color: #4a4a4a
- Hover: #D4A017
- Spacing: 32px between items

---

## Typography Scale

```
H1 (Hero): 56px (mobile: 28px)
H2 (Sections): 44px (mobile: 32px)
H3: 32px
H4: 20px
Body Large: 19.2px
Body Regular: 16px
Small Text: 14.4px
```

---

## Cards

### Standard Card Style
```css
.card {
  background: white;
  border: 1px solid rgba(212, 160, 23, 0.1);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  padding: 32px;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(212, 160, 23, 0.15);
}
```

---

## Page Sections in Order

1. **Hero Section**
   - Badge: "India's Next-Gen Farming Network"
   - Main heading with gradient text for "integrated farming network"
   - Subtitle paragraph
   - Two buttons: "Join Our Network" + "Invest With Us"
   - 3 stat cards: 24+ Farms, 4.5K+ Livestock, 18+ Districts

2. **About Section**
   - Title + subtitle
   - 2 paragraphs
   - 3 mission cards with icons

3. **Network Section**
   - Title + subtitle
   - 3 cards: Partner Farmers, Supply Chain, Distribution Network

4. **Subsidiaries Section**
   - Title + subtitle
   - 6 items with numbers 01-06:
     - Farmers Market Farms
     - Farmers Market Training
     - Rapid Feeds™
     - Farmers Market Poultry
     - Classic Gudde™
     - Farmcuts™

5. **Services Section**
   - Title + subtitle
   - 5 services with numbers 01-05
   - "Join Now" button

6. **Investors Section**
   - Title + subtitle
   - 3 opportunity cards
   - CTA box with "Get Investment Deck" button

7. **Contact Section**
   - 2 column layout
   - Left: Contact info (email, 2 phones, address) + social icons
   - Right: Contact form (name, email, phone, category, message)

8. **Footer**
   - Logo + tagline
   - 3 columns: Company, Opportunities, Legal
   - Copyright line

---

## Logo Implementation

**Download Logo**: `/app/Main Logo.png` or use:
```
https://customer-assets.emergentagent.com/job_farm-integrate/artifacts/dg1tcpri_Main%20Logo.png
```

**Header Logo**: Keep original colors, 50px × 50px  
**Footer Logo**: Apply grayscale filter

---

## Contact Information

**Email**: info@lambworks.in  
**Phone 1**: +91 9902514269  
**Phone 2**: +91 9108208475  
**Address**: Lamb Works India Corporation Limited, Hebbal, Bengaluru, Karnataka 560032

**Social Media**:
- Facebook: https://www.facebook.com/FarmersMarketKannada/
- Instagram: https://www.instagram.com/farmers_marketyt/
- YouTube: https://www.youtube.com/c/FarmersMarketShorts

---

## WordPress Plugins Recommended

1. **Elementor Pro** or **Beaver Builder** - For page building
2. **Contact Form 7** or **WPForms** - For contact form
3. **Google Fonts Typography** - For custom fonts
4. **Smooth Scroll** - For navigation scroll effect
5. **Custom CSS** plugin - For exact styling

---

## Mobile Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

At mobile, navigation becomes hamburger menu.

---

## Icons Needed

Use Font Awesome or similar:
- Users icon (for Partner Farmers)
- Leaf icon (for Supply Chain)
- Trending Up icon (for Distribution)
- Phone icon
- Email icon
- Map Pin icon
- Facebook, Instagram, YouTube icons

---

## Special Notes

1. **Smooth Scroll**: Enable smooth scrolling for in-page navigation
2. **Fixed Header**: Navigation should stick to top when scrolling
3. **Hover Effects**: Cards lift up on hover (-5px transform)
4. **Gradient Text**: "integrated farming network" in hero uses gold gradient
5. **TM Symbols**: Add ™ to Rapid Feeds™, Farmcuts™, Classic Gudde™

---

## Custom CSS for WordPress Theme

Add this to your WordPress theme's custom CSS:

```css
/* Primary brand color */
:root {
  --brand-gold: #D4A017;
  --dark-gold: #B8860B;
  --dark-text: #1a1a1a;
  --light-text: #6a6a6a;
}

/* Smooth scroll */
html {
  scroll-behavior: smooth;
}

/* Gradient text effect */
.gradient-text {
  background: linear-gradient(135deg, #D4A017 0%, #B8860B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## Content Tips

- Use plenty of white space
- Keep sections alternating between white and light beige backgrounds
- Use consistent 32px padding on cards
- Maintain 64px spacing between sections
- All hover effects should be smooth (0.3s transition)

---

**For full detailed specifications, see DESIGN_SPECIFICATIONS.md**
