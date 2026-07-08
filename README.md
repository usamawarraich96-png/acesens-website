# Acesens — Company Website

A modern, animated marketing site for **Acesens**, a (fictional) intelligent
sensing and analytics company. Built with **Vite + React + TypeScript +
Tailwind CSS + Framer Motion**.

> All content is placeholder copy for demonstration purposes.

## Features

- **Four pages** — Home, About, Services, and Contact — with a shared
  navbar and footer.
- **Animated navigation** with a scroll-aware bar, animated active-link
  indicator (shared layout), and an animated mobile menu.
- **Scroll-reveal animations** throughout via a reusable `Reveal` component
  and staggered containers.
- **Hero micro-interactions** — a cursor-tilting 3D sensor-orbit graphic,
  floating telemetry chips, and a pulsing core.
- **Animated stat counters** that count up when scrolled into view.
- **Page transitions** between routes with `AnimatePresence`.
- **Interactive contact form** with an animated success state.
- Respects `prefers-reduced-motion`.

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
  components/   Reusable UI (Navbar, Footer, cards, hero visual, …)
  pages/        Home, About, Services, Contact
  data/         Placeholder site content
  lib/          Shared Framer Motion variants
```
