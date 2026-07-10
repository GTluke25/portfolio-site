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
- [x] Vercel project connected, deploys automatically on push
- [x] Theme tokens set up (colors, fonts as CSS variables / Tailwind theme,
      not hardcoded)
- [x] Archivo Black + Inter loaded via Google Fonts
- [x] Base layout / nav shell, mobile-first breakpoints working

### Phase 2 — Home page
- [x] Hero section built with final copy ("Websites built to win you work")
- [x] Page-load hero animation sequence (headline → sub-line → button)
- [x] Tap/press feedback on buttons and cards
- [x] Smooth page transitions between routes
- [x] CTA button wired to Contact page

### Phase 3 — About page (resume / credibility)
- [ ] Personal story / bio copy written (only a short placeholder intro exists)
- [x] Credentials list finalized — title, issuer, date, client-facing
      relevance line for each
- [ ] Certificate images cropped/redacted of personal info (address, ID
      numbers, signatures)
- [x] Credential cards built, touch-friendly (lightbox wired up, tap-friendly
      buttons — lightbox itself untested with a real image since none exist yet)
- [x] Scroll-reveal animation on cards

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

### 2026-07-10 — Phase 2 complete: hero motion, tap feedback, page transitions
- Home hero: added a page-load animation sequence (headline → sub-line →
  CTA button, staggered 0/150/300ms fade-slide-up) via a `.hero-reveal` CSS
  class + `@keyframes hero-in` in `globals.css`, with a
  `prefers-reduced-motion` fallback that shows content instantly.
  - Bug caught & fixed: the `animation` shorthand was resetting
    `animation-delay` back to 0 on every element (shorthand properties reset
    unspecified sub-properties), silently killing the stagger. Switched to
    longhand `animation-name`/`-duration`/`-timing-function`/`-fill-mode` so
    the per-element Tailwind `[animation-delay:...]` utilities apply.
  - Added the missing CTA button ("Let's build something" → `/contact`)
    that the copy always called for but didn't exist yet.
- Tap/press feedback: added `active:scale-95` + visible `focus-visible`
  rings to the header's About/Work nav links (logo and Contact button
  already had press feedback from scaffolding).
- Page transitions: added `src/app/template.tsx` (App Router template file,
  remounts on every navigation unlike layout.tsx) wrapping route content in
  a `.page-transition` class — a 0.35s fade-in on every route change, with
  the same reduced-motion fallback pattern. Header/Footer stay stable since
  they live in layout.tsx, only the main content fades.
- Verified: `tsc --noEmit` + lint clean; confirmed in-browser via computed
  styles that animation-delay values are correct (0s/0.15s/0.3s) after the
  fix, and that `.page-transition` renders inside `<main>` on every route
  (/, /about, /work) with no console errors. Couldn't verify the Next.js
  `Link` click-through directly — the browser tool's ref-based clicks
  weren't registering navigations this session — but direct URL navigation
  confirms every route renders correctly.
- Next up: Phase 3 wrap-up (bio copy, cert images) or Phase 4 (Work page).

### 2026-07-10 — GitHub + Vercel connected, site is live
- Renamed local branch `master` → `main`, created GitHub repo
  `GTluke25/portfolio-site`, pushed code.
- Connected Vercel to the GitHub repo (hit a one-time `gitSource`/`repoId`
  error from a stale GitHub App permission sync — fixed by re-confirming
  repo access in GitHub's Vercel App settings). Deploy kicked off
  successfully.
- Site now auto-deploys on every push to `main`.
- Next up: Phase 2 (Home page motion) or finish out Phase 3 (About bio copy,
  cert images).

### 2026-07-10 — About page: credential cards wired up
- Found an untracked `data/resume.ts.ts` file (double extension, wrong
  location) with education + certification content. Moved it to
  `src/data/resume.ts` to match project conventions, and added a `relevance`
  field to `Education`/`Certification` (a client-facing benefit line) plus an
  optional `certificateImage` field for when real cert photos exist.
- Wrote the client-facing relevance one-liners for each credential (not in
  the original data — this is "the persuasive part" CLAUDE.md calls for).
- Built `ScrollReveal` (IntersectionObserver-based fade/slide-up, respects
  `prefers-reduced-motion` via Tailwind's `motion-safe`/`motion-reduce`,
  animates only `transform`/`opacity`), `CredentialCard` (title, issuer,
  date, relevance line, tap-friendly buttons), `CertificateLightbox` (modal,
  Esc + click-outside to close), and `CredentialsGrid` (maps data → cards,
  owns lightbox open state).
- Rewrote `src/app/about/page.tsx`: heading, short intro paragraph grounded
  in the resume data (no fabricated personal history — real bio copy is
  still a TODO), and the credentials grid.
- "View certificate" only renders when a cert has `certificateImage` set —
  none do yet (no cropped/redacted images exist), so it correctly doesn't
  show. The Google cert's "Verify online" link does render and points at its
  real Coursera verify URL.
- Verified: `tsc --noEmit` and `npm run lint` clean. Checked in-browser via
  DOM/computed-style inspection (screenshot tool hung again, same as last
  session) — 2-col grid at 1280px, 1-col at 375px, cards fully revealed
  (opacity 1) after scroll-reveal fires, nav/links all correct.
- Not committed yet — left for the user to review/commit.
- Next up: real personal story/bio copy, cropped certificate images (then
  wire `certificateImage` paths in), or move to Phase 2 (Home page motion).

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
- Committed the full scaffold as the initial commit (root-commit c08714a).
  Set local (repo-only) git identity to Luke Nitzschke /
  lukenitzschke@gmail.com to do so.
- Next up: Phase 2 (hero animation sequence, tap feedback, page transitions,
  CTA wiring) — or connect Vercel first to get auto-deploy going.

### [Date] — Kickoff
- Drafted this roadmap and CLAUDE.md session workflow section
- Next up: confirm which Phase 1–3 items are actually already built, then
  pick up wherever reality lands
