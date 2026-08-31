import Reveal from "./motion/Reveal";
import FlowOrbit from "./motion/FlowOrbit";

export default function OnePersonManyExpressions() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-surface py-28 md:py-36">
      <div className="section-shell grid items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <h2 className="max-w-3xl font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
            Different disciplines. One underlying philosophy.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            My work spans technology, entrepreneurship, leadership, education
            and human development. They may look like different fields from
            the outside, but they are connected by one question:
          </p>
          <p className="mt-4 max-w-2xl font-serif text-2xl italic text-gold-soft">
            How do we maximize human potential into meaningful capability and
            impact?
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <FlowOrbit />
        </Reveal>
      </div>
    </section>
  );
}

