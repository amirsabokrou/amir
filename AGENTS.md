# TEEN STUDIO — Development Setup

## Stack
- Vite 6 + React 18 + TailwindCSS 3
- Single-page cinematic portfolio website (no routing, no backend)
- Contact form uses WhatsApp fallback (no database)

## Running
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
Dev server runs on port 3000 with hot reload. First start runs `npm install` inside the container.

## Architecture
- `src/data/content.js` — all site content (services, portfolio, testimonials, contact info, images)
- `src/components/` — reusable React components
- `src/hooks/useScrollSpy.js` — active nav section detection
- `src/components/Reveal.jsx` — scroll-triggered fade-in wrapper (IntersectionObserver)

## Contact Form
Validates client-side, then constructs a WhatsApp message with form details and opens `https://wa.me/989332856442`. No backend or database. The secondary CTA opens WhatsApp with a pre-filled greeting.

## Showreel
`config.showreelUrl` in `src/data/content.js` is `null`. The showreel button opens a "coming soon" modal. Set it to a video URL to enable the player.

## Images
All images use Unsplash CDN URLs defined in `src/data/content.js`. Replace the photo IDs with real project imagery before launch.

## No Secrets Required
The app has no external service dependencies. No environment secrets are needed.
