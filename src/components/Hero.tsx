import AmbientBackground from "./AmbientBackground";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      <AmbientBackground variant="orbit" />

      <div className="section-shell relative w-full">
        <p className="font-sans text-sm uppercase tracking-[0.3em] text-gold">
          O.K. Emmanuel
        </p>

        <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.1] text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          I build{" "}
          <span className="italic text-gold-soft">people, ventures and systems</span>{" "}
          that turn potential into impact.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          I&apos;m a multidisciplinary builder, strategist and catalyst
          working at the intersection of technology, human capability,
          leadership and entrepreneurship.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="/work"
            className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-semibold text-[#08080a] transition-transform hover:scale-[1.02]"
          >
            Explore My Work
          </a>
          <a
            href="/vision"
            className="inline-flex items-center justify-center rounded-full border border-line px-8 py-4 text-sm font-semibold text-foreground transition-colors hover:border-gold/60 hover:text-gold-soft"
          >
            Understand My Vision
          </a>
        </div>

        <div className="mt-8">
          <a
            href="/thinking"
            className="text-sm font-semibold text-gold transition-colors hover:text-gold-soft"
          >
            Read My Thinking →
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs uppercase tracking-[0.2em] text-muted/80 sm:text-sm">
          <span>Software Engineer</span>
          <span className="text-gold">·</span>
          <span>Product Strategist</span>
          <span className="text-gold">·</span>
          <span>Educator &amp; Mentor</span>
          <span className="text-gold">·</span>
          <span>Founder</span>
        </div>
      </div>
    </section>
  );
}
