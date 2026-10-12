# Voxylis Growth, website rebuild spec (2026-10-12)

## Summary
Reposition and rebuild voxylisgrowth.com from a single-message "voice team / speed to lead"
site into a credible, premium **US-focused managed outsourcing and remote staffing** company
that connects US businesses with experienced Filipino professionals. Multi-page Astro site,
centralized content data, role-specific conversion content, SEO infrastructure, accessible and
responsive. Deployed to Cloudflare Pages.

Decisions (approved by Belle 2026-10-12):
- **Stack:** Astro (static output), shared components, data-driven pages, `@astrojs/sitemap`.
- **Scope (this build):** core site; individual per-role pages are a reusable template, expanded later.
- **Brand:** deep navy + charcoal + white, **royal blue `#2743c9` kept as the accent** (continuity).
- **Content:** reuse real founder (Belle Dunn) + photo + phone + "supervisor included" offer;
  everything else honest (no fabricated clients, stats, testimonials, certs, address, savings).

## Positioning
"Voxylis Growth helps US businesses build dependable remote teams by connecting them with
experienced Filipino professionals, supported by structured onboarding, clear processes, and
ongoing operational oversight." Managed outsourcing / dedicated remote staffing. Service partner,
not a freelancer marketplace. NOT positioned as a large BPO or exclusively property management.
Never "cheap labor." US business English, confident and concrete; avoid the banned marketing cliches.

## Architecture
```
package.json, astro.config.mjs, tsconfig.json
public/            robots.txt, favicon.svg, og.png, img/*
src/
  styles/global.css         design tokens + base + component classes
  data/
    company.ts              name, legal entity, email (configurable), phone, socials, hero copy
    nav.ts                  header + footer nav
    services.ts             6 categories -> roles -> {desc, responsibilities, tasks, benefits, skills, software, engagement}
    faqs.ts                 13 Q&A
    process.ts              "How it works" steps + client responsibilities
  layouts/Base.astro        html shell, per-page SEO meta (title/desc/canonical/OG), JSON-LD, skip link, Nav, Footer
  components/
    Nav, Footer, Button, Section, CtaBand, ServiceCard, RoleCard, ProcessSteps, Faq,
    SupervisorCallout, ContactForm
  pages/
    index.astro                      Home
    services/index.astro             Services overview
    services/[category].astro        6 category pages generated from services.ts (getStaticPaths)
    how-it-works.astro
    about.astro
    contact.astro                    "Build Your Team" inquiry form
    faq.astro
    privacy.astro  terms.astro       editable placeholders, marked for legal review
    404.astro
```
Centralized data means content lives in one place; pages/components render it. Role-detail
template (`services/[category]/[role].astro`) is scaffolded but not enabled this phase; category
pages carry the full role content so the site is complete.

## Pages and required content
- **Home:** hero (headline "Experienced Talent. Reliable Operations. Room to Grow.", sub, primary CTA
  "Build Your Remote Team", secondary "Explore Our Roles", US-business/PH-talent line, supporting image);
  problem/solution; 6 talent-category cards (link to category pages); how-it-works (4 steps);
  managed-outsourcing difference; supervisor callout; who-we-serve (industries as examples); closing CTA.
- **Services overview:** all 6 categories organized by business function; explains dedicated staffing vs
  managed outsourcing vs role-based expansion; scope/service-levels-are-per-engagement note (no overpromises).
- **6 category pages** (Business Operations & Admin, Customer Success & Support, Sales & Lead Generation,
  Technical & IT, Marketing & Creative, E-commerce & Specialized Ops): intro, role cards with
  responsibilities/tasks/who-benefits/skills/engagement, category-specific caveats, "Request a proposal" CTA.
- **How It Works:** 8-step client journey + client responsibilities + simple timeline/diagram.
- **About:** real founder (Belle Dunn, Founder and CEO, Chicago, 8+ yrs), photo, values, why the
  Philippines, supervisor callout; NO fabricated dates/size/clients/certs.
- **Contact ("Build Your Team"):** full inquiry form (name, business email, company, website optional,
  industry, business size, service category, role(s), number needed, arrangement, start date, details,
  privacy consent). Validation + inline errors + honest submission (success only on accepted response).
  Posts to a **configurable endpoint** (Web3Forms now; GetResponse-ready). Configurable business email.
- **FAQ:** the 13 questions, accurate answers, no unsupported promises.
- **Privacy / Terms:** editable placeholders with company config, clearly marked for legal review.
- **404:** on-brand.

## Commercial / pricing
No public rate card. Proposal-based. CTA labels: Build Your Remote Team, Find Talent for Your Role,
Discuss Your Hiring Needs, Request a Proposal, Schedule a Discovery Call. Optional sample packages live
in one config value, labeled indicative; off by default.

## Brand / design system (tokens in global.css)
- Color: `--navy #0f1b3d` (dark sections/footer), `--charcoal #1f2433`, `--ink #141824` text,
  `--bg #ffffff` / `--surface #f6f7fb`, `--royal #2743c9` accent, `--royal-bright #4766f0`,
  neutral line/soft tokens, deliberate neutrals (slight blue bias).
- Type: one strong, non-cliche B2B sans pairing (display + body) from Google Fonts with real fallbacks.
- Layout: generous whitespace, consistent spacing scale, radius, button styles; elegant cards used by role,
  not everywhere. Subtle, purposeful motion; `prefers-reduced-motion` respected. No horizontal overflow.
- Original wordmark "Voxylis Growth" + simple abstract growth/connection SVG mark. No fake corporate logo.

## SEO
Unique `<title>` + meta description + canonical per page; semantic headings; descriptive alt text;
Open Graph; `@astrojs/sitemap` -> sitemap.xml; `public/robots.txt`; Organization + Service JSON-LD;
clean URLs; internal links between services and roles. No doorway/near-duplicate pages.

## Accessibility
Semantic HTML, keyboard-accessible nav + visible focus, labeled form fields, AA contrast, responsive
images with width/height (no layout shift), skip link, reduced-motion.

## Forms / integrations
Contact form submit is configurable (`company.formEndpoint`). Web3Forms access key reused
(`f5e1c514-d43c-440d-b505-ca843cbc6524`) -> emails ejercitobee@gmail.com. GetResponse to be wired when
Belle sends the form code. No secrets in client code beyond the public Web3Forms key (which is public by design).
Success state shown only when the backend returns success.

## Hosting / deploy
`astro build` -> `dist/` -> Cloudflare Pages (project `voxylis-growth`, account 823a78387a2704cca3b71a75c0a02c20,
wrangler authed ejercitobee@gmail.com). Source stays in GitHub repo `ejercitobee-ship-it/voxylis-growth`.
A GitHub Actions workflow builds + deploys so the GitHub Pages URL can also serve the built site; the old
hand-written GitHub Pages version is superseded. Custom domain can be added on Cloudflare later.

## Out of scope (this phase)
Individual per-role pages (template scaffolded, not enabled), blog/Insights, live GetResponse wiring
(pending Belle's code), real legal review of Privacy/Terms, custom domain.

## QA before done
Build passes; every nav link + CTA destination works; 6 category pages render from data; mobile + desktop;
form validation + honest submission; no fake success/dead buttons; no fabricated proof; alt text + titles;
keyboard + focus; deployed and verified with a real request.
