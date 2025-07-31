import { Button } from '../components/ui/button';
import {
  Leaf,
  CheckCircle,
  Users,
  Target,
  Building,
  FileText,
  TrendingUp,
  Star,
  Briefcase,
  Settings,
  BookOpen,
  Phone,
  BadgeCheck,
  Eye,
  Download,
  Award,
  Search,
  Clipboard,
  Globe,
  Recycle,
  Factory,
  TreePine,
  Zap,
  BarChart3,
} from 'lucide-react';

const implementationSteps = [
  {
    title: 'Environmental Impact Assessment',
    description:
      "Comprehensive evaluation of your organization's environmental footprint and impact across all operations.",
    icon: Search,
    highlights: [
      'Environmental impact analysis',
      'Resource usage assessment',
      'Waste stream identification',
    ],
  },
  {
    title: 'System Boundaries & Documentation',
    description:
      'Define clear environmental management system boundaries and create comprehensive procedure documentation.',
    icon: FileText,
    highlights: [
      'System scope definition',
      'Environmental procedures',
      'Legal requirement mapping',
    ],
  },
  {
    title: 'Implementation & Training',
    description:
      'Full EMS implementation with staff training and environmental awareness programs for sustainable operations.',
    icon: Users,
    highlights: [
      'EMS implementation',
      'Environmental training',
      'Awareness programs',
    ],
  },
  {
    title: 'Audit & Continuous Improvement',
    description:
      'Regular environmental audits and system reviews to maintain effectiveness and drive continuous improvement.',
    icon: Clipboard,
    highlights: [
      'Environmental auditing',
      'Performance monitoring',
      'Continuous improvement',
    ],
  },
];

const assessmentProcess = [
  {
    phase: 'Stage 1 Documentation Review',
    description:
      'Comprehensive review of environmental documentation and procedures against ISO 14001 requirements',
    duration: '2-3 days',
    icon: FileText,
  },
  {
    phase: 'Stage 2 Operational Audit',
    description:
      'On-site verification of environmental practices and operational implementation',
    duration: '2-4 days',
    icon: Eye,
  },
  {
    phase: 'Certification Issued',
    description:
      'ISO 14001 certificate issued upon successful completion of assessment process',
    duration: '1-2 weeks',
    icon: BadgeCheck,
  },
  {
    phase: 'Surveillance Audits',
    description:
      'Regular surveillance visits to ensure ongoing environmental compliance and improvement',
    duration: 'Annually',
    icon: Globe,
  },
];

const integratedSystems = [
  {
    system: 'ISO 14001',
    focus: 'Environmental Management',
    integration: 'Document control, management review',
    color: 'from-[#1BB66E] to-[#007E7A]',
  },
  {
    system: 'ISO 9001',
    focus: 'Quality Management',
    integration: 'Trained personnel, corrective action',
    color: 'from-[#007E7A] to-[#00C4B3]',
  },
];

const Iso14001Page = () => {
  return (
    <div className="min-h-screen text-[#1E2A3A]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#007E7A] via-[#00C4B3] to-[#1BB66E] text-white py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Globe className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#00C4B3] bg-clip-text text-transparent">
            ISO 14001 Environmental Management
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-[#00C4B3] mb-6">
            Low cost certification with guaranteed results
          </p>
          <p className="text-lg max-w-5xl mx-auto leading-relaxed text-white/90">
            Our EMS Consultancy is aimed at optimising systems to ensure high
            quality output. Our experienced team will review your existing
            systems to identify gaps and work with you on solutions to eliminate
            deficiencies.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-sm font-medium">✓ ISO 14001 Certified</span>
            </div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-sm font-medium">
                ✓ Environmental Excellence
              </span>
            </div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-sm font-medium">✓ Cost Reduction</span>
            </div>
          </div>
        </div>
      </section>

      {/* What is ISO 14001 Section */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#1BB66E] to-[#007E7A] rounded-full mb-6">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-[#1E2A3A] mb-6">
              What is ISO 14001 EMS?
            </h2>
            <p className="text-xl text-[#007E7A] max-w-4xl mx-auto leading-relaxed">
              The internationally recognized standard for environmental
              management of businesses
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#1BB66E]/10 to-[#00C4B3]/10 p-8 rounded-2xl shadow-lg border border-[#1BB66E]/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1BB66E] to-[#007E7A] rounded-full flex items-center justify-center">
                    <Leaf className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1E2A3A]">
                    Environmental Controls
                  </h3>
                </div>
                <p className="text-[#1E2A3A]/80 leading-relaxed">
                  ISO 14001 prescribes controls for activities that have an
                  effect on the environment, including the use of natural
                  resources, handling and treatment of waste, and energy
                  consumption.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#007E7A]/10 to-[#00C4B3]/10 p-8 rounded-2xl shadow-lg border border-[#007E7A]/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#007E7A] to-[#00C4B3] rounded-full flex items-center justify-center">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1E2A3A]">
                    International Recognition
                  </h3>
                </div>
                <p className="text-[#1E2A3A]/80 leading-relaxed">
                  Internationally recognized standard providing a framework for
                  systematic environmental management across all industries and
                  organization sizes.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#007E7A]/20">
              <h3 className="text-2xl font-bold text-[#1E2A3A] mb-6 text-center">
                Environmental Focus Areas
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: Factory,
                    title: 'Resource Management',
                    desc: 'Efficient use of natural resources',
                  },
                  {
                    icon: Recycle,
                    title: 'Waste Treatment',
                    desc: 'Proper handling and treatment of waste',
                  },
                  {
                    icon: Zap,
                    title: 'Energy Consumption',
                    desc: 'Optimization of energy usage',
                  },
                  {
                    icon: TreePine,
                    title: 'Environmental Impact',
                    desc: 'Minimizing ecological footprint',
                  },
                ].map((area, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#1BB66E]/10 to-[#00C4B3]/10 rounded-xl border-l-4 border-[#1BB66E]"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-[#1BB66E] rounded-full flex items-center justify-center">
                      <area.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1E2A3A]">
                        {area.title}
                      </h4>
                      <p className="text-[#007E7A] text-sm">{area.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-[#00C4B3]/5 to-[#1BB66E]/5 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#1BB66E] to-[#007E7A] rounded-full mb-6">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-[#1E2A3A] mb-6">
              Benefits of Implementing ISO 14001
            </h2>
            <p className="text-xl text-[#007E7A] max-w-4xl mx-auto">
              Systematic environmental management for cost savings and improved
              performance
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#1BB66E] to-[#007E7A] rounded-full flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1E2A3A] mb-3">
                    Systematic Discovery
                  </h3>
                  <p className="text-[#1E2A3A]/80 leading-relaxed">
                    Implementing an Environmental Management System provides a
                    systematic way to discover and control the effects your
                    company has on the environment.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#007E7A] to-[#00C4B3] rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1E2A3A] mb-3">
                    Cost Efficiency
                  </h3>
                  <p className="text-[#1E2A3A]/80 leading-relaxed">
                    Cost savings can be made through improved efficiency and
                    productivity, helping to reduce bills and minimize
                    environmental impact simultaneously.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#1E2A3A] to-[#007E7A] rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1E2A3A] mb-3">
                    Enhanced Credibility
                  </h3>
                  <p className="text-[#1E2A3A]/80 leading-relaxed">
                    Certification proves commitment to improving environmental
                    performance and enhances credibility with customers,
                    stakeholders, and regulatory bodies.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#007E7A]/20">
              <h3 className="text-2xl font-bold text-[#1E2A3A] mb-6 text-center">
                Environmental Impact Reduction
              </h3>
              <div className="space-y-4">
                {[
                  { metric: 'Energy Efficiency', improvement: '25%' },
                  { metric: 'Waste Reduction', improvement: '40%' },
                  { metric: 'Resource Optimization', improvement: '30%' },
                  { metric: 'Cost Savings', improvement: '20%' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center p-4 bg-gradient-to-r from-[#00C4B3]/10 to-[#1BB66E]/10 rounded-xl"
                  >
                    <span className="text-[#1E2A3A] font-medium">
                      {item.metric}
                    </span>
                    <div className="px-4 py-2 bg-gradient-to-r from-[#1BB66E] to-[#007E7A] rounded-full">
                      <span className="text-white font-bold text-sm">
                        ↓ {item.improvement}
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#007E7A] to-[#00C4B3] rounded-full mb-6">
              <Settings className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-[#1E2A3A] mb-6">
              How to Start Implementation
            </h2>
            <p className="text-xl text-[#007E7A] max-w-4xl mx-auto">
              Systematic approach to environmental management system
              implementation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {implementationSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-[#00C4B3]/5 p-6 rounded-2xl shadow-xl border border-[#007E7A]/20 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#1BB66E] to-[#007E7A] rounded-full mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-br from-[#007E7A] to-[#00C4B3] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#1E2A3A] mb-2">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-[#007E7A] leading-relaxed mb-4 text-sm">
                    {step.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-[#1E2A3A] text-sm mb-3">
                      Key Activities:
                    </h4>
                    {step.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#1BB66E] rounded-full"></div>
                        <span className="text-[#1E2A3A]/80 text-xs">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-gradient-to-br from-[#1BB66E]/10 to-[#00C4B3]/10 p-8 rounded-2xl border border-[#1BB66E]/20">
            <h3 className="text-2xl font-bold text-[#1E2A3A] text-center mb-6">
              Getting Started
            </h3>
            <div className="text-center">
              <p className="text-[#1E2A3A]/80 leading-relaxed mb-4">
                Begin by evaluating your organisation's environmental impact.
                Identify system boundaries, document procedures, implement them,
                and carry out audits. Internal audits and ongoing measurements
                are essential to system maintenance.
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1BB66E] to-[#007E7A] rounded-full text-white font-medium">
                <CheckCircle className="h-5 w-5" />
                <span>
                  Start the process to gain ISO 14001 Certification by getting a
                  no-obligation quote
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Process Section */}
      <section className="py-20 bg-gradient-to-br from-[#1E2A3A] to-[#007E7A] text-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-6">
              ISO 14001 Assessment Process
            </h2>
            <p className="text-xl text-[#00C4B3] max-w-4xl mx-auto">
              Comprehensive certification process ensuring environmental
              management excellence
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

                  <p className="text-[#00C4B3] text-sm leading-relaxed mb-4">
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
              Certification Process Details
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-white text-lg mb-4">
                  Certification Steps:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#00C4B3] text-sm">
                      Stage 1 audit of environmental documentation and
                      procedures
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#00C4B3] text-sm">
                      Stage 2 verification of operational environmental
                      practices
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#00C4B3] text-sm">
                      Certificate issuance upon successful completion
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
                    <span className="text-[#00C4B3] text-sm">
                      Surveillance audits continue post-certification
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#00C4B3] text-sm">
                      Ongoing compliance monitoring and verification
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#00C4B3] text-sm">
                      Continuous environmental performance improvement
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#F7941E] to-[#1BB66E] rounded-full mb-6">
              <Star className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-[#1E2A3A] mb-6">
              Why Choose Citrix Consultancy?
            </h2>
            <p className="text-xl text-[#007E7A] max-w-4xl mx-auto">
              Industry-focused environmental audits with transparent pricing and
              ongoing support
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#F7941E]/10 to-[#F7941E]/20 p-8 rounded-2xl border border-[#F7941E]/30 shadow-lg">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#F7941E] to-[#1BB66E] rounded-full mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1E2A3A] mb-2">
                  Friendly & Relevant Audits
                </h3>
              </div>
              <p className="text-[#1E2A3A]/80 text-center leading-relaxed text-sm">
                We offer friendly, industry-relevant audits with transparent
                pricing. Our approach focuses on environmental improvement
                rather than bureaucratic processes.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#007E7A]/10 to-[#00C4B3]/20 p-8 rounded-2xl border border-[#007E7A]/30 shadow-lg">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#007E7A] to-[#00C4B3] rounded-full mb-4">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1E2A3A] mb-2">
                  Tailored Pricing
                </h3>
              </div>
              <p className="text-[#1E2A3A]/80 text-center leading-relaxed text-sm">
                Prices vary depending on organisation size and industry. We
                provide tailored quotes after gathering information through
                questionnaire or consultation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1BB66E]/10 to-[#1BB66E]/20 p-8 rounded-2xl border border-[#1BB66E]/30 shadow-lg">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#1BB66E] to-[#007E7A] rounded-full mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1E2A3A] mb-2">
                  Ongoing Support
                </h3>
              </div>
              <p className="text-[#1E2A3A]/80 text-center leading-relaxed text-sm">
                Comprehensive support is provided between audit stages, ensuring
                successful implementation and continuous environmental
                improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Systems Section */}
      <section className="py-20 bg-gradient-to-br from-[#00C4B3]/5 to-[#1BB66E]/5 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#007E7A] to-[#00C4B3] rounded-full mb-6">
              <Building className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-[#007E7A] mb-6">
              Integrated ISO 14001 & ISO 9001 Systems
            </h2>
            <p className="text-xl text-[#1E2A3A]/80 max-w-4xl mx-auto leading-relaxed">
              Streamline management systems for enhanced efficiency and reduced
              costs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#007E7A]/20">
                <h3 className="text-2xl font-bold text-[#1E2A3A] mb-6">
                  Shared System Elements
                </h3>
                <p className="text-[#1E2A3A]/80 leading-relaxed mb-6">
                  These systems share elements like document control and trained
                  personnel. Integration simplifies management and reduces audit
                  costs. Joint audits are available for maximum efficiency.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {integratedSystems.map((system, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl bg-gradient-to-br ${system.color} text-white`}
                    >
                      <h4 className="font-bold text-sm mb-2">
                        {system.system}
                      </h4>
                      <p className="text-xs opacity-90 mb-2">{system.focus}</p>
                      <p className="text-xs opacity-80">{system.integration}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#007E7A]/20">
              <h3 className="text-2xl font-bold text-[#007E7A] mb-2">
                Integrated ISO 14001 & ISO 9000 Systems
              </h3>
              <p className="text-[#1E2A3A]/80 leading-relaxed mb-6">
                These systems share elements like document control and trained
                personnel. Integration simplifies management and reduces audit
                costs. Joint audits are available.
              </p>

              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#007E7A] mb-2">
                    Further Resources
                  </h2>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      <a
                        href="https://www.iso.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#007E7A] underline hover:text-[#00C4B3] transition-colors"
                      >
                        www.iso.org
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.letsrecycle.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#007E7A] underline hover:text-[#00C4B3] transition-colors"
                      >
                        letsrecycle.com
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.environment-agency.gov.uk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#007E7A] underline hover:text-[#00C4B3] transition-colors"
                      >
                        environment-agency.gov.uk
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.defra.gov.uk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#007E7A] underline hover:text-[#00C4B3] transition-colors"
                      >
                        defra.gov.uk
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.netregs.gov.uk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#007E7A] underline hover:text-[#00C4B3] transition-colors"
                      >
                        netregs.gov.uk
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#00C4B3]/10 p-6 rounded-xl shadow-inner border border-[#00C4B3]/20">
                  <h2 className="text-xl font-semibold text-[#007E7A] mb-4">
                    Download Self-Assessment Questionnaire
                  </h2>
                  <p className="mb-4 text-[#1E2A3A]/80">
                    This document has been designed by BSI to illustrate your
                    company's readiness for an ISO 14001 Environmental
                    Management System. Complete it to assess where you are in
                    the process.
                  </p>
                  <a
                    href="/pdfs/BSI-ISO14001-Assessment-Checklist-UK-EN.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="block"
                  >
                    <Button className="w-full bg-gradient-to-r from-[#007E7A] to-[#00C4B3] hover:from-[#00C4B3] hover:to-[#1BB66E] text-white font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl">
                      <Download className="h-5 w-5 mr-2" />
                      Download Self-Assessment Questionnaire
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ISO 14001 Environmental Management Section */}
      <section className="py-20 bg-[#F9F9F9] px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#1BB66E] to-[#007E7A] rounded-full mb-6">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#007E7A] mb-6">
              Certification to ISO 14001 Environmental Management
            </h2>
            <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-[#1E2A3A]/80">
              ISO 14001 certification brands your business as environmentally
              responsible, winning you recognition and new business
              opportunities. It helps you demonstrate how committed you are to
              reducing your environmental impacts and to meet stakeholder
              expectations of sustainability.
            </p>
          </div>

          {/* Certification Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Step 1: Gap Analysis */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#007E7A]/10 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#007E7A] to-[#00C4B3] rounded-full mb-6 mx-auto">
                <Search className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#007E7A] mb-4 text-center">
                Gap Analysis (Optional)
              </h3>
              <p className="text-[#1E2A3A]/80 leading-relaxed text-center">
                A pre-assessment where we review your current system vs ISO
                14001 requirements to identify any gaps.
              </p>
            </div>

            {/* Step 2: Formal Assessment */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#007E7A]/10 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#1BB66E] to-[#007E7A] rounded-full mb-6 mx-auto">
                <Clipboard className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#007E7A] mb-4 text-center">
                Formal Assessment (Two Stages)
              </h3>
              <p className="text-[#1E2A3A]/80 leading-relaxed text-center">
                Stage 1 checks your readiness; Stage 2 includes full on-site
                assessment for certification.
              </p>
            </div>

            {/* Step 3: Certification & Beyond */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#007E7A]/10 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#F7941E] to-[#1BB66E] rounded-full mb-6 mx-auto">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#007E7A] mb-4 text-center">
                Certification & Beyond
              </h3>
              <p className="text-[#1E2A3A]/80 leading-relaxed text-center">
                Once certified, you receive a 3-year certificate. A client
                manager provides ongoing support and improvement check-ins.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border border-[#007E7A]/10">
              <h3 className="text-2xl font-bold text-[#007E7A] mb-4">
                Ready to Start Your ISO 14001 Journey?
              </h3>
              <p className="text-[#1E2A3A]/80 leading-relaxed mb-6">
                Join thousands of organizations that have achieved ISO 14001
                certification and transformed their environmental management
                practices.
              </p>
              <Button className="bg-gradient-to-r from-[#007E7A] to-[#00C4B3] hover:from-[#00C4B3] hover:to-[#1BB66E] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl mx-auto">
                <Phone className="h-5 w-5 mr-2" />
                Get Your Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Iso14001Page;
