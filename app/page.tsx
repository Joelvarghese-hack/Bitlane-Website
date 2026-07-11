import Hero from "@/components/hero/Hero";
import ServiceShowcase from "@/components/services/ServiceShowcase";
import Testimonials from "@/components/testimonials/Testimonials";
import ServiceAreas from "@/components/area/ServiceAreas";
import Faq from "@/components/faq/Faq";
import QuoteSection from "@/components/quote/QuoteSection";
import Reveal from "@/components/scroll/Reveal";

const SECTION = "px-[clamp(20px,5vw,88px)] py-20 md:py-28";

export default function Home() {
  return (
    <main>
      <Hero />

      <section id="services" className={SECTION}>
        <Reveal className="mx-auto w-full max-w-7xl">
          <ServiceShowcase />
        </Reveal>
      </section>

      <section id="testimonials" className={SECTION}>
        <Reveal className="mx-auto w-full max-w-7xl">
          <Testimonials />
        </Reveal>
      </section>

      <section id="areas" className={SECTION}>
        <Reveal className="mx-auto w-full max-w-7xl">
          <ServiceAreas />
        </Reveal>
      </section>

      <section id="faq" className={SECTION}>
        <Reveal className="mx-auto w-full max-w-7xl">
          <Faq />
        </Reveal>
      </section>

      <section id="quote" className={`${SECTION} scroll-mt-8`}>
        <Reveal className="mx-auto w-full max-w-7xl">
          <QuoteSection />
        </Reveal>
      </section>
    </main>
  );
}
