import { ArrowRight } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

export default function FinalCTA() {
  const [ref, visible] = useReveal();
  return (
    <section id="create" className="py-24 md:py-32" style={{ background: "#12151C" }}>
      <div ref={ref} className={`max-w-3xl mx-auto px-6 text-center ${visible ? "cs-reveal" : "opacity-0"}`}>
        <h2 className="cs-serif text-3xl sm:text-5xl font-medium tracking-tight leading-[1.1]" style={{ color: "#FAF9F6" }}>
          Your next payment shouldn't start with a wallet address in a DM.
        </h2>
        <p className="mt-6 max-w-lg mx-auto leading-relaxed" style={{ color: "#B8BAC0" }}>
          Create a proper invoice. Send one link. Get paid directly into your wallet.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#top"
            className="cs-btn-refined inline-flex items-center justify-center gap-2 font-medium px-7 py-3.5 rounded-sm hover:-translate-y-0.5 cs-focus"
            style={{ backgroundColor: "#E4D5AE", color: "#12151C" }}
          >
            Create your first invoice
            <ArrowRight size={16} />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 font-medium px-7 py-3.5 rounded-sm transition-colors cs-focus"
            style={{ backgroundColor: "transparent", border: "1px solid rgba(255,255,255,0.3)", color: "#FAF9F6" }}
          >
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
