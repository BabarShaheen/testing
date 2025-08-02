import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import {
  Shield,
  Building,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Award,
  Star,
  FileText,
  Users,
} from 'lucide-react';

const InsurancePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-teal-dark via-teal-light to-orange py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30">
              <Shield className="w-4 h-4 mr-2" />
              Comprehensive Coverage
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Insurance
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              At <strong>Citrix Consultancy Services</strong>, we hold the
              appropriate insurance coverage to ensure safety, compliance, and
              peace of mind for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Insurance Coverage */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-teal-light/10 to-orange/10 border-b border-gray-100">
                <CardTitle className="flex items-center gap-3 text-2xl text-teal-dark">
                  <Shield className="w-6 h-6 text-orange" />
                  Our Insurance Coverage
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: Shield,
                      title: 'Public Liability',
                      amount: '£5,000,000',
                      description:
                        'Comprehensive protection for third-party claims',
                    },
                    {
                      icon: FileText,
                      title: 'Products Liability',
                      amount: '£5,000,000',
                      description: 'Coverage for product-related incidents',
                    },
                    {
                      icon: Users,
                      title: 'Employers Liability',
                      amount: '£10,000,000',
                      description: 'Protection for workplace-related claims',
                    },
                  ].map((coverage, index) => (
                    <div
                      key={index}
                      className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-100 hover:border-teal-dark/20 transition-all duration-300"
                    >
                      <div className="w-16 h-16 bg-teal-dark text-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <coverage.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-lg font-semibold text-teal-dark mb-2">
                        {coverage.title}
                      </h3>
                      <div className="text-3xl font-bold text-orange mb-2">
                        {coverage.amount}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {coverage.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-teal-light/10 rounded-lg border-l-4 border-teal-dark">
                  <p className="text-gray-700 leading-relaxed">
                    This comprehensive insurance allows us to confidently
                    deliver consulting services across industries with full
                    assurance of legal and operational compliance.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Business Information */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-teal-light/10 to-orange/10 border-b border-gray-100">
                <CardTitle className="flex items-center gap-3 text-2xl text-teal-dark">
                  <Building className="w-6 h-6 text-orange" />
                  Registered Business Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-teal-dark mb-2">
                      CiTRiX Consultancy Services Ltd
                    </h3>
                    <p className="text-gray-600">
                      Company Number:{' '}
                      <span className="font-semibold text-teal-dark">
                        SC472028
                      </span>
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                        <MapPin className="w-5 h-5 text-orange mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-600">Address</p>
                          <p className="font-semibold text-teal-dark">
                            272 Bath Street, Glasgow, Scotland, G2 4JR
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                        <Phone className="w-5 h-5 text-orange mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-600">Telephone</p>
                          <p className="font-semibold text-teal-dark">
                            02085755544
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                        <Phone className="w-5 h-5 text-orange mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-600">Mobile</p>
                          <p className="font-semibold text-teal-dark">
                            07446131794
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                        <Mail className="w-5 h-5 text-orange mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-600">Email</p>
                          <p className="font-semibold text-teal-dark">
                            admin@citrix-consulting-limited.co.uk
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Why Choose Us */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-orange/10 to-teal-light/10 border-b border-gray-100">
                <CardTitle className="flex items-center gap-3 text-xl text-teal-dark">
                  <Award className="w-5 h-5 text-orange" />
                  Why Choose Us
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  {[
                    'Comprehensive insurance coverage',
                    'Registered limited company',
                    'Professional indemnity protection',
                    'Client peace of mind',
                    'Regulatory compliance',
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-orange mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-orange/10 to-teal-light/10 border-b border-gray-100">
                <CardTitle className="flex items-center gap-3 text-xl text-teal-dark">
                  <Star className="w-5 h-5 text-orange" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Have questions about our insurance coverage or need to discuss
                  your project requirements?
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Phone className="w-4 h-4 text-orange" />
                    <div>
                      <p className="text-sm text-gray-600">Call us at</p>
                      <p className="font-semibold text-teal-dark">
                        02085755544
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
                    Request Insurance Certificate
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Coverage Summary */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-orange/10 to-teal-light/10 border-b border-gray-100">
                <CardTitle className="flex items-center gap-3 text-xl text-teal-dark">
                  <Shield className="w-5 h-5 text-orange" />
                  Coverage Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange mb-2">
                    £20M
                  </div>
                  <p className="text-gray-700 text-sm">
                    Total insurance coverage across all policies
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

export default InsurancePage;
