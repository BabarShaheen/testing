import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Button } from '../components/ui/button';
import {
  Shield,
  Lock,
  Leaf,
  Award,
  Users,
  Heart,
  Scale,
  Target,
} from 'lucide-react';

export default function PoliciesPage() {
  const policies = [
    {
      title: 'Environmental Management',
      description:
        'Our commitment to continuous environmental improvement and minimizing our impact on current and future generations.',
      icon: <Leaf className="h-6 w-6 text-green-600" />,
      lastUpdated: 'January 2024',
      details:
        'Working according to ISO 14001 certification guidelines, we identify environmental impacts, set reduction targets, and prevent pollution while managing energy consumption and waste.',
      certification: 'ISO 14001',
    },
    {
      title: 'Quality Management',
      description:
        'Our commitment to delivering quality products and services that exceed client expectations.',
      icon: <Award className="h-6 w-6 text-blue-600" />,
      lastUpdated: 'January 2024',
      details:
        'Following ISO 9001 standards, we maintain clear procedures, conduct regular audits, and continuously improve our service quality through KPI monitoring.',
      certification: 'ISO 9001',
    },
    {
      title: 'Health & Safety',
      description:
        'Securing and protecting the health, safety and welfare of employees, subcontractors, and visitors.',
      icon: <Shield className="h-6 w-6 text-red-600" />,
      lastUpdated: 'January 2024',
      details:
        'Operating under OHSAS 18001 guidelines, we maintain safe working conditions and encourage active involvement in safety practices.',
      certification: 'OHSAS 18001',
    },
    {
      title: 'Equal Opportunities & Employment',
      description:
        'Committed to equal opportunities in employment and supporting diversity across our workforce.',
      icon: <Users className="h-6 w-6 text-purple-600" />,
      lastUpdated: 'January 2024',
      details:
        'Fair treatment regardless of race, religion, gender, age, or disability. We invest in training and development to help our people excel.',
      certification: null,
    },
    {
      title: 'Ethics & Integrity',
      description:
        'Building long-term relationships through honest business operations and impartial advice.',
      icon: <Scale className="h-6 w-6 text-indigo-600" />,
      lastUpdated: 'January 2024',
      details:
        'Commitment to independence, impartiality, and acting ethically with complete integrity in all business operations.',
      certification: null,
    },
    {
      title: 'Privacy Policy',
      description:
        'Learn how we collect, use, and protect your personal information.',
      icon: <Lock className="h-6 w-6 text-orange-600" />,
      lastUpdated: 'January 2024',
      details:
        'GDPR compliant data protection policies ensuring your personal information is handled with the highest standards of security.',
      certification: 'GDPR Compliant',
    },
  ];

  const commitments = [
    {
      icon: <Target className="h-8 w-8 text-green-600" />,
      title: 'Environmental Excellence',
      description:
        'Continuous improvement in environmental performance with measurable targets and pollution prevention.',
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: 'Quality Assurance',
      description:
        'Exceeding client expectations through systematic quality management and regular performance monitoring.',
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: 'Safety First',
      description:
        'Maintaining the highest standards of health and safety for all employees, contractors, and visitors.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 via-teal-700 to-blue-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Policies & Commitments
          </h1>
          <p className="text-xl text-gray-100 max-w-4xl mx-auto leading-relaxed">
            The Citrix Consultancy is committed to being a socially responsible
            business. We understand and manage our social, environmental and
            economic responsibilities through comprehensive policies and ISO
            certifications.
          </p>
        </div>
      </section>

      {/* Core Commitments */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Commitments
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We work according to ISO 9001, ISO 14001 and OHSAS 18001
              certification guidelines to ensure excellence in all aspects of
              our operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commitments.map((commitment, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
              >
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {commitment.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {commitment.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {commitment.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Comprehensive Policies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Detailed policies covering all aspects of our operations, from
              environmental management to ethical business practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {policies.map((policy, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-3">
                    {policy.icon}
                    <CardTitle className="ml-3 text-gray-900 group-hover:text-teal-700 transition-colors">
                      {policy.title}
                    </CardTitle>
                  </div>
                  {policy.certification && (
                    <div className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                      {policy.certification}
                    </div>
                  )}
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-3 font-medium">
                    {policy.description}
                  </p>
                  <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                    {policy.details}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                      Updated: {policy.lastUpdated}
                    </span>
                    <Button
                      size="sm"
                      className="bg-teal-600 hover:bg-teal-700 text-white border-0"
                    >
                      View Policy
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Responsibility Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-none shadow-xl bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
            <CardContent className="p-10">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center mr-8 flex-shrink-0">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Our Commitment to Social Responsibility
                  </h3>
                  <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                    The Citrix Consultancy recognizes that what we do today
                    affects the environment of both current and future
                    generations. We are committed to continuous improvement
                    across all areas of our business operations.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Our Directors, Managers and Employees join together in this
                    commitment to operate our environmental, quality, and safety
                    management programmes while achieving our objectives and
                    targets through measurable actions and transparent
                    reporting.
                  </p>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    We encourage and influence our clients, contractors and
                    suppliers to work with us in securing beneficial change in
                    our shared environmental and social impacts.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {/* Download Button */}
                    <a href="/docx/CCS_HSE_Manual.doc" download>
                      <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                        Download Full HSE Manual
                      </Button>
                    </a>

                    {/* Contact Button */}
                    <a href="/contact">
                      <Button
                        variant="outline"
                        className="border-teal-600 text-teal-700 hover:bg-teal-50"
                      >
                        Contact Our Team
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
