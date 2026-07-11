/**
 * Google and Yelp rating badges, scored out of 5. Star rows and values are
 * easy to edit here. Review counts are intentionally left as soft labels rather
 * than invented numbers; swap `meta` for a real count when you have it.
 */

const RATINGS = [
  { platform: "Google", value: "4.9", meta: "Rated by our customers", glyph: "google" },
  { platform: "Yelp", value: "5.0", meta: "Verified reviews", glyph: "yelp" },
] as const;

function Stars({ value }: { value: number }) {
  return (
    <span className="flex items-center gap-0.5" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <svg key={i} width="15" height="15" viewBox="0 0 20 20">
            <defs>
              <linearGradient id={`star-${i}`}>
                <stop offset={`${fill * 100}%`} stopColor="#F4A261" />
                <stop offset={`${fill * 100}%`} stopColor="rgba(245,241,232,0.18)" />
              </linearGradient>
            </defs>
            <path
              d="M10 1.6l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.7l-4.95 2.6.95-5.5-4-3.9 5.53-.8z"
              fill={`url(#star-${i})`}
            />
          </svg>
        );
      })}
    </span>
  );
}

function Glyph({ type }: { type: "google" | "yelp" }) {
  if (type === "google") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#4285F4" d="M23 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.16a5.27 5.27 0 0 1-2.28 3.46v2.88h3.68C21.7 18.62 23 15.72 23 12.27z" />
        <path fill="#34A853" d="M12 24c3.08 0 5.66-1.02 7.55-2.76l-3.68-2.88c-1.02.68-2.33 1.09-3.87 1.09-2.97 0-5.49-2-6.39-4.7H1.9v2.95A11.99 11.99 0 0 0 12 24z" />
        <path fill="#FBBC05" d="M5.61 14.75A7.2 7.2 0 0 1 5.23 12c0-.95.16-1.88.38-2.75V6.3H1.9A11.99 11.99 0 0 0 .62 12c0 1.94.46 3.77 1.28 5.7z" />
        <path fill="#EA4335" d="M12 4.75c1.68 0 3.18.58 4.36 1.7l3.27-3.27C17.66 1.2 15.08 0 12 0 7.32 0 3.28 2.69 1.9 6.3l3.71 2.95c.9-2.7 3.42-4.5 6.39-4.5z" />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#D32323" d="M12.5 2.6c1 .3 1.4.9 1.4 2 0 .6-.1 4.4-.2 5.5-.1 1-.4 1.4-1 1.5-.5.1-.9-.1-1.5-.9L8.3 6.6c-.5-.7-.6-1.2-.3-1.7.4-.8 3.4-2 4.5-2.3zM7.7 11.8c.7.2 1 .7 1 1.4 0 .6-.3 1-1 1.3l-2.9 1c-.8.2-1.3.1-1.6-.4-.5-.9-.6-3.3-.1-4.1.3-.5.8-.6 1.6-.4zm3.6 3.2c.6-.2 1.1 0 1.4.6.2.4.2.9-.1 3.6-.1 1-.3 1.5-.8 1.7-.9.3-3.3-.4-3.9-1-.4-.4-.4-.9 0-1.5l1.9-2.6c.5-.6.9-.9 1.5-.8zm4.6.4c-.7-.5-.7-1.2-.1-1.9l1.9-2c.5-.6 1-.7 1.5-.4.8.5 1.7 2.7 1.6 3.6-.1.6-.5.9-1.3.9l-2.6.1c-.5 0-.8-.1-1-.3z" />
    </svg>
  );
}

export default function RatingBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {RATINGS.map((r) => (
        <div
          key={r.platform}
          className="flex items-center gap-3 rounded-2xl border border-paper/10 bg-surface/70 px-4 py-3 backdrop-blur-sm"
        >
          <Glyph type={r.glyph} />
          <div className="leading-tight">
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-extrabold text-paper">{r.value}</span>
              <span className="text-xs text-paper/45">/ 5</span>
            </div>
            <Stars value={Number(r.value)} />
          </div>
          <div className="ml-1 border-l border-paper/10 pl-3 leading-tight">
            <div className="text-sm font-bold text-paper">{r.platform}</div>
            <div className="text-[0.7rem] text-paper/50">{r.meta}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
