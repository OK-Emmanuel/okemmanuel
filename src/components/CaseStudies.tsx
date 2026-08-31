import HoverCard from "./motion/HoverCard";
import Reveal, { RevealGroup, RevealItem } from "./motion/Reveal";

const CASE_STUDIES = [
  {
    name: "Homifice",
    description: "Hotel Management System",
    problem: "Hotel operations required a centralized digital system.",
    solution:
      "Designed and developed a management platform focused on operational efficiency and guest experience.",
    scope: ["Product development", "Backend", "Database", "Deployment"],
    result: "Streamlined operations and improved guest experience.",
    lesson:
      "Operational software succeeds when it mirrors the real workflow of the people using it, not an idealized version of it.",
  },
  {
    name: "Revats",
    description: "AI-Powered Job Matching Platform",
    problem:
      "Job seekers and employers needed a smarter way to find the right match beyond keyword filters.",
    solution:
      "Built an AI-powered matching engine and platform that connects candidates to relevant opportunities.",
    scope: ["Product strategy", "AI integration", "Backend", "Deployment"],
    result: "Faster, more relevant matches between candidates and employers.",
    lesson:
      "AI creates leverage only when it's applied to a well-understood matching problem — the model is only as good as the strategy behind it.",
  },
  {
    name: "DasaMonie",
    description: "Fintech Platform",
    problem:
      "Users needed a reliable digital platform for managing financial transactions.",
    solution:
      "Engineered a secure fintech platform covering core transaction flows and account management.",
    scope: ["Product development", "Backend", "Database", "Security"],
    result: "A secure, scalable foundation for everyday financial transactions.",
    lesson:
      "In fintech, trust is a feature. Security and reliability decisions early in the architecture pay for themselves for years.",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-28 md:py-36">
      <div className="section-shell">
        <Reveal>
          <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
            Case Studies
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Every project here is a business case — a problem solved, not just
            a feature shipped.
          </p>
        </Reveal>

        <RevealGroup className="mt-16 flex flex-col gap-8">
          {CASE_STUDIES.map((study) => (
            <RevealItem key={study.name}>
              <HoverCard className="grid gap-8 rounded-2xl border border-line bg-surface p-8 md:grid-cols-[1fr_2fr] md:p-10">
              <div>
                <h3 className="font-serif text-2xl text-foreground md:text-3xl">
                  {study.name}
                </h3>
                <p className="mt-2 text-sm font-medium uppercase tracking-wide text-gold">
                  {study.description}
                </p>

                <dl className="mt-6 flex flex-col gap-1 text-xs text-muted">
                  <dt className="uppercase tracking-wider">Scope</dt>
                  <dd className="flex flex-wrap gap-2 pt-2">
                    {study.scope.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-line px-3 py-1"
                      >
                        {item}
                      </span>
                    ))}
                  </dd>
                </dl>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted">
                    Problem
                  </p>
                  <p className="mt-2 leading-relaxed text-foreground/90">
                    {study.problem}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted">
                    Solution
                  </p>
                  <p className="mt-2 leading-relaxed text-foreground/90">
                    {study.solution}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gold">
                    Result
                  </p>
                  <p className="mt-2 leading-relaxed text-gold-soft">
                    {study.result}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gold">
                    Strategic Lesson
                  </p>
                  <p className="mt-2 leading-relaxed text-gold-soft">
                    {study.lesson}
                  </p>
                </div>
              </div>
              </HoverCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
