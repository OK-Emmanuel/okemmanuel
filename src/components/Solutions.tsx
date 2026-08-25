import AmbientBackground from "./AmbientBackground";

const PROBLEMS = [
  {
    number: "01",
    title: "Building something new",
    description:
      "You have an idea, but need the product architecture, MVP strategy and technical execution to make it real.",
  },
  {
    number: "02",
    title: "Scaling something that already works",
    description:
      "Your existing systems are limiting growth, creating operational friction or becoming increasingly difficult to manage.",
  },
  {
    number: "03",
    title: "Trying to adopt AI",
    description:
      "You know AI can improve your operation, but don't know what to automate, where to start or how to integrate it properly.",
  },
  {
    number: "04",
    title: "Building authority",
    description:
      "Your organization or personal brand has substance, but your digital presence doesn't communicate its actual value.",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-28 md:py-36">
      <AmbientBackground variant="grid" />

      <div className="section-shell relative">
        <h2 className="max-w-2xl font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
          Technology should solve a business problem.
        </h2>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {PROBLEMS.map((problem) => (
            <div
              key={problem.number}
              className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-8 transition-colors hover:border-gold/40"
            >
              <span className="font-serif text-5xl text-gold/30 transition-colors group-hover:text-gold/60">
                {problem.number}
              </span>
              <h3 className="mt-6 text-xl font-semibold text-foreground">
                {problem.title}
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-14 font-serif text-2xl italic text-gold-soft">
          I help turn these problems into working systems.
        </p>
      </div>
    </section>
  );
}
