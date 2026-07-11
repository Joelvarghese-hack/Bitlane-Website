import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/inner/PageHero";
import { SERVICES } from "@/lib/services";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Services | Bitlane",
  description:
    "Residential, commercial, specialty, packing, junk removal, labour only, student, and senior moving. Every job starts with a free, all inclusive estimate.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title="Our services"
        lede="Everything we move, and the care that goes into it. Every job starts with a free, all inclusive estimate, so you always know the price before we lift a thing."
      />
      <section className="px-[clamp(20px,5vw,88px)] pb-24">
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
          {SERVICES.map((service) => (
            <article
              key={service.slug}
              id={service.slug}
              className="scroll-mt-24 overflow-hidden rounded-4xl border border-paper/10 bg-surface transition-colors duration-300 hover:border-paper/20"
            >
              <div className="relative h-56 w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(`/images/services/${service.slug}.jpg`)}
                  alt={service.title}
                  className="h-full w-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, rgba(5,5,6,0.1) 0%, rgba(5,5,6,0) 45%, rgba(5,5,6,0.55) 100%)" }}
                  aria-hidden="true"
                />
                <span className="absolute left-4 top-4 rounded-full border border-paper/15 bg-black/50 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-amber-pulse backdrop-blur-sm">
                  Free estimate
                </span>
              </div>
              <div className="p-7">
                <h2 className="text-lg font-bold text-paper">{service.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-paper/65">
                  {service.long}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 flex max-w-5xl flex-wrap gap-4">
          <Link
            href="/#quote"
            className="inline-flex items-center justify-center rounded-full bg-velocity-red px-7 py-3.5 text-sm font-bold text-paper shadow-glow transition-all duration-200 hover:bg-crimson-shadow hover:-translate-y-0.5"
          >
            Get a free quote
          </Link>
          <a
            href="tel:+16137701638"
            className="inline-flex items-center justify-center rounded-full border border-paper/20 px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:border-amber-pulse hover:text-amber-pulse"
          >
            Call (613) 770-1638
          </a>
        </div>
      </section>
    </main>
  );
}
