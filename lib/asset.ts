/**
 * Prefixes a root-relative asset path with the deployment base path so raw
 * <img>/<video> sources resolve when the site is served under a sub-path (as on
 * GitHub Pages). Next.js only applies basePath to next/link and next/image, not
 * to plain elements, so we handle those here. Empty base in dev and normal builds.
 */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path}`;
}
