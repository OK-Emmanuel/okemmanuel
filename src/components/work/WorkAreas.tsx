import HoverCard from "../motion/HoverCard";
import { RevealGroup, RevealItem } from "../motion/Reveal";

const AREAS = [
  {
    title: "Technology",
    items: ["Software engineering", "Product development", "AI systems", "Architecture & digital infrastructure"],
  },
  {
    title: "Strategy",
    items: ["Product strategy", "Business systems", "Digital transformation", "AI adoption & venture strategy"],
  },
  {
    title: "Advisory",
    items: [
      "For organizations, founders and leaders requiring strategic thinking on technology and product decisions.",
    ],
  },
  {
    title: "Speaking",
    items: [
      "Technology & innovation",
      "AI & the future of work",
      "Leadership & human potential",
      "Building in Africa",
    ],
  },
];

export default function WorkAreas() {
  return (
    <section className="relative py-4 md:py-8">
      <RevealGroup className="section-shell grid gap-6 md:grid-cols-2">
        {AREAS.map((area) => (
          <RevealItem key={area.title}>
            <HoverCard className="h-full rounded-2xl border border-line bg-surface p-8">
            <h3 className="font-serif text-2xl text-foreground">
              {area.title}
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {area.items.map((item) => (
                <li key={item} className="flex gap-2 text-muted">
                  <span aria-hidden className="text-gold">
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            </HoverCard>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
