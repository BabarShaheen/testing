import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  Shield, 
  TrendingUp, 
  CheckCircle, 
  Award, 
  Users, 
  Phone, 
  Mail, 
  ExternalLink,
  Leaf,
  Target,
  FileText,
  Star
} from 'lucide-react';

const Iso14001Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-teal-dark via-teal-light to-orange py-12 sm:py-16 md:py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30 text-xs sm:text-sm">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Environmental Management
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              ISO 14001 EMS
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
              The internationally recognised standard for environmental management systems. 
              Transform your business with sustainable practices and regulatory compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* What is ISO 14001 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-teal-light/10 to-orange/10 border-b border-gray-100 p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl text-teal-dark">
                  <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-orange flex-shrink-0" />
                  <span className="break-words">What is ISO 14001 EMS?</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
                  ISO 14001 is the internationally recognised standard for the environmental management of businesses. 
                  It prescribes controls for activities that affect the environment, including resource usage, waste handling, 
                  and energy consumption.
                </p>
              </CardContent>
            </Card>

                         {/* Benefits */}
             <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
               <CardHeader className="bg-gradient-to-r from-teal-light/10 to-orange/10 border-b border-gray-100 p-4 sm:p-6">
                 <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl text-teal-dark">
                   <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-orange flex-shrink-0" />
                   Key Benefits of ISO 14001 Implementation
                 </CardTitle>
               </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    'Identify and control your environmental impact',
                    'Save costs through improved efficiency',
                    'Reduce waste and energy use',
                    'Easier legal compliance',
                    'Better public image and marketing advantage'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2 sm:gap-3 p-3 bg-gray-50 rounded-lg hover:bg-teal-light/5 transition-colors duration-200">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-orange mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-xs sm:text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

                         {/* How to Start */}
             <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
               <CardHeader className="bg-gradient-to-r from-teal-light/10 to-orange/10 border-b border-gray-100 p-4 sm:p-6">
                 <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl text-teal-dark">
                   <Target className="w-5 h-5 sm:w-6 sm:h-6 text-orange flex-shrink-0" />
                   Getting Started with ISO 14001
                 </CardTitle>
               </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-teal-dark text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs sm:text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-dark text-sm sm:text-base mb-1">Initial Assessment</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">We evaluate your current environmental practices and identify areas for improvement.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-teal-dark text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs sm:text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-dark text-sm sm:text-base mb-1">System Development</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">We help you develop and implement your environmental management system.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-teal-dark text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs sm:text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-dark text-sm sm:text-base mb-1">Certification</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">We guide you through the certification process with an accredited body.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Integrated ISO 14001 & ISO 9001 Systems */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-teal-light/10 to-orange/10 border-b border-gray-100 p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl text-teal-dark">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-orange flex-shrink-0" />
                  Integrated ISO 14001 & ISO 9001 Systems
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
                  Many organizations choose to integrate their ISO 14001 environmental management system with their ISO 9001 quality management system. This approach offers several advantages:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    'Reduced documentation and administrative burden',
                    'Streamlined processes and procedures',
                    'Lower certification and maintenance costs',
                    'Better resource utilization',
                    'Enhanced stakeholder confidence'
                  ].map((advantage, index) => (
                    <div key={index} className="flex items-start gap-2 sm:gap-3 p-3 bg-gradient-to-r from-gray-50 to-white rounded-lg border-l-4 border-teal-dark hover:bg-teal-light/5 transition-colors duration-200">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-teal-dark text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                      <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{advantage}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certification to ISO 14001 Environmental Management */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-teal-light/10 to-orange/10 border-b border-gray-100 p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl text-teal-dark">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-orange flex-shrink-0" />
                  Certification to ISO 14001 Environmental Management
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-teal-dark text-sm sm:text-base">How to Get Certified</h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <span className="text-orange mt-1">•</span>
                          <span>Implement your EMS according to ISO 14001 requirements</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange mt-1">•</span>
                          <span>Conduct internal audits and management reviews</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange mt-1">•</span>
                          <span>Choose an accredited certification body</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange mt-1">•</span>
                          <span>Undergo the certification audit process</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-teal-dark text-sm sm:text-base">Gap Analysis</h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <span className="text-orange mt-1">•</span>
                          <span>Assessment of current environmental practices</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange mt-1">•</span>
                          <span>Identification of compliance gaps</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange mt-1">•</span>
                          <span>Development of action plan</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange mt-1">•</span>
                          <span>Resource and timeline planning</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-teal-dark text-sm sm:text-base">Formal Assessment</h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <span className="text-orange mt-1">•</span>
                          <span>Stage 1: Documentation review</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange mt-1">•</span>
                          <span>Stage 2: On-site audit</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange mt-1">•</span>
                          <span>Evaluation of system effectiveness</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange mt-1">•</span>
                          <span>Compliance verification</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-teal-dark text-sm sm:text-base">Certification and Beyond</h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <span className="text-orange mt-1">•</span>
                          <span>Certificate issuance (valid for 3 years)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange mt-1">•</span>
                          <span>Surveillance audits (annual)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange mt-1">•</span>
                          <span>Continuous improvement support</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange mt-1">•</span>
                          <span>Recertification preparation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Want More Info? */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-orange/10 to-teal-light/10">
              <CardContent className="p-6 sm:p-8 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-teal-dark mb-3 sm:mb-4">
                  Ready to Start Your ISO 14001 Journey?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                  Contact our expert team today for a free consultation and discover how ISO 14001 can benefit your organization.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button className="bg-gradient-to-r from-orange to-orange/90 hover:from-orange/90 hover:to-orange text-white px-6 sm:px-8 py-3 min-h-[44px] text-sm sm:text-base">
                    Get Custom Quote
                  </Button>
                  <Button variant="outline" className="border-teal-dark text-teal-dark hover:bg-teal-dark hover:text-white px-6 sm:px-8 py-3 min-h-[44px] text-sm sm:text-base">
                    Contact Our Team
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            {/* Why Choose ISO 14001 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-orange/10 to-teal-light/10 border-b border-gray-100 p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl text-teal-dark">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-orange flex-shrink-0" />
                  Why Choose ISO 14001?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-2 sm:space-y-3">
                  {[
                    'Demonstrate environmental commitment',
                    'Improve operational efficiency',
                    'Reduce environmental risks',
                    'Enhance stakeholder trust',
                    'Meet regulatory requirements',
                    'Gain competitive advantage'
                  ].map((reason, index) => (
                    <div key={index} className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-orange mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-xs sm:text-sm">{reason}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-orange/10 to-teal-light/10 border-b border-gray-100 p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl text-teal-dark">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-orange flex-shrink-0" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  Have questions about ISO 14001 implementation? Our experts are here to help.
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
                    <Phone className="w-4 h-4 text-orange" />
                    <div>
                      <p className="text-xs sm:text-sm text-gray-600">Call us at</p>
                      <p className="font-semibold text-teal-dark text-sm sm:text-base">+44 (0) 123 456 7890</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
                    <Mail className="w-4 h-4 text-orange" />
                    <div>
                      <p className="text-xs sm:text-sm text-gray-600">Email us at</p>
                      <p className="font-semibold text-teal-dark text-xs sm:text-sm break-all">info@citrixconsulting.co.uk</p>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange to-orange/90 hover:from-orange/90 hover:to-orange text-white min-h-[44px] text-sm sm:text-base">
                    Request Free Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* ISO 14001 Facts */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-orange/10 to-teal-light/10 border-b border-gray-100 p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl text-teal-dark">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-orange flex-shrink-0" />
                  ISO 14001 Facts
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-orange mb-2">300,000+</div>
                  <p className="text-gray-700 text-xs sm:text-sm">
                    Organizations certified worldwide
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

export default Iso14001Page; 