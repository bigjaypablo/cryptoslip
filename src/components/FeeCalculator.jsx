import { useState, useMemo } from "react";

export default function FeeCalculator() {
  const [amount, setAmount] = useState(1000);

  const fee = useMemo(() => amount * 0.005, [amount]);
  const youReceive = useMemo(() => amount - fee, [amount]);

  const handleSlider = (e) => {
    setAmount(Number(e.target.value));
  };

  const handleInput = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, "");
    setAmount(val === "" ? 0 : Math.min(Number(val), 50000));
  };

  const fmt = (n) =>
    n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div
      className="bg-white border border-[var(--line)] rounded-sm overflow-hidden"
      style={{ boxShadow: "0 2px 6px rgba(18,21,28,0.05), 0 16px 32px -12px rgba(18,21,28,0.14)" }}
    >
      <div className="px-6 py-4 border-b border-[var(--line-soft)]" style={{ background: "var(--paper-dim)" }}>
        <p className="cs-mono text-xs text-[var(--slate)]">Try it — drag or type an invoice amount</p>
      </div>

      <div className="p-6 sm:p-7 bg-white">
        <div className="flex items-baseline gap-2 mb-6">
          <span className="cs-serif text-2xl text-[var(--slate)]">$</span>
          <input
            type="text"
            inputMode="numeric"
            value={amount.toLocaleString()}
            onChange={handleInput}
            className="cs-serif text-4xl sm:text-5xl font-medium text-[var(--ink)] bg-transparent outline-none w-full tabular-nums cs-focus rounded-sm"
            style={{ fontVariantNumeric: "tabular-nums" }}
            aria-label="Invoice amount"
          />
        </div>

        <input
          type="range"
          min="0"
          max="50000"
          step="10"
          value={amount}
          onChange={handleSlider}
          className="cs-slider w-full mb-8"
          aria-label="Invoice amount slider"
        />

        <div className="grid grid-cols-2 gap-4">
          <div className="border-t border-[var(--line-soft)] pt-4">
            <p className="cs-mono text-xs text-[var(--slate)] mb-1.5">Platform fee (0.5%)</p>
            <p className="cs-mono text-xl" style={{ color: "var(--sage-bright)" }}>
              ${fmt(fee)}
            </p>
          </div>
          <div className="border-t border-[var(--line-soft)] pt-4">
            <p className="cs-mono text-xs text-[var(--slate)] mb-1.5">You receive</p>
            <p className="cs-serif text-xl font-medium text-[var(--ink)] tabular-nums">
              ${fmt(youReceive)}
            </p>
          </div>
        </div>

        <p className="mt-6 text-xs text-[var(--slate)] leading-relaxed">
          Illustrative calculator — not a real transaction. Network fees for the underlying
          blockchain transaction are separate and not set by Crypto Slip.
        </p>
      </div>
    </div>
  );
}
