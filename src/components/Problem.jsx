import { useReveal } from "../hooks/useReveal";

export default function Problem() {
  const [ref, visible] = useReveal();
  const items = [
    {
      title: "Payment requests live in chat threads",
      copy: "A wallet address pasted into a message doesn't look like part of a real business — and it's easy to lose track of.",
    },
    {
      title: "Clients ask the same questions",
      copy: "How much do I send? Which network? Where's the address again? Every question is friction between finished work and getting paid.",
    },
    {
      title: "There's no record afterward",
      copy: "Once the message scrolls away, there's no invoice, no reference number, nothing that resembles a normal paper trail.",
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={visible ? "cs-reveal" : "opacity-0"}>
          <p className="cs-mono text-xs tracking-widest uppercase text-[var(--brass)] mb-4">The problem</p>
          <h2 className="cs-serif text-3xl sm:text-4xl font-medium tracking-tight max-w-xl leading-[1.15]">
            Crypto payments are global. The payment experience rarely is.
          </h2>
        </div>

        <div className="mt-14 max-w-3xl">
          {items.map((item, i) => (
            <ProblemRow key={item.title} item={item} index={i} isLast={i === items.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemRow({ item, index, isLast }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`flex gap-6 sm:gap-10 py-7 ${!isLast ? "border-b border-[var(--line)]" : ""} ${
        visible ? "cs-reveal" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <span className="cs-serif text-4xl sm:text-5xl font-light shrink-0 leading-none" style={{ color: "var(--line)" }}>
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="pt-1">
        <h3 className="cs-serif text-lg sm:text-xl font-medium mb-2 text-[var(--ink)]">{item.title}</h3>
        <p className="text-[var(--ink-soft)] text-[15px] leading-relaxed max-w-lg">{item.copy}</p>
      </div>
    </div>
  );
}
