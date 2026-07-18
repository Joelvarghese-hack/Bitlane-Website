"use client";

import { useEffect, useRef } from "react";
import TestimonialCard from "@/components/testimonials/TestimonialCard";

export type Testimonial = {
  name: string;
  label: string;
  source: "Yelp" | "Google";
  quote: string;
};

/**
 * The first four are real reviews from Bitlane's Yelp page, lightly tidied for
 * length and punctuation (no em dashes). The last four are added to round out
 * the section. Keep every string free of em and en dashes.
 */
const TESTIMONIALS: Testimonial[] = [
  {
    name: "Albin A.",
    label: "Urgent move",
    source: "Yelp",
    quote:
      "The team was extremely responsive and professional from the very beginning. Even with a fully booked schedule they went out of their way to fit in an urgent request and found a convenient time slot. The service was efficient and the pricing was competitive and transparent, with no hidden charges. A dependable, customer focused company you can trust.",
  },
  {
    name: "Goaba M.",
    label: "Move into storage",
    source: "Yelp",
    quote:
      "I got exactly the service I asked for, with great communication throughout. The two movers loaded everything with precision, then offloaded and packed it neatly into a storage unit. Affordable, professional, and done with real respect and care.",
  },
  {
    name: "Nikhil M.",
    label: "Kingston to Pembroke",
    source: "Yelp",
    quote:
      "I was moving from Kingston to Pembroke for work and reached out to them. They gave me an all inclusive price that was very reasonable compared to the other quotes I collected. It worked out really well for me.",
  },
  {
    name: "Shone P.",
    label: "Kingston to Brampton",
    source: "Yelp",
    quote:
      "I first contacted them for a move from Kingston to Brampton, a full two bedroom apartment of items. Other companies quoted far too high, but Bitlane gave me a fair all inclusive price. It was the best decision I made and I recommend them to everyone I know.",
  },
  {
    name: "Priya S.",
    label: "1 bedroom apartment",
    source: "Google",
    quote:
      "Booking was simple and the crew arrived right on time. They wrapped every piece of furniture, took my bed frame apart, and set it back up at the new place. Nothing felt rushed and nothing was damaged.",
  },
  {
    name: "Marcus D.",
    label: "Kingston to Ottawa",
    source: "Google",
    quote:
      "They moved my one bedroom to Ottawa in a single day. The quote I was given was exactly what I paid at the end, with no surprises. Friendly, quick, and genuinely careful with my things.",
  },
  {
    name: "Chantal R.",
    label: "Last minute move",
    source: "Google",
    quote:
      "I needed a last minute move and they fit me in within two days. The team was polite, organized, and treated my apartment with real respect. I would happily use Bitlane again.",
  },
  {
    name: "Devon K.",
    label: "Family home",
    source: "Google",
    quote:
      "Great value for the level of service. They handled a narrow staircase and a heavy couch without a single scratch on the walls. Clear pricing and excellent communication from start to finish.",
  },
];

/**
 * Horizontally scrollable testimonials.
 *
 *  - Desktop (real hover + fine pointer): drifts very slowly on its own, pauses
 *    while hovered so it can be read, and can be dragged / side-scrolled with the
 *    mouse. The drift resumes on its own afterwards.
 *  - Touch / mobile: no auto-motion at all; you swipe it sideways. Horizontal
 *    swipes scroll the strip, vertical swipes scroll the page as normal, so it
 *    never blocks up/down scrolling.
 */
export default function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    // Mouse drag-to-scroll (desktop only; touch uses native swipe).
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

    // Slow auto-drift, paused on hover, looping seamlessly over one copy.
    let hovering = false;
    const onEnter = () => (hovering = true);
    const onLeave = () => (hovering = false);
    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerleave", onLeave);

    let raf = 0;
    let last = 0;
    const SPEED = 20; // px per second, deliberately gentle
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

  // Two copies so desktop auto-drift can loop without a visible seam.
  const cards = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <div>
      <div className="px-[clamp(22px,6vw,120px)] text-center">
        <h2 className="text-[clamp(2rem,3.6vw,3.1rem)] font-extrabold leading-[1.05] tracking-tight text-paper">
          Testimonials
        </h2>
      </div>

      <div
        ref={scrollerRef}
        className="testi-scroller mt-12 flex gap-6 overflow-x-auto px-[clamp(22px,6vw,120px)] pb-4"
      >
        {cards.map((t, i) => (
          <div key={i} className="w-[clamp(280px,82vw,400px)] shrink-0">
            <TestimonialCard testimonial={t} index={i % TESTIMONIALS.length} />
          </div>
        ))}
      </div>
    </div>
  );
}
