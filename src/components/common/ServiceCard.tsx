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
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-white/80 rounded-lg group-hover:bg-white transition-all duration-300">
            {IconComponent && (
              <IconComponent className="h-12 w-12 text-orange-600" />
            )}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mb-2">
          <h3 className="text-xl font-bold text-teal-700 group-hover:text-teal-600 transition-colors">
            {title}
          </h3>
          <span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full">
            {badge}
          </span>
        </div>
      </div>

      <p className="text-gray-600 mb-4">{description}</p>

      <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
        <p className="text-sm text-blue-800 font-medium">
          {details || description}
        </p>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold text-slate-700 mb-2">Key Features:</h4>
        <ul className="space-y-1">
          {features.map((feature, featureIndex) => (
            <li
              key={featureIndex}
              className="flex items-center text-sm text-gray-600"
            >
              <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4 p-3 bg-white/60 rounded-lg border border-gray-200">
        <p className="text-sm text-gray-600 mb-1">Service Details:</p>
        <p className="font-semibold text-teal-700">{pricing}</p>
      </div>

      <div className="flex gap-2">
        <Button
          variant="default"
          className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded text-sm flex-1 transition-colors"
          onClick={handleLearnMore}
        >
          Learn More
        </Button>
        <Button
          variant="outline"
          className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-4 py-2 rounded text-sm flex-1 transition-colors"
          onClick={handleGetQuote}
        >
          Get Quote
        </Button>
      </div>
    </div>
  );
}
