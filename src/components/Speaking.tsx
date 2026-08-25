import AmbientBackground from "./AmbientBackground";

export default function Speaking() {
  return (
    <section id="speaking" className="relative overflow-hidden py-28 md:py-36">
      <AmbientBackground variant="beam" />

      <div className="section-shell relative grid gap-10 md:grid-cols-[2fr_1fr] md:items-center">
        <div>
          <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
            I don&apos;t just build technology.
            <br />
            <span className="italic text-gold-soft">
              I teach people how to understand it.
            </span>
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-muted">
            As a speaker, workshop leader and technology educator, I help
            teams, founders and audiences translate complex technical
            decisions into clear, actionable understanding.
          </p>
        </div>

        <div className="flex md:justify-end">
          <a
            href="/connect"
            className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-8 py-4 text-sm font-semibold text-gold-soft transition-colors hover:bg-gold hover:text-[#08080a]"
          >
            Invite Emmanuel to Speak
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
