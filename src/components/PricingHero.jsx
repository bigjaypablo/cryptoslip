import { useReveal } from "../hooks/useReveal";

export default function PricingHero() {
  const [ref, visible] = useReveal();
  return (
    <section className="pt-16 pb-14 md:pt-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`max-w-2xl ${visible ? "cs-reveal" : "opacity-0"}`}>
          <p className="cs-mono text-xs tracking-widest uppercase text-[var(--brass)] mb-5">Pricing</p>
          <h1 className="cs-serif text-4xl sm:text-5xl font-medium tracking-tight leading-[1.08] text-[var(--ink)]">
            Simple pricing for global payments.
          </h1>
          <p className="mt-6 text-lg text-[var(--ink-soft)] leading-relaxed max-w-lg">
            Crypto Slip charges a flat 0.5% platform fee on transactions routed through
            the platform. No subscription required.
          </p>
        </div>
      </div>
    </section>
  );
}
