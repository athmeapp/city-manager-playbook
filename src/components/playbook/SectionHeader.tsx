interface SectionHeaderProps {
  number: string;
  eyebrow?: string;
  title: string;
  lead?: string;
}

export const SectionHeader = ({ number, eyebrow, title, lead }: SectionHeaderProps) => (
  <header className="mb-8">
    <div className="flex items-baseline gap-4">
      <span
        aria-hidden
        className="font-display text-5xl md:text-6xl font-extrabold leading-none text-gradient-brand"
      >
        {number}
      </span>
      <div>
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-athme-sky">
            {eyebrow}
          </p>
        )}
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-1">
          {title}
        </h2>
      </div>
    </div>
    {lead && (
      <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
        {lead}
      </p>
    )}
  </header>
);
