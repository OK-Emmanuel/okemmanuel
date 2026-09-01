"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Vision", href: "/vision" },
  { label: "Work", href: "/work" },
  { label: "Thinking", href: "/thinking" },
  { label: "Initiatives", href: "/initiatives" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="section-shell flex items-center justify-between h-18 py-4">
        {/* <Link
          href="/"
          className="font-serif text-xl tracking-wide text-foreground"
        >
          O.K. <span className="text-gold">Emmanuel</span>
        </Link> */}
        <Link
          href="/"
          className="font-serif text-xl tracking-wide text-foreground"
        >
         <Image
            src="/okemmanuel-signature.png"
            alt="O.K. Emmanuel Logo"
            width={200}
            height={200}
            className="inline-block mr-2 grayscale"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-8 text-sm text-muted">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/connect"
          className="hidden lg:inline-flex items-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-light transition-transform hover:scale-[1.03]"
        >
          Connect
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-line text-foreground"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-px w-5 bg-current transition-transform ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-current transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-px w-5 bg-current transition-transform ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-line bg-background/95 backdrop-blur-md">
          <ul className="section-shell flex flex-col gap-1 py-4 text-sm">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-muted transition-colors hover:bg-surface hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="/connect"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-[#08080a]"
              >
                Connect
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
