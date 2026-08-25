import AmbientBackground from "./AmbientBackground";

const DOMAINS = [
  {
    number: "01",
    title: "Build",
    description:
      "Technology, products, software systems, digital infrastructure and ventures.",
    detail:
      "I turn complex problems and opportunities into useful products, systems and businesses.",
  },
  {
    number: "02",
    title: "Develop",
    description: "People, leaders, teams and capabilities.",
    detail:
      "I help people develop the thinking, skills and leadership capacity required to create meaningful outcomes.",
  },
  {
    number: "03",
    title: "Think",
    description: "Philosophy, strategy, frameworks, theories and ideas.",
    detail:
      "I study the principles behind people, technology, organizations and society, and turn what I learn into usable frameworks.",
  },
  {
    number: "04",
    title: "Catalyze",
    description: "Initiatives, communities and ecosystems.",
    detail:
      "I create platforms and initiatives that help people move from potential and awareness toward capability, creation and impact.",
  },
];

export default function Domains() {
  return (
    <section id="domains" className="relative py-28 md:py-36">
      <AmbientBackground variant="grid" />

      <div className="section-shell relative">
        <h2 className="max-w-2xl font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
          What I do
        </h2>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {DOMAINS.map((domain) => (
            <div
              key={domain.number}
              className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-8 transition-colors hover:border-gold/40"
            >
              <span className="font-serif text-5xl text-gold/30 transition-colors group-hover:text-gold/60">
                {domain.number}
              </span>
              <h3 className="mt-6 font-serif text-2xl text-foreground">
                {domain.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-gold-soft">
                {domain.description}
              </p>
              <p className="mt-3 leading-relaxed text-muted">
                {domain.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
