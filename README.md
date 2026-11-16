# Faanj

Astro + React islands + Tailwind CSS v4 + Framer Motion.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
```

## Structure
- `src/pages` – routes (`.astro`)
- `src/layouts` – page shells
- `src/components/layout` – Header, Footer (static Astro)
- `src/components/sections` – page sections (static Astro)
- `src/components/islands` – React + Framer Motion (hydrated with `client:*`)
- `src/data` – content/config (nav, services)
- `src/styles/global.css` – Tailwind import + `@theme` design tokens
