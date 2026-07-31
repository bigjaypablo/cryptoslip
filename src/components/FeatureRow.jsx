import { useReveal } from "../hooks/useReveal";

export default function FeatureRow({ index, title, copy, visual, reverse }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`py-14 md:py-20 border-t border-[var(--line)] ${visible ? "cs-reveal" : "opacity-0"}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
            reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div>
            <span className="cs-mono text-xs text-[var(--slate)]">{String(index).padStart(2, "0")}</span>
            <h2 className="cs-serif text-2xl sm:text-3xl font-medium mt-3 mb-4 text-[var(--ink)] leading-tight">
              {title}
            </h2>
            <div className="text-[var(--ink-soft)] leading-relaxed space-y-3 max-w-md">{copy}</div>
          </div>
          <div className="flex justify-center">{visual}</div>
        </div>
      </div>
    </div>
  );
}
