import type { Metadata } from "next";
import Link from "next/link";
import { QUOTE_EMAIL } from "@/lib/formSubmit";

export const metadata: Metadata = {
  title: "Terms and Conditions | Bitlane",
  description:
    "The terms that govern Bitlane moving services in Ontario and Quebec, including quotes, pricing, liability, claims, and your consumer rights.",
};

const LAST_UPDATED = "July 11, 2026";

function Section({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold text-paper md:text-2xl">{heading}</h2>
      <div className="mt-3 space-y-4 text-[0.95rem] leading-relaxed text-paper/70">
        {children}
      </div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <main className="px-[clamp(20px,5vw,88px)] pb-24 pt-16 md:pt-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-[clamp(2.4rem,5vw,3.6rem)] font-extrabold leading-[1.05] tracking-tight text-paper">
          Terms and Conditions
        </h1>
        <p className="mt-4 text-sm text-paper/50">Last updated: {LAST_UPDATED}</p>

        <div className="mt-8 rounded-4xl border border-paper/10 bg-surface p-7 md:p-10">
          <p className="text-[0.95rem] leading-relaxed text-paper/70">
            These Terms and Conditions (the &quot;Terms&quot;) govern the moving
            and related services provided by Bitlane (&quot;Bitlane&quot;,
            &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), a moving company
            based in Kingston, Ontario and serving customers across Ontario and
            Quebec. By requesting a quote, booking a move, or using our services,
            you (the &quot;Customer&quot;, &quot;you&quot;, or &quot;your&quot;)
            agree to these Terms. Please read them carefully. Nothing in these
            Terms limits any right you have under the Ontario Consumer Protection
            Act, the Quebec Consumer Protection Act, or any other law that applies
            to you and cannot be waived by agreement.
          </p>

          <Section heading="1. Our services">
            <p>
              Bitlane provides residential, commercial, and specialty moving,
              along with packing, labour only help, junk removal, and related
              services as described on our website or in your quote. The specific
              services we will provide, and their price, are set out in the quote
              we give you and any written confirmation of your booking.
            </p>
          </Section>

          <Section heading="2. Quotes, estimates, and pricing">
            <p>
              We provide a quote based on the information you give us about your
              move, including the size of the move, the distance, access at each
              location, and any special items or services. Our quotes are
              intended to be clear and all inclusive for the services described.
            </p>
            <p>
              Where a quote is provided as an estimate for services in Ontario, we
              will not charge you an amount that exceeds the estimate by more than
              ten percent, in keeping with the Ontario Consumer Protection Act,
              unless you agree in advance to a change. If the scope of your move
              changes, for example if the inventory, access, or services differ
              from what you told us, we will discuss any adjustment with you and
              agree on a revised price before we proceed. Comparable protections
              for estimates and price disclosure apply to moves governed by Quebec
              law.
            </p>
            <p>
              Prices are quoted in Canadian dollars and, unless stated otherwise,
              do not include applicable taxes, which will be added where required.
            </p>
          </Section>

          <Section heading="3. Booking, deposits, and confirmation">
            <p>
              Your move is confirmed once we have agreed on the date, the scope,
              and the price, and you have accepted the booking. We may ask for a
              deposit to hold your date. Any deposit will be applied to the final
              amount owing for your move. We will tell you in advance if a deposit
              is required and how it is treated.
            </p>
          </Section>

          <Section heading="4. Cancellation and rescheduling">
            <p>
              If you need to cancel or reschedule, please contact us as early as
              possible. We will make reasonable efforts to accommodate changes. Any
              cancellation charge or deposit treatment will be fair, disclosed to
              you before you book, and consistent with your rights under applicable
              consumer protection law. We may cancel or reschedule a move for
              reasons beyond our reasonable control, in which case we will work with
              you to find a new date or provide a refund of any amount you have paid
              for services not provided.
            </p>
          </Section>

          <Section heading="5. Payment">
            <p>
              Payment is due as set out in your quote or booking confirmation,
              normally on completion of the move unless we agree otherwise. We will
              tell you which payment methods we accept. We do not collect or store
              payment card details through this website.
            </p>
          </Section>

          <Section heading="6. Your responsibilities">
            <p>You agree to:</p>
            <ul className="ml-5 list-disc space-y-2 marker:text-amber-pulse">
              <li>
                Give us accurate and complete information about your move, including
                the inventory, access, stairs, elevators, and parking at both
                locations.
              </li>
              <li>
                Arrange safe and legal access and parking for our crew and vehicle,
                and obtain any building permits, elevator bookings, or certificates
                of insurance your building requires.
              </li>
              <li>
                Be present, or have an authorized adult present, at pickup and
                delivery, and be reachable during the move.
              </li>
              <li>
                Prepare your belongings appropriately, and tell us in advance about
                fragile, high value, or specialty items so we can handle them
                correctly.
              </li>
            </ul>
          </Section>

          <Section heading="7. Items we cannot move">
            <p>
              For the safety of everyone involved, we cannot transport hazardous or
              dangerous materials, including propane, gasoline, flammable liquids,
              corrosives, ammunition, or similar items. We also ask that you carry
              cash, jewellery, important documents, medication, and irreplaceable
              items with you rather than including them in the move. We are not
              responsible for prohibited items that are moved without our knowledge.
            </p>
          </Section>

          <Section heading="8. Care of your belongings, liability, and valuation">
            <p>
              We handle your belongings with care and train our team to move them
              safely. In the unlikely event of loss or damage that is our
              responsibility, our liability is determined by the level of coverage
              or valuation that applies to your move, which we will explain to you
              before your move. Additional protection may be available, and you may
              choose a higher level of valuation.
            </p>
            <p>
              To the extent permitted by law, we are not responsible for: items you
              packed yourself where the loss results from the packing; ordinary wear;
              pre existing damage; goods of extraordinary value that were not
              declared to us in advance; or loss or damage caused by events beyond
              our reasonable control. Nothing in this section reduces any
              non waivable right or remedy you have under the Ontario Consumer
              Protection Act, the Quebec Consumer Protection Act, or other applicable
              law.
            </p>
          </Section>

          <Section heading="9. Claims">
            <p>
              If you need to make a claim for loss or damage, please notify us in
              writing as soon as possible and no later than any period stated in your
              move documents or required by law, and give us a reasonable
              opportunity to inspect the items. We will handle claims promptly and
              in good faith. Keeping the damaged item and its packaging helps us
              assess the claim.
            </p>
          </Section>

          <Section heading="10. Delays and events beyond our control">
            <p>
              We aim to arrive and deliver on schedule. Some things are outside our
              control, such as severe weather, road or traffic conditions,
              mechanical failure, or access problems at a location. We are not liable
              for delays caused by these events, and we will keep you informed and do
              our best to complete your move as planned.
            </p>
          </Section>

          <Section heading="11. Storage">
            <p>
              Where we provide storage, the items are held in a secure facility and
              additional terms, including storage fees and access arrangements, will
              be provided to you. Storage charges are payable as agreed.
            </p>
          </Section>

          <Section heading="12. Complaints and your consumer rights">
            <p>
              If something goes wrong, please contact us first so we can put it right.
              We take complaints seriously and will work with you toward a fair
              resolution. You keep all rights available to you as a consumer,
              including under the Ontario Consumer Protection Act for moves in
              Ontario and the Quebec Consumer Protection Act for moves in Quebec.
              These Terms do not take away those rights.
            </p>
          </Section>

          <Section heading="13. Governing law">
            <p>
              These Terms are governed by the laws of the province in which the
              services are primarily provided, being Ontario or Quebec, and by the
              federal laws of Canada that apply there. Any dispute will be dealt with
              by the courts of that province, without affecting any right you have to
              bring a matter before a consumer tribunal or authority.
            </p>
          </Section>

          <Section heading="14. Changes to these Terms">
            <p>
              We may update these Terms from time to time. The version that applies to
              your move is the version in effect when you book. When we make changes,
              we will update the date at the top of this page.
            </p>
          </Section>

          <Section heading="15. Contact us">
            <p>Questions about these Terms can be directed to us:</p>
            <ul className="ml-5 list-disc space-y-2 marker:text-amber-pulse">
              <li>
                Phone:{" "}
                <a href="tel:+16137701638" className="font-semibold text-amber-pulse hover:text-paper">
                  (613) 770-1638
                </a>
              </li>
              <li>
                Email:{" "}
                <a href={`mailto:${QUOTE_EMAIL}`} className="font-semibold text-amber-pulse hover:text-paper">
                  {QUOTE_EMAIL}
                </a>
              </li>
              <li>Location: Kingston, Ontario, Canada</li>
            </ul>
            <p className="text-sm text-paper/45">
              This page is provided for general information and does not constitute
              legal advice.
            </p>
          </Section>
        </div>

        <div className="mt-8 flex items-center justify-between text-sm text-paper/45">
          <p>© 2026 Bitlane. All rights reserved.</p>
          <Link href="/" className="transition-colors hover:text-amber-pulse">
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
