"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Slides its child in on a gentle arc (from the top-left or top-right,
 * alternating by index) once, when it scrolls into view. No reversal.
 */
export default function ArcItem({
  index,
  children,
}: {
  index: number;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-in");
      return;
    }
    const check = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.86 && r.bottom > 0) {
        el.classList.add("is-in");
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

  const left = index % 2 === 0;
  const style = {
    "--arc-x": left ? "-72px" : "72px",
    "--arc-r": left ? "-5deg" : "5deg",
  } as CSSProperties;

  return (
    <div ref={ref} className="arc-tile h-full" style={style}>
      {children}
    </div>
  );
}
