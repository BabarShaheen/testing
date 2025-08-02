import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
import {
  Shield,
  TrendingUp,
  Award,
  Phone,
  Mail,
  Target,
  Star,
  Building,
  Zap,
  ClipboardCheck,
} from 'lucide-react';

import {
  eligibleServices,
  acsCertifications,
  acsProcessSteps,
  acsDifferentiators,
  acsBenefits,
} from '../../../data/acsEligibilityData';

const AcsEligibilityPage: React.FC = () => {
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
              SIA ACS Eligibility
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              The official standard designed to regulate and improve private
              security providers in the UK. Set the recognized benchmark for
              operational excellence and legal compliance.
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
                  About SIA ACS
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  The{' '}
                  <strong className="text-teal-dark">
                    SIA Approved Contractor Scheme (ACS)
                  </strong>{' '}
                  is the only official standard designed to regulate and improve
                  private security providers in the UK. Administered under the
                  Private Security Industry Act 2001, the scheme sets a
                  recognized benchmark for operational excellence and legal
                  compliance.
                </p>
              </CardContent>
            </Card>

            {/* Who Is Eligible */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-teal-light/10 to-orange/10 border-b border-gray-100">
                <CardTitle className="flex items-center gap-3 text-2xl text-teal-dark">
                  <ClipboardCheck className="w-6 h-6 text-orange" />
                  Who Is Eligible?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  Organisations providing security services such as:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {eligibleServices.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-gradient-to-r from-gray-50 to-white rounded-lg border-l-4 border-teal-dark"
                      >
                        <div className="w-6 h-6 bg-teal-dark text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <Icon className="w-5 h-5 text-teal-dark flex-shrink-0" />
                        <span className="text-gray-700 font-medium">
                          {service.name}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <p className="text-gray-700 leading-relaxed text-lg mt-4">
                  …may apply for ACS approval, provided they meet operational,
                  training, and personnel compliance standards.
                </p>
              </CardContent>
            </Card>

            {/* Why Pursue ACS */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-teal-light/10 to-orange/10 border-b border-gray-100">
                <CardTitle className="flex items-center gap-3 text-2xl text-teal-dark">
                  <TrendingUp className="w-6 h-6 text-orange" />
                  Why Pursue ACS Certification?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {acsCertifications.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-teal-light/5 transition-colors duration-200"
                      >
                        <div
                          className={`w-8 h-8 flex items-center justify-center rounded-full ${benefit.bgColor}`}
                        >
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700">{benefit.title}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Our ACS Process */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-teal-light/10 to-orange/10 border-b border-gray-100">
                <CardTitle className="flex items-center gap-3 text-2xl text-teal-dark">
                  <Target className="w-6 h-6 text-orange" />
                  Our ACS Process
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  We guide you from application to certification with a
                  simplified and tailored experience:
                </p>
                <div className="space-y-4">
                  {acsProcessSteps.map((item, index) => (
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

            {/* What Makes Us Different */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-teal-light/10 to-orange/10 border-b border-gray-100">
                <CardTitle className="flex items-center gap-3 text-2xl text-teal-dark">
                  <Star className="w-6 h-6 text-orange" />
                  What Makes Us Different
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {acsDifferentiators.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-teal-light/5 transition-colors duration-200"
                      >
                        <div
                          className={`w-8 h-8 flex items-center justify-center rounded-full ${benefit.bgColor}`}
                        >
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700">{benefit.title}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Ready to Apply */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-orange/10 to-teal-light/10 border-b border-gray-100">
                <CardTitle className="flex items-center gap-3 text-xl text-teal-dark">
                  <Zap className="w-5 h-5 text-orange" />
                  Ready to Apply?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  We make eligibility and certification as simple as possible.
                  Start by speaking with our ACS experts for a no-obligation
                  consultation.
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
                  {acsBenefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <div
                          className={`w-7 h-7 flex items-center justify-center rounded-full ${benefit.bgColor}`}
                        >
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 text-sm">
                          {benefit.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Eligibility Check */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-orange/10 to-teal-light/10 border-b border-gray-100">
                <CardTitle className="flex items-center gap-3 text-xl text-teal-dark">
                  <ClipboardCheck className="w-5 h-5 text-orange" />
                  Eligibility Check
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange mb-2">
                    Free
                  </div>
                  <p className="text-gray-700 text-sm">
                    Initial eligibility assessment and consultation
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

export default AcsEligibilityPage;
