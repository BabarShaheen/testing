import { ElementType } from 'react';
import {
  CheckCircle,
  ArrowRight,
  Shield,
  Award,
  FileText,
  Building,
  Phone,
  MapPin,
  Star,
  Lock,
  Clock,
  Target,
} from 'lucide-react';

import {
  insuranceCoverages,
  companyInfo,
  insuranceBenefits,
  insuranceServices,
  whyChooseUs,
} from '../../data/about-us/insuranceData';

interface Coverage {
  id: string;
  title: string;
  amount: string;
  description: string;
  features: string[];
  icon: ElementType;
  color: string;
}

interface Service {
  title: string;
  description: string;
  features: string[];
  icon: ElementType;
  bgColor: string;
}

// Components
const HeroSection = () => {
  const handleReadMore = () => {
    document
      .getElementById('main-content')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCertificateRequest = () => {
    console.log('Request insurance certificate');
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center bg-[#1C1F2A] text-white px-6 sm:px-12 lg:px-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/Images/services/insurance-cover.jpg')",
          filter: 'brightness(0.5)',
        }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#ED2568]/10 to-[#EE343B]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[#FFC857]/10 to-[#ED2568]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
          Insurance
          <br />
          <span className="text-transparent bg-gradient-to-r from-[#ED2568] via-[#EE343B] to-[#FFC857] bg-clip-text">
            Coverage & Protection
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl sm:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
          At{' '}
          <strong className="text-[#FFC857]">
            CiTRiX Consultancy Services
          </strong>
          , we maintain comprehensive insurance coverage to ensure complete
          protection, compliance, and peace of mind for all our clients and
          projects.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <Shield className="h-12 w-12 text-[#FFC857] mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">£20M Coverage</h3>
            <p className="text-gray-200 text-sm">Total Protection</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <Lock className="h-12 w-12 text-[#FFC857] mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Full Compliance</h3>
            <p className="text-gray-200 text-sm">Regulatory Standards</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <FileText className="h-12 w-12 text-[#FFC857] mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Instant Certificates</h3>
            <p className="text-gray-200 text-sm">Digital Delivery</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <Clock className="h-12 w-12 text-[#FFC857] mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">24/7 Coverage</h3>
            <p className="text-gray-200 text-sm">Always Protected</p>
          </div>
        </div>

        {/* Badge and CTA */}
        <div className="mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#ED2568] to-[#EE343B] rounded-full text-white font-medium mb-6 shadow-lg">
            <Building className="h-5 w-5" />
            <span>Registered Company SC472028</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-gradient-to-r from-[#ED2568] to-[#EE343B] hover:from-[#EE343B] hover:to-[#ED2568] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={handleReadMore}
            >
              View Coverage Details
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </button>
            <button
              className="border-2 border-white text-white hover:bg-white hover:text-[#1C1F2A] px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
              onClick={handleCertificateRequest}
            >
              Request Certificate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const InsuranceCoverageCard = ({ coverage }: { coverage: Coverage }) => {
  const handleCertificateRequest = () => {
    console.log('Request insurance certificate');
  };

  return (
    <div className="bg-gradient-to-br from-[#F9F9F9] to-[#E5E6F0] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100">
      <div className="p-8">
        <div className="text-center mb-6">
          <div
            className={`w-20 h-20 bg-gradient-to-br ${coverage.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
          >
            <coverage.icon className="h-10 w-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-[#1C1F2A] mb-2 group-hover:text-[#ED2568] transition-colors">
            {coverage.title}
          </h3>
          <div className="text-4xl font-extrabold text-[#ED2568] mb-4">
            {coverage.amount}
          </div>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            {coverage.description}
          </p>
        </div>

        <div className="space-y-3">
          {coverage.features.map((feature: string, idx: number) => (
            <div key={idx} className="flex items-center gap-3">
              <CheckCircle className="h-4 w-4 text-[#ED2568] flex-shrink-0" />
              <span className="text-gray-600 text-sm">{feature}</span>
            </div>
          ))}
        </div>

        <button
          className={`w-full mt-6 bg-gradient-to-r ${coverage.color} hover:from-[#EE343B] hover:to-[#ED2568] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg`}
          onClick={handleCertificateRequest}
        >
          Request Certificate
        </button>
      </div>
    </div>
  );
};

const InsuranceCoverageSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-br from-[#ED2568] to-[#EE343B] rounded-lg">
              <Shield className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-[#1C1F2A] mb-4">
            COMPREHENSIVE INSURANCE COVERAGE
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our extensive insurance portfolio provides complete protection
            across all aspects of our consultancy services, ensuring your
            projects are fully covered.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {insuranceCoverages.map((coverage) => (
            <InsuranceCoverageCard key={coverage.id} coverage={coverage} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CompanyInformationSection = () => {
  const handleContactClick = () => {
    console.log('Navigate to contact');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-[#F9F9F9] to-[#E5E6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-[#1C1F2A] to-[#ED2568] rounded-lg">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-[#1C1F2A]">
                REGISTERED BUSINESS INFORMATION
              </h2>
            </div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are a fully registered limited company operating with complete
              transparency and legal compliance across all our business
              activities.
            </p>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 mb-6">
              <h3 className="text-2xl font-bold text-[#1C1F2A] mb-2">
                {companyInfo.name}
              </h3>
              <p className="text-gray-600 mb-4">
                Company Registration Number:{' '}
                <span className="font-semibold text-[#ED2568]">
                  {companyInfo.registrationNumber}
                </span>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-[#F9F9F9] to-[#E5E6F0] rounded-lg">
                  <MapPin className="h-5 w-5 text-[#ED2568] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      Registered Address
                    </p>
                    <p className="font-medium text-[#1C1F2A] text-sm">
                      {companyInfo.address}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-[#F9F9F9] to-[#E5E6F0] rounded-lg">
                  <Phone className="h-5 w-5 text-[#ED2568] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      Contact Numbers
                    </p>
                    <p className="font-medium text-[#1C1F2A] text-sm">
                      {companyInfo.phone}
                    </p>
                    <p className="font-medium text-[#1C1F2A] text-sm">
                      {companyInfo.mobile}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1C1F2A]/20 to-[#FFC857]/20 rounded-2xl transform rotate-3 scale-105"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-2xl border border-[#E5E6F0]">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1C1F2A] to-[#ED2568] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1C1F2A] mb-4">
                  Why Choose Us?
                </h3>
                <div className="space-y-3 mb-6">
                  {whyChooseUs.slice(0, 5).map((reason, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-left">
                      <CheckCircle className="h-4 w-4 text-[#ED2568] mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{reason}</span>
                    </div>
                  ))}
                </div>
                <button
                  className="w-full bg-gradient-to-r from-[#1C1F2A] to-[#ED2568] hover:from-[#ED2568] hover:to-[#1C1F2A] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg"
                  onClick={handleContactClick}
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InsuranceServiceCard = ({ service }: { service: Service }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100 overflow-hidden">
      <div className={`${service.bgColor} p-6 text-white`}>
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
            <service.icon className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold">{service.title}</h3>
        </div>
        <p className="text-white/90 leading-relaxed">{service.description}</p>
      </div>
      <div className="p-6">
        <div className="space-y-3">
          {service.features.map((feature: string, idx: number) => (
            <div key={idx} className="flex items-center gap-3">
              <CheckCircle className="h-4 w-4 text-[#ED2568] flex-shrink-0" />
              <span className="text-gray-600 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const InsuranceServicesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-br from-[#FFC857] to-[#ED2568] rounded-lg">
              <Target className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-[#1C1F2A] mb-4">
            INSURANCE SERVICES
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive insurance-related services to ensure your
            projects are fully protected and compliant with all requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {insuranceServices.map((service, index) => (
            <InsuranceServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const InsuranceBenefitsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#F9F9F9] to-[#E5E6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-br from-[#1C1F2A] to-[#FFC857] rounded-lg">
              <Award className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-[#1C1F2A] mb-4">
            INSURANCE BENEFITS
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive insurance coverage provides numerous benefits and
            advantages for all our clients and business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insuranceBenefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100 p-8"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#ED2568] to-[#EE343B] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1C1F2A] mb-2 group-hover:text-[#ED2568] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  {benefit.description}
                </p>
              </div>

              <div className="text-center p-4 bg-gradient-to-r from-[#F9F9F9] to-[#E5E6F0] rounded-lg">
                <div className="text-3xl font-extrabold text-[#ED2568] mb-1">
                  {benefit.stats?.value}
                </div>
                <div className="text-sm text-gray-600">
                  {benefit.stats?.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Final CTA Section for Insurance Page
const FinalCTASection = () => {
  const handleGetCoverageClick = () => {
    console.log('Navigate to coverage details or contact');
  };

  const handleRequestCertificateClick = () => {
    console.log('Request insurance certificate');
  };

  const handleContactClick = () => {
    console.log('Navigate to contact');
  };

  return (
    <section
      className="py-20 bg-gradient-to-r from-[#1C1F2A] to-[#ED2568] text-white relative overflow-hidden"
      style={{
        backgroundImage: "url('/Images/landingpage/get-started.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-[#ED2568]/20 to-[#FFC857]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-[#FFC857]/20 to-[#ED2568]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-white/10 rounded-full shadow-2xl backdrop-blur-sm border border-white/20">
            <Shield className="h-12 w-12 text-white" />
          </div>
        </div>

        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
          Ready to Get{' '}
          <span className="text-transparent bg-gradient-to-r from-[#FFC857] to-[#ED2568] bg-clip-text">
            Protected?
          </span>
        </h2>

        <p className="text-xl text-gray-100 max-w-4xl mx-auto mb-10">
          Secure your projects with our comprehensive £20M insurance coverage.
          Get instant certificates, complete compliance, and peace of mind for
          all your consultancy needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <button
            className="bg-gradient-to-r from-[#FFC857] to-[#ED2568] hover:from-[#ED2568] hover:to-[#FFC857] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105"
            onClick={handleGetCoverageClick}
          >
            View Full Coverage
            <Shield className="ml-2 h-5 w-5 inline" />
          </button>
          <button
            className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-[#1C1F2A] px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
            onClick={handleRequestCertificateClick}
          >
            Request Certificate
            <FileText className="ml-2 h-5 w-5 inline" />
          </button>
          <button
            className="border-2 border-white text-white hover:bg-white hover:text-[#1C1F2A] px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
            onClick={handleContactClick}
          >
            Contact Us
            <Phone className="ml-2 h-5 w-5 inline" />
          </button>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-[#FFC857] mb-2">£20M</div>
              <p className="text-gray-200">Total Coverage</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#ED2568] mb-2">24/7</div>
              <p className="text-gray-200">Protection Active</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <p className="text-gray-200">Compliance Rate</p>
            </div>
          </div>
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4" />
            <span>Fully Insured</span>
          </div>
          <div className="flex items-center gap-2">
            <Building className="h-4 w-4" />
            <span>Company SC472028</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4" />
            <span>Industry Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            <span>Instant Certificates</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Component
export default function InsurancePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div id="main-content">
        <InsuranceCoverageSection />
        <CompanyInformationSection />
        <InsuranceServicesSection />
        <InsuranceBenefitsSection />
        <FinalCTASection />
      </div>
    </div>
  );
}
