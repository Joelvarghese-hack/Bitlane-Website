/** @type {import('next').NextConfig} */

// STATIC_EXPORT=1 produces a fully static build in `out/` for GitHub Pages.
// PAGES_BASE_PATH must match the repo name when served from
// https://<user>.github.io/<repo>/. Leave both unset for local dev.
const isStaticExport = process.env.STATIC_EXPORT === "1";
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig = {
  reactStrictMode: true,
  // Exposed so raw <img>/<video> asset paths can be prefixed for GitHub Pages,
  // where the site is served under a sub-path. Empty in dev and normal builds.
  env: { NEXT_PUBLIC_BASE_PATH: isStaticExport ? basePath : "" },
  ...(isStaticExport ? { output: "export", basePath, trailingSlash: true } : {}),
};

export default nextConfig;
