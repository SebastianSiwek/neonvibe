interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({ title, subtitle, className = "" }: SectionHeadingProps) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
        {title}
      </h2>
      {/* Neon underline accent */}
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-secondary" />
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          {subtitle}
        </p>
      )}
    </div>
  );
}
