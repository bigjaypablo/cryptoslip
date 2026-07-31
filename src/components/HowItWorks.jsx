import { FileText, Send, Wallet, CheckCircle2 } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

export default function HowItWorks() {
  const [ref, visible] = useReveal();
  const steps = [
    {
      icon: FileText,
      title: "Create",
      copy: "Build an itemized invoice with your client's details, the work, and the amount due.",
    },
    {
      icon: Send,
      title: "Send",
      copy: "Share a single link. Your client sees a clear payment request — not a wallet address.",
    },
    {
      icon: Wallet,
      title: "Get paid",
      copy: "Your client pays with supported crypto or stablecoins, routed to the wallet you set.",
    },
    {
      icon: CheckCircle2,
      title: "Confirm",
      copy: "The invoice updates to paid. You keep a record — no more scrolling through chat.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28" style={{ background: "var(--paper-dim)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={visible ? "cs-reveal" : "opacity-0"}>
          <p className="cs-mono text-xs tracking-widest uppercase text-[var(--brass)] mb-4">How it works</p>
          <h2 className="cs-serif text-3xl sm:text-4xl font-medium tracking-tight max-w-xl leading-[1.15]">
            From invoice to wallet, in four steps.
          </h2>
        </div>

        <div className="mt-16 relative">
          <div
            className="hidden md:block absolute top-6 left-0 right-0 h-px"
            style={{ background: "var(--line)" }}
            aria-hidden="true"
          />
          <div className="grid md:grid-cols-4 gap-10 md:gap-6 relative">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white border border-[var(--line)] relative z-10 mb-5">
                    <Icon size={18} strokeWidth={1.75} style={{ color: "var(--sage-bright)" }} />
                  </div>
                  <h3 className="cs-serif text-lg font-medium mb-1.5 text-[var(--ink)]">{step.title}</h3>
                  <p className="text-[var(--ink-soft)] text-[14.5px] leading-relaxed max-w-[220px]">{step.copy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
