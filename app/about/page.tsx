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
      <PageHero title="About Bitlane" />

      <section className="px-[clamp(20px,5vw,88px)] pb-20 pt-4">
        <Reveal className="mx-auto grid max-w-5xl items-start gap-10 md:grid-cols-2">
          <div className="aspect-[4/5] overflow-hidden rounded-4xl border border-paper/10 md:sticky md:top-24">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/images/owner.jpg")}
              alt="The Bitlane owner"
              width={820}
              height={1025}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="space-y-4 text-base leading-relaxed text-paper/75">
            <p>
              Bitlane was founded with one simple belief: people deserve a moving
              company they can genuinely trust.
            </p>
            <p>
              We saw a gap in the industry where customers were often left dealing
              with hidden costs, unreliable service, and rushed experiences. We
              believed moving could be different. That&apos;s why we started Bitlane,
              to provide honest pricing, dependable service, and the peace of mind
              that comes from knowing your belongings are in safe hands.
            </p>
            <p>
              Our mission has never been to be the cheapest or the biggest. It&apos;s
              to deliver exceptional service without compromising integrity,
              professionalism, or care. Every move is treated with the same level of
              respect and attention, whether it&apos;s a student moving into their
              first apartment, a family relocating across the city, or a business
              moving across the province.
            </p>
            <p>
              Because moving isn&apos;t just about getting from one place to another,
              it&apos;s about starting the next chapter of your life with confidence.
            </p>
            <p>
              We are proud to serve Kingston and the surrounding region, along with
              the Greater Toronto Area, Ottawa, and Montreal. No matter the size of
              the move or the distance of the drive, our team gets you there safely,
              on time, and without the stress.
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
