import Image from "next/image";
import Link from "next/link";

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
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Link
              href="/"
              className="inline-block"
            >
              <Image
                src="/okemmanuel-signature.png"
                alt="O.K. Emmanuel Logo"
                width={200}
                height={200}
                className="inline-block grayscale w-32 md:w-40"
              />
            </Link>
            <p className="mt-4 text-sm text-muted">
              Building People, Platforms, &amp; Products
            </p>
            
            <div className="flex items-center gap-5 mt-6">
              <Link href="https://twitter.com/theokemmanuel" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted hover:text-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </Link>
              <Link href="https://linkedin.com/in/olawuni-emmanuel-kayode" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted hover:text-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </Link>
              <Link href="https://github.com/ok-emmanuel" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted hover:text-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </Link>
              <Link href="https://instagram.com/okemmanuel" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted hover:text-gold transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </Link>
            </div>
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

        <div className="mt-12 flex flex-col items-start gap-6 border-t border-line pt-8 md:flex-row md:items-center md:justify-center">
          <p className="text-xs text-center text-muted/70">
            © {new Date().getFullYear()} Olawuni Emmanuel Kayode. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
