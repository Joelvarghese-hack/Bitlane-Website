import Link from "next/link";
import LogoLockup from "@/components/nav/LogoLockup";
import ContactLink from "@/components/util/ContactLink";
import { QUOTE_EMAIL } from "@/lib/formSubmit";
import { SERVICES } from "@/lib/services";

const COMPANY_LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

const FOOTER_SERVICES = SERVICES.slice(0, 5);

// Placeholder links until real handles are supplied.
const SOCIALS: { label: string; href: string; icon: React.ReactNode }[] = [
  { label: "Facebook", href: "#", icon: <path d="M13.5 21v-7h2.3l.4-2.7h-2.7V9.5c0-.8.2-1.3 1.4-1.3H16V5.8c-.3 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5v1.9H8.2V14h2.4v7z" /> },
  { label: "X", href: "#", icon: <path d="M17.5 4h2.6l-5.7 6.5L21 20h-5.3l-4.1-5.4L6.8 20H4.2l6.1-7L4 4h5.4l3.7 4.9zm-.9 14.4h1.4L8.4 5.5H6.9z" /> },
  { label: "LinkedIn", href: "#", icon: <path d="M6.9 8.8V19H3.7V8.8zM5.3 4.3a1.9 1.9 0 1 1 0 3.7 1.9 1.9 0 0 1 0-3.7zM9 8.8h3.1v1.4h.05c.43-.8 1.5-1.7 3.05-1.7 3.25 0 3.85 2.1 3.85 4.9V19h-3.2v-4.9c0-1.2 0-2.7-1.65-2.7s-1.9 1.3-1.9 2.6V19H9z" /> },
  { label: "Instagram", href: "#", icon: <><rect x="4" y="4" width="16" height="16" rx="4.5" fill="none" stroke="currentColor" strokeWidth="1.7" /><circle cx="12" cy="12" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.7" /><circle cx="16.4" cy="7.6" r="1.1" /></> },
];

export default function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-[#08080A]">
      <div className="mx-auto max-w-7xl px-[clamp(20px,5vw,88px)] py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* brand */}
          <div className="sm:col-span-2 lg:col-span-4">
            <LogoLockup size="lg" />
            <p className="mt-5 max-w-sm text-lg font-semibold leading-snug text-paper">
              We believe a stress-free move should be within everyone&apos;s reach.
            </p>
            <ContactLink
              type="tel"
              value="(613) 770-1638"
              toastAbove={false}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-paper/20 px-6 py-3 text-sm font-bold text-paper transition-colors hover:border-amber-pulse hover:text-amber-pulse"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 2.5h2.6l1.2 3-1.6 1.2a9.6 9.6 0 0 0 4.1 4.1l1.2-1.6 3 1.2v2.6c0 .6-.5 1-1 1C7 14 2 9 2 3.5c0-.5.4-1 1-1Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
              </svg>
              (613) 770-1638
            </ContactLink>

            {/* social */}
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/15 text-paper/70 transition-colors hover:border-amber-pulse hover:text-amber-pulse"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>

            {/* trust badges, stacked, under the social icons (BBB is a placeholder;
                supply the official asset and real license, and confirm accreditation) */}
            <div className="mt-6 flex max-w-xs flex-col gap-3">
              <span className="inline-flex items-center gap-2.5 rounded-xl border border-paper/15 bg-surface px-4 py-2.5">
                <span className="flex h-8 w-11 items-center justify-center rounded-md bg-[#0b3c8c] text-[0.7rem] font-extrabold tracking-tight text-white">
                  BBB
                </span>
                <span className="leading-tight">
                  <span className="block text-xs font-bold text-paper">Accredited Business</span>
                  <span className="block text-[0.65rem] text-paper/45">Rating A+</span>
                </span>
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl border border-paper/15 bg-surface px-4 py-2.5 text-xs text-paper/60">
                <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M10 1.7l7 3v5c0 4.2-3 7.4-7 8.6-4-1.2-7-4.4-7-8.6v-5z" stroke="#F4A261" strokeWidth="1.4" strokeLinejoin="round" />
                  <path d="M6.6 10.2l2.2 2.2 4.4-4.6" stroke="#F4A261" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Licensed and insured · License No. 0000-0000
              </span>
            </div>
          </div>

          {/* company */}
          <nav aria-label="Company" className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-paper/45">Company</p>
            <ul className="mt-4 grid gap-3 text-sm">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-paper/70 transition-colors hover:text-amber-pulse">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* services */}
          <nav aria-label="Services" className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-paper/45">Services</p>
            <ul className="mt-4 grid gap-3 text-sm">
              {FOOTER_SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services#${service.slug}`} className="text-paper/70 transition-colors hover:text-amber-pulse">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* contact + hours */}
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-paper/45">Main office</p>
            <ul className="mt-4 grid gap-2.5 text-sm">
              <li className="text-paper/70">Kingston, Ontario, Canada</li>
              <li>
                <ContactLink type="tel" value="(613) 770-1638" toastAbove={false} className="inline-block font-semibold text-paper/85 transition-colors hover:text-amber-pulse">
                  (613) 770-1638
                </ContactLink>
              </li>
              <li>
                <ContactLink type="email" value={QUOTE_EMAIL} toastAbove={false} className="inline-block break-all text-paper/70 transition-colors hover:text-amber-pulse">
                  {QUOTE_EMAIL}
                </ContactLink>
              </li>
            </ul>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-paper/45">Hours</p>
            <ul className="mt-3 grid gap-1.5 text-sm text-paper/70">
              <li>Mon to Fri: 8:00 AM to 6:00 PM</li>
              <li>Sat and Sun: 8:00 AM to 5:00 PM</li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-paper/10 pt-6 text-sm text-paper/45 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Bitlane. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="transition-colors hover:text-amber-pulse">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="transition-colors hover:text-amber-pulse">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
