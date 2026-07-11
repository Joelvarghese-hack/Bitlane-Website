import type { Metadata } from "next";
import PageHero from "@/components/inner/PageHero";
import ServiceAreas from "@/components/area/ServiceAreas";

export const metadata: Metadata = {
  title: "Service Area | Bitlane",
  description:
    "Bitlane serves the Greater Toronto Area, Kingston, Belleville, Cornwall, Brockville, Ottawa, and Montreal, with moves across Ontario and into Quebec.",
};

export default function CoveragePage() {
  return (
    <main>
      <PageHero
        title="Service area"
        lede="Based in Kingston and moving families and businesses right across the Greater Toronto Area, Eastern Ontario, and into Quebec."
      />
      <section className="px-[clamp(20px,5vw,88px)] pb-24">
        <div className="mx-auto max-w-5xl">
          <ServiceAreas showIntro={false} />
        </div>
      </section>
    </main>
  );
}
