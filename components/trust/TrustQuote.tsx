"use client";

import { QUOTE_EMAIL, submitQuoteForm } from "@/lib/formSubmit";

function Stars() {
  return (
    <span className="flex items-center gap-0.5" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, 4.2 - i));
        return (
          <svg key={i} width="20" height="20" viewBox="0 0 20 20">
            <defs>
              <linearGradient id={`ts-${i}`}>
                <stop offset={`${fill * 100}%`} stopColor="#F4A261" />
                <stop offset={`${fill * 100}%`} stopColor="rgba(245,241,232,0.2)" />
              </linearGradient>
            </defs>
            <path d="M10 1.6l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.7l-4.95 2.6.95-5.5-4-3.9 5.53-.8z" fill={`url(#ts-${i})`} />
          </svg>
        );
      })}
    </span>
  );
}

export default function TrustQuote() {
  return (
    <div className="relative overflow-hidden rounded-5xl border border-paper/10 bg-surface px-6 py-14 shadow-panel md:px-14 md:py-16">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 120% at 0% 0%, rgba(230,57,70,0.16), transparent 55%), radial-gradient(90% 120% at 100% 100%, rgba(201,169,97,0.10), transparent 55%)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl">
        <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-extrabold uppercase leading-[0.98] tracking-tight text-paper">
          Careful local professionals you can trust!
        </h2>
        <p className="mt-4 text-lg font-semibold text-paper/80 md:text-xl">
          Affordable moving and storage services
        </p>

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-amber-pulse">
          Get a free quote
        </p>
        <form
          action={`mailto:${QUOTE_EMAIL}`}
          method="POST"
          encType="text/plain"
          onSubmit={submitQuoteForm}
          className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <input
            name="Pick Up Location"
            required
            autoComplete="postal-code"
            placeholder="Enter pick up postal code"
            className="w-full rounded-full border border-paper/15 bg-black/45 px-5 py-3.5 text-sm text-paper placeholder:text-paper/40 outline-none transition-colors focus:border-amber-pulse/70 sm:max-w-[15rem]"
          />
          <input
            name="Drop Off Location"
            required
            autoComplete="postal-code"
            placeholder="Enter drop off postal code"
            className="w-full rounded-full border border-paper/15 bg-black/45 px-5 py-3.5 text-sm text-paper placeholder:text-paper/40 outline-none transition-colors focus:border-amber-pulse/70 sm:max-w-[15rem]"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-velocity-red px-8 py-3.5 text-sm font-bold text-paper shadow-glow transition-all duration-200 hover:bg-crimson-shadow hover:-translate-y-0.5"
          >
            Get a quote
          </button>
        </form>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Stars />
          <span className="text-lg font-extrabold text-paper">4.2 / 5</span>
          <span className="text-sm text-paper/55">Based on our verified reviews</span>
        </div>
      </div>
    </div>
  );
}
