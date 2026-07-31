import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);
  const faqs = [
    {
      q: "What is Crypto Slip?",
      a: "A professional invoicing and payment collection platform that helps people and businesses create invoices, request payments, and get paid globally using crypto and stablecoins.",
    },
    {
      q: "Who is Crypto Slip for?",
      a: "It's built for Web3 freelancers, agencies, service providers, and crypto-native teams, as well as any freelancer or business that wants a clearer way to collect crypto payments.",
    },
    {
      q: "How much does it cost?",
      a: "A flat 0.5% platform fee on transactions routed through Crypto Slip. No subscriptions, no tiers.",
    },
    {
      q: "Is Crypto Slip a wallet?",
      a: "No. Crypto Slip is an invoicing and payment collection platform, not a cryptocurrency wallet. Payments are routed to a wallet you specify.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <p className="cs-mono text-xs tracking-widest uppercase text-[var(--brass)] mb-4">Questions</p>
        <h2 className="cs-serif text-3xl sm:text-4xl font-medium tracking-tight mb-12">Start here.</h2>

        <div className="divide-y divide-[var(--line)] border-t border-b border-[var(--line)]">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={faq.q}>
                <button
                  className="w-full flex items-center justify-between gap-4 py-5 text-left cs-focus px-3 -mx-3 rounded-sm transition-colors hover:bg-[var(--paper-dim)]"
                  onClick={() => setOpenIdx(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="cs-serif text-lg font-medium text-[var(--ink)]">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-[var(--slate)] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? "200px" : "0px" }}
                >
                  <p className="text-[var(--ink-soft)] text-[15px] leading-relaxed pb-5 px-3 max-w-xl">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
