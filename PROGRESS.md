# Portfolio Website — Progress

## How to use this file
Two parts: a **Roadmap** (the overarching plan, stable) and a **Session Log**
(dated entries, grows over time).

- On **"wake up"**: read this file top to bottom, confirm current phase/status,
  then plan the session.
- On **"pass off"**: check off anything completed in the Roadmap, then add a
  new entry at the top of the Session Log.

⚠️ I don't have visibility into the actual codebase, so every box below starts
unchecked. Before your next Claude Code session, go through and check off
whatever's already built so this reflects reality — otherwise "wake up" will
be reading stale info.

## North star
A fully functioning, mobile-first portfolio site, live on a real domain, that
a contractor or small business owner can land on and understand the offer
("I build websites, here's proof, let's talk") in under 10 seconds — good
enough to actively use for pitching website sales in person and via QR code.

---

## Roadmap

### Phase 1 — Foundation
- [x] Next.js + TypeScript + Tailwind project scaffolded
- [ ] Vercel project connected, deploys automatically on push
- [x] Theme tokens set up (colors, fonts as CSS variables / Tailwind theme,
      not hardcoded)
- [x] Archivo Black + Inter loaded via Google Fonts
- [x] Base layout / nav shell, mobile-first breakpoints working

### Phase 2 — Home page
- [ ] Hero section built with final copy ("Websites built to win you work")
- [ ] Page-load hero animation sequence (headline → sub-line → button)
- [ ] Tap/press feedback on buttons and cards
- [ ] Smooth page transitions between routes
- [ ] CTA button wired to Contact page

### Phase 3 — About page (resume / credibility)
- [ ] Personal story / bio copy written
- [ ] Credentials list finalized — title, issuer, date, client-facing
      relevance line for each
- [ ] Certificate images cropped/redacted of personal info (address, ID
      numbers, signatures)
- [ ] Credential cards built, touch-friendly (lightbox or flip, with tap
      equivalent — not hover-only)
- [ ] Scroll-reveal animation on cards

### Phase 4 — Work page (showcase)
- [ ] Demo/mock contractor site case study built
- [ ] Case study framed for sales: problem → approach → result
- [ ] Skills / stack section
- [ ] Layout built to scale for adding real client work later

### Phase 5 — Contact page
- [ ] Form UI built
- [ ] Formspree or Web3Forms integration wired and tested end-to-end
- [ ] Soft lead-gen framing copy ("Tell me about your project")
- [ ] Success / error states handled

### Phase 6 — Motion polish
- [ ] All Tier 1 motion (scroll-reveal, hero sequence, tap feedback, page
      transitions) audited across every page
- [ ] `prefers-reduced-motion` fallback verified
- [ ] 1–2 Tier 2 signature accents chosen and implemented (e.g. sticky/
      shrinking header with Contact always in reach)

### Phase 7 — Content & business readiness
- [ ] Domain name chosen and connected
- [ ] SEO basics: meta tags, OG image, favicon
- [ ] Accessibility pass: contrast, visible keyboard focus states, alt text
- [ ] Real-device mobile QA (not just browser resize)
- [ ] Performance check — mobile Lighthouse score

### Phase 8 — Launch: sales-ready
- [ ] Site live on real domain
- [ ] Business cards with QR code linking to site printed
- [ ] Final gut-check: does the site sell the offer clearly on mobile in
      under 10 seconds?
- [ ] Ready to pitch in person (contractors, small businesses) and follow up
      into recurring digital marketing retainers

---

## Session Log
*(Most recent first)*

### 2026-07-10 — Phase 1 foundation built
- Verified environment (Node v24.18.0, npm 11.16.0, git 2.55) before starting.
- Initialized git repo.
- Scaffolded Next.js 16 (App Router) + TypeScript + Tailwind v4 by generating
  into a scratch dir and merging in, so existing CLAUDE.md/PROGRESS.md/docs/
  public/certificates weren't touched.
- Added theme tokens in `src/app/globals.css` (`--color-canvas`,
  `--color-surface`, `--color-accent`, `--color-text-high`, `--color-text-low`)
  wired into Tailwind's `@theme`, matching the palette in CLAUDE.md.
- Loaded Archivo Black + Inter via `next/font/google` in `src/app/layout.tsx`,
  exposed as `font-display` / `font-sans` utilities.
- Built base nav shell: `src/components/Header.tsx` (sticky, logo +
  About/Work/Contact links, accent Contact button) and
  `src/components/Footer.tsx`.
- Added stub routes for `/about`, `/work`, `/contact` ("Coming soon" only) so
  nav has real destinations — content is NOT built yet, that's Phase 3–5.
- Home page (`src/app/page.tsx`) has the final locked-in hero copy as static
  text — no animation sequence, no tap feedback, no CTA button yet. Phase 2
  motion work still needed.
- Verified: `tsc --noEmit` clean, `npm run lint` clean, dev server runs with
  no console/server errors, confirmed via DOM inspection (not screenshot —
  the browser screenshot tool hung/timed out this session) at both desktop
  (1280x720) and mobile (375x812) viewports.
- Nothing committed to git yet as of end of this session — working tree has
  the full scaffold staged and ready.
- Next up: Phase 2 (hero animation sequence, tap feedback, page transitions,
  CTA wiring) — or connect Vercel first to get auto-deploy going.

### [Date] — Kickoff
- Drafted this roadmap and CLAUDE.md session workflow section
- Next up: confirm which Phase 1–3 items are actually already built, then
  pick up wherever reality lands
