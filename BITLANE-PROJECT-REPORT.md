# Bitlane Relocations — Complete Project Report & Cloud Handoff

**Prepared:** 2026-10-28
**Owner:** Joel Varghese
**Repository:** https://github.com/Joelvarghese-hack/Bitlane-Website
**Live (GitHub Pages):** https://joelvarghese-hack.github.io/Bitlane-Website/
**Local clone used this session:** `C:\Users\joelk\Bitlane-Website`

> This is a single, self-contained handoff. You can paste it into a brand-new
> chat to continue the project "in the cloud" with full context, drop it into
> your portfolio as a case-study write-up, and use it as the deploy runbook.
> Nothing is omitted — the history starts from **day one (v1, June 12, 2026)**,
> well before the site was ever locked down from the client.

---

## 1. What this project is

**Bitlane Relocations** is a premium marketing website for a moving company
based in **Kingston, Ontario**, serving the Greater Toronto Area, Eastern
Ontario, Ottawa, and Montreal. It is a dark, black-themed, desktop-first landing
page with supporting inner pages, built to feel high-end ("$50K-tier").

- **Brand palette:** orange `#FE4436` (primary accent), deep black `#231F20`
  (background), pure white `#FFFFFF` (text), with elevated surfaces
  `#2C2724` / `#372F2C`.
- **Typography:** Montserrat (titles) + Open Sauce Sans (body), self-hosted.
- **Tone:** confident, plain-spoken, no em dashes anywhere in copy.

---

## 2. How to open it (3 ways)

### A. Local development (needs this machine)
```bash
cd C:\Users\joelk\Bitlane-Website
npx next dev -p 4321
```
Then open **http://localhost:4321**.
> Note: port **3000 is used by a different project (Aura Films)** on this
> machine — that is why the old localhost link showed the wrong site. Bitlane
> now runs on **4321** to avoid the clash.

### B. Temporary public Cloudflare link (works from any device, but only while
this machine + tunnel are running)
```bash
# with the dev server running on 4321:
cloudflared tunnel --url http://localhost:4321
```
This prints a `https://<random>.trycloudflare.com` URL. It is a quick preview —
it disappears when the tunnel/machine stops. For a link that is always on, use C.

### C. Permanent cloud deploy (the real "whenever/wherever" link)
Two hosts are already wired up. **Both need a one-time login with YOUR account**
(an automated session cannot complete that OAuth):

**Cloudflare Pages** (custom `*.pages.dev` URL, always on):
```bash
cd C:\Users\joelk\Bitlane-Website
npx wrangler login                 # one time — opens browser, you approve
powershell -File deploy-cloudflare.ps1
# -> deploys out/ to project "bitlane-website" -> https://bitlane-website.pages.dev
```

**GitHub Pages** (already configured; auto-deploys on push to main):
```bash
cd C:\Users\joelk\Bitlane-Website
STATIC_EXPORT=1 PAGES_BASE_PATH=/Bitlane-Website npm run build
rm -rf dist && cp -r out dist
git add -A && git commit -m "Deploy updates"
git push            # GitHub Actions publishes dist/ -> the github.io URL above
```

---

## 3. Tech stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 14 (App Router) + TypeScript |
| Styling | Tailwind CSS (custom brand tokens in `tailwind.config.ts` + `app/globals.css`) |
| Smooth scroll | Lenis + GSAP ticker (`components/scroll/SmoothScroll.tsx`, `lib/lenis.ts`) |
| Scroll reveals | GSAP ScrollTrigger + a lightweight CSS reveal (`components/scroll/Reveal.tsx`) |
| 3D | **Three.js** (added this session) — `components/hero/HeroBox3D.tsx` |
| Map | Leaflet (service-area map) |
| Fonts | Montserrat + Open Sauce Sans, self-hosted in `public/fonts` |
| Hosting | GitHub Pages (`dist/`) and/or Cloudflare Pages (`out/`) |

---

## 4. Pages

| Route | Content |
| --- | --- |
| `/` | Hero (ratings, video panel, quote form, **3D box**), problem statement, why-us, services, "don't settle" comparison, testimonials, **gallery**, about, service areas, contact tile, FAQ, full quote section, **truck animation** |
| `/services` | The services in long form, each anchored for deep links |
| `/about` | Company story, **owner block (photo + bio)**, **count-up stats** |
| `/contact` | Contact details + shared quote form |
| `/privacy-policy` | Privacy policy (PIPEDA / Ontario aligned) |
| `/terms-and-conditions` | Terms |
| `/thank-you` | Post-submit confirmation |

---

## 5. COMPLETE chronological history (from day one)

Commits are the real record from the Git repository. Dates are the commit dates.

### Phase 0 — Brand assets (pre-build)
Source brand files live in `C:\Users\joelk\Bitlane New 2026\`: `Bitlane Logo
Black/White/Orange/Icon.png`, `Bitlane Video.mp4`, `Truck.png`, and
`pure Marquee tape ref.png`. These were the raw inputs for the site.

### Phase 1 — First build (June 12, 2026)
- `907e8b8` **Bitlane Relocations site v1** — the original site.
- `c933bb0` **site v2: 3D truck scroll animation and inner pages** — the first
  big truck animation + multi-page structure.
- `808a60f` Deploy prebuilt static export to Pages — first deployment.

### Phase 2 — Premium black redesign (July 11, 2026)
- `6fc20cd` Redesign homepage as a premium black landing page.
- `87301ae` Video hero, photo cards, new sections, legal pages.
- `69966a8` Homepage animations, new sections, deeper pages, responsive layout.
- `dec4a17` Draw the tape marquee separator in CSS (not a glyph).

### Phase 3 — Hero / truck / marquee / gallery rounds (July 12–21, 2026)
- `bdd08f1` Rework hero, truck, marquee, contact links, footer trust badges.
- `1356927` Gallery band, slanted marquee, testimonials marquee, richer quote
  form, thank-you page, WhatsApp nav link.
- `fce933e` Fix broken deploy: commit new dist assets.
- `c3ebca8` Rebuild truck to match the Bitlane wrap; wheels spin; one-line headline.
- `e5d42a8` Real-photo truck + direction-aware reveal; in-site quote form.
- `72362d8` Truck one-direction + glass pill nav; testimonials rework; favicon.
- `75c50eb` Redesign pass: brand palette, fonts, glass nav + burger, problem/
  mission sections, spirals, logo marquee.
- `5093c93` Round 3: scroll-drawn spirals, sticky problem section, map,
  comparison, nav + truck fixes.
- `1984ec7` Round 4: flip truck (West, R→L, smaller), remove spirals, Leaflet
  map whoosh, nav pill hover, email, license.
- `050c3a0` Round 5: light truck band (L→R forward), nav fills to top, owner
  photo, Google map, FAQ + copy fixes.
- `6bfc9b8` Remove Process page, Pure-style About, whoosh map, aligned services.
- `d40caa2` **Security hardening + UX/a11y/SEO fixes.**
- `d3cde4a` Fix marquee overlap, scroll arrows, mobile glitch; add content guard.
- `cca0cab` / `5c820ee` Scroll arrows made reliable everywhere.
- `5f79da8` Gallery: remove tape overlap hiding the "Our Work" title.
- `d82a585` Re-trigger Cloudflare build for the gallery spacing fix.
- `3ba4f1c` / `5e6df74` / `44f6cc9` Marquee: full-bleed 100vw, rotation
  corner-wedge fixes, overflow-x clip guard (no horizontal scroll).
- `fa79124` Remove all marquee tapes site-wide (kept as spacers).
- `4e4a047` Restore marquee tapes (new logos, thinner, swapped gallery slopes);
  instant Thank-You + keepalive send.
- `eda9194` Marquee: slanted diagonal ribbon, upright content, 4° tilt.
- `780fdae` Marquee icon tape sized to align flush with phone boxes.

### Phase 4 — Locking the site down from the client (July 21, 2026)
- `e6d8ce5` **Content protection on mobile/tablet: disable long-press
  save/copy callout + image pointer events.** This is the point where the site
  was deliberately made harder for the client to copy/save from — the "blocking
  it off from the client" moment. Everything in Phases 0–3 is *before* this.

### Phase 5 — Final content/visual polish (July 21–29, 2026)
- `36551b9` Marquee phone number: heavier weight + italic.
- `a5e8143` About page: replace stock image with owner photo (all screens).
- `bc40205` Solids only (removed orange glow + gradients); robust scroll-to-top;
  marquee flicker fix (translate3d).
- `628138a` **About page copy + stats; remove truck animation; trim About box;
  remove 2 FAQs.** (This is where the homepage truck animation was removed.)
- `259a387` Thank-you page wording update.

### Phase 6 — Content refresh (August 3, 2026)
- `86d8745` Update hero heading, why section, services list.
- `3ce0060` Rebuild dist for the content updates. **(Last committed state.)**

### Phase 7 — Revival in development (September 27, 2026)
The site had gone quiet. It was located across multiple folders, the correct
repo (`Bitlane-Website`, a Next.js app — not the older static-HTML variants) was
identified and **cloned to `C:\Users\joelk\Bitlane-Website`**, dependencies were
installed (143 packages), and the dev server was brought back up and verified
rendering with no console errors.

### Phase 8 — This session's enhancements (Sept 28 → Oct 28, 2026)
See the next section for the file-level detail. Summary:
1. **Fixed localhost** — moved Bitlane to its own port **4321** (port 3000 was
   the unrelated Aura Films project, which was the cause of the wrong site
   showing).
2. **Restored the truck animation** on the homepage (reverted the `628138a`
   removal — re-added `<TruckReveal />`).
3. **Swapped the owner** — new portrait + a placeholder person **"Marcus
   Bennett, Founder"** with a short bio on the About page.
4. **Replaced the gallery** with 7 real stock photos of moving items (packed
   boxes, packing, truck loading/unloading).
5. **Added 3 premium animations** — GSAP hero entrance timeline, a **Three.js
   3D cardboard moving box** in the hero, and a **count-up** on the About stats.

---

## 6. This session's changes — file by file

| File | Change |
| --- | --- |
| `app/page.tsx` | Re-added `import TruckReveal` + `<TruckReveal />` (truck restored to homepage). |
| `components/hero/Hero.tsx` | Added GSAP entrance timeline (headline mask-rise, staggered actions/form/ratings, video zoom-settle) + mounted the 3D box container (desktop only, with a subtle brand-orange radial glow). |
| `components/hero/HeroBox3D.tsx` | **NEW.** Three.js scene: a cardboard moving box with procedural cardboard textures (fibre speckle, taped seam, shipping label, taped top flaps), studio lighting (hemisphere key + fill + orange rim), idle rotation, pointer parallax, scroll-linked drift, soft contact shadow. Fully reduced-motion safe (draws one static frame) and disposes cleanly on unmount. |
| `components/stats/CoverageStats.tsx` | Now a client component; the four figures count up from zero when scrolled into view (GSAP ScrollTrigger). Real values are server-rendered, so no-JS / reduced-motion shows them as-is. |
| `app/about/page.tsx` | Owner photo wrapped in a `<figure>` with a caption: **Marcus Bennett / Founder / 2-sentence bio.** Company story untouched. |
| `public/images/owner.jpg` | Replaced with a new stock portrait. |
| `public/images/gallery/g1–g7.jpg` | Replaced with 7 moving-themed stock photos (Unsplash). |
| `package.json` / `package-lock.json` | Added `three` + `@types/three`. |

**Verification done this session:** TypeScript `tsc --noEmit` passed (exit 0);
no console errors; the 3D box renders (confirmed by screenshot); the homepage
headline animates to its final state; gallery + owner images serve HTTP 200.

---

## 7. Current state / what is uncommitted

All Phase 8 work is **present locally but NOT yet committed** to Git. `git status`
shows modified: `app/page.tsx`, `app/about/page.tsx`, `components/hero/Hero.tsx`,
`components/stats/CoverageStats.tsx`, `package.json`, `package-lock.json`, the 8
images; untracked: `components/hero/HeroBox3D.tsx`. To preserve/deploy this work
it must be committed (and `dist/` rebuilt for GitHub Pages).

---

## 8. Known notes / TODO before client launch

- **Quote form email** is a placeholder — set `QUOTE_EMAIL` in `lib/formSubmit.ts`.
- **Owner is a placeholder** ("Marcus Bennett") — swap for the real owner's
  name, photo, and bio when available.
- **npm audit** reports vulnerabilities in the older Next 14 dependency chain
  (not blocking local/dev; address before a hardened production launch).
- **Gallery/owner images are stock** (Unsplash) — swap for real job photos.

---

## 9. How to continue in a NEW chat (handoff)

Paste this whole file. Then the key facts an assistant needs:
- Project root: `C:\Users\joelk\Bitlane-Website` (Next.js 14, App Router).
- Run: `npx next dev -p 4321` → http://localhost:4321 (NOT 3000 — that's Aura Films).
- Brand tokens: `tailwind.config.ts` + `app/globals.css` (orange `#FE4436`,
  black `#231F20`, white `#FFFFFF`).
- Animations live in: `components/hero/Hero.tsx`, `components/hero/HeroBox3D.tsx`,
  `components/stats/CoverageStats.tsx`, `components/truck/TruckReveal.tsx`,
  `components/scroll/`.
- Deploy: see Section 2C.
- Uncommitted Phase 8 work exists — commit before deploying.

---

## 10. Related work (context, not part of this repo)

- **Portfolio site (separate project):** a multi-page personal portfolio for
  Joel that features Bitlane as a case study; went through several redesigns and
  style variants (Sept 20–21, 2026). Repo remotes seen on this machine:
  `aura-films-website` and `joel_portfolio`.
- **JV monogram logo:** a custom "JV" monogram was designed as SVG and exported
  to PNG/JPG in light and dark variants (Sept 26, 2026) via a Pillow-based
  rasterizer.
- **Resume:** reviewed and ready (duplicate PDFs were consolidated).

---

## 11. Quick reference

- Repo: https://github.com/Joelvarghese-hack/Bitlane-Website
- GitHub Pages: https://joelvarghese-hack.github.io/Bitlane-Website/
- Cloudflare Pages project name: `bitlane-website` (deploy with `deploy-cloudflare.ps1`)
- Local: `C:\Users\joelk\Bitlane-Website` · dev port **4321**
- Branches: `main`, `claude/reference-website-styles-q0rvv3`
