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
  FileText,
  CheckCircle,
  ArrowRight,
  Shield,
  Award,
  Users,
} from 'lucide-react';

export function RiskAssessmentsPage() {
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
            Risk Assessments
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Professional risk assessment services to identify, evaluate, and
            control risks in your workplace.
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-blue mb-6">
                Comprehensive Risk Assessment Services
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our professional risk assessment services help you identify,
                evaluate, and control risks in your workplace, ensuring
                compliance with health and safety regulations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-leaf-green mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-navy-blue">
                      Risk Identification
                    </h3>
                    <p className="text-gray-600">
                      Comprehensive identification of all potential hazards and
                      risks.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-leaf-green mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-navy-blue">
                      Risk Evaluation
                    </h3>
                    <p className="text-gray-600">
                      Evaluation of risks in terms of likelihood and severity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-leaf-green mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-navy-blue">
                      Control Measures
                    </h3>
                    <p className="text-gray-600">
                      Development of appropriate control measures and
                      strategies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-leaf-green mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-navy-blue">
                      Action Planning
                    </h3>
                    <p className="text-gray-600">
                      Prioritized action plans with clear timelines and
                      responsibilities.
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
                  <span className="font-semibold text-teal-dark">£450</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Timeline:</span>
                  <span className="font-semibold text-teal-dark">
                    1-2 weeks
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Success Rate:</span>
                  <span className="font-semibold text-teal-dark">100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Clients Served:</span>
                  <span className="font-semibold text-teal-dark">800+</span>
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
              Benefits of Professional Risk Assessment
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ensure workplace safety and compliance with comprehensive risk
              management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8 text-white" />,
                title: 'Legal Compliance',
                description:
                  'Ensure compliance with health and safety regulations.',
                bgColor: 'bg-orange',
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-white" />,
                title: 'Risk Reduction',
                description:
                  'Identify and minimize workplace risks and hazards.',
                bgColor: 'bg-leaf-green',
              },
              {
                icon: <Award className="h-8 w-8 text-white" />,
                title: 'Improved Safety',
                description:
                  'Create a safer working environment for your employees.',
                bgColor: 'bg-teal-dark',
              },
              {
                icon: <FileText className="h-8 w-8 text-white" />,
                title: 'Cost Savings',
                description:
                  'Reduce costs associated with accidents and incidents.',
                bgColor: 'bg-purple',
              },
              {
                icon: <Users className="h-8 w-8 text-white" />,
                title: 'Professional Certification',
                description:
                  'Receive professional certification and documentation.',
                bgColor: 'bg-blue',
              },
              {
                icon: <ArrowRight className="h-8 w-8 text-white" />,
                title: 'Peace of Mind',
                description: 'Confidence in your workplace safety standards.',
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
            Ready to Start Risk Assessment?
          </h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and discover how we can
            help you implement comprehensive risk assessment.
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
