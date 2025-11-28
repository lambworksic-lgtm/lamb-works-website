# Lamb Works Corporation - Static Website

## Overview
This is a fully static HTML/CSS/JavaScript website for Lamb Works Corporation. No backend or database required.

## Files
- `index.html` - Main HTML file
- `styles.css` - All styling
- `script.js` - JavaScript for navigation and interactions

## Features
- ✅ Fully responsive design
- ✅ Smooth scrolling navigation
- ✅ Mobile hamburger menu
- ✅ All sections included
- ✅ Contact information displayed (form removed)
- ✅ Social media links
- ✅ Modern animations and transitions

## Sections
1. Hero with stats
2. About Lamb Works
3. Farming Network
4. Subsidiaries (6 companies)
5. Services (5 services)
6. Investor Opportunities
7. Contact Information
8. Footer

## Deployment Options

### Option 1: Vercel (Recommended)
1. Push these files to GitHub repository
2. Go to https://vercel.com
3. Click "New Project"
4. Import your GitHub repository
5. Deploy!

**Custom Domain Setup:**
1. In Vercel dashboard → Settings → Domains
2. Add your GoDaddy domain
3. Follow Vercel's DNS instructions
4. Update nameservers in GoDaddy or add A/CNAME records

### Option 2: Netlify
1. Drag and drop the `static-website` folder to https://app.netlify.com/drop
2. Or connect via GitHub for automatic deploys

### Option 3: GitHub Pages
1. Push to GitHub repository
2. Go to Settings → Pages
3. Select main branch
4. Site will be live at username.github.io/repo-name

### Option 4: Any Static Hosting
These are just HTML/CSS/JS files - they can be hosted anywhere:
- AWS S3 + CloudFront
- Google Cloud Storage
- Azure Static Web Apps
- Cloudflare Pages
- Any shared hosting with FTP

## Custom Domain with GoDaddy

### For Vercel:
1. In Vercel, add your domain (e.g., lambworks.com)
2. Vercel will show you DNS records
3. Go to GoDaddy DNS Management
4. Add records as shown by Vercel:
   - Type: A, Name: @, Value: [Vercel IP]
   - Type: CNAME, Name: www, Value: cname.vercel-dns.com
5. Wait 24-48 hours for propagation

### For Netlify:
1. Similar process with Netlify-provided DNS

## Local Testing
1. Open `index.html` in any browser
2. Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx serve
   ```
3. Visit http://localhost:8000

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Customization
- **Colors:** Edit hex codes in `styles.css`
- **Content:** Edit text directly in `index.html`
- **Logo:** Replace image URL in `index.html`
- **Fonts:** Change Google Fonts link in `<head>`

## Contact Information
- **Email:** info@lambworkscorporation.in
- **Phone 1:** +91 9902514269
- **Phone 2:** +91 9108208475
- **Address:** Lamb Works India Corporation Limited, Hebbal, Bengaluru, Karnataka 560032

## Social Media
- Facebook: https://www.facebook.com/FarmersMarketKannada/
- Instagram: https://www.instagram.com/farmers_marketyt/
- YouTube: https://www.youtube.com/c/FarmersMarketShorts

## Performance
- Lightweight (< 500KB total)
- Fast loading
- SEO friendly
- Mobile optimized

## Notes
- No contact form (removed as requested)
- All contact info is displayed with clickable links
- Logo hosted on external CDN
- All animations are CSS-based
- No external dependencies except Google Fonts

## Support
For any issues or customization needs, refer to the main documentation files:
- DESIGN_SPECIFICATIONS.md
- WORDPRESS_QUICK_GUIDE.md