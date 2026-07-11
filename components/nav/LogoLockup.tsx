/**
 * Bitlane wordmark. This is an interim placeholder until the real transparent
 * PNG logo is supplied. To use the real logo, drop the file at
 * public/images/bitlane-logo.png and replace the <span> wordmark below with:
 *   <img src="/images/bitlane-logo.png" alt="Bitlane" className="h-9 w-auto" />
 * (use a taller height for size="lg" in the footer).
 */
export default function LogoLockup({
  className = "",
  size = "sm",
}: {
  className?: string;
  size?: "sm" | "lg";
}) {
  const word =
    size === "lg"
      ? "text-4xl tracking-[0.3em]"
      : "text-[1.35rem] tracking-[0.28em]";
  const stripe = size === "lg" ? "mt-2.5 h-[4px]" : "mt-1.5 h-[3px]";

  return (
    <span className={`inline-flex flex-col leading-none ${className}`}>
      <span className={`font-extrabold text-paper ${word}`}>BITLANE</span>
      <span className={`flex w-full ${stripe}`} aria-hidden="true">
        <span className="w-2/5 bg-velocity-red" />
        <span className="w-1/5 bg-gold" />
        <span className="w-2/5 bg-amber-pulse" />
      </span>
    </span>
  );
}
