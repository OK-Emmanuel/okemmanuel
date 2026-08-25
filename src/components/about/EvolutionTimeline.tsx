const STAGES = [
  { title: "Design", description: "Visual communication and creative work." },
  { title: "Engineering", description: "Software, systems and technical capability." },
  { title: "Strategy", description: "Business, products, markets and leverage." },
  { title: "Leadership", description: "People, teams, responsibility and influence." },
  {
    title: "Human Development",
    description: "Education, mentorship and capability.",
  },
  {
    title: "Venture Building",
    description: "Companies, products and institutions.",
  },
  {
    title: "Catalysis",
    description: "Creating systems that enable other people to build.",
  },
];

export default function EvolutionTimeline() {
  return (
    <section className="relative border-y border-line bg-surface py-28 md:py-36">
      <div className="section-shell">
        <h2 className="max-w-2xl font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
          From making things to building ecosystems.
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          A timeline of evolution, not a preservation of obsolete labels.
        </p>

        <div className="relative mt-16 flex flex-col gap-10 md:gap-12">
          <div
            aria-hidden
            className="absolute left-[0.9rem] top-2 bottom-2 hidden w-px bg-line md:block"
          />
          {STAGES.map((stage, i) => (
            <div key={stage.title} className="relative flex gap-6 md:gap-10">
              <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-surface font-serif text-sm text-gold">
                {i + 1}
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground md:text-2xl">
                  {stage.title}
                </h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-muted">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
