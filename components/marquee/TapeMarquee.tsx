/**
 * Marquee tape has been removed site-wide. This renders an empty spacer of the
 * same height the tape used to occupy, so the surrounding layout keeps its
 * spacing and nothing shifts or collapses. Props are kept so existing call
 * sites don't need to change.
 */
export default function TapeMarquee(_props: {
  slope?: "up" | "down";
  logo?: "wordmark" | "icon";
}) {
  return <div aria-hidden="true" style={{ height: "clamp(3.4rem, 3.7vw, 4.1rem)" }} />;
}
