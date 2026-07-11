import type { ReactNode } from "react";

/**
 * Single source of truth for the nine Bitlane services. Used by the homepage
 * showcase (short copy) and the /services page (long copy). `tint` selects the
 * accent used for the card's image slot and icon.
 */

export type Tint = "red" | "amber" | "navy" | "gold";

export type Service = {
  slug: string;
  title: string;
  tag: string;
  short: string;
  long: string;
  tint: Tint;
  Icon: () => ReactNode;
};

const S = {
  width: 34,
  height: 34,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
} as const;

export const SERVICES: Service[] = [
  {
    slug: "specialty-item-moving",
    title: "Specialty Item Moving",
    tag: "Handled with care",
    short:
      "Pianos, safes, artwork, and oversized pieces handled with the right equipment and a careful crew.",
    long:
      "Some pieces need more than muscle. Pianos, safes, antiques, and fine artwork are moved with padding, crating, and the right equipment, by a crew trained to protect the things that matter most.",
    tint: "red",
    Icon: () => (
      <svg {...S}>
        <path d="M4 8.5 12 4l8 4.5-8 4.5-8-4.5Z" />
        <path d="M4 8.5v7L12 20l8-4.5v-7" />
        <path d="M12 13v7" />
        <path d="m10.4 6.2 1.6-.9 1.6.9" />
      </svg>
    ),
  },
  {
    slug: "affordable-pricing",
    title: "Affordable Pricing",
    tag: "No hidden fees",
    short:
      "Clear, all inclusive quotes with no hidden fees. You know the full cost before we lift a thing.",
    long:
      "One clear price, agreed before moving day and honored at the end. No surprise surcharges, no fine print. Our customers come back and refer us because the number we quote is the number they pay.",
    tint: "amber",
    Icon: () => (
      <svg {...S}>
        <path d="M4 12.5V5.5A1.5 1.5 0 0 1 5.5 4h7l7.5 7.5a1.5 1.5 0 0 1 0 2.1l-5.9 5.9a1.5 1.5 0 0 1-2.1 0Z" />
        <circle cx="8.5" cy="8.5" r="1.4" />
      </svg>
    ),
  },
  {
    slug: "residential-moving",
    title: "Residential Moving",
    tag: "Free estimate",
    short:
      "Apartments, condos, and family homes packed, loaded, and delivered with care from door to door.",
    long:
      "Studios, condos, and large family homes. We wrap, load, and transport everything from everyday boxes to fragile glassware and heavy appliances. Most local homes are moved in a single day.",
    tint: "navy",
    Icon: () => (
      <svg {...S}>
        <path d="M3 11 12 4l9 7" />
        <path d="M5.5 9.5V20h13V9.5" />
        <path d="M10 20v-5h4v5" />
      </svg>
    ),
  },
  {
    slug: "commercial-moving",
    title: "Commercial Moving",
    tag: "Minimal downtime",
    short:
      "Offices and businesses relocated on your schedule, planned to keep your downtime close to zero.",
    long:
      "Desks, equipment, files, and everything between, moved on your timeline. We work evenings and weekends and coordinate elevators and loading docks so your business is back up and running fast.",
    tint: "gold",
    Icon: () => (
      <svg {...S}>
        <rect x="5" y="3.5" width="14" height="17" rx="1.5" />
        <path d="M9 7.5h2M13 7.5h2M9 11h2M13 11h2M10.5 20.5V16h3v4.5" />
      </svg>
    ),
  },
  {
    slug: "junk-removal",
    title: "Junk Removal",
    tag: "We haul it away",
    short:
      "Clear out unwanted furniture and clutter as you move, and we haul it away for you.",
    long:
      "Moving is the perfect time to lighten the load. We remove old furniture, appliances, and clutter as we go, so you arrive at your new place with only what you actually want to keep.",
    tint: "red",
    Icon: () => (
      <svg {...S}>
        <path d="M4 7h16" />
        <path d="M6 7v12.5A1.5 1.5 0 0 0 7.5 21h9a1.5 1.5 0 0 0 1.5-1.5V7" />
        <path d="M9.5 7V5a1.5 1.5 0 0 1 1.5-1.5h2A1.5 1.5 0 0 1 14.5 5v2" />
        <path d="M10 11v6M14 11v6" />
      </svg>
    ),
  },
  {
    slug: "packing-services",
    title: "Packing Services",
    tag: "Pro materials",
    short:
      "Full or partial packing with professional grade materials, every box labelled by room.",
    long:
      "Let us handle the packing, in part or in full. We use professional grade boxes, paper, and wrap, label every box by room, and can unpack at the other end so settling in is simple.",
    tint: "amber",
    Icon: () => (
      <svg {...S}>
        <path d="M3.5 8 12 4l8.5 4-8.5 4z" />
        <path d="M3.5 8v8L12 20l8.5-4V8" />
        <path d="M12 12v8M7.8 6 16 10" />
      </svg>
    ),
  },
  {
    slug: "labour-only-services",
    title: "Labour Only Services",
    tag: "By the hour",
    short:
      "Need muscle for loading or unloading only? Book our crew by the hour, truck optional.",
    long:
      "Already have a truck or a container? Book our crew by the hour to load, unload, or rearrange heavy furniture. The same careful, professional hands, priced for exactly what you need.",
    tint: "navy",
    Icon: () => (
      <svg {...S}>
        <circle cx="9" cy="5" r="2" />
        <path d="M9 8v5l-2 7" />
        <path d="M9 13l4 1.5 2.5 5.5" />
        <path d="M9 10.5 14 12l3.5-2" />
      </svg>
    ),
  },
  {
    slug: "student-moving",
    title: "Student Moving",
    tag: "Budget friendly",
    short:
      "Affordable, fast moves for students between residences, dorms, and apartments across Ontario.",
    long:
      "Fast, affordable moves built around a student budget and a student schedule. Between dorms, residences, or your first apartment, we make move-in and move-out week painless.",
    tint: "gold",
    Icon: () => (
      <svg {...S}>
        <path d="M12 5 3 9l9 4 9-4-9-4Z" />
        <path d="M7 11v4.5c0 1.1 2.2 2 5 2s5-.9 5-2V11" />
        <path d="M21 9v4.5" />
      </svg>
    ),
  },
  {
    slug: "senior-moving",
    title: "Senior Moving",
    tag: "At your pace",
    short:
      "Patient, respectful moves for seniors and downsizers, handled at a comfortable pace.",
    long:
      "Downsizing or relocating later in life deserves patience and respect. We move at a comfortable pace, take extra care with cherished belongings, and handle the heavy lifting from start to finish.",
    tint: "red",
    Icon: () => (
      <svg {...S}>
        <path d="M12 20.5s-6.8-4.2-8.4-8.6A4.7 4.7 0 0 1 12 6.6a4.7 4.7 0 0 1 8.4 5.3C18.8 16.3 12 20.5 12 20.5Z" />
      </svg>
    ),
  },
];
