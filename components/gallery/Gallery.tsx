import TapeMarquee from "@/components/marquee/TapeMarquee";
import GalleryStrip from "@/components/gallery/GalleryStrip";

/**
 * "Our work" band: real job photos that auto-drift and can also be dragged /
 * swiped, framed by a down-sloped tape on top and an up-sloped tape below.
 */
export default function Gallery() {
  return (
    <section aria-label="Our work" className="relative mb-8 md:mb-14">
      <div className="pb-10 pt-8 text-center md:pb-14 md:pt-12">
        <h2 className="text-[clamp(2rem,3.6vw,3.1rem)] font-extrabold uppercase leading-[1.05] tracking-tight text-paper">
          Our work
        </h2>
      </div>

      <TapeMarquee slope="down" />

      <GalleryStrip />

      <TapeMarquee slope="up" logo="icon" />
    </section>
  );
}
