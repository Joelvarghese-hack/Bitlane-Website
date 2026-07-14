/**
 * Angled marquee made of slanted tape boxes: white boxes with the brand in red,
 * red boxes with the phone number in white, same size. The scroll direction
 * follows the slope (down = right to left, up = left to right), same speed for
 * every marquee. Decorative and non-interactive: no hover pause, no clicks.
 */
export default function TapeMarquee({ slope = "down" }: { slope?: "up" | "down" }) {
  const rotate = slope === "down" ? "-2.4deg" : "2.4deg";
  const direction = slope === "up" ? "reverse" : "normal";

  const group = (
    <div className="tape-group">
      {Array.from({ length: 6 }).map((_, i) => (
        <span key={i} className="tape-item">
          <span className="tape-box tape-box--brand">BITLANE</span>
          <span className="tape-box tape-box--phone">(613) 770-1638</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="tape-wrap" aria-hidden="true">
      <div className="tape-strip" style={{ transform: `rotate(${rotate})` }}>
        <div className="tape-track" style={{ animationDirection: direction }}>
          {group}
          {group}
        </div>
      </div>
    </div>
  );
}
