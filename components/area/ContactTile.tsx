import ContactLink from "@/components/util/ContactLink";
import { asset } from "@/lib/asset";

/**
 * Small "don't see your city" contact tile that sits just below the areas map.
 * The avatar is a placeholder until the owner photo (owner.jpg) is added, at
 * which point the placeholder block is swapped for an <img>.
 */
export default function ContactTile() {
  return (
    <div className="mx-auto flex max-w-md items-center gap-4 rounded-3xl border border-paper/10 bg-surface p-4 shadow-panel sm:p-5">
      <div className="relative shrink-0">
        <img
          src={asset("/images/owner.jpg")}
          alt="Bitlane owner"
          width="64"
          height="64"
          loading="lazy"
          className="h-16 w-16 rounded-2xl object-cover object-top"
        />
        <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full border-2 border-surface bg-green-400" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-base font-bold text-paper">Don&apos;t see your city?</p>
        <p className="mt-0.5 text-sm text-paper/60">
          We travel further than you think.
        </p>
        <ContactLink
          type="tel"
          value="(613) 770-1638"
          className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-semibold text-velocity-red transition-colors hover:text-paper"
        >
          Call (613) 770-1638
        </ContactLink>
      </div>
    </div>
  );
}
