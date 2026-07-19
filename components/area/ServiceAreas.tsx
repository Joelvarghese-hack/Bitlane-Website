"use client";

import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";

/**
 * Interactive service-area map. Towns are grouped by region; clicking one makes
 * the map smoothly fly (whoosh) to that town — no reload/blackout. Built on
 * Leaflet with free CARTO dark tiles, so it works on the static build across
 * desktop, tablet, and mobile.
 */
type City = [name: string, lat: number, lng: number];

const REGIONS: { name: string; cities: City[] }[] = [
  {
    name: "Greater Toronto Area",
    cities: [
      ["Toronto", 43.6532, -79.3832], ["Mississauga", 43.589, -79.6441],
      ["Brampton", 43.7315, -79.7624], ["Markham", 43.8561, -79.337],
      ["Vaughan", 43.8361, -79.4983], ["Richmond Hill", 43.8828, -79.4403],
      ["Oakville", 43.4675, -79.6877], ["Burlington", 43.3255, -79.799],
      ["Scarborough", 43.7731, -79.2578], ["North York", 43.7615, -79.4111],
      ["Etobicoke", 43.6205, -79.5132], ["Ajax", 43.8509, -79.0204],
      ["Pickering", 43.8384, -79.0868], ["Oshawa", 43.8971, -78.8658],
      ["Whitby", 43.8975, -78.9429], ["Milton", 43.5183, -79.8774],
    ],
  },
  {
    name: "Eastern Ontario & Quebec",
    cities: [
      ["Kingston", 44.2312, -76.486], ["Belleville", 44.1628, -77.3832],
      ["Cornwall", 45.0212, -74.7304], ["Brockville", 44.5895, -75.6843],
      ["Ottawa", 45.4215, -75.6972], ["Montreal", 45.5019, -73.5674],
    ],
  },
];

export default function ServiceAreas({ showIntro = true }: { showIntro?: boolean }) {
  const elRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<import("leaflet").Map | null>(null);
  const markerRef = useRef<import("leaflet").CircleMarker | null>(null);
  const [active, setActive] = useState("Kingston");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !elRef.current || mapRef.current) return;
      const map = L.map(elRef.current, { scrollWheelZoom: false, zoomControl: true }).setView([44.2312, -76.486], 8);
      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        attribution: '&copy; OpenStreetMap &copy; CARTO',
        maxZoom: 19,
      }).addTo(map);
      markerRef.current = L.circleMarker([44.2312, -76.486], {
        radius: 9, color: "#FE4436", weight: 2, fillColor: "#FE4436", fillOpacity: 0.9,
      }).addTo(map);
      mapRef.current = map;
    })();
    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  const go = (name: string, lat: number, lng: number) => {
    setActive(name);
    mapRef.current?.flyTo([lat, lng], 11, { duration: 1.4 });
    markerRef.current?.setLatLng([lat, lng]);
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
        <div className="overflow-hidden rounded-4xl border border-paper/10 bg-surface shadow-panel">
          <div ref={elRef} className="h-[320px] w-full md:h-[480px]" aria-label={`Map centred on ${active}`} />
        </div>

        <div className="flex flex-col gap-7">
          {REGIONS.map((region) => (
            <div key={region.name}>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-paper/45">
                {region.name}
              </p>
              <ul className="mt-3.5 flex flex-wrap gap-2.5">
                {region.cities.map(([name, lat, lng]) => {
                  const isActive = name === active;
                  return (
                    <li key={name}>
                      <button
                        type="button"
                        onClick={() => go(name, lat, lng)}
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
