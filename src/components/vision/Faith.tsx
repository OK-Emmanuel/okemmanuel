import { Sparkles } from "lucide-react";
import Reveal from "../motion/Reveal";

export default function Faith() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="section-shell">
        <Reveal className="flex flex-col gap-8 border-t border-line pt-14 md:flex-row md:items-start md:gap-16 md:pt-20">
          <div className="flex items-center gap-3 md:w-56 md:shrink-0">
            <Sparkles className="h-5 w-5 text-gold" strokeWidth={1.5} />
            <p className="text-xs uppercase tracking-[0.3em] text-gold">
              Faith &amp; Spirituality
            </p>
          </div>
          <div className="max-w-2xl">
            <p className="font-serif text-2xl leading-snug text-foreground md:text-3xl">
              My Christian faith is part of my worldview — it shapes how I
              think about purpose, stewardship, character and the
              responsibility that comes with capability.
            </p>
            <p className="mt-5 leading-relaxed text-muted md:text-lg">
              It isn&apos;t a service I offer; it&apos;s part of who I am, and
              it informs the way I build, lead and develop the people around
              me.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
