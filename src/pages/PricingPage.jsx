import PricingHero from "../components/PricingHero";
import FeeTable from "../components/FeeTable";
import FeeCalculator from "../components/FeeCalculator";
import WhatYouGet from "../components/WhatYouGet";
import PricingTrust from "../components/PricingTrust";
import FeaturesClosingCTA from "../components/FeaturesClosingCTA";
import { useReveal } from "../hooks/useReveal";

function HowFeeWorks() {
  const [ref, visible] = useReveal();
  return (
    <section className="pb-20 md:pb-28">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`max-w-xl mb-12 ${visible ? "cs-reveal" : "opacity-0"}`}>
          <p className="cs-mono text-xs tracking-widest uppercase text-[var(--brass)] mb-4">How the fee works</p>
          <h2 className="cs-serif text-3xl sm:text-4xl font-medium tracking-tight leading-[1.15]">
            One simple platform fee: 0.5%.
          </h2>
          <p className="mt-5 text-[var(--ink-soft)] leading-relaxed">
            The platform fee is calculated as 0.5% of the transaction amount routed through Crypto Slip.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <FeeTable />
          <FeeCalculator />
        </div>
      </div>
    </section>
  );
}

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <HowFeeWorks />
      <WhatYouGet />
      <PricingTrust />
      <FeaturesClosingCTA />
    </>
  );
}
