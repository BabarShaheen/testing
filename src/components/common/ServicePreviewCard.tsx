interface ServicePreviewCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  ctaText: string;
  onClick?: () => void;
}

export function ServicePreviewCard({
  title,
  description,
  imageSrc,
  imageAlt,
  ctaText,
  onClick,
}: ServicePreviewCardProps) {
  return (
    <div 
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 group cursor-pointer"
      onClick={onClick}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-40 object-cover rounded-md mb-4 group-hover:scale-105 transition"
      />
      <h3 className="text-xl font-semibold text-navy-blue group-hover:text-teal-dark mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm mb-4">
        {description}
      </p>
      <span className="text-orange font-medium">{ctaText} →</span>
    </div>
  );
} 