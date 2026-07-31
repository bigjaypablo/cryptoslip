import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Features", to: "/features" },
    { label: "How it works", to: "/#how-it-works" },
    { label: "Pricing", to: "/pricing" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-sm border-b border-[var(--line)]" : "border-b border-transparent"
      }`}
      style={{ background: scrolled ? "rgba(250,249,246,0.95)" : "transparent" }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 cs-focus" aria-label="Crypto Slip home">
          <span className="cs-serif text-xl font-medium tracking-tight" style={{ color: "var(--ink)" }}>
            Crypto Slip
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors cs-focus"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#signin"
            className="text-sm text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors px-3 py-2 cs-focus"
          >
            Sign in
          </a>
          <Link
            to="/#create"
            className="text-sm font-medium text-[var(--paper)] px-4 py-2.5 rounded-sm transition-transform hover:-translate-y-0.5 cs-focus"
            style={{ background: "var(--sage-bright)" }}
          >
            Create an invoice
          </Link>
        </div>

        <button
          className="md:hidden cs-focus p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-[var(--line)] bg-[var(--paper)] px-6 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-base text-[var(--ink-soft)] cs-focus py-1"
            >
              {l.label}
            </Link>
          ))}
          <div className="h-px bg-[var(--line)] my-1" />
          <a href="#signin" onClick={() => setOpen(false)} className="text-base text-[var(--ink-soft)] cs-focus py-1">
            Sign in
          </a>
          <Link
            to="/#create"
            onClick={() => setOpen(false)}
            className="text-base font-medium text-center text-[var(--paper)] px-4 py-3 rounded-sm cs-focus"
            style={{ background: "var(--sage-bright)" }}
          >
            Create an invoice
          </Link>
        </div>
      )}
    </header>
  );
}
