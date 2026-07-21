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
    const max = el.scrollWidth - el.clientWidth;
    const target = Math.max(0, Math.min(max, el.scrollLeft + dir * amount));
    // Manual eased tween on a timer (works everywhere; no reliance on native
    // smooth-scroll or requestAnimationFrame, which some engines throttle).
    const from = el.scrollLeft;
    const dist = target - from;
    const steps = 16;
    let i = 0;
    const timer = setInterval(() => {
      i += 1;
      const t = i / steps;
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      el.scrollLeft = from + dist * eased;
      if (i >= steps) {
        el.scrollLeft = target;
        clearInterval(timer);
      }
    }, 16);
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
