import {
  CheckCircle,
  ArrowRight,
  Shield,
  FileText,
  Zap,
  Star,
  AlertTriangle,
  BookOpen,
  Phone,
  Mail,
  Clipboard,
  Target,
} from 'lucide-react';

import { benefits, legislation, appliances, tier } from '../../data/patData';
const PatTestingPage = () => {
  const handleContactClick = () => {
    console.log('Navigate to contact');
  };

  const handleConsultationClick = () => {
    console.log('Request PAT consultation');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center bg-[#1C1F2A] text-white px-6 sm:px-12 lg:px-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/Images/services/pattesting_cover.jpg')",
            filter: 'brightness(0.5)',
          }}
        />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Wave Overlay */}
        <svg
          className="absolute bottom-0 left-0 w-full h-40 z-0"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#0891B2"
            fillOpacity="0.3"
            d="M0,64L40,90.7C80,117,160,171,240,186.7C320,203,400,181,480,181.3C560,181,640,203,720,224C800,245,880,267,960,240C1040,213,1120,139,1200,106.7C1280,75,1360,85,1400,90.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          />
        </svg>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
          {/* Icon Badge */}
          <div className="flex justify-center mb-6">
            <div className="p-6 bg-white/10 rounded-full shadow-2xl backdrop-blur-sm border border-white/20">
              <Zap className="h-20 w-20 text-white" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text">
            PAT Testing
            <br />
            <span className="text-transparent bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text">
              Services
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Professional Portable Appliance Testing to ensure electrical safety
            compliance and protect your employees from electrical hazards.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="text-white font-medium">
                Professional Testing
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="text-white font-medium">Full Certification</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="text-white font-medium">Legal Compliance</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button
              className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={handleConsultationClick}
            >
              Get PAT Testing Quote
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

      {/* What is PAT Testing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              What is PAT Testing?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional electrical safety testing to ensure compliance with
              legal requirements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-red-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg">
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    Legal Requirements
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  The Electricity At Work Regulations (EAW) came into force in
                  1989. These regulations place legal onus on every employer
                  where Portable Electrical Appliances are used to ensure they
                  are in a safe working order, to prevent injury or death.
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-teal-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    Record Keeping
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  All appliances must be regularly maintained by inspection and
                  testing. Full records are recommended to be kept. Our records
                  are fully computerized and stored in our main computer
                  database.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-2xl transform rotate-3 scale-105"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                  Appliances We Test
                </h3>
                <div className="space-y-4">
                  {appliances.map((appliance, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl border-l-4 border-teal-500 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <appliance.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">
                          {appliance.name}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Professional testing service
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-100">
                  <p className="text-gray-700 text-sm">
                    <strong>Coverage:</strong> Any item which plugs into a
                    socket, including business equipment, power tools, and
                    household appliances. Testing available for both 110v and
                    240v portable appliances and machinery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg">
                <Star className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Benefits of PAT Testing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive protection and peace of mind for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${benefit.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 text-center group-hover:text-teal-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Why Choose CiTRiX-CO?
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 max-w-4xl mx-auto">
                This sticker is valid for up to a year, so you know that you and
                your company are sufficiently covered for a substantial amount
                of time. Being a part of our team will really help to put your
                mind at ease. We offer a very affordable rate, and there is also
                the option to order bundle tests, to ensure that all appliances
                are being checked at once.
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full text-white font-medium shadow-lg">
                <Shield className="h-5 w-5" />
                <span>
                  We are the only real way to protect yourself and employees,
                  all year round
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg">
                <Clipboard className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              PAT Testing Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transparent and cost-effective pricing from CiTRiX - a CHAS SSIP
              Approved Provider
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Minimum charge card */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl shadow-lg border border-orange-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clipboard className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  Minimum Charge
                </h3>
                <p className="text-4xl font-bold text-orange-500 mb-4">
                  £39.99
                </p>
                <p className="text-gray-600 text-sm">
                  Includes testing for up to 10 appliances
                </p>
              </div>
            </div>

            {/* Per appliance tiers */}
            {tier.map((tierItem, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl shadow-lg border border-teal-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    Appliances: {tierItem.range}
                  </h3>
                  <p className="text-4xl font-bold text-teal-500 mb-4">
                    {tierItem.price}
                  </p>
                  <p className="text-gray-600 text-sm">Per appliance</p>
                </div>
              </div>
            ))}
          </div>

          {/* What's Included */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl border border-gray-100 shadow-lg">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                What's Included?
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto mb-4">
                Each appliance receives a <strong>pass/fail sticker</strong>{' '}
                valid for <strong>1 year</strong>. A{' '}
                <strong>full certificate</strong> will be issued upon
                completion. Affordable bundle testing options ensure all your
                appliances are tested efficiently at once.
              </p>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Join our network to reduce stress and ensure legal compliance.
                We're here to keep your workplace safe and your mind at ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legislation Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-slate-600 to-slate-800 rounded-lg">
                <FileText className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              LEGISLATION
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Legal requirements for business owners, landlords, and employers
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg">
                  <AlertTriangle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">
                  Legal Requirements
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                If you are a business owner, a landlord, a public service
                provider or an employer the law requires you to take steps to
                ensure any electrical equipment you provide is safe to use. The
                legislation of specific relevance to electrical maintenance
                includes:
              </p>
              <div className="space-y-3">
                {legislation.map((law, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg"
                  >
                    <CheckCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{law}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">
                  Our Professional Service
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">
                    Professional management of inspection, testing and
                    certification of all your appliances
                  </p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">
                    Latest high-tech computerized testing equipment which
                    exceeds tests recommended by the Regulations
                  </p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">
                    Testing available for 110v and 240v portable appliances and
                    machinery
                  </p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">
                    Each appliance receives a pass/fail sticker valid for 1 year
                  </p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">
                    Full certificate issued upon completion
                  </p>
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
            <div className="p-4 bg-white/10 rounded-full shadow-2xl backdrop-blur-sm border border-white/20">
              <Phone className="h-12 w-12 text-white" />
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Don't Stress About Workplace Safety
          </h2>

          <p className="text-xl text-gray-100 max-w-4xl mx-auto mb-10">
            If you don't want to stress off worrying about the safety of your
            work place, and also wish to cover yourself for any injuries that
            may occur in the workplace, CiTRiX-CO has the answer to all your
            problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button
              className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={handleConsultationClick}
            >
              Get Free Consultation
              <Phone className="ml-2 h-5 w-5 inline" />
            </button>
            <button
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
              onClick={handleContactClick}
            >
              Request Quote
              <Mail className="ml-2 h-5 w-5 inline" />
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">
                  24/7
                </div>
                <p className="text-gray-200">Service Available</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  £39.99
                </div>
                <p className="text-gray-200">Starting Price</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">
                  1 Year
                </div>
                <p className="text-gray-200">Certificate Valid</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PatTestingPage;
