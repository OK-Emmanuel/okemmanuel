const PREVIEWS = [
  {
    name: "Homifice",
    description: "Hotel Management System",
    result: "Streamlined operations and improved guest experience.",
  },
  {
    name: "Revats",
    description: "AI-Powered Job Matching Platform",
    result: "Faster, more relevant matches between candidates and employers.",
  },
  {
    name: "DasaMonie",
    description: "Fintech Platform",
    result: "A secure, scalable foundation for everyday financial transactions.",
  },
];

export default function CaseStudyPreview() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="section-shell">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
            Selected work
          </h2>
          <a
            href="/work"
            className="text-sm font-semibold text-gold transition-colors hover:text-gold-soft"
          >
            View all case studies →
          </a>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PREVIEWS.map((study) => (
            <a
              key={study.name}
              href="/work"
              className="group flex flex-col justify-between rounded-2xl border border-line bg-surface p-8 transition-colors hover:border-gold/40"
            >
              <div>
                <h3 className="font-serif text-2xl text-foreground">
                  {study.name}
                </h3>
                <p className="mt-2 text-sm font-medium uppercase tracking-wide text-gold">
                  {study.description}
                </p>
              </div>
              <p className="mt-6 leading-relaxed text-gold-soft">
                {study.result}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
