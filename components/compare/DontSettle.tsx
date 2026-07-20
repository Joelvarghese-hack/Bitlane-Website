/**
 * "Don't settle for less" comparison. Two cards: a muted "Other companies" card
 * and a highlighted "Bitlane" card that overlaps it. On hover, the Bitlane card
 * eases forward and nudges the other aside; hovering the other slides Bitlane's
 * card aside so both read cleanly. (Hover behaviour in globals.css.)
 */
const OTHERS = [
  "Prices that change on the day",
  "Movers who run late",
  "Careless handling",
  "Surprise add-on fees",
  "Hard to reach when it matters",
];

const OURS = [
  "One upfront, all-inclusive price",
  "On time, every single move",
  "Trained, careful crews",
  "No hidden fees, ever",
  "Fast, friendly support",
];

/** Green-ish tick for Bitlane's list. */
function Check() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink text-paper">
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path d="M2.5 6.2l2.3 2.3L9.5 3.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

/** Red X cross for the "other companies" list, to contrast with our ticks. */
function Cross() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-velocity-red/15 text-velocity-red">
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path d="M3.2 3.2l5.6 5.6M8.8 3.2l-5.6 5.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export default function DontSettle() {
  return (
    <div>
      <h2 className="text-center text-[clamp(2rem,4.6vw,3.5rem)] font-extrabold leading-[1.03] tracking-tight text-paper">
        Don&apos;t settle for less.
      </h2>

      <div className="ds-cards mt-12 flex flex-col items-stretch justify-center gap-5 md:flex-row md:items-center md:gap-0">
        <div className="ds-card ds-other w-full rounded-4xl border border-paper/10 bg-surface p-7 md:max-w-sm md:p-9">
          <p className="text-lg font-bold text-paper/70">Other companies</p>
          <ul className="mt-6 space-y-3.5">
            {OTHERS.map((o) => (
              <li key={o} className="flex items-start gap-3 text-sm text-paper/55 md:text-base">
                <Cross />
                {o}
              </li>
            ))}
          </ul>
        </div>

        <div className="ds-card ds-bitlane w-full rounded-4xl bg-velocity-red p-7 text-ink shadow-panel md:max-w-md md:p-10">
          <p className="text-xl font-extrabold tracking-tight">Bitlane</p>
          <ul className="mt-6 space-y-3.5">
            {OURS.map((o) => (
              <li key={o} className="flex items-start gap-3 text-sm font-semibold md:text-base">
                <Check />
                {o}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
