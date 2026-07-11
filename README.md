# Bitlane

Marketing site for Bitlane, a moving company based in Kingston, Ontario,
serving the Greater Toronto Area, Eastern Ontario, and Quebec. A premium,
black-themed landing page plus supporting inner pages, built desktop first.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Lenis + GSAP ticker (smooth scroll only)
- Bricolage Grotesque variable font, self-hosted from `public/fonts`

## Run

```bash
npm install
npm run dev    # development
npm run build  # production build
npm run start  # serve the production build
```

## Pages

| Route | Content |
| --- | --- |
| `/` | Hero (ratings, blank video panel, quote form), services, testimonials, areas we serve, FAQ, and a full quote section |
| `/services` | The nine services in long form, each anchored for deep links |
| `/about` | Company copy and stats |
| `/process` | The four steps from first call to settled in |
| `/coverage` | Service area, GTA plus Eastern Ontario and Quebec |
| `/contact` | Contact details and the shared quote form |
| `/privacy-policy` | Privacy policy, aligned with PIPEDA and Ontario norms |

## Notes

- Background is true black; boxes, inputs, and buttons are round-edged.
- The hero video panel is intentionally blank, ready for a promo video. See
  `components/hero/VideoPanel.tsx` for how to drop one in.
- Service cards use styled placeholders in place of photos. Swap them for real
  images when available.
- The quote form submits by `mailto:`. Replace the placeholder address in
  `lib/formSubmit.ts` (`QUOTE_EMAIL`) before launch.
- Content is kept free of em dashes throughout.

## Deployment (GitHub Pages)

The static export is prebuilt and committed to `dist/`. Every push to `main`
runs `.github/workflows/deploy-pages.yml`, which publishes `dist/` to GitHub
Pages directly (no build on CI):

https://joelvarghese-hack.github.io/Bitlane-Website/

To regenerate `dist/` after changing the site:

```bash
STATIC_EXPORT=1 PAGES_BASE_PATH=/Bitlane-Website npm run build
rm -rf dist && cp -r out dist
```
