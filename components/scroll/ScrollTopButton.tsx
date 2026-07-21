"use client";

import { useEffect, useState } from "react";

/** Fixed scroll-to-top button, every page. Appears after 600px of scroll. */
export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 350);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      window.scrollTo(0, 0);
      return;
    }
    // force:true scrolls even if Lenis is momentarily stopped/locked (the cause
    // of the button "sometimes" not responding); native smooth is the fallback.
    if (window.__lenis) window.__lenis.scrollTo(0, { duration: 0.9, force: true });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-paper/15 bg-surface-2/90 text-paper shadow-panel backdrop-blur-sm transition-all duration-300 hover:border-velocity-red hover:bg-velocity-red ${
        visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-3"
      }`}
    >
      <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
        <path d="M8 13V3M3.5 7.5 8 3l4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
