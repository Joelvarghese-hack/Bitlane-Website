import type { Metadata } from "next";
import PageHero from "@/components/inner/PageHero";
import QuoteForm from "@/components/quote/QuoteForm";
import { QUOTE_EMAIL } from "@/lib/formSubmit";

export const metadata: Metadata = {
  title: "Contact | Bitlane",
  description:
    "Call, email, or send the quote form. Bitlane is open 24 hours and responds fast, often within the hour.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Contact"
        lede="Call, email, or send the form. We respond within a few hours."
      />
      <section className="px-6 pb-16 md:pb-24">
        <div className="mx-auto max-w-2xl">
          <ul className="grid gap-3 text-sm md:grid-cols-2">
            <li>
              <a
                href="tel:+16137701638"
                className="font-semibold text-paper transition-colors hover:text-amber-pulse"
              >
                (613) 770-1638
              </a>
            </li>
            <li>
              <a
                href={`mailto:${QUOTE_EMAIL}`}
                className="break-all font-semibold text-paper transition-colors hover:text-amber-pulse"
              >
                {QUOTE_EMAIL}
              </a>
            </li>
            <li className="text-paper/65">Open 24 hours</li>
            <li className="text-paper/65">Kingston, Ontario, Canada</li>
          </ul>
          <div className="mt-10 rounded-4xl border border-paper/10 bg-surface p-6 md:p-8">
            <h2 className="text-xl font-extrabold tracking-tight text-paper">
              Send us the details
            </h2>
            <p className="mt-1.5 text-sm text-paper/60">
              Fill in the form and we will get back to you with an upfront price.
            </p>
            <div className="mt-6">
              <QuoteForm variant="full" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
