import type { Metadata } from "next";
import PageHero from "@/components/inner/PageHero";
import QuoteForm from "@/components/quote/QuoteForm";
import ContactLink from "@/components/util/ContactLink";
import { QUOTE_EMAIL } from "@/lib/formSubmit";

export const metadata: Metadata = {
  title: "Contact | Bitlane",
  description:
    "Call, email, or send the quote form. Bitlane responds fast, often within the hour.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Contact"
        lede="Call, email, or send the form. We respond within a few hours."
      />
      <section className="px-[clamp(20px,5vw,88px)] pb-16 md:pb-24">
        <div className="mx-auto max-w-2xl">
          <ul className="grid gap-3 text-sm md:grid-cols-2">
            <li>
              <ContactLink type="tel" value="(613) 770-1638" toastAbove={false} className="inline-block font-semibold text-paper transition-colors hover:text-amber-pulse">
                (613) 770-1638
              </ContactLink>
            </li>
            <li>
              <ContactLink type="email" value={QUOTE_EMAIL} toastAbove={false} className="inline-block break-all font-semibold text-paper transition-colors hover:text-amber-pulse">
                {QUOTE_EMAIL}
              </ContactLink>
            </li>
            <li className="text-paper/65">Mon to Fri: 8:00 AM to 6:00 PM</li>
            <li className="text-paper/65">Sat and Sun: 8:00 AM to 5:00 PM</li>
            <li className="text-paper/65 md:col-span-2">Kingston, Ontario, Canada</li>
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
