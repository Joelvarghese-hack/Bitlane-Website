"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { asset } from "@/lib/asset";

/**
 * Scroll-linked truck reveal built from the real Bitlane box-truck photos.
 *
 * The section is pinned while you scroll through it, and a single progress
 * value p (0 → 1) drives everything:
 *
 *  - Scrolling DOWN, the truck (facing right) drives left → right and wipes the
 *    headline away behind it. Stop scrolling and it holds; scroll back up before
 *    it has fully crossed and it simply retreats the way it came.
 *  - Once it has fully crossed and you scroll back UP, p runs in reverse: the
 *    truck now comes in from the right (facing left) and drives right → left,
 *    revealing the headline again as it passes.
 *
 * The truck always faces its direction of travel, so the two facings are just
 * cross-faded based on which way the scroll is going. Off-screen the swap is
 * invisible; on a mid-section reversal it reads as the truck turning around.
 */
export default function TruckReveal() {
  const outerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const eastRef = useRef<HTMLImageElement>(null);
  const westRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const stage = stageRef.current;
    const east = eastRef.current;
    const west = westRef.current;
    if (!outer || !stage || !east || !west) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));
    const X0 = -32; // rest: truck nosing in from the left, headline fully shown
    const X1 = 132; // end: truck fully off the right, headline fully covered
    let lastP = -1;
    let facing: "east" | "west" = "east";

    const apply = () => {
      const rect = outer.getBoundingClientRect();
      const range = rect.height - window.innerHeight;
      const p = range > 0 ? clamp(-rect.top / range, 0, 1) : 0;

      const x = X0 + p * (X1 - X0); // truck centre, in % of the stage width
      stage.style.setProperty("--truck-x", `${x}%`);
      // The wipe boundary tracks the truck: text is hidden on the side it has
      // already passed. The same formula covers (down) and reveals (up).
      stage.style.setProperty("--wipe", `${clamp(x, 0, 100)}%`);

      // Face the way we are moving; only swaps visibly on a mid-section reversal.
      if (lastP >= 0) {
        if (p > lastP + 0.0004) facing = "east";
        else if (p < lastP - 0.0004) facing = "west";
      }
      east.style.opacity = facing === "east" ? "1" : "0";
      west.style.opacity = facing === "west" ? "1" : "0";
      lastP = p;
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
    <section ref={outerRef} aria-label="You'll notice our truck from miles away" className="relative h-[240vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div
          ref={stageRef}
          className="relative mx-auto w-full max-w-6xl px-[clamp(20px,5vw,88px)]"
          style={{ "--wipe": "0%", "--truck-x": "-32%" } as CSSProperties}
        >
          <h2
            className="mx-auto max-w-full text-center text-[clamp(1.5rem,3.4vw,2.4rem)] font-extrabold uppercase leading-[1.12] tracking-tight text-paper sm:whitespace-nowrap"
            style={{ clipPath: "inset(0 0 0 var(--wipe))" }}
          >
            You&apos;ll notice our truck from miles away!
          </h2>

          <div
            className="pointer-events-none absolute top-1/2 z-10 w-[clamp(240px,60vw,760px)] -translate-x-1/2 -translate-y-1/2"
            style={{ left: "var(--truck-x)" }}
            aria-hidden="true"
          >
            <img
              ref={eastRef}
              src={asset("/images/truck-east.webp")}
              alt=""
              draggable={false}
              className="block h-auto w-full select-none transition-opacity duration-200 ease-out"
            />
            <img
              ref={westRef}
              src={asset("/images/truck-west.webp")}
              alt=""
              draggable={false}
              className="absolute inset-0 h-full w-full select-none object-contain opacity-0 transition-opacity duration-200 ease-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
