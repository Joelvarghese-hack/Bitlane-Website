"use client";

import { useState } from "react";

/**
 * Interactive service-area map (Google embed, so it keeps the familiar red map
 * pin and the normal light Google look). Clicking a town does NOT black the map
 * out: a quick brand "whoosh" sweeps across, a red coverage ring pulses over the
 * area, and the map itself scales in smoothly to the new city.
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
  const [ready, setReady] = useState(true);
  const [whoosh, setWhoosh] = useState(0);
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(`${active}, Canada`)}&z=11&output=embed`;

  const go = (name: string) => {
    if (name === active) return;
    setReady(false);
    setActive(name);
    setWhoosh((n) => n + 1); // restart the whoosh + ring animations
  };

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
        <div className="relative overflow-hidden rounded-4xl border border-paper/10 bg-surface shadow-panel">
          <iframe
            key={active}
            title={`Map of ${active}`}
            src={src}
            onLoad={() => setReady(true)}
            className={`h-[320px] w-full transition-[opacity,transform] duration-500 ease-out md:h-[480px] ${
              ready ? "scale-100 opacity-100" : "scale-[1.06] opacity-70"
            }`}
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* red coverage ring over the selected city area */}
          <div key={`ring-${whoosh}`} className="map-ring" aria-hidden="true" />

          {/* brand whoosh sweep, restarts on every city change */}
          {whoosh > 0 && <div key={`whoosh-${whoosh}`} className="map-whoosh" aria-hidden="true" />}
        </div>

        <div className="flex flex-col gap-7">
          {REGIONS.map((region) => (
            <div key={region.name}>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-paper/45">
                {region.name}
              </p>
              <ul className="mt-3.5 flex flex-wrap gap-2.5">
                {region.cities.map((name) => {
                  const isActive = name === active;
                  return (
                    <li key={name}>
                      <button
                        type="button"
                        onClick={() => go(name)}
                        className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                          isActive
                            ? "border-velocity-red bg-velocity-red font-semibold text-paper"
                            : "border-paper/12 bg-black/30 text-paper/75 hover:border-velocity-red/50 hover:text-paper"
                        }`}
                        aria-pressed={isActive}
                      >
                        {name}
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
