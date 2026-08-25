const OFFERS = [
  {
    number: "01",
    title: "Product Strategy & MVP Architecture",
    audience: "For founders building technology products.",
    description:
      "From product definition to technical architecture, MVP scope and development roadmap.",
    pricing: [
      { label: "Strategy Intensive", value: "₦250k – ₦500k" },
      { label: "Implementation", value: "₦1.2M – ₦5M+" },
    ],
  },
  {
    number: "02",
    title: "AI Operations & Automation",
    audience: "For organizations ready to turn AI into operational leverage.",
    description:
      "I identify repetitive workflows, design automation opportunities and implement AI-powered systems that reduce operational friction.",
    pricing: [{ label: "Monthly Engagement", value: "₦250k – ₦500k / mo" }],
  },
  {
    number: "03",
    title: "Digital Authority Systems",
    audience: "For organizations whose digital presence needs to match their actual stature.",
    description:
      "Strategic websites and digital infrastructure designed around credibility, discovery, conversion and measurable business outcomes.",
    pricing: [{ label: "Engagement", value: "₦500k – ₦1.2M+" }],
  },
  {
    number: "04",
    title: "Executive Authority Platforms",
    audience:
      "For founders, executives, speakers and public-facing professionals.",
    description:
      "A premium digital platform that turns your expertise, reputation and body of work into a credible online authority asset.",
    pricing: [{ label: "Engagement", value: "₦500k – ₦1.5M+" }],
  },
];

export default function Offers() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="section-shell">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
            How I Can Help
          </h2>
          <p className="max-w-sm text-sm text-muted">
            Premium, high-value engagements — not hourly coding services.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {OFFERS.map((offer) => (
            <div
              key={offer.number}
              className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface p-8 md:p-10"
            >
              <div className="absolute -top-6 -right-4 font-serif text-8xl text-gold/6">
                {offer.number}
              </div>

              <div className="relative">
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-gold">
                  {offer.number} —
                </span>
                <h3 className="mt-3 font-serif text-2xl text-foreground md:text-[1.65rem]">
                  {offer.title}
                </h3>
                <p className="mt-3 text-sm font-medium text-gold-soft">
                  {offer.audience}
                </p>
                <p className="mt-4 leading-relaxed text-muted">
                  {offer.description}
                </p>
              </div>

              <div className="relative mt-8 flex flex-wrap gap-3 border-t border-line pt-6">
                {offer.pricing.map((tier) => (
                  <div
                    key={tier.label}
                    className="rounded-xl bg-surface-raised px-4 py-3"
                  >
                    <p className="text-[0.65rem] uppercase tracking-wider text-muted">
                      {tier.label}
                    </p>
                    <p className="mt-1 font-serif text-lg text-gold-soft">
                      {tier.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
