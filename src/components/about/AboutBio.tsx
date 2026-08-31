import PlaceholderImage from "../PlaceholderImage";
import Reveal from "../motion/Reveal";

export default function AboutBio() {
  return (
    <section className="relative py-4 md:py-8">
      <div className="section-shell grid gap-10 md:grid-cols-[1fr_2fr] md:items-center">
        <Reveal>
          <PlaceholderImage
            alt="Portrait of O.K. Emmanuel"
            label="The Human"
            className="aspect-3/4 w-full"
          />
        </Reveal>
        <Reveal delay={0.1}>
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
        </Reveal>
      </div>
    </section>
  );
}
