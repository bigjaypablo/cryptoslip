import { ArrowRight } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

export default function FeaturesHero() {
  const [ref, visible] = useReveal();
  return (
    <section className="pt-16 pb-16 md:pt-24 md:pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`max-w-2xl ${visible ? "cs-reveal" : "opacity-0"}`}>
          <p className="cs-mono text-xs tracking-widest uppercase text-[var(--brass)] mb-5">
            Features
          </p>
          <h1 className="cs-serif text-4xl sm:text-5xl font-medium tracking-tight leading-[1.08] text-[var(--ink)]">
            The professional way to request payment in crypto.
          </h1>
          <p className="mt-6 text-lg text-[var(--ink-soft)] leading-relaxed max-w-lg">
            Crypto Slip brings invoices and crypto-powered payment collection into one
            straightforward experience. Create the request. Share it. Let your client pay
            with supported crypto or stablecoins.
          </p>
          <a
            href="/#create"
            className="group mt-8 inline-flex items-center gap-2 text-[var(--paper)] font-medium px-6 py-3.5 rounded-sm transition-transform hover:-translate-y-0.5 cs-focus"
            style={{ background: "var(--ink)" }}
          >
            Create an invoice
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
