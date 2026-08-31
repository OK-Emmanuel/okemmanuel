import AmbientBackground from "./AmbientBackground";
import HoverCard from "./motion/HoverCard";
import Reveal, { RevealGroup, RevealItem } from "./motion/Reveal";

const DOMAINS = [
  {
    number: "01",
    title: "Build",
    description:
      "Technology, products, softwares, digital infrastructure and ventures.",
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
      "I study the principles behind life, people, technology, organizations and society, and turn what I learn into usable frameworks.",
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
        <Reveal>
          <h2 className="max-w-2xl font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
            What I do
          </h2>
        </Reveal>

        {/* flat org-chart rail: heading trunk splits into two branches above the grid columns */}
        <div aria-hidden className="relative mt-10 hidden h-10 sm:block">
          <div className="absolute left-1/2 top-0 h-1/2 w-px -translate-x-1/2 bg-line" />
          <div className="absolute left-1/4 right-1/4 top-1/2 h-px bg-line" />
          <div className="absolute left-1/4 top-1/2 h-1/2 w-px -translate-x-1/2 bg-line" />
          <div className="absolute right-1/4 top-1/2 h-1/2 w-px translate-x-1/2 bg-line" />
        </div>

        <RevealGroup className="mt-6 grid gap-6 sm:mt-0 sm:grid-cols-2">
          {DOMAINS.map((domain, i) => (
            <RevealItem key={domain.number} className="relative">
              {/* stub connecting each column's two cards into a single branch */}
              {i < 2 ? (
                <span
                  aria-hidden
                  className="absolute -bottom-3 left-1/2 hidden h-3 w-px -translate-x-1/2 bg-line sm:block"
                />
              ) : (
                <span
                  aria-hidden
                  className="absolute -top-3 left-1/2 hidden h-3 w-px -translate-x-1/2 bg-line sm:block"
                />
              )}
              <HoverCard className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-8 transition-colors hover:border-gold/40">
                <span className="font-serif text-5xl text-gold/30 transition-colors group-hover:text-gold/60">
                  {domain.number}
                </span>
                <h3 className="mt-6 font-serif text-2xl text-foreground">
                  {domain.title}
                </h3>
                <p className="mt-2 font-medium text-gold-soft">
                  {domain.description}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {domain.detail}
                </p>
              </HoverCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
