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
  Award,
  FileText,
  Users,
} from 'lucide-react';

export function BafeCertificationPage() {
  const navigate = useNavigate();

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            BAFE Certification
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Professional BAFE certification services for fire safety equipment
            and services.
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-blue mb-6">
                BAFE Certification Services
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our professional BAFE certification services help fire safety
                equipment suppliers and service providers achieve and maintain
                BAFE accreditation, demonstrating their commitment to quality
                and safety.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-leaf-green mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-navy-blue">
                      Fire Safety Compliance
                    </h3>
                    <p className="text-gray-600">
                      Ensure compliance with fire safety regulations and
                      standards.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-leaf-green mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-navy-blue">
                      Equipment Certification
                    </h3>
                    <p className="text-gray-600">
                      Certification for fire safety equipment and systems.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-leaf-green mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-navy-blue">
                      Service Certification
                    </h3>
                    <p className="text-gray-600">
                      Certification for fire safety service providers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-leaf-green mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-navy-blue">
                      Ongoing Support
                    </h3>
                    <p className="text-gray-600">
                      Continuous support for maintenance and renewal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-navy-blue mb-4">
                Service Details
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Starting Price:</span>
                  <span className="font-semibold text-teal-dark">£2,800</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Timeline:</span>
                  <span className="font-semibold text-teal-dark">
                    6-8 weeks
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Success Rate:</span>
                  <span className="font-semibold text-teal-dark">92%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Clients Served:</span>
                  <span className="font-semibold text-teal-dark">60+</span>
                </div>
              </div>
              <Button
                className="w-full mt-6 bg-orange hover:bg-orange/90 text-white"
                onClick={handleContactClick}
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-blue mb-4">
              Benefits of BAFE Certification
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Achieve industry recognition and enhance your fire safety
              business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8 text-white" />,
                title: 'Fire Safety Compliance',
                description:
                  'Ensure compliance with fire safety regulations and standards.',
                bgColor: 'bg-orange',
              },
              {
                icon: <Award className="h-8 w-8 text-white" />,
                title: 'Enhanced Credibility',
                description:
                  'Build trust and credibility with clients and stakeholders.',
                bgColor: 'bg-leaf-green',
              },
              {
                icon: <ArrowRight className="h-8 w-8 text-white" />,
                title: 'Competitive Advantage',
                description:
                  'Gain a competitive advantage in the fire safety market.',
                bgColor: 'bg-teal-dark',
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-white" />,
                title: 'Professional Recognition',
                description:
                  'Achieve industry recognition and professional status.',
                bgColor: 'bg-purple',
              },
              {
                icon: <FileText className="h-8 w-8 text-white" />,
                title: 'Quality Assurance',
                description:
                  'Demonstrate commitment to quality and safety standards.',
                bgColor: 'bg-blue',
              },
              {
                icon: <Users className="h-8 w-8 text-white" />,
                title: 'Customer Confidence',
                description: 'Increase customer confidence and satisfaction.',
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
            Ready to Achieve BAFE Certification?
          </h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and discover how we can
            help you achieve BAFE certification.
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
