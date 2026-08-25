const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Solutions", href: "#solutions" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "About", href: "#about" },
  { label: "Ventures", href: "#ventures" },
  { label: "Speaking", href: "#speaking" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-xl text-foreground">
            O.K. <span className="text-gold">Emmanuel</span>
          </p>
          <p className="mt-2 text-sm text-muted">
            Technology &amp; Product Strategist
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-xs text-muted/70">
          © {new Date().getFullYear()} O.K. Emmanuel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
