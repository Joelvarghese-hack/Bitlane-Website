"use client";

import { useState, useEffect, useRef } from "react";
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
 * Borderless floating "liquid glass" nav — sticky, always clickable, blurring
 * whatever scrolls under it while keeping its own contents at full contrast.
 * The standard links share one white pill that glides to whichever link is
 * hovered (its text flips black); the logo and WhatsApp are excluded from it.
 * Mobile uses a burger drawer.
 */
export default function Nav() {
  const pathname = usePathname();
  const quoteHref = pathname === "/" ? "#quote" : "/#quote";
  const [open, setOpen] = useState(false);
  const [pill, setPill] = useState({ left: 0, width: 0, visible: false, active: "" });

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const moveTo = (el: HTMLElement, href: string) =>
    setPill({ left: el.offsetLeft, width: el.offsetWidth, visible: true, active: href });
  const hidePill = () => setPill((p) => ({ ...p, visible: false, active: "" }));

  return (
    <header className="sticky top-0 z-50 px-[clamp(12px,4vw,44px)] pt-3">
      <nav className="mx-auto flex max-w-6xl items-center gap-x-3 rounded-full bg-ink/60 px-4 py-2 shadow-[0_16px_40px_-18px_rgba(0,0,0,0.9)] backdrop-blur-2xl backdrop-saturate-150 md:gap-x-5 md:px-6">
        <Link href="/" aria-label="Bitlane, home" className="shrink-0">
          <img
            src={asset("/images/logo-nav.png")}
            alt="Bitlane"
            draggable={false}
            className="h-6 w-auto md:h-7"
          />
        </Link>

        {/* standard links share one gliding white pill */}
        <div
          onMouseLeave={hidePill}
          className="relative ml-2 hidden items-center text-sm font-medium md:flex lg:ml-5"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 h-8 -translate-y-1/2 rounded-full bg-white transition-all duration-300 ease-out"
            style={{ left: pill.left, width: pill.width, opacity: pill.visible ? 1 : 0 }}
          />
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onMouseEnter={(e) => moveTo(e.currentTarget, link.href)}
              className={`relative z-10 whitespace-nowrap rounded-full px-3.5 py-1.5 transition-colors duration-200 ${
                pill.active === link.href ? "text-black" : "text-paper/85"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <WhatsAppLink className="ml-3 hidden text-paper/80 md:inline-flex" />

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
            className="hidden flex-col items-center rounded-full bg-velocity-red px-5 py-1.5 text-paper shadow-glow transition-all duration-200 hover:bg-crimson-shadow hover:-translate-y-0.5 sm:flex"
          >
            <span className="whitespace-nowrap text-sm font-bold leading-tight">Get a quote</span>
            <span className="whitespace-nowrap text-[0.6rem] font-medium leading-tight text-paper/85">
              in less than 30 mins
            </span>
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
              className="rounded-full bg-velocity-red px-5 py-3 text-center text-paper shadow-glow"
            >
              <span className="block text-sm font-bold leading-tight">Get a quote</span>
              <span className="block text-[0.65rem] font-medium leading-tight text-paper/85">
                in less than 30 mins
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
