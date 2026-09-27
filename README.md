# Prokop Electrical Services — Website Handoff

Welcome to the new Prokop Electrical Services website project. This document serves as the final handoff guide, detailing the technology stack, project architecture, and instructions for future maintenance.

---

## 🛠 Technology Stack

This website is built with modern, high-performance web technologies:
- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (using CSS variables & `@theme inline`)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** Inter (via `next/font/google`)
- **SEO:** Dynamic OpenGraph metadata, JSON-LD LocalBusiness schema, auto-generating `sitemap.xml`

---

## 📂 Project Architecture

The project is structured logically to separate concerns (Data vs. UI):

```text
f:\prokop\
├── app/                  # Next.js App Router (Pages & Layout)
│   ├── layout.tsx        # Root layout, SEO metadata, Navigation & Footer wrappers
│   ├── page.tsx          # Homepage (combines all sections)
│   ├── sitemap.ts        # Auto-generated XML sitemap
│   ├── globals.css       # Design tokens, Tailwind config, utility classes
│   └── (about, contact, projects, services)/ # Sub-page routes
├── components/           # Reusable React Components
│   ├── Navbar.tsx        # Responsive header with scroll-effects
│   ├── Footer.tsx        # Comprehensive 4-column footer
│   ├── Hero.tsx          # Main landing banner
│   ├── Services.tsx      # Services grid overview
│   ├── ProjectGallery.tsx# Interactive masonry/grid portfolio with filters
│   ├── ContactForm.tsx   # Client-side validated form
│   └── (others...)
├── data/                 # Single Source of Truth for Site Content
│   ├── company.ts        # Phone, email, address, social links
│   ├── services.ts       # Services list, descriptions, and icon mappings
│   └── projects.ts       # Portfolio gallery data mapping to images
├── types/                # TypeScript interfaces
│   └── index.ts          # Shared types across the app
└── public/
    └── images/           # All static image assets (optimized via next/image)
```

---

## 🎨 Design System

The visual design is strictly governed by CSS variables defined in `app/globals.css`. 

**Brand Palette:**
- **Primary Backgrounds:** `#0B1220`, `#111827`
- **Primary Text:** `#FFFFFF`, `#F8FAFC`
- **Secondary Text:** `#CBD5E1`, `#94A3B8`
- **Blue Accent:** `#2563EB`, `#3B82F6` (CTAs, Highlight, Trust markers)
- **Yellow Accent:** `#FACC15` (Stars, Highlights)
- **Border:** `#334155`

If you ever need to change a brand color, simply update the CSS variable in `app/globals.css` and the entire site (including hover states and gradients) will update automatically.

---

## 📝 How to Update Site Content

We have decoupled the data from the UI to make updates extremely easy. You do not need to touch the React components to update text or images.

### 1. Updating Company Details (Phone, Address, Email)
Edit `data/company.ts`.
Any changes here will automatically ripple across the Navbar, Footer, Contact Page, and the hidden SEO JSON-LD schema.

### 2. Adding or Editing Services
Edit `data/services.ts`.
You can modify the title, description, or change the `iconName` (must match a valid exported icon from Lucide React).

### 3. Adding New Projects to the Gallery
1. Place your new image in `public/images/` (e.g., `new-job.jpg`).
2. Edit `data/projects.ts`.
3. Add a new entry to the `projects` array:
   ```typescript
   {
     id: "proj-10",
     title: "New Commercial Fitout",
     category: "Commercial",
     imageSrc: "/images/new-job.jpg",
     imageAlt: "Commercial fitout in Melbourne",
     description: "Brief description of the work done.",
   }
   ```
The gallery component will automatically detect the new category, add a filter button for it, and display the image.

---

## 🚀 Running & Deploying the Project

### Local Development
To run the site locally on your machine:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or 3001 if 3000 is in use) in your browser.

### Production Build
To test the production build locally:
```bash
npm run build
npm run start
```

### Deployment
This project is perfectly optimized for deployment on [Vercel](https://vercel.com). Simply link your Git repository to Vercel, and it will automatically build and deploy with zero configuration required.

---
*Built by Antigravity AI — Phase 20 Completed.*
