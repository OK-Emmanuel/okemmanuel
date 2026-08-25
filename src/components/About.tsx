export default function About() {
  return (
    <section id="about" className="relative border-y border-line bg-surface py-28 md:py-36">
      <div className="section-shell grid gap-12 md:grid-cols-[1fr_2fr] md:items-start">
        <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
          I&apos;m <span className="text-gold-soft">O.K. Emmanuel.</span>
        </h2>

        <div>
          <p className="text-lg leading-relaxed text-muted md:text-xl">
            I&apos;m a software engineer, technology strategist and
            entrepreneur focused on building useful technology and helping
            people make better decisions around it. Over the years, I&apos;ve
            worked across software engineering, product development,
            technology education, leadership and entrepreneurship. That
            multidisciplinary experience allows me to approach problems from
            both sides: understanding the technology deeply while keeping
            sight of the people, business and outcomes behind it.
          </p>

          <a
            href="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-soft"
          >
            More About Me
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
