"use client";

import { useEffect, useRef, type CSSProperties } from "react";

/**
 * Side view of the Bitlane box truck, cab facing right, built to echo the real
 * wrap: a white cab, a near black cargo box carrying a scatter of BITLANE tags,
 * and a cream logo panel in the centre. Fully vector, so it has a clean
 * transparent background and the wheels can spin as it drives.
 */
function TruckSVG() {
  // Scattered BITLANE tag wrap on the cargo box.
  const tags = [
    { x: 44, y: 52, r: -18, s: 11, c: "#F5F1E8", o: 0.9 },
    { x: 120, y: 46, r: 8, s: 12, c: "#C9A961", o: 0.85 },
    { x: 210, y: 50, r: -6, s: 11, c: "#F5F1E8", o: 0.8 },
    { x: 60, y: 92, r: 22, s: 10, c: "#C77B3F", o: 0.8 },
    { x: 240, y: 96, r: -24, s: 11, c: "#C9A961", o: 0.85 },
    { x: 40, y: 132, r: -10, s: 11, c: "#F5F1E8", o: 0.85 },
    { x: 130, y: 150, r: 14, s: 12, c: "#F5F1E8", o: 0.9 },
    { x: 232, y: 146, r: -16, s: 10, c: "#C9A961", o: 0.8 },
    { x: 92, y: 128, r: 30, s: 9, c: "#E63946", o: 0.85 },
    { x: 196, y: 120, r: 18, s: 9, c: "#C77B3F", o: 0.8 },
  ];

  return (
    <svg viewBox="0 0 480 240" className="h-full w-full" role="img" aria-label="Bitlane moving truck">
      <defs>
        <linearGradient id="tk-cab" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#c8ccd2" />
        </linearGradient>
        <linearGradient id="tk-box" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#141418" />
          <stop offset="1" stopColor="#050506" />
        </linearGradient>
        <clipPath id="tk-boxclip">
          <rect x="20" y="30" width="278" height="146" rx="8" />
        </clipPath>
      </defs>

      {/* ground shadow */}
      <ellipse cx="238" cy="214" rx="210" ry="10" fill="#000" opacity="0.45" />

      {/* flatbed / chassis */}
      <rect x="20" y="176" width="360" height="16" rx="3" fill="#0b0b0e" />
      <rect x="292" y="150" width="18" height="30" fill="#0b0b0e" />

      {/* cargo box */}
      <g clipPath="url(#tk-boxclip)">
        <rect x="20" y="30" width="278" height="146" fill="url(#tk-box)" />
        {tags.map((t, i) => (
          <text
            key={i}
            x={t.x}
            y={t.y}
            transform={`rotate(${t.r} ${t.x} ${t.y})`}
            fontFamily="var(--font-bricolage), system-ui, sans-serif"
            fontSize={t.s}
            fontWeight="800"
            fontStyle="italic"
            letterSpacing="0.5"
            fill={t.c}
            opacity={t.o}
          >
            BITLANE
          </text>
        ))}
        {/* cream logo panel */}
        <g>
          <rect x="86" y="66" width="150" height="78" rx="9" fill="#F5F1E8" />
          <text x="161" y="102" textAnchor="middle" fontFamily="var(--font-bricolage), system-ui, sans-serif" fontSize="27" fontWeight="800" letterSpacing="1" fill="#0b0b0e">
            BITLANE
          </text>
          <rect x="120" y="110" width="41" height="5" rx="2.5" fill="#E63946" />
          <rect x="161" y="110" width="41" height="5" rx="2.5" fill="#C9A961" />
          <text x="161" y="127" textAnchor="middle" fontFamily="var(--font-bricolage), system-ui, sans-serif" fontSize="7.5" fontWeight="700" letterSpacing="1.2" fill="#0b0b0e">
            MOVING SERVICES &amp; LOGISTICS
          </text>
          <text x="161" y="138" textAnchor="middle" fontFamily="var(--font-bricolage), system-ui, sans-serif" fontSize="7" fontWeight="700" letterSpacing="0.6" fill="#8B1E2D">
            (613) 770-1638 | BITLANE.COM
          </text>
        </g>
      </g>
      <rect x="20" y="30" width="278" height="146" rx="8" fill="none" stroke="#2b2b31" strokeWidth="2" />

      {/* cab (facing right) */}
      <path d="M300 96 h58 l22 30 v50 h-80 z" fill="url(#tk-cab)" stroke="#b7bcc4" strokeWidth="2" />
      {/* windscreen + door window */}
      <path d="M360 100 h6 l18 24 h-24 z" fill="#9fb8d4" stroke="#7f93ad" strokeWidth="1.5" />
      <rect x="306" y="104" width="46" height="24" rx="3" fill="#9fb8d4" stroke="#7f93ad" strokeWidth="1.5" />
      <rect x="300" y="150" width="80" height="8" fill="#0b0b0e" opacity="0.25" />
      {/* headlight + bumper */}
      <rect x="376" y="150" width="8" height="14" rx="2" fill="#ffe08a" />
      <rect x="372" y="176" width="14" height="10" rx="2" fill="#0b0b0e" />
      {/* small Bitlane badge on cab door */}
      <rect x="312" y="132" width="34" height="16" rx="2" fill="#F5F1E8" />
      <text x="329" y="143" textAnchor="middle" fontFamily="var(--font-bricolage), system-ui, sans-serif" fontSize="8" fontWeight="800" fill="#0b0b0e">
        BITLANE
      </text>

      {/* license plate */}
      <rect x="150" y="182" width="54" height="15" rx="2" fill="#1A2B4A" />
      <text x="177" y="193" textAnchor="middle" fontFamily="var(--font-bricolage), system-ui, sans-serif" fontSize="9" fontWeight="800" letterSpacing="1" fill="#F5F1E8">
        BITLANE
      </text>

      {/* wheels: rear (under box) + front (under cab); hubs spin with travel */}
      {[110, 340].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="188" r="28" fill="#0b0b0e" />
          <circle cx={cx} cy="188" r="27" fill="none" stroke="#26262b" strokeWidth="2" />
          <g className="wheel" style={{ transformBox: "fill-box", transformOrigin: "center" } as CSSProperties}>
            <circle cx={cx} cy="188" r="13" fill="#3a3a42" />
            <circle cx={cx} cy="188" r="4" fill="#C9A961" />
            {[0, 60, 120, 180, 240, 300].map((a) => (
              <rect
                key={a}
                x={cx - 1.4}
                y={178}
                width="2.8"
                height="10"
                rx="1.4"
                fill="#1c1c21"
                transform={`rotate(${a} ${cx} 188)`}
              />
            ))}
          </g>
        </g>
      ))}
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
      const truckX = -6 + p * 112; // head stays visible at rest, exits right
      const wipe = clamp(truckX + 4, 0, 100);
      stage.style.setProperty("--truck-x", `${truckX}%`);
      stage.style.setProperty("--wipe", `${wipe}%`);
      stage.style.setProperty("--wheel-rot", `${p * 1440}deg`);
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
    <div ref={outerRef} className="relative h-[240vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div
          ref={stageRef}
          className="relative mx-auto w-full max-w-6xl px-[clamp(20px,5vw,88px)]"
          style={{ "--wipe": "0%", "--truck-x": "-6%", "--wheel-rot": "0deg" } as CSSProperties}
        >
          <h2
            className="ml-auto max-w-full text-right text-[clamp(1.3rem,3vw,2.6rem)] font-extrabold uppercase leading-[1.1] tracking-tight text-paper sm:whitespace-nowrap"
            style={{ clipPath: "inset(0 0 0 var(--wipe))" }}
          >
            You&apos;ll notice our truck from miles away!
          </h2>

          <div
            className="pointer-events-none absolute top-1/2 h-[clamp(130px,22vw,260px)] w-[clamp(260px,44vw,520px)] -translate-x-1/2 -translate-y-1/2"
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
