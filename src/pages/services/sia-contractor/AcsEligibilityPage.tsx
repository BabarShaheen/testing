import React from 'react';
import {
  Shield,
  TrendingUp,
  Award,
  Phone,
  Mail,
  Target,
  Star,
  Building,
  Zap,
  ClipboardCheck,
  CheckCircle,
  ArrowRight,
  Users,
  FileText,
  Clock,
  Globe,
  Lock,
  Search,
} from 'lucide-react';

// Mock data - replace with your actual data imports
const eligibleServices = [
  { name: 'Manned Security Services', icon: Shield },
  { name: 'CCTV Monitoring', icon: Search },
  { name: 'Access Control', icon: Lock },
  { name: 'Mobile Patrols', icon: Users },
  { name: 'Event Security', icon: Star },
  { name: 'Retail Security', icon: Building },
  { name: 'Corporate Security', icon: Globe },
  { name: 'Key Holding Services', icon: FileText },
];

const acsCertifications = [
  {
    title: 'Enhanced credibility with clients',
    icon: Award,
    bgColor: 'bg-crimson-pink',
  },
  {
    title: 'Competitive advantage in tenders',
    icon: TrendingUp,
    bgColor: 'bg-orange-500',
  },
  {
    title: 'Improved operational efficiency',
    icon: Target,
    bgColor: 'bg-teal-500',
  },
  {
    title: 'Legal compliance assurance',
    icon: Shield,
    bgColor: 'bg-crimson-pink',
  },
  {
    title: 'Access to premium contracts',
    icon: Star,
    bgColor: 'bg-orange-500',
  },
  { title: 'Industry recognition', icon: Building, bgColor: 'bg-teal-500' },
];

const acsProcessSteps = [
  {
    id: 1,
    step: 'Initial Assessment',
    title: 'Evaluation & Gap Analysis',
    description:
      'We evaluate your current operations and identify areas for improvement to meet ACS standards.',
    icon: ClipboardCheck,
    color: 'bg-gradient-to-br from-blue-50 to-teal-50',
  },
  {
    id: 2,
    step: 'Documentation Development',
    title: 'System Implementation',
    description:
      'Our experts help create and implement the required policies, procedures, and management systems.',
    icon: FileText,
    color: 'bg-gradient-to-br from-purple-50 to-pink-50',
  },
  {
    id: 3,
    step: 'Implementation Support',
    title: 'Training & Support',
    description:
      'We guide you through the implementation process, ensuring all requirements are met effectively.',
    icon: Users,
    color: 'bg-gradient-to-br from-orange-50 to-yellow-50',
  },
  {
    id: 4,
    step: 'Final Review & Submission',
    title: 'Certification Process',
    description:
      'Complete final assessment and submit your application to the SIA for certification approval.',
    icon: Award,
    color: 'bg-gradient-to-br from-green-50 to-emerald-50',
  },
];

const acsDifferentiators = [
  {
    title: 'Proven track record with 95% success rate',
    icon: Award,
    bgColor: 'bg-crimson-pink',
  },
  {
    title: 'Industry-specific expertise',
    icon: Shield,
    bgColor: 'bg-orange-500',
  },
  {
    title: 'Ongoing support and maintenance',
    icon: Target,
    bgColor: 'bg-teal-500',
  },
  {
    title: 'Cost-effective solutions',
    icon: TrendingUp,
    bgColor: 'bg-crimson-pink',
  },
  {
    title: 'Fast-track certification process',
    icon: Zap,
    bgColor: 'bg-orange-500',
  },
  {
    title: 'Comprehensive training included',
    icon: Star,
    bgColor: 'bg-teal-500',
  },
];

const acsBenefits = [
  {
    title: 'Official SIA recognition',
    icon: Award,
    bgColor: 'bg-crimson-pink',
  },
  {
    title: 'Improved business credibility',
    icon: TrendingUp,
    bgColor: 'bg-orange-500',
  },
  {
    title: 'Access to government contracts',
    icon: Building,
    bgColor: 'bg-teal-500',
  },
  {
    title: 'Enhanced operational standards',
    icon: Target,
    bgColor: 'bg-crimson-pink',
  },
  {
    title: 'Competitive market advantage',
    icon: Star,
    bgColor: 'bg-orange-500',
  },
];

const AcsEligibilityPage = () => {
  const handleContactClick = () => {
    console.log('Navigate to contact');
  };

  const handleConsultationClick = () => {
    console.log('Request ACS consultation');
  };

  const handleServiceClick = (serviceId: any) => {
    console.log('Navigate to service:', serviceId);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center bg-[#1C1F2A] text-white px-6 sm:px-12 lg:px-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/Images/services/acs_elig.jpg')",
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
              <ClipboardCheck className="h-16 w-16 text-white" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            SIA ACS Eligibility
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The official standard designed to regulate and improve private
            security providers in the UK. Set the recognized benchmark for
            operational excellence and legal compliance.
          </p>

          {/* Highlight Box */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-3xl mx-auto border border-white/10">
            <p className="text-lg font-medium text-white">
              We make eligibility and certification as simple as possible with
              expert guidance every step of the way
            </p>
          </div>
        </div>
      </section>

      {/* About SIA ACS */}
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
                Official Standard
              </h3>
              <p className="text-gray-600">
                The only recognised scheme to standardise organisations
                operating within the private security sector
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-crimson-pink rounded-full">
                  <Shield className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-crimson-pink mb-2">
                Legal Compliance
              </h3>
              <p className="text-gray-600">
                Administered under the Private Security Industry Act 2001 for
                operational excellence
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-crimson-pink rounded-full">
                  <Award className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-crimson-pink mb-2">
                Industry Recognition
              </h3>
              <p className="text-gray-600">
                Sets the recognized benchmark for security service providers
                across the UK
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is Eligible */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Who Is Eligible for SIA ACS?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Organizations providing security services may apply for ACS
              approval
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eligibleServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                  onClick={() => handleServiceClick(service.name)}
                >
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-crimson-pink rounded-lg group-hover:bg-vivid-red transition-colors">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-slate-800 group-hover:text-crimson-pink transition-colors">
                      {service.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-gray-600">
              …may apply for ACS approval, provided they meet operational,
              training, and personnel compliance standards.
            </p>
          </div>
        </div>
      </section>

      {/* Why Pursue ACS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Why Pursue ACS Certification?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transform your business with industry-recognized certification
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {acsCertifications.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
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
                        Essential for staying competitive in today's security
                        industry
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our ACS Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Our ACS Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple four-step process to achieve your SIA ACS certification
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {acsProcessSteps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.id}
                  className={`${step.color} p-6 rounded-lg border border-gray-200 relative`}
                >
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-crimson-pink text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.id}
                  </div>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-white/80 rounded-lg">
                      <IconComponent className="h-10 w-10 text-crimson-pink" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-crimson-pink mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our unique approach to ACS certification sets us apart from the
              competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {acsDifferentiators.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
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
                        Delivering exceptional results for our clients
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
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
                Advantages of Becoming an SIA Approved Contractor
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                Your potential clients are increasingly making SIA ACS approval
                mandatory for their security service providers
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {acsBenefits.map((benefit, index) => {
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
                            Essential for business growth and industry
                            recognition
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
              {/* Ready to Apply */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-crimson-pink" />
                  <h3 className="text-xl font-semibold text-slate-800">
                    Ready to Apply?
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  We make eligibility and certification as simple as possible.
                  Start by speaking with our ACS experts for a no-obligation
                  consultation.
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
                    Request ACS Consultation
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Eligibility Check */}
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-lg border border-teal-100">
                <div className="flex items-center gap-3 mb-4">
                  <ClipboardCheck className="w-6 h-6 text-crimson-pink" />
                  <h3 className="text-xl font-semibold text-slate-800">
                    Eligibility Check
                  </h3>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-crimson-pink mb-2">
                    Free
                  </div>
                  <p className="text-gray-700 mb-4">
                    Initial eligibility assessment and consultation
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">
                      No obligation required
                    </span>
                  </div>
                </div>
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
            Start Your ACS Journey Today
          </h2>

          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-10">
            Join hundreds of security companies who have achieved SIA ACS
            approval with our expert guidance. Transform your business
            credibility and unlock new opportunities in the security sector.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg transition-all duration-300"
              onClick={handleContactClick}
            >
              Get Started Now
            </button>
            <button
              className="border-2 border-white text-white hover:bg-white hover:text-crimson-pink px-8 py-3 rounded-xl text-lg font-semibold transition-all duration-300"
              onClick={handleContactClick}
            >
              Free Eligibility Check
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto shadow-md">
            <p className="text-xl font-semibold mb-2">
              95% Success Rate • Expert Guidance • Proven Results
            </p>
            <p className="text-gray-100 text-base leading-relaxed">
              Our track record speaks for itself - we've helped hundreds of
              security companies achieve ACS certification with our proven
              methodology.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcsEligibilityPage;
