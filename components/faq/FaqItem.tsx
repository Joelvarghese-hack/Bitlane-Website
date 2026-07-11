/**
 * Native <details> accordion item: accessible and fully functional without
 * JavaScript, styled to match the dark theme.
 */
export default function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="group rounded-3xl border border-paper/10 bg-surface px-6 py-1 transition-colors duration-200 open:border-paper/20 open:bg-surface-2 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base font-semibold text-paper md:text-lg">
        {question}
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-paper/15 text-amber-pulse transition-transform duration-300 group-open:rotate-45">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </span>
      </summary>
      <p className="pb-5 pr-10 text-sm leading-relaxed text-paper/65 md:text-base">
        {answer}
      </p>
    </details>
  );
}
