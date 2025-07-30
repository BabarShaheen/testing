import React from 'react';
import {
  CheckCircle,
  ArrowRight,
  Shield,
  FileText,
  Award,
  Users,
  Zap,
  Clock,
  Star,
  AlertTriangle,
  Building,
  BookOpen,
  Phone,
  Mail,
  Eye,
  Download,
  Globe,
  Settings,
  Target,
  BadgeCheck,
  Search,
  Clipboard,
  TrendingUp,
} from 'lucide-react';

const benefits = [
  {
    icon: <Shield className="h-8 w-8 text-white" />,
    title: 'Legal Compliance',
    description:
      'Meet the Electricity at Work Regulations 1989 requirements and protect your business from legal liability.',
    bgColor: 'from-[#007E7A] to-[#00C4B3]',
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-white" />,
    title: 'Employee Safety',
    description:
      'Ensure the safety of your employees and prevent electrical accidents in the workplace.',
    bgColor: 'from-[#1BB66E] to-[#007E7A]',
  },
  {
    icon: <Award className="h-8 w-8 text-white" />,
    title: 'Professional Certification',
    description:
      'Receive comprehensive certification and computerized records for all tested appliances.',
    bgColor: 'from-[#F7941E] to-[#1BB66E]',
  },
  {
    icon: <Clock className="h-8 w-8 text-white" />,
    title: '1 Year Validity',
    description:
      'Each appliance receives a pass/fail sticker valid for up to 12 months for ongoing peace of mind.',
    bgColor: 'from-[#1E2A3A] to-[#007E7A]',
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-white" />,
    title: 'Cost-Effective',
    description:
      'Affordable bundle testing options to ensure all appliances are checked efficiently at once.',
    bgColor: 'from-[#00C4B3] to-[#1BB66E]',
  },
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: 'Peace of Mind',
    description:
      'Professional management and high-tech computerized testing equipment for complete confidence.',
    bgColor: 'from-[#007E7A] to-[#F7941E]',
  },
];

const legislation = [
  'The Health & Safety at Work Act 1974',
  'The Management of Health & Safety at Work Regulations 1999',
  'The Electricity at Work Regulations 1989',
  'The Workplace (Health, Safety and Welfare) Regulations 1992',
  'The Provision and Use of Work Equipment Regulations 1998',
];

const appliances = [
  { name: 'Kettles & Kitchen Equipment', icon: '🫖' },
  { name: 'White Goods', icon: '🔌' },
  { name: 'Vacuum Cleaners', icon: '🧹' },
  { name: 'Power Tools', icon: '🔧' },
  { name: 'Business Equipment', icon: '💻' },
  { name: 'Machinery (110v & 240v)', icon: '⚙️' },
];

const PatTestingPage = () => {
  return (
    <div className="min-h-screen text-[#1E2A3A]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#007E7A] via-[#00C4B3] to-[#1BB66E] text-white py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Zap className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#00C4B3] bg-clip-text text-transparent">
            Portable Appliance Testing (PAT Testing)
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-[#00C4B3] mb-6">
            Professional PAT Testing Company → Open 24 / 7
          </p>
          <p className="text-lg max-w-5xl mx-auto leading-relaxed text-white/90 mb-8">
            Ensure electrical safety compliance with our professional PAT
            testing services. We help protect your employees and business from
            electrical hazards while meeting legal requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#F7941E] hover:bg-[#F7941E]/90 text-white px-8 py-3 text-lg rounded-lg flex items-center gap-2 transition-all duration-300">
              Let's Explore
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-[#007E7A] px-8 py-3 text-lg rounded-lg transition-all duration-300">
              Get Quote
            </button>
          </div>
        </div>
      </section>

      {/* What is PAT Testing Section */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#1BB66E] to-[#007E7A] rounded-full mb-6">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-[#1E2A3A] mb-6">
              Electrical Portable Appliance Test (PAT)
            </h2>
            <p className="text-xl text-[#007E7A] max-w-4xl mx-auto leading-relaxed">
              Legal requirements and professional testing services for
              electrical safety
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#007E7A]/10 to-[#00C4B3]/10 p-8 rounded-2xl shadow-lg border border-[#007E7A]/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1E2A3A] to-[#007E7A] rounded-full flex items-center justify-center">
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1E2A3A]">
                    Legal Requirements
                  </h3>
                </div>
                <p className="text-[#1E2A3A]/80 leading-relaxed">
                  The Electricity At Work Regulations (EAW) came into force in
                  1989. These regulations place legal onus on every employer
                  where Portable Electrical Appliances are used to ensure they
                  are in a safe working order, to prevent injury or death.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#1BB66E]/10 to-[#00C4B3]/10 p-8 rounded-2xl shadow-lg border border-[#1BB66E]/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1BB66E] to-[#007E7A] rounded-full flex items-center justify-center">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1E2A3A]">
                    Record Keeping
                  </h3>
                </div>
                <p className="text-[#1E2A3A]/80 leading-relaxed">
                  All appliances must be regularly maintained by inspection and
                  testing. Full records are recommended to be kept. Our records
                  are fully computerized and stored in our main computer
                  database.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#007E7A]/20">
              <h3 className="text-2xl font-bold text-[#1E2A3A] mb-6 text-center">
                Appliances We Test
              </h3>
              <div className="space-y-4">
                {appliances.map((appliance, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#00C4B3]/10 to-[#1BB66E]/10 rounded-xl border-l-4 border-[#007E7A]"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-[#007E7A] rounded-full flex items-center justify-center text-lg">
                      {appliance.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1E2A3A]">
                        {appliance.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-gradient-to-r from-[#F7941E]/10 to-[#1BB66E]/10 rounded-xl">
                <p className="text-[#1E2A3A]/80 text-sm">
                  <strong>Coverage:</strong> Any item which plugs into a socket,
                  including business equipment, power tools, and household
                  appliances. Testing available for both 110v and 240v portable
                  appliances and machinery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-[#00C4B3]/5 to-[#1BB66E]/5 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#1BB66E] to-[#007E7A] rounded-full mb-6">
              <Star className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-[#1E2A3A] mb-6">
              What are the benefits of PAT testing?
            </h2>
            <p className="text-xl text-[#007E7A] max-w-4xl mx-auto">
              Comprehensive protection and peace of mind for your business
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-xl border border-[#007E7A]/20 hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${benefit.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1E2A3A] mb-4 text-center">
                  {benefit.title}
                </h3>
                <p className="text-[#1E2A3A]/80 leading-relaxed text-center text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#007E7A]/10 to-[#00C4B3]/10 p-8 rounded-2xl border border-[#007E7A]/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#1E2A3A] mb-4">
                Why Choose CiTRiX-CO?
              </h3>
              <p className="text-[#1E2A3A]/80 leading-relaxed mb-6">
                This sticker is valid for up to a year, so you know that you and
                your company are sufficiently covered for a substantial amount
                of time. Being a part of our team will really help to put your
                mind at ease. We offer a very affordable rate, and there is also
                the option to order bundle tests, to ensure that all appliances
                are being checked at once.
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1BB66E] to-[#007E7A] rounded-full text-white font-medium">
                <Shield className="h-5 w-5" />
                <span>
                  We are the only real way to protect yourself and employees,
                  all year round
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-[#1BB66E]/5 to-[#00C4B3]/5 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#00C4B3] to-[#007E7A] rounded-full mb-6">
              <Clipboard className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-[#1E2A3A] mb-6">
              PAT Testing Pricing
            </h2>
            <p className="text-xl text-[#007E7A] max-w-3xl mx-auto leading-relaxed">
              Transparent and cost-effective pricing from CiTRiX — a CHAS SSIP
              Approved Provider
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Minimum charge card */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#007E7A]/20 hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-bold text-[#1E2A3A] mb-2 text-center">
                Minimum Charge
              </h3>
              <p className="text-center text-[#F7941E] text-3xl font-bold mb-4">
                £39.99
              </p>
              <p className="text-center text-[#1E2A3A]/80 text-sm">
                Includes testing for up to 10 appliances
              </p>
            </div>

            {/* Per appliance tiers */}
            {[
              { range: '15-50', price: '£1.50' },
              { range: '51-100', price: '£1.35' },
              { range: '101-500', price: '£0.95' },
              { range: '501-1000', price: '£0.80' },
              { range: '1000+', price: '£0.75' },
            ].map((tier, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-lg border border-[#1BB66E]/20 hover:shadow-2xl transition duration-300"
              >
                <h3 className="text-xl font-bold text-[#1E2A3A] mb-2 text-center">
                  Appliances: {tier.range}
                </h3>
                <p className="text-center text-[#007E7A] text-3xl font-bold mb-4">
                  {tier.price}
                </p>
                <p className="text-center text-[#1E2A3A]/80 text-sm">
                  Per appliance
                </p>
              </div>
            ))}
          </div>

          {/* Benefits Note */}
          <div className="bg-gradient-to-br from-[#F7941E]/10 to-[#1BB66E]/10 p-8 rounded-2xl border border-[#007E7A]/20 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-[#1E2A3A] mb-4">
              What’s Included?
            </h3>
            <p className="text-[#1E2A3A]/80 max-w-3xl mx-auto mb-4">
              Each appliance receives a <strong>pass/fail sticker</strong> valid
              for <strong>1 year</strong>. A <strong>full certificate</strong>{' '}
              will be issued upon completion. Affordable bundle testing options
              ensure all your appliances are tested efficiently at once.
            </p>
            <p className="text-[#1E2A3A]/80 max-w-3xl mx-auto">
              Join our network to reduce stress and ensure legal compliance.
              We're here to keep your workplace safe and your mind at ease.
            </p>
          </div>
        </div>
      </section>

      {/* Legislation Section */}
      <section className="py-20 bg-gradient-to-br from-[#1E2A3A] to-[#007E7A] text-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-6">LEGISLATION</h2>
            <p className="text-xl text-[#00C4B3] max-w-4xl mx-auto">
              Legal requirements for business owners, landlords, and employers
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Legal Requirements</h3>
              <p className="text-[#00C4B3] leading-relaxed mb-6">
                If you are a business owner, a landlord, a public service
                provider or an employer the law requires you to take steps to
                ensure any electrical equipment you provide is safe to use. The
                legislation of specific relevance to electrical maintenance
                includes:
              </p>
              <div className="space-y-3">
                {legislation.map((law, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/90 text-sm">{law}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6">
                Our Professional Service
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00C4B3] mt-1 flex-shrink-0" />
                  <p className="text-white/90 text-sm">
                    Professional management of inspection, testing and
                    certification of all your appliances
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00C4B3] mt-1 flex-shrink-0" />
                  <p className="text-white/90 text-sm">
                    Latest high-tech computerized testing equipment which
                    exceeds tests recommended by the Regulations
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00C4B3] mt-1 flex-shrink-0" />
                  <p className="text-white/90 text-sm">
                    Testing available for 110v and 240v portable appliances and
                    machinery
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00C4B3] mt-1 flex-shrink-0" />
                  <p className="text-white/90 text-sm">
                    Each appliance receives a pass/fail sticker valid for 1 year
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00C4B3] mt-1 flex-shrink-0" />
                  <p className="text-white/90 text-sm">
                    Full certificate issued upon completion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#007E7A] via-[#00C4B3] to-[#1BB66E] text-white px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Phone className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Don't stress about workplace safety
          </h2>
          <p className="text-xl text-[#00C4B3] max-w-4xl mx-auto leading-relaxed mb-8">
            If you don't want to stress off worrying about the safety of your
            work place, and also wish to cover yourself for any injuries that
            may occur in the workplace, CiTRiX-CO has the answer to all your
            problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#F7941E] hover:bg-[#F7941E]/90 text-white px-8 py-3 text-lg rounded-lg flex items-center gap-2 transition-all duration-300">
              Get Free Consultation
              <Phone className="h-5 w-5" />
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-[#007E7A] px-8 py-3 text-lg rounded-lg transition-all duration-300 flex items-center gap-2">
              Request Quote
              <Mail className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-sm font-medium">
                ✓ 24/7 Service Available
              </span>
            </div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-sm font-medium">✓ Competitive Pricing</span>
            </div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-sm font-medium">
                ✓ Professional Certification
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PatTestingPage;
