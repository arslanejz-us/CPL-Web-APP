# CPL Web — Custom Packaging Lane Website

A modern, high-performance marketing website for **Custom Packaging Lane (CPL)** built with Next.js 15 and the React 19 App Router. The site is designed to showcase packaging products, capture leads, and convert visitors into customers through a premium UI and seamless user experience.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router) |
| **UI Library** | React 19 |
| **Language** | TypeScript 5 |
| **Styling** | CSS Modules + Vanilla CSS |
| **Image Optimization** | `next/image` (built-in) |
| **Routing** | Next.js App Router (file-based) |
| **Linting** | ESLint 9 + eslint-config-next |
| **Package Manager** | npm |
| **Node Requirement** | >= 20.9.0 |
| **Build Tool** | Webpack (via Next.js) |

> **Note:** TailwindCSS is installed as a dev dependency but is not actively used. All styles are written in CSS Modules for maximum control and performance.

---

## 🗂️ Project Structure

```
d:/CPL React/
├── public/
│   ├── images/
│   │   ├── hero-bg.png               # Primary hero/placeholder product image
│   │   └── website-logo.webp         # Brand logo used in header & mobile menu
│   └── brand-logos/                  # Client/partner brand logos (12 logos)
│       ├── Bakers-Recovery.png
│       ├── Beetle-Juice.png
│       ├── BluBlocker.png
│       ├── Calvin-Klein.png
│       ├── Culturelle.png
│       ├── Dole.png
│       ├── Harmless.png
│       ├── Haygood.png
│       ├── Old-Spice.png
│       ├── Primary-Arms.png
│       ├── Spinster.png
│       └── Viome.png
│
├── src/
│   ├── app/                          # Next.js App Router pages
│   │   ├── globals.css               # Global styles & CSS design tokens
│   │   ├── layout.tsx                # Root layout (wraps all pages)
│   │   ├── page.tsx                  # Homepage (assembles all sections)
│   │   ├── about-us/                 # About Us page route
│   │   └── contact-us/               # Contact Us page route
│   │
│   ├── components/                   # Reusable UI components
│   │   ├── Header.tsx                # Sticky navigation header
│   │   ├── Header.module.css
│   │   ├── Hero.tsx                  # Homepage hero slider
│   │   ├── Hero.module.css
│   │   ├── BrandLogoSlider.tsx       # Infinite auto-scrolling brand logos
│   │   ├── BrandLogoSlider.module.css
│   │   ├── TopPackagingStyles.tsx    # Product card slider section
│   │   ├── TopPackagingStyles.module.css
│   │   ├── WhyChooseUs.tsx           # Trust/benefits section
│   │   ├── WhyChooseUs.module.css
│   │   ├── QuoteModal.tsx            # Quote request form modal
│   │   ├── QuoteModal.module.css
│   │   ├── Footer.tsx                # Site footer
│   │   └── Layout.tsx                # Shared layout wrapper
│   │
│   └── data/                         # JSON-driven content
│       ├── Top-Packaging-Styles.json # Product card data for slider
│       └── PROJECT.md                # This file
│
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── postcss.config.mjs
```

---

## 🎨 Design System

All brand colors are centralized as **CSS variables** in `src/app/globals.css`:

```css
:root {
  --primary-dark:   #06544a;   /* Dark green — headings, body text */
  --primary-green:  #0b786c;   /* Bright green — hover states, stars */
  --primary-orange: #ff6b00;   /* Orange — CTA buttons, highlights */
  --text-gray:      #7a7a7a;   /* Muted secondary text */
  --border-light:   #eaeaea;   /* Subtle card/section borders */
  --background:     #fafafa;   /* Page background */
}
```

---

## 🧩 Components Overview

### `Header.tsx`
- Sticky responsive navigation bar.
- Contains the **brand logo** (`website-logo.webp`), desktop nav links (Home, Products, Industries, Blog, About, Contact), and a **"Rush Order"** CTA button.
- On mobile: collapses to a hamburger menu with a slide-in overlay.
- The "Rush Order" button opens the **QuoteModal** popup.

### `Hero.tsx`
- Full-width split-screen hero section.
- Auto-playing image slider using `hero-bg.png`.
- Includes a headline, subtext, and a CTA button that triggers the **QuoteModal**.

### `BrandLogoSlider.tsx`
- Infinite auto-scrolling logo carousel.
- Displays 12 client/partner brand logos from `public/brand-logos/`.
- Uses pure CSS keyframe animation — no JS libraries required.
- Embedded in the top bar of the **TopPackagingStyles** section.

### `TopPackagingStyles.tsx`
- Main product discovery section on the homepage.
- **Top Bar**: Shows trust signals ("Serving 5000+ Happy Customers!", Trustpilot 4.9) on the left and the **BrandLogoSlider** on the right.
- **Header Row**: Section title, subtitle, and "VIEW ALL →" link.
- **Product Card Slider**: Horizontal scroll-snap slider driven entirely by `Top-Packaging-Styles.json`. Each card shows:
  - Product image
  - Category tag (e.g. "Eco-Friendly", "Box Style")
  - Product title
  - "Request a Quote" button (gray, turns theme-green on hover) — opens **QuoteModal**.
- Left/right arrow controls for manual navigation.
- Pseudo-infinite scroll: cards are duplicated 20× and the scroll starts in the middle.

### `WhyChooseUs.tsx`
- Trust and benefits section highlighting key selling points.

### `QuoteModal.tsx`
- Full-screen overlay form modal for lead capture.
- Triggered from: Header "Rush Order" button, Hero CTA, and every product card's "Request a Quote" link.
- Includes comprehensive form fields with validation.

### `Footer.tsx`
- Site-wide footer.

---

## 📦 Data Files

### `src/data/Top-Packaging-Styles.json`
JSON array that drives the product card slider. Each entry has:

```json
{
  "tag": "Box Style",       // Small capsule label above title
  "title": "Cigarette Boxes", // Product name
  "image": "/images/hero-bg.png", // Image path (relative to /public)
  "link": "#"               // Click destination for the full card
}
```

To **add a new product**, simply add a new object to this array. No code changes needed.

---

## ⚙️ Scripts

```bash
npm run dev       # Start dev server on port 3005
npm run build     # Build production bundle
npm run start     # Start production server
npm run lint      # Run ESLint
```

> **Port conflict tip:** If port 3005 is busy, run:
> ```bash
> npx kill-port 3005
> ```

---

## 🔮 Planned / Upcoming Features

- [ ] **Google reCAPTCHA v3** on QuoteModal (site key: `6LflMn8qAAAAAEml727T6DSyC55560peec7pbXk2`)
- [ ] **API Integration** — Connect QuoteModal form to backend submission endpoint
- [ ] **Site-wide Preloader** — Branded loading screen on first visit
- [ ] **Unique Product Images** — Replace `hero-bg.png` placeholder with real product photos in the JSON
- [ ] **Core Web Vitals Audit** — Verify LCP, CLS, and TBT scores on mobile
- [ ] **Products Page** — Full product catalog with filters
- [ ] **Industries Page** — Vertical-specific landing pages

---

## 📝 Notes

- The project enforces a **light theme only** — dark mode is intentionally disabled in `globals.css` to maintain brand consistency.
- All animation (logo slider, card hover) uses **pure CSS** for best performance.
- The `next/image` component is used for all images to ensure automatic WebP conversion and responsive sizing.
