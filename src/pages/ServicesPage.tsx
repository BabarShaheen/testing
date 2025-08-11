import { useNavigate } from 'react-router-dom';
import {
  CheckCircle,
  Shield,
  Award,
  FileText,
  Users,
  Leaf,
  Target,
  Clock,
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import {
  HeroSection,
  SectionHeader,
  ServiceCard,
  ContactCTA,
} from '../components/common';

export function ServicesPage() {
  const navigate = useNavigate();

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Shield':
        return Shield;
      case 'Award':
        return Award;
      case 'FileText':
        return FileText;
      case 'Users':
        return Users;
      case 'CheckCircle':
        return CheckCircle;
      case 'Leaf':
        return Leaf;
      case 'Target':
        return Target;
      case 'Clock':
        return Clock;
      default:
        return Shield;
    }
  };

  const handleServiceClick = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-off-white dark:bg-charcoal-navy text-charcoal-navy dark:text-off-white">
      {/* Hero Section */}
      <HeroSection
        title="Our Services"
        description="Comprehensive compliance and safety solutions designed to help your business meet regulatory requirements and achieve operational excellence."
      />

      {/* Services Grid */}
      <section className="py-16 bg-off-white dark:bg-charcoal-navy transition-colors-smooth">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => {
              const IconComponent = getIconComponent(service.iconName);
              return (
                <div
                  key={service.id}
                  className="hover-lift hover-glow transition-all-smooth"
                >
                  <ServiceCard
                    {...service}
                    iconComponent={IconComponent}
                    onLearnMore={handleServiceClick}
                    onGetQuote={handleContactClick}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-off-white dark:bg-charcoal-navy transition-colors-smooth">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Additional Services"
            description="We also provide specialized consulting services tailored to your specific industry needs"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              {
                name: 'Construction Safety',
                desc: 'Specialized safety consulting for construction projects',
              },
              {
                name: 'Food Safety',
                desc: 'HACCP and food safety management systems',
              },
              {
                name: 'Data Protection',
                desc: 'GDPR compliance and data protection audits',
              },
              {
                name: 'Training Programs',
                desc: 'Customized training for your staff and management',
              },
              {
                name: 'Compliance Audits',
                desc: 'Regular compliance audits and assessments',
              },
              {
                name: 'Emergency Planning',
                desc: 'Business continuity and emergency response planning',
              },
            ].map((additional, index) => (
              <div
                key={index}
                className="bg-white dark:bg-charcoal-navy border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 shadow-sm hover-lift hover-glow transition-all-smooth"
              >
                <h3 className="font-semibold text-crimson-pink mb-2">
                  {additional.name}
                </h3>
                <p className="text-charcoal-navy/70 dark:text-off-white/70 text-sm">
                  {additional.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA
        title="Need a Custom Solution?"
        description="Our expert team can create a tailored compliance solution specifically for your business needs."
        buttonText="Contact Us Today"
        onButtonClick={handleContactClick}
        className="bg-gradient-to-r from-crimson-pink to-vivid-red text-white relative overflow-hidden"
      />
    </div>
  );
}
