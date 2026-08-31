import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Reveal from "./motion/Reveal";
import ScrollBrighten from "./motion/ScrollBrighten";
import FlowOrbit from "./motion/FlowOrbit";

export default function OnePersonManyExpressions() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="section-shell grid gap-16 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-12 lg:col-span-7">
          <ScrollBrighten as="h2" className="max-w-3xl font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
            One Person. <br className="hidden sm:block" />
            Many Expressions.
          </ScrollBrighten>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            My work spans technology, entrepreneurship, leadership, education
            and human development. They may look like different fields from
            the outside, but they are connected by one question:
          </p>
          <p className="mt-4 max-w-2xl font-serif text-2xl italic text-gold-soft">
            How do we maximize human potential into meaningful capability and
            impact?
          </p>
        </div>

        <Reveal delay={0.1} className="md:col-span-12 lg:col-span-5 flex items-center justify-center lg:justify-end">
          <FlowOrbit />
        </Reveal>
      </div>
    </section>
  );
}
