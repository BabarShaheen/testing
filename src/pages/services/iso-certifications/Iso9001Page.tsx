import React from 'react';
import {
  Award,
  CheckCircle,
  Users,
  ArrowRight,
  Briefcase,
  Settings,
  Phone,
  BadgeCheck,
  Mail,
  Target,
  Star,
  Building,
  Clock,
  FileText,
  TrendingUp,
  Globe,
  Zap,
  Shield,
} from 'lucide-react';

// Mock data - replace with your actual data imports
const whyChooseReasons = [
  {
    title: 'Enhanced Credibility',
    description:
      'Build trust with customers through internationally recognized quality standards',
    icon: Globe,
  },
  {
    title: 'Market Access',
    description:
      'Unlock opportunities with government and corporate clients requiring certification',
    icon: Globe,
  },
  {
    title: 'Operational Excellence',
    description:
      'Improve efficiency and reduce waste through structured quality management',
    icon: Settings,
  },
  {
    title: 'Competitive Advantage',
    description: 'Stand out from competitors and win more contracts',
    icon: TrendingUp,
  },
];

const services = [
  {
    title: 'Gap Analysis & Assessment',
    description:
      'Comprehensive evaluation of your current quality management systems',
    icon: Target,
    highlights: [
      'Current system review',
      'Gap identification',
      'Improvement roadmap',
      'Compliance assessment',
    ],
  },
  {
    title: 'Documentation Development',
    description:
      'Creation of all required policies, procedures, and management systems',
    icon: FileText,
    highlights: [
      'Policy creation',
      'Procedure documentation',
      'Work instructions',
      'Quality manual',
    ],
  },
  {
    title: 'Training & Implementation',
    description:
      'Comprehensive staff training and system implementation support',
    icon: Users,
    highlights: [
      'Staff training programs',
      'System implementation',
      'Change management',
      'Best practice guidance',
    ],
  },
  {
    title: 'Certification Support',
    description: 'Full support through the certification process and beyond',
    icon: Award,
    highlights: [
      'Audit preparation',
      'Certification guidance',
      '12 months support',
      'Continuous improvement',
    ],
  },
];

const benefits = [
  {
    title: 'Access to Premium Contracts',
    desc: 'Qualify for government and corporate contracts requiring ISO 9001 certification',
    icon: Building,
    color: 'from-pink-500 to-red-500',
  },
  {
    title: 'Enhanced Customer Trust',
    desc: 'Build confidence with clients through recognized quality standards',
    icon: Users,
    color: 'from-orange-500 to-yellow-500',
  },
  {
    title: 'Operational Efficiency',
    desc: 'Streamline processes and reduce waste through systematic quality management',
    icon: Settings,
    color: 'from-teal-500 to-blue-500',
  },
  {
    title: 'Competitive Advantage',
    desc: 'Stand out in the marketplace with internationally recognized certification',
    icon: TrendingUp,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Risk Management',
    desc: 'Identify and mitigate risks through structured quality processes',
    icon: Shield,
    color: 'from-green-500 to-teal-500',
  },
  {
    title: 'Continuous Improvement',
    desc: 'Foster a culture of ongoing improvement and innovation',
    icon: Zap,
    color: 'from-blue-500 to-purple-500',
  },
  {
    title: 'Employee Engagement',
    desc: 'Improve staff satisfaction through clear processes and responsibilities',
    icon: Star,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Long-term Growth',
    desc: 'Build a foundation for sustainable business growth and success',
    icon: Target,
    color: 'from-teal-500 to-green-500',
  },
];

const Iso9001Page = () => {
  const handleContactClick = () => {
    console.log('Navigate to contact');
  };

  const handleConsultationClick = () => {
    console.log('Request ISO 9001 consultation');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center bg-[#1C1F2A] text-white px-6 sm:px-12 lg:px-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/Images/services/iso_9001.jpg')",
            filter: 'brightness(0.4)',
          }}
        />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

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
        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
          {/* Icon Badge */}
          <div className="flex justify-center mb-6">
            <div className="p-6 bg-white/10 rounded-full shadow-2xl backdrop-blur-sm border border-white/20">
              <Award className="h-20 w-20 text-white" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              ISO 9001
            </span>
            <br />
            <span className="text-transparent bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text">
              Quality Management
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl sm:text-3xl text-yellow-300 font-semibold">
            Low Cost Certification with Guaranteed Results
          </p>

          {/* Description */}
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Our QMS Consultancy optimizes systems to ensure high quality output.
            Our experienced team reviews your existing QMS to identify gaps and
            works with you on solutions to eliminate deficiencies.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="text-white font-medium">✓ UKAS Certified</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="text-white font-medium">
                ✓ Guaranteed Certification
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="text-white font-medium">
                ✓ 12 Months Support
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button
              className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={handleConsultationClick}
            >
              Start Your Certification
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </button>
            <button
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
              onClick={handleContactClick}
            >
              Get Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose ISO 9001 Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Why Choose ISO 9001 Quality Management?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Essential certification for competitive advantage and business
              growth
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-pink-500 transition-colors">
                      Mandatory for Public Sector Success
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      In many organizations, especially those in the public
                      sector, a UKAS 'UK Certification Service' certified ISO
                      9001 is a mandatory requirement or crucial success
                      criterion in the supplier selection process.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-teal-500 transition-colors">
                      Competitive Market Position
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Many businesses fail to secure contracts with councils,
                      local government, large corporate and construction
                      companies due to lack of certification. Don't be excluded
                      from major business opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-2xl border border-teal-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-500/10 to-blue-500/10 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full shadow-lg">
                      <BadgeCheck className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    UKAS Certification Standard
                  </h3>
                </div>

                <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-teal-100 mb-6">
                  <blockquote className="text-gray-700 text-center italic border-l-4 border-teal-500 pl-6">
                    "An evaluation body certified by UKAS has proved that it
                    complies with best practice and is competent to deliver a
                    consistently reliable, impartial and accurate service which
                    meets the appropriate, internationally-recognised standard."
                  </blockquote>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-white/70 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Demonstrates professional business operations
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/70 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Proves continuous improvement commitment
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/70 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Monitors and controls service standards
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/70 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Enables long-term contract security
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseReasons.map((reason, idx) => {
              const IconComponent = reason.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
                >
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <h3 className="font-bold text-slate-800 mb-3 group-hover:text-teal-500 transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customer Trust Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-slate-800">
                  Earn Your Customer's Trust
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Your customers can easily distinguish between properly run
                  companies by selecting an ISO 9001 Certified company. Your
                  customers will use this certification to define who they
                  should use for their supplier requirements.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Certification to ISO 9001 will give your customers peace of
                  mind that you are a professionally run business who looks
                  after the quality of its staff, suppliers and products.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl border border-green-100 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                Customer Selection Criteria
              </h3>
              <div className="space-y-4">
                {[
                  {
                    metric: 'Quality Assurance',
                    percentage: '95%',
                    color: 'from-green-500 to-teal-500',
                  },
                  {
                    metric: 'Professional Operations',
                    percentage: '92%',
                    color: 'from-blue-500 to-purple-500',
                  },
                  {
                    metric: 'Supplier Reliability',
                    percentage: '89%',
                    color: 'from-pink-500 to-red-500',
                  },
                  {
                    metric: 'Long-term Partnership',
                    percentage: '87%',
                    color: 'from-orange-500 to-yellow-500',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <span className="text-gray-700 font-medium">
                      {item.metric}
                    </span>
                    <div
                      className={`px-4 py-2 bg-gradient-to-r ${item.color} rounded-full shadow-sm`}
                    >
                      <span className="text-white font-bold text-sm">
                        {item.percentage}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Service Process Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Our Comprehensive Service Process
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A systematic approach to achieving ISO 9001 certification with
              guaranteed results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group"
                >
                  <div className="text-center mb-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors duration-300">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-white text-sm mb-3">
                      Key Features:
                    </h4>
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
                        <span className="text-gray-300 text-xs">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Timeline */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-bold text-center mb-8">
              Complete Service Timeline
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
              {[
                {
                  phase: 'Site Assessment',
                  duration: '1-2 days',
                  step: '1',
                  color: 'from-pink-500 to-red-500',
                },
                {
                  phase: 'System Development',
                  duration: '5-7 days',
                  step: '2',
                  color: 'from-orange-500 to-yellow-500',
                },
                {
                  phase: 'Review & Training',
                  duration: '2-3 days',
                  step: '3',
                  color: 'from-teal-500 to-blue-500',
                },
                {
                  phase: 'Implementation',
                  duration: '4-6 weeks',
                  step: '4',
                  color: 'from-purple-500 to-pink-500',
                },
                {
                  phase: 'Certification Support',
                  duration: '12 months',
                  step: '5',
                  color: 'from-green-500 to-teal-500',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors duration-300"
                >
                  <div
                    className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg`}
                  >
                    <span className="text-white font-bold text-sm">
                      {item.step}
                    </span>
                  </div>
                  <h4 className="font-semibold text-white text-sm mb-2">
                    {item.phase}
                  </h4>
                  <p className="text-gray-300 text-xs">{item.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg">
                <Star className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Key Benefits of ISO 9001 Certification
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transformative advantages that drive business growth and market
              success
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
                >
                  <div className="text-center">
                    <div
                      className={`w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-br ${benefit.color} shadow-lg text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-pink-500 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact and CTA Section */}

      {/* Final CTA Section */}
      <section
        className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white relative overflow-hidden"
        style={{
          backgroundImage: "url('/Images/landingpage/get-started.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Transform Your Business with ISO 9001
          </h2>

          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-10">
            Join hundreds of successful companies who have achieved ISO 9001
            certification with our expert guidance. Low cost, guaranteed
            results, and comprehensive support for sustainable growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button
              className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={handleConsultationClick}
            >
              Start Your ISO Journey
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </button>
            <button
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
              onClick={handleContactClick}
            >
              Free Consultation
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">
                  100%
                </div>
                <p className="text-gray-200">Success Rate</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  300+
                </div>
                <p className="text-gray-200">Clients Certified</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  15+
                </div>
                <p className="text-gray-200">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-400 mb-2">12</div>
                <p className="text-gray-200">Months Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Iso9001Page;
