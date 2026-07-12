"use client";

import { useState, type ReactNode } from "react";

/**
 * Phone and email links that behave by device:
 *  - touch devices (phone, tablet): follow tel:/mailto: so the dialer or mail app opens.
 *  - desktop (fine pointer): copy the value to the clipboard and show a brief "Copied".
 */
export default function ContactLink({
  type,
  value,
  children,
  className = "",
  toastAbove = true,
}: {
  type: "tel" | "email";
  value: string;
  children: ReactNode;
  className?: string;
  toastAbove?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const href = type === "tel" ? `tel:${value.replace(/[^\d+]/g, "")}` : `mailto:${value}`;

  const onClick = (e: React.MouseEvent) => {
    if (typeof window === "undefined") return;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (coarse) return; // let the tel:/mailto: default proceed on touch devices
    e.preventDefault();
    const done = () => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    };
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(value).then(done).catch(done);
    } else {
      done();
    }
  };

  return (
    <a href={href} onClick={onClick} className={`relative ${className}`}>
      {children}
      {copied && (
        <span
          className={`pointer-events-none absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-paper px-2 py-1 text-xs font-bold text-ink shadow-lg ${
            toastAbove ? "-top-8" : "top-full mt-1"
          }`}
        >
          Copied
        </span>
      )}
    </a>
  );
}
