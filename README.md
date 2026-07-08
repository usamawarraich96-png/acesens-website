# Acesens — Company Website

A modern, animated marketing site for **Acesens**, a (fictional) growth
partner offering **Digital Marketing, Amazon Growth, and AI Systems**. Built
with **Vite + React + TypeScript + Tailwind CSS + Framer Motion**.

> All content is placeholder copy for demonstration purposes.

## Features

- **Five pages** — Home, About, Services, Portfolio, and Contact — with a
  shared navbar and footer.
- **Animated navigation** with a scroll-aware bar, animated active-link
  indicator (shared layout), and an animated mobile menu.
- **Scroll-reveal animations** throughout via a reusable `Reveal` component
  and staggered containers.
- **Hero micro-interactions** — a cursor-tilting orbit graphic, floating
  metric chips, and a pulsing core.
- **Animated stat counters** that count up when scrolled into view.
- **Three service pillars** — Digital Marketing, Amazon Growth, and AI
  Systems — each with its sub-services listed.
- **Portfolio page** — a filterable grid of categorized case-study cards,
  structured so real projects can be swapped in.
- **Reviews marquee** — an infinite right-to-left auto-scrolling row of
  client reviews that pauses on hover and freezes (becoming manually
  scrollable) under `prefers-reduced-motion`.
- **Page transitions** between routes with `AnimatePresence`.
- **Interactive contact form** with an animated success state.
- Respects `prefers-reduced-motion` throughout.

## Branding

- **Backgrounds:** deep navy/charcoal (`#0B1120`–`#16213A`) for hero and
  footer; lighter slate-blue (`#28374F`–`#2E4057`) for alternating sections.
- **Accent:** bright cyan-blue (`#3FA9F5`–`#4FC3F7`) for glow, links, stat
  highlights, and hover states.
- **Type:** Poppins (bold, all-caps, letter-spaced) for headlines; Inter for
  body. Body text `#AEB8C4`, headlines near-white.
- **Logo:** recreated as a scalable inline SVG (`src/components/Logo.tsx`) —
  cyan glowing arc + arrow accent and a metallic "ACESENS" wordmark. To use
  the exact raster instead, drop it in `public/` and swap the component for
  an `<img>`.
- Icons are simple flat/line SVGs (`src/components/Icon.tsx`).

## Tech stack

| Tool | Purpose |
| --- | --- |
| Vite | Dev server & build |
| React + TypeScript | UI & type safety |
| Tailwind CSS | Styling / design system |
| Framer Motion | Animation & motion |
| React Router | Client-side routing |

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Project structure

```
src/
  components/   Reusable UI (Navbar, Footer, Logo, hero visual, marquee, …)
  pages/        Home, About, Services, Portfolio, Contact
  data/         Placeholder site content (services, projects, reviews, …)
  lib/          Shared Framer Motion variants
```
