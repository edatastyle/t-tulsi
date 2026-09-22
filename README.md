# Ttulsi - Health Supplement Landing Page (Next.js)

This is a 100% design-faithful conversion of the original HTML template "Ttulsi - Health Supplement and Landing Page HTML" into a modern **React Next.js 14** (App Router) project.

## Features Preserved
- Exact same design, layout, colors, typography, spacing
- All sections: Hero, Features, Offer Banner, Products, Services, Packages, Team (Master Slider), Testimonials/Clients (Owl Carousel), Blog, Contact, Subscribe, Footer
- Sticky header, mobile menu, smooth scroll, preloader, AOS animations, scroll-to-top
- Blog archive and Blog details pages
- Original CSS (style.css + responsive.css), Font Awesome, Flaticon, Bootstrap 4, Master Slider, Owl Carousel, AOS

## Project Structure
```
tulsi-next/
├── app/
│   ├── layout.tsx          # Root layout + global scripts + metadata
│   ├── page.tsx            # Home / Landing page
│   ├── blog/page.tsx       # Blog archive
│   ├── blog-details/page.tsx
│   └── globals.css         # Imports original CSS
├── public/
│   ├── css/                # Original styles
│   ├── fonts/              # Font Awesome + Flaticon
│   ├── images/             # All template images
│   ├── js/theme.js         # Original theme logic
│   └── vendor/             # jQuery, Bootstrap, plugins...
└── package.json
```

## Getting Started

```bash
cd tulsi-next
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Notes
- Uses original jQuery-based plugins via `next/script` for 100% visual and interaction fidelity.
- Contact form still points to original PHP endpoint (update as needed for production).
- All asset paths updated to Next.js `/public` convention.
- No design elements removed or altered.

## Build for Production
```bash
npm run build
npm start
```
