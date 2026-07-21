import { asset } from "@/lib/asset";

/**
 * Angled marquee of slanted tape boxes: white boxes carrying the Bitlane logo
 * (wordmark or, when `logo="icon"`, just the truck mark), alternating with
 * orange boxes carrying the phone number in white. Boxes butt together with no
 * gaps. The logo image is counter-skewed so it reads upright and neat inside
 * the slanted tape. Scroll direction follows the slope; same speed everywhere.
 */
export default function TapeMarquee({
  slope = "down",
  logo = "wordmark",
}: {
  slope?: "up" | "down";
  logo?: "wordmark" | "icon";
}) {
  const rotate = slope === "down" ? "-2.4deg" : "2.4deg";
  const direction = slope === "up" ? "reverse" : "normal";
  const src = logo === "icon" ? asset("/images/logo-icon.png") : asset("/images/logo-tape.png");

  const group = (
    <div className="tape-group">
      {Array.from({ length: 6 }).map((_, i) => (
        <span key={i} className="tape-item">
          <span className="tape-box tape-box--brand">
            <img
              src={src}
              alt=""
              aria-hidden="true"
              width={logo === "icon" ? 40 : 150}
              height={40}
              draggable={false}
              className={`tape-logo ${logo === "icon" ? "tape-logo--icon" : ""}`}
            />
          </span>
          <span className="tape-box tape-box--phone">(613) 770-1638</span>
        </span>
      ))}
    </div>
  );

  const clear = { clear: "both" as const, display: "block", width: "100%", height: "1px" };

  return (
    <>
      {/* structural clear so neighbouring desktop containers can't collapse in */}
      <div aria-hidden="true" style={clear} />
      <div className="tape-wrap" aria-hidden="true">
        <div className="tape-strip" style={{ transform: `rotate(${rotate})` }}>
          <div className="tape-track" style={{ animationDirection: direction }}>
            {group}
            {group}
          </div>
        </div>
      </div>
      <div aria-hidden="true" style={clear} />
    </>
  );
}
