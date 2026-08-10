import { useState } from "react";
import { ArrowRight, Copy, Check } from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  return (
    <section id="top" className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
          <div className="cs-reveal">
            <p className="cs-mono text-xs tracking-widest uppercase text-[var(--brass)] mb-5">
              Invoicing · Payment requests · Crypto
            </p>
            <h1 className="cs-serif text-[2.6rem] leading-[1.08] sm:text-6xl sm:leading-[1.05] font-medium tracking-tight text-[var(--ink)]">
              Bill your clients.
              <br />
              Get paid in crypto,
              <br />
              <span style={{ color: "var(--sage-bright)" }}>straight to your wallet.</span>
            </h1>
            <p className="mt-6 text-lg text-[var(--ink-soft)] max-w-md leading-relaxed">
              Crypto Slip turns a wallet address in a DM into an actual invoice —
              itemized, shareable, and paid directly into the wallet you choose.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <a
                href="#create"
                className="cs-btn-refined group inline-flex items-center justify-center gap-2 text-[var(--paper)] font-medium px-6 py-3.5 rounded-sm hover:-translate-y-0.5 cs-focus"
                style={{ background: "var(--ink)" }}
              >
                Create your first invoice
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 font-medium px-6 py-3.5 rounded-sm border border-[var(--line)] text-[var(--ink)] hover:border-[var(--ink)] transition-colors cs-focus"
              >
                See how it works
              </a>
            </div>

            <p className="mt-7 text-sm text-[var(--slate)]">
              0.5% platform fee on transactions routed through Crypto Slip. Nothing else.
            </p>
          </div>

          <div className="relative cs-reveal" style={{ animationDelay: "0.15s" }}>
            <div
              className="relative bg-white rounded-sm shadow-[0_2px_8px_rgba(18,21,28,0.06),0_20px_45px_-15px_rgba(18,21,28,0.18)] border border-[var(--line-soft)] p-7 sm:p-8 max-w-md mx-auto transition-transform duration-500 hover:rotate-0"
              style={{ transform: "rotate(-1.4deg)" }}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="cs-serif text-lg font-medium text-[var(--ink)]">Invoice</p>
                  <p className="cs-mono text-xs text-[var(--slate)] mt-0.5">INV-0142 · Sample</p>
                </div>
                <span
                  className="cs-mono text-[11px] px-2.5 py-1 rounded-sm border"
                  style={{ color: "var(--sage-bright)", borderColor: "var(--sage-bright)", background: "#F1F5F2" }}
                >
                  Awaiting payment
                </span>
              </div>

              <div className="space-y-3 pb-5 mb-5 border-b border-[var(--line-soft)]">
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--slate)]">Billed to</span>
                  <span className="text-[var(--ink)] font-medium">Foster & Lane Studio</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--slate)]">For</span>
                  <span className="text-[var(--ink)]">Landing page development</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--slate)]">Due</span>
                  <span className="text-[var(--ink)]">On receipt</span>
                </div>
              </div>

              <div className="flex justify-between items-baseline mb-6">
                <span className="text-sm text-[var(--slate)]">Amount due</span>
                <span className="cs-serif text-3xl font-medium text-[var(--ink)] tabular-nums">$1,240.00</span>
              </div>

              <div
                className="rounded-sm p-3.5 flex items-center justify-between gap-3"
                style={{ background: "var(--paper-dim)" }}
              >
                <div className="min-w-0">
                  <p className="text-[11px] text-[var(--slate)] mb-1">Pay to wallet</p>
                  <p className="cs-mono text-xs text-[var(--ink)] truncate">0x8f3a...c91B</p>
                </div>
                <button
                  onClick={() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1500);
                  }}
                  className="cs-focus shrink-0 p-2 rounded-sm border border-[var(--line)] hover:border-[var(--ink)] transition-colors bg-white"
                  aria-label="Copy wallet address"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            <div
              className="hidden sm:block absolute -bottom-5 -right-3 bg-white border border-[var(--line-soft)] rounded-sm shadow-[0_10px_25px_-10px_rgba(18,21,28,0.15)] px-4 py-3"
              style={{ transform: "rotate(3deg)" }}
            >
              <p className="text-[10px] text-[var(--slate)] mb-0.5">Platform fee</p>
              <p className="cs-mono text-sm text-[var(--ink)] tabular-nums">$6.20 (0.5%)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
