import { Fragment } from "react";
import { FileText, ArrowRight, Wallet } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

export default function WalletFlow() {
  const [ref, visible] = useReveal();
  const nodes = [
    { icon: FileText, label: "Client pays", sub: "via invoice link" },
    { icon: ArrowRight, label: "Payment request", sub: "processed" },
    { icon: Wallet, label: "Your wallet", sub: "receives funds" },
  ];

  return (
    <section className="py-20 md:py-28" style={{ background: "#12151C" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={visible ? "cs-reveal" : "opacity-0"}>
          <p className="cs-mono text-xs tracking-widest uppercase mb-4" style={{ color: "#E4D5AE" }}>
            Where the money goes
          </p>
          <h2 className="cs-serif text-3xl sm:text-4xl font-medium tracking-tight max-w-xl leading-[1.15]" style={{ color: "#FAF9F6" }}>
            Payments go to your wallet. Not ours.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed" style={{ color: "#B8BAC0" }}>
            Crypto Slip doesn't custody funds. You choose the destination wallet
            on every invoice, and payment is routed there directly.
          </p>
        </div>

        <div className="mt-16 rounded-sm border" style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)" }}>
          <div className="flex flex-col sm:flex-row items-stretch">
            {nodes.map((node, i) => {
              const Icon = node.icon;
              const isLast = i === 2;
              return (
                <Fragment key={node.label}>
                  <div className="flex-1 flex flex-col items-center text-center px-6 py-8">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center mb-4 border"
                      style={{
                        borderColor: isLast ? "#E4D5AE" : "rgba(255,255,255,0.2)",
                        background: isLast ? "rgba(228,213,174,0.1)" : "transparent",
                      }}
                    >
                      <Icon size={16} strokeWidth={1.75} style={{ color: isLast ? "#E4D5AE" : "#FAF9F6" }} />
                    </div>
                    <p className="font-medium text-sm" style={{ color: "#FAF9F6" }}>{node.label}</p>
                    <p className="cs-mono text-xs mt-1.5" style={{ color: "#9CA0A8" }}>{node.sub}</p>
                  </div>
                  {!isLast && (
                    <div
                      className="hidden sm:block w-px my-8"
                      style={{ background: "rgba(255,255,255,0.1)" }}
                      aria-hidden="true"
                    />
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
