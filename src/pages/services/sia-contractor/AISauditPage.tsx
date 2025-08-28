import {
  Search,
  Shield,
  TrendingUp,
  Star,
  Settings,
  BookOpen,
  ArrowRight,
  Award,
  CheckCircle,
  Clock,
} from 'lucide-react';

import {
  heroFeatures,
  auditBenefits,
  auditProcess,
  auditTypes,
  whyChooseUsData,
  auditTimeline,
  complianceAreas,
  auditStatistics,
  servicePackages,
} from '../../../data/AISauditData';

const AISauditPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center bg-[#1C1F2A] text-white px-6 sm:px-12 lg:px-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/Images/services/aisaudit.jpg')",
            filter: 'brightness(0.3)',
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
              Annual Internal
            </span>
            <br />
            <span className="text-transparent bg-gradient-to-r from-[#ED2568] via-[#f57aa9] to-[#EE343B] bg-clip-text">
              System Audits
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl sm:text-3xl text-[#f57aa9] font-semibold">
            Expert Auditing Services for Continuous Improvement
          </p>

          {/* Description */}
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Comprehensive internal system audits to verify compliance, identify
            improvements, and maintain audit-ready status. Our impartial experts
            help you achieve operational excellence.
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
              Schedule Your Audit
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </button>
            <button
              className="border-2 border-[#ED2568] text-[#ED2568] hover:bg-[#ED2568] hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
              onClick={() => {
                window.location.href = '/contact';
              }}
            >
              Get Quote
            </button>
          </div>
        </div>
      </section>

      {/* What is Internal Audit Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-[#fce8ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-[#ED2568] to-[#EE343B] rounded-lg">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              What is an Internal System Audit?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Essential evaluations for management system efficiency and
              compliance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-[#ED2568] to-[#EE343B] rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Search className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-[#ED2568] transition-colors">
                      System Evaluation
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Internal audits evaluate the efficiency and effectiveness
                      of your organization's management system and overall
                      business performance against ISO standards.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-[#EE343B] to-[#ED2568] rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-[#EE343B] transition-colors">
                      Compliance Verification
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Verify compliance with ISO standards and assess how
                      processes are implemented and maintained as a key building
                      block of effective management systems.
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
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    Key Compliance Areas
                  </h3>
                </div>

                <div className="space-y-4">
                  {complianceAreas.map((area, idx) => (
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
                  Benefits of Regular Internal Audits
                </h2>
              </div>
              <div className="space-y-6">
                {auditBenefits.map((benefit, index) => (
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
                Audit Success Metrics
              </h3>
              <div className="space-y-4">
                {auditStatistics.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div>
                      <span className="text-gray-700 font-medium text-sm">
                        {item.metric}
                      </span>
                      <p className="text-gray-500 text-xs">
                        {item.description}
                      </p>
                    </div>
                    <div className="px-4 py-2 bg-gradient-to-r from-[#ED2568] to-[#EE343B] rounded-full shadow-sm">
                      <span className="text-white font-bold text-sm">
                        {item.improvement}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Process Section */}
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
              Our Comprehensive Audit Process
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Systematic approach to internal auditing with proven methodology
              and expert execution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {auditProcess.map((step, index) => {
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
                      Key Activities:
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
              Audit Service Timeline
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {auditTimeline.map((item, idx) => (
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

      {/* Audit Types Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-[#fce8ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-[#ED2568] to-[#EE343B] rounded-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Specialized Audit Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive audit coverage for all major ISO standards and
              integrated systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {auditTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-[#ED2568] to-[#EE343B] rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <type.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-[#ED2568] transition-colors">
                      {type.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {type.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-800 text-sm mb-3">
                    Service Includes:
                  </h4>
                  {type.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#ED2568]" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-[#ED2568] to-[#EE343B] rounded-lg">
                <Clock className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Audit Service Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the audit package that best fits your organization's needs
              and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {servicePackages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border ${
                  pkg.popular ? 'border-[#ED2568] border-2' : 'border-gray-200'
                } group`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-[#ED2568] to-[#EE343B] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-[#ED2568] transition-colors">
                      {pkg.title}
                    </h3>
                    <div className="text-3xl font-extrabold text-[#ED2568] mb-2">
                      {pkg.price}
                    </div>
                    <p className="text-gray-600 text-sm">{pkg.duration}</p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-[#ED2568] flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-[#ED2568] to-[#EE343B] text-white hover:from-[#d81e58] hover:to-[#d82329] shadow-lg'
                        : 'border-2 border-[#ED2568] text-[#ED2568] hover:bg-[#ED2568] hover:text-white'
                    }`}
                    onClick={() => {
                      window.location.href = '/contact';
                    }}
                  >
                    Choose This Package
                  </button>
                </div>
              </div>
            ))}
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
              Why Choose Our Audit Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert auditors delivering comprehensive assessments with
              actionable insights and ongoing support
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

      {/* Final CTA Section */}
      <section
        className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white relative overflow-hidden"
        style={{
          backgroundImage:
            "url('/Images/landingpage/get-started_optimized.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Ready to Enhance Your Management System?
          </h2>

          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-10">
            Schedule your comprehensive internal system audit today. Our expert
            auditors will help you achieve compliance, identify improvements,
            and maintain audit readiness with our proven methodology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button
              className="bg-gradient-to-r from-[#ED2568] to-[#EE343B] hover:from-[#d81e58] hover:to-[#d82329] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                window.location.href = '/contact';
              }}
            >
              Schedule Your Audit
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </button>
            <button
              className="border-2 border-[#ED2568] text-[#ED2568] hover:bg-[#ED2568] hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
              onClick={() => {
                window.location.href = '/contact';
              }}
            >
              Get Free Consultation
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-[#f57aa9] mb-2">
                  500+
                </div>
                <p className="text-gray-200">Audits Completed</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">98%</div>
                <p className="text-gray-200">Client Satisfaction</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">20+</div>
                <p className="text-gray-200">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  Fixed
                </div>
                <p className="text-gray-200">Pricing Structure</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISauditPage;
