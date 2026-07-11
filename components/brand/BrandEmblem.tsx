/**
 * Bitlane circular truck emblem, rebuilt as scalable SVG so it renders crisply
 * on the black theme with no external asset. Captures the provided logo: a
 * ringed badge with a semi truck, the BITLANE wordmark, a red/gold/amber
 * stripe, and the "Stress Free Moving Experience" tagline.
 *
 * Swap for the real logo file later by replacing this component's <svg> with an
 * <img src="/bitlane-logo.png" /> if desired.
 */
export default function BrandEmblem({
  size = 132,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Bitlane, stress free moving experience"
    >
      {/* outer ring */}
      <circle cx="100" cy="94" r="80" fill="#0B0B0E" />
      <circle cx="100" cy="94" r="80" fill="none" stroke="#E63946" strokeWidth="3" />
      <circle cx="100" cy="94" r="73" fill="none" stroke="#E63946" strokeWidth="1" opacity="0.35" />

      {/* semi truck, front three-quarter silhouette */}
      <g strokeLinejoin="round" strokeLinecap="round">
        {/* trailer box */}
        <rect x="36" y="52" width="70" height="52" rx="3" fill="#EFE9DC" stroke="#8B1E2D" strokeWidth="2" />
        <line x1="52" y1="52" x2="52" y2="104" stroke="#C9A961" strokeWidth="1.4" opacity="0.6" />
        <line x1="70" y1="52" x2="70" y2="104" stroke="#C9A961" strokeWidth="1.4" opacity="0.6" />
        <line x1="88" y1="52" x2="88" y2="104" stroke="#C9A961" strokeWidth="1.4" opacity="0.6" />

        {/* cab */}
        <path
          d="M106 66 h24 l18 20 v18 h-42 z"
          fill="#E63946"
          stroke="#8B1E2D"
          strokeWidth="2"
        />
        {/* windshield */}
        <path d="M128 71 h9 l11 13 h-20 z" fill="#EFE9DC" />
        {/* grille / bumper */}
        <rect x="145" y="98" width="6" height="8" rx="1.5" fill="#C9A961" />

        {/* wheels */}
        <circle cx="58" cy="110" r="9" fill="#0B0B0E" stroke="#EFE9DC" strokeWidth="2.5" />
        <circle cx="58" cy="110" r="3" fill="#C9A961" />
        <circle cx="86" cy="110" r="9" fill="#0B0B0E" stroke="#EFE9DC" strokeWidth="2.5" />
        <circle cx="86" cy="110" r="3" fill="#C9A961" />
        <circle cx="130" cy="110" r="9" fill="#0B0B0E" stroke="#EFE9DC" strokeWidth="2.5" />
        <circle cx="130" cy="110" r="3" fill="#C9A961" />
      </g>

      {/* wordmark */}
      <text
        x="100"
        y="140"
        textAnchor="middle"
        fontFamily="var(--font-bricolage), system-ui, sans-serif"
        fontSize="26"
        fontWeight="800"
        letterSpacing="5"
        fill="#F5F1E8"
      >
        BITLANE
      </text>

      {/* tri-stripe */}
      <rect x="52" y="150" width="44" height="5" rx="2.5" fill="#E63946" />
      <rect x="98" y="150" width="14" height="5" rx="2.5" fill="#C9A961" />
      <rect x="114" y="150" width="34" height="5" rx="2.5" fill="#F4A261" />

      {/* tagline */}
      <text
        x="100"
        y="172"
        textAnchor="middle"
        fontFamily="var(--font-bricolage), system-ui, sans-serif"
        fontSize="8.4"
        fontWeight="600"
        letterSpacing="2.4"
        fill="#F5F1E8"
        opacity="0.55"
      >
        STRESS FREE MOVING EXPERIENCE
      </text>
    </svg>
  );
}
