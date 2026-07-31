import Hero from "../components/Hero";
import Perforation from "../components/Perforation";
import Problem from "../components/Problem";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import WalletFlow from "../components/WalletFlow";
import FeeSection from "../components/FeeSection";
import UseCases from "../components/UseCases";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Perforation />
      <Problem />
      <HowItWorks />
      <Features />
      <WalletFlow />
      <FeeSection />
      <UseCases />
      <FAQ />
      <FinalCTA />
    </>
  );
}
