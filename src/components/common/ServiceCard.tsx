import { CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';

interface ServiceCardProps {
  id: string;
  title: string;
  badge: string;
  color: string;
  iconName: string;
  description: string;
  features: string[];
  pricing: string;
  details?: string;
  onLearnMore?: (serviceId: string) => void;
  onGetQuote?: () => void;
  iconComponent?: React.ComponentType<{ className?: string }>;
}

export function ServiceCard({
  id,
  title,
  badge,
  color,
  description,
  features,
  pricing,
  details,
  onLearnMore,
  onGetQuote,
  iconComponent: IconComponent,
}: ServiceCardProps) {
  const handleLearnMore = (e: React.MouseEvent) => {
    e.stopPropagation();
    onLearnMore?.(id);
  };

  const handleGetQuote = (e: React.MouseEvent) => {
    e.stopPropagation();
    onGetQuote?.();
  };

  return (
    <div
      className={`rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-none ${color} group cursor-pointer p-6`}
    >
      {/* Icon */}
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-white/80 rounded-lg group-hover:bg-white transition-all duration-300">
            {IconComponent && (
              <IconComponent className="h-12 w-12 text-[#ED2568]" />
            )}
          </div>
        </div>

        {/* Title + Badge */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <h3 className="text-xl font-bold text-[#1C1F2A] group-hover:text-[#ED2568] transition-colors">
            {title}
          </h3>
          <span className="px-2 py-1 bg-[#EE343B] text-white text-xs rounded-full">
            {badge}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-[#1C1F2A] opacity-80 mb-4">{description}</p>

      {/* Details Box */}
      <div className="mb-4 p-3 bg-[#F9F9F9] rounded-lg border border-[#ED2568]/20">
        <p className="text-sm text-[#ED2568] font-medium">
          {details || description}
        </p>
      </div>

      {/* Key Features */}
      <div className="mb-4">
        <h4 className="font-semibold text-[#1C1F2A] mb-2">Key Features:</h4>
        <ul className="space-y-1">
          {features.map((feature, featureIndex) => (
            <li
              key={featureIndex}
              className="flex items-center text-sm text-[#1C1F2A] opacity-80"
            >
              <CheckCircle className="h-4 w-4 text-[#EE343B] mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Pricing Box */}
      <div className="mb-4 p-3 bg-[#F9F9F9] rounded-lg border border-[#ED2568]/20">
        <p className="text-sm text-[#1C1F2A] opacity-70 mb-1">
          Service Details:
        </p>
        <p className="font-semibold text-[#ED2568]">{pricing}</p>
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <Button
          className="bg-[#ED2568] hover:bg-[#EE343B] text-white px-4 py-2 rounded text-sm flex-1 transition-colors"
          onClick={handleLearnMore}
        >
          Learn More
        </Button>
        <Button
          variant="outline"
          className="border border-[#ED2568] text-[#ED2568] hover:bg-[#ED2568] hover:text-white px-4 py-2 rounded text-sm flex-1 transition-colors"
          onClick={handleGetQuote}
        >
          Get Quote
        </Button>
      </div>
    </div>
  );
}
