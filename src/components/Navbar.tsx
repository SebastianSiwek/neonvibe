"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Strona główna", href: "/" },
  { label: "Produkty", href: "/produkty" },
  { label: "Realizacje", href: "/realizacje" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-heading text-2xl font-bold text-primary neon-text-primary">
            NeonVibe
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/70 transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="rounded-full bg-primary px-6 py-2.5 text-sm font-heading font-semibold text-background transition-all duration-300 hover:neon-glow-primary"
            >
              Zamów neon
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 text-foreground/70 hover:text-foreground transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-white/5 bg-background/95 backdrop-blur-md px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-lg px-4 py-2.5 text-sm font-medium text-foreground/70 transition-colors hover:bg-surface hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="block rounded-full bg-primary px-6 py-2.5 text-center text-sm font-heading font-semibold text-background transition-all duration-300 hover:neon-glow-primary"
            onClick={() => setIsOpen(false)}
          >
            Zamów neon
          </Link>
        </div>
      </div>
    </nav>
  );
}
