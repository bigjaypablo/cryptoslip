import { useReveal } from "../hooks/useReveal";

export default function FeeTable() {
  const [ref, visible] = useReveal();
  const rows = [
    { amount: 100, fee: 0.5 },
    { amount: 500, fee: 2.5 },
    { amount: 1000, fee: 5 },
    { amount: 5000, fee: 25 },
    { amount: 10000, fee: 50 },
  ];

  return (
    <div ref={ref} className={visible ? "cs-reveal" : "opacity-0"}>
      <div className="bg-white border border-[var(--line)] rounded-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-[var(--line-soft)]" style={{ background: "var(--paper-dim)" }}>
          <div className="flex justify-between cs-mono text-xs text-[var(--slate)] uppercase tracking-wide">
            <span>Payment amount</span>
            <span>0.5% platform fee</span>
          </div>
        </div>
        {rows.map((r, i) => (
          <div
            key={r.amount}
            className={`px-6 py-4 flex items-center justify-between ${
              i !== rows.length - 1 ? "border-b border-[var(--line-soft)]" : ""
            }`}
          >
            <span className="cs-serif text-lg font-medium text-[var(--ink)] tabular-nums">
              ${r.amount.toLocaleString()}
            </span>
            <span className="cs-mono text-sm tabular-nums" style={{ color: "var(--sage-bright)" }}>
              ${r.fee.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-[var(--slate)] leading-relaxed max-w-lg">
        These examples illustrate the 0.5% platform fee only. Any applicable blockchain
        network fees are separate and not set by Crypto Slip.
      </p>
    </div>
  );
}
