import Link from "next/link";
import BrandEmblem from "@/components/brand/BrandEmblem";
import { QUOTE_EMAIL } from "@/lib/formSubmit";
import { SERVICES } from "@/lib/services";

const COMPANY_LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/coverage", label: "Coverage" },
  { href: "/contact", label: "Contact" },
];

const FOOTER_SERVICES = SERVICES.slice(0, 5);

export default function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-[#08080A]">
      <div className="mx-auto max-w-7xl px-[clamp(20px,5vw,88px)] py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* brand */}
          <div className="lg:col-span-5">
            <BrandEmblem size={128} />
            <p className="mt-5 max-w-sm text-lg font-semibold leading-snug text-paper">
              We believe a stress-free move should be within everyone&apos;s reach.
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/55">
              A Kingston moving company built on careful hands, honest pricing,
              and moves that arrive on time and in one piece.
            </p>
            <a
              href="tel:+16137701638"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-paper/20 px-6 py-3 text-sm font-bold text-paper transition-colors hover:border-amber-pulse hover:text-amber-pulse"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 2.5h2.6l1.2 3-1.6 1.2a9.6 9.6 0 0 0 4.1 4.1l1.2-1.6 3 1.2v2.6c0 .6-.5 1-1 1C7 14 2 9 2 3.5c0-.5.4-1 1-1Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
              </svg>
              (613) 770-1638
            </a>
          </div>

          {/* company */}
          <nav aria-label="Company" className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-paper/45">
              Company
            </p>
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
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-paper/45">
              Services
            </p>
            <ul className="mt-4 grid gap-3 text-sm">
              {FOOTER_SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-paper/70 transition-colors hover:text-amber-pulse"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* contact */}
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-paper/45">
              Contact
            </p>
            <ul className="mt-4 grid gap-3 text-sm">
              <li>
                <a href="tel:+16137701638" className="font-semibold text-paper/85 transition-colors hover:text-amber-pulse">
                  (613) 770-1638
                </a>
              </li>
              <li>
                <a href={`mailto:${QUOTE_EMAIL}`} className="break-all text-paper/70 transition-colors hover:text-amber-pulse">
                  {QUOTE_EMAIL}
                </a>
              </li>
              <li className="text-paper/55">Open 24 hours</li>
              <li className="text-paper/55">Kingston, Ontario, Canada</li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-paper/10 pt-6 text-sm text-paper/45 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Bitlane. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="transition-colors hover:text-amber-pulse">
              Privacy Policy
            </Link>
            <span>Serving Ontario and Quebec</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
