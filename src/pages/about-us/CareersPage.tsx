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
  Users,
  Mail,
  MapPin,
  Clock,
  PoundSterling,
  Calendar,
  Star,
  Award,
  CheckCircle,
  Heart,
  Target,
  Zap,
  Gift,
  Phone,
  Building,
} from 'lucide-react';
import {
  tasks,
  requirements,
  benefits,
  values,
} from '../../data/about-us/careersData'; // Adjust path as needed

const CareersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-teal-dark via-teal-light to-orange py-12 sm:py-16 md:py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30 text-xs sm:text-sm">
              <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Join Our Team
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Careers at CCS
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
              Are you passionate about marketing and diversity? Do you want to
              grow your career with a small but thriving health and safety
              consultancy in London?
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Job Introduction */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-teal-light/10 to-orange/10 border-b border-gray-100 p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl text-teal-dark">
                  <Building className="w-5 h-5 sm:w-6 sm:h-6 text-orange flex-shrink-0" />
                  <span className="break-words">
                    Marketing Assistant – Full-Time
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
                  <strong>Citrix Consultancy Services (CCS)</strong> is a
                  forward-thinking consultancy that puts inclusion, people, and
                  purpose at the heart of everything we do. We're now expanding
                  our team and looking for a{' '}
                  <strong>Marketing Assistant</strong> who's ready to make an
                  impact.
                </p>
              </CardContent>
            </Card>

            {/* What You'll Do */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-teal-light/10 to-orange/10 border-b border-gray-100 p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl text-teal-dark">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 text-orange flex-shrink-0" />
                  What You'll Do
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {tasks.map((task, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border-l-4 border-teal-dark hover:bg-teal-light/5 transition-colors duration-200"
                    >
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-teal-dark text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                      <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                        {task}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* What You Bring */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-teal-light/10 to-orange/10 border-b border-gray-100 p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl text-teal-dark">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-orange flex-shrink-0" />
                  What You Bring
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {requirements.map((requirement, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border-l-4 border-orange hover:bg-orange/5 transition-colors duration-200"
                    >
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                      <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                        {requirement}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* What We Offer */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-teal-light/10 to-orange/10 border-b border-gray-100 p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl text-teal-dark">
                  <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-orange flex-shrink-0" />
                  What We Offer
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border-l-4 border-teal-dark hover:bg-teal-light/5 transition-colors duration-200"
                    >
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-teal-dark text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                      <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-orange/10 to-teal-light/10">
              <CardContent className="p-6 sm:p-8 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-teal-dark mb-3 sm:mb-4">
                  Ready to Shape the Future of CCS?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                  If this sounds like the opportunity you've been looking for,
                  apply now and help shape the future of CCS!
                </p>
                <Button className="bg-gradient-to-r from-orange to-orange/90 hover:from-orange/90 hover:to-orange text-white px-6 sm:px-8 py-3 text-base sm:text-lg min-h-[44px] w-full sm:w-auto">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            {/* Job Details */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-orange/10 to-teal-light/10 border-b border-gray-100 p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl text-teal-dark">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-orange flex-shrink-0" />
                  Job Details
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
                    <Clock className="w-4 h-4 text-orange flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm text-gray-600">
                        Job Type
                      </p>
                      <p className="font-semibold text-teal-dark text-sm sm:text-base">
                        Full-time
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
                    <PoundSterling className="w-4 h-4 text-orange flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm text-gray-600">Salary</p>
                      <p className="font-semibold text-teal-dark text-sm sm:text-base">
                        £7.80 – £8.50 /hour
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
                    <MapPin className="w-4 h-4 text-orange flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm text-gray-600">
                        Location
                      </p>
                      <p className="font-semibold text-teal-dark text-sm sm:text-base">
                        London
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
                    <Calendar className="w-4 h-4 text-orange flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm text-gray-600">
                        Holiday
                      </p>
                      <p className="font-semibold text-teal-dark text-sm sm:text-base">
                        23 days annual
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Company Values */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-orange/10 to-teal-light/10 border-b border-gray-100 p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl text-teal-dark">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-orange flex-shrink-0" />
                  Our Values
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-2 sm:space-y-3">
                  {values.map((value, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 sm:gap-3"
                    >
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-orange mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-xs sm:text-sm">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-orange/10 to-teal-light/10 border-b border-gray-100 p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl text-teal-dark">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-orange flex-shrink-0" />
                  Apply Now
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  To apply or get in touch, contact us at:
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
                    <Mail className="w-4 h-4 text-orange flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm text-gray-600">
                        Email us at
                      </p>
                      <p className="font-semibold text-teal-dark text-xs sm:text-sm break-all">
                        admin@citrix-consulting-limited.co.uk
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
                    <Phone className="w-4 h-4 text-orange flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm text-gray-600">
                        Call us at
                      </p>
                      <p className="font-semibold text-teal-dark text-sm sm:text-base">
                        02085755544
                      </p>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange to-orange/90 hover:from-orange/90 hover:to-orange text-white min-h-[44px] text-sm sm:text-base">
                    Send Application
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Why Join Us */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-orange/10 to-teal-light/10 border-b border-gray-100 p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl text-teal-dark">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-orange flex-shrink-0" />
                  Why Join Us
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-orange mb-2">
                    Growing
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm">
                    Small but thriving consultancy with expansion opportunities
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

export default CareersPage;
