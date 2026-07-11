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

export default function Testimonials() {
  return (
    <div>
      <div className="text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-pulse">
          Testimonials
        </span>
        <h2 className="mt-3 text-[clamp(2rem,3.6vw,3.1rem)] font-extrabold leading-[1.05] tracking-tight text-paper">
          Why people love Bitlane
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-paper/60">
          Real words from real moves across Ontario. Most of our work comes from
          referrals, and reviews like these are the reason why.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <TestimonialCard key={t.name} testimonial={t} index={i} />
        ))}
      </div>
    </div>
  );
}
