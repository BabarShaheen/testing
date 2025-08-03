import React from 'react';
import {
  Shield,
  TrendingUp,
  CheckCircle,
  Award,
  Phone,
  Mail,
  Target,
  Star,
  Building,
  ClipboardCheck,
  ArrowRight,
  FileText,
  Users,
  Clock,
  RefreshCw,
  BookOpen,
  AlertCircle,
  Settings,
  Calendar,
} from 'lucide-react';

// Mock data - replace with your actual data imports
const complianceServices = [
  {
    title: 'Annual Assessment Preparation',
    description:
      'Complete preparation for your yearly SIA ACS assessments with documentation review and gap analysis',
    icon: Calendar,
  },
  {
    title: 'Documentation Updates',
    description:
      'Keep all policies, procedures, and management systems current with latest regulations',
    icon: FileText,
  },
  {
    title: 'Staff Training Programs',
    description:
      'Ongoing training to ensure your team stays compliant with ACS requirements',
    icon: Users,
  },
  {
    title: 'Compliance Monitoring',
    description:
      'Regular monitoring and review of your compliance status and performance metrics',
    icon: ClipboardCheck,
  },
  {
    title: 'Regulatory Updates',
    description:
      'Stay informed about changes in security industry regulations and requirements',
    icon: AlertCircle,
  },
  {
    title: 'System Maintenance',
    description:
      'Ongoing maintenance and optimization of your quality management systems',
    icon: Settings,
  },
  {
    title: 'Audit Support',
    description:
      'Expert support during external audits and inspections from the SIA',
    icon: Shield,
  },
  {
    title: 'Continuous Improvement',
    description:
      'Identify opportunities for improvement and implement best practices',
    icon: RefreshCw,
  },
];

const complianceBenefits = [
  {
    title: 'Maintain ACS certification',
    icon: Award,
    bgColor: 'bg-crimson-pink',
  },
  {
    title: 'Build customer confidence',
    icon: TrendingUp,
    bgColor: 'bg-orange-500',
  },
  {
    title: 'Smoother annual assessments',
    icon: CheckCircle,
    bgColor: 'bg-teal-500',
  },
  {
    title: 'Up-to-date compliance systems',
    icon: RefreshCw,
    bgColor: 'bg-crimson-pink',
  },
  { title: 'Ongoing expert support', icon: Users, bgColor: 'bg-orange-500' },
];

const AcsCompliancePage = () => {
  const handleContactClick = () => {
    console.log('Navigate to contact');
  };

  const handleConsultationClick = () => {
    console.log('Request compliance consultation');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center bg-[#1C1F2A] text-white px-6 sm:px-12 lg:px-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/Images/services/acs_audit.jpg')",
            filter: 'brightness(0.6)',
          }}
        />

        {/* Wave Overlay */}
        <svg
          className="absolute bottom-0 left-0 w-full h-40 z-0"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ED2568"
            fillOpacity="0.2"
            d="M0,64L40,90.7C80,117,160,171,240,186.7C320,203,400,181,480,181.3C560,181,640,203,720,224C800,245,880,267,960,240C1040,213,1120,139,1200,106.7C1280,75,1360,85,1400,90.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          />
        </svg>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          {/* Icon Badge */}
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-white/10 rounded-full shadow-lg backdrop-blur-sm">
              <Shield className="h-16 w-16 text-white" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            SIA ACS Compliance
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Providing a Quality System and Ongoing Consultancy. We don't just
            get you certified — we help you stay certified.
          </p>

          {/* Highlight Box */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-3xl mx-auto border border-white/10">
            <p className="text-lg font-medium text-white">
              Long-term support after your ACS accreditation with remote or
              onsite assistance tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-crimson-pink rounded-full">
                  <Building className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-crimson-pink mb-2">
                Ongoing Support
              </h3>
              <p className="text-gray-600">
                We don't just get you certified — we help you stay certified
                with continuous support
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-crimson-pink rounded-full">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-crimson-pink mb-2">
                Expert Guidance
              </h3>
              <p className="text-gray-600">
                Long-term support to maintain up-to-date systems and prepare for
                upcoming audits
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-crimson-pink rounded-full">
                  <Settings className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-crimson-pink mb-2">
                Flexible Service
              </h3>
              <p className="text-gray-600">
                Our support can be remote or onsite, tailored to your specific
                business needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Our ACS Compliance Service Includes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              What Our ACS Compliance Service Includes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive ongoing support to ensure your ACS certification
              remains valid and effective
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="text-center mb-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-crimson-pink rounded-lg group-hover:bg-vivid-red transition-colors">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-crimson-pink transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm text-center leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Why Ongoing Compliance Matters
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg leading-relaxed">
                  Keeping your system current not only ensures compliance but
                  builds confidence with customers and makes annual assessments
                  smoother.
                </p>
                <p className="text-lg leading-relaxed">
                  The security industry is constantly evolving with new
                  regulations, standards, and best practices. Our ongoing
                  compliance service ensures you stay ahead of these changes.
                </p>
                <p className="text-lg leading-relaxed">
                  With our expert support, you can focus on growing your
                  business while we handle the complex compliance requirements.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-lg border border-teal-100">
              <h3 className="text-2xl font-bold text-crimson-pink mb-4">
                Key Facts
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    Continuous compliance monitoring
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    Regular system updates and improvements
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    Expert audit preparation support
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    Flexible remote or onsite service
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits and Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Benefits */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Benefits of Our Compliance Service
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                Our comprehensive compliance service ensures your ACS
                certification remains valid while you focus on your core
                business
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {complianceBenefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-3 ${benefit.bgColor} rounded-lg flex-shrink-0`}
                        >
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-slate-800 mb-2">
                            {benefit.title}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            Essential for maintaining your competitive edge in
                            the security industry
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact Sidebar */}
            <div className="space-y-6">
              {/* Ready for Peace of Mind */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-6 h-6 text-crimson-pink" />
                  <h3 className="text-xl font-semibold text-slate-800">
                    Ready for Peace of Mind?
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Let us handle the ongoing compliance work, so you can focus on
                  your business growth and operations.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <Phone className="w-5 h-5 text-crimson-pink" />
                    <div>
                      <p className="text-sm text-blue-800">Call us at</p>
                      <p className="font-semibold text-slate-800">
                        0447446131794
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <Mail className="w-5 h-5 text-crimson-pink" />
                    <div>
                      <p className="text-sm text-blue-800">Email us at</p>
                      <p className="font-semibold text-slate-800 text-sm">
                        admin@citrix-consulting-limited.co.uk
                      </p>
                    </div>
                  </div>
                  <button
                    className="w-full bg-crimson-pink hover:bg-vivid-red text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                    onClick={handleConsultationClick}
                  >
                    Request Compliance Consultation
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Service Features */}
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-lg border border-teal-100">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-crimson-pink" />
                  <h3 className="text-xl font-semibold text-slate-800">
                    Service Features
                  </h3>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-crimson-pink mb-2">
                    Flexible
                  </div>
                  <p className="text-gray-700 mb-4">
                    Remote or onsite support tailored to your needs
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">
                      Customized service plans
                    </span>
                  </div>
                </div>
              </div>

              {/* Additional Support */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-semibold text-slate-800 mb-3">
                  Additional Support
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    24/7 compliance helpline
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    Quarterly system reviews
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    Training program updates
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    Regulatory change alerts
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-20 bg-crimson-gradient text-white relative overflow-hidden animate-fade-in"
        style={{
          backgroundImage: "url('/Images/landingpage/get-started.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Maintain Your ACS Certification
          </h2>

          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-10">
            Don't let compliance become a burden. Our ongoing support service
            ensures your ACS certification remains valid while you focus on what
            matters most - growing your security business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg transition-all duration-300"
              onClick={handleContactClick}
            >
              Start Compliance Support
            </button>
            <button
              className="border-2 border-white text-white hover:bg-white hover:text-crimson-pink px-8 py-3 rounded-xl text-lg font-semibold transition-all duration-300"
              onClick={handleContactClick}
            >
              Schedule Consultation
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto shadow-md">
            <p className="text-xl font-semibold mb-2">
              Expert Support • Continuous Monitoring • Peace of Mind
            </p>
            <p className="text-gray-100 text-base leading-relaxed">
              Let us handle the complex compliance requirements while you focus
              on delivering exceptional security services to your clients.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcsCompliancePage;
