# Lumiere Atelier Website

Production-ready portfolio website for a premium beauty salon / self-care studio.
Built with Next.js App Router, TypeScript, Tailwind CSS, and subtle Framer Motion interactions.

## What this project includes

- Multi-page salon website: Home, Services, Service detail, Team, Gallery, Booking, Contact
- Full multilingual support: English, Russian, Spanish
- Language switcher in the header with persistent cookie-based preference
- Mobile quick booking flow with floating action button and modal
- Booking form with realistic success state and UX microcopy
- Content-heavy trust sections:
  - Treatment Philosophy
  - Products / Ingredients
  - Before / After cases
  - How It Works
  - Enhanced Testimonials
  - Expert Credibility
  - FAQ
  - Membership packages
  - Studio Experience

## Tech stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Local development

Install dependencies:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Open http://localhost:3000

## Quality checks

Lint:

```bash
npm run lint
```

Production build:

```bash
npm run build
```

## Project structure (high level)

- `app/` - routes and page composition
- `components/layout/` - global layout pieces (navbar, footer, mobile CTA, cookie banner)
- `components/sections/` - reusable content sections
- `components/ui/` - small UI primitives
- `lib/i18n.ts` - locale model and cookie locale resolution
- `lib/salon-data.ts` - fully localized business content and data helpers

## Notes

- All visual styling follows one premium design system (no per-language style drift).
- Language preference is stored in cookie `locale` and applied globally.
- AGENTS and CLAUDE local instruction files are intentionally ignored in git.
