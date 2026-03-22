import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface NeonButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

const variantClasses: Record<NonNullable<NeonButtonProps["variant"]>, string> = {
  primary:
    "bg-primary text-background hover:neon-glow-primary",
  secondary:
    "bg-secondary text-background hover:neon-glow-secondary",
  outline:
    "border border-primary text-primary hover:bg-primary/10",
};

export default function NeonButton({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: NeonButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-heading font-semibold transition-all duration-300";
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
