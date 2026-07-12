import { asset } from "@/lib/asset";
import ContactLink from "@/components/util/ContactLink";

const REGIONS = [
  {
    name: "Greater Toronto Area",
    image: "/images/areas/gta.jpg",
    alt: "Toronto skyline and the CN Tower",
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
    image: "/images/areas/quebec.jpg",
    alt: "Montreal skyline along the St. Lawrence",
    homeBase: "Kingston",
    cities: ["Kingston", "Belleville", "Cornwall", "Brockville", "Ottawa", "Montreal"],
  },
];

export default function ServiceAreas({ showIntro = true }: { showIntro?: boolean }) {
  return (
    <div>
      {showIntro && (
        <div className="text-center">
          <h2 className="text-[clamp(2rem,3.6vw,3.1rem)] font-extrabold leading-[1.05] tracking-tight text-paper">
            Areas we serve
          </h2>
        </div>
      )}

      <div className={`grid gap-6 ${showIntro ? "mt-12" : ""}`}>
        {REGIONS.map((region) => (
          <div
            key={region.name}
            className="overflow-hidden rounded-4xl border border-paper/10 bg-surface shadow-panel"
          >
            <div className="relative h-60 w-full overflow-hidden md:h-72">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset(region.image)}
                alt={region.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, rgba(5,5,6,0) 35%, rgba(5,5,6,0.85) 100%)" }}
                aria-hidden="true"
              />
              <h3 className="absolute bottom-5 left-6 right-6 text-3xl font-extrabold tracking-tight text-paper md:text-[2.1rem]">
                {region.name}
              </h3>
            </div>

            <div className="p-7 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-paper/45">
                Locations served
              </p>
              <ul className="mt-4 flex flex-wrap gap-2.5">
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
                        {city}
                        {isHome && (
                          <span className="text-[0.65rem] uppercase tracking-wide opacity-80">
                            Home base
                          </span>
                        )}
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
        <ContactLink type="tel" value="(613) 770-1638" className="inline-block font-semibold text-amber-pulse transition-colors hover:text-paper">
          Call (613) 770-1638
        </ContactLink>
      </p>
    </div>
  );
}
