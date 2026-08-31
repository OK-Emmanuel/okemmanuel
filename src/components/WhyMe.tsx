import Reveal, { RevealGroup, RevealItem } from "./motion/Reveal";

const PILLARS = [
  {
    label: "Technical",
    description:
      "Software engineering, architecture, APIs, databases, AI integrations, product development.",
  },
  {
    label: "Strategic",
    description:
      "Product thinking, digital transformation, business systems, workflow optimization.",
  },
  {
    label: "Human",
    description:
      "Communication, leadership, mentorship and the ability to translate complex technology into understandable decisions.",
  },
];

export default function WhyMe() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-surface py-28 md:py-36">
      <div className="section-shell">
        <Reveal>
          <h2 className="max-w-3xl font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
            Engineering depth. Strategic thinking. Human communication.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            I don&apos;t approach technology as a collection of tools to
            deploy. I approach it as infrastructure for solving real problems.
          </p>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <RevealItem key={pillar.label} className="bg-surface p-8 md:p-10">
              <span className="font-serif text-sm text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-serif text-2xl text-foreground">
                {pillar.label}
              </h3>
              <p className="mt-4 leading-relaxed text-muted">
                {pillar.description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
