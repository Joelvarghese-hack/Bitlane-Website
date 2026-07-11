const REGIONS = [
  {
    name: "Greater Toronto Area",
    short: "GTA",
    note: "The full GTA and the towns between.",
    homeBase: null as string | null,
    cities: [
      "Toronto",
      "Mississauga",
      "Brampton",
      "Markham",
      "Vaughan",
      "Richmond Hill",
      "Oakville",
      "Burlington",
      "Scarborough",
      "North York",
      "Etobicoke",
      "Ajax",
      "Pickering",
      "Oshawa",
      "Whitby",
      "Milton",
    ],
  },
  {
    name: "Eastern Ontario and Quebec",
    short: "And beyond",
    note: "Our home turf and the long hauls east.",
    homeBase: "Kingston",
    cities: ["Kingston", "Belleville", "Cornwall", "Brockville", "Ottawa", "Montreal"],
  },
];

function MapBand() {
  return (
    <div className="relative h-24 overflow-hidden">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: "radial-gradient(rgba(245,241,232,0.10) 1px, transparent 1.6px)",
          backgroundSize: "20px 20px",
        }}
        aria-hidden="true"
      />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 96" fill="none" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M20 74 C 90 74, 120 26, 200 30 S 320 66, 384 22"
          stroke="#E63946"
          strokeWidth="2"
          strokeDasharray="5 7"
          strokeLinecap="round"
          opacity="0.7"
        />
        <circle cx="20" cy="74" r="4" fill="#F4A261" />
        <circle cx="384" cy="22" r="4" fill="#E63946" />
      </svg>
    </div>
  );
}

export default function ServiceAreas({ showIntro = true }: { showIntro?: boolean }) {
  return (
    <div>
      {showIntro && (
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-pulse">
            Coverage
          </span>
          <h2 className="mt-3 text-[clamp(2rem,3.6vw,3.1rem)] font-extrabold leading-[1.05] tracking-tight text-paper">
            Areas we serve
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-paper/60">
            Based in Kingston and moving families and businesses right across the
            Greater Toronto Area, Eastern Ontario, and into Quebec.
          </p>
        </div>
      )}

      <div className={`grid gap-6 lg:grid-cols-2 ${showIntro ? "mt-12" : ""}`}>
        {REGIONS.map((region) => (
          <div
            key={region.name}
            className="overflow-hidden rounded-4xl border border-paper/10 bg-surface shadow-panel"
          >
            <MapBand />
            <div className="p-7 md:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-velocity-red/15 text-velocity-red">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 21s-6.5-5.5-6.5-10.5a6.5 6.5 0 0 1 13 0C18.5 15.5 12 21 12 21z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                    <circle cx="12" cy="10.5" r="2.3" stroke="currentColor" strokeWidth="1.7" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-xl font-bold text-paper">{region.name}</h3>
                  <p className="text-sm text-paper/55">{region.note}</p>
                </div>
              </div>

              <ul className="mt-6 flex flex-wrap gap-2.5">
                {region.cities.map((city) => {
                  const isHome = city === region.homeBase;
                  return (
                    <li key={city}>
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm ${
                          isHome
                            ? "border-amber-pulse/40 bg-amber-pulse/10 font-semibold text-amber-pulse"
                            : "border-paper/12 bg-black/30 text-paper/75"
                        }`}
                      >
                        {isHome && (
                          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M2.5 7 8 2.5 13.5 7v6.5h-11z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                          </svg>
                        )}
                        {city}
                        {isHome && <span className="text-[0.65rem] uppercase tracking-wide opacity-80">Home base</span>}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-paper/55">
        Do not see your city? We travel further than you think.{" "}
        <a href="tel:+16137701638" className="font-semibold text-amber-pulse transition-colors hover:text-paper">
          Call (613) 770-1638
        </a>
      </p>
    </div>
  );
}
