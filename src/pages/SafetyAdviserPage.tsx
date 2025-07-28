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
  Shield,
  CheckCircle,
  ArrowRight,
  Users,
  FileText,
  Award,
} from 'lucide-react';

export function SafetyAdviserPage() {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  const services = [
    {
      id: 'safety-adviser',
      icon: <Shield className="h-8 w-8 text-orange" />,
      title: 'Safety Adviser',
      description:
        'Comprehensive health and safety advisory services for your business.',
      price: 'From £150/hour',
      badge: 'Core Service',
    },
    {
      id: 'chas-assistance',
      icon: <Award className="h-8 w-8 text-orange" />,
      title: 'CHAS Assistance',
      description: 'Professional assistance to obtain CHAS accreditation.',
      price: 'From £1,800',
      badge: 'Essential',
    },
    {
      id: 'accreditation-support',
      icon: <CheckCircle className="h-8 w-8 text-orange" />,
      title: 'Accreditation Support',
      description:
        'Support for various industry accreditations and certifications.',
      price: 'From £2,200',
      badge: 'Professional',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-teal-gradient text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-blue/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Safety Adviser Services
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Professional health and safety advisory services to ensure your
            business meets all regulatory requirements and maintains the highest
            safety standards.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-blue mb-4">
              Our Safety Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive safety solutions designed to protect your workforce
              and ensure compliance with health and safety regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                className="hover:shadow-xl transition-all duration-300 border-none bg-gray-50/50 group cursor-pointer"
                onClick={() => handleServiceClick(service.id)}
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-white rounded-lg group-hover:bg-teal-light/10 transition-all duration-300">
                      {service.icon}
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
                  <div className="mb-4 p-3 bg-white/60 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-600 mb-1">Starting from:</p>
                    <p className="font-semibold text-teal-dark">
                      {service.price}
                    </p>
                  </div>
                  <Button
                    className="w-full bg-teal-dark hover:bg-teal-dark/90 text-white transition-all-smooth"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleServiceClick(service.id);
                    }}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-blue mb-4">
              Why Choose Our Safety Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional safety advisory services that deliver results and
              protect your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8 text-white" />,
                title: 'Expert Knowledge',
                description:
                  'Our qualified safety advisers have extensive experience across various industries.',
                bgColor: 'bg-orange',
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-white" />,
                title: 'Compliance Assurance',
                description:
                  'Ensure your business meets all health and safety regulatory requirements.',
                bgColor: 'bg-leaf-green',
              },
              {
                icon: <Users className="h-8 w-8 text-white" />,
                title: 'Workforce Protection',
                description:
                  'Protect your employees and create a safe working environment.',
                bgColor: 'bg-teal-dark',
              },
              {
                icon: <FileText className="h-8 w-8 text-white" />,
                title: 'Documentation Support',
                description:
                  'Comprehensive documentation and policy development services.',
                bgColor: 'bg-purple',
              },
              {
                icon: <Award className="h-8 w-8 text-white" />,
                title: 'Professional Recognition',
                description:
                  'Achieve industry recognition and enhance your business reputation.',
                bgColor: 'bg-blue',
              },
              {
                icon: <ArrowRight className="h-8 w-8 text-white" />,
                title: 'Ongoing Support',
                description:
                  'Continuous support and monitoring to maintain safety standards.',
                bgColor: 'bg-indigo',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div
                  className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy-blue mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-blue/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Improve Your Safety Standards?
          </h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and discover how we can
            help your business achieve safety excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange hover:bg-orange/90 text-white px-8 py-3"
              onClick={handleContactClick}
            >
              Get Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-teal-dark px-8 py-3"
              onClick={handleContactClick}
            >
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
