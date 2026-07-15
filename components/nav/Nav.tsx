"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoLockup from "@/components/nav/LogoLockup";
import ContactLink from "@/components/util/ContactLink";
import WhatsAppLink from "@/components/nav/WhatsAppLink";

const LINKS = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

/**
 * Floating "liquid glass" pill header. It stays stuck to the top and detached
 * from the edge, so it is always visible and clickable, and whatever scrolls
 * under it is blurred through the frosted-glass backdrop.
 */
export default function Nav() {
  const pathname = usePathname();
  const quoteHref = pathname === "/" ? "#quote" : "/#quote";

  return (
    <header className="sticky top-0 z-50 px-[clamp(12px,4vw,44px)] pt-3">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center gap-x-3 rounded-full border border-paper/12 bg-ink/55 px-3 py-2 shadow-[0_14px_36px_-16px_rgba(0,0,0,0.85)] ring-1 ring-inset ring-white/5 backdrop-blur-xl backdrop-saturate-150 md:gap-x-5 md:px-5 md:py-2.5"
      >
        <Link href="/" aria-label="Bitlane, home" className="rounded-full">
          <LogoLockup />
        </Link>

        <div className="ml-2 hidden items-center gap-x-6 text-sm font-medium text-paper/70 md:flex lg:ml-6">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap transition-colors hover:text-amber-pulse ${
                pathname === link.href ? "text-paper" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <WhatsAppLink className="text-paper/70" />
        </div>

        <div className="ml-auto flex items-center gap-2 md:gap-4">
          <ContactLink
            type="tel"
            value="(613) 770-1638"
            toastAbove={false}
            className="hidden whitespace-nowrap text-sm font-semibold text-paper/85 transition-colors hover:text-amber-pulse lg:inline"
          >
            (613) 770-1638
          </ContactLink>
          <Link
            href={quoteHref}
            className="whitespace-nowrap rounded-full bg-velocity-red px-5 py-2.5 text-sm font-bold text-paper shadow-glow transition-all duration-200 hover:bg-crimson-shadow hover:-translate-y-0.5"
          >
            Get a quote
          </Link>
        </div>
      </nav>

      {/* compact link pill for narrow screens */}
      <nav
        aria-label="Pages"
        className="mx-auto mt-2 flex max-w-6xl items-center gap-x-5 overflow-x-auto rounded-full border border-paper/12 bg-ink/55 px-4 py-2 text-xs font-medium text-paper/70 ring-1 ring-inset ring-white/5 backdrop-blur-xl backdrop-saturate-150 [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden"
      >
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`whitespace-nowrap transition-colors hover:text-amber-pulse ${
              pathname === link.href ? "text-paper" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
        <WhatsAppLink className="text-paper/70" />
      </nav>
    </header>
  );
}
