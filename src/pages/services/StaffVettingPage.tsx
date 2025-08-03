import React from 'react';
import {
  Users,
  CheckCircle,
  ArrowRight,
  Shield,
  FileText,
  ShieldCheck,
  AlertTriangle,
  UserCheck,
  UserX,
  Target,
  ClipboardList,
  Search,
  Lock,
  Clock,
  Building,
  Award,
  TrendingUp,
  Star,
  Zap,
  Phone,
  Mail,
} from 'lucide-react';

// Mock data - replace with your actual data imports
import {
  vettingFeatures,
  screeningRequirements,
  screeningAchievements,
  vettingpackage,
  screened,
  exempt,
  screeningprocess,
  processingtime,
  advantages,
} from '../../data/staffVettingData';

const StaffVettingPage = () => {
  const handleContactClick = () => {
    console.log('Navigate to contact');
  };

  const handleConsultationClick = () => {
    console.log('Request consultation');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center bg-[#1C1F2A] text-white px-6 sm:px-12 lg:px-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/Images/services/BS7858_cover.jpg')",
            filter: 'brightness(0.4)',
          }}
        />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Wave Overlay */}
        <svg
          className="absolute bottom-0 left-0 w-full h-40 z-0"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#14B8A6"
            fillOpacity="0.3"
            d="M0,64L40,90.7C80,117,160,171,240,186.7C320,203,400,181,480,181.3C560,181,640,203,720,224C800,245,880,267,960,240C1040,213,1120,139,1200,106.7C1280,75,1360,85,1400,90.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          />
        </svg>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
          {/* Icon Badge */}
          <div className="flex justify-center mb-6">
            <div className="p-6 bg-white/10 rounded-full shadow-2xl backdrop-blur-sm border border-white/20">
              <ShieldCheck className="h-20 w-20 text-white" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text">
            SIA BS7858
            <br />
            <span className="text-transparent bg-gradient-to-r from-teal-400 via-blue-400 to-cyan-400 bg-clip-text">
              Staff Vetting
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Comprehensive security personnel screening in full compliance with
            British Standard 7858, ensuring trust, integrity, and professional
            excellence.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="text-white font-medium">✓ BS7858 Compliant</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="text-white font-medium">✓ SIA Approved</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="text-white font-medium">✓ ACS Accredited</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button
              className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={handleConsultationClick}
            >
              Start Vetting Process
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

      {/* Why Vetting Matters Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg">
                <Lock className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Why Professional Vetting Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The security industry exists to protect people and property.
              BS7858 vetting ensures we never compromise this trust.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    Industry Standard Compliance
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    BS7858 is mandatory for SIA licensed roles and ACS
                    accreditation, ensuring your business meets all regulatory
                    requirements and industry standards.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    Trust & Reputation Protection
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Prevents reputational damage from unvetted hires and
                    enhances client confidence in your security services through
                    verified, trustworthy personnel.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    Risk Mitigation
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ensures candidates have clean, verifiable backgrounds,
                    filtering out individuals who may pose security or
                    operational risks to your organization.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-2xl transform rotate-3 scale-105"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                <div className="text-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg mb-4 inline-block">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    Our Complete Vetting Package
                  </h3>
                </div>

                <blockquote className="text-gray-700 text-center italic border-l-4 border-teal-500 pl-6 mb-6 bg-gray-50 p-4 rounded-lg">
                  "The organisation should not employ individuals whose career
                  or history indicates that they would be unlikely to resist
                  opportunities for illicit personal gain..."
                </blockquote>

                <div className="space-y-3 mb-6">
                  {vettingpackage.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-teal-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <button
                  className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={handleContactClick}
                >
                  Get Your Customised Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screening Requirements Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Screening Requirements by Role
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Clear guidelines on who requires BS7858 vetting and who may be
              exempt
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Who Must Be Screened */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-teal-500">
              <div className="text-center mb-8">
                <div className="p-4 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full mb-4 inline-block">
                  <UserCheck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  Must Be Screened
                </h3>
                <p className="text-gray-600">
                  All personnel with access to systems and sensitive records
                </p>
              </div>

              <div className="space-y-4">
                {screened.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    <h4 className="font-semibold text-slate-800 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Who Is Exempt */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-orange-500">
              <div className="text-center mb-8">
                <div className="p-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mb-4 inline-block">
                  <UserX className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  May Be Exempt
                </h3>
                <p className="text-gray-600">
                  Roles without access to secure systems or sensitive
                  information
                </p>
              </div>

              <div className="space-y-4">
                {exempt.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rehabilitation vs Responsibility Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Balancing Rehabilitation with Responsibility
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding the delicate balance between societal rehabilitation
              and business responsibility
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-4 inline-block">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  Society's Perspective
                </h3>
              </div>
              <p className="text-gray-700 text-center leading-relaxed">
                While society rightfully supports rehabilitation and second
                chances for individuals with past challenges, providing pathways
                for reintegration.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl shadow-lg border border-yellow-100 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="p-3 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full mb-4 inline-block">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  Public Trust Reality
                </h3>
              </div>
              <p className="text-gray-700 text-center leading-relaxed">
                Public trust remains fragile. Even when law supports
                rehabilitation, <strong>client confidence may not</strong>,
                affecting business relationships.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="p-3 bg-gradient-to-br from-green-500 to-teal-500 rounded-full mb-4 inline-block">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  Our Commitment
                </h3>
              </div>
              <p className="text-gray-700 text-center leading-relaxed">
                Security companies must protect their{' '}
                <strong>reputation and client trust</strong>, requiring
                employees to maintain impeccable standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Screening Achieves Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              What Professional Screening Achieves
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              While screening isn't a guarantee, it effectively{' '}
              <strong>filters out high-risk individuals</strong> and confirms
              essential credentials
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {screeningAchievements.map((achievement, idx) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
                >
                  <div className="text-center mb-4">
                    <div className="p-3 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full mb-4 inline-block group-hover:from-pink-500 group-hover:to-red-500 transition-all duration-300">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-800 mb-2 group-hover:text-pink-500 transition-colors">
                      {achievement.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    {achievement.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Required Documentation Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
                <ClipboardList className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Required Documentation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive documentation requirements for thorough candidate
              verification
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {screeningRequirements.map((requirement, idx) => {
              const IconComponent = requirement.icon;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center group-hover:from-pink-500 group-hover:to-red-500 transition-all duration-300">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-3">
                        <span className="text-white font-bold text-sm">
                          {idx + 1}
                        </span>
                      </div>
                      <p className="text-gray-700 font-medium leading-relaxed">
                        {requirement.item}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Screening Process Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <Search className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-4">Our Screening Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic, thorough approach ensuring complete compliance and
              accuracy
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {screeningprocess.map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                    <span className="text-white font-bold">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-center mb-8">
                Typical Processing Times
              </h3>
              <div className="space-y-6">
                {processingtime.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300"
                  >
                    <span className="text-gray-300 font-medium">
                      {item.service}
                    </span>
                    <div
                      className={`px-4 py-2 bg-gradient-to-r ${item.color} rounded-full shadow-lg`}
                    >
                      <span className="text-white font-bold text-sm">
                        {item.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Vetting Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg">
                <ShieldCheck className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Comprehensive Vetting Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our complete BS7858 vetting package covers every aspect of
              candidate verification
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {vettingFeatures.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="text-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full mb-4 inline-block group-hover:from-pink-500 group-hover:to-red-500 transition-all duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-teal-600 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-800 mb-3">
                      Key Features:
                    </h4>
                    {item.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Key Benefits of Professional Screening
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive advantages that extend far beyond basic compliance
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
              >
                <div className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-gradient-to-br ${item.color} shadow-lg group-hover:scale-110 transition-all duration-300`}
                  >
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-teal-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Column Contact and Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-800">
                  Why Choose Our Vetting Services?
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        100% BS7858 Compliance
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Full adherence to British Standard requirements and SIA
                        regulations
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Expert Screening Team
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Experienced professionals with deep industry knowledge
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Fast Turnaround Times
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Efficient processing without compromising thoroughness
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Comprehensive Reports
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Detailed documentation for complete audit trails
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Ongoing Support
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Continuous monitoring and re-vetting services available
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Cost-Effective Solutions
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Competitive pricing with transparent fee structure
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Get Started Card */}
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-teal-100 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-teal-500" />
                  <h3 className="text-xl font-semibold text-slate-800">
                    Start Vetting Today
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Begin the BS7858 vetting process for your security personnel.
                  Get expert guidance and comprehensive screening services.
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
                    className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
                    onClick={handleConsultationClick}
                  >
                    Request Vetting Quote
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Processing Times Card */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-100 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-orange-500" />
                  <h3 className="text-xl font-semibold text-slate-800">
                    Processing Times
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Standard DBS</span>
                    <span className="text-lg font-bold text-orange-500">
                      7-10 days
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Enhanced DBS</span>
                    <span className="text-lg font-bold text-blue-500">
                      10-14 days
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Full Package</span>
                    <span className="text-lg font-bold text-purple-500">
                      14-21 days
                    </span>
                  </div>
                </div>
              </div>

              {/* Compliance Card */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-purple-500" />
                  <h3 className="text-xl font-semibold text-slate-800">
                    Compliance Guarantee
                  </h3>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-teal-500 mb-2">
                    100%
                  </div>
                  <p className="text-gray-700 mb-4">
                    BS7858 compliant vetting process with full documentation
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">
                      SIA approved procedures
                    </span>
                  </div>
                </div>
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
          <div className="flex justify-center mb-6">
            <div className="p-6 bg-white/10 rounded-full shadow-2xl backdrop-blur-sm border border-white/20">
              <ShieldCheck className="h-16 w-16 text-white" />
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Secure Your Workforce Today
          </h2>

          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-10">
            Partner with our vetting experts to ensure your security personnel
            meet the highest standards of integrity and professionalism through
            comprehensive BS7858 screening.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button
              className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={handleConsultationClick}
            >
              Request Consultation
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </button>
            <button
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
              onClick={handleContactClick}
            >
              Get Quote
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">
                  100%
                </div>
                <p className="text-gray-200">BS7858 Compliant</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  7-10
                </div>
                <p className="text-gray-200">Days Average Turnaround</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  24/7
                </div>
                <p className="text-gray-200">Expert Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StaffVettingPage;
