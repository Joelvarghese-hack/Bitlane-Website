import type { ReactNode } from "react";
import Spiral from "@/components/decor/Spiral";

const S = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
} as const;

type Feature = { title: string; body: string; tint: string; icon: ReactNode };

const FEATURES: Feature[] = [
  {
    title: "Price Guarantee For You",
    body: "Our upfront pricing means no hidden fees and no surprise charges on moving day. Once we quote a price based on the size and distance of your move, we hold to it.",
    tint: "bg-velocity-red/15 text-velocity-red",
    icon: (
      <svg {...S}>
        <path d="M12 3l7 3v5c0 4.2-2.9 7.4-7 8.5-4.1-1.1-7-4.3-7-8.5V6z" />
        <path d="M12 8.5v7M10 10.2c0-.8.9-1.4 2-1.4s2 .5 2 1.3-.9 1.2-2 1.4-2 .6-2 1.4.9 1.3 2 1.3 2-.6 2-1.4" />
      </svg>
    ),
  },
  {
    title: "Move On Time",
    body: "We have the timing down to a science. Our team arrives prepared, on time, and delivers your belongings safely and on schedule, every single time.",
    tint: "bg-amber-pulse/15 text-amber-pulse",
    icon: (
      <svg {...S}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.2V12l3.2 1.9" />
      </svg>
    ),
  },
  {
    title: "Read Our Reviews",
    body: "Do not just take our word for it. Read our reviews on Google and Yelp, then see why our customers keep coming back and referring their friends to us.",
    tint: "bg-velocity-red/15 text-velocity-red",
    icon: (
      <svg {...S}>
        <path d="M12 3.5l2.5 5 5.5.8-4 3.9.95 5.5L12 16.1 7.05 18.7 8 13.2l-4-3.9 5.5-.8z" />
      </svg>
    ),
  },
  {
    title: "Professional Movers",
    body: "We train our team on the best practices and equip them with the right tools, so your belongings are packed, carried, and moved safely and efficiently.",
    tint: "bg-gold/15 text-gold",
    icon: (
      <svg {...S}>
        <path d="M3 20h4l1.5-4.5" />
        <path d="M14 9.5l2.5 1.5 3-1.8" />
        <path d="M9.5 20l1.2-6.2 3.3 1.5.9 4.7" />
        <circle cx="12.5" cy="5.2" r="1.9" />
        <path d="M10.6 8.2l2-.6 2.2 3" />
      </svg>
    ),
  },
  {
    title: "Premium Customer Service",
    body: "Enjoy first class customer service without a premium price. We are here from start to finish, answering questions and putting your mind at ease.",
    tint: "bg-velocity-red/15 text-velocity-red",
    icon: (
      <svg {...S}>
        <path d="M5 13v-1a7 7 0 0 1 14 0v1" />
        <path d="M4 13.5A1.5 1.5 0 0 1 5.5 12H7v5H5.5A1.5 1.5 0 0 1 4 15.5zM20 13.5A1.5 1.5 0 0 0 18.5 12H17v5h1.5a1.5 1.5 0 0 0 1.5-1.5z" />
        <path d="M19 17v.5a3 3 0 0 1-3 3h-3" />
      </svg>
    ),
  },
  {
    title: "Secure Packing Services",
    body: "We wrap and protect your valuables and furniture with care, following proper packing methods from loading all the way through to unwrapping.",
    tint: "bg-amber-pulse/15 text-amber-pulse",
    icon: (
      <svg {...S}>
        <path d="M12 3l7 3v5c0 4.2-2.9 7.4-7 8.5-4.1-1.1-7-4.3-7-8.5V6z" />
        <path d="M8.5 11l1.5 4 4-6" />
      </svg>
    ),
  },
];

export default function WhyPeopleLoveUs() {
  return (
    <div className="relative">
      <Spiral className="opacity-55" flip />
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full bg-velocity-red/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-velocity-red">
          Our mission
        </span>
        <h2 className="mt-6 text-[clamp(2rem,3.8vw,3.2rem)] font-extrabold leading-[1.04] tracking-tight text-paper">
          Here&apos;s where we come in.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-paper/60">
          Every headache above has a fix built into the way we work. This is the
          standard we hold ourselves to on every single move.
        </p>
      </div>

      <div className="relative z-10 mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => (
          <div key={f.title}>
            <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${f.tint}`}>
              {f.icon}
            </span>
            <h3 className="mt-4 text-lg font-bold text-paper">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-paper/60">{f.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
