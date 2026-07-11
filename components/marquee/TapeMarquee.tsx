/**
 * Angled "tape" strip with bold repeating text that scrolls sideways at a
 * medium pace. Place between sections and alternate `slope` each time so the
 * tilt flips (down, then up, then down). Decorative, so hidden from screen
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

  // Two identical groups so the -50% scroll loops seamlessly.
  const group = (
    <div className="tape-group">
      {Array.from({ length: 8 }).map((_, i) => (
        <span key={i} className="tape-item">
          BITLANE MOVING
          <span className="tape-dot" aria-hidden="true" />
          (613) 770-1638
          <span className="tape-dot" aria-hidden="true" />
        </span>
      ))}
    </div>
  );

  return (
    <div className="tape-wrap" aria-hidden="true">
      <div className="tape-strip" style={{ transform: `rotate(${rotate})`, background: bg, color: fg }}>
        <div className="tape-track">
          {group}
          {group}
        </div>
      </div>
    </div>
  );
}
