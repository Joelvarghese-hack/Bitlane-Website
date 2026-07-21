"use client";

import { useEffect } from "react";

/**
 * Light content protection: blocks right-click menus, text copy/cut, and image
 * dragging across the site so casual visitors can't double-click-drag to lift
 * content. Form fields (input / textarea / select / contenteditable) are exempt
 * so the quote form stays fully usable.
 *
 * This is a deterrent, not real DRM — anyone determined can still read the public
 * HTML. It deliberately does NOT freeze DevTools or flood the console, which
 * would break real customers' browsers and tank performance/SEO.
 */
export default function ContentGuard() {
  useEffect(() => {
    const inField = (t: EventTarget | null) => {
      const el = t as HTMLElement | null;
      return !!el?.closest?.("input, textarea, select, [contenteditable='true']");
    };

    const block = (e: Event) => {
      if (inField(e.target)) return;
      e.preventDefault();
    };

    document.addEventListener("contextmenu", block);
    document.addEventListener("copy", block);
    document.addEventListener("cut", block);
    document.addEventListener("dragstart", block);
    document.addEventListener("selectstart", block);

    return () => {
      document.removeEventListener("contextmenu", block);
      document.removeEventListener("copy", block);
      document.removeEventListener("cut", block);
      document.removeEventListener("dragstart", block);
      document.removeEventListener("selectstart", block);
    };
  }, []);

  return null;
}
