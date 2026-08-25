const VENTURES = [
  {
    name: "Techifice",
    description: "Product Development & Technology",
    cta: "Visit Techifice",
    href: "https://techifice.com",
    status: "live",
  },
  {
    name: "YourStore",
    description: "AI-powered commerce infrastructure for Africa",
    cta: "Coming soon",
    href: "#",
    status: "soon",
  },
  {
    name: "Tech Catalyst Initiative",
    description: "Technology & Leadership Development",
    cta: "Explore Initiative",
    href: "#tech-catalyst",
    status: "live",
  },
];

export default function Ventures() {
  return (
    <section id="ventures" className="relative py-28 md:py-36">
      <div className="section-shell">
        <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
          Building beyond client work.
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {VENTURES.map((venture) => (
            <div
              key={venture.name}
              className="flex flex-col justify-between rounded-2xl border border-line bg-surface p-8"
            >
              <div>
                <h3 className="font-serif text-2xl text-foreground">
                  {venture.name}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  {venture.description}
                </p>
              </div>

              <a
                href={venture.href}
                target={venture.status === "live" ? "_blank" : undefined}
                rel={venture.status === "live" ? "noopener noreferrer" : undefined}
                aria-disabled={venture.status === "soon"}
                className={`mt-8 inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                  venture.status === "soon"
                    ? "pointer-events-none text-muted"
                    : "text-gold hover:text-gold-soft"
                }`}
              >
                {venture.cta}
                {venture.status === "live" && <span aria-hidden>→</span>}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
