import type { Initiative } from "@/lib/initiatives";
import PlaceholderImage from "../PlaceholderImage";
import Reveal from "../motion/Reveal";

type InitiativeDetailProps = {
  initiative: Initiative;
  imageOnRight?: boolean;
};

export default function InitiativeDetail({
  initiative,
  imageOnRight = false,
}: InitiativeDetailProps) {
  const image = (
    <Reveal delay={0.1}>
      <PlaceholderImage
        alt={`Photograph representing ${initiative.name}`}
        label={initiative.category}
        className="aspect-square w-full"
      />
    </Reveal>
  );

  const content = (
    <Reveal>
      <span
        className={`w-fit rounded-full border px-3 py-1 text-[0.65rem] uppercase tracking-wider ${
          initiative.category === "People"
            ? "border-gold/40 text-gold"
            : "border-accent-blue/40 text-accent-blue"
        }`}
      >
        {initiative.category}
      </span>
      <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
        {initiative.name}
      </h2>
      <p className="mt-3 font-serif text-xl italic text-gold-soft">
        {initiative.tagline}
      </p>
      <p className="mt-5 max-w-xl leading-relaxed text-muted md:text-lg">
        {initiative.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {initiative.highlights.map((highlight) => (
          <span
            key={highlight}
            className="rounded-full border border-line bg-surface-raised px-4 py-2 text-sm text-foreground"
          >
            {highlight}
          </span>
        ))}
      </div>

      <a
        href={initiative.href}
        target={initiative.status === "live" && initiative.href.startsWith("http") ? "_blank" : undefined}
        rel={initiative.status === "live" && initiative.href.startsWith("http") ? "noopener noreferrer" : undefined}
        aria-disabled={initiative.status === "soon"}
        className={`mt-8 inline-flex w-fit items-center gap-2 rounded-full border px-8 py-4 text-sm font-semibold transition-colors ${
          initiative.status === "soon"
            ? "pointer-events-none border-line text-muted"
            : "border-gold/50 text-gold-soft hover:bg-gold hover:text-[#08080a]"
        }`}
      >
        {initiative.status === "soon" ? "Coming soon" : "Explore " + initiative.name}
        {initiative.status === "live" && <span aria-hidden>→</span>}
      </a>
    </Reveal>
  );

  return (
    <section
      id={initiative.slug}
      className="relative border-b border-line py-20 md:py-28 last:border-b-0"
    >
      <div className="section-shell grid gap-10 md:grid-cols-2 md:items-center">
        {imageOnRight ? (
          <>
            {content}
            {image}
          </>
        ) : (
          <>
            {image}
            {content}
          </>
        )}
      </div>
    </section>
  );
}
