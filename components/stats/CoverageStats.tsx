"use client";

import { useEffect, useRef } from "react";

const STATS = [
  { value: "200+", label: "Moves completed" },
  { value: "2+", label: "Years in business" },
  { value: "100%", label: "Upfront pricing" },
  { value: "8+", label: "Cities served" },
];

function parse(v: string): { n: number; s: string } {
  const m = v.match(/^(\d+)(.*)$/);
  return m ? { n: Number(m[1]), s: m[2] } : { n: 0, s: v };
}

/**
 * The four coverage figures count up from zero the first time they scroll into
 * view. The final values are server-rendered, so with no JS or under reduced
 * motion they simply read as-is (no count, no flash).
 */
export default function CoverageStats() {
  const ref = useRef<HTMLDListElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const nums = Array.from(root.querySelectorAll<HTMLElement>("[data-count]"));
    // start each at zero before the trigger fires
    nums.forEach((el) => (el.textContent = `0${el.dataset.suffix ?? ""}`));

    let ctx: { revert: () => void } | null = null;
    let cancelled = false;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled || !ref.current) return;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        nums.forEach((el) => {
          const target = Number(el.dataset.count ?? "0");
          const suffix = el.dataset.suffix ?? "";
          const obj = { v: 0 };
          gsap.to(obj, {
            v: target,
            duration: 1.4,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
            onUpdate: () => (el.textContent = `${Math.round(obj.v)}${suffix}`),
            onComplete: () => (el.textContent = `${target}${suffix}`),
          });
        });
      }, ref);
    })();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <dl ref={ref} className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4">
      {STATS.map((stat) => {
        const { n, s } = parse(stat.value);
        return (
          <div key={stat.label} className="flex flex-col text-center">
            <dd
              data-count={n}
              data-suffix={s}
              className="order-1 text-4xl font-extrabold tracking-tight text-paper lg:text-5xl"
            >
              {stat.value}
            </dd>
            <dt className="order-2 mt-2 text-xs text-paper/60 md:text-sm">{stat.label}</dt>
          </div>
        );
      })}
    </dl>
  );
}
