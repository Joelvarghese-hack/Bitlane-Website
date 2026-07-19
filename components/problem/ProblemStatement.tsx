import Spiral from "@/components/decor/Spiral";

/**
 * Problem section. The headline stays pinned in the centre (sticky) while the
 * individual pain-point tiles scroll up past it, scattered left and right. Pure
 * CSS scroll — the page never pauses. Each tile is its own dark box with an
 * orange X and its text stacked. Leads straight into the mission section.
 */
const PAINS = [
  { text: "Quotes that balloon on moving day", top: "15%", side: "left", off: "3%" },
  { text: "Movers who show up late, or never", top: "29%", side: "right", off: "3%" },
  { text: "Scratched walls and broken furniture", top: "45%", side: "left", off: "7%" },
  { text: "Hidden fees buried in the fine print", top: "60%", side: "right", off: "6%" },
  { text: "Boxes tossed around with zero care", top: "76%", side: "left", off: "4%" },
  { text: "Getting ghosted when you have a question", top: "90%", side: "right", off: "4%" },
] as const;

export default function ProblemStatement() {
  return (
    <section className="relative h-[200vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-6">
        <Spiral className="opacity-70" />
        <h2 className="relative z-10 max-w-4xl text-center text-[clamp(2rem,6.4vw,4.4rem)] font-extrabold leading-[1.02] tracking-tight text-paper">
          Moving day shouldn&apos;t be a{" "}
          <span className="text-velocity-red">mess</span>.
        </h2>
      </div>

      <div className="pointer-events-none absolute inset-0 z-20">
        {PAINS.map((p) => (
          <div
            key={p.text}
            className="absolute w-[clamp(188px,62vw,260px)] rounded-2xl bg-surface/90 p-5 shadow-panel ring-1 ring-white/5 backdrop-blur-sm"
            style={
              p.side === "left"
                ? { top: p.top, left: p.off }
                : { top: p.top, right: p.off }
            }
          >
            <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-velocity-red text-paper">
              <svg width="13" height="13" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            <p className="text-base font-bold leading-snug text-paper md:text-lg">
              {p.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
