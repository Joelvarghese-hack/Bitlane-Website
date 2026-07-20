"use client";

import { type RefObject } from "react";

/**
 * Prev / next arrow controls for a horizontal scroller. White, slightly thick
 * chevrons inside solid orange circles. Nudges the given scroller by roughly one
 * viewport-width of cards; works identically on desktop and mobile (tap or click).
 */
export default function ScrollArrows({
  scrollerRef,
  label = "items",
  className = "",
}: {
  scrollerRef: RefObject<HTMLElement | HTMLDivElement | null>;
  label?: string;
  className?: string;
}) {
  const nudge = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.max(260, el.clientWidth * 0.82);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <button
        type="button"
        onClick={() => nudge(-1)}
        aria-label={`Previous ${label}`}
        className="arrow-btn"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M15 5l-7 7 7 7" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => nudge(1)}
        aria-label={`Next ${label}`}
        className="arrow-btn"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M9 5l7 7-7 7" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
