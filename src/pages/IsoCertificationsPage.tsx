import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import {
  Shield,
  CheckCircle,
  ArrowRight,
  Award,
  Leaf,
  Users,
} from 'lucide-react';

export function IsoCertificationsPage() {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  const services = [
    {
      id: 'iso-certifications',
      icon: <Award className="h-8 w-8 text-orange" />,
      title: 'ISO Certifications',
      description:
        'Comprehensive ISO certification services for quality, environment, and safety management.',
      price: 'From £2,500',
      badge: 'International',
    },
    {
      id: 'iso-9001',
      icon: <Shield className="h-8 w-8 text-orange" />,
      title: 'ISO 9001',
      description:
        'Quality Management System certification for operational excellence.',
      price: 'From £2,500',
      badge: 'Most Popular',
    },
    {
      id: 'iso-14001',
      icon: <Leaf className="h-8 w-8 text-orange" />,
      title: 'ISO 14001',
      description:
        'Environmental Management System certification for sustainability.',
      price: 'From £2,800',
      badge: 'Sustainable',
    },
    {
      id: 'ohsas-18001',
      icon: <Shield className="h-8 w-8 text-orange" />,
      title: 'OHSAS 18001',
      description:
        'Occupational Health and Safety Management System certification.',
      price: 'From £2,600',
      badge: 'Safety',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-teal-gradient text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-blue/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            ISO Certifications
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Professional ISO certification services for quality, environment,
            and safety management systems.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-blue mb-4">
              Our ISO Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive ISO certification services designed to help your
              business achieve international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                className="hover:shadow-xl transition-all duration-300 border-none bg-gray-50/50 group cursor-pointer"
                onClick={() => handleServiceClick(service.id)}
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-white rounded-lg group-hover:bg-teal-light/10 transition-all duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <CardTitle className="text-teal-dark group-hover:text-teal-light transition-colors">
                      {service.title}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="bg-leaf-green text-white"
                    >
                      {service.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {service.description}
                  </CardDescription>
                  <div className="mb-4 p-3 bg-white/60 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-600 mb-1">Starting from:</p>
                    <p className="font-semibold text-teal-dark">
                      {service.price}
                    </p>
                  </div>
                  <Button
                    className="w-full bg-teal-dark hover:bg-teal-dark/90 text-white transition-all-smooth"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleServiceClick(service.id);
                    }}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-blue mb-4">
              Benefits of ISO Certification
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Achieve international recognition and improve your business
              processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8 text-white" />,
                title: 'International Recognition',
                description:
                  'Gain international recognition and credibility in your industry.',
                bgColor: 'bg-orange',
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-white" />,
                title: 'Improved Processes',
                description:
                  'Streamline and improve your business processes and efficiency.',
                bgColor: 'bg-leaf-green',
              },
              {
                icon: <Shield className="h-8 w-8 text-white" />,
                title: 'Enhanced Credibility',
                description:
                  'Build trust and credibility with customers and stakeholders.',
                bgColor: 'bg-teal-dark',
              },
              {
                icon: <ArrowRight className="h-8 w-8 text-white" />,
                title: 'Competitive Advantage',
                description: 'Gain a competitive advantage in your market.',
                bgColor: 'bg-purple',
              },
              {
                icon: <Users className="h-8 w-8 text-white" />,
                title: 'Customer Confidence',
                description: 'Increase customer confidence and satisfaction.',
                bgColor: 'bg-blue',
              },
              {
                icon: <Leaf className="h-8 w-8 text-white" />,
                title: 'Operational Efficiency',
                description: 'Improve operational efficiency and reduce costs.',
                bgColor: 'bg-indigo',
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

      {/* BS OHSAS 18001 Certification Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-navy-blue mb-4">
               Certification to BS OHSAS 18001
             </h2>
             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
               Set the benchmark in occupational health and safety.
             </p>
           </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Raise standards for your staff and customers with a certificate in health and safety best practice.
                BS OHSAS 18001 is the best benchmark for occupational health and safety management.
                Achieve certification and you can prioritize staff welfare, improve customer satisfaction,
                and give your company preferred supplier status.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-navy-blue mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {[
                  'Improve employee welfare',
                  'Boost customer trust',
                  'Meet legal compliance',
                  'Gain preferred supplier status',
                  'Drive safety-first culture'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-leaf-green flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold text-navy-blue mb-6 text-center">
              Our Certification Process
            </h3>
            <div className="space-y-6">
              {[
                {
                  step: 'Step 1 – Gap Analysis (Optional)',
                  description: 'We review your current occupational health and safety system and highlight areas needing improvement.'
                },
                {
                  step: 'Step 2 – Formal Assessment',
                  description: 'Stage 1: Review documentation & preparedness. Stage 2: Assess the implementation of procedures.'
                },
                {
                  step: 'Step 3 – Certification & Beyond',
                  description: 'Receive your 3-year BS OHSAS 18001 certificate and ongoing improvement support from our client manager.'
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-8 h-8 bg-teal-dark text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-blue mb-2">{item.step}</h4>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-teal-gradient text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Contact Our Experts</h3>
            <div className="space-y-2 text-lg">
              <p><strong>CiTRiX Consultancy Services Ltd</strong></p>
              <p>272 Bath Street, Glasgow, Scotland, G2 4JR</p>
              <p>📞 02085755544 &nbsp;&nbsp;📱 07446131794</p>
              <p>
                📧{' '}
                <a 
                  href="mailto:admin@citrix-consulting-limited.co.uk"
                  className="text-orange hover:text-orange/80 underline"
                >
                  admin@citrix-consulting-limited.co.uk
                </a>
              </p>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-600">
            <p>
              © CiTRiX Consultancy Services Ltd (Company number SC472028) — Customer-focused health and safety consultants
              supporting small businesses who cannot afford a full-time H&S manager.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-blue/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Achieve ISO Certification?
          </h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and discover how we can
            help you achieve ISO certification.
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
  );
}
