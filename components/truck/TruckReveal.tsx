"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { asset } from "@/lib/asset";

/**
 * Scroll-linked truck reveal built from the real Bitlane box-truck photo.
 *
 * The section is pinned while you scroll through it and a single progress value
 * p (0 → 1) drives it. At rest the truck sits at the left with just its nose
 * showing and the headline fully readable. Scrolling DOWN drives it left → right
 * and wipes the headline away behind it; scrolling UP runs the same motion in
 * reverse, bringing the truck back and the headline with it. One image, one
 * direction — no facing swap.
 */
export default function TruckReveal() {
  const outerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const sticky = stickyRef.current;
    const stage = stageRef.current;
    if (!outer || !sticky || !stage) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));
    const X0 = -30; // rest: truck at the left, nose just showing
    const X1 = 130; // end: truck driven fully to the right, nose off the edge

    const apply = () => {
      const rect = outer.getBoundingClientRect();
      // Scrub over the exact pin distance (section height minus the pinned band)
      // so the truck reaches the far side right as the section unpins.
      const range = rect.height - sticky.offsetHeight;
      const p = range > 0 ? clamp(-rect.top / range, 0, 1) : 0;
      const x = X0 + p * (X1 - X0); // truck centre, in % of the stage width
      stage.style.setProperty("--truck-x", `${x}%`);
      // Wipe boundary tracks the truck: text is hidden where it has passed.
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
    <section ref={outerRef} aria-label="You'll notice our truck from miles away" className="relative h-[150vh]">
      <div ref={stickyRef} className="sticky top-0 flex h-[74vh] items-center overflow-hidden md:h-[80vh]">
        <div
          ref={stageRef}
          className="relative mx-auto w-full max-w-6xl px-[clamp(20px,5vw,88px)]"
          style={{ "--wipe": "0%", "--truck-x": "-30%" } as CSSProperties}
        >
          <h2
            className="ml-auto max-w-full text-right text-[clamp(1.35rem,3vw,2.2rem)] font-extrabold uppercase leading-[1.12] tracking-tight text-paper sm:text-center"
            style={{ clipPath: "inset(0 0 0 var(--wipe))" }}
          >
            You&apos;ll notice our truck from miles away!
          </h2>

          <div
            className="pointer-events-none absolute top-1/2 z-10 w-[clamp(230px,56vw,660px)] -translate-x-1/2 -translate-y-1/2"
            style={{ left: "var(--truck-x)" }}
            aria-hidden="true"
          >
            <img
              src={asset("/images/truck-east.webp")}
              alt=""
              draggable={false}
              className="block h-auto w-full select-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
