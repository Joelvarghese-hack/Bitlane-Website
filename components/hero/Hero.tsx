import QuoteForm from "@/components/quote/QuoteForm";
import RatingBadges from "@/components/hero/RatingBadges";
import { asset } from "@/lib/asset";

export default function Hero() {
  return (
    <section className="hero-fade relative flex min-h-[88vh] items-center overflow-hidden">
      {/* Background video. Drop public/hero.mp4 in and it plays; until then the
          poster image shows. Loops silently behind the hero content. */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={asset("/images/hero-poster.jpg")}
        aria-hidden="true"
      >
        <source src={asset("/hero.mp4")} type="video/mp4" />
      </video>

      {/* Legibility overlay, weighted to the left where the text sits. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(5,5,6,0.94) 0%, rgba(5,5,6,0.82) 42%, rgba(5,5,6,0.55) 100%), linear-gradient(180deg, rgba(5,5,6,0.4) 0%, rgba(5,5,6,0) 30%, rgba(5,5,6,0.55) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-[clamp(20px,5vw,88px)] py-20 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left: headline + ratings + call */}
        <div>
          <h1 className="text-[clamp(3rem,6.6vw,6rem)] font-extrabold leading-[0.98] tracking-tight text-paper">
            The most trusted movers in{" "}
            <span className="text-velocity-red">Kingston</span> and across{" "}
            <span className="text-amber-pulse">Ontario</span>.
          </h1>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#quote"
              className="inline-flex items-center justify-center rounded-full bg-velocity-red px-8 py-4 text-base font-bold text-paper shadow-glow transition-all duration-200 hover:bg-crimson-shadow hover:-translate-y-0.5"
            >
              Get a free quote
            </a>
            <a
              href="tel:+16137701638"
              className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-7 py-4 text-base font-semibold text-paper transition-all duration-200 hover:border-amber-pulse hover:text-amber-pulse"
            >
              <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 2.5h2.6l1.2 3-1.6 1.2a9.6 9.6 0 0 0 4.1 4.1l1.2-1.6 3 1.2v2.6c0 .6-.5 1-1 1C7 14 2 9 2 3.5c0-.5.4-1 1-1Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
              </svg>
              (613) 770-1638
            </a>
          </div>

          <RatingBadges className="mt-9" />
        </div>

        {/* Right: quote form beside the headline */}
        <div className="rounded-4xl border border-paper/12 bg-surface-2/95 p-6 shadow-panel backdrop-blur-sm md:p-8">
          <h2 className="text-xl font-extrabold tracking-tight text-paper">
            Get a fast quote
          </h2>
          <p className="mt-1.5 text-sm text-paper/60">
            Tell us the basics and we will send an upfront price. No pressure.
          </p>
          <div className="mt-5">
            <QuoteForm variant="compact" />
          </div>
        </div>
      </div>
    </section>
  );
}
