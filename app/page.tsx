import Hero from "@/components/hero/Hero";
import TruckReveal from "@/components/truck/TruckReveal";
import TapeMarquee from "@/components/marquee/TapeMarquee";
import WhyPeopleLoveUs from "@/components/why/WhyPeopleLoveUs";
import ServiceShowcase from "@/components/services/ServiceShowcase";
import TrustQuote from "@/components/trust/TrustQuote";
import Testimonials from "@/components/testimonials/Testimonials";
import AboutBitlane from "@/components/about/AboutBitlane";
import ServiceAreas from "@/components/area/ServiceAreas";
import Faq from "@/components/faq/Faq";
import QuoteSection from "@/components/quote/QuoteSection";
import Reveal from "@/components/scroll/Reveal";

const SECTION = "px-[clamp(20px,5vw,88px)] py-16 md:py-24";

export default function Home() {
  return (
    <main>
      <Hero />

      <TruckReveal />

      <TapeMarquee slope="down" />

      <section id="why" className={SECTION}>
        <Reveal className="mx-auto w-full max-w-7xl">
          <WhyPeopleLoveUs />
        </Reveal>
      </section>

      <section id="services" className={SECTION}>
        <Reveal className="mx-auto w-full max-w-7xl">
          <ServiceShowcase />
        </Reveal>
      </section>

      <TapeMarquee slope="up" />

      <section id="get-a-quote" className={SECTION}>
        <Reveal className="mx-auto w-full max-w-7xl">
          <TrustQuote />
        </Reveal>
      </section>

      <section id="testimonials" className={SECTION}>
        <Reveal className="mx-auto w-full max-w-7xl">
          <Testimonials />
        </Reveal>
      </section>

      <TapeMarquee slope="down" />

      <section id="about" className={SECTION}>
        <Reveal className="mx-auto w-full max-w-7xl">
          <AboutBitlane />
        </Reveal>
      </section>

      <section id="areas" className={SECTION}>
        <Reveal className="mx-auto w-full max-w-7xl">
          <ServiceAreas />
        </Reveal>
      </section>

      <TapeMarquee slope="up" />

      <section id="faq" className={SECTION}>
        <Reveal className="mx-auto w-full max-w-7xl">
          <Faq />
        </Reveal>
      </section>

      <section id="quote" className={`${SECTION} scroll-mt-24`}>
        <Reveal className="mx-auto w-full max-w-7xl">
          <QuoteSection />
        </Reveal>
      </section>
    </main>
  );
}
