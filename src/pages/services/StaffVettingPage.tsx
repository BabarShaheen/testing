import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/ui/button';
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
} from 'lucide-react';

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

export function StaffVettingPage() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen text-gray-700">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 via-teal-700 to-navy-blue text-white py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <ShieldCheck className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            SIA BS7858 Staff Vetting
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-blue-100">
            Comprehensive security personnel screening in full compliance with
            British Standard 7858
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-sm font-medium">✓ BS7858 Compliant</span>
            </div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-sm font-medium">✓ SIA Approved</span>
            </div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-sm font-medium">✓ ACS Accredited</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Vetting & BS7858 Matters - Merged Section */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mb-6">
              <Lock className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-navy-blue mb-6">
              Why Professional Vetting Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The security industry exists to protect people and property.
              BS7858 vetting ensures we never compromise this trust.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy-blue mb-3">
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
                  <h3 className="text-xl font-semibold text-navy-blue mb-3">
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
                  <h3 className="text-xl font-semibold text-navy-blue mb-3">
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

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mb-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy-blue mb-4">
                  BS7858 Standard Requirements
                </h3>
              </div>

              <blockquote className="text-gray-700 text-center italic border-l-4 border-teal-500 pl-6 mb-8 bg-white/50 p-4 rounded-lg">
                "The organisation should not employ individuals whose career or
                history indicates that they would be unlikely to resist the
                opportunities for illicit personal gain..."
              </blockquote>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-lg font-semibold text-navy-blue mb-4">
                  Our Complete Vetting Package:
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {vettingpackage.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Button
                  className="mt-6 w-full bg-gradient-to-r from-orange to-orange/90 hover:from-orange/90 hover:to-orange text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={handleContactClick}
                >
                  Get Your Customised Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Must Be Screened vs Who Is Exempt */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-blue mb-6">
              Screening Requirements by Role
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Clear guidelines on who requires BS7858 vetting and who may be
              exempt
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Who Must Be Screened */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mb-4">
                  <UserCheck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy-blue mb-2">
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
                    className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border-l-4 border-teal-500"
                  >
                    <h4 className="font-semibold text-navy-blue mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Who Is Exempt */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange to-orange/90 rounded-full mb-4">
                  <UserX className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy-blue mb-2">
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
                    className="flex items-center gap-3 p-3 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg border-l-4 border-orange"
                  >
                    <div className="w-2 h-2 bg-orange rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rehabilitation vs Responsibility */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-navy-blue mb-6">
              Balancing Rehabilitation with Responsibility
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Understanding the delicate balance between societal rehabilitation
              and business responsibility
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg border border-blue-100">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-2">
                  Society's Perspective
                </h3>
              </div>
              <p className="text-gray-700 text-center leading-relaxed">
                While society rightfully supports rehabilitation and second
                chances for individuals with past challenges, providing pathways
                for reintegration.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl shadow-lg border border-yellow-100">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full mb-4">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-2">
                  Public Trust Reality
                </h3>
              </div>
              <p className="text-gray-700 text-center leading-relaxed">
                Public trust remains fragile. Even when law supports
                rehabilitation, <strong>client confidence may not</strong>,
                affecting business relationships.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl shadow-lg border border-green-100">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-2">
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

      {/* What Screening Achieves */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-navy-blue mb-6">
              What Professional Screening Achieves
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
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
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-navy-blue mb-2">
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

      {/* Screening Requirements */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-6">
              <ClipboardList className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-navy-blue mb-6">
              Required Documentation
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive documentation requirements for thorough candidate
              verification
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {screeningRequirements.map((requirement, idx) => {
              const IconComponent = requirement.icon;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
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

      {/* Screening Process */}
      <section className="py-20 bg-gradient-to-br from-navy-blue to-teal-700 text-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Search className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-6">Our Screening Process</h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
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
                    <p className="text-blue-100 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-center mb-8">
                Typical Processing Times
              </h3>
              <div className="space-y-6">
                {processingtime.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center p-4 bg-white/5 rounded-xl"
                  >
                    <span className="text-blue-100 font-medium">
                      {item.service}
                    </span>
                    <div
                      className={`px-4 py-2 bg-gradient-to-r ${item.color} rounded-full`}
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

      {/* Detailed Vetting Features */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-blue mb-6">
              Comprehensive Vetting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
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
                  className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy-blue mb-4">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-navy-blue mb-3">
                      Key Features:
                    </h4>
                    {item.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-blue mb-6">
              Key Benefits of Professional Screening
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive advantages that extend far beyond basic compliance
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-gradient-to-br ${item.color} shadow-lg`}
                  >
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-blue mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-teal-600 via-teal-700 to-navy-blue text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
            <ShieldCheck className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Secure Your Workforce Today
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-blue-100 leading-relaxed">
            Partner with our vetting experts to ensure your security personnel
            meet the highest standards of integrity and professionalism.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange to-orange/90 hover:from-orange/90 hover:to-orange text-white font-semibold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={handleContactClick}
            >
              Request Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-semibold px-8 py-4 rounded-xl shadow-xl transition-all duration-300"
              onClick={handleContactClick}
            >
              Get Quote
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <div className="text-2xl font-bold mb-1">100%</div>
              <div className="text-sm text-blue-100">BS7858 Compliant</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <div className="text-2xl font-bold mb-1">7-10</div>
              <div className="text-sm text-blue-100">
                Days Average Turnaround
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <div className="text-2xl font-bold mb-1">24/7</div>
              <div className="text-sm text-blue-100">Expert Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
