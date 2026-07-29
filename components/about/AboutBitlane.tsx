import Link from "next/link";
import { asset } from "@/lib/asset";

/**
 * About section styled after the Pure reference: the WHOLE surface is an organic
 * blob (asymmetric radii, not a plain rounded rectangle) in brand orange with
 * dark copy. The owner photo sits on the right in its own angled blob frame and
 * overflows the card edge on desktop. On mobile it stacks neatly underneath.
 */
export default function AboutBitlane() {
  return (
    <div className="relative">
      {/* organic orange blob + copy */}
      <div
        className="relative overflow-hidden bg-velocity-red p-6 shadow-panel sm:p-8 md:p-10 lg:pr-[40%]"
        style={{ borderRadius: "3.5rem 2rem 3.25rem 2.25rem" }}
      >
        <div className="text-ink">
          <h2 className="text-[clamp(2rem,4.2vw,3.5rem)] font-extrabold uppercase leading-[0.98] tracking-tight">
            About our company
          </h2>
          <p className="mt-3 text-lg font-bold">Bitlane Relocations</p>

          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-paper shadow-lg transition-transform duration-200 hover:-translate-y-0.5"
          >
            About Bitlane
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <div className="mt-7 max-w-xl text-[0.95rem] font-medium leading-relaxed text-ink/85">
            <p>
              Bitlane is a Kingston based moving company built to make relocation
              simple, with the same care, honest pricing, and attention to detail on
              every move. We proudly serve Kingston and the surrounding region, along
              with the Greater Toronto Area, Ottawa, and Montreal, getting you there
              safely and on time.
            </p>
          </div>
        </div>
      </div>

      {/* owner photo — angled blob, overflows the card on desktop, stacks on mobile */}
      <div className="mt-8 lg:absolute lg:right-0 lg:top-1/2 lg:mt-0 lg:w-[38%] lg:-translate-y-1/2 lg:translate-x-4">
        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div
            className="absolute -inset-3 rotate-6 bg-ink"
            style={{ borderRadius: "3rem 2.25rem 3.25rem 2rem" }}
            aria-hidden="true"
          />
          <img
            src={asset("/images/owner.jpg")}
            alt="Portrait of the Bitlane owner"
            width="820"
            height="1025"
            loading="lazy"
            decoding="async"
            className="relative aspect-[4/5] w-full -rotate-2 object-cover object-top shadow-2xl"
            style={{ borderRadius: "2.5rem 3rem 2.25rem 3.25rem" }}
          />
        </div>
      </div>
    </div>
  );
}
