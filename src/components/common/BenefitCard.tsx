import { Award, Shield, Target, Users } from 'lucide-react';

interface BenefitCardProps {
  icon: 'Award' | 'Shield' | 'Target' | 'Users';
  name: string;
  description: string;
}

export function BenefitCard({ icon, name, description }: BenefitCardProps) {
  const getIconComponent = () => {
    switch (icon) {
      case 'Award':
        return Award;
      case 'Shield':
        return Shield;
      case 'Target':
        return Target;
      case 'Users':
        return Users;
      default:
        return Award;
    }
  };

  const IconComponent = getIconComponent();

  return (
    <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-lg border border-teal-100 text-center">
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-teal-600 rounded-full">
          <IconComponent className="h-6 w-6 text-white" />
        </div>
      </div>
      <h3 className="font-semibold text-teal-700 mb-2">{name}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
