import Reveal, { RevealGroup, RevealItem } from "../motion/Reveal";

const BELIEFS = [
  {
    title: "Human potential",
    description: "Every person carries capability far beyond what circumstance has allowed them to show.",
  },
  {
    title: "Personal responsibility",
    description: "Growth begins the moment you stop waiting for permission or perfect conditions.",
  },
  {
    title: "Learning",
    description: "The willingness to stay a student is what keeps capability from expiring.",
  },
  {
    title: "Leadership",
    description: "Real leadership is measured by what it builds in others, not what it commands.",
  },
  {
    title: "Excellence",
    description: "Standards compound. What you tolerate today becomes what you produce tomorrow.",
  },
  {
    title: "Creation",
    description: "Consuming is easy. Building is rare — and it's where all lasting value comes from.",
  },
  {
    title: "Stewardship",
    description: "Talent, time and resources are held in trust, not owned outright.",
  },
  {
    title: "Time",
    description: "It is the one asset that never returns. Spend it like it matters, because it's all that does.",
  },
  {
    title: "Leverage",
    description: "Effort should be multiplied — through systems, people and technology — not just repeated.",
  },
  {
    title: "Technology",
    description: "A tool for solving real problems at scale, not an end in itself.",
  },
  {
    title: "Society",
    description: "Individual success is incomplete if it doesn't strengthen the community around it.",
  },
  {
    title: "Meaning",
    description: "Work without purpose is just motion. Purpose is what makes the effort worth it.",
  },
];

export default function Beliefs() {
  return (
    <section className="relative border-y border-line bg-surface py-28 md:py-36">
      <div className="section-shell">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            Convictions
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
            What I believe
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            A working set of convictions that shape how I think, build and
            lead.
          </p>
        </Reveal>

        <RevealGroup
          className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.04}
        >
          {BELIEFS.map((belief, i) => (
            <RevealItem key={belief.title}>
              <div className="group h-full bg-surface p-8 transition-colors hover:bg-surface-raised">
                <span className="font-serif text-sm text-gold/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-serif text-xl text-foreground">
                  {belief.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted transition-colors group-hover:text-foreground/80">
                  {belief.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
