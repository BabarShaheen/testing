import { useNavigate } from 'react-router-dom';
import {
  Shield,
  Award,
  CheckCircle,
  Star,
  Building,
  Target,
  ArrowRight,
  Phone,
  Network,
} from 'lucide-react';
import LogoSlider from '../../components/common/LogoSlider';

// SSIP Member Schemes Data
const ssipMembers = [
  {
    name: 'CHAS',
    description: 'Contractors Health and Safety Assessment Scheme',
    benefits: 'Widely recognized across construction and facilities management',
  },
  {
    name: 'Constructionline',
    description: "UK's largest register of construction contractors",
    benefits: 'Access to thousands of construction opportunities',
  },
  {
    name: 'SMAS',
    description: 'Safety Management Advisory Services',
    benefits: 'Comprehensive health and safety management assessment',
  },
  {
    name: 'SafeContractor',
    description: 'Leading health and safety assessment scheme',
    benefits: 'Trusted by major organizations across all sectors',
  },
  {
    name: 'Achilles',
    description: 'Supply chain risk management solutions',
    benefits: 'Global recognition and supplier verification',
  },
  {
    name: 'CQMS',
    description: 'Contractor Quality Management System',
    benefits: 'Quality and safety management certification',
  },
];

const benefits = [
  'Reduces duplication and bureaucracy in pre-qualification',
  'Demonstrates commitment to health and safety excellence',
  'Saves money on multiple accreditation assessments',
  'Improves professional image and credibility',
  "Access to work opportunities you couldn't bid for before",
  'Single assessment satisfies multiple scheme requirements',
  'Trusted by major clients and procurement teams',
  'Streamlined tender processes and faster approvals',
];



const processSteps = [
  {
    step: '1',
    title: 'Gap Analysis',
    description:
      'We identify what documents and training you need for compliance',
  },
  {
    step: '2',
    title: 'Documentation',
    description: 'We help you prepare all required policies and procedures',
  },
  {
    step: '3',
    title: 'Training Support',
    description:
      'Ensure your team has the necessary health and safety training',
  },
  {
    step: '4',
    title: 'Application Submission',
    description:
      'We handle the entire application process with your chosen scheme',
  },
  {
    step: '5',
    title: 'Assessment Support',
    description: 'Ongoing support throughout the assessment process',
  },
  {
    step: '6',
    title: 'Certification',
    description: 'Achieve SSIP accreditation and maintain ongoing compliance',
  },
];

export default function SSIPAccreditationPage() {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate('/contact');
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleReadMore = () => {
    document
      .getElementById('main-content')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center bg-[#1C1F2A] text-white px-6 sm:px-12 lg:px-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
            filter: 'brightness(0.4)',
          }}
        />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#ED2568]/10 to-[#EE343B]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[#ED2568]/10 to-[#EE343B]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
        <div className="relative z-10 max-w-xl text-left space-y-8">
          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-left">
            SSIP
            <br />
            <span className="text-transparent bg-gradient-to-r from-[#ED2568] via-[#EE343B] to-[#ED2568] bg-clip-text">
              Accreditation
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-gray-200 max-w-2xl leading-relaxed text-left">
            Safety Schemes in Procurement - Your gateway to reduced bureaucracy,
            cost savings, and enhanced credibility in health and safety
            compliance.
          </p>

          {/* Badge and CTA */}
          <div className="mt-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#ED2568] to-[#EE343B] rounded-full text-white font-medium mb-6 shadow-lg">
              <Award className="h-5 w-5" />
              <span>HSE Approved Umbrella Scheme</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-gradient-to-r from-[#ED2568] to-[#EE343B] hover:from-[#EE343B] hover:to-[#ED2568] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={handleReadMore}
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </button>
              <button
                className="border-2 border-white text-white hover:bg-white hover:text-[#1C1F2A] px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
                onClick={handleApplyClick}
              >
                Get Accredited
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div id="main-content">
        {/* What is SSIP Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-[#ED2568] to-[#EE343B] rounded-lg">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#1C1F2A]">
                    What is SSIP?
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Safety Schemes in Procurement (SSIP) is not an assessment
                  scheme, it is a membership or umbrella body for assessment
                  schemes with the common aim of reducing both duplication and
                  costs for both buyers and suppliers.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#F9F9F9] to-[#E5E6F0] rounded-lg hover:shadow-lg transition-all duration-300">
                    <CheckCircle className="h-6 w-6 text-[#ED2568] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#1C1F2A] mb-1">
                        HSE Approved
                      </h3>
                      <p className="text-gray-600 text-sm">
                        SSIP is an approved umbrella scheme recognised by the
                        Health and Safety Executive.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#F9F9F9] to-[#E5E6F0] rounded-lg hover:shadow-lg transition-all duration-300">
                    <CheckCircle className="h-6 w-6 text-[#ED2568] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#1C1F2A] mb-1">
                        Proven Savings
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Buyers and suppliers saved over £68 Million in 2023 by
                        using SSIP to reduce occupational health and safety
                        assessment duplication across projects.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#F9F9F9] to-[#E5E6F0] rounded-lg hover:shadow-lg transition-all duration-300">
                    <CheckCircle className="h-6 w-6 text-[#ED2568] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#1C1F2A] mb-1">
                        Widespread Adoption
                      </h3>
                      <p className="text-gray-600 text-sm">
                        With over 89,000 suppliers registered with an SSIP
                        Member Scheme, clients are able to access critical
                        assessment information using the freely-available SSIP
                        Portal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ED2568]/20 to-[#EE343B]/20 rounded-2xl transform rotate-3 scale-105"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-2xl border border-[#E5E6F0]">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#ED2568] to-[#EE343B] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1C1F2A] mb-4">
                      SSIP Benefits
                    </h3>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-[#F9F9F9] to-[#E5E6F0] rounded-lg">
                        <span className="text-gray-600 text-sm">
                          Assessment:
                        </span>
                        <span className="font-bold text-[#ED2568]">
                          One for All
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-[#F9F9F9] to-[#E5E6F0] rounded-lg">
                        <span className="text-gray-600 text-sm">Savings:</span>
                        <span className="font-semibold text-[#1C1F2A]">
                          £68M+ in 2023
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-[#F9F9F9] to-[#E5E6F0] rounded-lg">
                        <span className="text-gray-600 text-sm">
                          Suppliers:
                        </span>
                        <span className="font-semibold text-[#ED2568]">
                          89,000+
                        </span>
                      </div>
                    </div>
                    <button
                      className="w-full bg-gradient-to-r from-[#ED2568] to-[#EE343B] hover:from-[#EE343B] hover:to-[#ED2568] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg"
                      onClick={handleApplyClick}
                    >
                      Get Started Today
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SSIP Member Schemes Section */}
        <section className="py-16 bg-gradient-to-br from-[#F9F9F9] to-[#E5E6F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-br from-[#ED2568] to-[#EE343B] rounded-lg">
                  <Network className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-[#1C1F2A] mb-4">
                SSIP Member Schemes
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
                SSIP itself is not an assessment scheme but an organisation for
                members such as SMAS, CHAS (Veriforce), Constructionline,
                SafeContractor, Achilles, CQMS and so on.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {ssipMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer border border-[#E5E6F0]"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#ED2568] to-[#EE343B] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-[#ED2568] group-hover:to-[#EE343B] transition-all duration-300">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1C1F2A] mb-2">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                      {member.description}
                    </p>
                    <p className="text-xs text-[#ED2568] font-medium">
                      {member.benefits}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-br from-[#ED2568] to-[#EE343B] rounded-lg">
                  <Star className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-[#1C1F2A] mb-4">
                Why Choose SSIP Accreditation?
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
                SSIP accreditation transforms how you approach health and safety
                compliance, offering tangible benefits that directly impact your
                bottom line and business opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#F9F9F9] to-[#E5E6F0] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#ED2568] to-[#EE343B] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm group-hover:text-[#1C1F2A] transition-colors">
                      {benefit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <LogoSlider />

        {/* How We Help Section */}
        <section className="py-16 bg-gradient-to-br from-[#F9F9F9] to-[#E5E6F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-br from-[#ED2568] to-[#EE343B] rounded-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-[#1C1F2A] mb-4">
                How Accredited Can Help
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
                The application process can seem quite daunting and is often a
                lengthy process but do not worry, our expert consultants can
                take this hassle away from you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-[#E5E6F0]"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#ED2568] to-[#EE343B] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-[#ED2568] group-hover:to-[#EE343B] transition-all duration-300">
                      <span className="text-2xl font-bold text-white">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#1C1F2A] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm group-hover:text-[#1C1F2A] transition-colors">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl border border-white/20">
                <h3 className="text-2xl font-bold text-[#1C1F2A] mb-4">
                  Expert Support Throughout
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We will identify these gaps and provide you with support and
                  guidance in ensuring that you're deemed compliant and remain
                  so in accordance with the accreditation body.
                </p>
                <button
                  className="bg-gradient-to-r from-[#ED2568] to-[#EE343B] hover:from-[#EE343B] hover:to-[#ED2568] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105"
                  onClick={handleContactClick}
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section
          className="py-20 bg-gradient-to-r from-[#1C1F2A] to-[#ED2568] text-white relative overflow-hidden"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
              Ready to Get SSIP Accredited?
            </h2>

            <p className="text-xl text-gray-100 max-w-4xl mx-auto mb-10">
              Join thousands of companies who have streamlined their procurement
              process and enhanced their credibility with SSIP accreditation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <button
                className="bg-gradient-to-r from-[#ED2568] to-[#EE343B] hover:from-[#EE343B] hover:to-[#ED2568] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={handleApplyClick}
              >
                Get Accredited Today
                <Award className="ml-2 h-5 w-5 inline" />
              </button>
              <button
                className="border-2 border-white text-white hover:bg-white hover:text-[#1C1F2A] px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
                onClick={handleContactClick}
              >
                Speak to an Expert
                <Phone className="ml-2 h-5 w-5 inline" />
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#ED2568] mb-2">
                    89,000+
                  </div>
                  <p className="text-gray-200">Registered Suppliers</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#EE343B] mb-2">
                    £68M+
                  </div>
                  <p className="text-gray-200">Saved in 2023</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">HSE</div>
                  <p className="text-gray-200">Approved Scheme</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
