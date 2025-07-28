import React from 'react';
import {
  Shield,
  CheckCircle,
  ArrowRight,
  FileText,
  Award,
  Users,
  Target,
  Search,
  Settings,
  Star,
  Building,
  Zap,
} from 'lucide-react';

export default function SiaContractorPage() {
  const handleServiceClick = (serviceId: any) => {
    console.log('Navigate to service:', serviceId);
  };

  const handleContactClick = () => {
    console.log('Navigate to contact');
  };

  const processSteps = [
    {
      id: 'gap-analysis',
      icon: Search,
      title: 'Gap Analysis',
      description:
        'Consultant visits your organisation to review and document current processes and procedures, highlighting areas that do not meet Standard requirements.',
      color: 'bg-gradient-to-br from-blue-50 to-indigo-50',
      step: '01',
    },
    {
      id: 'implementation',
      icon: Settings,
      title: 'Implementation',
      description:
        'Make required process or procedural changes as highlighted in the review. QMS provides templates to assist you in this process.',
      color: 'bg-gradient-to-br from-teal-50 to-cyan-50',
      step: '02',
    },
    {
      id: 'certification',
      icon: Award,
      title: 'Certification',
      description:
        'Auditor visits to check that documented processes are being followed and agreed. Once satisfied, you will be awarded your certification.',
      color: 'bg-gradient-to-br from-green-50 to-emerald-50',
      step: '03',
    },
  ];

  const services = [
    {
      id: 'sia-acs-full',
      icon: Shield,
      title: 'Complete SIA ACS Certification',
      description:
        'Full end-to-end SIA ACS certification service including gap analysis, implementation, and certification audit.',
      price: 'From £3,500',
      badge: 'Complete Package',
      features: [
        'Initial gap analysis and review',
        'QMS design and implementation',
        'Documentation templates provided',
        'External certification audit',
        'Ongoing support included',
        'Certificate and plaque included',
      ],
    },
    {
      id: 'gap-analysis-service',
      icon: Search,
      title: 'Gap Analysis & Review',
      description:
        'Comprehensive review of your current processes against SIA ACS requirements with detailed action plan.',
      price: 'From £800',
      badge: 'Assessment',
      features: [
        'On-site consultant visit',
        'Current process documentation',
        'Requirements gap identification',
        'Detailed improvement plan',
        'Implementation roadmap',
        'Follow-up consultation',
      ],
    },
    {
      id: 'certification-audit',
      icon: FileText,
      title: 'Certification Audit',
      description:
        'Professional external audit service to achieve your SIA ACS certification.',
      price: 'From £1,200',
      badge: 'Final Step',
      features: [
        'Independent certification audit',
        'Process compliance verification',
        'Documentation review',
        'Staff interviews',
        'Certification recommendation',
        'Post-audit support',
      ],
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Industry Recognition',
      description:
        'Demonstrates independent assessment against recognised standards with properly trained security personnel.',
      bgColor: 'bg-teal-600',
    },
    {
      icon: Target,
      title: 'Competitive Edge',
      description:
        'Provides competitive advantage and confidence in the service you provide to potential clients.',
      bgColor: 'bg-orange-600',
    },
    {
      icon: Award,
      title: 'SIA Register Entry',
      description:
        'Entry to SIA Register of Approved Contractors, emphasising your status as a top UK security provider.',
      bgColor: 'bg-green-600',
    },
    {
      icon: Building,
      title: 'Professional Display',
      description:
        'Display approved contractor plaque/certificate and add standards to vehicles, social media, and web pages.',
      bgColor: 'bg-blue-600',
    },
    {
      icon: Users,
      title: 'Client Confidence',
      description:
        'Assures customers, partners and employees of your position as an exemplary security service provider.',
      bgColor: 'bg-purple-600',
    },
    {
      icon: Star,
      title: 'Quality Standards',
      description:
        'Based on ISO 9001 and European Foundation for Quality Management Excellence Model principles.',
      bgColor: 'bg-indigo-600',
    },
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Expert Team',
      description:
        'Team of consultants and auditors nationwide with wealth of business experience.',
    },
    {
      icon: Zap,
      title: 'Affordable Solutions',
      description:
        'Quality product with focus on adding value, not just consuming management time.',
    },
    {
      icon: CheckCircle,
      title: 'Simple Process',
      description:
        'Focus on making certification straightforward and relevant to your business.',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-teal-gradient text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-full">
              <Shield className="h-16 w-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            SIA Approved Contractor Scheme
          </h1>
          <p className="text-xl text-gray-100 max-w-4xl mx-auto mb-8">
            CiTRiX provides a simple and affordable route to SIA ACS
            certification. We are experts in the delivery of QHSE management
            systems tailored to your business.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-3xl mx-auto">
            <p className="text-lg font-medium">
              The only recognised scheme to standardise organisations operating
              within the private security sector
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-teal-600 rounded-full">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-teal-700 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QMS Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Our QMS Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple three-step process to achieve your SIA ACS certification
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.id}
                  className={`${step.color} p-6 rounded-lg border border-gray-200 relative`}
                >
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-white/80 rounded-lg">
                      <IconComponent className="h-10 w-10 text-teal-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-teal-700 mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Our SIA ACS Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive services to help you achieve and maintain SIA ACS
              certification
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group cursor-pointer p-6"
                  onClick={() => handleServiceClick(service.id)}
                >
                  <div className="text-center mb-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-teal-600 rounded-lg group-hover:bg-teal-700 transition-colors">
                        <IconComponent className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-slate-800 group-hover:text-teal-600 transition-colors">
                        {service.title}
                      </h3>
                      <span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full">
                        {service.badge}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 text-center">
                    {service.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-700 mb-2">
                      Includes:
                    </h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <p className="text-sm text-blue-800 mb-1">Investment:</p>
                    <p className="font-bold text-xl text-teal-600">
                      {service.price}
                    </p>
                  </div>

                  <button
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleServiceClick(service.id);
                    }}
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Advantages of Becoming an SIA Approved Contractor
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your potential clients are increasingly making SIA ACS approval
              mandatory for their security service providers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 ${benefit.bgColor} rounded-lg flex-shrink-0`}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About SIA ACS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                About the SIA ACS
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  The SIA ACS (Security Industry Authority Approved Contractor
                  Scheme) is the only recognised scheme to standardise
                  organisations operating within the private security sector.
                </p>
                <p>
                  The standard was designed by members of the security industry
                  in consultation with the Private Security Industry Act 2001.
                  The SIA ACS includes elements of widely recognised business
                  improvement models including ISO 9001 and the European
                  Foundation for Quality Management Excellence Model.
                </p>
                <p>
                  The scheme proves not only your competency in security
                  practices but also demonstrates your continuing investment in
                  improving your operational efficiency.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-lg border border-teal-100">
              <h3 className="text-2xl font-bold text-teal-700 mb-4">
                Key Facts
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    Only recognised standardisation scheme
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    Based on ISO 9001 standards
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    Industry-designed requirements
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    Voluntary but increasingly mandatory
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-teal-gradient text-white relative overflow-hidden animate-fade-in">
        <div className="absolute inset-0 bg-green-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Become SIA ACS Approved?
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
            Our solid experience in the field and long list of completed
            projects demonstrate our reliability as a business partner. Together
            we will drive your business development in the right direction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors"
              onClick={handleContactClick}
            >
              Make an Enquiry
            </button>
            <button
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 rounded-lg text-lg font-medium transition-colors"
              onClick={handleContactClick}
            >
              Schedule Consultation
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-lg font-medium mb-2">
              Experience! Reliability! Expertise!
            </p>
            <p className="text-gray-100">
              Our customers are the reason we're still in business, and our job
              is to serve our customers to the best of our ability.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
