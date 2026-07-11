/**
 * Blank media panel for the hero. Deliberately empty so a promo video can be
 * dropped in later. To use a video, replace the inner placeholder with:
 *   <video className="h-full w-full object-cover" autoPlay muted loop playsInline poster="...">
 *     <source src="/hero.mp4" type="video/mp4" />
 *   </video>
 */
export default function VideoPanel() {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-4xl border border-paper/10 bg-surface shadow-panel">
      {/* subtle brand wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 100% at 50% 0%, rgba(230,57,70,0.12), transparent 60%), linear-gradient(180deg, #16161D 0%, #0B0B0E 100%)",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-paper/20 bg-black/40 backdrop-blur-sm">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M8 5.5v13l11-6.5-11-6.5z" fill="#F5F1E8" fillOpacity="0.85" />
          </svg>
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/40">
          Video coming soon
        </span>
      </div>
      {/* corner frame accents */}
      <span className="pointer-events-none absolute left-4 top-4 h-6 w-6 rounded-tl-xl border-l-2 border-t-2 border-velocity-red/50" aria-hidden="true" />
      <span className="pointer-events-none absolute bottom-4 right-4 h-6 w-6 rounded-br-xl border-b-2 border-r-2 border-velocity-red/50" aria-hidden="true" />
    </div>
  );
}
