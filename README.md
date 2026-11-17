# Ex_press — Ultra-Premium Car & Bike Detailing Platform

A cinematic, animation-rich web application built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed for an automotive detailing brand with vehicle-tier pricing, interactive before/after transformation sliders, and a step-by-step WhatsApp booking wizard.

---

## 🚀 Key Highlights & Architecture

### 1. Centralized Business Configuration (`src/data/business.ts`)
- **Working Brand**: Defaulted to `Ex_press`.
- **Alternative Signboard Names**: `ONE STOP Car & Bike Foam Wash SPA` / `SLA GROUPS`.
- **Contact & WhatsApp**: `+91 7406322238`.
- **Location Transparency**: Includes verifiable address flags to prevent fabricating unconfirmed coordinates.
- **Service Standard**: Advertised minimum washing time of **45 minutes**.

### 2. Complete 7-Page Sitemap
- `/` — **Cinematic Landing Page**: Dramatic headline, 3D pointer parallax, why choose us, featured services, interactive before/after preview, customer review highlights, and conversion CTA.
- `/about` — **Brand Heritage & Process**: Editorial brand story, core values, and 4-stage systematic detailing workflow (Intake -> Assessment -> Foam Detailing -> Showroom Inspection).
- `/services` — **Interactive Catalog & Pricing**: Live vehicle category switcher (Small, M SUV, SUV XL, Two-Wheeler), category filters, expandable treatment details, and a master Signboard Matrix table.
- `/gallery` — **Before & After Portfolio**: Multi-transformation comparison slider (Paint Correction, Interior Steam, Ceramic Hydrophobic Beading) and responsive masonry grid with fullscreen accessible lightbox.
- `/testimonials` — **Driver Experiences**: Verified customer reviews, genuine rating badges, and an interactive feedback submission form connected to WhatsApp.
- `/faq` — **Frequently Asked Questions**: Searchable, categorized accordions addressing the 45-minute minimum wash rule, vehicle size tiers, and ceramic coating curing.
- `/contact` — **Bay Booking & Direct Line**: Validated contact form, click-to-call, direct WhatsApp routing, and GPS pin on booking confirmation.

### 3. Signature Interactive Experiences
- **Custom Automotive Cursor** (`src/components/ui/CustomCursor.tsx`): Smooth trailing desktop cursor with contextual modes (`DRAG`, `VIEW`).
- **Cinematic Dark Preloader** (`src/components/ui/Preloader.tsx`): Branded mask reveal with lime-yellow accent loading bar.
- **Interactive Before/After Slider** (`src/components/gallery/BeforeAfterSlider.tsx`): Drag handle, mouse/touch support, and keyboard arrows (`ArrowLeft` / `ArrowRight`).
- **Interactive Booking Wizard** (`src/components/booking/BookingWizardModal.tsx`): 6-step scheduler generating formatted, URL-encoded WhatsApp enquiries to `+91 7406322238`.

---

## 🛠️ Technology Stack
- **Framework**: Next.js 14.2 (App Router)
- **Language**: TypeScript (Strict mode)
- **Styling**: Tailwind CSS with custom automotive design tokens
- **Icons**: Lucide React
- **SEO**: Dynamic JSON-LD LocalBusiness Schema, OpenGraph, `robots.txt`, and `sitemap.xml`

---

## 💻 Local Development

Run the development server outside the sandbox:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

To build for production:
```bash
npm run build
npm start
```
