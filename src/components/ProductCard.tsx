import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  href: string;
}

export default function ProductCard({ title, description, price, href }: ProductCardProps) {
  return (
    <div className="group neon-border rounded-xl bg-surface p-6 transition-all duration-300">
      {/* Image placeholder */}
      <div className="relative h-48 overflow-hidden rounded-lg bg-background/50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl transition-transform duration-500 group-hover:scale-150" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs uppercase tracking-widest text-muted">Zdjęcie produktu</span>
        </div>
      </div>

      {/* Content */}
      <div className="mt-5 space-y-3">
        <h3 className="font-heading text-lg font-semibold text-foreground">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted">
          {description}
        </p>
        <p className="font-semibold text-primary">
          {price}
        </p>
      </div>

      {/* CTA */}
      <Link
        href={href}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-secondary transition-colors duration-200 hover:text-foreground"
      >
        Zobacz więcej
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
