"use client";

import ScrollBrighten from "../motion/ScrollBrighten";

const STATEMENTS = [
  {
    label: "Purpose",
    index: "01",
    text: "To catalyze human potential into capability, creation and meaningful impact.",
  },
  {
    label: "Vision",
    index: "02",
    text: "A world where people and communities are equipped to think independently, build boldly, lead responsibly and create solutions to meaningful problems.",
  },
  {
    label: "Mission",
    index: "03",
    text: "To develop people and build technologies, ventures and systems that transform potential into capability, innovation, leadership and impact.",
  },
];

function StatementBlock({
  label,
  index,
  text,
}: {
  label: string;
  index: string;
  text: string;
}) {
  return (
    <div className="flex flex-col gap-4 border-t border-line py-14 md:flex-row md:items-start md:gap-12 md:py-20">
      <div className="flex items-center gap-4 md:w-48 md:shrink-0">
        <span className="font-serif text-sm text-gold/50">{index}</span>
        <p className="text-xs uppercase tracking-[0.3em] text-gold">
          {label}
        </p>
      </div>
      <ScrollBrighten
        as="p"
        className="max-w-3xl font-serif text-2xl leading-snug text-foreground md:text-4xl md:leading-snug"
      >
        {text}
      </ScrollBrighten>
    </div>
  );
}

export default function PurposeVisionMission() {
  return (
    <section className="relative py-4 md:py-8">
      <div className="section-shell">
        {STATEMENTS.map((statement) => (
          <StatementBlock key={statement.label} {...statement} />
        ))}
      </div>
    </section>
  );
}
