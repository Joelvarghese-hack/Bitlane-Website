"use client";

import { useEffect, useRef } from "react";
import { asset } from "@/lib/asset";
import ScrollArrows from "@/components/util/ScrollArrows";

const PHOTOS = [
  { src: "/images/gallery/g1.jpg", alt: "Bitlane mover carrying a wrapped box" },
  { src: "/images/gallery/g2.jpg", alt: "Careful handling on a Bitlane move" },
  { src: "/images/gallery/g3.jpg", alt: "A Bitlane truck loaded for a move" },
  { src: "/images/gallery/g4.jpg", alt: "Bitlane crew at work" },
  { src: "/images/gallery/g5.jpg", alt: "Furniture wrapped and ready to load" },
  { src: "/images/gallery/g6.jpg", alt: "Belongings packed with care" },
  { src: "/images/gallery/g7.jpg", alt: "A completed Bitlane move" },
];

/**
 * Job photos that auto-drift slowly and can also be dragged / swiped by the
 * user. Same behaviour model as the testimonials: horizontal only, so it never
 * interferes with vertical page scrolling; the drift resumes after interaction.
 */
export default function GalleryStrip() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    let dragging = false;
    let startX = 0;
    let startLeft = 0;
    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      dragging = true;
      startX = e.clientX;
      startLeft = el.scrollLeft;
      el.classList.add("is-grabbing");
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      el.scrollLeft = startLeft - (e.clientX - startX);
    };
    const endDrag = () => {
      dragging = false;
      el.classList.remove("is-grabbing");
    };
    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", endDrag);

    let hovering = false;
    const onEnter = () => (hovering = true);
    const onLeave = () => (hovering = false);
    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerleave", onLeave);

    let raf = 0;
    let last = 0;
    const SPEED = 26;
    const tick = (t: number) => {
      const dt = last ? (t - last) / 1000 : 0;
      last = t;
      if (!hovering && !dragging) {
        el.scrollLeft += SPEED * dt;
        const half = el.scrollWidth / 2;
        if (half > 0 && el.scrollLeft >= half) el.scrollLeft -= half;
      }
      raf = requestAnimationFrame(tick);
    };
    if (canHover && !reduce) raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", endDrag);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  const items = [...PHOTOS, ...PHOTOS];

  return (
    <div className="gallery-band relative">
      <div ref={scrollerRef} className="testi-scroller flex overflow-x-auto">
        {items.map((p, i) => (
          <div key={`${p.src}-${i}`} className="gallery-cell">
            <img
              src={asset(p.src)}
              alt={p.alt}
              width="500"
              height="420"
              loading="lazy"
              draggable={false}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <ScrollArrows
        scrollerRef={scrollerRef}
        label="photos"
        className="pointer-events-none absolute inset-x-0 bottom-4 [&>button]:pointer-events-auto"
      />
    </div>
  );
}
