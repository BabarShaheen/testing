import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import {
  CheckCircle,
  Star,
  ArrowRight,
  Shield,
  Award,
  FileText,
  Users,
  Leaf,
  Target,
  Clock,
} from 'lucide-react';
import { servicesData } from '../data/servicesData';

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
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-teal-gradient text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-blue/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Comprehensive compliance and safety solutions designed to help your
            business meet regulatory requirements and achieve operational
            excellence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => {
              const IconComponent = getIconComponent(service.iconName);
              return (
                <Card
                  key={service.id}
                  className={`hover:shadow-xl transition-all duration-300 border-none ${service.color} group cursor-pointer`}
                  onClick={() => handleServiceClick(service.id)}
                >
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-white/80 rounded-lg group-hover:bg-white transition-all duration-300">
                        <IconComponent className="h-12 w-12 text-orange" />
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <CardTitle className="text-teal-dark group-hover:text-teal-light transition-colors">
                        {service.title}
                      </CardTitle>
                      <Badge
                        variant="secondary"
                        className="bg-leaf-green text-white"
                      >
                        {service.badge}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">
                      {service.description}
                    </CardDescription>

                    <div className="mb-4">
                      <h4 className="font-semibold text-navy-blue mb-2">
                        Key Features:
                      </h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <CheckCircle className="h-4 w-4 text-leaf-green mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4 p-3 bg-white/60 rounded-lg border border-gray-200">
                      <p className="text-sm text-gray-600 mb-1">Pricing:</p>
                      <p className="font-semibold text-teal-dark">
                        {service.pricing}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        className="bg-teal-dark hover:bg-teal-dark/90 text-white flex-1"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleServiceClick(service.id);
                        }}
                      >
                        Learn More
                      </Button>
                      <Button
                        variant="outline"
                        className="border-orange text-orange hover:bg-orange hover:text-white flex-1"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleServiceClick(service.id);
                        }}
                      >
                        Get Quote
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-blue mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We also provide specialized consulting services tailored to your
              specific industry needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <h3 className="font-semibold text-teal-dark mb-2">
                  {additional.name}
                </h3>
                <p className="text-gray-600 text-sm">{additional.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-teal-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-leaf-green/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8">
            Our expert team can create a tailored compliance solution
            specifically for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange hover:bg-orange/90 text-white px-8 py-3"
              onClick={handleContactClick}
            >
              Contact Us Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-teal-dark px-8 py-3"
              onClick={handleContactClick}
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
