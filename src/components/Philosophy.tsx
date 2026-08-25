const PRINCIPLES = [
  {
    title: "Understand first",
    description:
      "Technology is only useful when it solves the right problem.",
  },
  {
    title: "Build for reality",
    description:
      "The goal isn't impressive architecture. It's technology people can actually use.",
  },
  {
    title: "Design for scale",
    description:
      "Systems should be capable of evolving as the organization grows.",
  },
];

export default function Philosophy() {
  return (
    <section className="relative border-y border-line bg-surface py-28 md:py-36">
      <div className="section-shell">
        <h2 className="max-w-3xl font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
          Build what matters. Automate what repeats. Scale what works.
        </h2>

        <div className="relative mt-16 flex flex-col gap-12 md:gap-16">
          <div
            aria-hidden
            className="absolute left-[0.9rem] top-2 bottom-2 hidden w-px bg-line md:block"
          />
          {PRINCIPLES.map((principle, i) => (
            <div key={principle.title} className="relative flex gap-6 md:gap-10">
              <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-surface font-serif text-sm text-gold">
                {i + 1}
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground md:text-2xl">
                  {principle.title}
                </h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-muted">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
