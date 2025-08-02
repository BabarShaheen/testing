import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';
import { ArrowRight } from 'lucide-react';
import { services, benefits } from '../../../data/safetyAdvisorData';

export function SafetyAdviserPage() {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-28 "
        style={{
          backgroundImage: "url('/Images/services/safety-advisor.jpg')", // Make sure this image is in your public/images folder
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-800/80 to-black/70 z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Safety Adviser Services
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Professional health and safety advisory services to ensure your
            business meets all regulatory requirements and maintains the highest
            safety standards.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20  bg-cover bg-center bg-fixed relative">
        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-navy-blue mb-4 tracking-tight">
              Our Safety Services
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Comprehensive safety solutions designed to protect your workforce
              and ensure compliance with health and safety regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service) => (
              <Card
                key={service.id}
                className="bg-white/80 border border-gray-200 shadow-lg rounded-xl hover:shadow-2xl transition-all duration-300 group backdrop-blur"
                onClick={() => handleServiceClick(service.id)}
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-teal-50 rounded-full group-hover:bg-teal-100 transition-all duration-300">
                      <service.icon className="h-6 w-6 text-teal-700 group-hover:text-teal-800" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <CardTitle className="text-teal-700 text-xl font-semibold group-hover:text-teal-800 transition-colors">
                      {service.title}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="bg-leaf-green text-white text-xs px-2 py-1 rounded"
                    >
                      {service.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <CardDescription className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="mb-4 p-3 bg-white/70 rounded-lg border border-gray-200 text-center">
                    <p className="text-xs text-gray-500 mb-1">Starting from:</p>
                    <p className="text-lg font-bold text-teal-800">
                      {service.price}
                    </p>
                  </div>
                  <Button
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium flex items-center justify-center gap-2 transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleServiceClick(service.id);
                    }}
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Centered elegant heading */}
          <div className="text-center mb-6">
            <h2 className="text-4xl font-extrabold text-navy-blue">
              Why Choose Our Safety Services?
            </h2>
            <p className="text-base text-gray-600 mt-2 max-w-2xl mx-auto">
              Professional safety advisory services that deliver results and
              protect your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {benefits.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="relative rounded-xl shadow-lg overflow-hidden h-[320px] group"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {/* White box over image */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-6">
                    <div className="w-12 h-12 bg-navy-blue rounded-full flex items-center justify-center mb-3 text-white">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-navy-blue mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-700">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-teal-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-blue/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Improve Your Safety Standards?
          </h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and discover how we can
            help your business achieve safety excellence.
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
