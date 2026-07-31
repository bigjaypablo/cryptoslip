import FeaturesHero from "../components/FeaturesHero";
import FeatureRow from "../components/FeatureRow";
import FeaturesClosingCTA from "../components/FeaturesClosingCTA";
import {
  InvoiceVisual,
  PaymentRequestVisual,
  WalletVisual,
  ShareVisual,
  StatusVisual,
  HistoryVisual,
  AssetsVisual,
  PricingVisual,
} from "../components/FeatureVisuals";

export default function FeaturesPage() {
  const features = [
    {
      title: "Professional crypto invoices",
      visual: <InvoiceVisual />,
      copy: (
        <>
          <p>Turn your payment request into something that looks like part of a professional business process.</p>
          <p>Add the invoice details your client needs and present your request clearly — without relying on a wallet address buried inside a chat.</p>
        </>
      ),
    },
    {
      title: "Payment requests",
      visual: <PaymentRequestVisual />,
      copy: (
        <>
          <p>Request payment with structure and clarity.</p>
          <p>Instead of manually explaining what your client owes and where to send it, give them a dedicated payment request that brings the details together.</p>
        </>
      ),
    },
    {
      title: "Direct-to-wallet payments",
      visual: <WalletVisual />,
      copy: (
        <>
          <p>Receive payments through the wallet you designate.</p>
          <p>Crypto Slip is built around a direct payment experience — you choose the destination, and payment is routed there.</p>
        </>
      ),
    },
    {
      title: "Shareable payment experience",
      visual: <ShareVisual />,
      copy: (
        <>
          <p>Send your invoice or payment request to your client and give them a clear path to payment.</p>
          <p>No unnecessary back-and-forth. No searching through old messages for payment details.</p>
        </>
      ),
    },
    {
      title: "Payment status",
      visual: <StatusVisual />,
      copy: (
        <>
          <p>Know where your payment requests stand.</p>
          <p>Keep track of payment activity and identify which requests are still awaiting payment and which have been completed.</p>
        </>
      ),
    },
    {
      title: "Invoice history",
      visual: <HistoryVisual />,
      copy: (
        <>
          <p>Keep your payment requests organized in one place.</p>
          <p>Your invoicing history gives you a clearer record of the payment requests you've created through Crypto Slip.</p>
        </>
      ),
    },
    {
      title: "Crypto & stablecoin payments",
      visual: <AssetsVisual />,
      copy: (
        <>
          <p>Use crypto and stablecoins as the payment rails behind your invoices and payment requests.</p>
          <p>Crypto Slip is built for professionals who want to work globally while giving clients an alternative way to pay.</p>
        </>
      ),
    },
    {
      title: "Transparent pricing",
      visual: <PricingVisual />,
      copy: (
        <>
          <p>Crypto Slip charges a flat 0.5% platform fee on transactions routed through the platform.</p>
          <p>You know the platform fee before you start collecting payments — no tiers, no subscription.</p>
        </>
      ),
    },
  ];

  return (
    <>
      <FeaturesHero />
      {features.map((f, i) => (
        <FeatureRow
          key={f.title}
          index={i + 1}
          title={f.title}
          copy={f.copy}
          visual={f.visual}
          reverse={i % 2 === 1}
        />
      ))}
      <FeaturesClosingCTA />
    </>
  );
}
