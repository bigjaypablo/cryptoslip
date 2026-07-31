import { useReveal } from "../hooks/useReveal";
import FeeCalculator from "./FeeCalculator";

export default function FeeSection() {
  const [ref, visible] = useReveal();

  return (
    <section id="fees" className="py-20 md:py-28" style={{ background: "var(--paper-dim)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div ref={ref} className={visible ? "cs-reveal" : "opacity-0"}>
            <p className="cs-mono text-xs tracking-widest uppercase text-[var(--brass)] mb-4">Pricing</p>
            <h2 className="cs-serif text-3xl sm:text-4xl font-medium tracking-tight leading-[1.15]">
              One fee. No subscription. No surprises.
            </h2>
            <p className="mt-5 text-[var(--ink-soft)] leading-relaxed max-w-md">
              Crypto Slip charges a flat 0.5% platform fee on transactions routed
              through the platform. That's the entire pricing model.
            </p>
            <p className="mt-3 text-sm text-[var(--slate)] max-w-md">
              Network fees for the underlying blockchain transaction are separate
              and not set by Crypto Slip.
            </p>
          </div>

          <FeeCalculator />
        </div>
      </div>
    </section>
  );
}
