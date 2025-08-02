import { Button } from '../../../components/ui/button';
import {
  Leaf,
  CheckCircle,
  Building,
  TrendingUp,
  Star,
  Settings,
  BookOpen,
  Phone,
  Globe,
  Download,
} from 'lucide-react';

// Import all data from the separate data file
import {
  implementationSteps,
  assessmentProcess,
  integratedSystems,
  environmentalFocusAreas,
  impactReductionMetrics,
  resourceLinks,
  heroFeatures,
  benefitsData,
  whyChooseUsData,
  certificationSteps,
  certificationProcessDetails,
  downloadInfo,
} from '../../../data/iso14001Data';
const Icon = assessmentProcess[1]?.icon;

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
            {heroFeatures.map((feature, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full"
              >
                <span className="text-sm font-medium">✓ {feature}</span>
              </div>
            ))}
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
                {environmentalFocusAreas.map((area, idx) => (
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
              {benefitsData.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${benefit.gradient} rounded-full flex items-center justify-center`}
                  >
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1E2A3A] mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-[#1E2A3A]/80 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#007E7A]/20">
              <h3 className="text-2xl font-bold text-[#1E2A3A] mb-6 text-center">
                Environmental Impact Reduction
              </h3>
              <div className="space-y-4">
                {impactReductionMetrics.map((item, idx) => (
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
              {Icon && <Icon className="h-8 w-8 text-white" />}
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
                  {certificationProcessDetails.steps.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#00C4B3] text-sm">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white text-lg mb-4">
                  Post-Certification:
                </h4>
                <ul className="space-y-3">
                  {certificationProcessDetails.postCertification.map(
                    (item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-[#00C4B3] text-sm">{item}</span>
                      </li>
                    )
                  )}
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
            {whyChooseUsData.map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${item.bgGradient} p-8 rounded-2xl border ${item.borderColor} shadow-lg`}
              >
                <div className="text-center mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-full mb-4`}
                  >
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1E2A3A] mb-2">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[#1E2A3A]/80 text-center leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
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
                    {resourceLinks.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#007E7A] underline hover:text-[#00C4B3] transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#00C4B3]/10 p-6 rounded-xl shadow-inner border border-[#00C4B3]/20">
                  <h2 className="text-xl font-semibold text-[#007E7A] mb-4">
                    {downloadInfo.title}
                  </h2>
                  <p className="mb-4 text-[#1E2A3A]/80">
                    {downloadInfo.description}
                  </p>
                  <a
                    href={downloadInfo.filePath}
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
            {certificationSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 border border-[#007E7A]/10 hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-full mb-6 mx-auto`}
                >
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#007E7A] mb-4 text-center">
                  {step.title}
                </h3>
                <p className="text-[#1E2A3A]/80 leading-relaxed text-center">
                  {step.description}
                </p>
              </div>
            ))}
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
