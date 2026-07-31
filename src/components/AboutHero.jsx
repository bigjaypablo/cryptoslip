import { useReveal } from "../hooks/useReveal";

export default function AboutHero() {
  const [ref, visible] = useReveal();
  return (
    <section className="pt-16 pb-16 md:pt-24 md:pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`max-w-2xl ${visible ? "cs-reveal" : "opacity-0"}`}>
          <p className="cs-mono text-xs tracking-widest uppercase text-[var(--brass)] mb-5">About</p>
          <h1 className="cs-serif text-4xl sm:text-5xl font-medium tracking-tight leading-[1.08] text-[var(--ink)]">
            Global work deserves a better way to get paid.
          </h1>
          <p className="mt-6 text-lg text-[var(--ink-soft)] leading-relaxed max-w-lg">
            Crypto Slip exists to make crypto-powered payment collection feel more professional.
          </p>
          <p className="mt-3 text-lg text-[var(--ink-soft)] leading-relaxed max-w-lg">
            The internet changed where we work. Crypto changed how value can move across
            borders. We believe the payment experience should catch up.
          </p>
        </div>
      </div>
    </section>
  );
}
