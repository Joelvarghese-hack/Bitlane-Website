import Link from "next/link";
import { asset } from "@/lib/asset";

export default function AboutBitlane() {
  return (
    <div className="overflow-hidden rounded-5xl border border-paper/10 bg-surface shadow-panel">
      <div className="grid items-stretch lg:grid-cols-2">
        {/* text panel */}
        <div className="relative p-8 md:p-12 lg:p-14">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(110% 120% at 0% 0%, rgba(230,57,70,0.18), transparent 60%)",
            }}
            aria-hidden="true"
          />
          <div className="relative">
            <h2 className="text-[clamp(2rem,3.6vw,3.1rem)] font-extrabold uppercase leading-[1.02] tracking-tight text-paper">
              About our company
            </h2>
            <p className="mt-3 text-lg font-bold text-amber-pulse">Bitlane Moving Company</p>

            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-velocity-red px-7 py-3.5 text-sm font-bold text-paper shadow-glow transition-all duration-200 hover:bg-crimson-shadow hover:-translate-y-0.5"
            >
              About Bitlane
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            <div className="mt-8 space-y-4 text-[0.95rem] leading-relaxed text-paper/75">
              <p>
                Bitlane is a Kingston based moving company built to make relocation
                simple for the people and businesses of our community. From a first
                apartment near Queen&apos;s to a family home across the city, we treat
                every move with the same care, honest pricing, and attention to detail.
              </p>
              <p>
                We are proud to serve Kingston and the surrounding region, along with
                the Greater Toronto Area, Ottawa, and Montreal. No matter the size of
                the move or the distance of the drive, our team is equipped to get you
                there safely, on time, and without the stress.
              </p>
            </div>
          </div>
        </div>

        {/* image */}
        <div className="relative min-h-[280px] lg:min-h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/images/about-team.jpg")}
            alt="The Bitlane moving team"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
