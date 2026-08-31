import HoverCard from "../motion/HoverCard";
import Reveal, { RevealGroup, RevealItem } from "../motion/Reveal";

const CATEGORIES = [
  { title: "Essays", description: "Long-form thinking." },
  { title: "Frameworks", description: "Original models." },
  { title: "Theories", description: "Ideas I'm developing." },
  { title: "Notes", description: "Short observations." },
  { title: "Book Reflections", description: "Lessons and synthesis from books." },
  { title: "Leadership", description: "People, influence, responsibility and development." },
  { title: "Technology", description: "AI, software, digital systems and the future." },
  { title: "Strategy", description: "Business, leverage, execution and positioning." },
  { title: "Society", description: "Innovation, development, institutions and civilization." },
];

export default function ThinkingLibrary() {
  return (
    <section className="relative py-4 md:py-8">
      <div className="section-shell">
        <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((category) => (
            <RevealItem key={category.title}>
              <HoverCard className="flex h-full flex-col justify-between rounded-2xl border border-line bg-surface p-8">
              <div>
                <h3 className="font-serif text-xl text-foreground">
                  {category.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  {category.description}
                </p>
              </div>
              <span className="mt-6 inline-flex w-fit rounded-full border border-line px-4 py-1.5 text-xs uppercase tracking-wider text-muted">
                Coming soon
              </span>
              </HoverCard>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <p className="mt-16 max-w-2xl font-serif text-xl italic text-gold-soft">
            I publish content that reveals how I think, not merely what I
            know. The first essays and frameworks are on their way.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
