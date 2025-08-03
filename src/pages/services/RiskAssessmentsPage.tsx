import React from 'react';
import {
  CheckCircle,
  ArrowRight,
  Shield,
  Award,
  Users,
  Search,
  AlertTriangle,
  Building,
  Eye,
  FlameKindling,
  Target,
  Star,
  TrendingUp,
  Phone,
  Mail,
  Zap,
  Clock,
  Globe,
  Lock,
} from 'lucide-react';
import {
  specificAssessments,
  assessmentServices,
} from '../../data/riskAssessmentData';
// Mock data - replace with your actual data imports
export function RiskAssessmentsPage() {
  const handleContactClick = () => {
    console.log('Navigate to contact');
  };

  const handleConsultationClick = () => {
    console.log('Request consultation');
  };

  const handleReadMore = () => {
    document
      .getElementById('main-content')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center bg-[#1C1F2A] text-white px-6 sm:px-12 lg:px-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('/Images/services/risk-assessment-cover.jpg')",
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
            Health & Safety
            <br />
            <span className="text-transparent bg-gradient-to-r from-[#ED2568] via-[#EE343B] to-[#FFC857] bg-clip-text">
              Risk Assessment
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Professional health and safety risk assessments to protect your
            business, employees, and visitors with comprehensive nationwide
            coverage.
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Shield className="h-12 w-12 text-[#FFC857] mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Fixed Price</h3>
              <p className="text-gray-200 text-sm">No Hidden Extras</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <FlameKindling className="h-12 w-12 text-[#FFC857] mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">
                Fire Risk Assessment
              </h3>
              <p className="text-gray-200 text-sm">Comprehensive Coverage</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Users className="h-12 w-12 text-[#FFC857] mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Free Online</h3>
              <p className="text-gray-200 text-sm">Staff Training</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Award className="h-12 w-12 text-[#FFC857] mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Never Knowingly</h3>
              <p className="text-gray-200 text-sm">Undersold</p>
            </div>
          </div>

          {/* Badge and CTA */}
          <div className="mt-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#ED2568] to-[#EE343B] rounded-full text-white font-medium mb-6 shadow-lg">
              <Globe className="h-5 w-5" />
              <span>Nationwide Coverage</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-gradient-to-r from-[#ED2568] to-[#EE343B] hover:from-[#EE343B] hover:to-[#ED2568] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={handleReadMore}
              >
                Read More
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </button>
              <button
                className="border-2 border-white text-white hover:bg-white hover:text-[#1C1F2A] px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
                onClick={handleContactClick}
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div id="main-content">
        {/* Accident/Incident Investigation Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-[#ED2568] to-[#EE343B] rounded-lg">
                    <Search className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#1C1F2A]">
                    ACCIDENT/INCIDENT INVESTIGATION
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  The aim of any accident / incident investigation is to try and
                  establish the root cause with a view to formulating policies,
                  practices and procedures to prevent a reoccurrence.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#F9F9F9] to-[#E5E6F0] rounded-lg hover:shadow-lg transition-all duration-300">
                    <CheckCircle className="h-6 w-6 text-[#ED2568] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#1C1F2A] mb-1">
                        Independent Investigation
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Provide an independent source for the investigation of
                        accidents and incidents.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#F9F9F9] to-[#E5E6F0] rounded-lg hover:shadow-lg transition-all duration-300">
                    <CheckCircle className="h-6 w-6 text-[#ED2568] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#1C1F2A] mb-1">
                        Sympathetic Approach
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Skilled consultants dealing with situations in a
                        sympathetic non-confrontational manner.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#F9F9F9] to-[#E5E6F0] rounded-lg hover:shadow-lg transition-all duration-300">
                    <CheckCircle className="h-6 w-6 text-[#ED2568] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#1C1F2A] mb-1">
                        Comprehensive Analysis
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Establish facts and causes by reference to risk
                        assessments, training records, and procedures.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#F9F9F9] to-[#E5E6F0] rounded-lg hover:shadow-lg transition-all duration-300">
                    <CheckCircle className="h-6 w-6 text-[#ED2568] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#1C1F2A] mb-1">
                        Prevention Focus
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Reports recommend learning and action points to prevent
                        or reduce reoccurrence potential.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFC857]/20 to-[#ED2568]/20 rounded-2xl transform rotate-3 scale-105"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-2xl border border-[#E5E6F0]">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#FFC857] to-[#ED2568] rounded-full flex items-center justify-center mx-auto mb-6">
                      <AlertTriangle className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1C1F2A] mb-4">
                      Investigation Services
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Professional accident and incident investigation to
                      establish root causes and prevent future occurrences.
                    </p>
                    <button
                      className="w-full bg-gradient-to-r from-[#ED2568] to-[#EE343B] hover:from-[#EE343B] hover:to-[#ED2568] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg"
                      onClick={handleContactClick}
                    >
                      Request Investigation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Health and Safety Assessments Section */}
        <section className="py-16 bg-gradient-to-br from-[#F9F9F9] to-[#E5E6F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ED2568]/20 to-[#FFC857]/20 rounded-2xl transform rotate-3 scale-105"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#ED2568] to-[#EE343B] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1C1F2A] mb-6">
                      Health & Safety Assessment
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-[#F9F9F9] to-[#E5E6F0] rounded-lg">
                        <span className="text-gray-600">Starting Price:</span>
                        <span className="font-bold text-[#ED2568] text-xl">
                          £450
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-[#F9F9F9] to-[#E5E6F0] rounded-lg">
                        <span className="text-gray-600">Timeline:</span>
                        <span className="font-semibold text-[#1C1F2A]">
                          1-2 weeks
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-[#F9F9F9] to-[#E5E6F0] rounded-lg">
                        <span className="text-gray-600">Success Rate:</span>
                        <span className="font-semibold text-[#ED2568]">
                          100%
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-[#F9F9F9] to-[#E5E6F0] rounded-lg">
                        <span className="text-gray-600">Clients Served:</span>
                        <span className="font-semibold text-[#FFC857]">
                          800+
                        </span>
                      </div>
                    </div>
                    <button
                      className="w-full mt-6 bg-gradient-to-r from-[#FFC857] to-[#ED2568] hover:from-[#ED2568] hover:to-[#FFC857] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg"
                      onClick={handleContactClick}
                    >
                      Get Assessment
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-[#FFC857] to-[#ED2568] rounded-lg">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#1C1F2A]">
                    HEALTH AND SAFETY ASSESSMENTS
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our aim is to work with you to provide practical tailor-made
                  solutions to meet your needs. The Health & Safety Assessment
                  will identify the hazards and risks to your business.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <CheckCircle className="h-6 w-6 text-[#ED2568] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#1C1F2A] mb-1">
                        Hazard Identification
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Comprehensive identification of hazards and risks to
                        your business.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <CheckCircle className="h-6 w-6 text-[#ED2568] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#1C1F2A] mb-1">
                        Detailed Reports
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Reports produced with recommendations and action plans
                        for dealing with risks.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <CheckCircle className="h-6 w-6 text-[#ED2568] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#1C1F2A] mb-1">
                        Safer Working Practices
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Guide you and your staff to safer, more efficient
                        working practices.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <CheckCircle className="h-6 w-6 text-[#ED2568] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#1C1F2A] mb-1">
                        Legal Compliance
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Help you comply with the law and enhance the working
                        experience for all.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workplace Assessments Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-[#1C1F2A] to-[#ED2568] rounded-lg">
                    <Building className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#1C1F2A]">
                    WORKPLACE ASSESSMENTS
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We will systematically and critically examine your workplace
                  and your activities to determine whether your staff or
                  visitors are at risk.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#F9F9F9] to-[#E5E6F0] rounded-lg hover:shadow-lg transition-all duration-300">
                    <CheckCircle className="h-6 w-6 text-[#ED2568] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#1C1F2A] mb-1">
                        Systematic Examination
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Critical examination of your workplace and activities to
                        identify risks.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#F9F9F9] to-[#E5E6F0] rounded-lg hover:shadow-lg transition-all duration-300">
                    <CheckCircle className="h-6 w-6 text-[#ED2568] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#1C1F2A] mb-1">
                        Risk Identification
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Identify significant hazards and risks with detailed
                        reporting.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#F9F9F9] to-[#E5E6F0] rounded-lg hover:shadow-lg transition-all duration-300">
                    <CheckCircle className="h-6 w-6 text-[#ED2568] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#1C1F2A] mb-1">
                        Prioritized Action Plan
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Prioritized action plan for removing or reducing risks
                        as much as possible.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#F9F9F9] to-[#E5E6F0] rounded-lg hover:shadow-lg transition-all duration-300">
                    <CheckCircle className="h-6 w-6 text-[#ED2568] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#1C1F2A] mb-1">
                        Statutory Compliance
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Identify how to comply with statutory breaches and best
                        practices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1C1F2A]/20 to-[#FFC857]/20 rounded-2xl transform rotate-3 scale-105"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-2xl border border-[#E5E6F0]">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#1C1F2A] to-[#ED2568] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Building className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1C1F2A] mb-4">
                      Workplace Safety
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Safeguarding your business, staff and visitors through
                      comprehensive workplace assessment and risk management.
                    </p>
                    <div className="bg-gradient-to-r from-[#F9F9F9] to-[#E5E6F0] p-4 rounded-lg mb-6 border border-[#ED2568]/20">
                      <p className="text-sm text-[#1C1F2A] font-medium">
                        "So far as reasonably practicable"
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        Professional assurance for your business
                      </p>
                    </div>
                    <button
                      className="w-full bg-gradient-to-r from-[#1C1F2A] to-[#ED2568] hover:from-[#ED2568] hover:to-[#1C1F2A] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg"
                      onClick={handleContactClick}
                    >
                      Book Workplace Assessment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specific Assessments Section */}
        <section className="py-16 bg-gradient-to-br from-[#F9F9F9] to-[#E5E6F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-br from-[#FFC857] to-[#ED2568] rounded-lg">
                  <Eye className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-[#1C1F2A] mb-4">
                SPECIFIC ASSESSMENTS
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
                Our consultants have extensive experience in carrying out
                assessments in a variety of industry sectors. Whether the
                assessment takes the form of an audit or an inspection, a full
                report with recommendations and a prioritized action plan to aid
                effective implementation will always be produced.
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Areas you may require specialized help with could include:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {specificAssessments.map((assessment, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer border border-[#E5E6F0]"
                  onClick={handleContactClick}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#ED2568] to-[#EE343B] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-[#FFC857] group-hover:to-[#ED2568] transition-all duration-300">
                      <assessment.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-[#1C1F2A] group-hover:text-[#ED2568] transition-colors text-sm">
                      {assessment.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                className="bg-gradient-to-r from-[#FFC857] to-[#ED2568] hover:from-[#ED2568] hover:to-[#EE343B] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={handleContactClick}
              >
                Request Specific Assessment
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </button>
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
                Why Choose Our Assessment Services?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive health and safety solutions with nationwide
                coverage and professional expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {assessmentServices.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#F9F9F9] to-[#E5E6F0] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100"
                >
                  <div className="text-center">
                    <div
                      className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1C1F2A] mb-4 group-hover:text-[#ED2568] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
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
          className="py-20 bg-gradient-to-r from-[#1C1F2A] to-[#ED2568] text-white relative overflow-hidden"
          style={{
            backgroundImage: "url('/Images/services/risk-assessment-cta.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-full shadow-2xl backdrop-blur-sm border border-white/20">
                <Shield className="h-12 w-12 text-white" />
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
              Ready to Secure Your Workplace?
            </h2>

            <p className="text-xl text-gray-100 max-w-4xl mx-auto mb-10">
              Contact us today for a free consultation and discover how we can
              help you implement comprehensive health and safety risk assessment
              with nationwide coverage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <button
                className="bg-gradient-to-r from-[#FFC857] to-[#ED2568] hover:from-[#ED2568] hover:to-[#FFC857] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={handleConsultationClick}
              >
                Get Free Consultation
                <Phone className="ml-2 h-5 w-5 inline" />
              </button>
              <button
                className="border-2 border-white text-white hover:bg-white hover:text-[#1C1F2A] px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
                onClick={handleContactClick}
              >
                Contact Us Today
                <Mail className="ml-2 h-5 w-5 inline" />
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#FFC857] mb-2">
                    £450
                  </div>
                  <p className="text-gray-200">Starting Price</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#ED2568] mb-2">
                    800+
                  </div>
                  <p className="text-gray-200">Clients Served</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">100%</div>
                  <p className="text-gray-200">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
