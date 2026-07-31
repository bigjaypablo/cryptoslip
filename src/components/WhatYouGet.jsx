import { Check } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

export default function WhatYouGet() {
  const [ref, visible] = useReveal();
  const items = [
    "Create professional invoices",
    "Send structured payment requests",
    "Present crypto payments more professionally",
    "Collect payments through the Crypto Slip experience",
    "Organize your payment activity",
  ];

  return (
    <section className="py-20 md:py-28" style={{ background: "var(--paper-dim)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`max-w-xl ${visible ? "cs-reveal" : "opacity-0"}`}>
          <p className="cs-mono text-xs tracking-widest uppercase text-[var(--brass)] mb-4">What you get</p>
          <h2 className="cs-serif text-3xl sm:text-4xl font-medium tracking-tight leading-[1.15] mb-10">
            A more professional payment experience.
          </h2>
        </div>

        <div className="max-w-xl divide-y divide-[var(--line)] border-t border-b border-[var(--line)]">
          {items.map((item) => (
            <div key={item} className="flex items-center gap-3 py-4">
              <Check size={16} strokeWidth={2} style={{ color: "var(--sage-bright)" }} className="shrink-0" />
              <span className="text-[var(--ink)] text-[15px]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
