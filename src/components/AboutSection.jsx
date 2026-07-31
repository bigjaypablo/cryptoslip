import { useReveal } from "../hooks/useReveal";

export default function AboutSection({ index, eyebrow, heading, children, dark }) {
  const [ref, visible] = useReveal();
  return (
    <section
      className={`py-16 md:py-24 ${index !== 1 ? "border-t" : ""}`}
      style={{
        borderColor: dark ? "rgba(255,255,255,0.1)" : "var(--line)",
        background: dark ? "#12151C" : "transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`grid md:grid-cols-[100px_1fr] gap-6 md:gap-10 ${visible ? "cs-reveal" : "opacity-0"}`}>
          <span
            className="cs-serif text-3xl font-light leading-none"
            style={{ color: dark ? "rgba(255,255,255,0.25)" : "var(--line)" }}
          >
            {String(index).padStart(2, "0")}
          </span>
          <div className="max-w-2xl">
            <p
              className="cs-mono text-xs tracking-widest uppercase mb-4"
              style={{ color: dark ? "#E4D5AE" : "var(--brass)" }}
            >
              {eyebrow}
            </p>
            <h2
              className="cs-serif text-2xl sm:text-3xl font-medium tracking-tight leading-[1.2] mb-5"
              style={{ color: dark ? "#FAF9F6" : "var(--ink)" }}
            >
              {heading}
            </h2>
            <div
              className="leading-relaxed space-y-3 text-[15px] sm:text-base"
              style={{ color: dark ? "#B8BAC0" : "var(--ink-soft)" }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
