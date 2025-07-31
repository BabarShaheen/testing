import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import {
  Shield,
  TrendingUp,
  CheckCircle,
  Award,
  Phone,
  Mail,
  Target,
  Star,
  Building,
  Zap,
} from 'lucide-react';

const SiaAcsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-teal-dark via-teal-light to-orange py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30">
              <Shield className="w-4 h-4 mr-2" />
              Security Industry Authority
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              SIA ACS Approved Contractor Scheme
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Raise performance standards and gain recognition as a trusted
              private security provider through the SIA's voluntary Approved
              Contractor Scheme.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-teal-light/10 to-orange/10 border-b border-gray-100">
                <CardTitle className="flex items-center gap-3 text-2xl text-teal-dark">
                  <Building className="w-6 h-6 text-orange" />
                  About the SIA ACS Scheme
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  The Security Industry Authority (SIA), established by the
                  Private Security Industry Act 2001, regulates the private
                  security industry across the UK. One of its key programs is
                  the
                  <strong className="text-teal-dark">
                    {' '}
                    Approved Contractor Scheme (ACS)
                  </strong>{' '}
                  — a voluntary program designed to raise performance standards
                  and help buyers identify trusted private security providers.
                </p>
              </CardContent>
            </Card>

            {/* What is ACS */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-teal-light/10 to-orange/10 border-b border-gray-100">
                <CardTitle className="flex items-center gap-3 text-2xl text-teal-dark">
                  <Award className="w-6 h-6 text-orange" />
                  What is the ACS Scheme?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-teal-light/5 transition-colors duration-200">
                    <CheckCircle className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      A voluntary accreditation awarded to security companies
                      that meet defined standards.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-teal-light/5 transition-colors duration-200">
                    <CheckCircle className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      ACS-approved companies are assessed annually on
                      performance, compliance, and customer service.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-teal-light/5 transition-colors duration-200">
                    <CheckCircle className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Only those maintaining these standards can advertise
                      themselves as Approved Contractors.
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Become Approved */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-teal-light/10 to-orange/10 border-b border-gray-100">
                <CardTitle className="flex items-center gap-3 text-2xl text-teal-dark">
                  <TrendingUp className="w-6 h-6 text-orange" />
                  Why Become an Approved Contractor?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Gain recognition as a trusted, professional security provider',
                    'Stand out in tenders requiring ACS accreditation',
                    'Improve operational standards through independent assessment',
                    'Legally deploy up to 15% of staff with pending SIA licenses',
                    'Demonstrates commitment to lawful, ethical, and high-quality service',
                  ].map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-teal-light/5 transition-colors duration-200"
                    >
                      <CheckCircle className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Eligible Services */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-teal-light/10 to-orange/10 border-b border-gray-100">
                <CardTitle className="flex items-center gap-3 text-2xl text-teal-dark">
                  <Shield className="w-6 h-6 text-orange" />
                  What Services Are Eligible?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  Companies offering services in the following areas are
                  eligible to apply:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'Security Guarding (BS 7499)',
                    'Door Supervision (BS 7960)',
                    'CCTV Operation (BS 7958)',
                    'Close Protection',
                    'Keyholding & Alarm Response (BS 7984)',
                    'Cash & Valuables in Transit (BS 7872)',
                    'Private Investigations',
                    'Vehicle Immobilisation (Northern Ireland)',
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gradient-to-r from-gray-50 to-white rounded-lg border-l-4 border-teal-dark"
                    >
                      <div className="w-6 h-6 bg-teal-dark text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 font-medium">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Our Approach */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-teal-light/10 to-orange/10 border-b border-gray-100">
                <CardTitle className="flex items-center gap-3 text-2xl text-teal-dark">
                  <Target className="w-6 h-6 text-orange" />
                  Our Approach to ACS Certification
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  We provide complete, hands-on support for your ACS approval.
                  Our process includes:
                </p>
                <div className="space-y-4">
                  {[
                    {
                      step: 'Site Visit & System Drafting',
                      description:
                        'We review your business procedures and design a tailored ACS system with your branding.',
                    },
                    {
                      step: 'Documentation Walkthrough',
                      description:
                        'We train your team on each procedure, finalizing forms like supplier lists and action plans.',
                    },
                    {
                      step: 'Pre-Assessment Check',
                      description:
                        'We ensure everything is aligned before official evaluation.',
                    },
                    {
                      step: 'Assessment Day Attendance',
                      description:
                        'Our assessor will be present on the first day of your assessment.',
                    },
                    {
                      step: '12-Month Support',
                      description:
                        'Continued guidance post-certification to keep your system compliant and up-to-date.',
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border-l-4 border-orange"
                    >
                      <div className="w-8 h-8 bg-orange text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-teal-dark mb-1">
                          {item.step}
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-teal-light/10 to-orange/10 border-b border-gray-100">
                <CardTitle className="flex items-center gap-3 text-2xl text-teal-dark">
                  <Star className="w-6 h-6 text-orange" />
                  Why Choose Us for ACS Certification?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    '100% success rate in achieving ACS approval for our clients',
                    'Fixed pricing — transparent, competitive, no hidden costs',
                    'Experienced assessors who provide clear, actionable feedback',
                    'Many clients exceed the 136+ point threshold and qualify as ACS Pacesetters',
                    'Simple onboarding and transfer process from other bodies',
                    'ISO 9001 Passport Route available for streamlined approval',
                  ].map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-teal-light/5 transition-colors duration-200"
                    >
                      <CheckCircle className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Get Started */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-orange/10 to-teal-light/10 border-b border-gray-100">
                <CardTitle className="flex items-center gap-3 text-xl text-teal-dark">
                  <Zap className="w-5 h-5 text-orange" />
                  Get Started with ACS Today
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Whether you're new to ACS or ready to transfer, we'll make the
                  process simple. Get in touch for a consultation or quote
                  tailored to your company.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Phone className="w-4 h-4 text-orange" />
                    <div>
                      <p className="text-sm text-gray-600">Call us at</p>
                      <p className="font-semibold text-teal-dark">
                        0447446131794
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Mail className="w-4 h-4 text-orange" />
                    <div>
                      <p className="text-sm text-gray-600">Email us at</p>
                      <p className="font-semibold text-teal-dark">
                        admin@citrix-consulting-limited.co.uk
                      </p>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange to-orange/90 hover:from-orange/90 hover:to-orange text-white">
                    Request ACS Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Key Benefits */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-orange/10 to-teal-light/10 border-b border-gray-100">
                <CardTitle className="flex items-center gap-3 text-xl text-teal-dark">
                  <Award className="w-5 h-5 text-orange" />
                  ACS Key Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  {[
                    'Professional recognition and credibility',
                    'Competitive advantage in tenders',
                    'Legal deployment flexibility (15% pending licenses)',
                    'Annual performance assessment',
                    'Enhanced operational standards',
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-orange mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Success Rate */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-orange/10 to-teal-light/10 border-b border-gray-100">
                <CardTitle className="flex items-center gap-3 text-xl text-teal-dark">
                  <TrendingUp className="w-5 h-5 text-orange" />
                  Our Success Rate
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange mb-2">
                    100%
                  </div>
                  <p className="text-gray-700 text-sm">
                    Success rate in achieving ACS approval for our clients
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiaAcsPage;
