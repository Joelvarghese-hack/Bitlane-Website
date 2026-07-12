import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/inner/PageHero";
import Reveal from "@/components/scroll/Reveal";
import { SERVICES } from "@/lib/services";
import { asset } from "@/lib/asset";
import ContactLink from "@/components/util/ContactLink";

export const metadata: Metadata = {
  title: "Services | Bitlane",
  description:
    "Residential, commercial, specialty, packing, junk removal, labour only, student, and senior moving in Kingston and across Ontario. Priced by volume, not weight.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title="Our services"
        lede="Everything we move, and the care that goes into it. Every job starts with a free, all inclusive estimate, so you always know the price before we lift a thing."
      />

      <section className="px-[clamp(20px,5vw,88px)] pb-24">
        {/* pricing principle */}
        <Reveal className="mx-auto mb-16 max-w-4xl">
          <div className="rounded-4xl border border-amber-pulse/25 bg-amber-pulse/[0.06] p-7 md:p-9">
            <h2 className="text-xl font-bold text-paper md:text-2xl">
              Priced by volume, not by weight
            </h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-paper/70">
              With Bitlane you pay for the space your belongings take up in the
              truck, not for how heavy they are. A quote is based on the size of
              your move, the distance, and any extras like packing or specialty
              items. That keeps pricing fair and predictable, and it means a heavy
              piece of furniture never turns into a surprise charge on moving day.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto grid max-w-5xl gap-16">
          {SERVICES.map((service, i) => (
            <Reveal key={service.slug}>
              <article
                id={service.slug}
                className="scroll-mt-24 grid gap-8 md:grid-cols-2 md:items-center"
              >
                <div className={`overflow-hidden rounded-4xl border border-paper/10 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset(`/images/services/${service.slug}.jpg`)}
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    className="h-64 w-full object-cover md:h-72"
                  />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-pulse">
                    Free estimate
                  </span>
                  <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-paper md:text-3xl">
                    {service.title}
                  </h2>
                  <div className="mt-4 space-y-3 text-[0.95rem] leading-relaxed text-paper/70">
                    {service.detail.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-16 flex max-w-5xl flex-wrap gap-4">
          <Link
            href="/#quote"
            className="inline-flex items-center justify-center rounded-full bg-velocity-red px-7 py-3.5 text-sm font-bold text-paper shadow-glow transition-all duration-200 hover:bg-crimson-shadow hover:-translate-y-0.5"
          >
            Get a free quote
          </Link>
          <ContactLink
            type="tel"
            value="(613) 770-1638"
            className="inline-flex items-center justify-center rounded-full border border-paper/20 px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:border-amber-pulse hover:text-amber-pulse"
          >
            Call (613) 770-1638
          </ContactLink>
        </div>
      </section>
    </main>
  );
}
