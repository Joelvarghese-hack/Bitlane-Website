"use client";

import { useEffect, useRef, type CSSProperties } from "react";

/** Detailed side-view Bitlane box truck, wrapped in company branding, facing right. */
function TruckSVG() {
  return (
    <svg viewBox="0 0 420 230" className="h-full w-full" role="img" aria-label="Bitlane moving truck">
      <defs>
        <linearGradient id="tk-box" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f4616b" />
          <stop offset="0.5" stopColor="#E63946" />
          <stop offset="1" stopColor="#c11f2c" />
        </linearGradient>
        <linearGradient id="tk-cab" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f4616b" />
          <stop offset="1" stopColor="#c11f2c" />
        </linearGradient>
      </defs>

      <ellipse cx="212" cy="210" rx="196" ry="9" fill="#000" opacity="0.4" />
      {/* chassis */}
      <rect x="26" y="172" width="352" height="13" rx="3" fill="#17171b" />

      {/* box trailer */}
      <rect x="18" y="34" width="258" height="142" rx="6" fill="url(#tk-box)" stroke="#8B1E2D" strokeWidth="3" />
      <rect x="24" y="40" width="246" height="6" rx="3" fill="#ffffff" opacity="0.22" />
      <g stroke="#8B1E2D" strokeWidth="1.4" opacity="0.35">
        <line x1="82" y1="38" x2="82" y2="172" />
        <line x1="150" y1="38" x2="150" y2="172" />
        <line x1="216" y1="38" x2="216" y2="172" />
      </g>
      <rect x="24" y="94" width="6" height="28" rx="2" fill="#8B1E2D" />

      {/* branding wrap */}
      <text x="152" y="110" textAnchor="middle" fontFamily="var(--font-bricolage), system-ui, sans-serif" fontSize="42" fontWeight="800" fontStyle="italic" letterSpacing="1.5" fill="#F5F1E8">
        BITLANE
      </text>
      <text x="152" y="136" textAnchor="middle" fontFamily="var(--font-bricolage), system-ui, sans-serif" fontSize="14" fontWeight="700" letterSpacing="5" fill="#F5F1E8" opacity="0.85">
        MOVING COMPANY
      </text>
      <rect x="70" y="150" width="120" height="5" rx="2.5" fill="#C9A961" />
      <rect x="192" y="150" width="20" height="5" rx="2.5" fill="#F4A261" />

      {/* cab */}
      <path d="M276 68 h44 l42 42 v66 h-86 z" fill="url(#tk-cab)" stroke="#8B1E2D" strokeWidth="3" />
      <path d="M324 76 h13 l31 31 h-44 z" fill="#bcd2e8" stroke="#8B1E2D" strokeWidth="2" />
      <rect x="284" y="86" width="30" height="26" rx="3" fill="#bcd2e8" stroke="#8B1E2D" strokeWidth="2" />
      <line x1="300" y1="112" x2="300" y2="174" stroke="#8B1E2D" strokeWidth="2" opacity="0.5" />
      <rect x="270" y="92" width="6" height="16" rx="2" fill="#17171b" />
      <rect x="356" y="150" width="10" height="20" rx="2" fill="#C9A961" />
      <rect x="352" y="176" width="22" height="10" rx="2" fill="#0b0b0e" />
      <circle cx="361" cy="150" r="4" fill="#fff" opacity="0.9" />

      {/* wheels */}
      {[70, 120, 320].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="186" r="25" fill="#0b0b0e" />
          <circle cx={cx} cy="186" r="12" fill="#37373d" />
          <circle cx={cx} cy="186" r="5" fill="#C9A961" />
        </g>
      ))}
      <rect x="40" y="182" width="8" height="24" fill="#0b0b0e" />
    </svg>
  );
}

export default function TruckReveal() {
  const outerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const stage = stageRef.current;
    if (!outer || !stage) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));
    const onScroll = () => {
      const rect = outer.getBoundingClientRect();
      const vh = window.innerHeight;
      const range = rect.height - vh;
      const p = range > 0 ? clamp(-rect.top / range, 0, 1) : 0;
      const truckX = -8 + p * 116; // half out at rest, exits right
      const wipe = clamp(truckX + 2, 0, 100);
      stage.style.setProperty("--truck-x", `${truckX}%`);
      stage.style.setProperty("--wipe", `${wipe}%`);
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
    <div ref={outerRef} className="relative h-[220vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div
          ref={stageRef}
          className="relative mx-auto w-full max-w-6xl px-[clamp(20px,5vw,88px)]"
          style={{ "--wipe": "0%", "--truck-x": "-8%" } as CSSProperties}
        >
          <h2
            className="ml-auto max-w-[75%] text-right text-[clamp(2rem,6vw,5rem)] font-extrabold uppercase leading-[0.98] tracking-tight text-paper"
            style={{ clipPath: "inset(0 0 0 var(--wipe))" }}
          >
            You&apos;ll notice our truck from miles away!
          </h2>

          <div
            className="pointer-events-none absolute top-1/2 h-[clamp(120px,20vw,240px)] w-[clamp(220px,36vw,440px)] -translate-x-1/2 -translate-y-1/2"
            style={{ left: "var(--truck-x)" }}
            aria-hidden="true"
          >
            <TruckSVG />
          </div>
        </div>
      </div>
    </div>
  );
}
