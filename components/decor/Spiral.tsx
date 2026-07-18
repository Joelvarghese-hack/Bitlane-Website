/**
 * Decorative spiral ribbon — brand-coloured, low-opacity, textless. Sits behind
 * content and drifts slowly in and out at the edges (CSS-only, so it never
 * touches the scroll). Purely atmospheric.
 */
export default function Spiral({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <div className={`spiral ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 420"
        fill="none"
        preserveAspectRatio="none"
        style={flip ? { transform: "scaleX(-1)" } : undefined}
      >
        <path
          d="M-80 300 C 180 110, 380 110, 560 235 S 940 380, 1280 130"
          stroke="var(--brand-orange)"
          strokeWidth="54"
          strokeLinecap="round"
          opacity="0.13"
        />
        <path
          d="M-80 330 C 210 150, 430 150, 610 275 S 980 410, 1280 175"
          stroke="#D62D1E"
          strokeWidth="22"
          strokeLinecap="round"
          opacity="0.12"
        />
        <path
          d="M-80 268 C 160 90, 360 90, 540 205 S 900 350, 1280 95"
          stroke="var(--brand-orange)"
          strokeWidth="10"
          strokeLinecap="round"
          opacity="0.10"
        />
      </svg>
    </div>
  );
}
