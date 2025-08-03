import React from 'react';
import {
  Shield,
  TrendingUp,
  CheckCircle,
  Award,
  Phone,
  Mail,
  Target,
  Star,
  Building,
  Zap,
  ArrowRight,
  Users,
  Clock,
  FileText,
  AlertCircle,
  Globe,
  Lock,
} from 'lucide-react';

// Mock data - replace with your actual data imports
const acsData = {
  whyBecomeApproved: [
    'Enhanced credibility and trust with clients',
    'Access to government and corporate contracts',
    'Competitive advantage in tender processes',
    'Improved operational standards',
    'Recognition as a quality service provider',
    'Increased market opportunities',
  ],
  eligibleServices: [
    'Door Supervision',
    'Security Guarding',
    'CCTV Public Space Surveillance',
    'Cash and Valuables in Transit',
    'Close Protection',
    'Key Holding',
  ],
  ourApproach: [
    {
      step: 'Initial Assessment',
      description:
        'We conduct a comprehensive review of your current operations and identify areas for improvement to meet ACS standards.',
    },
    {
      step: 'Documentation Development',
      description:
        'We create and customize all necessary policies, procedures, and management systems required for ACS compliance.',
    },
    {
      step: 'Staff Training',
      description:
        'We provide comprehensive training to ensure your team understands and implements the new systems effectively.',
    },
    {
      step: 'Implementation Support',
      description:
        'We guide you through the implementation process, ensuring all systems are working correctly before assessment.',
    },
    {
      step: 'Assessment Preparation',
      description:
        'We prepare your organization for the SIA assessment, conducting mock audits and addressing any final issues.',
    },
    {
      step: 'Ongoing Support',
      description:
        'After certification, we provide continued support to maintain your ACS status and prepare for annual reviews.',
    },
  ],
  whyChooseUs: [
    '100% success rate in ACS applications',
    'Expert knowledge of SIA requirements',
    'Tailored solutions for your business',
    'Comprehensive documentation packages',
    'Ongoing support and maintenance',
    'Cost-effective certification process',
  ],
  acsKeyBenefits: [
    'Enhanced business reputation',
    'Access to premium contracts',
    'Improved operational efficiency',
    'Better staff retention',
    'Reduced insurance costs',
    'Competitive market advantage',
  ],
};

const SiaAcsPage = () => {
  const handleContactClick = () => {
    console.log('Navigate to contact');
  };

  const handleConsultationClick = () => {
    console.log('Request ACS consultation');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center bg-[#1C1F2A] text-white px-6 sm:px-12 lg:px-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/Images/services/siaapproved.jpg')",
            filter: 'brightness(0.5)',
          }}
        />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Wave Overlay */}
        <svg
          className="absolute bottom-0 left-0 w-full h-40 z-0"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ED2568"
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
            SIA ACS Approved
            <br />
            <span className="text-transparent bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 bg-clip-text">
              Contractor Scheme
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Raise performance standards and gain recognition as a trusted
            private security provider through the SIA's voluntary Approved
            Contractor Scheme.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="text-white font-medium">
                ✨ 100% Success Rate
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="text-white font-medium">🚀 Expert Guidance</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="text-white font-medium">🏆 Proven Results</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button
              className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={handleConsultationClick}
            >
              Start Your ACS Journey
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

      {/* About ACS Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-800">
                  About the SIA ACS Scheme
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                The Security Industry Authority (SIA), established by the
                Private Security Industry Act 2001, regulates the private
                security industry across the UK. One of its key programs is the{' '}
                <span className="font-semibold text-slate-800">
                  Approved Contractor Scheme (ACS)
                </span>{' '}
                — a voluntary program designed to raise performance standards
                and help buyers identify trusted private security providers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">
                    Voluntary accreditation
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">
                    Annual assessments
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">
                    Quality standards
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">
                    Industry recognition
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-2xl transform rotate-3 scale-105"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Key Statistics
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Success Rate</span>
                    <span className="text-2xl font-bold text-pink-500">
                      100%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Clients Served</span>
                    <span className="text-2xl font-bold text-orange-500">
                      500+
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Years Experience</span>
                    <span className="text-2xl font-bold text-teal-500">
                      15+
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Become Approved Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Why Become an Approved Contractor?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ACS certification provides significant advantages for security
              companies looking to grow and establish credibility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {acsData.whyBecomeApproved.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gradient-to-br from-pink-100 to-red-100 rounded-lg group-hover:from-pink-500 group-hover:to-red-500 transition-all duration-300">
                    <CheckCircle className="h-6 w-6 text-pink-500 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2 group-hover:text-pink-500 transition-colors">
                      {benefit}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Essential advantage for modern security businesses
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligible Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              What Services Are Eligible?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Companies offering services in the following areas are eligible to
              apply for ACS certification
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {acsData.eligibleServices.map((service, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-teal-500 transition-all duration-300 shadow-sm hover:shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-500 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 group-hover:text-teal-600 transition-colors">
                        {service}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Professional security service
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Our Approach to ACS Certification
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide complete, hands-on support for your ACS approval with
              our proven 6-step process
            </p>
          </div>

          <div className="space-y-8">
            {acsData.ourApproach.map((item, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row items-center gap-8"
              >
                <div className="lg:w-1/3">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-orange-500">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold text-slate-800">
                        {item.step}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <p className="text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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
                <div className="p-3 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-800">
                  Why Choose Us for ACS Certification?
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {acsData.whyChooseUs.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-2">
                          {benefit}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Professional advantage in the security industry
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Sidebar */}
            <div className="space-y-6">
              {/* Get Started Card */}
              <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-pink-100 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-pink-500" />
                  <h3 className="text-xl font-semibold text-slate-800">
                    Get Started Today
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Whether you're new to ACS or ready to transfer, we'll make the
                  process simple. Get in touch for a consultation tailored to
                  your company.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-pink-100">
                    <Phone className="w-5 h-5 text-pink-500" />
                    <div>
                      <p className="text-sm text-gray-600">Call us at</p>
                      <p className="font-semibold text-slate-800">
                        0447446131794
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-pink-100">
                    <Mail className="w-5 h-5 text-pink-500" />
                    <div>
                      <p className="text-sm text-gray-600">Email us at</p>
                      <p className="font-semibold text-slate-800 text-sm">
                        admin@citrix-consulting-limited.co.uk
                      </p>
                    </div>
                  </div>
                  <button
                    className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
                    onClick={handleConsultationClick}
                  >
                    Request ACS Consultation
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Success Rate Card */}
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl border border-orange-100 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-orange-500" />
                  <h3 className="text-xl font-semibold text-slate-800">
                    Our Success Rate
                  </h3>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-orange-500 mb-2">
                    100%
                  </div>
                  <p className="text-gray-700 mb-4">
                    Success rate in achieving ACS approval for our clients
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">
                      Proven track record
                    </span>
                  </div>
                </div>
              </div>

              {/* Key Benefits Card */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-teal-500" />
                  <h3 className="text-xl font-semibold text-slate-800">
                    ACS Key Benefits
                  </h3>
                </div>
                <div className="space-y-3">
                  {acsData.acsKeyBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
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
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Ready to Become ACS Approved?
          </h2>

          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-10">
            Join hundreds of successful security companies who have achieved ACS
            certification with our expert guidance. Start your journey to
            enhanced credibility and market opportunities today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button
              className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={handleConsultationClick}
            >
              Start Your ACS Application
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
                <div className="text-3xl font-bold text-pink-400 mb-2">
                  100%
                </div>
                <p className="text-gray-200">Success Rate</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">
                  500+
                </div>
                <p className="text-gray-200">Clients Certified</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">15+</div>
                <p className="text-gray-200">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SiaAcsPage;
