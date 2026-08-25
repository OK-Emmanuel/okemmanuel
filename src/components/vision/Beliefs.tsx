const BELIEFS = [
  "Human potential",
  "Personal responsibility",
  "Learning",
  "Leadership",
  "Excellence",
  "Creation",
  "Stewardship",
  "Time",
  "Leverage",
  "Technology",
  "Society",
  "Meaning",
];

export default function Beliefs() {
  return (
    <section className="relative border-y border-line bg-surface py-28 md:py-36">
      <div className="section-shell">
        <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
          What I believe
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          A working set of convictions that shape how I think, build and
          lead.
        </p>

        <div className="mt-12 flex flex-wrap gap-3">
          {BELIEFS.map((belief) => (
            <span
              key={belief}
              className="rounded-full border border-line bg-surface-raised px-5 py-3 text-sm text-foreground"
            >
              {belief}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
