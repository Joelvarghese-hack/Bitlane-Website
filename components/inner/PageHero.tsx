import Link from "next/link";

type PageHeroProps = {
  title: string;
  lede: string;
  cta?: { href: string; label: string };
};

export default function PageHero({ title, lede, cta }: PageHeroProps) {
  return (
    <section className="hero-fade flex items-end px-[clamp(20px,5vw,88px)] pb-12 pt-16 md:pb-16 md:pt-20">
      <div className="mx-auto w-full max-w-5xl">
        <h1 className="text-[clamp(2.4rem,5.5vw,4rem)] font-extrabold leading-[1.04] tracking-tight text-paper">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-paper/70 md:text-lg">{lede}</p>
        {cta && (
          <Link
            href={cta.href}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-velocity-red px-6 py-3 text-sm font-bold text-paper transition-colors hover:bg-crimson-shadow"
          >
            {cta.label}
          </Link>
        )}
      </div>
    </section>
  );
}
