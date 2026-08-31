import Reveal, { RevealGroup, RevealItem } from "./motion/Reveal";
import HoverCard from "./motion/HoverCard";

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
    <section className="relative overflow-hidden border-y border-line bg-surface py-28 md:py-36">
      <span
        aria-hidden
        className="pointer-events-none absolute -top-16 left-4 select-none font-serif text-[14rem] leading-none text-gold/5 md:text-[20rem]"
      >
        &ldquo;
      </span>
      <div className="section-shell relative">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            Philosophy
          </p>
          <h2 className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
            I build what matters. Automate what repeats. Scale what works.
          </h2>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-6 md:grid-cols-3">
          {PRINCIPLES.map((principle, i) => (
            <RevealItem key={principle.title}>
              <HoverCard className="group h-full rounded-2xl border border-line bg-surface-raised p-8 transition-colors hover:border-gold/50">
                <span className="font-serif text-sm text-gold/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-serif text-xl text-foreground md:text-2xl">
                  {principle.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted transition-colors group-hover:text-foreground/80">
                  {principle.description}
                </p>
              </HoverCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
