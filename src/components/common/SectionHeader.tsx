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
      <h2 className="text-3xl font-bold text-slate-800 mb-4">{title}</h2>
      {description && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
      )}
    </div>
  );
}
