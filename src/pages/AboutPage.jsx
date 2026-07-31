import AboutHero from "../components/AboutHero";
import AboutSection from "../components/AboutSection";
import FeaturesClosingCTA from "../components/FeaturesClosingCTA";

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <AboutSection index={1} eyebrow="Why we exist" heading="Because a wallet address isn't a payment experience.">
        <p>Today, freelancers, agencies, and Web3 teams can work with clients anywhere in the world.</p>
        <p>But payment requests are often still informal — a wallet address in a DM, a payment amount in another message, a network name somewhere else.</p>
        <p>Crypto Slip brings those pieces into a more professional invoicing and payment collection experience.</p>
      </AboutSection>

      <AboutSection index={2} eyebrow="Our mission" heading="Make global payments easier to request, understand, and complete.">
        <p>Our goal is straightforward: help people and businesses create professional payment requests and collect global payments using crypto and stablecoins.</p>
        <p>We're building for the global internet economy — starting with the people already working across borders today.</p>
      </AboutSection>

      <AboutSection index={3} eyebrow="Who we build for" heading="Built for people who work beyond borders.">
        <p>Web3 freelancers. Digital agencies. Crypto projects. Creators. Consultants. Online businesses. International service providers.</p>
        <p>Anyone who needs a better way to request and collect payments using crypto or stablecoins.</p>
      </AboutSection>

      <AboutSection index={4} eyebrow="Our vision" heading="From crypto invoicing to global payment infrastructure." dark>
        <p>We see a future where crypto and stablecoins are not something businesses have to "figure out." They're simply another way to get paid.</p>
        <p>Crypto Slip is starting with professional invoicing and payment collection — with room to grow alongside the global economy built on the internet.</p>
      </AboutSection>

      <FeaturesClosingCTA />
    </>
  );
}
