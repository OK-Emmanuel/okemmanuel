import Reveal, { RevealGroup, RevealItem } from "../motion/Reveal";

const QUESTIONS = [
  "How do we develop capability in people faster without sacrificing depth?",
  "What does responsible AI adoption look like for organizations that aren't technical?",
  "How do you build institutions that outlast the founder's direct involvement?",
  "What is the right relationship between technology and human judgment?",
  "How do you scale mentorship without diluting it?",
];

export default function Questions() {
  return (
    <section className="relative border-y border-line bg-surface py-28 md:py-36">
      <div className="section-shell">
        <Reveal>
          <h2 className="max-w-2xl font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
            Questions I&apos;m exploring
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Not every idea is a finished doctrine. Some things I&apos;m still
            actively working through.
          </p>
        </Reveal>

        <RevealGroup className="mt-12 flex flex-col gap-6">
          {QUESTIONS.map((question) => (
            <RevealItem
              key={question}
              className="border-l-2 border-gold/40 pl-6 font-serif text-xl italic leading-snug text-gold-soft md:text-2xl"
            >
              {question}
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
