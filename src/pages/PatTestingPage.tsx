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
  ArrowRight,
  Shield,
  FileText,
  Award,
  Users,
} from 'lucide-react';

export function PatTestingPage() {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  const services = [
    {
      id: 'pat-testing',
      icon: <CheckCircle className="h-8 w-8 text-orange" />,
      title: 'PAT Testing',
      description:
        'Professional PAT testing services to ensure electrical safety compliance.',
      price: 'From £3 per item',
      badge: 'Safety',
    },
    {
      id: 'pat-pricing',
      icon: <FileText className="h-8 w-8 text-orange" />,
      title: 'PAT Pricing',
      description:
        'Competitive pricing for comprehensive PAT testing services.',
      price: 'From £3 per item',
      badge: 'Affordable',
    },
    {
      id: 'fire-safety',
      icon: <Shield className="h-8 w-8 text-orange" />,
      title: 'Fire Safety',
      description: 'Comprehensive fire safety services and assessments.',
      price: 'From £450',
      badge: 'Required',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-teal-gradient text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-blue/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            PAT Testing Services
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Professional PAT testing and fire safety services to ensure
            electrical safety compliance in your workplace.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-blue mb-4">
              Our PAT Testing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive electrical safety testing and fire safety services
              for your business.
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
              Benefits of PAT Testing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ensure electrical safety and compliance in your workplace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8 text-white" />,
                title: 'Electrical Safety',
                description:
                  'Ensure electrical safety compliance in your workplace.',
                bgColor: 'bg-orange',
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-white" />,
                title: 'Reduced Fire Risk',
                description:
                  'Minimize the risk of electrical fires and accidents.',
                bgColor: 'bg-leaf-green',
              },
              {
                icon: <Award className="h-8 w-8 text-white" />,
                title: 'Insurance Compliance',
                description: 'Meet insurance requirements and reduce premiums.',
                bgColor: 'bg-teal-dark',
              },
              {
                icon: <FileText className="h-8 w-8 text-white" />,
                title: 'Professional Certification',
                description:
                  'Receive professional certification and documentation.',
                bgColor: 'bg-purple',
              },
              {
                icon: <Users className="h-8 w-8 text-white" />,
                title: 'Peace of Mind',
                description: 'Confidence in your electrical safety standards.',
                bgColor: 'bg-blue',
              },
              {
                icon: <ArrowRight className="h-8 w-8 text-white" />,
                title: 'Cost-Effective',
                description: 'Affordable testing with comprehensive coverage.',
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
            Ready to Schedule PAT Testing?
          </h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and discover how we can
            help you ensure electrical safety compliance.
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
