import Reveal from "../motion/Reveal";
import ScrollBrighten from "../motion/ScrollBrighten";

export default function EcosystemStatement() {
  return (
    <section className="relative py-4 md:py-8">
      <div className="section-shell max-w-3xl">
        <div>
          <ScrollBrighten as="p" className="font-serif text-2xl italic leading-snug text-gold-soft md:text-3xl">
            I am the ecosystem. Each venture answers a different part of the
            same question: how do we develop people, build enterprises,
            leverage technology and create wealth capable of shaping
            society?
          </ScrollBrighten>
        </div>
      </div>
    </section>
  );
}
