import { INITIATIVES } from "@/lib/initiatives";
import PlaceholderImage from "../PlaceholderImage";
import HoverCard from "../motion/HoverCard";
import { RevealGroup, RevealItem } from "../motion/Reveal";

export default function InitiativesGrid() {
  return (
    <section className="relative py-4 md:py-8">
      <div className="section-shell">
        <RevealGroup className="grid gap-8 md:grid-cols-2">
          {INITIATIVES.map((initiative) => (
            <RevealItem key={initiative.slug}>
              <HoverCard className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface">
                <PlaceholderImage
                  alt={`Photograph representing ${initiative.name}`}
                  label={initiative.category}
                  className="h-48 w-full"
                />
                <div className="flex flex-1 flex-col p-8">
                  <span
                    className={`w-fit rounded-full border px-3 py-1 text-[0.65rem] uppercase tracking-wider ${
                      initiative.category === "People"
                        ? "border-gold/40 text-gold"
                        : "border-accent-blue/40 text-accent-blue"
                    }`}
                  >
                    {initiative.category}
                  </span>
                  <h3 className="mt-4 font-serif text-2xl text-foreground">
                    {initiative.name}
                  </h3>
                  <p className="mt-2 font-serif text-lg italic text-gold-soft">
                    {initiative.tagline}
                  </p>
                  <p className="mt-4 flex-1 leading-relaxed text-muted">
                    {initiative.description}
                  </p>

                  <a
                    href={initiative.href}
                    target={initiative.status === "live" && initiative.href.startsWith("http") ? "_blank" : undefined}
                    rel={initiative.status === "live" && initiative.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-disabled={initiative.status === "soon"}
                    className={`mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold transition-colors ${
                      initiative.status === "soon"
                        ? "pointer-events-none text-muted"
                        : "text-gold hover:text-gold-soft"
                    }`}
                  >
                    {initiative.status === "soon" ? "Coming soon" : "Explore"}
                    {initiative.status === "live" && <span aria-hidden>→</span>}
                  </a>
                </div>
              </HoverCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
