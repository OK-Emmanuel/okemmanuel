import { INITIATIVES } from "@/lib/initiatives";
import HoverCard from "./motion/HoverCard";
import { RevealGroup, RevealItem } from "./motion/Reveal";
import Reveal from "./motion/Reveal";

export default function HomeInitiatives() {
  return (
    <section id="initiatives" className="relative border-y border-line bg-surface py-28 md:py-36">
      <div className="section-shell">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
              The ecosystem
            </h2>
            <a
              href="/initiatives"
              className="text-sm font-semibold text-gold transition-colors hover:text-gold-soft"
            >
              Explore all initiatives →
            </a>
          </div>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INITIATIVES.map((initiative) => (
            <RevealItem key={initiative.slug}>
              <HoverCard className="flex h-full flex-col justify-between rounded-2xl border border-line bg-surface-raised p-7">
                <div>
                  <span
                    className={`text-[0.65rem] uppercase tracking-[0.2em] ${
                      initiative.category === "People"
                        ? "text-gold"
                        : "text-accent-blue"
                    }`}
                  >
                    {initiative.category}
                  </span>
                  <h3 className="mt-3 font-serif text-xl text-foreground">
                    {initiative.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {initiative.tagline}
                  </p>
                </div>
                <a
                  href={initiative.href}
                  className={`mt-6 inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-wider ${
                    initiative.status === "soon"
                      ? "pointer-events-none text-muted"
                      : "text-gold hover:text-gold-soft"
                  }`}
                >
                  {initiative.status === "soon" ? "Coming soon" : "Explore"}
                </a>
              </HoverCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
