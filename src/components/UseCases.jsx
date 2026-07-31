import { useReveal } from "../hooks/useReveal";

export default function UseCases() {
  const [ref, visible] = useReveal();
  const cases = [
    {
      role: "Freelance developer",
      scenario: "Bills a client at project completion, itemizing scope and milestones, paid in USDC to a hardware wallet.",
    },
    {
      role: "Marketing agency",
      scenario: "Sends monthly retainer invoices to international clients without chasing bank transfer paperwork.",
    },
    {
      role: "Web3 contributor",
      scenario: "Requests payment from a protocol for completed work with a clear, referenceable invoice.",
    },
    {
      role: "Independent designer",
      scenario: "Replaces 'send payment to this address' with an invoice link a client actually understands.",
    },
  ];

  return (
    <section className="py-20 md:py-28" style={{ background: "var(--paper-dim)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={visible ? "cs-reveal" : "opacity-0"}>
          <p className="cs-mono text-xs tracking-widest uppercase text-[var(--brass)] mb-4">Who it's for</p>
          <h2 className="cs-serif text-3xl sm:text-4xl font-medium tracking-tight max-w-xl leading-[1.15]">
            Built for people who bill clients, not trade tokens.
          </h2>
        </div>

        <div className="mt-14 divide-y divide-[var(--line)] border-t border-b border-[var(--line)]">
          {cases.map((c) => (
            <div
              key={c.role}
              className="py-6 grid sm:grid-cols-[220px_1fr] gap-2 sm:gap-8 items-baseline px-3 -mx-3 rounded-sm transition-colors hover:bg-white"
            >
              <h3 className="cs-serif text-lg font-medium text-[var(--ink)]">{c.role}</h3>
              <p className="text-[var(--ink-soft)] text-[15px] leading-relaxed">{c.scenario}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
