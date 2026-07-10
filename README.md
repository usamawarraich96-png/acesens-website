# Acesens — Company Website

A modern, animated marketing site for **Acesens**, a (fictional) AI growth
platform (SaaS) spanning **Digital Marketing, Amazon Growth, and AI Systems**
modules. Built with **Vite + React + TypeScript + Tailwind CSS + Framer
Motion**, with a live canvas particle backdrop.

> All content is placeholder copy for demonstration purposes.

## Features

- **Seven pages** — Home, Platform (services), Portfolio, Case Studies,
  About Us, Insights, and Contact — with a shared navbar and footer.
- **Animated navigation** with a scroll-aware bar, animated active-link
  indicator (shared layout), a Platform hover **dropdown**, and an animated
  mobile menu.
- **Scroll-reveal animations** throughout via staggered containers.
- **Hero centerpiece** — a centered SaaS hero with three glass feature cards
  and a cursor-tilting, floating **glass dashboard mockup** (KPIs, sparkline,
  donut, bar chart, campaign table — all lightweight inline SVG).
- **Animated stat counters** that count up when scrolled into view.
- **Three platform modules** — Digital Marketing, Amazon Growth, and AI
  Systems — each shown as a large card and as its own anchored section.
- **Portfolio** — filterable grid of categorized case-study cards.
- **Reviews marquee** — an infinite right-to-left auto-scroll that pauses on
  hover, freezes (becoming manually scrollable) under
  `prefers-reduced-motion`, and has optional prev/next arrow controls.
- **Page transitions** with `AnimatePresence`, plus hash-anchor scrolling.
- **Interactive contact forms** (page + footer) with animated success states.

## Branding

- **Backgrounds:** very dark navy-black throughout with a live canvas — a
  constellation particle field (blue nodes, occasional orange), a faint
  grid, and slow-drifting blue/orange glows. Each section uses a radial
  gradient — lifted navy centre (`#131B36`) to near-black (`#070B18`) edges.
  The particle canvas pauses off-screen/hidden tabs and renders a static
  frame under `prefers-reduced-motion`.
- **Panels:** liquid glass — a light translucent white fill, a soft white
  hairline border, backdrop blur, and a faint blue glow on hover (`.glass`).
- **Accents:** a dual pair — vivid orange (`#F97316`–`#FB923C`) for primary
  CTAs, eyebrow labels, and highlighted stats; electric blue (`#4F7DF7`–
  `#6690FA`) for links, icons, graph lines, and glows.
- **Type:** Space Grotesk for headlines (tight tracking on large titles,
  uppercase wide-tracked eyebrow labels); Inter (lighter weight) for body.
  Every page's main headline uses the two-tone gradient (white line + a
  blue-white gradient line).
- **Card imagery:** each Service/Portfolio card carries a topic-relevant SVG
  illustration (`Illustration.tsx`) — an analytics dashboard with a donut
  ring, bars and sparkline for Digital Marketing, a product/rating scene for
  Amazon Growth, and a circuit-brain chip for AI Systems.
- **Logo:** the triangular A/S brand mark at `public/acesens-logo.png`
  (cropped from the supplied render, background keyed to transparent, silver
  brightened, blue glow via CSS). Rendered large in the navbar and footer;
  `src/components/Logo.tsx` falls back to an inline-SVG triangle if the file
  is missing.
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
  components/   Reusable UI (Navbar, Footer, Logo, dashboard, particles, …)
  pages/        Home, Services, Portfolio, CaseStudies, About, Insights, Contact
  data/         Placeholder site content (services, projects, reviews, …)
  lib/          Shared Framer Motion variants
```
