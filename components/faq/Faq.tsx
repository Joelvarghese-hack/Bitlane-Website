import FaqItem from "@/components/faq/FaqItem";
import ContactLink from "@/components/util/ContactLink";

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
    <div className="mx-auto max-w-3xl">
      <div className="text-center">
        <h2 className="text-[clamp(2rem,3.8vw,3.2rem)] font-extrabold leading-[1.04] tracking-tight text-paper">
          FAQs
        </h2>
        <p className="mt-4 text-base text-paper/60">
          Everything worth knowing before moving day.
        </p>
      </div>

      <div className="mt-10 border-t border-paper/10">
        {FAQS.map((faq) => (
          <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      <p className="mt-9 text-center text-sm text-paper/55">
        Still have questions?{" "}
        <ContactLink
          type="tel"
          value="(613) 770-1638"
          className="font-semibold text-velocity-red transition-colors hover:text-crimson-shadow"
        >
          Call (613) 770-1638
        </ContactLink>
      </p>
    </div>
  );
}
