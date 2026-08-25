import AmbientBackground from "./AmbientBackground";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  variant?: "grid" | "orbit" | "beam";
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  variant = "grid",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-40 pb-20 md:pt-48 md:pb-28">
      <AmbientBackground variant={variant} />
      <div className="section-shell relative">
        <p className="font-sans text-sm uppercase tracking-[0.3em] text-gold">
          {eyebrow}
        </p>
        <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.1] text-foreground sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
