import { ArrowRight } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

export default function FeaturesClosingCTA() {
  const [ref, visible] = useReveal();
  return (
    <section className="py-24 md:py-32" style={{ background: "#12151C" }}>
      <div ref={ref} className={`max-w-2xl mx-auto px-6 text-center ${visible ? "cs-reveal" : "opacity-0"}`}>
        <h2 className="cs-serif text-3xl sm:text-5xl font-medium tracking-tight leading-[1.1]" style={{ color: "#FAF9F6" }}>
          Make crypto payments feel more professional.
        </h2>
        <p className="mt-6 leading-relaxed" style={{ color: "#B8BAC0" }}>
          Your clients shouldn't have to navigate an informal payment process
          just because the payment is made in crypto. Give them a better way to pay.
        </p>
        <a
          href="/#create"
          className="group mt-9 inline-flex items-center justify-center gap-2 font-medium px-7 py-3.5 rounded-sm transition-transform hover:-translate-y-0.5 cs-focus"
          style={{ backgroundColor: "#E4D5AE", color: "#12151C" }}
        >
          Create your first invoice
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
}
