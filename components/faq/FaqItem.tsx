/**
 * Minimalist native <details> accordion row: no card, just a clean divider
 * line and a rotating plus. Accessible and fully functional without JavaScript.
 */
export default function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="group border-b border-paper/10 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base font-semibold text-paper transition-colors hover:text-velocity-red md:text-lg">
        {question}
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-paper/20 text-velocity-red transition-transform duration-300 group-open:rotate-45">
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </span>
      </summary>
      <p className="pb-6 pr-8 text-sm leading-relaxed text-paper/60 md:text-base">
        {answer}
      </p>
    </details>
  );
}
