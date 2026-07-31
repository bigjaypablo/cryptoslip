import { useReveal } from "../hooks/useReveal";

const invoiceRows = [
  { id: "INV-0142", client: "Foster & Lane Studio", amount: "$1,240.00", status: "Pending", statusColor: "brass" },
  { id: "INV-0141", client: "Northbridge Agency", amount: "$3,850.00", status: "Paid", statusColor: "sage" },
  { id: "INV-0139", client: "Marlow & Co.", amount: "$620.00", status: "Paid", statusColor: "sage" },
];

function StatusPill({ status, color }) {
  const styles =
    color === "sage"
      ? { color: "var(--sage-bright)", borderColor: "var(--sage-bright)", background: "#F1F5F2" }
      : { color: "var(--brass)", borderColor: "var(--brass)", background: "#FAF3E4" };
  return (
    <span className="cs-mono text-[10px] px-2 py-1 rounded-sm border inline-block" style={styles}>
      {status}
    </span>
  );
}

export default function Features() {
  const [ref, visible] = useReveal();
  const features = [
    {
      title: "Direct-to-wallet payments",
      copy: "Funds route to the wallet you specify. Crypto Slip doesn't hold your money.",
    },
    {
      title: "Shareable payment link",
      copy: "One link replaces the back-and-forth of sending wallet details manually.",
    },
    {
      title: "Invoice history",
      copy: "Every invoice you've created and sent, kept in one organized place.",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={visible ? "cs-reveal" : "opacity-0"}>
          <p className="cs-mono text-xs tracking-widest uppercase text-[var(--brass)] mb-4">Features</p>
          <h2 className="cs-serif text-3xl sm:text-4xl font-medium tracking-tight max-w-xl leading-[1.15]">
            Everything you need to ask for payment properly.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 md:row-span-2 bg-white border border-[var(--line)] rounded-sm overflow-hidden flex flex-col transition-shadow hover:shadow-[0_8px_24px_-8px_rgba(18,21,28,0.15)]">
            <div className="p-8 pb-0">
              <h3 className="cs-serif text-2xl font-medium mb-3 text-[var(--ink)]">Payment tracking</h3>
              <p className="text-[var(--ink-soft)] leading-relaxed max-w-sm mb-6">
                See which invoices are paid, pending, or overdue at a glance — a running record instead of scattered chat messages.
              </p>
            </div>

            <div className="mt-auto">
              <div className="px-8 py-2.5 flex items-center gap-6 cs-mono text-[11px] text-[var(--slate)] uppercase tracking-wide border-t border-[var(--line-soft)]" style={{ background: "var(--paper-dim)" }}>
                <span className="w-24">Invoice</span>
                <span className="flex-1">Client</span>
                <span className="w-24 text-right">Amount</span>
                <span className="w-20 text-right">Status</span>
              </div>
              {invoiceRows.map((row, i) => (
                <div
                  key={row.id}
                  className={`px-8 py-3.5 flex items-center gap-6 ${
                    i !== invoiceRows.length - 1 ? "border-b border-[var(--line-soft)]" : ""
                  }`}
                >
                  <span className="cs-mono text-xs text-[var(--slate)] w-24">{row.id}</span>
                  <span className="text-sm text-[var(--ink)] flex-1 truncate">{row.client}</span>
                  <span className="cs-mono text-xs text-[var(--ink)] w-24 text-right tabular-nums">{row.amount}</span>
                  <span className="w-20 text-right">
                    <StatusPill status={row.status} color={row.statusColor} />
                  </span>
                </div>
              ))}
              <p className="px-8 py-3 text-[10px] text-[var(--slate)] cs-mono">Sample data for illustration</p>
            </div>
          </div>

          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white border border-[var(--line)] rounded-sm p-7 transition-shadow hover:shadow-[0_8px_24px_-8px_rgba(18,21,28,0.15)]"
            >
              <h3 className="cs-serif text-lg font-medium mb-2 text-[var(--ink)]">{f.title}</h3>
              <p className="text-[var(--ink-soft)] text-[14.5px] leading-relaxed">{f.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
