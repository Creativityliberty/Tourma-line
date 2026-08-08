# Sprint 7B Editorial Authority Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish four SERP-informed editorial assets that strengthen Tourma-Line's numérologie, voyance/cartomancie and Seine-Maritime topical authority without creating doorway pages, then connect them bidirectionally to the site's pillars and territorial hubs.

**Architecture:** Keep the existing Markdown-driven blog and React prerender architecture. Add one focused verification script to enforce the Sprint 7B editorial contract, harden blog metadata/structured data to identify Line Simon correctly, publish four unique articles, and add reciprocal contextual links from service pillars and territorial hubs. No new Rouen/Le Havre/Dieppe local landing may be created.

**Tech Stack:** React 19, TypeScript, Vite, React Router, React Helmet Async, react-markdown, front-matter, Node.js verification scripts, Markdown content.

## Global Constraints

- Work only on branch `seo/normandie-v2`; do not merge to `main`.
- Exactly four Sprint 7B articles; no city-template variants.
- No physical-presence claim outside the real cabinet at Gerponville.
- No medical claims, guaranteed predictions, guaranteed outcomes, dependency-building copy, or unsupported superiority claims.
- Preserve existing Chemin de Vie, Mission d'âme, Lahochi-distance and cartomancie-phone intents; do not cannibalize them.
- Article A must support `/numerologie`; Article B must support `/numerologie` and the existing Chemin de Vie guide; Article C must support `/cartomancie`; Article D must support published territory hubs and `/consultation-a-distance`.
- SERP-informed means filling gaps and improving clarity/trust/utility, not copying competitor wording.
- All four articles must remain mobile-scannable: short opening answer, compact sections, tables/checklists where useful, and restrained CTAs.

---

### Task 1: Add the Sprint 7B editorial verification contract

**Files:**
- Create: `scripts/verify-editorial-authority.mjs`
- Modify: `package.json`

**Interfaces:**
- Consumes: existing blog Markdown files, `scripts/routes.mjs`, `src/data/serpValidation.mjs`.
- Produces: a verification command that fails the build whenever the approved four articles or their required safety/internal-link signals are missing.

- [ ] **Step 1: Write the failing verification script**

Create `scripts/verify-editorial-authority.mjs` with checks for these exact slugs:

```js
const required = {
  "choisir-numerologue-consultation": {
    links: ["/numerologie", "/blog/calcul-chemin-de-vie-numerologie"],
    phrases: ["questions à poser", "signaux d'alerte"],
  },
  "annee-personnelle-numerologie": {
    links: ["/numerologie", "/blog/calcul-chemin-de-vie-numerologie"],
    phrases: ["année civile", "anniversaire", "2026"],
  },
  "choisir-voyante-cartomancienne-serieuse": {
    links: ["/cartomancie"],
    phrases: ["libre arbitre", "résultat garanti", "prix"],
  },
  "consulter-seine-maritime-cabinet-distance": {
    links: [
      "/zones/pays-de-caux",
      "/zones/fecamp-caux-littoral",
      "/zones/cote-d-albatre",
      "/zones/caux-seine-agglo",
      "/consultation-a-distance",
    ],
    phrases: ["Gerponville", "cabinet", "à distance"],
  },
};
```

The script must:
- scan all publishable Markdown frontmatter slugs;
- assert each approved slug exists exactly once;
- assert every article includes `author: "Line Simon"`, a `date`, `readTime`, `category`, and `description`;
- assert each article contains its required internal links and phrases;
- assert Article D never says `cabinet à Rouen`, `cabinet au Havre`, `cabinet à Dieppe`, `cabinet de Rouen`, `cabinet du Havre`, or `cabinet de Dieppe`;
- assert none of the four articles links to `/numerologie-rouen`, `/numerologie-le-havre`, `/numerologie-dieppe`, `/cartomancie-rouen`, `/cartomancie-le-havre`, `/cartomancie-dieppe`, `/soin-lahochi-rouen`, `/soin-lahochi-le-havre`, `/soin-lahochi-dieppe`;
- assert none contains the risky phrases `guérit`, `guérison garantie`, `prédiction certaine`, `résultat garanti` except where Article C explicitly uses `résultat garanti` as a warning/red flag;
- assert `getRoutes()` includes all four `/blog/<slug>` routes.

- [ ] **Step 2: Wire the verification into `verify:seo`**

Change the script to:

```json
"verify:seo": "node scripts/verify-seo-architecture.mjs && node scripts/verify-geo-seo.mjs && node scripts/verify-serp-strategy.mjs && node scripts/verify-editorial-authority.mjs"
```

- [ ] **Step 3: Verify RED**

Run through CI/build: `npm run verify:seo`.

Expected: FAIL specifically because the four Sprint 7B article slugs do not exist yet.

- [ ] **Step 4: Commit the RED contract**

Commit message:

```text
test(seo): add Sprint 7B editorial authority contract
```

---

### Task 2: Harden blog author/update metadata and structured data

**Files:**
- Modify: `src/data/blogPosts.ts`
- Modify: `src/pages/BlogPostPage.tsx`

**Interfaces:**
- Consumes: Markdown frontmatter fields `author`, `updated`, `date`.
- Produces: `BlogPost.author: string` and optional `BlogPost.updated: string`, used by visible author UI and `BlogPosting` JSON-LD.

- [ ] **Step 1: Extend the BlogPost model**

Add:

```ts
author: string;
updated?: string;
```

and map:

```ts
author: attributes.author || "Line Simon",
updated: attributes.updated || undefined,
```

- [ ] **Step 2: Use the metadata in BlogPostPage**

Update structured data to:

```ts
"author": {
  "@type": "Person",
  "@id": "https://www.tourma-line.fr/#line-simon",
  "name": post.author,
  "url": "https://www.tourma-line.fr/#a-propos",
  "jobTitle": "Voyante, numérologue et praticienne en soins énergétiques Lahochi"
},
"publisher": { "@id": "https://www.tourma-line.fr/#business" },
"dateModified": post.updated || post.date,
```

Add a `BreadcrumbList` JSON-LD script for Accueil → Blog → current article.

Change visible author from `Par Line` to `Par {post.author}` and remove the hard-coded role `Numérologue`; display `Tourma-Line · Gerponville` instead so cartomancy/territorial posts are not mislabeled.

- [ ] **Step 3: Keep title/canonical behavior unchanged**

Do not create alternate canonicals or local city canonicals. Continue using:

```ts
<link rel="canonical" href={`https://www.tourma-line.fr/blog/${post.slug}`} />
```

- [ ] **Step 4: Commit metadata hardening**

Commit message:

```text
seo(blog): strengthen author and article structured data
```

---

### Task 3: Publish the two premium numerology articles

**Files:**
- Create: `blog_markdowns/choisir-numerologue-consultation.md`
- Create: `blog_markdowns/annee-personnelle-numerologie.md`

**Interfaces:**
- Consumes: existing `/numerologie`, `/consultation-a-distance`, `/blog/calcul-chemin-de-vie-numerologie`, `/blog/comprendre-mission-ame-numerologie` routes.
- Produces: two new unique blog routes discovered automatically by the existing Markdown route loader.

- [ ] **Step 1: Write Article A — choosing a numerologist**

Frontmatter:

```yaml
---
title: "Comment choisir un numérologue ? 8 critères avant une consultation"
seoTitle: "Comment choisir un numérologue sérieux ? 8 critères"
description: "Méthode, avis, tarifs, déroulement, éthique : 8 critères concrets et les questions à poser avant de choisir un numérologue."
slug: "choisir-numerologue-consultation"
date: "2026-08-08"
author: "Line Simon"
readTime: "12 min"
category: "Numérologie"
persona: "Avant de réserver"
image: "/blog-chemin-devie.png"
featured: true
---
```

Required content structure:
- direct checklist answer in the first 120 words;
- explain what a numerologist does and does not do;
- 8 criteria: method transparency, personalization, identity, reviews, pricing, duration/deliverables, ethics/free will, remote/in-person fit;
- concrete pre-booking questions;
- green flags/red flags table;
- how to read reviews critically;
- what information a practitioner usually needs;
- cabinet vs remote consultation;
- transparent Tourma-Line example only after the neutral comparison framework;
- FAQ;
- links to `/numerologie`, `/blog/calcul-chemin-de-vie-numerologie`, `/blog/comprendre-mission-ame-numerologie`, `/consultation-a-distance`.

- [ ] **Step 2: Write Article B — personal year**

Frontmatter:

```yaml
---
title: "Année personnelle en numérologie : calcul, cycles 1 à 9 et interprétation"
seoTitle: "Année personnelle en numérologie : calcul 2026 et cycles 1 à 9"
description: "Calculez votre année personnelle 2026, comprenez les cycles 1 à 9 et la différence entre méthode année civile et méthode anniversaire."
slug: "annee-personnelle-numerologie"
date: "2026-08-08"
author: "Line Simon"
readTime: "14 min"
category: "Numérologie"
persona: "Comprendre son cycle"
image: "/blog-chemin-devie.png"
featured: true
---
```

Required content structure:
- direct formula in opening;
- explain 2026 universal year = `2 + 0 + 2 + 6 = 10 → 1` as a numerology convention, not a scientific fact;
- at least three worked examples;
- compact Markdown table for years 1–9;
- explicit section `Année civile ou anniversaire : pourquoi les méthodes diffèrent ?` explaining both conventions and stating which convention Tourma-Line uses;
- distinction from Chemin de Vie;
- what an annual cycle can and cannot tell a person;
- FAQ;
- links to `/numerologie`, `/blog/calcul-chemin-de-vie-numerologie`, `/blog/comprendre-mission-ame-numerologie`.

- [ ] **Step 3: Run verification**

Expected: still FAIL because Articles C and D are missing, but Article A/B checks pass.

- [ ] **Step 4: Commit numerology cluster**

Commit message:

```text
content(seo): publish premium numerology authority guides
```

---

### Task 4: Publish the voyance trust guide and Seine-Maritime decision guide

**Files:**
- Create: `blog_markdowns/choisir-voyante-cartomancienne-serieuse.md`
- Create: `blog_markdowns/consulter-seine-maritime-cabinet-distance.md`

**Interfaces:**
- Consumes: `/cartomancie`, `/consultation-a-distance`, published territory hubs, existing `/blog/guidance-cartomancie-telephone-efficacite`.
- Produces: two new blog routes completing the Sprint 7B set.

- [ ] **Step 1: Write Article C — choosing a serious fortune teller/cartomancer**

Frontmatter:

```yaml
---
title: "Comment choisir une voyante ou cartomancienne sérieuse ? 10 vérifications"
seoTitle: "Voyante sérieuse : 10 critères pour bien choisir"
description: "Avis, identité, prix, promesses, libre arbitre : 10 vérifications concrètes avant de choisir une voyante ou cartomancienne."
slug: "choisir-voyante-cartomancienne-serieuse"
date: "2026-08-08"
author: "Line Simon"
readTime: "13 min"
category: "Voyance & Cartomancie"
persona: "Avant de consulter"
image: "/blog-guidance-amour.jpg"
featured: true
---
```

Required content structure:
- direct 10-point checklist;
- identity/business verification, including practical mention of France's official Annuaire des Entreprises as an optional verification tool;
- prices/duration known before payment;
- how to analyse reviews without treating stars as proof;
- red flags: fear, pressure, escalating payments, guaranteed return of a partner, guaranteed outcome, dependency;
- explicit respect for free will;
- cabinet vs phone/remote comparison;
- questions to ask before paying;
- when not to consult;
- a short consumer-protection note linking to a current DGCCRF page on misleading commercial practices;
- FAQ;
- links to `/cartomancie`, `/consultation-a-distance`, `/blog/guidance-cartomancie-telephone-efficacite`.

- [ ] **Step 2: Write Article D — Seine-Maritime consultation decision guide**

Frontmatter:

```yaml
---
title: "Où consulter en Seine-Maritime : cabinet proche ou consultation à distance ?"
seoTitle: "Voyance, numérologie et énergétique en Seine-Maritime : où consulter ?"
description: "Gerponville, Fécamp, Pays de Caux, Côte d'Albâtre, Caux Seine ou distance : choisissez le format de consultation adapté sans faux cabinet local."
slug: "consulter-seine-maritime-cabinet-distance"
date: "2026-08-08"
author: "Line Simon"
readTime: "11 min"
category: "Seine-Maritime"
persona: "Choisir où consulter"
image: "/hero-tourma-line.jpg"
featured: true
---
```

Required content structure:
- opening decision tree: close to Gerponville → cabinet; validated nearby local area → relevant Tier A/hub page; farther away → distance;
- clear real address: `4 résidence Les Peupliers, 76540 Gerponville`;
- honest distinction between organic territorial coverage and physical location;
- explain Voyance/Cartomancie vs Numérologie vs Lahochi/energy session format;
- links to all four published hubs and `/consultation-a-distance`;
- links to `/cartomancie`, `/numerologie`, `/soin-lahochi`;
- mention Fécamp/Valmont/Cany-Barville only as nearby validated context, never as a second cabinet;
- FAQ.

- [ ] **Step 3: Run verification**

Expected: `verify-editorial-authority.mjs` passes article existence/content checks.

- [ ] **Step 4: Commit the completed article set**

Commit message:

```text
content(seo): complete Sprint 7B authority article set
```

---

### Task 5: Add reciprocal internal links from pillars and territory hubs

**Files:**
- Modify: `src/pages/ServicePage.tsx`
- Modify: `src/pages/NumerologiePage.tsx`
- Modify: `src/pages/CartomancePage.tsx`
- Modify: `src/pages/TerritoryHubPage.tsx`
- Modify: `scripts/verify-editorial-authority.mjs`

**Interfaces:**
- Consumes: the four new blog slugs.
- Produces: reciprocal contextual links that move authority from service/hub pages back into the guides.

- [ ] **Step 1: Add a reusable `relatedGuides` prop to ServicePage**

Add:

```ts
relatedGuides?: { title: string; description: string; path: string }[];
```

Render a `Guides pour aller plus loin` section before FAQ only when non-empty.

- [ ] **Step 2: Link NumerologiePage to Articles A and B**

Pass:

```ts
relatedGuides={[
  {
    title: "Comment choisir un numérologue ?",
    description: "Méthode, avis, tarifs et questions à poser avant de réserver.",
    path: "/blog/choisir-numerologue-consultation",
  },
  {
    title: "Année personnelle : calcul et cycles 1 à 9",
    description: "Calcul 2026, conventions et interprétation de votre cycle annuel.",
    path: "/blog/annee-personnelle-numerologie",
  },
]}
```

- [ ] **Step 3: Link CartomancePage to Article C**

Pass:

```ts
relatedGuides={[
  {
    title: "Comment choisir une voyante ou cartomancienne sérieuse ?",
    description: "10 vérifications concrètes sur l'identité, les avis, les prix et les promesses.",
    path: "/blog/choisir-voyante-cartomancienne-serieuse",
  },
]}
```

- [ ] **Step 4: Link TerritoryHubPage to Article D**

Add one compact editorial card linking to:

```text
/blog/consulter-seine-maritime-cabinet-distance
```

Use the same card on every published hub; it is a department-level decision guide, not a duplicated local landing.

- [ ] **Step 5: Extend verification for reciprocal links**

Assert:
- `NumerologiePage.tsx` contains both numerology article slugs;
- `CartomancePage.tsx` contains the voyance trust-guide slug;
- `TerritoryHubPage.tsx` contains the Seine-Maritime guide slug;
- `ServicePage.tsx` contains the visitor-facing heading `Guides pour aller plus loin`.

- [ ] **Step 6: Commit internal authority wiring**

Commit message:

```text
seo(internal-links): connect authority guides to pillars and hubs
```

---

### Task 6: Final verification and PR checkpoint

**Files:**
- Verify: `package.json`
- Verify: `scripts/verify-editorial-authority.mjs`
- Verify: all four new Markdown files
- Update PR #1 description/checkpoint only after successful verification.

**Interfaces:**
- Consumes: all prior tasks.
- Produces: a GREEN Sprint 7B checkpoint ready for review, still draft and unmerged.

- [ ] **Step 1: Run full SEO verification**

Run:

```text
npm run verify:seo
```

Expected: all four layers pass:
- SEO architecture;
- Geo SEO;
- SERP strategy;
- Editorial authority.

- [ ] **Step 2: Run full build**

Run:

```text
npm run build
```

Expected: Vite + SSR + prerender + sitemap generation pass.

- [ ] **Step 3: Verify generated routes conceptually**

Confirm the four new `/blog/<slug>` URLs are in `getRoutes()` and no new Rouen/Le Havre/Dieppe service landing is introduced.

- [ ] **Step 4: Verify the latest GitHub/Vercel status**

Use the latest commit SHA and require a fresh `success` state before calling the sprint GREEN.

- [ ] **Step 5: Update PR #1**

Append a Sprint 7B section summarizing:
- four articles published;
- SERP research approach;
- reciprocal internal linking;
- metadata/schema hardening;
- RED commit and final GREEN commit;
- no new fake-local landing pages;
- PR remains draft and unmerged.

---

## Self-review against the approved spec

- Four approved article intents: covered in Tasks 3 and 4.
- Competitor/SERP gap analysis: encoded in the spec and implemented through the required content structures.
- No fake local presence: enforced in Task 1 and Article D.
- Numérologie methodology disagreement: explicitly enforced in Article B.
- Voyance pressure/no-guarantee guidance: explicitly enforced in Article C.
- Author/entity clarity: handled in Task 2.
- Internal authority flow: handled in Task 5.
- Sitemap/routing: automatic via existing Markdown route loader and verified in Tasks 1/6.
- Anti-doorway protection: existing Sprint 7A decisions remain unchanged and are reasserted in Task 1.
- Medical/predictive claim safety: enforced in Task 1 and article requirements.
