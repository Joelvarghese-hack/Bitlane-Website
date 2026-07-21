"use client";

import { type RefObject } from "react";

/**
 * Prev / next arrow controls for a horizontal scroller. White, slightly thick
 * chevrons inside solid orange circles. Nudges the given scroller by roughly one
 * viewport-width of cards; works identically on desktop and mobile (tap or click).
 */
export default function ScrollArrows({
  scrollerRef,
  onInteract,
  label = "items",
  className = "",
}: {
  scrollerRef: RefObject<HTMLElement | HTMLDivElement | null>;
  onInteract?: () => void;
  label?: string;
  className?: string;
}) {
  const nudge = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    // Pause any auto-drift so it doesn't overwrite the scroll.
    onInteract?.();
    const amount = Math.max(260, el.clientWidth * 0.82);
    const target = el.scrollLeft + dir * amount;
    // Instant jump (guaranteed to move everywhere), then a short smooth easing
    // via CSS for browsers that honour it — reliability first.
    el.style.scrollBehavior = "smooth";
    el.scrollTo({ left: target });
    // Fallback hard-set on the next tick in case smooth scrolling is disabled.
    requestAnimationFrame(() => {
      if (Math.abs(el.scrollLeft - target) > 4) el.scrollLeft = target;
    });
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
