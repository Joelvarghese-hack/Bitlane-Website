import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/inner/PageHero";
import CoverageStats from "@/components/stats/CoverageStats";
import Reveal from "@/components/scroll/Reveal";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "About | Bitlane",
  description:
    "Bitlane is a Kingston moving company built on careful hands, honest volume based pricing, and moves that arrive on time across Ontario and Quebec.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="About Bitlane"
        lede="A Kingston moving company built on careful hands, honest pricing, and moves that feel easy from the first call to the last box."
      />

      <section className="px-[clamp(20px,5vw,88px)] pb-20">
        <Reveal className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-4xl border border-paper/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/images/about-team.jpg")}
              alt="The Bitlane moving team"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-4 text-base leading-relaxed text-paper/75">
            <p>
              Bitlane is a moving company based in Kingston, Ontario. We started
              with one truck and a simple belief: moving day should be the easiest
              day of your move, not the hardest. Since then we have helped families,
              students, and businesses across the region relocate without the stress.
            </p>
            <p>
              We are proud to be part of the Kingston community and to serve the
              towns around it, along with the Greater Toronto Area, Ottawa, and
              Montreal. Most of our work comes from referrals, which tells you more
              than any slogan could.
            </p>
          </div>
        </Reveal>

        <Reveal className="mx-auto mt-16 max-w-4xl space-y-4 text-base leading-relaxed text-paper/75">
          <p>
            We price by volume, the space your belongings take up in the truck,
            rather than by weight. You get one clear, all inclusive quote before we
            begin, and that number does not change on moving day. No hidden fees, no
            surprises, just careful movers and honest pricing.
          </p>
          <p>
            Our team is trained to treat your home and your belongings with respect.
            We pad and wrap furniture, protect floors and doorways, and take apart
            and reassemble what needs it. Whether you are moving a studio downtown or
            a family home across the province, we are equipped to get you there
            safely and on time.
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-16 max-w-4xl">
          <CoverageStats />
        </Reveal>

        <Reveal className="mx-auto mt-14 max-w-4xl">
          <Link
            href="/#quote"
            className="inline-flex items-center justify-center rounded-full bg-velocity-red px-7 py-3.5 text-sm font-bold text-paper shadow-glow transition-all duration-200 hover:bg-crimson-shadow hover:-translate-y-0.5"
          >
            Get a free quote
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
