import React from 'react';
import {
  Award,
  CheckCircle,
  Shield,
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
  Phone,
  BadgeCheck,
} from 'lucide-react';

const services = [
  {
    title: 'Site Assessment & Analysis',
    description:
      'Comprehensive on-site evaluation of your current business and support procedures to identify improvement opportunities.',
    icon: Building,
    highlights: [
      'Current process review',
      'Gap analysis',
      'Improvement identification',
    ],
  },
  {
    title: 'Custom System Development',
    description:
      'Creation of tailored ISO 9001 system documentation, fully branded with your company logos and specific business information.',
    icon: FileText,
    highlights: [
      'Tailored documentation',
      'Brand integration',
      'Business-specific procedures',
    ],
  },
  {
    title: 'Training & Implementation',
    description:
      'Comprehensive staff training on procedures and documentation, with agreed timescales for system implementation and form completion.',
    icon: Users,
    highlights: [
      'Staff training programs',
      'Implementation planning',
      'Documentation guidance',
    ],
  },
  {
    title: 'Audit & Certification Support',
    description:
      'Internal audits, pre-assessment evaluations, and attendance during official assessments with 12 months ongoing telephone support.',
    icon: BadgeCheck,
    highlights: ['Internal auditing', 'Pre-assessment', 'Ongoing support'],
  },
];

const benefits = [
  {
    icon: <Award className="h-8 w-8 text-white" />,
    title: 'Competitive Advantage',
    desc: 'Stand out from competitors with internationally recognized certification that opens doors to new business opportunities.',
    color: 'from-orange to-orange/90',
  },
  {
    icon: <Shield className="h-8 w-8 text-white" />,
    title: 'Customer Confidence',
    desc: 'Build trust with clients through demonstrated commitment to quality management and professional business operations.',
    color: 'from-teal-600 to-teal-700',
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-white" />,
    title: 'Business Growth',
    desc: 'Access larger contracts with councils, government, and corporate clients who require ISO 9001 certification.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: <Target className="h-8 w-8 text-white" />,
    title: 'Process Improvement',
    desc: 'Continuously enhance business processes while monitoring and controlling service standards for optimal performance.',
    color: 'from-leaf-green to-green-600',
  },
];

const whyChooseReasons = [
  {
    title: 'Mandatory Requirement',
    description:
      'Essential for public sector contracts and supplier selection processes',
    icon: FileText,
  },
  {
    title: 'Competitive Edge',
    description:
      'Puts you ahead of non-certified competitors in the marketplace',
    icon: TrendingUp,
  },
  {
    title: 'Professional Recognition',
    description:
      'Demonstrates professional business operations to customers and suppliers',
    icon: Star,
  },
  {
    title: 'Long-term Contracts',
    description:
      'Enables securing of longer-term contracts and business planning',
    icon: Clock,
  },
];

const Iso9001Page = () => {
  return (
    <div className="min-h-screen text-gray-700">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 via-teal-700 to-navy-blue text-white py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Award className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            ISO 9001 Quality Management
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-blue-100 mb-6">
            Low cost certification with guaranteed results
          </p>
          <p className="text-lg max-w-5xl mx-auto leading-relaxed text-blue-200">
            Our QMS Consultancy optimizes systems to ensure high quality output.
            Our experienced team reviews your existing QMS to identify gaps and
            works with you on solutions to eliminate deficiencies.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-sm font-medium">✓ UKAS Certified</span>
            </div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-sm font-medium">
                ✓ Guaranteed Certification
              </span>
            </div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-sm font-medium">✓ 12 Months Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mb-6">
            <Settings className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-navy-blue mb-6">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We develop comprehensive management solutions spanning the entire
            organizational spectrum. These solutions are rooted in our extensive
            experience from years of collaboration with companies across all
            organizational types, sizes, and sectors.
          </p>
        </div>
      </section>

      {/* Why Choose ISO 9001 Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-6">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-navy-blue mb-6">
              Why Choose ISO 9001 Quality Management?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Essential certification for competitive advantage and business
              growth
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-navy-blue mb-4">
                  Mandatory for Public Sector Success
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  In many organizations, especially those in the public sector,
                  a UKAS 'UK Certification Service' certified ISO 9001 is a
                  mandatory requirement or crucial success criterion in the
                  supplier selection process.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-navy-blue mb-4">
                  Competitive Market Position
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Many businesses fail to secure contracts with councils, local
                  government, large corporate and construction companies due to
                  lack of certification. Don't be excluded from major business
                  opportunities.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-2xl shadow-xl border border-teal-100">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mb-4">
                  <BadgeCheck className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy-blue mb-4">
                  UKAS Certification Standard
                </h3>
              </div>

              <blockquote className="text-gray-700 text-center italic border-l-4 border-teal-500 pl-6 mb-6 bg-white/50 p-4 rounded-lg">
                "An evaluation body certified by UKAS has proved that it
                complies with best practice and is competent to deliver a
                consistently reliable, impartial and accurate service which
                meets the appropriate, internationally-recognised standard."
              </blockquote>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-leaf-green flex-shrink-0" />
                  <span className="text-gray-700 text-sm">
                    Demonstrates professional business operations
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-leaf-green flex-shrink-0" />
                  <span className="text-gray-700 text-sm">
                    Proves continuous improvement commitment
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-leaf-green flex-shrink-0" />
                  <span className="text-gray-700 text-sm">
                    Monitors and controls service standards
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-leaf-green flex-shrink-0" />
                  <span className="text-gray-700 text-sm">
                    Enables long-term contract security
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseReasons.map((reason, idx) => {
              const IconComponent = reason.icon;
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
                      {reason.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customer Trust Section */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-leaf-green to-green-600 rounded-full mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-navy-blue mb-6">
                Earn Your Customer's Trust
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Your customers can easily distinguish between properly run
                  companies by selecting an ISO 9001 Certified company. Your
                  customers will use this certification to define who they
                  should use for their supplier requirements.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Certification to ISO 9001 will give your customers peace of
                  mind that you are a professionally run business who looks
                  after the quality of its staff, suppliers and products.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-leaf-green/10 to-green-50 p-8 rounded-2xl border border-leaf-green/20">
              <h3 className="text-2xl font-bold text-navy-blue mb-6 text-center">
                Customer Selection Criteria
              </h3>
              <div className="space-y-4">
                {[
                  { metric: 'Quality Assurance', percentage: '95%' },
                  { metric: 'Professional Operations', percentage: '92%' },
                  { metric: 'Supplier Reliability', percentage: '89%' },
                  { metric: 'Long-term Partnership', percentage: '87%' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm"
                  >
                    <span className="text-gray-700 font-medium">
                      {item.metric}
                    </span>
                    <div className="px-4 py-2 bg-gradient-to-r from-leaf-green to-green-500 rounded-full">
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

      {/* How We Help Section */}
      <section className="py-20 bg-gradient-to-br from-navy-blue to-teal-700 text-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Briefcase className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Our Comprehensive Service Process
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              A systematic approach to achieving ISO 9001 certification with
              guaranteed results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  </div>

                  <p className="text-blue-100 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-white text-sm mb-3">
                      Key Features:
                    </h4>
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        <span className="text-blue-100 text-xs">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-bold text-center mb-8">
              Complete Service Timeline
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
              {[
                { phase: 'Site Assessment', duration: '1-2 days', step: '1' },
                {
                  phase: 'System Development',
                  duration: '5-7 days',
                  step: '2',
                },
                { phase: 'Review & Training', duration: '2-3 days', step: '3' },
                { phase: 'Implementation', duration: '4-6 weeks', step: '4' },
                {
                  phase: 'Certification Support',
                  duration: '12 months',
                  step: '5',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 p-4 rounded-xl">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-sm">
                      {item.step}
                    </span>
                  </div>
                  <h4 className="font-semibold text-white text-sm mb-2">
                    {item.phase}
                  </h4>
                  <p className="text-blue-100 text-xs">{item.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-blue mb-6">
              Key Benefits of ISO 9001 Certification
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Transformative advantages that drive business growth and market
              success
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-gradient-to-br ${benefit.color} shadow-lg`}
                  >
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy-blue mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {benefit.desc}
                  </p>
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
            <Award className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Ready to Get ISO 9001 Certified?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-blue-100 leading-relaxed">
            Start your journey to certification with our expert consultancy
            team. Low cost, guaranteed results, and comprehensive support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange to-orange/90 hover:from-orange/90 hover:to-orange text-white font-semibold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              Start Your Certification
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
              <Phone className="h-5 w-5" />
              Get Consultation
            </button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <div className="text-2xl font-bold mb-1">100%</div>
              <div className="text-sm text-blue-100">
                Certification Guarantee
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <div className="text-2xl font-bold mb-1">12</div>
              <div className="text-sm text-blue-100">Months Support</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <div className="text-2xl font-bold mb-1">Low</div>
              <div className="text-sm text-blue-100">Cost Solution</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Iso9001Page;
