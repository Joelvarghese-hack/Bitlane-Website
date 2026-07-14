import TapeMarquee from "@/components/marquee/TapeMarquee";
import { asset } from "@/lib/asset";

/**
 * A slanted showcase band, modeled loosely on the reference "clients" strip but
 * themed to Bitlane. A down-sloped tape sits on top, the title reads in the
 * middle, real job photos scroll steadily right to left across a black band
 * (edge to edge, no gaps), and an up-sloped tape closes it off. Everything here
 * is decorative and non-interactive: the images and both tapes never pause on
 * hover and ignore clicks.
 */
const PHOTOS = [
  { src: "/images/gallery/g1.jpg", alt: "Bitlane mover carrying a wrapped box" },
  { src: "/images/gallery/g2.jpg", alt: "Careful handling on a Bitlane move" },
  { src: "/images/gallery/g3.jpg", alt: "A Bitlane truck loaded for a move" },
  { src: "/images/gallery/g4.jpg", alt: "Bitlane crew at work" },
  { src: "/images/gallery/g5.jpg", alt: "Furniture wrapped and ready to load" },
  { src: "/images/gallery/g6.jpg", alt: "Belongings packed with care" },
  { src: "/images/gallery/g7.jpg", alt: "A completed Bitlane move" },
];

export default function Gallery() {
  const strip = (
    <div className="gallery-group" aria-hidden="true">
      {PHOTOS.map((p, i) => (
        <div key={`${p.src}-${i}`} className="gallery-cell">
          <img src={asset(p.src)} alt={p.alt} loading="lazy" />
        </div>
      ))}
    </div>
  );

  return (
    <section aria-label="Our work" className="relative">
      <TapeMarquee slope="down" />

      <div className="py-2 text-center">
        <h2 className="text-[clamp(2rem,3.6vw,3.1rem)] font-extrabold uppercase leading-[1.05] tracking-tight text-paper">
          Our work
        </h2>
      </div>

      <div className="gallery-band" aria-hidden="true">
        <div className="gallery-track">
          {strip}
          {strip}
        </div>
      </div>

      <TapeMarquee slope="up" />
    </section>
  );
}
