import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const navLinks = [
  { label: "Strona glowna", href: "/" },
  { label: "Produkty", href: "/produkty" },
  { label: "Realizacje", href: "/realizacje" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Col 1: Logo + description */}
          <div>
            <Link href="/" className="font-heading text-2xl font-bold text-primary neon-text-primary">
              NeonVibe
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Tworzymy unikalne neony LED i znaki swietlne na zamowienie.
              Indywidualny projekt, szybka realizacja, gwarancja jakosci.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              Nawigacja
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:kontakt@neonvibe.pl"
                  className="flex items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-foreground"
                >
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  kontakt@neonvibe.pl
                </a>
              </li>
              <li>
                <a
                  href="tel:+48123456789"
                  className="flex items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-foreground"
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  +48 123 456 789
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-xs text-muted">
            &copy; 2026 NeonVibe. Wszystkie prawa zastrzezone.
          </p>
        </div>
      </div>
    </footer>
  );
}
