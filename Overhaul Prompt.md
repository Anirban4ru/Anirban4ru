**ROLE**

You are a senior product designer and senior frontend engineer working inside the Anirban4ru portfolio repository (the codebase behind anirbanchatterjee.vercel.app, also referenced as anirban-portfolio-gray.vercel.app). You are performing a **complete visual and structural redesign** of this personal portfolio site. Every real fact about Anirban — name, title, education, experience, skills, contact links, and projects — must carry over exactly. Only the design system, layout, and component structure change.

Before writing any code:

1.  Open the current live site and the repo. Screenshot every section top to bottom (desktop and mobile). Read every content string currently in the codebase — bio copy, project titles/descriptions, skills lists, contact links — so nothing gets lost or invented during the rebuild.
    
2.  Open https://itsaanchal.com/ and screenshot it section by section (hero, marquee ticker, selected-work feature card, work grid, "what I bring to a team" panel, "how I think" process grid, "using AI with intention" spectrum cards, stack/tools grid, footer). This is your design reference — study its layout logic, spacing, color system, and typography, and use devtools/inspect to pull the **actual** computed font-family, exact hex colors, border-radius values, and spacing scale rather than guessing at any of them.
    
3.  Cross-check every fact you plan to display against the resume content below and the existing repo content — do not fabricate project details, metrics, or personal facts that aren't present in either source.
    

**ANIRBAN'S REAL CONTENT (source of truth for facts)**

*   **Name / Title:** Anirban Chatterjee — Full Stack Developer
    
*   **Location:** Kolkata, India
    
*   **Contact:** [anirban4ru@gmail.com](mailto:anirban4ru@gmail.com) · linkedin.com/in/anirban4ru · github.com/Anirban4ru
    
*   **Education:** B.Tech, Computer Science Engineering (Core) with a Data Analytics minor, Quantum University, Roorkee — expected 06/2028, GPA 8.01/10. Coursework: DSA, DBMS, Machine Learning, Web Technologies, OOPs with Java, Computer Networks.
    
*   **Summary:** Full-stack developer with hands-on expertise in blockchain-AI applications and machine learning, on top of production frontend/backend work.
    
*   **Experience:** Full Stack Development Intern, CodSoft (06/2024–07/2024, remote) — delivered 3+ production-ready projects (landing pages, a portfolio with backend integration) in a 4-week timeline; fixed cross-browser inconsistencies with responsive design and CSS animation; built end-to-end server-side integration for static frontend projects.
    
*   **Skills:**
    
    *   Languages: Python, Java, JavaScript, TypeScript, Solidity, HTML5, CSS3, Dart (Flutter)
        
    *   Frontend: React.js (Vite), React Native, Tailwind CSS, Bootstrap
        
    *   Backend/APIs: FastAPI, Node.js, Web3.py, Ethers.js, Firebase Cloud Messaging
        
    *   Blockchain: Solidity, Hardhat, Ethereum DApp development
        
    *   AI/ML: XGBoost, YOLOv8, CNN, SSD, LSTM, Random Forest, NSGA-II, Scikit-learn
        
    *   Databases: MySQL, Oracle Data Modeler
        
    *   Data/Analytics: SPSS, Hadoop, data visualization, statistical modeling
        
    *   Tools: Git, GitHub, VS Code, Postman, Hardhat test suite
        
*   **Achievements:** Merit scholarship (INR 40,000) via university entrance exam; top-2 ranking across 7+ consecutive inter-college competitions; 3+ production-ready frontend projects delivered at CodSoft within 4 weeks.
    
*   **Leadership:** Vice President, Q Encore Music Club (2025–present) — directed ensembles of 20–47 people across 4+ large events, driving a 30% YoY attendance increase. Student Council Member (2025–present) — championed 3+ student welfare proposals affecting 500+ students.
    
*   **Certifications:** CodSoft Full Stack Development Internship Certificate (2024); Workshop — Agentic AI, Gemini, Claude & ChatGPT (2025).
    
*   **Languages spoken:** English (fluent), Hindi (fluent), Bengali (native).
    
*   **Projects:** Pull the actual named projects, descriptions, tags, and links from the existing live site/repo — the resume doesn't list individual case studies, so the current site is the source of truth for project-level content. Do not invent project names, metrics, or outcomes that aren't already documented somewhere in the repo or resume.
    

**DESIGN SYSTEM TO ADOPT (from itsaanchal.com)**

Reproduce this system's _structure and mood_, not a pixel-for-pixel clone — adapt copy and iconography to a developer's portfolio rather than a designer's.

**1\. Color palette** — a warm, restrained, editorial palette (confirm exact hex via devtools inspection of the live site, do not guess):

*   Warm cream/off-white background (not pure white)
    
*   Deep forest green as the signature accent — used for the hero headline text, primary CTA button, and large feature/footer panels
    
*   A muted violet/lavender used sparingly — small accent dots, icon strokes, one card background in multi-card sets
    
*   A warm tan/terracotta used for secondary badges and one card background in multi-card sets
    
*   Near-black for body headlines, muted gray for uppercase eyebrow labels and meta textThis is a **defined, disciplined palette** — four to five colors total, reused consistently, not expanded with extra hues anywhere in the app.
    

**2\. Typography** — a rounded, humanist geometric sans (inspect the live site's computed font-family and license-check before using; substitute the closest legally available equivalent, e.g. from Fontshare, if the exact face isn't free/licensed). Bold, large, tight-leading display headings; smaller uppercase tracked labels in muted gray for section eyebrows (e.g. "SELECTED WORK," "HOW I THINK," "MY STACK"); comfortable body copy weight or two lighter than headings.

**3\. Signature layout patterns to rebuild:**

*   **Logo:** small 2×2 grid of colored squares (using the palette above) next to the wordmark — adapt this as Anirban's personal mark.
    
*   **Nav:** simple horizontal right-aligned links, pill-shaped dark-green primary button with an arrow icon for the main CTA (e.g. "Contact" or "Resume").
    
*   **Hero:** two-column — bold "I'm \[Name\]" headline in the forest-green accent color on the left with a role subtitle (uppercase, tracked) and a short bio paragraph, primary + secondary CTA buttons ("See my work" / "Get in touch"); on the right, a portrait photo masked into an organic asymmetric blob shape (large uneven border-radius, not a simple rounded rectangle), with 1–2 small floating annotation cards overlapping the image edges (a short personality tagline card + a "Powered by" chip-list card — for Anirban, adapt the chip contents to dev-appropriate personality items such as coffee, terminal tabs, Git commits, Stack Overflow — keep it genuine and light, and flag it as easily editable by Anirban).
    
*   **Marquee ticker:** a horizontal auto-scrolling strip directly under the hero, uppercase tracked phrases separated by a small diamond/sparkle glyph, muted gray text — adapt the phrases to Anirban's actual interests/values (e.g. full-stack development, blockchain × AI, clean UI, open source).
    
*   **Selected work section:** eyebrow label + bold two-line statement headline, then a full-width "feature" project card (image on one side, content on the other: colored category-dot badge pill, bold project title phrased as an outcome, 2–3 line description, uppercase tracked meta line listing context/role), followed by a responsive grid of the same card pattern for remaining projects — image on top, badge + title + description + meta below. Populate this entirely from Anirban's real projects (per the repo/resume note above).
    
*   **"What I bring to a team" panel:** large rounded dark-green panel, "OPEN TO WORK" eyebrow, bold headline, pill CTA button top-right, and a grid of semi-transparent darker-green cards inside it (icon, bold title, short description) — for Anirban, reframe the four cards around his actual strengths (e.g. Full-Stack Development, Blockchain/DApp Engineering, AI/ML Integration, Cross-Browser Frontend Craft) rather than copying the designer-specific ones.
    
*   **"How I work" process section:** eyebrow + bold headline on the cream background, four numbered cards (01–04, numbers in the violet accent) each with a bold subhead and short description — reframe around Anirban's actual working process as a developer (e.g. Understand the requirement → Architect the system → Build & iterate → Ship & measure).
    
*   **Spectrum/balance section (optional but recommended):** three colored cards (lavender, tan, dark green) showing a spectrum of a working style — for Anirban, this could become "How I use AI in my workflow" given his resume already lists an agentic-AI/prompt-engineering certification, staying honest to what's actually true of his process.
    
*   **Stack/tools grid:** eyebrow + headline ("The tools & tech I build with"), grid of rounded white icon cards with labels underneath — populate with Anirban's actual tools from the skills list above (React, Node.js, FastAPI, Solidity/Hardhat, Python, TypeScript, Tailwind, Firebase, MySQL, Git/GitHub, VS Code, Postman, Figma if used, ChatGPT/Claude/Gemini per his AI workshop cert).
    
*   **Footer:** large rounded dark-green panel, "Let's collaborate." (or similar) headline in white, short italic tagline, contact row with email / LinkedIn / GitHub each as a link with a circular arrow-icon button, thin divider, small copyright line.
    
*   **Decorative floating dot:** a small violet dot appears consistently near the top-right of sections in the reference site — this is likely a subtle scroll-linked or cursor-following decorative element. Reproduce it as a tasteful, low-key accent; keep it subtle and respect prefers-reduced-motion.
    

**4\. Motion:** slow, deliberate section-mount and scroll-reveal animations (Framer Motion whileInView), not snappy/bouncy defaults. Organic blob-image mask should feel intentional, not glitchy.

**WHAT MUST NOT CHANGE**

*   All real facts: name, title, education, experience, skills, achievements, contact details — must match the resume and existing repo content exactly. No invented metrics, no invented projects, no invented personal anecdotes beyond clearly-flagged, easily-editable placeholder flourishes (like the "Powered by" chip card).
    
*   Routing/URL structure, any working links (LinkedIn, GitHub, email, resume download, project links).
    
*   Any backend/API integration or working functionality already present in the repo (e.g. a working contact form).
    
*   Accessibility and responsive behavior — this must work cleanly on mobile, not just desktop.
    

**ANTI-"VIBE CODED" / ANTI-GENERIC-AI MANDATE**

This must read as thoughtfully art-directed, not templated:

*   No centered-everything default layouts — preserve the asymmetric hero and varied section rhythms from the reference.
    
*   No uniform default spacing — vary spacing deliberately the way the reference does (tight within a card, generous between sections).
    
*   No default shadcn/Tailwind "out of the box" component look — every button, card, and badge needs the specific rounded/organic treatment described above, not default radius/shadow.
    
*   No stock icon-in-a-circle filler — icons should feel considered and match the reference's outlined, single-weight icon style.
    
*   No filler SaaS-template copy tone — voice should be first-person, confident, and specific to Anirban, mirroring the reference's personality-driven microcopy style but truthful to who Anirban actually is.
    
*   Before marking any section complete, compare it side-by-side against your itsaanchal.com screenshots and against a mental "could this be mistaken for a generic AI-generated template" test. If yes, iterate.
    

**EXECUTION PLAN**

1.  Inventory all existing content and components in the repo before deleting/replacing anything.
    
2.  Rebuild design tokens first (colors, type scale, radius, spacing) based on exact values pulled from itsaanchal.com via devtools inspection.
    
3.  Rebuild shared primitives (nav, buttons, badge pills, cards, footer panel).
    
4.  Rebuild section by section: hero → ticker → selected work → "what I bring" panel → process section → stack grid → footer.
    
5.  Screenshot and self-review each section against the anti-generic-AI checklist before moving to the next.
    
6.  Final pass: responsive/mobile check, accessibility/contrast check, motion timing consistency, and a full read-through to confirm every fact displayed matches the resume/repo source of truth.
    

**ACCEPTANCE CRITERIA**

*   Visually and structurally transformed to match itsaanchal.com's warm, editorial, human design language — not a literal clone, but unmistakably the same design DNA.
    
*   Every fact on the site is accurate to Anirban's real resume/repo content — nothing invented.
    
*   No functional regressions; all existing links and integrations still work.
    
*   No leftover unused CSS/components from the old design.
    
*   Reads as designed by a skilled human, not assembled from AI/template defaults.