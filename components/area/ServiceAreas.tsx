"use client";

import { useState } from "react";

/**
 * Interactive service-area map. Towns are grouped by region; clicking one
 * re-centres the embedded map on that town. Google's keyless embed, so it works
 * on the static build across desktop, tablet, and mobile.
 */
const REGIONS = [
  {
    name: "Greater Toronto Area",
    cities: [
      "Toronto", "Mississauga", "Brampton", "Markham", "Vaughan",
      "Richmond Hill", "Oakville", "Burlington", "Scarborough", "North York",
      "Etobicoke", "Ajax", "Pickering", "Oshawa", "Whitby", "Milton",
    ],
  },
  {
    name: "Eastern Ontario & Quebec",
    cities: ["Kingston", "Belleville", "Cornwall", "Brockville", "Ottawa", "Montreal"],
  },
];

export default function ServiceAreas({ showIntro = true }: { showIntro?: boolean }) {
  const [active, setActive] = useState("Kingston");
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    `${active}, Canada`
  )}&z=11&output=embed`;

  return (
    <div>
      {showIntro && (
        <div className="text-center">
          <h2 className="text-[clamp(2rem,3.6vw,3.1rem)] font-extrabold leading-[1.05] tracking-tight text-paper">
            Areas we serve
          </h2>
        </div>
      )}

      <div className={`grid gap-6 lg:grid-cols-[1.15fr_1fr] ${showIntro ? "mt-12" : ""}`}>
        <div className="overflow-hidden rounded-4xl border border-paper/10 bg-surface shadow-panel">
          <iframe
            key={active}
            title={`Map of ${active}`}
            src={mapSrc}
            className="h-[320px] w-full md:h-[480px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0, filter: "grayscale(0.15) contrast(1.05)" }}
          />
        </div>

        <div className="flex flex-col gap-7">
          {REGIONS.map((region) => (
            <div key={region.name}>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-paper/45">
                {region.name}
              </p>
              <ul className="mt-3.5 flex flex-wrap gap-2.5">
                {region.cities.map((city) => {
                  const isActive = city === active;
                  return (
                    <li key={city}>
                      <button
                        type="button"
                        onClick={() => setActive(city)}
                        className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                          isActive
                            ? "border-velocity-red bg-velocity-red font-semibold text-paper"
                            : "border-paper/12 bg-black/30 text-paper/75 hover:border-velocity-red/50 hover:text-paper"
                        }`}
                        aria-pressed={isActive}
                      >
                        {city}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
