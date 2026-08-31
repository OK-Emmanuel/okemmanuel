import ParallaxImage from "./motion/ParallaxImage";
import Reveal from "./motion/Reveal";

export default function Speaking() {
  return (
    <section id="speaking" className="relative overflow-hidden py-36 md:py-48">
      <ParallaxImage src="/okemmanuel-speaker.jfif" alt="" />
      <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-background/40" />

      <div className="section-shell relative">
        <Reveal>
          <h2 className="max-w-xl font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
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

          <a
            href="/connect"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold/50 px-8 py-4 text-sm font-semibold text-gold-soft transition-colors hover:bg-gold hover:text-[#08080a]"
          >
            Invite Emmanuel to Speak
            <span aria-hidden>→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
