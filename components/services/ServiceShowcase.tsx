import Link from "next/link";
import { SERVICES } from "@/lib/services";
import ServiceShowcaseCard from "@/components/services/ServiceShowcaseCard";
import ArcItem from "@/components/services/ArcItem";

export default function ServiceShowcase() {
  return (
    <div className="relative">
      <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <h2 className="text-[clamp(2rem,3.6vw,3.1rem)] font-extrabold leading-[1.05] tracking-tight text-paper">
            Our moving services
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-paper/60">
            Whatever the move, we bring the crew, the equipment, and the care to
            get it done right. Every job starts with a free, all inclusive
            estimate.
          </p>
        </div>
        <Link
          href="/services"
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-paper/20 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:border-amber-pulse hover:text-amber-pulse"
        >
          View all services
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      <div className="relative z-10 mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => (
          <ArcItem key={service.slug} index={i}>
            <ServiceShowcaseCard service={service} />
          </ArcItem>
        ))}
      </div>
    </div>
  );
}
