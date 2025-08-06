import { useState } from 'react';
import {
  CheckCircle,
  ArrowRight,
  Shield,
  Award,
  Users,
  FileText,
  AlertTriangle,
  Eye,
  FlameKindling,
  Target,
  Star,
  TrendingUp,
  Phone,
  Zap,
  Clock,
  Globe,
  Lock,
  Download,
  BookOpen,
  Search,
} from 'lucide-react';

// Import the data (in a real app, this would be from a separate file)
const policyDocuments = [
  {
    id: 'health-safety-policy',
    name: 'Health & Safety Policy',
    icon: Shield,
    category: 'Core Policies',
    description:
      'Comprehensive health and safety policy framework for your organization',
    compliance: ['HSE Regulations', 'RIDDOR', 'COSHH'],
  },
  {
    id: 'fire-safety-policy',
    name: 'Fire Safety Policy',
    icon: FlameKindling,
    category: 'Safety Policies',
    description:
      'Fire prevention, evacuation procedures and emergency response protocols',
    compliance: ['Fire Safety Order 2005', 'Building Regulations'],
  },
  {
    id: 'lone-working-policy',
    name: 'Lone Working Policy',
    icon: Users,
    category: 'Workplace Safety',
    description: 'Guidelines and procedures for employees working alone',
    compliance: ['HSE Guidance', 'Duty of Care'],
  },
  {
    id: 'manual-handling-policy',
    name: 'Manual Handling Policy',
    icon: Users,
    category: 'Physical Safety',
    description:
      'Safe lifting, carrying and movement of materials and equipment',
    compliance: ['Manual Handling Regulations 1992'],
  },
  {
    id: 'accident-reporting-policy',
    name: 'Accident Reporting Policy',
    icon: AlertTriangle,
    category: 'Incident Management',
    description:
      'Procedures for reporting and investigating workplace accidents',
    compliance: ['RIDDOR 2013', 'Data Protection Act'],
  },
  {
    id: 'ppe-policy',
    name: 'PPE Policy',
    icon: Shield,
    category: 'Equipment Safety',
    description: 'Personal Protective Equipment selection, use and maintenance',
    compliance: ['PPE Regulations 2002', 'CE Marking'],
  },
  {
    id: 'electrical-safety-policy',
    name: 'Electrical Safety Policy',
    icon: Zap,
    category: 'Technical Safety',
    description: 'Electrical installation, maintenance and safety procedures',
    compliance: ['Electricity at Work Regulations 1989', 'BS 7671'],
  },
  {
    id: 'display-screen-policy',
    name: 'Display Screen Policy',
    icon: Eye,
    category: 'Ergonomics',
    description: 'DSE assessments and workstation setup guidelines',
    compliance: ['DSE Regulations 1992', 'Ergonomic Standards'],
  },
];

const policyServices = [
  {
    title: 'Custom Policy Development',
    description:
      'Tailored health and safety policies designed specifically for your industry and workplace requirements.',
    icon: FileText,
    bgColor: 'bg-gradient-to-br from-[#ED2568] to-[#EE343B]',
    features: [
      'Industry-specific content',
      'Legal compliance',
      'Regular updates',
      'Digital formats',
    ],
  },
  {
    title: 'Policy Review & Updates',
    description:
      'Regular review and updating of existing policies to ensure continued compliance and effectiveness.',
    icon: CheckCircle,
    bgColor: 'bg-gradient-to-br from-[#FFC857] to-[#ED2568]',
    features: [
      'Annual reviews',
      'Compliance updates',
      'Gap analysis',
      'Version control',
    ],
  },
  {
    title: 'Implementation Support',
    description:
      'Comprehensive support to help you implement new policies effectively across your organization.',
    icon: Target,
    bgColor: 'bg-gradient-to-br from-[#1C1F2A] to-[#ED2568]',
    features: [
      'Staff training',
      'Communication plans',
      'Monitoring systems',
      'Performance metrics',
    ],
  },
  {
    title: 'Digital Policy Management',
    description:
      'Modern digital solutions for policy distribution, tracking, and management across your workforce.',
    icon: Globe,
    bgColor: 'bg-gradient-to-br from-[#ED2568] to-[#FFC857]',
    features: [
      'Online access',
      'Version control',
      'Read receipts',
      'Mobile compatibility',
    ],
  },
  {
    title: 'Compliance Monitoring',
    description:
      'Ongoing monitoring and reporting to ensure your policies remain compliant with current legislation.',
    icon: TrendingUp,
    bgColor: 'bg-gradient-to-br from-[#FFC857] to-[#EE343B]',
    features: [
      'Regular audits',
      'Compliance reports',
      'Action plans',
      'Continuous improvement',
    ],
  },
  {
    title: 'Expert Consultation',
    description:
      'Access to our team of health and safety experts for guidance and support with policy matters.',
    icon: Award,
    bgColor: 'bg-gradient-to-br from-[#1C1F2A] to-[#FFC857]',
    features: [
      'Expert advice',
      'Best practice guidance',
      'Industry insights',
      '24/7 support',
    ],
  },
];

const policyBenefits = [
  {
    title: 'Legal Compliance',
    description:
      'Ensure your organization meets all current health and safety legislation requirements.',
    icon: Lock,
    stats: { value: '100%', label: 'Compliance Rate' },
  },
  {
    title: 'Risk Reduction',
    description:
      'Significantly reduce workplace risks and potential for accidents through clear policies.',
    icon: Shield,
    stats: { value: '75%', label: 'Risk Reduction' },
  },
  {
    title: 'Cost Savings',
    description:
      'Reduce insurance premiums and potential legal costs through proactive policy management.',
    icon: TrendingUp,
    stats: { value: '£50K', label: 'Average Savings' },
  },
  {
    title: 'Staff Confidence',
    description:
      'Increase employee confidence and satisfaction through clear safety guidelines.',
    icon: Users,
    stats: { value: '90%', label: 'Staff Satisfaction' },
  },
  {
    title: 'Operational Efficiency',
    description:
      'Streamline operations with clear procedures and responsibilities.',
    icon: Clock,
    stats: { value: '30%', label: 'Efficiency Gain' },
  },
  {
    title: 'Reputation Protection',
    description:
      "Protect your company's reputation through demonstrated commitment to safety.",
    icon: Award,
    stats: { value: '5★', label: 'Safety Rating' },
  },
];

const policyPackages = [
  {
    name: 'Starter Package',
    price: '£850',
    duration: '1-2 weeks',
    policies: 5,
    features: [
      '5 Core Health & Safety Policies',
      'Basic Implementation Guide',
      'Email Support',
      '1 Year Updates',
      'Digital Delivery',
    ],
    popular: false,
    color: 'from-[#1C1F2A] to-[#ED2568]',
  },
  {
    name: 'Professional Package',
    price: '£1,450',
    duration: '2-3 weeks',
    policies: 10,
    features: [
      '10 Comprehensive Policies',
      'Detailed Implementation Support',
      'Phone & Email Support',
      '2 Years Updates',
      'Training Materials Included',
      'Policy Review Session',
    ],
    popular: true,
    color: 'from-[#ED2568] to-[#EE343B]',
  },
  {
    name: 'Enterprise Package',
    price: '£2,250',
    duration: '3-4 weeks',
    policies: 15,
    features: [
      '15+ Custom Policies',
      'Full Implementation Support',
      'Dedicated Account Manager',
      'Unlimited Updates',
      'Staff Training Program',
      'Quarterly Reviews',
      '24/7 Support Hotline',
    ],
    popular: false,
    color: 'from-[#FFC857] to-[#ED2568]',
  },
];

export default function PoliciesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

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

  const categories = [
    'All',
    ...Array.from(new Set(policyDocuments.map((p) => p.category))),
  ];

  const filteredPolicies = policyDocuments.filter((policy) => {
    const matchesCategory =
      selectedCategory === 'All' || policy.category === selectedCategory;
    const matchesSearch =
      policy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      policy.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center bg-[#1C1F2A] text-white px-6 sm:px-12 lg:px-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/Images/services/policies-cover.jpg')",
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
              <FileText className="h-20 w-20 text-white" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text">
            Health & Safety
            <br />
            <span className="text-transparent bg-gradient-to-r from-[#ED2568] via-[#EE343B] to-[#FFC857] bg-clip-text">
              Policies & Procedures
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Comprehensive health and safety policies tailored to your business
            needs, ensuring legal compliance and workplace protection with
            professional implementation support.
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <FileText className="h-12 w-12 text-[#FFC857] mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Custom Policies</h3>
              <p className="text-gray-200 text-sm">Tailored Solutions</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Lock className="h-12 w-12 text-[#FFC857] mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Legal Compliance</h3>
              <p className="text-gray-200 text-sm">100% Compliant</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <BookOpen className="h-12 w-12 text-[#FFC857] mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Implementation</h3>
              <p className="text-gray-200 text-sm">Full Support</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <TrendingUp className="h-12 w-12 text-[#FFC857] mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Regular Updates</h3>
              <p className="text-gray-200 text-sm">Always Current</p>
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
                Explore Policies
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
        {/* Policy Documents Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-br from-[#ED2568] to-[#EE343B] rounded-lg">
                  <FileText className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-[#1C1F2A] mb-4">
                AVAILABLE POLICY DOCUMENTS
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                Browse our comprehensive collection of health and safety
                policies, each professionally crafted to meet current
                legislation and industry best practices.
              </p>

              {/* Search and Filter */}
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search policies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ED2568] focus:border-transparent"
                  />
                </div>
                <div className="flex gap-2 flex-wrap justify-center">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-[#ED2568] to-[#EE343B] text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Policy Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPolicies.map((policy) => (
                <div
                  key={policy.id}
                  className="bg-gradient-to-br from-[#F9F9F9] to-[#E5E6F0] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer border border-gray-100"
                  onClick={handleContactClick}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#ED2568] to-[#EE343B] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-[#FFC857] group-hover:to-[#ED2568] transition-all duration-300">
                      <policy.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-[#1C1F2A] mb-2 group-hover:text-[#ED2568] transition-colors">
                      {policy.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                      {policy.description}
                    </p>
                    <div className="flex flex-wrap gap-1 justify-center mb-4">
                      {policy.compliance.slice(0, 2).map((comp, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-white/70 text-[#1C1F2A] px-2 py-1 rounded-full"
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                    <button className="w-full bg-gradient-to-r from-[#ED2568] to-[#EE343B] hover:from-[#EE343B] hover:to-[#ED2568] text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2">
                      <Download className="h-4 w-4" />
                      Request Policy
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Policy Services Section */}
        <section className="py-16 bg-gradient-to-br from-[#F9F9F9] to-[#E5E6F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-br from-[#FFC857] to-[#ED2568] rounded-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-[#1C1F2A] mb-4">
                POLICY DEVELOPMENT SERVICES
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive policy development and management services to
                ensure your organization stays compliant and protected.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {policyServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100"
                >
                  <div className="text-center">
                    <div
                      className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1C1F2A] mb-4 group-hover:text-[#ED2568] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <CheckCircle className="h-4 w-4 text-[#ED2568] flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Policy Packages Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-br from-[#1C1F2A] to-[#ED2568] rounded-lg">
                  <Award className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-[#1C1F2A] mb-4">
                POLICY PACKAGES
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the perfect package for your organization's needs with
                transparent pricing and comprehensive support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {policyPackages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                    pkg.popular
                      ? 'border-[#ED2568] scale-105'
                      : 'border-gray-200'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-[#ED2568] to-[#EE343B] text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="p-8">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-[#1C1F2A] mb-2">
                        {pkg.name}
                      </h3>
                      <div className="text-4xl font-extrabold text-[#ED2568] mb-2">
                        {pkg.price}
                      </div>
                      <p className="text-gray-600 mb-6">
                        {pkg.duration} delivery
                      </p>

                      <div className="bg-gradient-to-r from-[#F9F9F9] to-[#E5E6F0] p-4 rounded-lg mb-6">
                        <div className="text-3xl font-bold text-[#1C1F2A] mb-1">
                          {pkg.policies}
                        </div>
                        <p className="text-gray-600 text-sm">
                          Policies Included
                        </p>
                      </div>

                      <div className="space-y-3 mb-8">
                        {pkg.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-[#ED2568] mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm text-left">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <button
                        className={`w-full bg-gradient-to-r ${pkg.color} hover:from-[#EE343B] hover:to-[#ED2568] text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg transform hover:scale-105`}
                        onClick={handleContactClick}
                      >
                        Choose {pkg.name}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gradient-to-br from-[#F9F9F9] to-[#E5E6F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-br from-[#ED2568] to-[#EE343B] rounded-lg">
                  <Star className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-[#1C1F2A] mb-4">
                Why Choose Our Policy Services?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Proven benefits that protect your business and enhance your
                operational efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {policyBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#FFC857] to-[#ED2568] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1C1F2A] mb-4 group-hover:text-[#ED2568] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm mb-6">
                      {benefit.description}
                    </p>
                    {benefit.stats && (
                      <div className="bg-gradient-to-r from-[#F9F9F9] to-[#E5E6F0] p-4 rounded-lg border border-[#ED2568]/20">
                        <div className="text-2xl font-bold text-[#ED2568] mb-1">
                          {benefit.stats.value}
                        </div>
                        <p className="text-xs text-gray-600">
                          {benefit.stats.label}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-[#1C1F2A] to-[#ED2568] rounded-lg">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#1C1F2A]">
                    POLICY IMPLEMENTATION PROCESS
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our structured approach ensures smooth policy implementation
                  across your organization with minimal disruption to daily
                  operations.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      step: '1',
                      title: 'Consultation & Assessment',
                      description:
                        'Initial consultation to understand your specific requirements and current policy status.',
                    },
                    {
                      step: '2',
                      title: 'Custom Policy Development',
                      description:
                        'Creation of tailored policies that meet your industry requirements and legal obligations.',
                    },
                    {
                      step: '3',
                      title: 'Review & Refinement',
                      description:
                        'Collaborative review process to ensure policies align with your operational needs.',
                    },
                    {
                      step: '4',
                      title: 'Implementation Support',
                      description:
                        'Comprehensive support including training materials and staff communication plans.',
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#F9F9F9] to-[#E5E6F0] rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-[#ED2568] to-[#EE343B] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1C1F2A] mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFC857]/20 to-[#ED2568]/20 rounded-2xl transform rotate-3 scale-105"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-2xl border border-[#E5E6F0]">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#1C1F2A] to-[#ED2568] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1C1F2A] mb-4">
                      Professional Implementation
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Expert guidance through every step of policy
                      implementation with ongoing support and monitoring.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gradient-to-r from-[#F9F9F9] to-[#E5E6F0] p-3 rounded-lg">
                        <div className="text-xl font-bold text-[#ED2568]">
                          1-4
                        </div>
                        <p className="text-xs text-gray-600">Weeks Delivery</p>
                      </div>
                      <div className="bg-gradient-to-r from-[#F9F9F9] to-[#E5E6F0] p-3 rounded-lg">
                        <div className="text-xl font-bold text-[#ED2568]">
                          24/7
                        </div>
                        <p className="text-xs text-gray-600">
                          Support Available
                        </p>
                      </div>
                    </div>
                    <button
                      className="w-full bg-gradient-to-r from-[#1C1F2A] to-[#ED2568] hover:from-[#ED2568] hover:to-[#1C1F2A] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg"
                      onClick={handleContactClick}
                    >
                      Start Implementation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section
          className="py-20 bg-gradient-to-r from-[#1C1F2A] to-[#ED2568] text-white relative overflow-hidden"
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
                <FileText className="h-12 w-12 text-white" />
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
              Ready to Secure Your Policies?
            </h2>

            <p className="text-xl text-gray-100 max-w-4xl mx-auto mb-10">
              Contact us today for a free consultation and discover how our
              comprehensive policy development services can protect your
              business and ensure legal compliance.
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
                Download Brochure
                <Download className="ml-2 h-5 w-5 inline" />
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#FFC857] mb-2">
                    £850
                  </div>
                  <p className="text-gray-200">Starting Price</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#ED2568] mb-2">
                    500+
                  </div>
                  <p className="text-gray-200">Policies Created</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">100%</div>
                  <p className="text-gray-200">Compliance Rate</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
