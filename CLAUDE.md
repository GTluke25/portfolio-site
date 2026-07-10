# Portfolio Website

A bold, visual site that works as a hybrid: a personal resume that doubles as a
web-services business pitch. Near-term audience is local contractors and small
businesses who need a website. The site itself is the strongest proof of skill —
its craft demonstrates the service being sold.

## Positioning (the mental model)
"I'm a web developer. Here's who I am, here's what I can build for you, let's
talk." The resume is the proof, not the product. Credentials build trust; the
offer (build websites for local businesses) is the pitch.

## Project goal
- Primary: generate leads / conversations with local businesses needing websites
- Secondary: serve as a resume for creative/dev roles
- Success = a contractor or hiring manager remembers this site and reaches out

## Tech stack
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Deployed on Vercel

## Site structure
- Home — hero pitches the OFFER, not just a name. Bold and immediate.
  FINAL HERO COPY:
    Headline:  Websites built to win you work.  ("win you work" in orange accent)
    Sub-line:  Fast, custom-built sites for local businesses — no templates,
               no page-builders. Let's build you something great.
    Button:    Let's build something  (→ links to Contact)
- About — the resume lives here: diploma, certificates, personal story. This is
  the trust-building / credibility page.
  CREDENTIALS TREATMENT:
    - Present as clean, scannable CARDS (not a timeline — too few credentials to
      justify one; cards-only avoids padding thin material).
    - Each card: credential title, issuer, date, and a one-line RELEVANCE note
      framed as a CLIENT benefit (e.g. "the same tools I'll use to build your
      site"), not just a description. The relevance line is the persuasive part.
    - "View certificate" action opens the real photo in a lightbox — proof on
      demand, without cluttering the layout. Proof beats claims.
    - Cards animate in on scroll (fade / slide up on enter) — this is where the
      scroll-motion craft shows up on this page.
    - IMPORTANT: certificate images may contain personal data (address, ID
      numbers, signatures). Crop / redact before publishing.
- Work — showcase. Starts light (a demo/mock contractor site, skills, stack) and
  is built to SCALE as real client work comes in.
- Contact — working form framed as soft lead-gen ("Tell me about your project"),
  doubling as a job-contact route.

## Design direction
MOBILE-FIRST above all — most leads and connections come through a phone. Design
and build for the small screen first, then scale up. Every decision (layout,
type size, tap targets, motion) is judged on mobile first.

"Bold & visual," tuned for a contractor/small-business audience — confidence,
clarity, and no-nonsense competence over subtle art direction.

Three signature moves, used with discipline (spend boldness in one place, keep
the rest quiet):
- Big, heavy display typography — the loud, industrial headline is the signature
- Striking off-black canvas + one warm orange accent
- Scroll-triggered animation & motion (page-load sequence, reveals, hover)

### Color palette
Dark-mode-primary. One bold accent on a dark canvas.
- Canvas / page bg:   #0D0D0F  (off-black, faint cool cast)
- Surface / cards:    #17171A  (raised areas)
- Accent:             #FF6A1A  (warm orange — the ONE bold move; use sparingly)
- Text high:          #EDEDED  (headings, body)
- Text low:           #8A8A90  (captions, meta, muted)

### Typography
- Display / headlines: Archivo Black (Google Fonts) — heavy, confident, reads as
  strong & trustworthy to a contractor audience. Often set uppercase.
- Body / UI:           Inter (Google Fonts) — clean, neutral, keeps the loudness
  contained to the headlines.
- Set up font choices so they're easy to swap later (e.g. CSS variables /
  Tailwind theme tokens) — keep the site scalable.

### Animation & motion
Mobile-first. Motion should make the site feel fast, alive, and intentional —
never get in the way of reading or tapping. Smooth, purposeful motion reads as
competence to the contractor audience; janky or excessive motion reads as the
opposite.

TIER 1 — baseline, build these (all mobile-friendly):
  - Scroll-reveal on sections — content fades / slides up as it enters view
    (credential cards use this).
  - Page-load hero sequence — headline, sub-line, then button animate in one
    after another on first load.
  - Tap / press feedback — buttons and cards subtly scale/shift on press. This
    is the mobile replacement for hover; make it feel responsive.
  - Smooth page transitions — soft fade between pages, not a hard jump. Should
    feel like an app.

TIER 2 — optional signature accents (add later via Claude Code; pick 1–2, don't
do all). Candidates: sticky/shrinking header that keeps the Contact button one
tap away (best for lead-gen); animated counter/stat on scroll-in; staggered list
reveal; text-highlight sweep on the orange accent word. Decide during build
based on what the site needs.

TIER 3 — skip for v1: parallax (janky on phones), custom cursor effects
(invisible on mobile), looping background animation (battery drain). Revisit only
if truly subtle and performance-safe.

MOTION RULES (non-negotiable):
  - Respect `prefers-reduced-motion` — provide calm/no-motion fallbacks.
  - Animate only `transform` and `opacity` (cheap for browsers) — avoid animating
    layout properties. Performance is a feature, especially on mobile.
  - Interactive elements must work on TOUCH, not just hover. Any hover effect
    (e.g. the credential card flip) needs a tap/click equivalent for mobile.
  - Front of any flip/reveal must stand on its own — don't bury essential copy
    (like the credential relevance line) behind an interaction.

### Design principles to follow
- The hero is a thesis — open with the offer, stated boldly. Not a generic
  big-number-with-label template.
- Motion serves the content — never scattered effects. Respect
  `prefers-reduced-motion`.
- Mobile-first and fully responsive (contractors will view on phones).
- Visible keyboard focus states; accessible contrast on the dark palette.

## Conventions
- Components in /components, one component per file
- Prefer simple, readable code over clever abstractions
- Use semantic HTML
- Theme values (colors, fonts) as tokens, not hardcoded — the site must scale

## Commands
- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run lint` — lint

## Session workflow
Track progress across three layers: this file (stable project context),
PROGRESS.md (running session log), and git (commit history as the ground truth).

- **"wake up"** — start of a session. Read this file + PROGRESS.md, summarize
  current state (what's done, what's in progress, what's next) before doing
  any work, and confirm the plan for the session.
- **"pass off"** — end of a session. Append a dated entry to PROGRESS.md
  summarizing what was done, any decisions made, and what's next. Commit
  outstanding work with a clear message before wrapping up.

*(Placeholder — adjust wording/behavior here if this doesn't match how we
defined it originally.)*

## Working notes (for Claude Code)
- I'm new to coding — briefly explain terminal commands before running them, and
  explain new concepts as they come up.
- When adding a dependency, say what it does and why it's needed.

## TODO / undecided
- [ ] Real vs. mock demo project(s) for the Work page
- [ ] Credentials list for About page cards — title, issuer, date, and a
      client-facing relevance line for each, plus cropped/redacted certificate
      images
- [ ] Domain name

## Resolved (for reference)
- Contact form backend → Formspree / Web3Forms for v1
- Hero copy → locked in above (see Site structure → Home)
- Credential display format → cards-only (see About section)
