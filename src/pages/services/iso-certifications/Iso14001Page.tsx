import {
  Leaf,
  TrendingUp,
  Star,
  Settings,
  BookOpen,
  Globe,
  ArrowRight,
  Award,
} from 'lucide-react';

import {
  heroFeatures,
  environmentalFocusAreas,
  benefitsData,
  implementationSteps,
  assessmentProcess,
  impactReductionMetrics,
  whyChooseUsData,
  certificationSteps,
} from '../../../data/iso14001Data';

const Iso14001Page = () => {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center bg-[#1C1F2A] text-white px-6 sm:px-12 lg:px-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/Images/services/iso14001_cover_optimized.webp')",
            filter: 'brightness(0.4)',
          }}
        />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-[#ED2568]/10 to-[#EE343B]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[#EE343B]/10 to-[#ED2568]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-[#ED2568]/5 to-[#EE343B]/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              ISO 14001
            </span>
            <br />
            <span className="text-transparent bg-gradient-to-r from-[#ED2568] via-[#f57aa9] to-[#EE343B] bg-clip-text">
              Environmental Management
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl sm:text-3xl text-[#f57aa9] font-semibold">
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
              className="bg-gradient-to-r from-[#ED2568] to-[#EE343B] hover:from-[#d81e58] hover:to-[#d82329] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                window.location.href = '/contact';
              }}
            >
              Start Your Certification
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </button>
            <button
              className="border-2 border-[#ED2568] text-[#ED2568] hover:bg-[#ED2568] hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
              onClick={() => {
                window.location.href = '/contact';
              }}
            >
              Get Consultation
            </button>
          </div>
        </div>
      </section>

      {/* What is ISO 14001 Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-[#fce8ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-[#ED2568] to-[#EE343B] rounded-lg">
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
                  <div className="p-3 bg-gradient-to-br from-[#ED2568] to-[#EE343B] rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Leaf className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-[#ED2568] transition-colors">
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
                  <div className="p-3 bg-gradient-to-br from-[#EE343B] to-[#ED2568] rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-[#EE343B] transition-colors">
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

            <div className="bg-gradient-to-br from-white to-[#fce8ef] p-8 rounded-2xl shadow-2xl border border-[#f57aa9] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#ED2568]/10 to-[#EE343B]/10 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-br from-[#ED2568] to-[#EE343B] rounded-full shadow-lg">
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
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#ED2568] to-[#EE343B] rounded-full flex items-center justify-center">
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
                <div className="p-3 bg-gradient-to-br from-[#ED2568] to-[#EE343B] rounded-lg">
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
                      className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#ED2568] to-[#EE343B] rounded-full flex items-center justify-center`}
                    >
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-[#ED2568] transition-colors">
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

            <div className="bg-gradient-to-br from-[#fce8ef] to-[#fff0f5] p-8 rounded-2xl border border-[#f57aa9] shadow-xl">
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
                    <div className="px-4 py-2 bg-gradient-to-r from-[#ED2568] to-[#EE343B] rounded-full shadow-sm">
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
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#ED2568]/10 to-[#EE343B]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[#EE343B]/10 to-[#ED2568]/10 rounded-full blur-3xl"></div>
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
                        <div className="w-1.5 h-1.5 bg-[#f57aa9] rounded-full"></div>
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
                  <div className="w-10 h-10 bg-gradient-to-br from-[#ED2568] to-[#EE343B] rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-white text-sm mb-2">
                    {item.phase}
                  </h4>
                  <p className="text-gray-300 text-xs mb-2">
                    {item.description}
                  </p>
                  <p className="text-[#f57aa9] text-xs">{item.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-[#fce8ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-br from-orange-500 to-[#ED2568] rounded-lg">
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
                className={`bg-gradient-to-br from-[#fce8ef] to-[#fff0f5] p-8 rounded-2xl border border-[#f57aa9] shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group`}
              >
                <div className="text-center">
                  <div
                    className={`w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-br from-[#ED2568] to-[#EE343B] shadow-lg text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-[#ED2568] transition-colors">
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
              <div className="p-3 bg-gradient-to-br from-[#ED2568] to-[#EE343B] rounded-lg">
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
                    className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-gradient-to-br from-[#ED2568] to-[#EE343B] shadow-lg text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-[#ED2568] transition-colors">
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
          backgroundImage: "url('/Images/landingpage/get-started_optimized.webp')",
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
              className="bg-gradient-to-r from-[#ED2568] to-[#EE343B] hover:from-[#d81e58] hover:to-[#d82329] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                window.location.href = '/contact';
              }}
            >
              Start Your Environmental Journey
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </button>
            <button
              className="border-2 border-[#ED2568] text-[#ED2568] hover:bg-[#ED2568] hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
              onClick={() => {
                window.location.href = '/contact';
              }}
            >
              Free Environmental Assessment
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-[#f57aa9] mb-2">
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
