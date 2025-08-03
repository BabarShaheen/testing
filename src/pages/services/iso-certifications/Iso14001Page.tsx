import React from 'react';
import {
  Leaf,
  CheckCircle,
  Building,
  TrendingUp,
  Star,
  Settings,
  BookOpen,
  Phone,
  Globe,
  Download,
  ArrowRight,
  Award,
  Users,
  Target,
  Shield,
  Zap,
  FileText,
  Clock,
  BadgeCheck,
} from 'lucide-react';

// Mock data based on the original structure
const heroFeatures = [
  'UKAS Certified',
  'Guaranteed Results',
  '12 Months Support',
  'Expert Guidance',
];

const environmentalFocusAreas = [
  {
    title: 'Natural Resource Management',
    desc: 'Efficient use and conservation of natural resources',
    icon: Leaf,
  },
  {
    title: 'Waste Management',
    desc: 'Proper handling and treatment of waste materials',
    icon: Target,
  },
  {
    title: 'Energy Conservation',
    desc: 'Reducing energy consumption and improving efficiency',
    icon: Zap,
  },
  {
    title: 'Environmental Compliance',
    desc: 'Meeting regulatory requirements and standards',
    icon: Shield,
  },
];

const benefitsData = [
  {
    title: 'Cost Reduction',
    description:
      'Reduce operational costs through improved resource efficiency and waste management',
    icon: TrendingUp,
    gradient: 'from-green-500 to-teal-500',
  },
  {
    title: 'Legal Compliance',
    description:
      'Ensure compliance with environmental regulations and avoid penalties',
    icon: Shield,
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    title: 'Brand Enhancement',
    description:
      'Improve brand reputation and demonstrate environmental commitment',
    icon: Star,
    gradient: 'from-pink-500 to-red-500',
  },
  {
    title: 'Market Access',
    description:
      'Access new markets and opportunities requiring environmental certification',
    icon: Globe,
    gradient: 'from-orange-500 to-yellow-500',
  },
];

const implementationSteps = [
  {
    title: 'Environmental Assessment',
    description:
      'Comprehensive evaluation of your current environmental impact and management systems',
    icon: Target,
    highlights: [
      'Environmental impact analysis',
      'Legal requirements review',
      'System gap identification',
      'Baseline establishment',
    ],
  },
  {
    title: 'Documentation Development',
    description:
      'Creation of comprehensive environmental management documentation',
    icon: FileText,
    highlights: [
      'Environmental policy creation',
      'Procedure documentation',
      'Work instructions',
      'Environmental manual',
    ],
  },
  {
    title: 'Training & Implementation',
    description:
      'Staff training and systematic implementation of environmental management',
    icon: Users,
    highlights: [
      'Staff awareness training',
      'System implementation',
      'Environmental monitoring',
      'Performance measurement',
    ],
  },
  {
    title: 'Certification Support',
    description:
      'Complete support through certification process and ongoing maintenance',
    icon: Award,
    highlights: [
      'Audit preparation',
      'Certification guidance',
      'Continuous improvement',
      '12 months support',
    ],
  },
];

const assessmentProcess = [
  {
    phase: 'Initial Assessment',
    description:
      'Review of current environmental management systems and identification of gaps',
    duration: '1-2 days',
    icon: Target,
  },
  {
    phase: 'Documentation Review',
    description:
      'Evaluation of existing environmental documentation and procedures',
    duration: '3-5 days',
    icon: FileText,
  },
  {
    phase: 'Implementation Audit',
    description: 'Assessment of implemented environmental management practices',
    duration: '2-3 days',
    icon: CheckCircle,
  },
  {
    phase: 'Certification Audit',
    description: 'Final certification audit by accredited certification body',
    duration: '1-2 days',
    icon: Award,
  },
];

const impactReductionMetrics = [
  { metric: 'Energy Consumption', improvement: '25%' },
  { metric: 'Waste Generation', improvement: '30%' },
  { metric: 'Water Usage', improvement: '20%' },
  { metric: 'Carbon Footprint', improvement: '35%' },
];

const whyChooseUsData = [
  {
    title: 'Industry Expertise',
    description:
      'Deep understanding of environmental management across various industries with proven track record',
    icon: Award,
    gradient: 'from-teal-500 to-blue-500',
    bgGradient: 'from-teal-50 to-blue-50',
    borderColor: 'border-teal-200',
  },
  {
    title: 'Transparent Pricing',
    description:
      'Clear, upfront pricing with no hidden costs and comprehensive service packages',
    icon: BadgeCheck,
    gradient: 'from-green-500 to-teal-500',
    bgGradient: 'from-green-50 to-teal-50',
    borderColor: 'border-green-200',
  },
  {
    title: 'Ongoing Support',
    description:
      '12 months post-certification support to ensure continued compliance and improvement',
    icon: Users,
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
    borderColor: 'border-purple-200',
  },
];

const certificationSteps = [
  {
    title: 'Pre-Assessment',
    description:
      'Comprehensive evaluation of your environmental management readiness and gap identification',
    icon: Target,
    gradient: 'from-teal-500 to-blue-500',
  },
  {
    title: 'System Development',
    description:
      'Implementation of environmental management systems and documentation development',
    icon: Settings,
    gradient: 'from-green-500 to-teal-500',
  },
  {
    title: 'Certification Audit',
    description:
      'Final assessment by accredited certification body leading to ISO 14001 certification',
    icon: Award,
    gradient: 'from-purple-500 to-pink-500',
  },
];

const Iso14001Page = () => {
  const handleContactClick = () => {
    console.log('Navigate to contact');
  };

  const handleConsultationClick = () => {
    console.log('Request ISO 14001 consultation');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center bg-[#1C1F2A] text-white px-6 sm:px-12 lg:px-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/Images/services/iso14001_cover.jpg')",
            filter: 'brightness(0.4)',
          }}
        />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Wave Overlay */}
        <svg
          className="absolute bottom-0 left-0 w-full h-40 z-0"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#1BB66E"
            fillOpacity="0.2"
            d="M0,64L40,90.7C80,117,160,171,240,186.7C320,203,400,181,480,181.3C560,181,640,203,720,224C800,245,880,267,960,240C1040,213,1120,139,1200,106.7C1280,75,1360,85,1400,90.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          />
        </svg>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
          {/* Icon Badge */}
          <div className="flex justify-center mb-6">
            <div className="p-6 bg-white/10 rounded-full shadow-2xl backdrop-blur-sm border border-white/20">
              <Leaf className="h-20 w-20 text-white" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              ISO 14001
            </span>
            <br />
            <span className="text-transparent bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 bg-clip-text">
              Environmental Management
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl sm:text-3xl text-green-300 font-semibold">
            Low Cost Certification with Guaranteed Results
          </p>

          {/* Description */}
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Our EMS Consultancy optimizes systems to ensure environmental
            excellence. Our experienced team reviews your existing systems to
            identify gaps and works with you on solutions to eliminate
            deficiencies.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {heroFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20"
              >
                <span className="text-white font-medium">✓ {feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button
              className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105"
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

      {/* What is ISO 14001 Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              What is ISO 14001 Environmental Management?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The internationally recognized standard for environmental
              management systems
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Leaf className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-green-500 transition-colors">
                      Environmental Controls
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      ISO 14001 prescribes controls for activities that have an
                      effect on the environment, including the use of natural
                      resources, handling and treatment of waste, and energy
                      consumption.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-teal-500 transition-colors">
                      International Recognition
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Internationally recognized standard providing a framework
                      for systematic environmental management across all
                      industries and organization sizes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-green-50 p-8 rounded-2xl shadow-2xl border border-green-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-br from-green-500 to-teal-500 rounded-full shadow-lg">
                      <Leaf className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    Environmental Focus Areas
                  </h3>
                </div>

                <div className="space-y-4">
                  {environmentalFocusAreas.map((area, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 bg-white/70 rounded-lg"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <area.icon className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 text-sm">
                          {area.title}
                        </h4>
                        <p className="text-gray-600 text-xs">{area.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-slate-800">
                  Benefits of ISO 14001
                </h2>
              </div>
              <div className="space-y-6">
                {benefitsData.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div
                      className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${benefit.gradient} rounded-full flex items-center justify-center`}
                    >
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl border border-green-100 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                Environmental Impact Reduction
              </h3>
              <div className="space-y-4">
                {impactReductionMetrics.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <span className="text-gray-700 font-medium">
                      {item.metric}
                    </span>
                    <div className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-full shadow-sm">
                      <span className="text-white font-bold text-sm">
                        ↓ {item.improvement}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <Settings className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Our Comprehensive Implementation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Systematic approach to achieving ISO 14001 certification with
              guaranteed results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {implementationSteps.map((step, index) => {
              const IconComponent = step.icon;
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
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-white text-sm mb-3">
                      Key Features:
                    </h4>
                    {step.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {assessmentProcess.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-white text-sm mb-2">
                    {item.phase}
                  </h4>
                  <p className="text-gray-300 text-xs mb-2">
                    {item.description}
                  </p>
                  <p className="text-green-300 text-xs">{item.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-green-500 rounded-lg">
                <Star className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Why Choose Our Environmental Consultancy?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Industry-focused environmental audits with transparent pricing and
              ongoing support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUsData.map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${item.bgGradient} p-8 rounded-2xl border ${item.borderColor} shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group`}
              >
                <div className="text-center">
                  <div
                    className={`w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-br ${item.gradient} shadow-lg text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-green-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              ISO 14001 Certification Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive certification process ensuring environmental
              management excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {certificationSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100 group"
              >
                <div className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-gradient-to-br ${step.gradient} shadow-lg text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-green-500 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            Transform Your Environmental Impact with ISO 14001
          </h2>

          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-10">
            Join hundreds of successful companies who have achieved ISO 14001
            certification with our expert guidance. Low cost, guaranteed
            results, and comprehensive support for sustainable growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button
              className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={handleConsultationClick}
            >
              Start Your Environmental Journey
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </button>
            <button
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
              onClick={handleContactClick}
            >
              Free Environmental Assessment
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">
                  100%
                </div>
                <p className="text-gray-200">Success Rate</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">
                  250+
                </div>
                <p className="text-gray-200">Clients Certified</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                <p className="text-gray-200">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  12
                </div>
                <p className="text-gray-200">Months Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Iso14001Page;
