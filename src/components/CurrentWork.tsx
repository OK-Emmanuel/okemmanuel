const CATEGORIES = [
  {
    title: "Technology & Products",
    href: "/work",
    items: ["Techifice", "Revats", "Homifice", "Software engineering & product architecture"],
  },
  {
    title: "Strategy",
    href: "/work",
    items: [
      "Product strategy",
      "Business systems",
      "Digital transformation",
      "AI adoption",
    ],
  },
  {
    title: "Human Capital",
    href: "/initiatives",
    items: ["Leadership development", "Mentorship", "Education", "Workshops"],
  },
  {
    title: "Initiatives",
    href: "/initiatives",
    items: ["Tech Catalyst Initiative", "Community & impact projects"],
  },
];

export default function CurrentWork() {
  return (
    <section className="relative border-y border-line bg-surface py-28 md:py-36">
      <div className="section-shell">
        <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
          What I&apos;m building now
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-line bg-surface-raised p-8"
            >
              <h3 className="font-serif text-xl text-foreground">
                {category.title}
              </h3>
              <ul className="mt-5 flex flex-col gap-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-muted"
                  >
                    <span aria-hidden className="text-gold">
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={category.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-soft"
              >
                Explore
                <span aria-hidden>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
