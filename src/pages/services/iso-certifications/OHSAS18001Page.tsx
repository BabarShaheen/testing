import {

  CheckCircle,
  Users,
  Target,
  FileText,
  TrendingUp,
  Star,
  ArrowRight,
  Briefcase,
  Settings,
  BookOpen,
  Eye,
  Download,
  ShieldCheck,
} from 'lucide-react';

import { useNavigate } from 'react-router-dom';

import {
  implementationSteps,
  assessmentProcess,
} from '../../../data/ohsas18001Data';
const OHSAS18001Page = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen relative flex justify-start items-center bg-[#1C1F2A] text-white px-6 sm:px-12 lg:px-20 overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center z-0"
    style={{
      backgroundImage: "url('/Images/services/ohsas18001_cover_optimized.webp')",
      filter: 'brightness(0.5)',
      transform: 'scaleX(-1)',
    }}
  />
  
  {/* Content */}
  <div className="w-full flex items-center">
    <div className="relative z-10 max-w-xl text-left space-y-8 flex flex-col items-start">
      {/* Title */}
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text">
        OHSAS 18001
        <br />
        <span className="text-transparent bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text">
          Safety Management
        </span>
      </h1>

            {/* Description */}
            <p className="text-xl sm:text-2xl text-gray-200 max-w-4xl leading-relaxed text-left">
              Low cost certification with guaranteed results. Our Health and
              Safety Consultancy optimizes systems to ensure high quality output.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-red-500/10 backdrop-blur-sm rounded-full px-6 py-3 border border-red-500/20">
                <span className="text-red-200 font-medium">
                  ✓ OHSAS 18001 Certified
                </span>
              </div>
              <div className="bg-red-500/10 backdrop-blur-sm rounded-full px-6 py-3 border border-red-500/20">
                <span className="text-red-200 font-medium">
                  ✓ Legislative Compliance
                </span>
              </div>
              <div className="bg-red-500/10 backdrop-blur-sm rounded-full px-6 py-3 border border-red-500/20">
                <span className="text-red-200 font-medium">
                  ✓ Continuous Improvement
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start mt-10">
              <button
                className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => navigate('/contact')}
              >
                Start Your OHSAS Journey
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </button>
              <button
                className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
                onClick={() => navigate('/contact')}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What is OHSAS 18001 Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-red-500 to-red-700 rounded-lg">
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
                <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">
                    International standard
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">
                    Audit specification
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">
                    Comprehensive framework
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">
                    All industries
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-700/20 rounded-2xl transform rotate-3 scale-105"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  OHSAS 18000 Family
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-xl border-l-4 border-red-500">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
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
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-red-100 to-red-200 rounded-xl border-l-4 border-red-400">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-400 rounded-full flex items-center justify-center">
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
      <section className="py-16 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-red-500 to-red-700 rounded-lg">
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
                <div className="p-2 bg-gradient-to-br from-red-100 to-red-200 rounded-lg group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300">
                  <ShieldCheck className="h-6 w-6 text-red-500 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 group-hover:text-red-600 transition-colors">
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
                <div className="p-2 bg-gradient-to-br from-red-100 to-red-200 rounded-lg group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300">
                  <CheckCircle className="h-6 w-6 text-red-600 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 group-hover:text-red-600 transition-colors">
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
                <div className="p-2 bg-gradient-to-br from-red-100 to-red-200 rounded-lg group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300">
                  <TrendingUp className="h-6 w-6 text-red-600 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 group-hover:text-red-600 transition-colors">
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
                  color: 'from-red-500 to-red-700',
                },
                {
                  benefit: 'Reduced Incidents',
                  percentage: '87%',
                  color: 'from-red-400 to-red-600',
                },
                {
                  benefit: 'Improved Compliance',
                  percentage: '96%',
                  color: 'from-red-600 to-red-800',
                },
                {
                  benefit: 'Staff Confidence',
                  percentage: '91%',
                  color: 'from-purple-500 to-pink-500',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="text-center p-4 bg-gradient-to-br from-gray-50 to-red-50 rounded-xl"
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
      <section className="py-16 bg-gradient-to-br from-slate-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-red-500 to-red-700 rounded-lg">
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
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-red-500">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 text-white rounded-full flex items-center justify-center">
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
                            className="px-3 py-1 bg-gradient-to-r from-red-50 to-red-100 text-red-700 rounded-full text-sm font-medium border border-red-200"
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
        className="py-20 bg-white text-slate-800 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-r from-red-500 to-red-700 rounded-lg">
                <Eye className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-6 text-slate-800">
              OHSAS 18001 Assessment Process
            </h2>
            <p className="text-xl text-slate-700 max-w-4xl mx-auto">
              Comprehensive third-party assessment leading to full certification
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {assessmentProcess.map((phase, index) => {
              const IconComponent = phase.icon;
              return (
                <div
                  key={index}
                  className="bg-white shadow-lg border border-gray-100 p-6 rounded-2xl hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-red-700 rounded-full mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-700 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-slate-800">{phase.phase}</h3>
                  </div>

                  <p className="text-slate-700 text-sm leading-relaxed mb-4">
                    {phase.description}
                  </p>

                  <div className="text-center">
                    <div className="px-3 py-1 bg-red-50 text-red-700 border border-red-200 rounded-full">
                      <span className="font-medium text-xs">
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
                <div className="p-3 bg-gradient-to-br from-red-500 to-red-700 rounded-lg">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-800">
                  Why Choose Our Consultancy Services?
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-gray-50 to-red-50 p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <Users className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
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

                <div className="bg-gradient-to-br from-gray-50 to-red-50 p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <Briefcase className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
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

                <div className="bg-gradient-to-br from-gray-50 to-red-50 p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <Target className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
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

                <div className="bg-gradient-to-br from-gray-50 to-red-50 p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300">
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
              {/* Success Rate Card */}
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-red-600" />
                  <h3 className="text-xl font-semibold text-slate-800">
                    Our Track Record
                  </h3>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-red-600 mb-2">
                    100%
                  </div>
                  <p className="text-gray-700 mb-4">
                    Success rate in achieving OHSAS 18001 certification
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-5 w-5 text-red-500" />
                    <span className="text-sm text-gray-600">
                      Guaranteed results
                    </span>
                  </div>
                </div>
              </div>

              {/* Download Resources Card */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Download className="w-6 h-6 text-red-600" />
                  <h3 className="text-xl font-semibold text-slate-800">
                    Free Resources
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <FileText className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Self-Assessment Questionnaire
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Implementation Guide
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Compliance Checklist
                    </span>
                  </div>
                </div>
                <button className="w-full mt-4 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
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
          backgroundImage: "url('/Images/landingpage/get-started_optimized.webp')",
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
              className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={() => navigate('/contact')}
            >
              Start Your OHSAS Application
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </button>
            <button
              className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
              onClick={() => navigate('/contact')}
            >
              Schedule Consultation
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-red-400 mb-2">
                  100%
                </div>
                <p className="text-gray-200">Success Rate</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-300 mb-2">
                  500+
                </div>
                <p className="text-gray-200">Clients Certified</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-200 mb-2">15+</div>
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
