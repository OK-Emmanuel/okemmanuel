import Reveal from "../motion/Reveal";

const TRACKS = [
  {
    label: "People",
    steps: ["Tech-Catalyst Initiative", "O.K. Emmanuel Mentorship", "Dominus Institute"],
    summary: "Develops potential into people, and people into leaders.",
  },
  {
    label: "Enterprise",
    steps: ["Techifice", "YourStore.NG", "The Wealth Lab"],
    summary: "Builds technology, enables entrepreneurs, and compounds wealth.",
  },
];

export default function EcosystemMap() {
  return (
    <section className="relative border-y border-line bg-surface py-28 md:py-36">
      <div className="section-shell">
        <Reveal>
          <h2 className="max-w-2xl font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
            Develop people. Build enterprises. Leverage technology. Create
            wealth. Shape society.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {TRACKS.map((track, trackIndex) => (
            <Reveal key={track.label} delay={trackIndex * 0.1}>
              <div className="rounded-2xl border border-line bg-surface-raised p-8">
                <span
                  className={`text-xs uppercase tracking-[0.25em] ${
                    track.label === "People" ? "text-gold" : "text-accent-blue"
                  }`}
                >
                  {track.label} track
                </span>
                <div className="mt-6 flex flex-col gap-4">
                  {track.steps.map((step, i) => (
                    <div key={step} className="flex items-center gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line font-serif text-sm text-foreground">
                        {i + 1}
                      </span>
                      <span className="text-foreground">{step}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 leading-relaxed text-muted">
                  {track.summary}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
