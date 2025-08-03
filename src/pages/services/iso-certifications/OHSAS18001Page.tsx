import React from 'react';
import {
  Shield,
  CheckCircle,
  Users,
  Target,
  Building,
  FileText,
  TrendingUp,
  Star,
  Clock,
  ArrowRight,
  Briefcase,
  Settings,
  BookOpen,
  BadgeCheck,
  Eye,
  Download,
  Search,
  Clipboard,
  ShieldCheck,
  Phone,
  Mail,
  Zap,
  Award,
  Globe,
  Lock,
} from 'lucide-react';

// Mock data - replace with your actual data imports
import {
  implementationSteps,
  assessmentProcess,
} from '../../../data/ohsas18001Data';
const OHSAS18001Page = () => {
  const handleContactClick = () => {
    console.log('Navigate to contact');
  };

  const handleConsultationClick = () => {
    console.log('Request OHSAS consultation');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center bg-[#1C1F2A] text-white px-6 sm:px-12 lg:px-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/Images/services/ohsas18001_cover.jpg')",
            filter: 'brightness(0.5)',
          }}
        />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Wave Overlay */}
        <svg
          className="absolute bottom-0 left-0 w-full h-40 z-0"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#10B981"
            fillOpacity="0.3"
            d="M0,64L40,90.7C80,117,160,171,240,186.7C320,203,400,181,480,181.3C560,181,640,203,720,224C800,245,880,267,960,240C1040,213,1120,139,1200,106.7C1280,75,1360,85,1400,90.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          />
        </svg>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
          {/* Icon Badge */}
          <div className="flex justify-center mb-6">
            <div className="p-6 bg-white/10 rounded-full shadow-2xl backdrop-blur-sm border border-white/20">
              <Shield className="h-20 w-20 text-white" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text">
            OHSAS 18001
            <br />
            <span className="text-transparent bg-gradient-to-r from-teal-400 via-green-400 to-blue-400 bg-clip-text">
              Safety Management
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Low cost certification with guaranteed results. Our Health and
            Safety Consultancy optimizes systems to ensure high quality output.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="text-white font-medium">
                ✓ OHSAS 18001 Certified
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="text-white font-medium">
                ✓ Legislative Compliance
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="text-white font-medium">
                ✓ Continuous Improvement
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button
              className="bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={handleConsultationClick}
            >
              Start Your OHSAS Journey
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </button>
            <button
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
              onClick={handleContactClick}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* What is OHSAS 18001 Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-teal-500 to-green-500 rounded-lg">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-800">
                  What is OHSAS 18001?
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                OHSAS 18001 is the latest certification specification for{' '}
                <span className="font-semibold text-slate-800">
                  Occupational Health and Safety Management Systems
                </span>
                . Based on established criteria such as BS 8800 and the
                Management Regulations 1992, it serves as an audit/certification
                specification rather than legislative requirement.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-teal-50 to-green-50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">
                    International standard
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-teal-50 to-green-50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">
                    Audit specification
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-teal-50 to-green-50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">
                    Comprehensive framework
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-teal-50 to-green-50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">
                    All industries
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-green-500/20 rounded-2xl transform rotate-3 scale-105"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  OHSAS 18000 Family
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-teal-50 to-green-50 rounded-xl border-l-4 border-teal-500">
                    <div className="flex-shrink-0 w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">
                        OHSAS 18001
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Occupational health and safety management systems
                        specification (Auditable Standard)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-500">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">
                        OHSAS 18002
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Guidelines for the implementation of OHSAS 18001
                        (Implementation Guide)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Seek Certification Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-teal-500 to-green-500 rounded-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Why Seek OHSAS 18001 Certification?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Demonstrate commitment to health and safety excellence through
              third-party certification
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gradient-to-br from-teal-100 to-green-100 rounded-lg group-hover:from-teal-500 group-hover:to-green-500 transition-all duration-300">
                  <ShieldCheck className="h-6 w-6 text-teal-500 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 group-hover:text-teal-500 transition-colors">
                    Independent Validation
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Registration by an independent, third-party certification
                    body demonstrates commitment
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg group-hover:from-blue-500 group-hover:to-teal-500 transition-all duration-300">
                  <CheckCircle className="h-6 w-6 text-blue-500 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 group-hover:text-blue-500 transition-colors">
                    Legislative Confidence
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Increased confidence in meeting Health and Safety
                    legislation requirements
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg group-hover:from-green-500 group-hover:to-blue-500 transition-all duration-300">
                  <TrendingUp className="h-6 w-6 text-green-500 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 group-hover:text-green-500 transition-colors">
                    Continuous Improvement
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Target setting and ongoing measurement ensures continual
                    improvement
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
              Certification Benefits
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  benefit: 'Enhanced Safety Culture',
                  percentage: '94%',
                  color: 'from-teal-500 to-green-500',
                },
                {
                  benefit: 'Reduced Incidents',
                  percentage: '87%',
                  color: 'from-blue-500 to-teal-500',
                },
                {
                  benefit: 'Improved Compliance',
                  percentage: '96%',
                  color: 'from-green-500 to-blue-500',
                },
                {
                  benefit: 'Staff Confidence',
                  percentage: '91%',
                  color: 'from-purple-500 to-pink-500',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="text-center p-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl"
                >
                  <div
                    className={`text-3xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}
                  >
                    {item.percentage}
                  </div>
                  <p className="text-gray-700 font-medium text-sm">
                    {item.benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg">
                <Settings className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              OHSAS 18001 Implementation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Systematic approach to achieving comprehensive health and safety
              management
            </p>
          </div>

          <div className="space-y-8">
            {implementationSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col lg:flex-row items-center gap-8"
                >
                  <div className="lg:w-1/3">
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-teal-500">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-green-500 text-white rounded-full flex items-center justify-center">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-2/3">
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {step.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {step.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gradient-to-r from-teal-50 to-green-50 text-teal-700 rounded-full text-sm font-medium border border-teal-200"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Assessment Process Section */}
      <section
        className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white relative overflow-hidden"
        style={{
          backgroundImage: "url('/Images/services/assessment.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                <Eye className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-6">
              OHSAS 18001 Assessment Process
            </h2>
            <p className="text-xl text-gray-100 max-w-4xl mx-auto">
              Comprehensive third-party assessment leading to full certification
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {assessmentProcess.map((phase, index) => {
              const IconComponent = phase.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{phase.phase}</h3>
                  </div>

                  <p className="text-gray-100 text-sm leading-relaxed mb-4">
                    {phase.description}
                  </p>

                  <div className="text-center">
                    <div className="px-3 py-1 bg-white/20 rounded-full">
                      <span className="text-white font-medium text-xs">
                        {phase.duration}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Two Column Benefits and Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Why Choose Us */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-teal-500 to-green-500 rounded-lg">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-800">
                  Why Choose Our Consultancy Services?
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <Users className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Customer Satisfaction
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Enviable record for customer satisfaction with
                        certification services
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <Briefcase className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Industry Experience
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Auditors allocated by their experience in specific
                        industries
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <Target className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Practical Approach
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Focus on practical improvements and real business value
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Guaranteed Results
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Low cost certification with guaranteed successful
                        outcomes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Sidebar */}
            <div className="space-y-6">
              {/* Get Started Card */}
              <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-teal-100 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-teal-500" />
                  <h3 className="text-xl font-semibold text-slate-800">
                    Get Started Today
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Whether you're new to OHSAS 18001 or looking to improve your
                  current system, we'll make the process simple. Get in touch
                  for a consultation.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-teal-100">
                    <Phone className="w-5 h-5 text-teal-500" />
                    <div>
                      <p className="text-sm text-gray-600">Call us at</p>
                      <p className="font-semibold text-slate-800">
                        0447446131794
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-teal-100">
                    <Mail className="w-5 h-5 text-teal-500" />
                    <div>
                      <p className="text-sm text-gray-600">Email us at</p>
                      <p className="font-semibold text-slate-800 text-sm">
                        admin@citrix-consulting-limited.co.uk
                      </p>
                    </div>
                  </div>
                  <button
                    className="w-full bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
                    onClick={handleConsultationClick}
                  >
                    Request OHSAS Consultation
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Success Rate Card */}
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-xl border border-blue-100 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-500" />
                  <h3 className="text-xl font-semibold text-slate-800">
                    Our Track Record
                  </h3>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-500 mb-2">
                    100%
                  </div>
                  <p className="text-gray-700 mb-4">
                    Success rate in achieving OHSAS 18001 certification
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">
                      Guaranteed results
                    </span>
                  </div>
                </div>
              </div>

              {/* Download Resources Card */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Download className="w-6 h-6 text-green-500" />
                  <h3 className="text-xl font-semibold text-slate-800">
                    Free Resources
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <FileText className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Self-Assessment Questionnaire
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Implementation Guide
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Compliance Checklist
                    </span>
                  </div>
                </div>
                <button className="w-full mt-4 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                  Download Resources
                </button>
              </div>
            </div>
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
            Ready to Achieve OHSAS 18001 Certification?
          </h2>

          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-10">
            Join hundreds of successful organizations who have achieved OHSAS
            18001 certification with our expert guidance. Start your journey to
            enhanced safety management and compliance today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button
              className="bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={handleConsultationClick}
            >
              Start Your OHSAS Application
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </button>
            <button
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
              onClick={handleContactClick}
            >
              Schedule Consultation
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">
                  100%
                </div>
                <p className="text-gray-200">Success Rate</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">
                  500+
                </div>
                <p className="text-gray-200">Clients Certified</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                <p className="text-gray-200">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OHSAS18001Page;
