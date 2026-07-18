"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import Spiral from "@/components/decor/Spiral";

/**
 * Pain-point section that sits right after the hero. The tiles do not animate on
 * their own — they drift purely with the scroll (parallax), each at its own
 * speed, so they float up as the reader moves down the page. Uses the site's own
 * colours (no white-to-black transition), and leads into the mission section.
 */
const PAINS = [
  "Quotes that balloon on moving day",
  "Movers who show up late, or never",
  "Scratched walls and broken furniture",
  "Hidden fees buried in the fine print",
  "Getting ghosted the moment you have a question",
  "Boxes tossed around with zero care",
];

export default function ProblemStatement() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onScroll = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height)));
      el.style.setProperty("--p", String(p));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-[clamp(22px,6vw,120px)] py-20 md:py-28"
      style={{ "--p": 0.5 } as CSSProperties}
    >
      <Spiral className="opacity-70" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <span className="inline-block rounded-full bg-velocity-red/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-velocity-red">
          The problem
        </span>
        <h2 className="mt-6 text-[clamp(1.9rem,4.6vw,3.3rem)] font-extrabold leading-[1.04] tracking-tight text-paper">
          Moving day shouldn&apos;t be a mess.
        </h2>
        <p className="mt-5 text-base leading-relaxed text-paper/60 md:text-lg">
          Most moves go sideways for the same handful of reasons. Any of these
          sound painfully familiar?
        </p>
      </div>

      <div className="relative z-10 mx-auto mt-14 flex max-w-4xl flex-wrap justify-center gap-4">
        {PAINS.map((pain, i) => (
          <div
            key={pain}
            className="pain-tile flex items-center gap-3 rounded-2xl border border-paper/10 bg-surface/80 px-5 py-4 text-left shadow-panel backdrop-blur-sm"
            style={{ "--sp": 26 + i * 16 } as CSSProperties}
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-velocity-red text-paper">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
              </svg>
            </span>
            <span className="text-sm font-semibold text-paper/85">{pain}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
