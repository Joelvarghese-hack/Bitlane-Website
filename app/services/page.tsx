import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/inner/PageHero";
import { SERVICES, type Tint } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services | Bitlane",
  description:
    "Residential, commercial, specialty, packing, junk removal, labour only, student, and senior moving. Every job starts with a free, all inclusive estimate.",
};

const ICON_TINT: Record<Tint, string> = {
  red: "bg-velocity-red/15 text-velocity-red",
  amber: "bg-amber-pulse/15 text-amber-pulse",
  navy: "bg-navy/40 text-[#7ba3d6]",
  gold: "bg-gold/15 text-gold",
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
          {SERVICES.map((service) => {
            const { Icon } = service;
            return (
              <article
                key={service.slug}
                id={service.slug}
                className="scroll-mt-24 rounded-4xl border border-paper/10 bg-surface p-7 transition-colors duration-300 hover:border-paper/20"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${ICON_TINT[service.tint]} [&>svg]:h-6 [&>svg]:w-6`}
                  >
                    <Icon />
                  </span>
                  <div>
                    <h2 className="text-lg font-bold text-paper">{service.title}</h2>
                    <span className="text-xs font-semibold uppercase tracking-wide text-amber-pulse">
                      Free estimate
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-paper/65">
                  {service.long}
                </p>
              </article>
            );
          })}
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
