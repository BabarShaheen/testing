import {
  Award,
  Shield,
  CheckCircle,
  ClipboardCheck,
  Target,
} from 'lucide-react';

interface AccreditationCardProps {
  title: string;
  description: string;
  price: string;
  icon: 'Award' | 'Shield' | 'CheckCircle' | 'ClipboardCheck' | 'Target';
  color: string;
  pricingDetails?: Array<{
    label: string;
    price: string;
  }>;
}

export function AccreditationCard({
  title,
  description,
  price,
  icon,
  color,
  pricingDetails,
}: AccreditationCardProps) {
  const getIconComponent = () => {
    switch (icon) {
      case 'Award':
        return Award;
      case 'Shield':
        return Shield;
      case 'CheckCircle':
        return CheckCircle;
      case 'ClipboardCheck':
        return ClipboardCheck;
      case 'Target':
        return Target;
      default:
        return Award;
    }
  };

  const IconComponent = getIconComponent();

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 text-center">
      <div className="flex justify-center mb-4">
        <div className={`p-3 bg-gradient-to-br ${color} rounded-lg`}>
          <IconComponent className="h-8 w-8 text-blue-600" />
        </div>
      </div>

      <h3 className="text-lg font-bold text-slate-800 mb-2">{title}</h3>

      <p className="text-sm text-gray-600 mb-4">{description}</p>

      {pricingDetails ? (
        <div className="space-y-2">
          {pricingDetails.map((detail, index) => (
            <div key={index} className="p-2 bg-blue-50 rounded">
              <p className="text-sm text-gray-700">
                {detail.label} –{' '}
                <strong className="text-blue-600">{detail.price}</strong>
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-3 bg-blue-50 rounded">
          <p className="text-2xl font-bold text-blue-600">{price}</p>
        </div>
      )}
    </div>
  );
}
