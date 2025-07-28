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
        <Shield className="h-8 w-8 text-orange transition-transform group-hover:scale-110" />
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
        <Award className="h-8 w-8 text-orange transition-transform group-hover:scale-110" />
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
        <CheckCircle className="h-8 w-8 text-orange transition-transform group-hover:scale-110" />
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
      <section className="bg-teal-gradient text-white py-20 relative overflow-hidden animate-fade-in">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-navy-blue/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-16 h-16 bg-orange/20 rounded-full animate-float"
          style={{ animationDelay: '1s' }}
        ></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-teal-light/30 rounded-full animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Professional
                <span className="text-orange block gradient-text">
                  Compliance
                </span>
                Solutions
              </h1>
              <p className="text-xl text-gray-100 mb-8 max-w-lg leading-relaxed">
                Expert safety, accreditation, and compliance services to help
                your business meet regulatory requirements and achieve
                operational excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-orange hover:bg-orange/90 text-white px-8 py-3 btn-premium transition-all-smooth"
                  onClick={() => handleNavClick('contact')}
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-teal-dark px-8 py-3 transition-all-smooth hover-lift"
                  onClick={() => handleNavClick('services')}
                >
                  View Services
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div
                  className="flex items-center animate-fade-in-up"
                  style={{ animationDelay: '0.6s' }}
                >
                  <CheckCircle className="h-5 w-5 text-leaf-green mr-2 animate-bounce-in" />
                  <span>UK Based</span>
                </div>
                <div
                  className="flex items-center animate-fade-in-up"
                  style={{ animationDelay: '0.8s' }}
                >
                  <CheckCircle className="h-5 w-5 text-leaf-green mr-2 animate-bounce-in" />
                  <span>Expert Team</span>
                </div>
                <div
                  className="flex items-center animate-fade-in-up"
                  style={{ animationDelay: '1s' }}
                >
                  <CheckCircle className="h-5 w-5 text-leaf-green mr-2 animate-bounce-in" />
                  <span>Proven Results</span>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-right">
              <div className="glass rounded-xl p-8 border border-white/20 hover-lift">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="text-center animate-fade-in-up"
                      style={{ animationDelay: `${0.8 + index * 0.2}s` }}
                    >
                      <div className="text-3xl font-bold text-orange mb-2 animate-bounce-in">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-200">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-blue mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive compliance solutions designed to help your business
              meet regulatory requirements and achieve operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.id}
                className={`card-premium hover:shadow-xl transition-all duration-300 border-none bg-gray-50/50 group cursor-pointer animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => handleServiceClick(service.id)}
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-white rounded-lg group-hover:bg-teal-light/10 transition-all duration-300 hover-scale">
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <CardTitle className="text-teal-dark group-hover:text-teal-light transition-colors">
                      {service.title}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="bg-leaf-green text-white animate-bounce-in"
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
                    className="w-full bg-teal-dark hover:bg-teal-dark/90 text-white transition-all-smooth hover-lift"
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

          <div
            className="text-center mt-12 animate-fade-in-up"
            style={{ animationDelay: '0.8s' }}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-teal-dark text-teal-dark hover:bg-teal-dark hover:text-white px-8 py-3 transition-all-smooth hover-lift"
              onClick={() => handleNavClick('services')}
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose CCS */}
      <section className="py-16 bg-gray-50 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-blue mb-4">
              Why Choose CCS?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to helping your business achieve compliance and
              operational excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8 text-white" />,
                title: 'Expert Team',
                description:
                  'Our qualified consultants have years of experience in compliance and safety across various industries.',
                bgColor: 'bg-orange',
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-white" />,
                title: 'Proven Results',
                description:
                  'With a 98% success rate, we deliver results that help businesses achieve their compliance goals.',
                bgColor: 'bg-leaf-green',
              },
              {
                icon: <Clock className="h-8 w-8 text-white" />,
                title: 'Fast Response',
                description:
                  'We respond to all enquiries within 24 hours and work efficiently to meet your deadlines.',
                bgColor: 'bg-teal-dark',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up hover-lift"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 hover-scale transition-all-smooth`}
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

      {/* Testimonials Preview */}
      <section className="py-16 bg-white animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-blue mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from businesses we've
              helped achieve compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`border-none shadow-lg card-premium animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-orange fill-current animate-bounce-in"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-teal-dark">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div
            className="text-center mt-12 animate-fade-in-up"
            style={{ animationDelay: '0.8s' }}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-teal-dark text-teal-dark hover:bg-teal-dark hover:text-white px-8 py-3 transition-all-smooth hover-lift"
              onClick={() => handleNavClick('testimonials')}
            >
              Read More Testimonials
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-gradient text-white relative overflow-hidden animate-fade-in">
        <div className="absolute inset-0 bg-navy-blue/20"></div>
        <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div
          className="absolute bottom-10 left-10 w-16 h-16 bg-orange/20 rounded-full animate-float"
          style={{ animationDelay: '1.5s' }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in-up">
            Ready to Get Started?
          </h2>
          <p
            className="text-xl text-gray-100 max-w-2xl mx-auto mb-8 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Contact us today for a free consultation and discover how we can
            help your business achieve compliance excellence.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <Button
              size="lg"
              className="bg-orange hover:bg-orange/90 text-white px-8 py-3 btn-premium transition-all-smooth"
              onClick={() => handleNavClick('contact')}
            >
              Get Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-teal-dark px-8 py-3 transition-all-smooth hover-lift"
              onClick={() => handleNavClick('services')}
            >
              Explore Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
