import QuoteForm from "@/components/quote/QuoteForm";
import RatingBadges from "@/components/hero/RatingBadges";
import VideoPanel from "@/components/hero/VideoPanel";

const TRUST_PILLS = [
  "Open 24 hours",
  "Licensed and insured",
  "All inclusive pricing",
  "No hidden fees",
];

export default function Hero() {
  return (
    <section className="hero-fade px-[clamp(20px,5vw,88px)] pb-16 pt-16 md:pb-24 md:pt-24">
      <div className="mx-auto max-w-7xl">
        {/* Headline block */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-paper/12 bg-surface/70 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-amber-pulse">
            <span className="h-1.5 w-1.5 rounded-full bg-velocity-red" aria-hidden="true" />
            Stress free moving experience
          </span>

          <h1 className="mt-6 text-[clamp(2.6rem,5.6vw,5rem)] font-extrabold leading-[1.02] tracking-tight text-paper">
            The most trusted movers in{" "}
            <span className="text-velocity-red">Kingston</span> and across{" "}
            <span className="text-amber-pulse">Ontario</span>.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/70">
            From Kingston to the Greater Toronto Area, Ottawa, and Montreal.
            Careful hands, one clear all inclusive price, and a move that feels
            easy from the first call to the last box.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#quote"
              className="inline-flex items-center justify-center rounded-full bg-velocity-red px-8 py-4 text-base font-bold text-paper shadow-glow transition-all duration-200 hover:bg-crimson-shadow hover:-translate-y-0.5"
            >
              Get a free quote
            </a>
            <a
              href="tel:+16137701638"
              className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-7 py-4 text-base font-semibold text-paper transition-all duration-200 hover:border-amber-pulse hover:text-amber-pulse"
            >
              <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 2.5h2.6l1.2 3-1.6 1.2a9.6 9.6 0 0 0 4.1 4.1l1.2-1.6 3 1.2v2.6c0 .6-.5 1-1 1C7 14 2 9 2 3.5c0-.5.4-1 1-1Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
              </svg>
              (613) 770-1638
            </a>
          </div>

          <RatingBadges className="mt-8" />
        </div>

        {/* Media + quote form */}
        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <VideoPanel />
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {TRUST_PILLS.map((pill) => (
                <li
                  key={pill}
                  className="flex items-center gap-2 rounded-full border border-paper/10 bg-surface/60 px-4 py-2 text-sm text-paper/70"
                >
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3.5 8.5l3 3 6-7" stroke="#F4A261" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {pill}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-4xl border border-paper/10 bg-surface-2/90 p-6 shadow-panel md:p-8">
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
        </div>
      </div>
    </section>
  );
}
