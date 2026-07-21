# Builds the static site with a ROOT base path (Cloudflare serves at the domain
# root, not under /Bitlane-Website) and deploys it to Cloudflare Pages.
# Requires a one-time `npx wrangler login` first.
$env:STATIC_EXPORT = "1"
$env:PAGES_BASE_PATH = ""      # empty = root-relative asset URLs for *.pages.dev
if (Test-Path out) { Remove-Item -Recurse -Force out }
npm run build
npx wrangler pages deploy out --project-name bitlane-website --commit-dirty=true
