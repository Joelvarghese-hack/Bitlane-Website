import type { CSSProperties, ReactNode } from "react";

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
    title: "Upfront, Guaranteed Pricing",
    body: "We believe in honest, transparent pricing. Once we have assessed your move and provided your quote, that is the price you can expect. If your move details change or additional services are requested, we will discuss everything with you beforehand, and never surprise you with unexpected charges on moving day.",
    tint: "bg-velocity-red/15 text-velocity-red",
    icon: (
      <svg {...S}>
        <path d="M12 3l7 3v5c0 4.2-2.9 7.4-7 8.5-4.1-1.1-7-4.3-7-8.5V6z" />
        <path d="M12 8.5v7M10 10.2c0-.8.9-1.4 2-1.4s2 .5 2 1.3-.9 1.2-2 1.4-2 .6-2 1.4.9 1.3 2 1.3 2-.6 2-1.4" />
      </svg>
    ),
  },
  {
    title: "200+ Successful Moves Completed",
    body: "From local household moves to long distance relocations, we have successfully completed 200+ moves, helping families, students, and businesses relocate safely and efficiently. Every move has strengthened our expertise and commitment to delivering exceptional service.",
    tint: "bg-amber-pulse/15 text-amber-pulse",
    icon: (
      <svg {...S}>
        <path d="M3 17V7h11v10M14 10h4l3 3v4h-7" />
        <circle cx="7" cy="17.5" r="1.9" />
        <circle cx="17" cy="17.5" r="1.9" />
      </svg>
    ),
  },
  {
    title: "1,200+ Hours of Professional Experience",
    body: "Our team brings over 1,200 hours of hands on moving experience, using professional moving techniques and industry grade equipment to safely handle furniture, appliances, fragile items, and specialty pieces with care and precision.",
    tint: "bg-gold/15 text-gold",
    icon: (
      <svg {...S}>
        <path d="M9 6h6M9 6v2.5c0 1.7 1 3 3 4.5 2-1.5 3-2.8 3-4.5V6M9 18h6M9 18v-2.5c0-1.7 1-3 3-4.5 2 1.5 3 2.8 3 4.5V18" />
      </svg>
    ),
  },
  {
    title: "12+ Cities Served Across Ontario",
    body: "We have proudly served customers in Kingston, Ottawa, Belleville, Brockville, Cornwall, Toronto, Mississauga, Pickering, Trenton, Peterborough, London, Montreal, and many other communities. Whether you are moving locally or long distance, we are ready to help wherever your next destination may be.",
    tint: "bg-velocity-red/15 text-velocity-red",
    icon: (
      <svg {...S}>
        <path d="M12 21c4.5-4.2 7-7.5 7-11a7 7 0 0 0-14 0c0 3.5 2.5 6.8 7 11z" />
        <circle cx="12" cy="10" r="2.4" />
      </svg>
    ),
  },
  {
    title: "Professional Packing & Furniture Protection",
    body: "Your belongings deserve the highest level of care. We use premium moving blankets, shrink wrap, straps, dollies, and professional moving equipment to protect your furniture throughout the moving process. Full and partial packing services are also available upon request.",
    tint: "bg-amber-pulse/15 text-amber-pulse",
    icon: (
      <svg {...S}>
        <path d="M12 3l7 3v5c0 4.2-2.9 7.4-7 8.5-4.1-1.1-7-4.3-7-8.5V6z" />
        <path d="M8.5 11l1.5 4 4-6" />
      </svg>
    ),
  },
  {
    title: "Reliable, On-Time Service",
    body: "Your time matters. Our team arrives prepared, communicates throughout your move, and works efficiently to keep everything on schedule while maintaining the highest standards of professionalism and care.",
    tint: "bg-gold/15 text-gold",
    icon: (
      <svg {...S}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.2V12l3.2 1.9" />
      </svg>
    ),
  },
  {
    title: "Trusted by Our Customers",
    body: "Our reputation is built on satisfied customers and positive reviews. We invite you to read what our clients have to say and discover why so many people confidently recommend Bitlane Relocations to their friends and family.",
    tint: "bg-velocity-red/15 text-velocity-red",
    icon: (
      <svg {...S}>
        <path d="M12 3.5l2.5 5 5.5.8-4 3.9.95 5.5L12 16.1 7.05 18.7 8 13.2l-4-3.9 5.5-.8z" />
      </svg>
    ),
  },
];

export default function WhyPeopleLoveUs() {
  return (
    <div className="relative">
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="text-[clamp(2rem,4.6vw,3.5rem)] font-extrabold leading-[1.03] tracking-tight text-paper">
          Why homeowners choose Bitlane
        </h2>
      </div>

      <div className="relative z-10 mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <div key={f.title} className="mission-card" style={{ "--i": i } as CSSProperties}>
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
