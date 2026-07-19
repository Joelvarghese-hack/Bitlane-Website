"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { asset } from "@/lib/asset";

/**
 * Scroll-tied truck reveal — NO pinning, so the page never stops or pauses.
 *
 * The truck sits in a normal in-flow band. Its horizontal position is a pure
 * function of how far the band has travelled through the viewport, so it moves
 * exactly with the user's scroll (fast scroll = fast truck, slow = slow) and
 * fluidly reverses on the way back up. One image (facing right): scrolling
 * DOWN drives it left → right and wipes the headline; scrolling UP runs it
 * back the same way it came, same facing.
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
    const X0 = -55; // fully off the left — headline stays readable
    const X1 = 155; // fully off the right

    const apply = () => {
      const rect = outer.getBoundingClientRect();
      const vh = window.innerHeight;
      // Truck holds off-left while the band sits centred (readable), then sweeps
      // quickly left -> right as it scrolls up past centre; reverses on scroll up.
      const q = clamp((0.28 * vh - rect.top) / (0.6 * vh), 0, 1);
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
      className="relative flex min-h-[44vh] items-center overflow-hidden py-6 md:min-h-[56vh] md:py-10"
    >
      <div
        ref={stageRef}
        className="relative mx-auto w-full max-w-6xl px-[clamp(20px,5vw,88px)]"
        style={{ "--wipe": "0%", "--truck-x": "-30%" } as CSSProperties}
      >
        <h2
          className="ml-auto max-w-full text-right text-[clamp(1rem,4.2vw,1.35rem)] font-extrabold uppercase leading-[1.12] tracking-tight text-paper sm:text-center sm:text-[clamp(1.4rem,3vw,2.2rem)]"
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
    </section>
  );
}
