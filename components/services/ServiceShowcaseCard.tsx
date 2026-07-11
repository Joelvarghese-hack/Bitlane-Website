import Link from "next/link";
import type { Service } from "@/lib/services";
import { asset } from "@/lib/asset";

export default function ServiceShowcaseCard({ service }: { service: Service }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-4xl border border-paper/10 bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-paper/20 hover:shadow-panel">
      {/* photo */}
      <div className="relative aspect-[16/10] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(`/images/services/${service.slug}.jpg`)}
          alt={service.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(5,5,6,0.05) 0%, rgba(5,5,6,0) 45%, rgba(5,5,6,0.45) 100%)" }}
          aria-hidden="true"
        />
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-paper">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-paper/60">
          {service.short}
        </p>
        <Link
          href={`/services#${service.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-pulse transition-colors hover:text-paper"
        >
          Learn more
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
            <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
