export function InvoiceVisual() {
  return (
    <div className="bg-white border border-[var(--line)] rounded-sm p-6 w-full max-w-sm shadow-[0_2px_8px_rgba(18,21,28,0.05),0_16px_32px_-16px_rgba(18,21,28,0.15)]">
      <div className="flex justify-between items-start mb-5">
        <div>
          <p className="cs-serif text-base font-medium text-[var(--ink)]">Invoice</p>
          <p className="cs-mono text-[11px] text-[var(--slate)]">INV-0148</p>
        </div>
        <span className="cs-mono text-[10px] px-2 py-1 rounded-sm border" style={{ color: "var(--sage-bright)", borderColor: "var(--sage-bright)", background: "#F1F5F2" }}>
          Sent
        </span>
      </div>
      <div className="space-y-2.5 text-sm">
        <div className="flex justify-between"><span className="text-[var(--slate)]">Client</span><span className="text-[var(--ink)]">Renwick Design</span></div>
        <div className="flex justify-between"><span className="text-[var(--slate)]">Service</span><span className="text-[var(--ink)]">Brand refresh</span></div>
        <div className="flex justify-between border-t border-[var(--line-soft)] pt-2.5 mt-2.5">
          <span className="text-[var(--slate)]">Total</span>
          <span className="cs-mono text-[var(--ink)] tabular-nums">$2,100.00</span>
        </div>
      </div>
    </div>
  );
}

export function PaymentRequestVisual() {
  return (
    <div className="bg-white border border-[var(--line)] rounded-sm p-6 w-full max-w-sm shadow-[0_2px_8px_rgba(18,21,28,0.05),0_16px_32px_-16px_rgba(18,21,28,0.15)]">
      <p className="cs-mono text-[11px] text-[var(--slate)] mb-4">Payment request</p>
      <p className="cs-serif text-2xl font-medium text-[var(--ink)] mb-1 tabular-nums">$850.00</p>
      <p className="text-sm text-[var(--slate)] mb-5">Due to Marlow & Co.</p>
      <div className="flex gap-2">
        <div className="flex-1 rounded-sm py-2.5 text-center text-sm font-medium" style={{ background: "var(--sage-bright)", color: "var(--paper)" }}>
          Pay now
        </div>
      </div>
    </div>
  );
}

export function WalletVisual() {
  return (
    <div className="bg-white border border-[var(--line)] rounded-sm p-6 w-full max-w-sm shadow-[0_2px_8px_rgba(18,21,28,0.05),0_16px_32px_-16px_rgba(18,21,28,0.15)]">
      <p className="cs-mono text-[11px] text-[var(--slate)] mb-4">Destination wallet</p>
      <div className="rounded-sm p-3.5" style={{ background: "var(--paper-dim)" }}>
        <p className="cs-mono text-xs text-[var(--ink)]">0x8f3a...c91B</p>
      </div>
      <p className="text-xs text-[var(--slate)] mt-3 leading-relaxed">
        Set once per invoice. Funds route here directly.
      </p>
    </div>
  );
}

export function ShareVisual() {
  return (
    <div className="bg-white border border-[var(--line)] rounded-sm p-6 w-full max-w-sm shadow-[0_2px_8px_rgba(18,21,28,0.05),0_16px_32px_-16px_rgba(18,21,28,0.15)]">
      <p className="cs-mono text-[11px] text-[var(--slate)] mb-3">Shareable link</p>
      <div className="flex items-center gap-2 rounded-sm border border-[var(--line)] px-3 py-2.5">
        <p className="cs-mono text-xs text-[var(--ink)] truncate flex-1">cryptoslip.io/i/0148</p>
        <span className="cs-mono text-[10px] text-[var(--sage-bright)] shrink-0">Copy</span>
      </div>
    </div>
  );
}

export function StatusVisual() {
  const rows = [
    { label: "INV-0148", status: "Paid", color: "sage" },
    { label: "INV-0147", status: "Pending", color: "brass" },
    { label: "INV-0145", status: "Overdue", color: "rust" },
  ];
  const colors = {
    sage: { color: "var(--sage-bright)", borderColor: "var(--sage-bright)", background: "#F1F5F2" },
    brass: { color: "var(--brass)", borderColor: "var(--brass)", background: "#FAF3E4" },
    rust: { color: "#A3492F", borderColor: "#A3492F", background: "#F7EEEA" },
  };
  return (
    <div className="bg-white border border-[var(--line)] rounded-sm p-6 w-full max-w-sm shadow-[0_2px_8px_rgba(18,21,28,0.05),0_16px_32px_-16px_rgba(18,21,28,0.15)]">
      <p className="cs-mono text-[11px] text-[var(--slate)] mb-4">Payment status</p>
      <div className="space-y-2.5">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center justify-between">
            <span className="cs-mono text-xs text-[var(--ink)]">{r.label}</span>
            <span className="cs-mono text-[10px] px-2 py-1 rounded-sm border" style={colors[r.color]}>
              {r.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HistoryVisual() {
  return (
    <div className="bg-white border border-[var(--line)] rounded-sm p-6 w-full max-w-sm shadow-[0_2px_8px_rgba(18,21,28,0.05),0_16px_32px_-16px_rgba(18,21,28,0.15)]">
      <p className="cs-mono text-[11px] text-[var(--slate)] mb-4">Invoice history</p>
      <div className="space-y-3">
        {["INV-0148", "INV-0147", "INV-0146", "INV-0145"].map((id) => (
          <div key={id} className="flex items-center justify-between border-b border-[var(--line-soft)] pb-2.5 last:border-0 last:pb-0">
            <span className="cs-mono text-xs text-[var(--slate)]">{id}</span>
            <span className="cs-mono text-xs text-[var(--ink)]">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AssetsVisual() {
  return (
    <div className="bg-white border border-[var(--line)] rounded-sm p-6 w-full max-w-sm shadow-[0_2px_8px_rgba(18,21,28,0.05),0_16px_32px_-16px_rgba(18,21,28,0.15)]">
      <p className="cs-mono text-[11px] text-[var(--slate)] mb-4">Paid in</p>
      <div className="flex items-baseline gap-2">
        <p className="cs-serif text-xl font-medium text-[var(--ink)]">Crypto</p>
        <span className="text-[var(--slate)]">&</span>
        <p className="cs-serif text-xl font-medium text-[var(--ink)]">Stablecoins</p>
      </div>
      <p className="text-xs text-[var(--slate)] mt-3 leading-relaxed">
        Confirmed supported assets and networks are listed at checkout.
      </p>
    </div>
  );
}

export function PricingVisual() {
  return (
    <div className="bg-white border border-[var(--line)] rounded-sm p-6 w-full max-w-sm shadow-[0_2px_8px_rgba(18,21,28,0.05),0_16px_32px_-16px_rgba(18,21,28,0.15)]">
      <p className="cs-mono text-[11px] text-[var(--slate)] mb-4">Illustrative example</p>
      <div className="flex items-center justify-between">
        <div>
          <p className="cs-serif text-2xl font-medium text-[var(--ink)] tabular-nums">$1,000</p>
          <p className="text-xs text-[var(--slate)] mt-0.5">Invoice amount</p>
        </div>
        <div className="text-right">
          <p className="cs-mono text-lg tabular-nums" style={{ color: "var(--sage-bright)" }}>$5.00</p>
          <p className="text-xs text-[var(--slate)] mt-0.5">Fee (0.5%)</p>
        </div>
      </div>
    </div>
  );
}
