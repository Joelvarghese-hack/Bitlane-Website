import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/inner/PageHero";
import Reveal from "@/components/scroll/Reveal";

export const metadata: Metadata = {
  title: "The Process | Bitlane",
  description:
    "Four simple steps from first call to settled in: Consult, Plan, Quote, and Move. One fixed, volume based price locked before we touch a box.",
};

const STEPS = [
  {
    number: "01",
    title: "Consult",
    body: "Tell us what you are moving, where you are starting, and where you are headed. A five minute call or the quote form gives us everything we need. No site visit required for most moves.",
  },
  {
    number: "02",
    title: "Plan",
    body: "We map the route, set the crew size, and book the equipment. Stairs, elevators, parking, and fragile items are all sorted before moving day, so there are no surprises at the door.",
  },
  {
    number: "03",
    title: "Quote",
    body: "One fixed, all inclusive price, priced by the volume your belongings take up rather than their weight, and locked in writing before we touch a single box.",
  },
  {
    number: "04",
    title: "Move",
    body: "We arrive on time, pad and wrap your belongings, load with care, and set you up in your new space. You know exactly when the crew arrives and when you are done.",
  },
];

const STOPS = ["Consult", "Plan", "Quote", "Move"];

function Roadmap() {
  return (
    <div className="overflow-x-auto">
      <svg viewBox="0 0 820 220" className="mx-auto h-auto w-full min-w-[640px] max-w-3xl" role="img" aria-label="Bitlane process roadmap from consult to move">
        {/* dotted route */}
        <path d="M60 120 H760" stroke="#FE4436" strokeWidth="3" strokeDasharray="4 12" strokeLinecap="round" opacity="0.7" />
        {STOPS.map((label, i) => {
          const x = 60 + i * ((760 - 60) / 3);
          return (
            <g key={label}>
              <circle cx={x} cy="120" r="16" fill="#2C2724" stroke="#FE4436" strokeWidth="3" />
              <text x={x} y="126" textAnchor="middle" fontFamily="var(--font-title), system-ui, sans-serif" fontSize="15" fontWeight="800" fill="#FFFFFF">
                {i + 1}
              </text>
              <text x={x} y="170" textAnchor="middle" fontFamily="var(--font-title), system-ui, sans-serif" fontSize="17" fontWeight="700" fill="#FFFFFF">
                {label}
              </text>
            </g>
          );
        })}
        {/* start truck */}
        <g transform="translate(24 96)">
          <rect x="0" y="6" width="30" height="18" rx="2" fill="#FE4436" />
          <path d="M30 10 h7 l6 6 v8 h-13 z" fill="#EFE9DC" />
          <circle cx="9" cy="26" r="4" fill="#0B0B0E" />
          <circle cx="34" cy="26" r="4" fill="#0B0B0E" />
        </g>
        {/* end pin */}
        <g transform="translate(770 92)">
          <path d="M8 0a10 10 0 0 1 10 10c0 7-10 18-10 18S-2 17-2 10A10 10 0 0 1 8 0Z" fill="#FE4436" />
          <circle cx="8" cy="10" r="4" fill="#0B0B0E" />
        </g>
      </svg>
    </div>
  );
}

export default function ProcessPage() {
  return (
    <main>
      <PageHero title="The process" lede="Four simple steps from first call to settled in." />

      <section className="px-[clamp(20px,5vw,88px)] pb-24">
        <Reveal className="mx-auto max-w-3xl">
          <ol className="relative ml-3 border-l-2 border-paper/15">
            {STEPS.map((step) => (
              <li key={step.number} className="relative pb-12 pl-10 last:pb-0">
                <span className="absolute -left-[21px] top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-velocity-red bg-ink text-sm font-extrabold text-paper">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold text-paper md:text-2xl">{step.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-paper/70">{step.body}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="mx-auto mt-20 max-w-4xl">
          <div className="rounded-4xl border border-paper/10 bg-surface p-8 md:p-10">
            <h2 className="text-center text-xl font-bold text-paper md:text-2xl">
              Your move, start to finish
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-center text-sm text-paper/60">
              From the first call to the last box, here is the road we travel with you.
            </p>
            <div className="mt-8">
              <Roadmap />
            </div>
          </div>
        </Reveal>

        <Reveal className="mx-auto mt-14 max-w-3xl">
          <Link
            href="/#quote"
            className="inline-flex items-center justify-center rounded-full bg-velocity-red px-7 py-3.5 text-sm font-bold text-paper shadow-glow transition-all duration-200 hover:bg-crimson-shadow hover:-translate-y-0.5"
          >
            Get a free quote
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
