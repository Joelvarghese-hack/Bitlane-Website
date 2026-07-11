import FaqItem from "@/components/faq/FaqItem";

const FAQS = [
  {
    question: "How far in advance should I book my move?",
    answer:
      "We recommend booking two to three weeks ahead, especially through the busy summer season. That said, we keep room open for last minute moves and can often help within a day or two.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We are based in Kingston and serve the Greater Toronto Area, Belleville, Cornwall, Brockville, Ottawa, and Montreal, along with the towns in between. If you are not sure whether we reach you, just give us a call.",
  },
  {
    question: "How is the cost of my move calculated?",
    answer:
      "Your price depends on the size of the move, the distance, and any extras like packing or specialty items. We give you one clear, all inclusive quote up front, so there are no surprises on moving day.",
  },
  {
    question: "Do you offer packing and unpacking?",
    answer:
      "Yes. We can pack part or all of your home with professional grade materials, label every box by room, and unpack at the other end if you would like.",
  },
  {
    question: "Are you available on short notice?",
    answer:
      "Often, yes. We hold some capacity open for urgent and last minute moves. Call us and we will tell you honestly whether we can fit you in.",
  },
  {
    question: "Is Bitlane insured?",
    answer:
      "Yes. We are insured and we handle every item with care. If your building has specific requirements or you need documentation for your move, let us know ahead of time and we will sort it out.",
  },
  {
    question: "What items are you not able to move?",
    answer:
      "For everyone's safety we cannot transport hazardous materials such as propane, flammable liquids, or similar items. Almost everything else is fair game, including specialty pieces like pianos and safes.",
  },
];

export default function Faq() {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-14">
      <div className="lg:sticky lg:top-10 lg:self-start">
        <h2 className="text-[clamp(2rem,3.6vw,3.1rem)] font-extrabold leading-[1.05] tracking-tight text-paper">
          FAQs
        </h2>

        <div className="mt-8 rounded-4xl border border-paper/10 bg-surface p-6">
          <p className="text-sm text-paper/60">Still have questions?</p>
          <p className="mt-1 text-base font-semibold text-paper">
            Call us and get answers in minutes.
          </p>
          <a
            href="tel:+16137701638"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-velocity-red px-6 py-3 text-sm font-bold text-paper shadow-glow transition-all duration-200 hover:bg-crimson-shadow hover:-translate-y-0.5"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 2.5h2.6l1.2 3-1.6 1.2a9.6 9.6 0 0 0 4.1 4.1l1.2-1.6 3 1.2v2.6c0 .6-.5 1-1 1C7 14 2 9 2 3.5c0-.5.4-1 1-1Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
            </svg>
            (613) 770-1638
          </a>
        </div>
      </div>

      <div className="grid gap-3">
        {FAQS.map((faq) => (
          <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}
