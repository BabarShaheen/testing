import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CheckCircle,
  Shield,
  AlertTriangle,
  FileSearch,
  ClipboardCheck,
  Eye,
  Phone,
  Mail,
  Clock,
  Users,
  Target,
  Award,
} from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

export function HealthSafetyPage() {
  const navigate = useNavigate();

  const healthSafetyServices = [
    {
      id: 'site-inspections',
      title: 'Site Inspections',
      badge: 'From £125',
      color: 'bg-gradient-to-br from-teal-50 to-blue-50',
      iconName: 'Eye',
      description:
        'Independent safety inspections of your sites with comprehensive reporting and on-site guidance for management teams and operatives.',
      features: [
        'Working environment assessment',
        'Welfare facilities inspection',
        'Plant and equipment evaluation',
        'Documentation review',
        'Bespoke reporting options',
        'Scoring systems available',
        'Toolbox talks included',
        'Site meeting assistance',
      ],
      pricing: 'Starting from £125 plus VAT',
      details:
        'Proactive monitoring proven to reduce accidents on site. Essential part of safety management with tailored reports to your specific requirements.',
    },
    {
      id: 'fire-risk-assessment',
      title: 'Fire Risk Assessment',
      badge: 'Legal Requirement',
      color: 'bg-gradient-to-br from-red-50 to-orange-50',
      iconName: 'AlertTriangle',
      description:
        'Comprehensive fire risk assessments to reduce risk and ensure appropriate prevention and protection arrangements are in place.',
      features: [
        'Legal compliance with RRO 2005',
        'Comprehensive site evaluation',
        'Staff consultation included',
        'Prevention strategy development',
        'Protection arrangements review',
        'Business continuity focus',
        'Experienced qualified professionals',
        'Actionable recommendations',
      ],
      pricing: 'Contact for quote',
      details:
        'Legal requirement under the Regulatory Reform (Fire Safety) Order 2005. Reduces devastating effects of accidental fires on lives, property, and business continuity.',
    },
    {
      id: 'accident-investigations',
      title: 'Accident Investigations',
      badge: 'Independent',
      color: 'bg-gradient-to-br from-yellow-50 to-amber-50',
      iconName: 'FileSearch',
      description:
        'Independent accident and near miss investigations to prevent recurrences and establish causes and contributory factors.',
      features: [
        'Scene preservation guidance',
        'Witness interviews',
        'Injured party consultations',
        'Independent reporting',
        'Recommendations provided',
        'HSE reporting assistance',
        'Multi-party investigations',
        'Immediate response available',
      ],
      pricing: 'Emergency response available',
      details:
        'Essential for preventing similar events. Independent view crucial when multiple parties involved. HSE reporting guidance included.',
    },
    {
      id: 'workplace-audits',
      title: 'Workplace Audits',
      badge: '2-3 Days',
      color: 'bg-gradient-to-br from-green-50 to-emerald-50',
      iconName: 'ClipboardCheck',
      description:
        'Thorough workplace audits providing the best starting point for managing health and safety within your organization.',
      features: [
        'Complete compliance evaluation',
        'Detailed practical advice',
        'Legal compliance assessment',
        'Insurance documentation',
        'Accreditation body evidence',
        'Annual or biennial options',
        'Improvement tracking',
        'Standards enhancement',
      ],
      pricing: '2-3 day comprehensive assessment',
      details:
        'Best starting point for health and safety management. Provides evidence for insurance companies and accreditation bodies of monitoring and review.',
    },
  ];

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Eye':
        return Eye;
      case 'AlertTriangle':
        return AlertTriangle;
      case 'FileSearch':
        return FileSearch;
      case 'ClipboardCheck':
        return ClipboardCheck;
      case 'Award':
        return Award;
      default:
        return Shield;
    }
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleServiceClick = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-teal-gradient text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-blue/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Badge className="mb-4 bg-orange/20 text-orange border-orange/30">
            Health & Safety Services
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive Health & Safety Solutions
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
            Protect your workforce, ensure compliance, and build a culture of
            safety with our expert health and safety services. From risk
            assessments to training programs, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleContactClick}
              className="bg-orange hover:bg-orange/90 text-white px-8 py-3 text-lg"
            >
              Get Free Consultation
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-teal-dark px-8 py-3 text-lg"
            >
              View Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive health and safety solutions tailored to your
              business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {healthSafetyServices.map((service) => {
              const IconComponent = getIconComponent(service.iconName);
              return (
                <div
                  key={service.id}
                  className={`rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-none ${service.color} group cursor-pointer p-6`}
                  onClick={() => handleServiceClick(service.id)}
                >
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-white/80 rounded-lg group-hover:bg-white transition-all duration-300">
                        <IconComponent className="h-12 w-12 text-orange-600" />
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-teal-700 group-hover:text-teal-600 transition-colors">
                        {service.title}
                      </h3>
                      <span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full">
                        {service.badge}
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="text-gray-600 mb-4">{service.description}</p>

                    <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                      <p className="text-sm text-blue-800 font-medium">
                        {service.details}
                      </p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-700 mb-2">
                        Key Features:
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

                    <div className="mb-4 p-3 bg-white/60 rounded-lg border border-gray-200">
                      <p className="text-sm text-gray-600 mb-1">
                        Service Details:
                      </p>
                      <p className="font-semibold text-teal-700">
                        {service.pricing}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <button
                        className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded text-sm flex-1 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleServiceClick(service.id);
                        }}
                      >
                        Learn More
                      </button>
                      <button
                        className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-4 py-2 rounded text-sm flex-1 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleContactClick();
                        }}
                      >
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

             {/* SSIP Accreditation Support Section */}
       <section id="ssip-accreditation" className="py-16 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-slate-800 mb-4">
               SSIP Accreditation Support
             </h2>
             <p className="text-lg text-gray-600 max-w-4xl mx-auto">
               CHAS, SafeContractor, Acclaim, Achilles, ConstructionLine, SMAS, EXOR & Altius
               <br />
               <strong className="text-teal-700">
                 Discounts available for multiple accreditations — Call us: 02071400015
               </strong>
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
             {/* CHAS Card */}
             <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 text-center">
               <div className="flex justify-center mb-4">
                 <div className="p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                   <Award className="h-8 w-8 text-blue-600" />
                 </div>
               </div>
               <h3 className="text-lg font-bold text-slate-800 mb-2">CHAS Accreditation</h3>
               <p className="text-sm text-gray-600 mb-4">Full application and registration help</p>
               <div className="space-y-2">
                 <div className="p-2 bg-blue-50 rounded">
                   <p className="text-sm text-gray-700">
                     Under 5 Employees – <strong className="text-blue-600">£99.99</strong>
                   </p>
                 </div>
                 <div className="p-2 bg-blue-50 rounded">
                   <p className="text-sm text-gray-700">
                     5+ Employees – <strong className="text-blue-600">£250</strong>
                   </p>
                 </div>
               </div>
             </div>

             {/* SafeContractor Card */}
             <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 text-center">
               <div className="flex justify-center mb-4">
                 <div className="p-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                   <Shield className="h-8 w-8 text-green-600" />
                 </div>
               </div>
               <h3 className="text-lg font-bold text-slate-800 mb-2">SafeContractor</h3>
               <p className="text-sm text-gray-600 mb-4">SSIP Application & Registration Support</p>
               <div className="p-3 bg-green-50 rounded">
                 <p className="text-2xl font-bold text-green-600">£299.99</p>
               </div>
             </div>

             {/* SMAS Card */}
             <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 text-center">
               <div className="flex justify-center mb-4">
                 <div className="p-3 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg">
                   <CheckCircle className="h-8 w-8 text-purple-600" />
                 </div>
               </div>
               <h3 className="text-lg font-bold text-slate-800 mb-2">SMAS WorkSafe</h3>
               <p className="text-sm text-gray-600 mb-4">Application assistance with qualified consultant</p>
               <div className="p-3 bg-purple-50 rounded">
                 <p className="text-2xl font-bold text-purple-600">£299.99</p>
               </div>
             </div>

             {/* ConstructionLine Card */}
             <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 text-center">
               <div className="flex justify-center mb-4">
                 <div className="p-3 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg">
                   <ClipboardCheck className="h-8 w-8 text-orange-600" />
                 </div>
               </div>
               <h3 className="text-lg font-bold text-slate-800 mb-2">ConstructionLine</h3>
               <p className="text-sm text-gray-600 mb-4">Full registration help & email/phone support</p>
               <div className="p-3 bg-orange-50 rounded">
                 <p className="text-2xl font-bold text-orange-600">£349.99</p>
               </div>
             </div>

             {/* Altius Card */}
             <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 text-center">
               <div className="flex justify-center mb-4">
                 <div className="p-3 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg">
                   <Target className="h-8 w-8 text-teal-600" />
                 </div>
               </div>
               <h3 className="text-lg font-bold text-slate-800 mb-2">Altius Accreditation</h3>
               <p className="text-sm text-gray-600 mb-4">SSIP help with ongoing support</p>
               <div className="p-3 bg-teal-50 rounded">
                 <p className="text-2xl font-bold text-teal-600">£ POA</p>
               </div>
             </div>
           </div>

           <div className="text-center">
             <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
               <p className="text-lg text-gray-700 mb-4">
                 <strong className="text-slate-800">All packages include honest pricing with no hidden fees.</strong>
                 <br />
                 Our consultants are Chartered or Grad IOSH with NEBOSH & Masters in Occupational Health & Safety.
               </p>
               <p className="text-lg text-gray-700 mb-6">
                 <strong className="text-slate-800">Also includes:</strong> Safety Advisory Service — Your own competent H&S advisor for under £1/day.
               </p>
               <Button
                 onClick={handleContactClick}
                 className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg"
               >
                 Get Accredited
               </Button>
             </div>
           </div>
         </div>
       </section>

       {/* Additional Benefits */}
       <section className="py-16 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-slate-800 mb-4">
               Why Choose Our Health & Safety Services?
             </h2>
             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
               Professional expertise backed by experience and legal compliance
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               {
                 icon: Award,
                 name: 'Qualified Professionals',
                 desc: 'Experienced, certified safety professionals with proven track records',
               },
               {
                 icon: Shield,
                 name: 'Legal Compliance',
                 desc: 'Ensure full compliance with current health and safety legislation',
               },
               {
                 icon: Target,
                 name: 'Tailored Solutions',
                 desc: 'Bespoke reporting and solutions designed for your specific needs',
               },
               {
                 icon: Users,
                 name: 'Expert Support',
                 desc: '24/7 support for emergency situations and ongoing consultation',
               },
             ].map((benefit, index) => {
               const IconComponent = benefit.icon;
               return (
                 <div
                   key={index}
                   className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-lg border border-teal-100 text-center"
                 >
                   <div className="flex justify-center mb-4">
                     <div className="p-3 bg-teal-600 rounded-full">
                       <IconComponent className="h-6 w-6 text-white" />
                     </div>
                   </div>
                   <h3 className="font-semibold text-teal-700 mb-2">
                     {benefit.name}
                   </h3>
                   <p className="text-gray-600 text-sm">{benefit.desc}</p>
                 </div>
               );
             })}
           </div>
         </div>
       </section>
    </div>
  );
}
