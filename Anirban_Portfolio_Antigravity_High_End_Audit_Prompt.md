# Antigravity AI IDE — High-End Portfolio Audit & Upgrade Prompt

## Mission

You are an elite frontend/product engineer, UX engineer, accessibility specialist, performance engineer, and portfolio art director.

You are working on an existing React + Vite personal portfolio for **Anirban Chatterjee**.

Your job is **not** to rebuild the site blindly. First understand the existing architecture, then systematically upgrade it into a polished, production-grade, recruiter-facing engineering portfolio.

The repository has already been inspected. The concrete issues below are known starting points. Validate each one against the current code before changing it, and discover additional issues during your own audit.

---

# 1. Current Stack

- React 19
- Vite 8
- JavaScript / JSX
- CSS
- anime.js
- lucide-react
- Static assets in `/public`
- Central content model in `src/data/content.js`
- Custom animation hooks
- Responsive layout
- Project image galleries / lightbox
- Mobile navigation drawer
- Resume PDF
- Hero video asset exists in `/public/hero-video.mp4`

Do not introduce a heavy framework migration unless there is a compelling, measurable reason.

---

# 2. Existing Portfolio Strengths

Preserve these strengths while upgrading the implementation:

- Strong editorial / premium visual direction
- Clear green + cream + muted accent palette
- Good section hierarchy
- Centralized portfolio content
- Project gallery concept
- Responsive card system
- Resume / GitHub / LinkedIn / Calendly CTAs
- Motion-aware implementation already attempts `prefers-reduced-motion`
- Project and experience information is structured rather than hard-coded everywhere
- Good use of reusable CSS variables and component-level styles

The goal is **refinement and elevation**, not visual destruction.

---

# 3. High-Priority Flaws & High-End Fixes

## P0 — Build / Verification Reliability

### Flaw
The repository could not be linted in the inspection environment because dependencies were not installed (`eslint: not found`). Therefore the current project has not been proven clean through the actual `lint` and `build` scripts.

### High-end fix
After modifications:

1. Install dependencies if needed.
2. Run:
   - `npm run lint`
   - `npm run build`
3. Fix every error and warning that is introduced or directly related to your changes.
4. Do not claim production readiness without a successful build.
5. If the environment prevents a check, clearly document what could not be verified.

### Acceptance
- `npm run lint` passes.
- `npm run build` passes.
- No runtime console errors.
- No broken imports or asset paths.

---

# 4. P0 — Accessibility Is Not Yet Production Grade

## 4.1 Clickable image containers are not keyboard-native controls

### Existing issue
Project visual wrappers use click handlers on `<div>` elements:

- `.featured-card-visual`
- `.project-card-visual`

This creates mouse interaction without equivalent keyboard semantics.

### Fix
Use one of:

- a real `<button>` for gallery opening, or
- a semantically appropriate interactive element.

Do not add fake `tabIndex` behavior when a native button is the correct solution.

Provide:
- visible focus state
- descriptive accessible name
- keyboard activation
- no nested interactive controls

---

## 4.2 Lightbox needs real dialog behavior

### Existing issue
The lightbox has `role="dialog"` and `aria-modal`, but lacks a complete modal interaction model.

### Fix
Implement:

- Escape closes the dialog.
- Focus moves into the dialog on open.
- Focus returns to the triggering element on close.
- Keyboard left/right arrows navigate images.
- Focus trap while open.
- Body scroll locking while open.
- Correct accessible names for all controls.
- Prevent background content from being keyboard-accessible while the dialog is active.
- Correct initial focus.
- Announce image position/title where appropriate.

Do not use an accessibility library unless genuinely necessary; a small robust implementation is preferred.

---

## 4.3 Mobile drawer needs proper navigation semantics

### Existing issue
The mobile drawer opens visually but does not implement a complete accessible disclosure/drawer interaction model.

### Fix
Add:

- Escape-to-close.
- Focus management.
- Focus return to menu button.
- Body scroll lock while open.
- `aria-controls`.
- Correct drawer labeling.
- Clear focus-visible styling.
- Prevent accidental background interaction.
- Ensure menu links remain reachable at 200% zoom.

---

## 4.4 Tabs are semantically incomplete

### Existing issue
The technology filters use `role="tablist"` and `role="tab"`, but the implementation is not a full WAI-ARIA tabs pattern.

### Fix
Either:

### Preferred
Treat them as ordinary filter buttons and remove unnecessary tab semantics.

OR

Implement full tabs semantics with:
- `aria-controls`
- `role="tabpanel"`
- keyboard navigation
- roving tabindex

For a simple filter UI, **ordinary buttons are preferred**.

---

# 5. P0 — Animation Systems Conflict With Each Other

### Existing issue

There are multiple independent animation systems:

- `useScrollReveal`
- anime.js animations inside sections
- CSS `.reveal-on-scroll`
- magnetic buttons
- hero 3D tilt
- preloader transitions
- decorative cursor dot

Several of these manipulate the same properties:

- `opacity`
- `transform`
- `translateY`
- `scale`

This can cause:
- competing animation ownership
- inconsistent timing
- janky transforms
- difficult debugging
- unnecessary main-thread work

### High-end fix

Create a single animation strategy.

Recommended architecture:

### CSS owns:
- hover/focus transitions
- simple state transitions
- reduced-motion fallbacks

### IntersectionObserver owns:
- determining when elements enter the viewport

### anime.js owns:
- deliberate choreography that genuinely benefits from JS

Do NOT have two systems simultaneously animate the same element's `transform` and `opacity`.

Create a small reusable motion utility if useful.

### Acceptance
Each animated element has one clear animation owner.

---

# 6. P0 — Decorative Cursor Dot Is Over-Engineered

### Existing issue

`DecorativeDot.jsx` runs a `requestAnimationFrame` loop and React state updates continuously while the cursor is active.

That means the component can cause continuous React renders while the page is being used.

### High-end fix

Do not use React state for a per-frame cursor animation.

Use:
- a DOM ref
- `requestAnimationFrame`
- direct `style.transform` updates

Or, even better, use CSS custom properties if suitable.

Also disable the effect on:
- touch devices
- coarse pointers
- reduced-motion users

Example strategy:

```js
const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
```

### Acceptance
No continuous React re-render loop for cursor movement.

---

# 7. P0 — Hero 3D Tilt Runs on Every Mouse Event

### Existing issue

The hero card directly writes transforms on every `mousemove`.

### High-end fix

Use:
- `requestAnimationFrame`
- pointer capability detection
- reduced-motion handling
- bounded rotation
- CSS `will-change: transform` only while needed

Prefer Pointer Events over separate mouse-only assumptions.

The interaction should feel subtle, not like a gaming UI.

---

# 8. P0 — Preloader Is Too Blocking

### Existing issue

The preloader intentionally blocks the page for roughly three seconds.

This is risky for:
- perceived performance
- impatient users
- recruiters quickly scanning the portfolio
- accessibility
- repeat visits

### High-end fix

Make the preloader:

- optional rather than mandatory
- dramatically shorter
- skipped for reduced-motion users
- skipped when the browser has a persisted session marker
- never responsible for waiting on arbitrary decorative timing
- unable to trap the user unnecessarily

Recommended behavior:

- First visit: short branded reveal.
- Returning visit in same session: skip.
- Reduced motion: skip or use a minimal fade.
- Slow device/network: never delay access to content unnecessarily.

---

# 9. P0 — Performance / Asset Weight

The current public assets are roughly 11 MB total.

Notable issues include:

- `profile.jpg` ≈ 1.9 MB
- `profile.png` ≈ 1.9 MB
- multiple high-resolution 2880×1704 project screenshots
- multiple 1080×2392 mobile screenshots
- a hero video asset

### High-end fix

Perform an asset optimization pass.

## Hero/profile image
Use the smallest visually lossless format practical:
- AVIF preferred
- WebP fallback
- PNG/JPEG only where justified

Do not ship both huge `profile.jpg` and `profile.png` if only one is required.

## Project screenshots
Generate responsive variants where beneficial.

Use:
- modern formats
- explicit dimensions
- `width` and `height`
- appropriate `loading`
- `decoding="async"`

Use eager loading only for the above-the-fold hero image.

## Hero video
Inspect whether it is actually used.

If not used:
- remove it from the shipped asset set if safe.

If used:
- ensure muted/autoplay/playsInline behavior
- provide poster
- respect reduced motion
- avoid forcing a large video download on mobile
- consider responsive source strategy

### Acceptance
Lighthouse/PageSpeed-style performance should show a meaningful improvement without reducing visual quality.

---

# 10. P0 — Image Loading Strategy Is Too Generic

### Existing issue

Project images use `loading="lazy"` even though the featured project may be close to the initial viewport.

### High-end fix

Define image priority intentionally.

Above fold:
- eager
- high fetch priority where appropriate

Below fold:
- lazy

Also add:
- width
- height
- `decoding="async"`

Avoid layout shifts.

---

# 11. P1 — Project Cards Need Better Semantics

### Existing issue

Projects are visually strong but the information architecture can be improved.

Secondary project cards currently prioritize:
- category
- year
- title
- description
- impact
- stack
- GitHub

The user journey could be clearer.

### High-end fix

Make each project card communicate:

1. What was built.
2. Why it matters.
3. What Anirban personally engineered.
4. Technology.
5. Evidence / result.
6. Links.

Add a clear "Case study" pathway where useful.

Do not invent metrics.

If no verified metric exists, use qualitative outcomes without fabricated numbers.

---

# 12. P1 — Portfolio Copy Is Too Claim-Heavy in Places

### Existing issue

Several phrases make strong claims such as:
- "production-ready"
- "high-throughput"
- "sub-second"
- "neutralizing phishing and DNS spoofing"
- "proven ownership"
- "eliminating counterfeit medicine networks"

These may be accurate, but the portfolio should distinguish:
- verified measurable result
- implementation capability
- project goal
- intended outcome

### High-end fix

Audit every claim in `src/data/content.js`.

Do not invent achievements.

Where a statement describes the project's goal rather than a measured real-world result, rewrite it accordingly.

Prefer:
- "designed to..."
- "implemented..."
- "demonstrated..."
- "tested..."
- "deployed to..."
- "validated under..."

when those are factually accurate.

Make the portfolio credible to a senior engineer reviewing it.

---

# 13. P1 — Missing Evidence Layer

### Existing issue

The portfolio describes projects but does not consistently show engineering evidence.

### High-end fix

For the strongest projects, introduce compact evidence such as:

- architecture diagram
- engineering challenge
- implementation decision
- trade-off
- test strategy
- deployment environment
- measurable benchmark, only if verified
- GitHub link
- live link

For MediTrace, for example, the case study should make the system architecture legible:

Frontend → Contract / L2 → Events → Indexer → Database / webhook → UI

For Nourish:

Camera / image → inference → nutrition data → optimization → API → mobile UI

Do not fabricate diagrams or metrics. Derive them from the actual project description/assets where possible.

---

# 14. P1 — Navigation Active-State Logic Is Fragile

### Existing issue

Navbar active section detection manually calculates:

- `offsetTop`
- `offsetHeight`
- scroll position

This can become unreliable with:
- dynamic content
- font loading
- responsive layout
- image loading
- browser zoom
- changing section heights

### High-end fix

Use `IntersectionObserver` to maintain active navigation state.

Benefits:
- less scroll work
- more reliable section detection
- easier maintenance

Keep scroll listener only for truly scroll-dependent UI such as navbar compression.

---

# 15. P1 — Scroll Progress Calculation Needs Edge-Case Handling

### Existing issue

The scroll progress formula divides by document height minus viewport height.

On extremely short pages this can become zero.

### Fix

Guard against zero:

```js
const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
```

Also use one source of truth for scroll position.

---

# 16. P1 — Mobile Navigation Needs Better UX

Audit the mobile drawer for:

- viewport overflow
- body scroll lock
- safe-area insets
- long labels
- keyboard accessibility
- touch target sizes
- close affordance
- focus order

Target minimum touch target:
- approximately 44×44 CSS px

Do not allow the drawer to feel cramped on small phones.

---

# 17. P1 — Focus States Need Premium Styling

### Existing issue

Hover states receive substantial attention, but keyboard focus should receive equal design quality.

### Fix

Create a consistent global:

```css
:focus-visible
```

system.

It should be:
- clearly visible
- accessible against both light and dark surfaces
- not dependent on color alone
- visually aligned with the site's premium design language

Never remove the browser focus indicator without replacing it.

---

# 18. P1 — Reduced Motion Must Be Global, Not Fragmented

### Existing issue

Some components check `prefers-reduced-motion`, but motion behavior is distributed.

### High-end fix

Create a unified motion policy.

When reduced motion is enabled:

- disable magnetic buttons
- disable 3D tilt
- disable decorative cursor
- disable marquee movement or make it static
- disable preloader choreography
- disable reveal animation
- disable animated lightbox transitions
- preserve content visibility immediately

The page should remain beautiful and functional.

---

# 19. P1 — Marquee Accessibility / UX

The ticker is `aria-hidden`, which is reasonable if it is decorative.

However:

- ensure it does not cause unnecessary CPU usage
- pause or simplify for reduced motion
- prevent horizontal overflow
- avoid duplicate visual content causing layout issues

Use CSS animation rather than JS for the ticker.

---

# 20. P1 — CSS Complexity / Maintainability

### Existing issue

The site contains many component-level CSS files and repeated patterns.

This is not inherently bad, but the visual system should have a stronger design-token layer.

### High-end fix

Consolidate reusable tokens:

- spacing
- type scale
- colors
- borders
- shadows
- radii
- animation durations
- easing curves
- container widths
- focus styles
- breakpoints

Do not over-abstract component-specific styles.

The goal is:
**small design system, not giant CSS framework.**

---

# 21. P1 — Typography Needs a More Deliberate System

Audit:

- font loading
- font stack
- heading scale
- body scale
- line lengths
- mobile line-height
- letter spacing
- uppercase labels

Keep the editorial personality.

Aim for:
- highly readable body copy
- controlled heading density
- approximately 60–75 characters per paragraph line where practical
- strong hierarchy without excessive font sizes

If external fonts are introduced, ensure they do not harm performance.

---

# 22. P1 — Responsive Layout Needs Device-Level Audit

Do not only test desktop and "mobile".

Test at least:

- 320px
- 360px
- 390px
- 430px
- 768px
- 1024px
- 1280px
- 1440px
- 1920px

Look specifically for:

- horizontal overflow
- broken floating cards
- clipped buttons
- text wrapping
- nav collisions
- oversized whitespace
- modal overflow
- project image cropping
- footer layout
- touch targets

Use CSS clamp/grid/flex intelligently rather than adding many breakpoint hacks.

---

# 23. P1 — Lightbox Needs Better Mobile Image UX

The project screenshots include tall mobile images.

The lightbox should support:

- tall images without accidental cropping
- pinch zoom if practical
- scroll/pan behavior where needed
- safe viewport sizing
- orientation changes
- mobile-friendly controls
- swipe navigation if implemented carefully

At minimum, ensure the image remains fully discoverable and controls do not cover critical content.

---

# 24. P1 — External Link Safety / UX

Audit all external links.

Use:
- `target="_blank"` only where it improves the experience
- `rel="noopener noreferrer"` where appropriate
- clear indication when a link opens externally

Do not open internal anchor navigation in new tabs.

---

# 25. P1 — Missing Error / Empty States

The site is static, but interactive areas still need graceful behavior.

Audit:

- gallery with missing image
- broken image asset
- missing GitHub link
- missing live link
- missing resume
- unsupported image format
- unavailable external resource

Do not let a missing optional property produce an ugly blank area.

---

# 26. P1 — Content Architecture Can Be More Scalable

`src/data/content.js` is a good foundation.

Improve it without turning it into an unnecessary CMS.

Recommended structure:

```text
content
├── personal
├── hero
├── selectedWork
│   ├── featured
│   └── projects
├── capabilities
├── process
├── aiWorkflow
├── stack
├── experience
└── footer
```

Keep content separate from rendering.

Where useful, normalize project objects so all project cards share predictable fields.

---

# 27. P1 — Project Image URLs Are Inconsistent

The project data mixes:

- local assets
- external Unsplash URL

### High-end fix

Prefer self-hosted optimized assets for portfolio-critical visuals.

External image dependencies should not determine whether the portfolio looks correct.

For DupeCleaner-Pro, use a local optimized project image if an appropriate project screenshot/visual exists.

If not, keep the external asset but add robust fallback behavior.

---

# 28. P2 — Hero Content Can Be More Conversion-Oriented

The hero currently communicates:

- name
- role
- specialties
- two CTAs
- photo

Add a small credibility layer without clutter:

Possible factual evidence:
- current education
- internship experience
- selected technologies
- project count
- open-to-work status

Only use facts already supported by the content.

Avoid fake statistics.

---

# 29. P2 — CTA Hierarchy Can Be Sharper

Ensure there is one obvious primary action per context.

Hero:
- Primary: selected work
- Secondary: contact

Project:
- Live / repository / case study

Footer:
- Email / scheduling / social

Do not make every button visually compete at the same intensity.

---

# 30. P2 — Visual Hierarchy Is Slightly Card-Heavy

There are many rounded cards, pills, badges, chips, and panels.

The premium aesthetic will improve if some areas become more editorial.

Use:
- fewer borders
- fewer pills
- stronger whitespace
- larger typography where appropriate
- subtle dividers
- asymmetrical composition
- controlled card elevation

Do not remove the existing design language entirely.

---

# 31. P2 — Hover Effects Need Touch-Safe Behavior

Do not rely on hover-only information.

Any information revealed on hover should remain available to:
- keyboard users
- touch users
- reduced-motion users

Use media queries such as:

```css
@media (hover: hover) and (pointer: fine) {
  /* hover-only effects */
}
```

---

# 32. P2 — SEO Foundation Needs Strengthening

Audit and improve:

## `index.html`
Ensure:
- meaningful `<title>`
- meta description
- canonical URL if known
- theme-color
- Open Graph metadata
- Twitter/X metadata if appropriate
- favicon
- viewport
- language attribute

Do not invent a domain if one is not known.

Use a placeholder only if the existing project already has a clear deployment domain.

---

# 33. P2 — Structured Data

If appropriate, add JSON-LD for a personal portfolio / person.

Only use verified information.

Potential fields:
- name
- url
- jobTitle
- sameAs
- alumniOf
- knowsAbout

Do not expose private information.

---

# 34. P2 — Semantic HTML

Audit every section.

Prefer:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<article>`
- `<footer>`
- `<button>`
- `<a>`

Avoid using generic `<div>` where native semantics are clearly appropriate.

Headings should form a coherent hierarchy.

---

# 35. P2 — Performance Budgets

Aim for:

- minimal initial JS
- no unnecessary animation loops
- no layout shift
- optimized images
- no render-blocking decorative resources
- no unnecessary dependencies

Target:
- fast first meaningful render
- visually complete above-the-fold content quickly
- smooth 60fps interaction on normal devices

Do not sacrifice accessibility or content quality to chase arbitrary scores.

---

# 36. P2 — Dependency Discipline

Current dependencies are relatively small.

Do not add:
- GSAP
- Framer Motion
- large UI libraries
- unnecessary icon libraries
- unnecessary carousel packages

unless the existing stack genuinely cannot deliver the requirement.

Prefer the existing:
- React
- CSS
- anime.js
- lucide-react

---

# 37. Code Quality Cleanup

Audit for:

- unused imports
- dead hooks
- stale comments
- duplicated logic
- unnecessary state
- event listener cleanup
- missing effect dependencies
- animation cleanup
- unstable list keys
- unnecessary DOM queries
- direct style mutation where avoidable
- magic numbers

Examples already worth reviewing:

- `useAnime.js` appears reusable but may not currently be used broadly.
- Several components import anime.js directly.
- `useScrollReveal` globally queries the DOM.
- Navbar uses manual section calculations.
- Decorative cursor animation uses React state per frame.

Do not delete reusable code just because it is currently unused unless you confirm it is truly dead.

---

# 38. Security / Robustness Audit

Even though this is a static portfolio, audit:

- external links
- unsafe HTML injection
- user-controlled content
- URL handling
- third-party resources
- iframe usage if introduced
- CSP compatibility
- asset path assumptions

Never use `dangerouslySetInnerHTML` for portfolio content unless there is a strong, justified reason.

---

# 39. Visual QA Checklist

After implementation, inspect the entire page visually.

### Header
- logo alignment
- nav spacing
- active state
- mobile drawer
- resume CTA

### Hero
- typography
- image crop
- floating cards
- CTA hierarchy
- mobile stacking

### Projects
- featured project balance
- project cards
- gallery controls
- image cropping
- link hierarchy

### Capability section
- card density
- contrast
- spacing

### Process
- visual numbering
- alignment
- animation timing

### AI workflow
- card differentiation
- readability
- no gimmicky AI aesthetic

### Stack
- filter usability
- logo consistency
- mobile wrapping
- keyboard states

### Experience
- chronology
- information density
- GPA / education layout
- mobile readability

### Footer
- CTA prominence
- links
- copyright
- location

---

# 40. Anti-Pattern Rules

Do NOT:

- redesign the site into a generic SaaS template
- add excessive gradients
- add glassmorphism everywhere
- add glowing neon effects everywhere
- add unnecessary 3D
- add huge text that destroys hierarchy
- add fake metrics
- fabricate testimonials
- fabricate companies
- fabricate achievements
- invent project results
- use stock imagery when project assets exist
- add animations merely because they look impressive
- sacrifice page speed for visual effects
- remove accessible semantics for aesthetics
- remove the existing personality
- turn the site into a dashboard
- overuse pills/cards
- introduce unnecessary dependencies

---

# 41. Design Direction

The final result should feel like:

**A high-end engineering portfolio belonging to a serious software engineer — not a template, not a startup landing page, and not an animation showcase.**

Visual characteristics:

- editorial
- restrained
- premium
- technical
- confident
- warm
- precise
- spacious
- highly readable
- subtle motion
- strong information hierarchy

Think:
**high-end product design + engineering credibility + personal identity.**

---

# 42. Recommended Information Architecture

Keep the overall flow, but refine the narrative:

1. Hero
2. Selected Work
3. Engineering Capabilities
4. How I Work
5. AI Workflow
6. Technical Stack
7. Experience / Education
8. Contact

The portfolio should answer, in order:

1. Who is this?
2. What can they build?
3. What have they actually built?
4. How do they think?
5. What technologies do they use?
6. What experience backs this up?
7. How do I contact them?

---

# 43. Implementation Strategy

Do the work in this order.

## Phase 1 — Audit
Inspect:

- all JSX
- all CSS
- hooks
- content data
- public assets
- index.html
- package.json

Identify additional issues beyond this prompt.

## Phase 2 — Stabilize
Fix:

- semantic HTML
- accessibility
- interaction bugs
- event cleanup
- modal behavior
- mobile navigation
- animation conflicts

## Phase 3 — Performance
Optimize:

- images
- video
- rendering
- animation loops
- observers
- loading strategy
- bundle usage

## Phase 4 — Design Refinement
Improve:

- spacing
- typography
- visual hierarchy
- card density
- responsive composition
- CTA hierarchy
- focus states

## Phase 5 — Content Credibility
Audit all copy.

Do not invent information.

## Phase 6 — SEO
Improve metadata and structured data using only verified information.

## Phase 7 — QA
Run:

```bash
npm run lint
npm run build
```

Then inspect the site at all required viewport widths.

---

# 44. Important Constraint — Preserve Content Truth

This is a portfolio, so credibility matters more than marketing language.

Never invent:

- performance numbers
- users
- revenue
- deployments
- production customers
- security claims
- academic publications
- awards
- job responsibilities
- dates

If a claim cannot be verified from the repository, keep it conservative.

---

# 45. Important Constraint — Keep Existing Assets Unless Improvement Is Clear

Do not replace the identity photo or project screenshots merely for aesthetics.

Optimize them when possible.

Do not alter the subject's identity or facial appearance.

For the profile image:
- preserve the real person
- preserve natural appearance
- no artificial face modification
- no AI beautification
- no face replacement

---

# 46. Acceptance Criteria

The upgrade is complete only when all of the following are true.

## Functional
- All navigation works.
- All CTAs work.
- Resume works.
- External links work.
- Project gallery works.
- Gallery keyboard controls work.
- Escape closes modal.
- Mobile menu works.
- No broken links introduced.

## Accessibility
- Keyboard-only navigation works.
- Focus is always visible.
- Modal focus is managed.
- Mobile drawer focus is managed.
- Reduced-motion mode is respected.
- Semantic headings are correct.
- Interactive elements use native semantics.
- Color contrast is acceptable.

## Performance
- No unnecessary animation loops.
- No continuous React render loop for cursor effects.
- Images are optimized.
- Layout shifts are minimized.
- Above-the-fold content is prioritized.
- No unnecessary dependencies.

## Responsive
- 320px works.
- 360px works.
- 390px works.
- 430px works.
- 768px works.
- 1024px works.
- 1280px works.
- 1440px works.
- 1920px works.

## Engineering Quality
- ESLint passes.
- Vite build passes.
- No obvious dead code.
- No broken imports.
- No console errors.
- Event listeners are cleaned up.
- Animation ownership is clear.

## Visual Quality
- Premium, restrained aesthetic.
- Strong hierarchy.
- No excessive effects.
- No layout collisions.
- No accidental horizontal scroll.
- Mobile feels intentionally designed rather than compressed desktop.

---

# 47. Final Deliverable

Do not merely tell me what is wrong.

**Actually implement the improvements in the repository.**

At the end, provide a concise engineering changelog containing:

### Fixed
- major bugs
- accessibility fixes
- performance fixes
- responsive fixes

### Improved
- visual hierarchy
- animation architecture
- project presentation
- navigation
- SEO

### Verified
- lint result
- build result
- viewport QA result

### Remaining
Only list issues that genuinely could not be solved.

Do not claim something was tested if it was not actually tested.

---

# Final Instruction

Treat the existing portfolio as a real production artifact belonging to a software engineer who will be judged by recruiters, hiring managers, senior engineers, and technical interviewers.

Make every change earn its place.

**Optimize for credibility, clarity, speed, accessibility, maintainability, and premium visual execution — in that order.**
