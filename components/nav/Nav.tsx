"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { asset } from "@/lib/asset";
import ContactLink from "@/components/util/ContactLink";
import WhatsAppLink from "@/components/nav/WhatsAppLink";

const LINKS = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

/**
 * Borderless floating "liquid glass" nav. Detached from the top, sticky and
 * always clickable. A heavy frosted backdrop blurs whatever scrolls under it,
 * while a semi-opaque dark layer keeps the nav's own logo, links and buttons at
 * full contrast regardless of what passes behind. Mobile uses a burger drawer.
 */
export default function Nav() {
  const pathname = usePathname();
  const quoteHref = pathname === "/" ? "#quote" : "/#quote";
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 px-[clamp(12px,4vw,44px)] pt-3">
      <nav className="mx-auto flex max-w-6xl items-center gap-x-3 rounded-full bg-ink/60 px-4 py-2.5 shadow-[0_16px_40px_-18px_rgba(0,0,0,0.9)] backdrop-blur-2xl backdrop-saturate-150 md:gap-x-6 md:px-6">
        <Link href="/" aria-label="Bitlane, home" className="shrink-0">
          <img
            src={asset("/images/logo-nav.png")}
            alt="Bitlane"
            draggable={false}
            className="h-6 w-auto md:h-7"
          />
        </Link>

        <div className="ml-2 hidden items-center gap-x-6 text-sm font-medium text-paper/80 md:flex lg:ml-6">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors hover:text-velocity-red ${
                pathname === link.href ? "text-paper" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <WhatsAppLink className="text-paper/80" />
        </div>

        <div className="ml-auto flex items-center gap-2 md:gap-4">
          <ContactLink
            type="tel"
            value="(613) 770-1638"
            toastAbove={false}
            className="hidden whitespace-nowrap text-sm font-semibold text-paper/90 transition-colors hover:text-velocity-red lg:inline"
          >
            (613) 770-1638
          </ContactLink>
          <Link
            href={quoteHref}
            className="hidden whitespace-nowrap rounded-full bg-velocity-red px-5 py-2.5 text-sm font-bold text-paper shadow-glow transition-all duration-200 hover:bg-crimson-shadow hover:-translate-y-0.5 sm:inline-block"
          >
            Get a quote
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full text-paper md:hidden"
          >
            <span className="flex flex-col gap-[5px]">
              <span className={`h-[2px] w-6 rounded-full bg-paper transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`h-[2px] w-6 rounded-full bg-paper transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
              <span className={`h-[2px] w-6 rounded-full bg-paper transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </nav>

      {/* mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink/70 backdrop-blur-xl transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        />
        <div
          className={`absolute left-1/2 top-24 w-[min(88vw,360px)] -translate-x-1/2 rounded-3xl bg-surface/95 p-6 shadow-panel backdrop-blur-2xl transition-all duration-300 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1 text-lg font-semibold text-paper">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-3 py-3 transition-colors hover:bg-white/5 hover:text-velocity-red ${
                  pathname === link.href ? "text-velocity-red" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-4 border-t border-white/10 pt-5">
            <WhatsAppLink className="px-3 text-paper/85" />
            <Link
              href={quoteHref}
              className="rounded-full bg-velocity-red px-5 py-3 text-center text-sm font-bold text-paper shadow-glow"
            >
              Get a quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
