# Acesens — Company Website

A modern, animated marketing site for **Acesens**, a (fictional) growth
partner offering **Digital Marketing, Amazon Growth, and AI Systems**. Built
with **Vite + React + TypeScript + Tailwind CSS + Framer Motion**, plus a
**React Three Fiber** 3D showcase.

> All content is placeholder copy for demonstration purposes.

## Features

- **Seven pages** — Home, Services, Portfolio, Case Studies, About Us,
  Insights, and Contact — with a shared navbar and footer.
- **Animated navigation** with a scroll-aware bar, animated active-link
  indicator (shared layout), a Services hover **dropdown**, and an animated
  mobile menu.
- **Scroll-reveal animations** throughout via staggered containers.
- **Hero micro-interactions** — a cursor-tilting glass "ACESENS" cube with
  labeled capability panels, floating stat cards (mini line/bar graphs), and
  capability chips.
- **Animated stat counters** that count up when scrolled into view.
- **Custom AI Systems 3D section** — a lazy-loaded React Three Fiber scene:
  an auto-rotating glass cube with a glowing particle-node "brain" inside on
  a bloom-lit pedestal, surrounded by six feature cards linked by animated
  glowing lines. Particle count is capped, the heavy scene is code-split and
  only mounts near the viewport, and a static fallback renders for
  `prefers-reduced-motion` or browsers without WebGL.
- **Three service pillars** — Digital Marketing, Amazon Growth, and AI
  Systems — each shown as a large card and as its own anchored section.
- **Portfolio** — filterable grid of categorized case-study cards.
- **Reviews marquee** — an infinite right-to-left auto-scroll that pauses on
  hover, freezes (becoming manually scrollable) under
  `prefers-reduced-motion`, and has optional prev/next arrow controls.
- **Page transitions** with `AnimatePresence`, plus hash-anchor scrolling.
- **Interactive contact forms** (page + footer) with animated success states.

## Branding

- **Backgrounds:** very dark navy-black (`#050B14`–`#0A1220`) throughout, with
  a subtle circuit/grid pattern and drifting blue glows (no photography).
- **Backgrounds:** each section uses a radial gradient — lighter toward the
  centre (`#101F33`), fading to near-black navy (`#050B14`) at the edges.
- **Panels:** iOS-style **white frosted glass** — a light translucent white
  fill, a soft white hairline border, and backdrop blur (`.glass`). Accent
  blue is confined to details inside (a stat figure, a graph line, an icon),
  never the card surface.
- **Accent:** rich medium blue (`#3B82F6`–`#4FA3F5`) for button fills, links,
  stat numbers, icon strokes, and graph lines only.
- **Type:** Space Grotesk for headlines (tight tracking on large titles,
  uppercase wide-tracked eyebrow labels); Inter (lighter weight) for body.
  Every page's main headline uses the two-tone gradient (white line + a
  blue-white gradient line).
- **Card imagery:** each Service/Portfolio card carries a topic-relevant SVG
  illustration (`Illustration.tsx`) — an analytics dashboard with a donut
  ring, bars and sparkline for Digital Marketing, a product/rating scene for
  Amazon Growth, and a circuit-brain chip for AI Systems.
- **Logo:** the real brand render at `public/acesens-logo.png` (tightly
  cropped with its baked background keyed out so it sits cleanly on the dark
  bar). `src/components/Logo.tsx` loads it and falls back to a scalable
  inline-SVG recreation if the file is ever missing.
- Icons are simple flat/line SVGs (`src/components/Icon.tsx`).

## Tech stack

| Tool | Purpose |
| --- | --- |
| Vite | Dev server & build |
| React + TypeScript | UI & type safety |
| Tailwind CSS | Styling / design system |
| Framer Motion | Animation & motion |
| React Three Fiber + drei + postprocessing | 3D Custom AI Systems showcase |
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
  components/      Reusable UI (Navbar, Footer, Logo, hero visual, marquee, …)
    ai/CubeScene   Lazy-loaded React Three Fiber 3D scene
  pages/           Home, Services, Portfolio, CaseStudies, About, Insights, Contact
  data/            Placeholder site content (services, projects, reviews, …)
  lib/             Shared Framer Motion variants
```
