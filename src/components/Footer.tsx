const LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Vision", href: "/vision" },
  { label: "Work", href: "/work" },
  { label: "Thinking", href: "/thinking" },
  { label: "Initiatives", href: "/initiatives" },
  { label: "Connect", href: "/connect" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line pt-12 pb-8">
      <div className="section-shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-serif text-xl text-foreground">
              O.K. <span className="text-gold">Emmanuel</span>
            </p>
            <p className="mt-2 text-sm text-muted">
              Builder of People, Ventures &amp; Systems
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
        </div>

        <div className="mt-12 flex flex-col items-start gap-6 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted/70">
            © {new Date().getFullYear()} O.K. Emmanuel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
