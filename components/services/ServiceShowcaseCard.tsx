import Link from "next/link";
import type { Service, Tint } from "@/lib/services";

const TINTS: Record<Tint, { slot: string; icon: string; tag: string }> = {
  red: {
    slot: "from-[#3a0e14] via-[#170a0c] to-[#0a0a0d]",
    icon: "text-velocity-red",
    tag: "text-amber-pulse",
  },
  amber: {
    slot: "from-[#3a2510] via-[#17120a] to-[#0a0a0d]",
    icon: "text-amber-pulse",
    tag: "text-amber-pulse",
  },
  navy: {
    slot: "from-[#102338] via-[#0c1220] to-[#0a0a0d]",
    icon: "text-[#7ba3d6]",
    tag: "text-[#9db8de]",
  },
  gold: {
    slot: "from-[#33290f] via-[#171307] to-[#0a0a0d]",
    icon: "text-gold",
    tag: "text-gold",
  },
};

export default function ServiceShowcaseCard({ service }: { service: Service }) {
  const tint = TINTS[service.tint];
  const { Icon } = service;

  return (
    <article className="group flex flex-col overflow-hidden rounded-4xl border border-paper/10 bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-paper/20 hover:shadow-panel">
      {/* image slot (swap for a real photo later) */}
      <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${tint.slot}`}>
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(rgba(245,241,232,0.10) 1px, transparent 1.6px)",
            backgroundSize: "22px 22px",
          }}
          aria-hidden="true"
        />
        <span className="absolute left-4 top-4 rounded-full border border-paper/15 bg-black/40 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-paper/80 backdrop-blur-sm">
          <span className={tint.tag}>{service.tag}</span>
        </span>
        <span
          className={`absolute inset-0 flex items-center justify-center ${tint.icon} transition-transform duration-500 group-hover:scale-110`}
        >
          <span className="[&>svg]:h-16 [&>svg]:w-16">
            <Icon />
          </span>
        </span>
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
