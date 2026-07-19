import TapeMarquee from "@/components/marquee/TapeMarquee";
import GalleryStrip from "@/components/gallery/GalleryStrip";

/**
 * "Our work" band: real job photos that auto-drift and can also be dragged /
 * swiped, framed by a down-sloped tape on top and an up-sloped tape below.
 */
export default function Gallery() {
  return (
    <section aria-label="Our work" className="relative">
      <div className="pt-10 pb-1 text-center md:pt-14">
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
