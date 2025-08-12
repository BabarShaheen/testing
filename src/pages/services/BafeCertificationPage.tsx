// src/pages/services/BafeCertificationPage.tsx
import {
  Shield,
  CheckCircle,
  ArrowRight,
  Settings,
  Star,
  Building,
  UserCheck,
} from 'lucide-react';
import { consultancySteps, Benefits } from '../../data/bafeData';

export default function BafeSP205Page() {
  const handleContactClick = () => {
    window.location.href = '/contact';
  };

 

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1C1F2A] text-white px-6 sm:px-12 lg:px-20">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url('/Images/services/life-safety_optimized.webp')",
            filter: 'brightness(0.7)',
          }}
        />
        {/* Content Layer: left-aligned layout, now with explicit flex for left/right columns */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-12">
            {/* Left Column */}
            <div className="flex flex-col justify-center text-left space-y-6 w-full lg:w-1/2">
              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white" style={{textAlign: 'left'}}>
                Life Safety{' '}
                <span className="text-[#ED2568]">Fire Risk Assessment</span>{' '}
                Consultancy
              </h1>
              {/* Paragraph */}
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed" style={{textAlign: 'left'}}>
                If you are the Responsible Person (or Duty Holder in Scotland)
                you hold the responsibility for the adequacy of your company's{' '}
                <span className="text-[#ED2568] font-semibold">
                  Fire Risk Assessment
                </span>{' '}
                by law, rather than the assessor themselves. To ensure you are
                using a competent provider you should be using a BAFE registered
                company.
              </p>
              {/* Industry Leading Training Badge/info */}
              <div
                className="inline-block bg-[#ED2568] text-white px-5 py-2 rounded-full font-semibold text-base shadow-md mb-2 w-fit"
                style={{ textAlign: 'left' }}
              >
                Industry Leading Training
              </div>
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-start items-center gap-4 pt-4">
                <a
                  className="bg-gradient-to-r from-[#ED2568] to-[#EE343B] text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:brightness-110 transition-all flex items-center border-0"
                  style={{fontFamily: 'inherit', borderRadius: '0.75rem'}}
                  onClick={() => document.getElementById('benefits-section')?.scrollIntoView({ behavior: 'smooth' })}
                  tabIndex={0}
                  role="button"
                >
                  View Benefits
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <button
                  className="border border-white/30 text-white hover:text-pink-300 hover:border-pink-300 px-8 py-3 text-lg rounded-xl transition-all font-semibold shadow-lg"
                  style={{fontFamily: 'inherit', borderRadius: '0.75rem'}}
                  onClick={handleContactClick}
                >
                  Apply Now
                </button>
              </div>
            </div>
            {/* Right Column (image/illustration placeholder) */}
            <div className="flex justify-center items-center w-full lg:w-1/2 h-full" aria-hidden>
              {/* Reserve space for hero image/illustration if needed */}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div id="main-content">
        {/* 5-Step Process Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100 relative">
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-r from-[#ED2568]/10 to-[#EE343B]/10 pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1C1F2A] mb-6">
                BAFE SP205 Certification Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our proven 5-step process to help you achieve BAFE SP205
                certification and gain recognition as a competent fire risk
                assessment provider.
              </p>
            </div>

            <div className="space-y-12">
              {consultancySteps.map((stepItem, index) => (
                <div
                  key={index}
                  className={`${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex flex-col lg:flex gap-12 items-center`}
                >
                  <div className="flex-1">
                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-[#ED2568] to-[#EE343B] rounded-full flex items-center justify-center text-white mr-6 shadow-lg">
                          <stepItem.icon className="w-8 h-8" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-[#ED2568] mb-1 uppercase tracking-wide">
                            {stepItem.step}
                          </div>
                          <h3 className="text-2xl font-bold text-[#1C1F2A]">
                            {stepItem.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {stepItem.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-r from-[#ED2568] to-[#EE343B] rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-xl">
                      {index + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Details Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1C1F2A] mb-6">
                  BAFE SP205 Consultancy Services
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our comprehensive consultancy service guides you through every
                  step of the BAFE SP205 certification process, ensuring your
                  organization meets all technical and quality management
                  requirements.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: 'Quality Management Systems',
                      description:
                        'Implementation of robust QMS to support BAFE SP205 requirements (ISO9001 not required).',
                    },
                    {
                      title: 'Technical Capability Assessment',
                      description:
                        'Ensure your organization has the required technical capabilities for life safety fire risk assessment.',
                    },
                    {
                      title: 'Staff Competency Verification',
                      description:
                        'Verify that risk assessment staff meet appropriate criteria and competency levels.',
                    },
                    {
                      title: 'Certification Body Liaison',
                      description:
                        'Full support through the audit and certification process with BAFE-listed certification bodies.',
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#ED2568] mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-[#1C1F2A] mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#ED2568] to-[#EE343B] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1C1F2A]">
                    Consultancy Details
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">
                      Starting Price:
                    </span>
                    <span className="font-bold text-[#ED2568] text-lg">
                      £2,800
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">Timeline:</span>
                    <span className="font-bold text-[#1C1F2A]">6-8 weeks</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">
                      Success Rate:
                    </span>
                    <span className="font-bold text-[#ED2568]">92%</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">
                      Clients Served:
                    </span>
                    <span className="font-bold text-[#1C1F2A]">60+</span>
                  </div>
                  <div className="pt-6">
                    <div className="text-center">
                      <div className="inline-block bg-gradient-to-r from-[#ED2568] to-[#EE343B] text-white px-4 py-2 rounded-full font-semibold text-sm mb-4">
                        Suitable for all sizes
                      </div>
                      <p className="text-sm text-gray-600">
                        Designed for large organizations, in-house departments,
                        and sole traders
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  className="w-full mt-8 bg-gradient-to-r from-[#ED2568] to-[#EE343B] text-white px-6 py-3 rounded-xl font-semibold hover:brightness-110 transition-all shadow-lg"
                  onClick={handleContactClick}
                >
                  Start Your Certification Journey
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits-section" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1C1F2A] mb-6">
                Benefits of BAFE SP205 Certification
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Achieve industry recognition as a competent fire risk assessment
                provider and enhance your professional credibility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Benefits.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-[#ED2568] to-[#EE343B] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <item.icon className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1C1F2A] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1C1F2A] mb-6">
                Why Choose Our BAFE SP205 Consultancy?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We work closely with your organisation to ensure successful
                certification, regardless of your size or current setup.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: UserCheck,
                  title: 'Expert Guidance',
                  description:
                    'Close collaboration throughout the entire certification process',
                  color: 'text-[#ED2568]',
                },
                {
                  icon: Settings,
                  title: 'No ISO9001 Required',
                  description:
                    'Implement robust QMS without ISO9001 certification',
                  color: 'text-[#ED2568]',
                },
                {
                  icon: Building,
                  title: 'All Organization Sizes',
                  description:
                    'Support for large companies, departments, and sole traders',
                  color: 'text-[#ED2568]',
                },
                {
                  icon: Star,
                  title: 'Proven Track Record',
                  description: '92% success rate with 60+ satisfied clients',
                  color: 'text-[#ED2568]',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-[#ED2568] transition-all duration-300 text-center group"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-[#ED2568] to-[#EE343B] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-[#1C1F2A] mb-3 text-lg">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
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
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>

          {/* Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* removed the ShieldCheck icon here as requested */}

            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-[#ED2568]">
              Ready to Achieve BAFE SP205 Certification?
            </h2>

            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Contact us today for a free consultation and discover how we can
              help you become a BAFE-registered fire risk assessment provider.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <button
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={handleContactClick}
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </button>
              <button
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
                onClick={handleContactClick}
              >
                Contact Us Today
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-pink-400 mb-2">
                    100%
                  </div>
                  <p className="text-gray-200">BAFE SP205 Compliant</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-rose-400 mb-2">
                    5-7
                  </div>
                  <p className="text-gray-200">Days to Certification</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-fuchsia-400 mb-2">
                    24/7
                  </div>
                  <p className="text-gray-200">Expert Guidance</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}