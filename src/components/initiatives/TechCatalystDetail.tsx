import PlaceholderImage from "../PlaceholderImage";
import Reveal from "../motion/Reveal";

const FOCUS_AREAS = [
  "Leadership",
  "AI & technology",
  "Innovation",
  "Project development",
];

export default function TechCatalystDetail() {
  return (
    <section className="relative border-y border-line bg-surface py-28 md:py-36">
      <div className="section-shell grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-center">
        <Reveal>
          <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
            Tech Catalyst Initiative
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-muted md:text-lg">
            A human-capability and innovation initiative designed to develop
            people who can think, build, lead and solve meaningful problems.
            This is where my human-development and societal-impact work
            lives — distinct from ordinary client engagements.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {FOCUS_AREAS.map((area) => (
              <span
                key={area}
                className="rounded-full border border-line bg-surface-raised px-4 py-2 text-sm text-foreground"
              >
                {area}
              </span>
            ))}
          </div>

          <a
            href="/connect"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold/50 px-8 py-4 text-sm font-semibold text-gold-soft transition-colors hover:bg-gold hover:text-[#08080a]"
          >
            Explore Tech Catalyst
            <span aria-hidden>→</span>
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <PlaceholderImage
            alt="Tech Catalyst Initiative workshop"
            label="Tech Catalyst"
            className="aspect-square w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
