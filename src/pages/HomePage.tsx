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
  CheckCircle,
  Star,
  ArrowRight,
  Users,
  TrendingUp,
  Clock,
  Shield,
  Award,
} from 'lucide-react';
import { useEffect } from 'react';

export function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Component mounted successfully
  }, []);

  const handleServiceClick = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
  };

  const handleNavClick = (page: string) => {
    navigate(`/${page}`);
  };

  const services = [
    {
      id: 'iso-9001',
      icon: (
        <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-orange transition-transform group-hover:scale-110" />
      ),
      title: 'ISO 9001 Certification',
      description:
        'Quality management system certification to improve your processes and customer satisfaction.',
      price: 'From £2,500',
      badge: 'Most Popular',
    },
    {
      id: 'chas-accreditation',
      icon: (
        <Award className="h-6 w-6 sm:h-8 sm:w-8 text-orange transition-transform group-hover:scale-110" />
      ),
      title: 'CHAS Accreditation',
      description:
        'Health and safety assessment for construction industry compliance.',
      price: 'From £1,800',
      badge: 'Essential',
    },
    {
      id: 'fire-risk-assessment',
      icon: (
        <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-orange transition-transform group-hover:scale-110" />
      ),
      title: 'Fire Risk Assessment',
      description:
        'Comprehensive fire safety assessments to ensure compliance.',
      price: 'From £450',
      badge: 'Required',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'BuildTech Solutions',
      content:
        'CCS helped us achieve ISO 9001 certification smoothly. Their expertise and support were invaluable.',
      rating: 5,
    },
    {
      name: 'Mike Thompson',
      company: 'SecureGuard Ltd',
      content:
        'Outstanding service for our CHAS accreditation. Professional, efficient, and results-driven.',
      rating: 5,
    },
    {
      name: 'Emma Wilson',
      company: 'TechFlow Industries',
      content:
        'The fire risk assessment was thorough and helped us implement crucial safety measures.',
      rating: 5,
    },
  ];

  const stats = [
    { number: '500+', label: 'Clients Served' },
    { number: '98%', label: 'Success Rate' },
    { number: '15+', label: 'Years Experience' },
    { number: '24hr', label: 'Response Time' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-teal-gradient text-white py-12 sm:py-16 md:py-20 relative overflow-hidden animate-fade-in">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-navy-blue/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-16 h-16 bg-orange/20 rounded-full animate-float"
          style={{ animationDelay: '1s' }}
        ></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-teal-light/30 rounded-full animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="animate-fade-in-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Professional
                <span className="text-orange block gradient-text">
                  Compliance
                </span>
                Solutions
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 sm:mb-8 max-w-lg leading-relaxed">
                Expert safety, accreditation, and compliance services to help
                your business meet regulatory requirements and achieve
                operational excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                <Button
                  size="lg"
                  className="bg-orange hover:bg-orange/90 text-white px-6 sm:px-8 py-3 min-h-[44px] text-sm sm:text-base btn-premium transition-all-smooth"
                  onClick={() => handleNavClick('contact')}
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-teal-dark px-6 sm:px-8 py-3 min-h-[44px] text-sm sm:text-base transition-all-smooth hover-lift"
                  onClick={() => handleNavClick('services')}
                >
                  View Services
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs sm:text-sm">
                <div
                  className="flex items-center animate-fade-in-up"
                  style={{ animationDelay: '0.6s' }}
                >
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-leaf-green mr-2 animate-bounce-in" />
                  <span>UK Based</span>
                </div>
                <div
                  className="flex items-center animate-fade-in-up"
                  style={{ animationDelay: '0.8s' }}
                >
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-leaf-green mr-2 animate-bounce-in" />
                  <span>Expert Team</span>
                </div>
                <div
                  className="flex items-center animate-fade-in-up"
                  style={{ animationDelay: '1s' }}
                >
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-leaf-green mr-2 animate-bounce-in" />
                  <span>Proven Results</span>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-right">
              <div className="glass rounded-xl p-4 sm:p-6 md:p-8 border border-white/20 hover-lift">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="text-center animate-fade-in-up"
                      style={{ animationDelay: `${0.8 + index * 0.2}s` }}
                    >
                      <div className="text-2xl sm:text-3xl font-bold text-orange mb-1 sm:mb-2 animate-bounce-in">
                        {stat.number}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-200">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-12 sm:py-16 bg-white animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Our Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive compliance and safety solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card
                key={service.id}
                className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-premium animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleServiceClick(service.id)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 bg-orange/10 rounded-lg group-hover:bg-orange/20 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <Badge className="text-xs bg-orange/10 text-orange border-orange/20">
                      {service.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-navy-blue group-hover:text-teal-dark transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-orange">{service.price}</span>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-orange group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 bg-gray-50 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              What Our Clients Say
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted by businesses across the UK for their compliance and safety needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-orange fill-current" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-navy-blue text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-teal-gradient text-white animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-base sm:text-lg text-gray-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Contact our expert team today for a free consultation and discover how we can help your business achieve compliance excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange hover:bg-orange/90 text-white px-6 sm:px-8 py-3 min-h-[44px] text-sm sm:text-base transition-all-smooth"
              onClick={() => handleNavClick('contact')}
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-teal-dark px-6 sm:px-8 py-3 min-h-[44px] text-sm sm:text-base transition-all-smooth"
              onClick={() => handleNavClick('services')}
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
