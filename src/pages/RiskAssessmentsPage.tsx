import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import {
  FileText,
  CheckCircle,
  ArrowRight,
  Shield,
  Award,
  Users,
  Search,
  AlertTriangle,
  Building,
  Eye,
  Wrench,
  Volume2,
  Heart,
  FlameKindling,
  Laptop,
  UserCheck,
  Settings,
  Hammer,
  Beaker,
  Construction,
} from 'lucide-react';

export function RiskAssessmentsPage() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleReadMore = () => {
    // Scroll to the main content section
    document
      .getElementById('main-content')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  const specificAssessments = [
    { name: 'Display Screen Equipment', icon: <Laptop className="h-5 w-5" /> },
    {
      name: 'Hazardous Substances',
      icon: <AlertTriangle className="h-5 w-5" />,
    },
    { name: 'Lone Working', icon: <UserCheck className="h-5 w-5" /> },
    { name: 'Fire Safety', icon: <FlameKindling className="h-5 w-5" /> },
    { name: 'Work Equipment', icon: <Settings className="h-5 w-5" /> },
    { name: 'Management of Contractors', icon: <Users className="h-5 w-5" /> },
    { name: 'Maintenance Activities', icon: <Wrench className="h-5 w-5" /> },
    { name: 'Manual Handling', icon: <Hammer className="h-5 w-5" /> },
    { name: 'Laboratory Safety', icon: <Beaker className="h-5 w-5" /> },
    { name: 'Construction Safety', icon: <Construction className="h-5 w-5" /> },
    { name: 'Noise', icon: <Volume2 className="h-5 w-5" /> },
    { name: 'First Aid', icon: <Heart className="h-5 w-5" /> },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-teal-gradient text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-blue/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Health & Safety and Fire Risk Assessment
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Shield className="h-12 w-12 text-orange mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Fixed Price</h3>
              <p className="text-gray-100 text-sm">No Hidden Extras</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <FlameKindling className="h-12 w-12 text-orange mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">
                Fire Risk Assessment
              </h3>
              <p className="text-gray-100 text-sm">Comprehensive Coverage</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Users className="h-12 w-12 text-orange mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Free Online</h3>
              <p className="text-gray-100 text-sm">Staff Training</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Award className="h-12 w-12 text-orange mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Never Knowingly</h3>
              <p className="text-gray-100 text-sm">Undersold</p>
            </div>
          </div>

          <div className="mt-12">
            <Badge className="bg-leaf-green text-white px-6 py-2 text-lg mb-6">
              Nationwide Coverage
            </Badge>
            <div>
              <Button
                size="lg"
                className="bg-orange hover:bg-orange/90 text-white px-8 py-4 text-lg"
                onClick={handleReadMore}
              >
                Read More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div id="main-content">
        {/* Accident/Incident Investigation Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Search className="h-8 w-8 text-orange mr-4" />
                  <h2 className="text-3xl font-bold text-navy-blue">
                    ACCIDENT/INCIDENT INVESTIGATION
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  The aim of any accident / incident investigation is to try and
                  establish the root cause with a view to formulating policies,
                  practices and procedures to prevent a reoccurrence.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-leaf-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-navy-blue">
                        Independent Investigation
                      </h3>
                      <p className="text-gray-600">
                        Provide an independent source for the investigation of
                        accidents and incidents.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-leaf-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-navy-blue">
                        Sympathetic Approach
                      </h3>
                      <p className="text-gray-600">
                        Skilled consultants dealing with situations in a
                        sympathetic non-confrontational manner.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-leaf-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-navy-blue">
                        Comprehensive Analysis
                      </h3>
                      <p className="text-gray-600">
                        Establish facts and causes by reference to risk
                        assessments, training records, and procedures.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-leaf-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-navy-blue">
                        Prevention Focus
                      </h3>
                      <p className="text-gray-600">
                        Reports recommend learning and action points to prevent
                        or reduce reoccurrence potential.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <AlertTriangle className="h-16 w-16 text-orange mb-6 mx-auto" />
                <h3 className="text-2xl font-bold text-navy-blue mb-4 text-center">
                  Investigation Services
                </h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-gray-600 mb-4">
                      Professional accident and incident investigation to
                      establish root causes and prevent future occurrences.
                    </p>
                  </div>
                </div>
                <Button
                  className="w-full mt-6 bg-orange hover:bg-orange/90 text-white"
                  onClick={handleContactClick}
                >
                  Request Investigation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Health and Safety Assessments Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <Shield className="h-16 w-16 text-leaf-green mb-6 mx-auto" />
                <h3 className="text-2xl font-bold text-navy-blue mb-4 text-center">
                  Health & Safety Assessment
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Starting Price:</span>
                    <span className="font-semibold text-teal-dark">£450</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Timeline:</span>
                    <span className="font-semibold text-teal-dark">
                      1-2 weeks
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Success Rate:</span>
                    <span className="font-semibold text-teal-dark">100%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Clients Served:</span>
                    <span className="font-semibold text-teal-dark">800+</span>
                  </div>
                </div>
                <Button
                  className="w-full mt-6 bg-orange hover:bg-orange/90 text-white"
                  onClick={handleContactClick}
                >
                  Get Assessment
                </Button>
              </div>
              <div>
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-leaf-green mr-4" />
                  <h2 className="text-3xl font-bold text-navy-blue">
                    HEALTH AND SAFETY ASSESSMENTS
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Our aim is to work with you to provide practical tailor-made
                  solutions to meet your needs. The Health & Safety Assessment
                  will identify the hazards and risks to your business.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-leaf-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-navy-blue">
                        Hazard Identification
                      </h3>
                      <p className="text-gray-600">
                        Comprehensive identification of hazards and risks to
                        your business.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-leaf-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-navy-blue">
                        Detailed Reports
                      </h3>
                      <p className="text-gray-600">
                        Reports produced with recommendations and action plans
                        for dealing with risks.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-leaf-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-navy-blue">
                        Safer Working Practices
                      </h3>
                      <p className="text-gray-600">
                        Guide you and your staff to safer, more efficient
                        working practices.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-leaf-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-navy-blue">
                        Legal Compliance
                      </h3>
                      <p className="text-gray-600">
                        Help you comply with the law and enhance the working
                        experience for all.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workplace Assessments Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Building className="h-8 w-8 text-teal-dark mr-4" />
                  <h2 className="text-3xl font-bold text-navy-blue">
                    WORKPLACE ASSESSMENTS
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  We will systematically and critically examine your workplace
                  and your activities to determine whether your staff or
                  visitors are at risk.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-leaf-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-navy-blue">
                        Systematic Examination
                      </h3>
                      <p className="text-gray-600">
                        Critical examination of your workplace and activities to
                        identify risks.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-leaf-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-navy-blue">
                        Risk Identification
                      </h3>
                      <p className="text-gray-600">
                        Identify significant hazards and risks with detailed
                        reporting.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-leaf-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-navy-blue">
                        Prioritized Action Plan
                      </h3>
                      <p className="text-gray-600">
                        Prioritized action plan for removing or reducing risks
                        as much as possible.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-leaf-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-navy-blue">
                        Statutory Compliance
                      </h3>
                      <p className="text-gray-600">
                        Identify how to comply with statutory breaches and best
                        practices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <Building className="h-16 w-16 text-teal-dark mb-6 mx-auto" />
                <h3 className="text-2xl font-bold text-navy-blue mb-4 text-center">
                  Workplace Safety
                </h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-gray-600 mb-4">
                      Safeguarding your business, staff and visitors through
                      comprehensive workplace assessment and risk management.
                    </p>
                    <div className="bg-white p-4 rounded-lg mb-4">
                      <p className="text-sm text-gray-700 font-medium">
                        "So far as reasonably practicable"
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        Professional assurance for your business
                      </p>
                    </div>
                  </div>
                </div>
                <Button
                  className="w-full mt-6 bg-orange hover:bg-orange/90 text-white"
                  onClick={handleContactClick}
                >
                  Book Workplace Assessment
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Specific Assessments Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-purple mr-4" />
                <h2 className="text-3xl font-bold text-navy-blue">
                  SPECIFIC ASSESSMENTS
                </h2>
              </div>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
                Our consultants have extensive experience in carrying out
                assessments in a variety of industry sectors. Whether the
                assessment takes the form of an audit or an inspection, a full
                report with recommendations and a prioritized action plan to aid
                effective implementation will always be produced.
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Areas you may require specialized help with could include:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {specificAssessments.map((assessment, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
                  onClick={handleContactClick}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange/90 transition-colors">
                      <div className="text-white">{assessment.icon}</div>
                    </div>
                    <h3 className="font-semibold text-navy-blue group-hover:text-orange transition-colors">
                      {assessment.name}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-purple hover:bg-purple/90 text-white px-8 py-3"
                onClick={handleContactClick}
              >
                Request Specific Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-blue mb-4">
                Why Choose Our Assessment Services?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive health and safety solutions with nationwide
                coverage and professional expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield className="h-8 w-8 text-white" />,
                  title: 'Legal Compliance',
                  description:
                    'Ensure compliance with health and safety regulations and statutory requirements.',
                  bgColor: 'bg-orange',
                },
                {
                  icon: <Award className="h-8 w-8 text-white" />,
                  title: 'Fixed Price Guarantee',
                  description:
                    'No hidden extras - transparent pricing you can trust.',
                  bgColor: 'bg-leaf-green',
                },
                {
                  icon: <Users className="h-8 w-8 text-white" />,
                  title: 'Free Staff Training',
                  description:
                    'Complimentary online staff training included with assessments.',
                  bgColor: 'bg-teal-dark',
                },
                {
                  icon: <FileText className="h-8 w-8 text-white" />,
                  title: 'Comprehensive Reports',
                  description:
                    'Detailed reports with prioritized action plans and recommendations.',
                  bgColor: 'bg-purple-500',
                },
                {
                  icon: <CheckCircle className="h-8 w-8 text-white" />,
                  title: 'Nationwide Coverage',
                  description:
                    'Professional services available across the entire United Kingdom.',
                  bgColor: 'bg-blue-500',
                },
                {
                  icon: <Search className="h-8 w-8 text-white" />,
                  title: 'Expert Investigation',
                  description:
                    'Skilled consultants with extensive industry experience.',
                  bgColor: 'bg-indigo-500',
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-navy-blue mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-teal-gradient text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-navy-blue/20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Secure Your Workplace?
            </h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation and discover how we can
              help you implement comprehensive health and safety risk assessment
              with nationwide coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-orange hover:bg-orange/90 text-white px-8 py-3"
                onClick={handleContactClick}
              >
                Get Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-teal-dark px-8 py-3"
                onClick={handleContactClick}
              >
                Contact Us Today
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
