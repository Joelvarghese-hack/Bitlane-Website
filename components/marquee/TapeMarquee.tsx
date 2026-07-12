/**
 * Angled "tape" strip with bold repeating text that scrolls sideways. The scroll
 * direction follows the tape's slope: a down slope scrolls right to left, an up
 * slope scrolls left to right, at the same speed. Decorative; hidden from screen
 * readers. Motion pauses under prefers-reduced-motion (see globals.css).
 */
export default function TapeMarquee({
  slope = "down",
  tone = "red",
}: {
  slope?: "up" | "down";
  tone?: "red" | "amber";
}) {
  const rotate = slope === "down" ? "-2.4deg" : "2.4deg";
  const bg = tone === "red" ? "var(--velocity-red)" : "var(--amber-pulse)";
  const fg = tone === "red" ? "var(--paper)" : "#1a1205";
  const direction = slope === "up" ? "reverse" : "normal";

  const group = (
    <div className="tape-group">
      {Array.from({ length: 8 }).map((_, i) => (
        <span key={i} className="tape-item">
          <span className="tape-brand">BITLANE MOVING</span>
          <span className="tape-phone">(613) 770-1638</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="tape-wrap" aria-hidden="true">
      <div className="tape-strip" style={{ transform: `rotate(${rotate})`, background: bg, color: fg }}>
        <div className="tape-track" style={{ animationDirection: direction }}>
          {group}
          {group}
        </div>
      </div>
    </div>
  );
}
