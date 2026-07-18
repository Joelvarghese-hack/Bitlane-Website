import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | Bitlane",
  description:
    "Thanks for reaching out to Bitlane. We will be in touch shortly about your move.",
};

export default function ThankYouPage() {
  return (
    <main className="flex min-h-[72vh] items-center justify-center px-[clamp(20px,5vw,88px)] py-24">
      <div className="mx-auto w-full max-w-2xl text-center">
        <span
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-velocity-red/15 ring-1 ring-velocity-red/40"
          aria-hidden="true"
        >
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12.5l4.2 4.3L19 7"
              stroke="#FE4436"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        <h1 className="mt-8 text-[clamp(1.8rem,4.4vw,3rem)] font-extrabold uppercase leading-[1.08] tracking-tight text-paper">
          Thank you for your message, we&apos;ll message you within 24 hrs.
        </h1>

        <p className="mt-5 text-base leading-relaxed text-paper/65">
          Your details are on their way to our team. If it is urgent, you are
          always welcome to call us and we will pick up the thread right away.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-velocity-red px-8 py-3.5 text-sm font-bold text-paper shadow-glow transition-all duration-200 hover:bg-crimson-shadow hover:-translate-y-0.5"
          >
            Back to home
          </Link>
          <a
            href="tel:+16137701638"
            className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-8 py-3.5 text-sm font-semibold text-paper transition-all duration-200 hover:border-amber-pulse hover:text-amber-pulse"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 2.5h2.6l1.2 3-1.6 1.2a9.6 9.6 0 0 0 4.1 4.1l1.2-1.6 3 1.2v2.6c0 .6-.5 1-1 1C7 14 2 9 2 3.5c0-.5.4-1 1-1Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
            </svg>
            (613) 770-1638
          </a>
        </div>
      </div>
    </main>
  );
}
