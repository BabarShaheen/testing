import { Button } from '../../../components/ui/button';
import {
  Shield,
  CheckCircle,
  Users,
  Target,
  Building,
  FileText,
  TrendingUp,
  Star,
  Clock,
  ArrowRight,
  Briefcase,
  Settings,
  BookOpen,
  BadgeCheck,
  Eye,
  Download,
  Search,
  Clipboard,
  ShieldCheck,
} from 'lucide-react';
import {
  implementationSteps,
  assessmentProcess,
  jointSystemBenefits,
} from '../../../data/ohsas18001Data';

const OHSAS18001Page = () => {
  return (
    <div className="min-h-screen text-gray-700">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 via-teal-700 to-slate-800 text-white py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Shield className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            OHSAS 18001 Safety Management
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-blue-100 mb-6">
            Low cost certification with guaranteed results
          </p>
          <p className="text-lg max-w-5xl mx-auto leading-relaxed text-blue-200">
            Our Health and Safety Consultancy optimizes systems to ensure high
            quality output. Our experienced team reviews your existing systems
            to identify gaps and works with you on solutions to eliminate
            deficiencies.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-sm font-medium">
                ✓ OHSAS 18001 Certified
              </span>
            </div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-sm font-medium">
                ✓ Legislative Compliance
              </span>
            </div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-sm font-medium">
                ✓ Continuous Improvement
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* What is OHSAS 18001 Section */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mb-6">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              What is OHSAS 18001?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The international standard for Occupational Health and Safety
              Management Systems
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-2xl shadow-lg border border-teal-100">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Certification Specification
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  OHSAS 18001 is the latest certification specification for
                  Occupational Health and Safety Management Systems. Based on
                  established criteria such as BS 8800 and the Management
                  Regulations 1992, it serves as an audit/certification
                  specification rather than legislative requirement.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-lg border border-blue-100">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  International Framework
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Part of OHSAS 18000 family, providing a comprehensive
                  framework for effective occupational health and safety
                  management system implementation across all industries and
                  organization sizes.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                OHSAS 18000 Family Structure
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl border-l-4 border-teal-500">
                  <div className="flex-shrink-0 w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">
                      OHSAS 18001
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Occupational health and safety management systems
                      specification (Auditable Standard)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-500">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">
                      OHSAS 18002
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Guidelines for the implementation of OHSAS 18001
                      (Implementation Guide)
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200">
                <p className="text-center text-gray-700 font-medium">
                  <strong>OHSAS 18001</strong> is the auditable standard in the
                  OHSAS 18000 family
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Seek Certification Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Why Seek OHSAS 18001 Certification?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Demonstrate commitment to health and safety excellence through
              third-party certification
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    Independent Validation
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Registration by an independent, third-party certification
                    body demonstrates commitment to implement, maintain and
                    improve your Health and Safety management approach.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    Legislative Confidence
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Organizations registered to OHSAS 18001 gain increased
                    confidence in meeting Health and Safety legislation
                    requirements through systematic management.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    Continuous Improvement
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Target setting through Health and Safety policy, combined
                    with ongoing measurement, ensures a process of continual
                    improvement and enhanced performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                Certification Benefits
              </h3>
              <div className="space-y-4">
                {[
                  { benefit: 'Enhanced Safety Culture', percentage: '94%' },
                  { benefit: 'Reduced Incidents', percentage: '87%' },
                  { benefit: 'Improved Compliance', percentage: '96%' },
                  { benefit: 'Staff Confidence', percentage: '91%' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl"
                  >
                    <span className="text-gray-700 font-medium">
                      {item.benefit}
                    </span>
                    <div className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 rounded-full">
                      <span className="text-white font-bold text-sm">
                        {item.percentage}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-6">
              <Settings className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              OHSAS 18001 Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Systematic approach to achieving comprehensive health and safety
              management
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {implementationSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    {step.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-800 text-sm mb-3">
                      Key Activities:
                    </h4>
                    {step.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <span className="text-gray-700 text-xs">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-2xl border border-teal-100">
            <h3 className="text-2xl font-bold text-slate-800 text-center mb-6">
              Getting Started
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-slate-800 mb-3">
                  Initial Steps:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Evaluate Health and Safety needs of staff and visitors
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Complete our Free Quote form to begin certification
                      process
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Identify boundaries of your Health and Safety system
                    </span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-slate-800 mb-3">
                  Ongoing Requirements:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Document procedures for meeting OHSAS 18001 requirements
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Ensure full implementation and staff compliance
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Conduct regular internal audits and system reviews
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-teal-700 text-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-6">
              OHSAS 18001 Assessment Process
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Comprehensive third-party assessment leading to full certification
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {assessmentProcess.map((phase, index) => {
              const IconComponent = phase.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{phase.phase}</h3>
                  </div>

                  <p className="text-blue-100 text-sm leading-relaxed mb-4">
                    {phase.description}
                  </p>

                  <div className="text-center">
                    <div className="px-3 py-1 bg-white/20 rounded-full">
                      <span className="text-white font-medium text-xs">
                        {phase.duration}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-bold text-center mb-8">
              Assessment Timeline & Process
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-white text-lg mb-4">
                  Initial Assessment:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-blue-100 text-sm">
                      Third-party certification body selection and engagement
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-blue-100 text-sm">
                      Comprehensive documentation review against OHSAS 18001
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-blue-100 text-sm">
                      On-site audit verification of records and practices
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white text-lg mb-4">
                  Post-Certification:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-blue-100 text-sm">
                      Certificate of registration issued upon successful
                      completion
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-blue-100 text-sm">
                      Annual surveillance visits to ensure system maintenance
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-blue-100 text-sm">
                      Continued effectiveness monitoring and improvement
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mb-6">
              <Star className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Why Choose Our Consultancy Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Exceptional track record with industry-leading customer
              satisfaction
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 shadow-lg">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  Customer Satisfaction
                </h3>
              </div>
              <p className="text-gray-700 text-center leading-relaxed text-sm">
                Enviable record for customer satisfaction with certification
                services. Friendly approach to audits and dislike of bureaucracy
                has led to unprecedented growth through referrals from satisfied
                clients.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl border border-teal-200 shadow-lg">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mb-4">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  Industry Experience
                </h3>
              </div>
              <p className="text-gray-700 text-center leading-relaxed text-sm">
                Auditors carefully allocated by their experience in the specific
                industry being audited. This results in practical, meaningful
                audits carried out in an atmosphere of mutual understanding.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 shadow-lg">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  Practical Approach
                </h3>
              </div>
              <p className="text-gray-700 text-center leading-relaxed text-sm">
                Firm belief that any audit should benefit the organization
                requesting it, not be an intellectual exercise to 'please' the
                auditor. Focus on practical improvements and real business
                value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Joint Systems Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mb-6">
              <Building className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-teal-600 mb-6">
              Joint OHSAS 18001, ISO 9001 and ISO 14001 Systems
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Integrated management systems for maximum efficiency and cost
              benefits
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">
                  Common Elements Integration
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  There are several common elements between these three systems,
                  such as management review, document control, corrective action
                  and the requirement for trained personnel. These can be
                  integrated into a single, joint system or a combination of any
                  of the above.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Management Review',
                    'Document Control',
                    'Corrective Action',
                    'Trained Personnel',
                    'Audit Procedures',
                    'Policy Framework',
                  ].map((element, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-3 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg"
                    >
                      <CheckCircle className="h-4 w-4 text-teal-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">
                        {element}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200">
                <h4 className="font-semibold text-slate-800 text-lg mb-4">
                  Integration Benefits
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Reduced duplication of processes and documentation
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Centralized document control system
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Cost benefits for third-party audits
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Streamlined management processes
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                System Integration Overview
              </h3>

              {jointSystemBenefits.map((system, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r ${system.color} p-6 rounded-2xl text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-baclk font-bold">
                        {system.system.split(' ')[1]}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2">
                        {system.system}
                      </h4>
                      <p className="text-white/90 mb-3 font-medium">
                        {system.focus}
                      </p>
                      <div className="bg-white/20 rounded-lg p-3">
                        <p className="text-sm font-medium">
                          Integration Points:
                        </p>
                        <p className="text-white/90 text-sm">
                          {system.integration}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h4 className="font-semibold text-slate-800 text-lg mb-4">
                  Audit Availability
                </h4>
                <p className="text-gray-700 leading-relaxed text-sm mb-4">
                  Integrated systems not only help an organisation internally,
                  by reducing duplication and providing a centralised document
                  control system, but may also offer cost benefits for your
                  third-party audit.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Audit of joint systems is available and may be the best method
                  for some companies seeking comprehensive management system
                  certification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Download Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-teal-700 text-white px-4">
        <div className=" max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Download Resources</h3>
              <p className="text-blue-100 leading-relaxed mb-8">
                Get started with our comprehensive self-assessment questionnaire
                to evaluate your current health and safety management systems.
              </p>

              <div className="bg-white/10 p-6 rounded-xl border border-white/20 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                    <Download className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      Self-Assessment Questionnaire
                    </h4>
                    <p className="text-blue-200 text-sm">
                      Comprehensive evaluation tool (785.1 KB)
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 text-blue-100 text-sm mb-6">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
                    <span>Identify current system gaps</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
                    <span>Assess compliance readiness</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
                    <span>Plan implementation strategy</span>
                  </li>
                </ul>

                <a
                  href="/pdfs/BSI-BSOHSAS18001-Assessment-Checklist-UK-EN.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="block w-full"
                >
                  <Button className="w-full bg-teal-600 hover:bg-teal-500 text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-center">
                    <Download className="h-5 w-5 mr-2" />
                    Download Self-Assessment Questionnaire
                  </Button>
                </a>
              </div>

              <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 p-4 rounded-xl border border-orange-400/30">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="h-5 w-5 text-orange-400" />
                  <span className="text-white font-medium">
                    Quick Response Guarantee
                  </span>
                </div>
                <p className="text-orange-100 text-sm">
                  We respond to all inquiries within 24 hours during business
                  days
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OHSAS18001Page;
