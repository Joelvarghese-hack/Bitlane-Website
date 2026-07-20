"use client";

import Link from "next/link";
import RatingBadges from "@/components/hero/RatingBadges";
import ContactLink from "@/components/util/ContactLink";
import { asset } from "@/lib/asset";

const INPUT =
  "w-full rounded-full border border-paper/15 bg-black/50 px-5 py-3.5 text-sm text-paper placeholder:text-paper/45 outline-none transition-colors focus:border-amber-pulse/70 sm:max-w-[15rem]";

/**
 * Carries the two postal codes into the full quote form at the bottom of the
 * page and smooth-scrolls there, instead of opening an email. Both forms live
 * on the home page and use uncontrolled inputs, so setting the values directly
 * is safe and persists.
 */
function goToQuote(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const form = event.currentTarget;
  const pickup = (form.elements.namedItem("Pick Up Location") as HTMLInputElement | null)?.value ?? "";
  const dropoff = (form.elements.namedItem("Drop Off Location") as HTMLInputElement | null)?.value ?? "";

  const carry = (id: string, value: string) => {
    const el = document.getElementById(id) as HTMLInputElement | null;
    if (el && value.trim()) el.value = value.trim();
  };
  carry("q-zip-from", pickup);
  carry("q-zip-to", dropoff);

  const target = document.getElementById("quote");
  if (target) target.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section className="hero-fade relative -mt-28 flex min-h-[calc(92vh+7rem)] items-center overflow-hidden pt-28">
      {/* background video (drop public/hero.mp4 in and it plays; poster until then) */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-[0.3]"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={asset("/images/hero-poster.jpg")}
        aria-hidden="true"
      >
        <source src={asset("/hero.mp4")} type="video/mp4" />
      </video>
      <div
        className="absolute inset-0"
        style={{
          // Darken only around the headline (centre-left); leave the very top
          // clear so the nav reads as a floating pill over the image, not a bar.
          background:
            "radial-gradient(120% 95% at 20% 74%, rgba(35,31,32,0.92) 0%, rgba(35,31,32,0.5) 42%, rgba(35,31,32,0) 66%), linear-gradient(180deg, rgba(35,31,32,0) 60%, rgba(35,31,32,0.5) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-[clamp(20px,5vw,88px)] py-24">
        <div className="max-w-2xl">
          <h1 className="text-[clamp(2.6rem,5.6vw,4.7rem)] font-extrabold uppercase leading-[0.98] tracking-tight text-paper">
            Careful local professionals you can trust!
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-paper/25 px-7 py-3.5 text-base font-semibold text-paper transition-all duration-200 hover:border-amber-pulse hover:text-amber-pulse"
            >
              About us
            </Link>
            <ContactLink
              type="tel"
              value="(613) 770-1638"
              className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-7 py-3.5 text-base font-semibold text-paper transition-all duration-200 hover:border-amber-pulse hover:text-amber-pulse"
            >
              <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 2.5h2.6l1.2 3-1.6 1.2a9.6 9.6 0 0 0 4.1 4.1l1.2-1.6 3 1.2v2.6c0 .6-.5 1-1 1C7 14 2 9 2 3.5c0-.5.4-1 1-1Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
              </svg>
              (613) 770-1638
            </ContactLink>
          </div>

          <p className="mt-9 text-sm font-semibold uppercase tracking-[0.14em] text-amber-pulse">
            Get a free quote
          </p>
          <form
            onSubmit={goToQuote}
            className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <input name="Pick Up Location" required autoComplete="postal-code" placeholder="Enter pick up postal code" className={INPUT} />
            <input name="Drop Off Location" required autoComplete="postal-code" placeholder="Enter drop off postal code" className={INPUT} />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-velocity-red px-8 py-3.5 text-sm font-bold text-paper shadow-glow transition-all duration-200 hover:bg-crimson-shadow hover:-translate-y-0.5"
            >
              Get a quote
            </button>
          </form>

          <RatingBadges className="mt-8" />
        </div>
      </div>
    </section>
  );
}
