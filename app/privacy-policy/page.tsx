import type { Metadata } from "next";
import Link from "next/link";
import ContactLink from "@/components/util/ContactLink";
import { QUOTE_EMAIL } from "@/lib/formSubmit";

export const metadata: Metadata = {
  title: "Privacy Policy | Bitlane",
  description:
    "How Bitlane collects, uses, protects, and shares personal information, in line with Canadian and Ontario privacy law.",
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

export default function PrivacyPolicyPage() {
  return (
    <main className="px-[clamp(20px,5vw,88px)] pb-24 pt-16 md:pt-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-[clamp(2.4rem,5vw,3.6rem)] font-extrabold leading-[1.05] tracking-tight text-paper">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-paper/50">Last updated: {LAST_UPDATED}</p>

        <div className="mt-8 rounded-4xl border border-paper/10 bg-surface p-7 md:p-10">
          <p className="text-[0.95rem] leading-relaxed text-paper/70">
            Bitlane (&quot;Bitlane&quot;, &quot;we&quot;, &quot;us&quot;, or
            &quot;our&quot;) is a moving company based in Kingston, Ontario,
            serving customers across Ontario and into Quebec. We respect your
            privacy and are committed to protecting the personal information you
            share with us. This policy explains what we collect, why we collect
            it, how we use and safeguard it, and the choices you have. We handle
            personal information in accordance with the federal Personal
            Information Protection and Electronic Documents Act (PIPEDA), the
            Quebec Act respecting the protection of personal information in the
            private sector (commonly known as Law 25), and applicable Ontario and
            Quebec consumer protection law, together with Canada&apos;s Anti-Spam
            Legislation (CASL). Where you deal with us in Quebec, the Quebec law
            and the rights it gives you apply to your personal information.
          </p>

          <Section heading="Information we collect">
            <p>
              We collect only the information we need to provide you with an
              accurate quote and a smooth move. Depending on how you interact
              with us, this may include:
            </p>
            <ul className="ml-5 list-disc space-y-2 marker:text-amber-pulse">
              <li>Your name, phone number, and email address.</li>
              <li>Your pick up and drop off locations, including addresses.</li>
              <li>
                Details about your move, such as the size of your home, the
                moving date, inventory notes, and any special handling requests.
              </li>
              <li>
                How you heard about us, and any messages you send through our
                quote form, by email, by text, or over the phone.
              </li>
              <li>
                Basic technical information collected automatically when you
                visit our website, such as your device type and general usage,
                where analytics are in use.
              </li>
            </ul>
            <p>
              We do not ask for or store payment card numbers through this
              website. Any payment is arranged separately and securely.
            </p>
          </Section>

          <Section heading="How we use your information">
            <p>We use the personal information you provide to:</p>
            <ul className="ml-5 list-disc space-y-2 marker:text-amber-pulse">
              <li>Prepare and send you a quote for your move.</li>
              <li>Schedule, plan, and carry out the services you request.</li>
              <li>
                Communicate with you about your quote, your booking, and your
                move, including confirmations and updates.
              </li>
              <li>Respond to your questions and provide customer support.</li>
              <li>
                Meet our legal, insurance, and accounting obligations, and
                improve the quality of our service.
              </li>
            </ul>
          </Section>

          <Section heading="Consent">
            <p>
              By submitting our quote form or otherwise providing your
              information, you consent to our collection and use of that
              information for the purposes described in this policy. You may
              withdraw your consent at any time, subject to legal and
              contractual limits, by contacting us using the details below.
              Withdrawing consent may affect our ability to provide you with a
              quote or service.
            </p>
          </Section>

          <Section heading="Calls and text messages">
            <p>
              When you request a quote, you agree that we may contact you by
              phone call or text message about that request and your move. We
              only reach out about matters related to your service. We do not
              sell your phone number, and we do not use it for outside marketing
              or share it with third parties for their own marketing. You can ask
              us to stop contacting you at any time, and standard message and
              data rates from your carrier may apply.
            </p>
          </Section>

          <Section heading="How we share information">
            <p>
              We do not sell or rent your personal information. We may share it
              only in limited circumstances:
            </p>
            <ul className="ml-5 list-disc space-y-2 marker:text-amber-pulse">
              <li>
                With trusted service providers who help us operate our business,
                such as scheduling, communication, or payment tools, and only to
                the extent needed to perform their work.
              </li>
              <li>
                Where required by law, regulation, legal process, or a valid
                government request.
              </li>
              <li>
                To protect the rights, safety, or property of Bitlane, our
                customers, or others.
              </li>
            </ul>
            <p>
              Any provider that handles personal information on our behalf is
              expected to protect it and use it only for the agreed purpose.
            </p>
          </Section>

          <Section heading="Cookies and website analytics">
            <p>
              Our website may use cookies and similar technologies to keep the
              site working and, where enabled, to understand how visitors use it
              so we can improve it. You can control cookies through your browser
              settings. Turning off cookies may affect how some parts of the site
              function.
            </p>
          </Section>

          <Section heading="How long we keep your information">
            <p>
              We keep personal information only for as long as it is needed for
              the purposes described in this policy, or as required to meet legal,
              insurance, tax, and accounting obligations. When it is no longer
              needed, we take reasonable steps to securely delete or anonymize it.
            </p>
          </Section>

          <Section heading="How we protect your information">
            <p>
              We use reasonable physical, organizational, and technological
              safeguards to protect your personal information against loss, theft,
              and unauthorized access, use, or disclosure. While no method of
              transmission or storage is completely secure, we work to keep your
              information safe and to limit access to those who need it to serve
              you.
            </p>
          </Section>

          <Section heading="Your rights">
            <p>
              Subject to certain legal exceptions, you have the right to ask
              whether we hold personal information about you, to access that
              information, and to request a correction if it is inaccurate or
              incomplete. You may also withdraw your consent to our continued use
              of your information. To make a request, contact us using the details
              below. We will respond within a reasonable time and in line with
              applicable law.
            </p>
            <p>
              If you have a concern we cannot resolve, you may contact the Office
              of the Privacy Commissioner of Canada, or, in Quebec, the Commission
              d&apos;acces a l&apos;information du Quebec.
            </p>
          </Section>

          <Section heading="Quebec residents (Law 25)">
            <p>
              If you deal with us in Quebec, the Act respecting the protection of
              personal information in the private sector (Law 25) applies and gives
              you additional protections:
            </p>
            <ul className="ml-5 list-disc space-y-2 marker:text-amber-pulse">
              <li>
                We obtain your free and informed consent before collecting, using,
                or sharing your personal information, and we tell you the purposes at
                or before the time of collection.
              </li>
              <li>
                You may request access to, and correction of, your personal
                information, ask us to stop sharing it, and in certain cases ask us
                to delete or de index information about you.
              </li>
              <li>
                Where technically possible, you may ask to receive the computerized
                personal information you have provided to us in a structured, commonly
                used format (data portability).
              </li>
              <li>
                Before transferring personal information outside Quebec, we assess
                whether it will receive adequate protection.
              </li>
              <li>
                In the event of a confidentiality incident that presents a risk of
                serious harm, we will notify the affected individuals and the
                Commission d&apos;acces a l&apos;information as required, and keep a
                record of the incident.
              </li>
            </ul>
            <p>
              We have designated a person responsible for the protection of personal
              information within Bitlane. You can reach that person using the contact
              details at the end of this policy.
            </p>
          </Section>

          <Section heading="Third party links">
            <p>
              Our website or messages may include links to other websites we do
              not operate. We are not responsible for the privacy practices of
              those sites, and we encourage you to review their policies before
              sharing your information.
            </p>
          </Section>

          <Section heading="Children">
            <p>
              Our services are directed to adults arranging a move. We do not
              knowingly collect personal information from children. If you
              believe a child has provided us with personal information, please
              contact us and we will take appropriate steps to remove it.
            </p>
          </Section>

          <Section heading="Changes to this policy">
            <p>
              We may update this policy from time to time to reflect changes in
              our practices or the law. When we do, we will revise the date at the
              top of this page. We encourage you to review this policy
              periodically so you stay informed about how we protect your
              information.
            </p>
          </Section>

          <Section heading="Contact us">
            <p>
              If you have questions about this policy or about how we handle your
              personal information, or if you would like to access or correct your
              information, please reach out:
            </p>
            <ul className="ml-5 list-disc space-y-2 marker:text-amber-pulse">
              <li>
                Phone:{" "}
                <ContactLink type="tel" value="(613) 770-1638" toastAbove={false} className="inline-block font-semibold text-amber-pulse hover:text-paper">
                  (613) 770-1638
                </ContactLink>
              </li>
              <li>
                Email:{" "}
                <ContactLink type="email" value={QUOTE_EMAIL} toastAbove={false} className="inline-block break-all font-semibold text-amber-pulse hover:text-paper">
                  {QUOTE_EMAIL}
                </ContactLink>
              </li>
              <li>Location: Kingston, Ontario, Canada</li>
            </ul>
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
