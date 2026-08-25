const FLOW = [
  "Human Potential",
  "Thinking",
  "Technology",
  "Ventures",
  "Leadership",
  "Systems",
  "Impact",
];

export default function OnePersonManyExpressions() {
  return (
    <section className="relative border-y border-line bg-surface py-28 md:py-36">
      <div className="section-shell">
        <h2 className="max-w-3xl font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
          Different disciplines. One underlying philosophy.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          My work spans technology, entrepreneurship, leadership, education
          and human development. They may look like different fields from
          the outside, but they are connected by one question:
        </p>
        <p className="mt-4 max-w-2xl font-serif text-2xl italic text-gold-soft">
          How do we turn human potential into meaningful capability and
          impact?
        </p>

        <div className="mt-16 flex flex-wrap items-center gap-3">
          {FLOW.map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <span className="rounded-full border border-line bg-surface-raised px-5 py-3 text-sm font-medium text-foreground">
                {step}
              </span>
              {i < FLOW.length - 1 && (
                <span aria-hidden className="text-gold">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
