import HoverCard from "../motion/HoverCard";
import { RevealGroup, RevealItem } from "../motion/Reveal";

const STAGES = [
  {
    title: "The Builder",
    description:
      "How technology became one of my primary instruments for creating solutions.",
  },
  {
    title: "The Strategist",
    description:
      "How engineering evolved into broader product, business and systems thinking.",
  },
  {
    title: "The Developer",
    description:
      "How my focus expanded from building things to developing people.",
  },
  {
    title: "The Catalyst",
    description:
      "How leadership, education, innovation and social impact became increasingly important.",
  },
  {
    title: "The Evolving Man",
    description:
      "I am still becoming. This identity is not a final destination — it's where I am, on the way to where I'm going.",
  },
];

export default function Stages() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="section-shell">
        <RevealGroup className="grid gap-6 md:grid-cols-2">
          {STAGES.map((stage) => (
            <RevealItem key={stage.title}>
              <HoverCard className="rounded-2xl border border-line bg-surface p-8">
              <h3 className="font-serif text-2xl text-gold-soft">
                {stage.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                {stage.description}
              </p>
              </HoverCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
