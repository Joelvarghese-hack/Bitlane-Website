"use client";

import { useEffect, useRef, type CSSProperties } from "react";

/** Side-view Bitlane box truck, driving to the right. */
function TruckSVG() {
  return (
    <svg viewBox="0 0 240 130" className="h-full w-full" role="img" aria-label="Bitlane moving truck">
      {/* ground shadow */}
      <ellipse cx="120" cy="120" rx="104" ry="7" fill="#000" opacity="0.45" />

      {/* cargo box */}
      <rect x="6" y="20" width="150" height="78" rx="5" fill="#E63946" stroke="#8B1E2D" strokeWidth="3" />
      {/* wordmark on the box */}
      <text x="81" y="60" textAnchor="middle" fontFamily="var(--font-bricolage), system-ui, sans-serif" fontSize="26" fontWeight="800" letterSpacing="2" fill="#F5F1E8">
        BITLANE
      </text>
      <rect x="34" y="70" width="60" height="4" rx="2" fill="#F5F1E8" opacity="0.9" />
      <rect x="98" y="70" width="14" height="4" rx="2" fill="#C9A961" />

      {/* cab */}
      <path d="M156 40 h26 l24 26 v32 h-50 z" fill="#EFE9DC" stroke="#8B1E2D" strokeWidth="3" />
      {/* windshield */}
      <path d="M184 46 h9 l16 18 h-25 z" fill="#1A2B4A" />
      {/* headlight + bumper */}
      <rect x="203" y="86" width="6" height="9" rx="1.5" fill="#C9A961" />
      <rect x="150" y="92" width="60" height="6" fill="#0B0B0E" />

      {/* wheels */}
      {[46, 116, 184].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="100" r="15" fill="#0B0B0E" stroke="#3a3a40" strokeWidth="3" />
          <circle cx={cx} cy="100" r="5" fill="#C9A961" />
        </g>
      ))}
    </svg>
  );
}

export default function TruckReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh;
      const p = clamp((vh - rect.top) / total, 0, 1);
      const truckX = -14 + p * 128; // percent, enters left, exits right
      const wipe = clamp(truckX + 4, 0, 100);
      el.style.setProperty("--truck-x", `${truckX}%`);
      el.style.setProperty("--wipe", `${wipe}%`);
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
    <div
      ref={ref}
      className="relative flex min-h-[46vh] items-center overflow-hidden px-[clamp(20px,5vw,88px)] py-24"
      style={{ "--wipe": "0%", "--truck-x": "-14%" } as CSSProperties}
    >
      <div className="relative mx-auto w-full max-w-6xl">
        <h2
          className="text-[clamp(2rem,6vw,5.2rem)] font-extrabold uppercase leading-[0.98] tracking-tight text-paper"
          style={{ clipPath: "inset(0 0 0 var(--wipe))" }}
        >
          You&apos;ll notice our truck from miles away!
        </h2>

        {/* the truck rides along the same line, wiping the text as it passes */}
        <div
          className="pointer-events-none absolute top-1/2 h-[clamp(90px,13vw,150px)] w-[clamp(160px,23vw,280px)] -translate-x-1/2 -translate-y-1/2"
          style={{ left: "var(--truck-x)" }}
          aria-hidden="true"
        >
          <TruckSVG />
        </div>
      </div>
    </div>
  );
}
