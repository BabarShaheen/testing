import React, { ReactNode, MouseEventHandler } from 'react';
import {
  Shield,
  CheckCircle,
  ArrowRight,
  Award,
  FileText,
  Users,
  Search,
  Settings,
  Eye,
  Globe,
  Star,
  Building,
  ClipboardCheck,
  UserCheck,
  BadgeCheck,
  Target,
} from 'lucide-react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}
interface ChildrenProps {
  children: ReactNode;
  className?: string;
}
// Custom UI Components
const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => (
  <div
    className={`bg-white p-6 rounded-2xl shadow-lg border transition duration-300 ${className}`}
    onClick={onClick}
  >
    {children}
  </div>
);
interface ButtonProps {
  children: ReactNode;
  size?: 'default' | 'lg';
  variant?: 'default' | 'outline' | 'ghost' | 'destructive';
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const CardContent: React.FC<ChildrenProps> = ({
  children,
  className = '',
}) => <div className={`p-4 ${className}`}>{children}</div>;

export const Badge: React.FC<ChildrenProps> = ({
  children,
  className = '',
}) => (
  <span
    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}
  >
    {children}
  </span>
);

const Button: React.FC<ButtonProps> = ({
  children,
  size = 'default',
  variant = 'default',
  className = '',
  onClick,
}) => {
  const sizeClasses: Record<string, string> = {
    default: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const variantClasses: Record<string, string> = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-100',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
    destructive: 'bg-red-600 text-white hover:bg-red-700',
  };

  const PrimaryvariantClasses = {
    default: 'bg-blue-600 hover:bg-blue-700 text-white',
    outline:
      'border border-current bg-transparent hover:bg-current hover:text-white',
  };

  return (
    <button
      className={`font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default function BafeSP205Page() {
  const handleServiceClick = (serviceId: any) => {
    console.log(`Navigate to service: ${serviceId}`);
  };

  const handleContactClick = () => {
    console.log('Navigate to contact page');
  };

  const handleReadMore = () => {
    document
      .getElementById('main-content')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  const consultancySteps = [
    {
      step: 'Step 1',
      title: 'Check Requirements',
      description:
        'Do you have competent systems in place? For this scheme you do not need ISO9001 certification. However, you are required to have robust Quality Management Systems in place. We will help to implement quality management system to support BAFE SP205.',
      icon: <ClipboardCheck className="h-8 w-8" />,
      bgColor: 'bg-orange',
    },
    {
      step: 'Step 2',
      title: 'Audit Compliance',
      description:
        'Audit compliance from certification bodies Listed with BAFE.',
      icon: <Eye className="h-8 w-8" />,
      bgColor: 'bg-leaf-green',
    },
    {
      step: 'Step 3',
      title: 'Achieve Certification',
      description:
        'When you have achieved certification, your Certification Body will contact BAFE with your information.',
      icon: <BadgeCheck className="h-8 w-8" />,
      bgColor: 'bg-teal-dark',
    },
    {
      step: 'Step 4',
      title: 'Receive Welcome Pack',
      description:
        'BAFE will then send out a welcome pack including your BAFE certificate. At this point you will be allowed to display the correct BAFE logo that relates to your scheme.',
      icon: <Award className="h-8 w-8" />,
      bgColor: 'bg-purple',
    },
    {
      step: 'Step 5',
      title: 'Website Listing',
      description:
        "Your company will then be added to the BAFE website, which will enable all users searching for Third Party Certified BAFE registered fire protection companies to access your companies' information.",
      icon: <Globe className="h-8 w-8" />,
      bgColor: 'bg-blue',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-teal-gradient text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-blue/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Badge className="bg-orange text-white px-6 py-2 text-lg mb-6">
            BAFE SP205 Certification
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Life Safety Fire Risk Assessment Consultancy
          </h1>
          <p className="text-xl text-gray-100 max-w-4xl mx-auto mb-12">
            If you are the Responsible Person (or Duty Holder in Scotland) you
            hold the responsibility for the adequacy of your company's Fire Risk
            Assessment by law, rather than the assessor themselves. To ensure
            you are using a competent provider you should be using a BAFE
            registered company.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto border border-white/20 mb-8">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-12 w-12 text-orange mr-4" />
              <h2 className="text-2xl font-bold">BAFE SP 205</h2>
            </div>
            <p className="text-gray-100 leading-relaxed">
              <strong>Life Safety Fire Risk Assessment SP205</strong> specifies
              that organisations (including in-house departments and sole
              traders) have the required technical and quality management
              capabilities and risk assessment staff meet appropriate criteria.
              The scheme has been designed to meet the requirements of fire risk
              assessment providers large and small, recognising that there are
              many individuals working as assessors.
            </p>
          </div>

          <Button
            size="lg"
            className="bg-orange hover:bg-orange/90 text-white px-8 py-4 text-lg"
            onClick={handleReadMore}
          >
            Learn About Our Process
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <div id="main-content">
        {/* 5-Step Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-blue mb-4">
                BAFE SP205 Certification Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our proven 5-step process to help you achieve BAFE SP205
                certification and gain recognition as a competent fire risk
                assessment provider.
              </p>
            </div>

            <div className="space-y-8">
              {consultancySteps.map((stepItem, index) => (
                <div
                  key={index}
                  className={`${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex flex-col lg:flex gap-12 items-center`}
                >
                  <div className="flex-1">
                    <div className="bg-white rounded-lg p-8 shadow-lg">
                      <div className="flex items-center mb-6">
                        <div
                          className={`w-16 h-16 ${stepItem.bgColor} rounded-full flex items-center justify-center text-white mr-6`}
                        >
                          {stepItem.icon}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-500 mb-1">
                            {stepItem.step}
                          </div>
                          <h3 className="text-2xl font-bold text-navy-blue">
                            {stepItem.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {stepItem.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div
                      className={`w-24 h-24 ${stepItem.bgColor} rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg`}
                    >
                      {index + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Details Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-navy-blue mb-6">
                  BAFE SP205 Consultancy Services
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our comprehensive consultancy service guides you through every
                  step of the BAFE SP205 certification process, ensuring your
                  organization meets all technical and quality management
                  requirements.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-leaf-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-navy-blue">
                        Quality Management Systems
                      </h3>
                      <p className="text-gray-600">
                        Implementation of robust QMS to support BAFE SP205
                        requirements (ISO9001 not required).
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-leaf-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-navy-blue">
                        Technical Capability Assessment
                      </h3>
                      <p className="text-gray-600">
                        Ensure your organization has the required technical
                        capabilities for life safety fire risk assessment.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-leaf-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-navy-blue">
                        Staff Competency Verification
                      </h3>
                      <p className="text-gray-600">
                        Verify that risk assessment staff meet appropriate
                        criteria and competency levels.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-leaf-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-navy-blue">
                        Certification Body Liaison
                      </h3>
                      <p className="text-gray-600">
                        Full support through the audit and certification process
                        with BAFE-listed certification bodies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="text-center mb-6">
                  <Shield className="h-16 w-16 text-orange mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-navy-blue">
                    Consultancy Details
                  </h3>
                </div>
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
                  <div className="border-t pt-4 mt-6">
                    <div className="text-center">
                      <Badge className="bg-leaf-green text-white px-4 py-2 mb-4">
                        Suitable for all sizes
                      </Badge>
                      <p className="text-sm text-gray-600">
                        Designed for large organizations, in-house departments,
                        and sole traders
                      </p>
                    </div>
                  </div>
                </div>
                <Button
                  className="w-full mt-6 bg-orange hover:bg-orange/90 text-white"
                  onClick={handleContactClick}
                >
                  Start Your Certification Journey
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
                Benefits of BAFE SP205 Certification
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Achieve industry recognition as a competent fire risk assessment
                provider and enhance your professional credibility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield className="h-8 w-8 text-white" />,
                  title: 'Legal Compliance',
                  description:
                    'Meet the legal requirements for competent fire risk assessment provision.',
                  bgColor: 'bg-orange',
                },
                {
                  icon: <Award className="h-8 w-8 text-white" />,
                  title: 'Industry Recognition',
                  description:
                    'Gain official recognition from the leading fire safety certification body.',
                  bgColor: 'bg-leaf-green',
                },
                {
                  icon: <Target className="h-8 w-8 text-white" />,
                  title: 'Responsible Person Confidence',
                  description:
                    'Provide assurance to Responsible Persons and Duty Holders.',
                  bgColor: 'bg-teal-dark',
                },
                {
                  icon: <Globe className="h-8 w-8 text-white" />,
                  title: 'BAFE Website Listing',
                  description:
                    'Featured on the official BAFE directory for increased visibility.',
                  bgColor: 'bg-purple',
                },
                {
                  icon: <BadgeCheck className="h-8 w-8 text-white" />,
                  title: 'Quality Assurance',
                  description:
                    'Demonstrate technical and quality management capabilities.',
                  bgColor: 'bg-blue',
                },
                {
                  icon: <Users className="h-8 w-8 text-white" />,
                  title: 'Market Access',
                  description:
                    'Access clients who specifically require BAFE-registered providers.',
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

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-blue mb-4">
                Why Choose Our BAFE SP205 Consultancy?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We work closely with your organisation to ensure successful
                certification, regardless of your size or current setup.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <UserCheck className="h-12 w-12 text-orange mx-auto mb-4" />
                  <h3 className="font-semibold text-navy-blue mb-2">
                    Expert Guidance
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Close collaboration throughout the entire certification
                    process
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Settings className="h-12 w-12 text-leaf-green mx-auto mb-4" />
                  <h3 className="font-semibold text-navy-blue mb-2">
                    No ISO9001 Required
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Implement robust QMS without ISO9001 certification
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Building className="h-12 w-12 text-teal-dark mx-auto mb-4" />
                  <h3 className="font-semibold text-navy-blue mb-2">
                    All Organization Sizes
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Support for large companies, departments, and sole traders
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Star className="h-12 w-12 text-purple mx-auto mb-4" />
                  <h3 className="font-semibold text-navy-blue mb-2">
                    Proven Track Record
                  </h3>
                  <p className="text-gray-600 text-sm">
                    92% success rate with 60+ satisfied clients
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-teal-gradient text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-navy-blue/20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Achieve BAFE SP205 Certification?
            </h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation and discover how we can
              help you become a BAFE-registered fire risk assessment provider.
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
    </div>
  );
}
