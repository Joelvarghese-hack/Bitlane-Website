import type { Testimonial } from "@/components/testimonials/Testimonials";

const AVATAR_TINTS = [
  "bg-velocity-red/20 text-velocity-red",
  "bg-amber-pulse/20 text-amber-pulse",
  "bg-navy/40 text-[#9db8de]",
  "bg-gold/20 text-gold",
];

function Stars() {
  return (
    <span role="img" className="flex items-center gap-0.5" aria-label="Rated 5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 20 20" aria-hidden="true">
          <path
            d="M10 1.6l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.7l-4.95 2.6.95-5.5-4-3.9 5.53-.8z"
            fill="#FE4436"
          />
        </svg>
      ))}
    </span>
  );
}

function SourceGlyph({ source }: { source: "Yelp" | "Google" }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold text-paper/45">
      {source === "Yelp" ? (
        <svg width="13" height="13" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#D32323" d="M12.5 2.6c1 .3 1.4.9 1.4 2 0 .6-.1 4.4-.2 5.5-.1 1-.4 1.4-1 1.5-.5.1-.9-.1-1.5-.9L8.3 6.6c-.5-.7-.6-1.2-.3-1.7.4-.8 3.4-2 4.5-2.3zM7.7 11.8c.7.2 1 .7 1 1.4 0 .6-.3 1-1 1.3l-2.9 1c-.8.2-1.3.1-1.6-.4-.5-.9-.6-3.3-.1-4.1.3-.5.8-.6 1.6-.4zm3.6 3.2c.6-.2 1.1 0 1.4.6.2.4.2.9-.1 3.6-.1 1-.3 1.5-.8 1.7-.9.3-3.3-.4-3.9-1-.4-.4-.4-.9 0-1.5l1.9-2.6c.5-.6.9-.9 1.5-.8zm4.6.4c-.7-.5-.7-1.2-.1-1.9l1.9-2c.5-.6 1-.7 1.5-.4.8.5 1.7 2.7 1.6 3.6-.1.6-.5.9-1.3.9l-2.6.1c-.5 0-.8-.1-1-.3z" />
        </svg>
      ) : (
        <svg width="13" height="13" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#4285F4" d="M23 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.16a5.27 5.27 0 0 1-2.28 3.46v2.88h3.68C21.7 18.62 23 15.72 23 12.27z" />
          <path fill="#34A853" d="M12 24c3.08 0 5.66-1.02 7.55-2.76l-3.68-2.88c-1.02.68-2.33 1.09-3.87 1.09-2.97 0-5.49-2-6.39-4.7H1.9v2.95A11.99 11.99 0 0 0 12 24z" />
          <path fill="#FBBC05" d="M5.61 14.75A7.2 7.2 0 0 1 5.23 12c0-.95.16-1.88.38-2.75V6.3H1.9A11.99 11.99 0 0 0 .62 12c0 1.94.46 3.77 1.28 5.7z" />
          <path fill="#EA4335" d="M12 4.75c1.68 0 3.18.58 4.36 1.7l3.27-3.27C17.66 1.2 15.08 0 12 0 7.32 0 3.28 2.69 1.9 6.3l3.71 2.95c.9-2.7 3.42-4.5 6.39-4.5z" />
        </svg>
      )}
      via {source}
    </span>
  );
}

export default function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  const tint = AVATAR_TINTS[index % AVATAR_TINTS.length];
  const initial = testimonial.name.charAt(0);

  return (
    <figure className="flex h-full flex-col rounded-4xl border border-paper/10 bg-surface p-7 transition-colors duration-300 hover:border-paper/20">
      <div className="flex items-center justify-between">
        <Stars />
        <SourceGlyph source={testimonial.source} />
      </div>
      <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-paper/75">
        {testimonial.quote}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-paper/10 pt-5">
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-base font-bold ${tint}`}
          aria-hidden="true"
        >
          {initial}
        </span>
        <span className="leading-tight">
          <span className="block text-sm font-bold text-paper">{testimonial.name}</span>
          <span className="block text-xs text-paper/50">{testimonial.label}</span>
        </span>
      </figcaption>
    </figure>
  );
}
