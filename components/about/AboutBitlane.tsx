import Link from "next/link";
import { asset } from "@/lib/asset";

/**
 * About section styled after the Pure reference: the WHOLE card is a bold brand
 * colour with dark copy on the left (heading, subheading, button, body) and the
 * owner photo on the right in an angled, rounded frame with an offset accent.
 * Responsive — stacks and eases the rotation on small screens.
 */
export default function AboutBitlane() {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] bg-velocity-red p-7 shadow-panel sm:p-10 md:p-14">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="text-ink">
          <h2 className="text-[clamp(2rem,4.2vw,3.5rem)] font-extrabold uppercase leading-[0.98] tracking-tight">
            About our company
          </h2>
          <p className="mt-3 text-lg font-bold">Bitlane Moving Company</p>

          <Link
            href="/about"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-velocity-red shadow-lg transition-transform duration-200 hover:-translate-y-0.5"
          >
            About Bitlane
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <div className="mt-8 space-y-4 text-[0.95rem] font-medium leading-relaxed text-ink/85">
            <p>
              Bitlane is a Kingston based moving company built to make relocation
              simple for the people and businesses of our community. From a first
              apartment near Queen&apos;s to a family home across the city, we treat
              every move with the same care, honest pricing, and attention to detail.
            </p>
            <p>
              We are proud to serve Kingston and the surrounding region, along with
              the Greater Toronto Area, Ottawa, and Montreal. No matter the size of
              the move or the distance of the drive, our team gets you there safely,
              on time, and without the stress.
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div className="absolute -inset-2 rotate-3 rounded-[2rem] bg-ink/25 sm:-inset-3" aria-hidden="true" />
          <img
            src={asset("/images/owner.jpg")}
            alt="The Bitlane owner"
            loading="lazy"
            decoding="async"
            className="relative aspect-[4/5] w-full rotate-1 rounded-[2rem] object-cover object-top shadow-2xl sm:-rotate-2"
          />
        </div>
      </div>
    </div>
  );
}
