import { asset } from "@/lib/asset";

/**
 * Angled marquee of slanted tape boxes: white boxes carrying the Bitlane logo
 * (black wordmark, or the truck icon when `logo="icon"`) alternating with orange
 * boxes carrying the phone number in white. A "down" slope tilts and flows one
 * way; an "up" slope tilts and flows the other. Full-bleed and on top of content.
 */
export default function TapeMarquee({
  slope = "down",
  logo = "wordmark",
}: {
  slope?: "up" | "down";
  logo?: "wordmark" | "icon";
}) {
  const rotate = slope === "down" ? "-4deg" : "4deg";
  const direction = slope === "up" ? "reverse" : "normal";
  const isIcon = logo === "icon";
  const src = isIcon ? asset("/images/logo-icon2.webp") : asset("/images/logo-white.webp");

  const group = (
    <div className="tape-group">
      {Array.from({ length: 6 }).map((_, i) => (
        <span key={i} className="tape-item">
          <span className="tape-box tape-box--brand">
            <img
              src={src}
              alt=""
              aria-hidden="true"
              width={isIcon ? 72 : 258}
              height={40}
              draggable={false}
              className={`tape-logo ${isIcon ? "tape-logo--icon" : ""}`}
            />
          </span>
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
