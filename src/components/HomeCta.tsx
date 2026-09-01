import AmbientBackground from "./AmbientBackground";
import ScrollBrighten from "./motion/ScrollBrighten";

export default function HomeCta() {
  return (
    <section className="relative overflow-hidden border-t border-line py-28 md:py-36">
      <AmbientBackground variant="beam" />

      <div className="section-shell relative flex flex-col items-start gap-8">
        <ScrollBrighten as="h2" className="max-w-2xl font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
          Have a meaningful problem, idea or opportunity worth exploring?
        </ScrollBrighten>
        <p className="max-w-xl leading-relaxed text-muted">
          Whether you want to work together, invite me to speak, collaborate
          on a venture, or simply have a strategic conversation — there&apos;s
          a place for that.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="/connect"
            className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-semibold text-light transition-transform hover:scale-[1.02]"
          >
            Connect With Me
          </a>
          <a
            href="/work"
            className="inline-flex items-center justify-center rounded-full border border-line px-8 py-4 text-sm font-semibold text-foreground transition-colors hover:border-gold/60 hover:text-gold-soft"
          >
            See My Work
          </a>
        </div>
      </div>
    </section>
  );
}
