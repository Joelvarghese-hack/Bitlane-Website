"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { asset } from "@/lib/asset";

/**
 * Scroll-tied truck reveal. The truck (facing right) drives left -> right as you
 * scroll DOWN, wiping the headline away behind it; scroll UP and it reverses,
 * revealing the text again. No pin — it moves smoothly with the scroll. Desktop
 * keeps the headline on one line; mobile stacks it, right-aligned.
 */
export default function TruckReveal() {
  const outerRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const stage = stageRef.current;
    if (!outer || !stage) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));
    const X0 = -55; // rest: off the left
    const X1 = 155; // end: off the right

    const apply = () => {
      const rect = outer.getBoundingClientRect();
      const vh = window.innerHeight;
      const q = clamp((vh - rect.top) / (vh + rect.height), 0, 1);
      const x = X0 + q * (X1 - X0);
      stage.style.setProperty("--truck-x", `${x}%`);
      stage.style.setProperty("--wipe", `${clamp(x, 0, 100)}%`);
    };

    apply();
    window.addEventListener("scroll", apply, { passive: true });
    window.addEventListener("resize", apply);
    return () => {
      window.removeEventListener("scroll", apply);
      window.removeEventListener("resize", apply);
    };
  }, []);

  return (
    <section
      ref={outerRef}
      aria-label="You'll notice our truck from miles away"
      className="relative flex min-h-[34vh] items-center overflow-hidden py-4 md:min-h-[46vh] md:py-8"
    >
      <div
        ref={stageRef}
        className="relative mx-auto w-full max-w-6xl px-[clamp(20px,5vw,88px)]"
        style={{ "--truck-x": "-55%", "--wipe": "0%" } as CSSProperties}
      >
        <h2
          className="ml-auto max-w-full text-right text-[clamp(1.05rem,5vw,1.5rem)] font-extrabold uppercase leading-[1.15] tracking-tight text-paper sm:whitespace-nowrap sm:text-center sm:text-[clamp(1.3rem,2.7vw,2.1rem)]"
          style={{ clipPath: "inset(0 0 0 var(--wipe))" }}
        >
          You&apos;ll notice our truck from miles away!
        </h2>

        <div
          className="pointer-events-none absolute top-1/2 z-10 w-[clamp(190px,42vw,520px)] -translate-x-1/2 -translate-y-1/2"
          style={{ left: "var(--truck-x)" }}
          aria-hidden="true"
        >
          <img
            src={asset("/images/truck-solid.webp")}
            alt=""
            draggable={false}
            className="block h-auto w-full select-none"
          />
        </div>
      </div>
    </section>
  );
}
