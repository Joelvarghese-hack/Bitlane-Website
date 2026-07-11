"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoLockup from "@/components/nav/LogoLockup";

const LINKS = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

/**
 * Top header. It sits in normal document flow and scrolls away with the page
 * (not fixed), per the design.
 */
export default function Nav() {
  const pathname = usePathname();
  const quoteHref = pathname === "/" ? "#quote" : "/#quote";

  return (
    <header className="sticky top-0 z-40 border-b border-paper/10 bg-ink/80 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center gap-x-4 px-[clamp(20px,5vw,88px)] py-5 md:gap-x-6"
      >
        <Link href="/" aria-label="Bitlane, home" className="rounded-md">
          <LogoLockup />
        </Link>

        <div className="ml-6 hidden items-center gap-x-7 text-sm font-medium text-paper/70 md:flex lg:ml-10">
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
        </div>

        <div className="ml-auto flex items-center gap-3 md:gap-5">
          <a
            href="tel:+16137701638"
            className="hidden whitespace-nowrap text-sm font-semibold text-paper/85 transition-colors hover:text-amber-pulse lg:inline"
          >
            (613) 770-1638
          </a>
          <Link
            href={quoteHref}
            className="whitespace-nowrap rounded-full bg-velocity-red px-5 py-2.5 text-sm font-bold text-paper shadow-glow transition-all duration-200 hover:bg-crimson-shadow hover:-translate-y-0.5"
          >
            Get a quote
          </Link>
        </div>
      </nav>

      {/* compact link row for narrow screens */}
      <nav
        aria-label="Pages"
        className="flex items-center gap-x-5 overflow-x-auto px-5 pb-3 text-xs font-medium text-paper/70 md:hidden"
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
      </nav>
    </header>
  );
}
