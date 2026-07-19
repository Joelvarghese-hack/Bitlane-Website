import Hero from "@/components/hero/Hero";
import ProblemStatement from "@/components/problem/ProblemStatement";
import TruckReveal from "@/components/truck/TruckReveal";
import TapeMarquee from "@/components/marquee/TapeMarquee";
import WhyPeopleLoveUs from "@/components/why/WhyPeopleLoveUs";
import ServiceShowcase from "@/components/services/ServiceShowcase";
import DontSettle from "@/components/compare/DontSettle";
import Testimonials from "@/components/testimonials/Testimonials";
import Gallery from "@/components/gallery/Gallery";
import AboutBitlane from "@/components/about/AboutBitlane";
import ServiceAreas from "@/components/area/ServiceAreas";
import ContactTile from "@/components/area/ContactTile";
import Faq from "@/components/faq/Faq";
import QuoteSection from "@/components/quote/QuoteSection";
import Reveal from "@/components/scroll/Reveal";

// Roomier side margins; content containers a touch narrower for breathing room.
const SECTION = "px-[clamp(22px,6vw,120px)] py-16 md:py-24";
const INNER = "mx-auto w-full max-w-6xl";

export default function Home() {
  return (
    <main>
      <Hero />

      <ProblemStatement />

      <section id="why" className={SECTION}>
        <Reveal className={INNER}>
          <WhyPeopleLoveUs />
        </Reveal>
      </section>

      <TruckReveal />

      <TapeMarquee slope="down" />

      <section id="services" className={SECTION}>
        <Reveal className={INNER}>
          <ServiceShowcase />
        </Reveal>
      </section>

      <section id="why-us" className={SECTION}>
        <Reveal className={INNER}>
          <DontSettle />
        </Reveal>
      </section>

      <TapeMarquee slope="up" logo="icon" />

      {/* Testimonials stay edge-to-edge (component adds its own inner padding). */}
      <section id="testimonials" className="py-16 md:py-24">
        <Reveal>
          <Testimonials />
        </Reveal>
      </section>

      <Gallery />

      <section id="about" className={SECTION}>
        <Reveal className={INNER}>
          <AboutBitlane />
        </Reveal>
      </section>

      <section id="areas" className={SECTION}>
        <Reveal className={INNER}>
          <ServiceAreas />
        </Reveal>
      </section>

      <section className="px-[clamp(22px,6vw,120px)] pb-16 md:pb-24">
        <Reveal className={INNER}>
          <ContactTile />
        </Reveal>
      </section>

      <TapeMarquee slope="down" />

      <section id="faq" className={SECTION}>
        <Reveal className={INNER}>
          <Faq />
        </Reveal>
      </section>

      <section id="quote" className={`${SECTION} scroll-mt-24`}>
        <Reveal className={INNER}>
          <QuoteSection />
        </Reveal>
      </section>
    </main>
  );
}
