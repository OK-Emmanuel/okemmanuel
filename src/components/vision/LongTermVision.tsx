import { Compass } from "lucide-react";
import Reveal from "../motion/Reveal";

export default function LongTermVision() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="section-shell">
        <Reveal className="flex flex-col gap-8 border-t border-line pt-14 md:flex-row md:items-start md:gap-16 md:pt-20">
          <div className="flex items-center gap-3 md:w-56 md:shrink-0">
            <Compass className="h-5 w-5 text-gold" strokeWidth={1.5} />
            <p className="text-xs uppercase tracking-[0.3em] text-gold">
              Where This Is Going
            </p>
          </div>
          <div className="max-w-2xl">
            <p className="font-serif text-2xl leading-snug text-foreground md:text-3xl">
              I want to contribute to a future where capable people — equipped
              with the right thinking, tools and opportunities — can create
              solutions that change their communities and the world around
              them.
            </p>
            <p className="mt-5 leading-relaxed text-muted md:text-lg">
              That means continuing to build technology and ventures,
              developing people through education and mentorship, and
              creating institutions and initiatives that outlast any single
              project.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
