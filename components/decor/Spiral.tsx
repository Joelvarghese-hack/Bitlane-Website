"use client";

import { useEffect, useRef } from "react";

/**
 * Two spiral ribbon lines that DRAW themselves in once, when the section
 * scrolls into view (IntersectionObserver toggles a class; the stroke is
 * revealed via stroke-dashoffset). They cross/tangle near one edge and sweep
 * off the other, then stay put — no looping, no reversing. Orange + white only,
 * low-opacity, behind content, never touching contrast.
 */
export default function Spiral({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-drawn");
      return;
    }
    const check = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.82 && r.bottom > 0) {
        el.classList.add("is-drawn");
        window.removeEventListener("scroll", check);
        window.removeEventListener("resize", check);
      }
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  return (
    <div ref={ref} className={`spiral ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 520"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        style={flip ? { transform: "scaleX(-1)" } : undefined}
      >
        <path
          pathLength={1}
          className="spiral-line"
          d="M 150 -50 C 20 210, 120 360, 380 372 C 660 386, 920 300, 1330 384"
          stroke="var(--brand-orange)"
          strokeWidth="13"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          pathLength={1}
          className="spiral-line spiral-line--b"
          d="M -40 150 C 260 30, 250 -20, 470 140 C 720 320, 1000 300, 1330 196"
          stroke="var(--brand-white)"
          strokeWidth="9"
          strokeLinecap="round"
          opacity="0.4"
        />
      </svg>
    </div>
  );
}
