import { useReveal } from "../hooks/useReveal";

export default function PricingTrust() {
  const [ref, visible] = useReveal();
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`max-w-2xl ${visible ? "cs-reveal" : "opacity-0"}`}>
          <p className="cs-mono text-xs tracking-widest uppercase text-[var(--brass)] mb-4">Transparency</p>
          <h2 className="cs-serif text-3xl sm:text-4xl font-medium tracking-tight leading-[1.15] mb-6">
            What you see is what you pay.
          </h2>
          <div className="text-[var(--ink-soft)] leading-relaxed space-y-4 max-w-lg">
            <p>We believe payment infrastructure should be easier to understand.</p>
            <p>That's why Crypto Slip keeps the platform fee straightforward: 0.5% on transactions routed through Crypto Slip.</p>
            <p className="text-sm text-[var(--slate)]">
              For details about blockchain network fees or other transaction-related costs,
              refer to the applicable payment information presented during the payment process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
