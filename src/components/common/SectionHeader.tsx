interface SectionHeaderProps {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  className?: string;
}

export function SectionHeader({
  title,
  description,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-4xl font-bold tracking-tight mb-6 text-primary">
        {title}
      </h2>
      {description && (
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6">
          {description}
        </p>
      )}
    </div>
  );
}
