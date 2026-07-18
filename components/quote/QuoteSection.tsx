import QuoteForm from "@/components/quote/QuoteForm";
import ContactLink from "@/components/util/ContactLink";

const POINTS = [
  "One clear, all inclusive price agreed up front",
  "Licensed, insured, and careful with every item",
  "Fast, friendly replies and easy booking",
  "Serving Kingston, the GTA, Ottawa, and Montreal",
];

export default function QuoteSection() {
  return (
    <div className="overflow-hidden rounded-5xl border border-paper/10 bg-surface shadow-panel">
      <div className="grid lg:grid-cols-2">
        {/* left: pitch + contact */}
        <div className="p-8 md:p-12">
          <div>
            <h2 className="text-[clamp(2rem,3.4vw,3rem)] font-extrabold leading-[1.05] tracking-tight text-paper">
              Get your free quote
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-paper/65">
              Tell us where you are moving from and to, and we will put together
              an upfront price with no obligation. Prefer to talk it through?
              Call us any time.
            </p>

            <ul className="mt-8 grid gap-3">
              {POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-paper/75">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="mt-0.5 shrink-0">
                    <circle cx="10" cy="10" r="9" stroke="#FE4436" strokeWidth="1.4" />
                    <path d="M6 10.2l2.6 2.6L14 7.5" stroke="#FE4436" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              <ContactLink
                type="tel"
                value="(613) 770-1638"
                className="inline-flex items-center gap-2 text-lg font-bold text-paper transition-colors hover:text-amber-pulse"
              >
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 2.5h2.6l1.2 3-1.6 1.2a9.6 9.6 0 0 0 4.1 4.1l1.2-1.6 3 1.2v2.6c0 .6-.5 1-1 1C7 14 2 9 2 3.5c0-.5.4-1 1-1Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                </svg>
                (613) 770-1638
              </ContactLink>
              <span className="text-sm text-paper/50">We reply fast, often within the hour</span>
            </div>
          </div>
        </div>

        {/* right: the form */}
        <div className="border-t border-paper/10 bg-surface-2/70 p-8 md:p-12 lg:border-l lg:border-t-0">
          <QuoteForm variant="full" submitLabel="Get my free quote" />
        </div>
      </div>
    </div>
  );
}
