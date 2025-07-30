import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
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
  ClipboardCheck,
  FileText,
  Users,
  Settings,
  Bell,
  Headphones
} from 'lucide-react';

const AcsCompliancePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-teal-dark via-teal-light to-orange py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30">
              <Shield className="w-4 h-4 mr-2" />
              SIA Approved Contractor Scheme
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              SIA ACS Compliance
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Providing a Quality System and Ongoing Consultancy. We don't just get you certified — we help you stay certified.
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
                  Providing a Quality System and Ongoing Consultancy
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  We don't just get you certified — we help you <strong className="text-teal-dark">stay certified</strong>. 
                  CitrixCo believes in long-term support after your ACS accreditation. We help you maintain up-to-date 
                  systems and prepare you for any upcoming audits.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Our support can be <strong className="text-teal-dark">remote or onsite</strong>, tailored to your needs, 
                  and covers everything from audits to regulatory updates.
                </p>
              </CardContent>
            </Card>

            {/* What Our ACS Compliance Service Includes */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-teal-light/10 to-orange/10 border-b border-gray-100">
                <CardTitle className="flex items-center gap-3 text-2xl text-teal-dark">
                  <ClipboardCheck className="w-6 h-6 text-orange" />
                  What Our ACS Compliance Service Includes
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: ClipboardCheck,
                      title: 'Initial Assessment',
                      description: 'Assessment of your compliance system'
                    },
                    {
                      icon: FileText,
                      title: 'British Standards Integration',
                      description: 'Integration of additional British Standards into your system'
                    },
                    {
                      icon: Users,
                      title: 'Quality Manager Support',
                      description: 'Acting as your Quality Manager, attending AGM meetings'
                    },
                    {
                      icon: Settings,
                      title: 'Internal Audits',
                      description: 'Internal audits and on-site system reviews'
                    },
                    {
                      icon: Zap,
                      title: 'System Updates',
                      description: 'Updating systems to match operational and business changes'
                    },
                    {
                      icon: Bell,
                      title: 'Monthly Updates',
                      description: 'Monthly newsletters and compliance updates'
                    },
                    {
                      icon: FileText,
                      title: 'Document Support',
                      description: 'Formatting and adding new documents on request'
                    },
                    {
                      icon: Users,
                      title: 'Staff Survey Support',
                      description: 'Quarterly staff survey and appraisal reporting support'
                    },
                    {
                      icon: Headphones,
                      title: 'Ongoing Support',
                      description: 'Ongoing telephone and email support for compliance queries'
                    }
                  ].map((service, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border-l-4 border-teal-dark hover:bg-teal-light/5 transition-colors duration-200">
                      <div className="w-10 h-10 bg-teal-dark text-white rounded-lg flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-teal-dark mb-1">{service.title}</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Why It Matters */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-teal-light/10 to-orange/10 border-b border-gray-100">
                <CardTitle className="flex items-center gap-3 text-2xl text-teal-dark">
                  <TrendingUp className="w-6 h-6 text-orange" />
                  Why It Matters
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Keeping your system current not only ensures compliance but builds confidence with customers 
                  and makes annual assessments smoother.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Ready for Peace of Mind */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-orange/10 to-teal-light/10 border-b border-gray-100">
                <CardTitle className="flex items-center gap-3 text-xl text-teal-dark">
                  <Star className="w-5 h-5 text-orange" />
                  Ready for Peace of Mind?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Let us handle the ongoing compliance work, so you can focus on your business.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Phone className="w-4 h-4 text-orange" />
                    <div>
                      <p className="text-sm text-gray-600">Call us at</p>
                      <p className="font-semibold text-teal-dark">0447446131794</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Mail className="w-4 h-4 text-orange" />
                    <div>
                      <p className="text-sm text-gray-600">Email us at</p>
                      <p className="font-semibold text-teal-dark">admin@citrix-consulting-limited.co.uk</p>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange to-orange/90 hover:from-orange/90 hover:to-orange text-white">
                    Request Compliance Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Key Benefits */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-orange/10 to-teal-light/10 border-b border-gray-100">
                <CardTitle className="flex items-center gap-3 text-xl text-teal-dark">
                  <Award className="w-5 h-5 text-orange" />
                  Compliance Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  {[
                    'Maintain ACS certification',
                    'Build customer confidence',
                    'Smoother annual assessments',
                    'Up-to-date compliance systems',
                    'Ongoing expert support'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-orange mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Service Features */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-orange/10 to-teal-light/10 border-b border-gray-100">
                <CardTitle className="flex items-center gap-3 text-xl text-teal-dark">
                  <Target className="w-5 h-5 text-orange" />
                  Service Features
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange mb-2">Flexible</div>
                  <p className="text-gray-700 text-sm">
                    Remote or onsite support tailored to your needs
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

export default AcsCompliancePage; 