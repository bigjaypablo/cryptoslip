import Perforation from "./Perforation";

export default function Footer() {
  const cols = [
    {
      heading: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "How it works", href: "#how-it-works" },
        { label: "Fees", href: "#fees" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { label: "Documentation", href: "/docs" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      heading: "Company",
      links: [{ label: "Contact", href: "/contact" }],
    },
    {
      heading: "Legal",
      links: [
        { label: "Terms of Service", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
      ],
    },
  ];

  return (
    <footer className="pt-16 pb-10 border-t border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-10">
          <div>
            <span className="cs-serif text-xl font-medium text-[var(--ink)]">Crypto Slip</span>
            <p className="mt-3 text-sm text-[var(--slate)] max-w-xs leading-relaxed">
              Professional invoicing and payment collection, powered by crypto and stablecoins.
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-medium tracking-wide uppercase text-[var(--slate)] mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors cs-focus">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Perforation className="my-10 px-0" />

        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <p className="text-xs text-[var(--slate)] max-w-md leading-relaxed">
            Crypto Slip is an invoicing and payment collection platform. It is not a bank,
            cryptocurrency exchange, or traditional payment processor.
          </p>
          <p className="text-xs text-[var(--slate)]">© 2026 Crypto Slip. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
