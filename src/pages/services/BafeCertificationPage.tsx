import {
  Shield,
  CheckCircle,
  ArrowRight,
  Settings,
  Star,
  Building,
  ShieldCheck,
  UserCheck,
} from 'lucide-react';
import { consultancySteps, Benefits } from '../../data/bafeData';

export default function BafeSP205Page() {
  const handleContactClick = () => {
    console.log('Navigate to contact page');
  };

  const handleReadMore = () => {
    document
      .getElementById('main-content')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1C1F2A] text-white px-6 sm:px-12 lg:px-20">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url('/Images/services/life-safety.jpg')",
            filter: 'brightness(0.7)',
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
            fillOpacity="0.25"
            d="M0,64L40,90.7C80,117,160,171,240,186.7C320,203,400,181,480,181.3C560,181,640,203,720,224C800,245,880,267,960,240C1040,213,1120,139,1200,106.7C1280,75,1360,85,1400,90.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          />
        </svg>

        {/* Content Layer */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-block bg-pink-600/10 text-pink-300 font-semibold tracking-wide px-5 py-2 rounded-full text-sm shadow-md">
            BAFE SP205 Certification
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            Life Safety Fire Risk Assessment Consultancy
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            If you are the Responsible Person (or Duty Holder in Scotland) you
            hold the responsibility for the adequacy of your company's Fire Risk
            Assessment by law, rather than the assessor themselves. To ensure
            you are using a competent provider you should be using a BAFE
            registered company.
          </p>

          {/* Info Box */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20 shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <Shield className="h-12 w-12 text-pink-300 mr-4" />
              <h2 className="text-2xl font-bold">BAFE SP 205</h2>
            </div>
            <p className="text-gray-100 leading-relaxed text-lg">
              <strong>Life Safety Fire Risk Assessment SP205</strong> specifies
              that organisations (including in-house departments and sole
              traders) have the required technical and quality management
              capabilities and risk assessment staff meet appropriate criteria.
              The scheme has been designed to meet the requirements of fire risk
              assessment providers large and small, recognising that there are
              many individuals working as assessors.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <button
              onClick={handleReadMore}
              className="bg-gradient-to-r from-[#ED2568] to-[#EE343B] text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:brightness-110 transition-all flex items-center"
            >
              Learn About Our Process
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>

            <button
              onClick={handleContactClick}
              className="border border-white/30 text-white hover:text-pink-300 hover:border-pink-300 px-8 py-3 text-lg rounded-xl transition-all"
            >
              Get Free Consultation
            </button>
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
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
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

        <section
          className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white relative overflow-hidden"
          style={{
            backgroundImage: "url('/Images/landingpage/get-started.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>

          {/* Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="flex justify-center mb-6">
              <div className="p-6 bg-white/10 rounded-full shadow-2xl backdrop-blur-sm border border-white/20">
                <ShieldCheck className="h-16 w-16 text-white" />
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
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
