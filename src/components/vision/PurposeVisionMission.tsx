const STATEMENTS = [
  {
    label: "Purpose",
    text: "To catalyze human potential into capability, creation and meaningful impact.",
  },
  {
    label: "Vision",
    text: "A world where people and communities are equipped to think independently, build boldly, lead responsibly and create solutions to meaningful problems.",
  },
  {
    label: "Mission",
    text: "To develop people and build technologies, ventures and systems that transform potential into capability, innovation, leadership and impact.",
  },
];

export default function PurposeVisionMission() {
  return (
    <section className="relative py-4 md:py-8">
      <div className="section-shell grid gap-8 md:grid-cols-3">
        {STATEMENTS.map((statement) => (
          <div key={statement.label}>
            <p className="text-xs uppercase tracking-[0.25em] text-gold">
              {statement.label}
            </p>
            <p className="mt-4 font-serif text-xl leading-snug text-foreground md:text-2xl">
              {statement.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
