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
import { motion } from 'framer-motion';

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1C1F2A] text-white px-6 sm:px-12 lg:px-20">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url('/Images/services/safety-advisor.jpg')",
            filter: 'brightness(0.6)',
            backgroundAttachment: 'fixed',
          }}
        />

        {/* Wave Overlay */}
        <svg
          className="absolute bottom-0 left-0 w-full h-40 z-0"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ED2568"
            fillOpacity="0.25"
            d="M0,64L40,90.7C80,117,160,171,240,186.7C320,203,400,181,480,181.3C560,181,640,203,720,224C800,245,880,267,960,240C1040,213,1120,139,1200,106.7C1280,75,1360,85,1400,90.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          />
        </svg>

        {/* Content Layer */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-block bg-pink-600/10 text-pink-300 font-semibold tracking-wide px-5 py-1.5 rounded-full text-sm shadow-md">
            Safety Adviser Services
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            Expert Safety Advisory Solutions
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ensure your business stays compliant and secure with our
            professional health and safety advisory services. We help you
            maintain the highest industry standards through expert guidance and
            strategic planning.
          </p>

          {/* Optional CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <button
              onClick={handleContactClick}
              className="bg-gradient-to-r from-[#ED2568] to-[#EE343B] text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:brightness-110 transition-all"
            >
              Book a Consultation
            </button>

            <button
              onClick={() => navigate('/services')}
              className="border border-white/30 text-white hover:text-pink-300 hover:border-pink-300 px-8 py-3 text-lg rounded-xl transition-all"
            >
              Explore More Services
            </button>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1E2A3A] mb-2">
              Our Health & Safety Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our range of trusted, compliant, and affordable health &
              safety services designed for your needs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <Card
                key={service.id}
                className="bg-white border border-gray-200 shadow-sm hover:shadow-md rounded-xl transition-all duration-300 group"
                onClick={() => handleServiceClick(service.id)}
              >
                <CardHeader className="flex items-center gap-4 px-5 pt-5">
                  <div className="p-3 bg-[#ED2568]/10 rounded-full group-hover:bg-[#ED2568]/20 transition">
                    <service.icon className="h-6 w-6 text-[#ED2568]" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-base font-semibold text-[#1E2A3A] group-hover:text-[#007E7A] transition">
                      {service.title}
                    </CardTitle>
                    <Badge className="bg-[#F7941E]/10 text-[#F7941E] text-xs px-2 py-0.5 rounded-md">
                      {service.badge}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="px-5 pb-5">
                  <CardDescription className="text-sm text-gray-600 mb-3 leading-relaxed">
                    {service.description}
                  </CardDescription>

                  <div className="mb-3 p-2 bg-gray-50 rounded-md text-center border border-gray-100">
                    <p className="text-xs text-gray-500 mb-1">Starting from</p>
                    <p className="text-base font-bold text-[#007E7A]">
                      {service.price}
                    </p>
                  </div>

                  <Button
                    className="w-full bg-[#EE343B] hover:bg-[#ED2568] text-white text-sm font-medium flex items-center justify-center gap-2 transition"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleServiceClick(service.id);
                    }}
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}

      <section className="py-20 bg-[#F9F9F9] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Centered elegant heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-extrabold text-[#1C1F2A]">
              Why Choose Our Safety Services?
            </h2>
            <p className="text-base text-gray-600 mt-3 max-w-2xl mx-auto">
              Professional safety advisory services that deliver results and
              protect your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {benefits.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative rounded-xl shadow-xl overflow-hidden h-[320px] group"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {/* White overlay box */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-6 backdrop-blur-md">
                    <div className="w-12 h-12 bg-[#ED2568] rounded-full flex items-center justify-center mb-4 text-white shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1C1F2A] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-700">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <section
        className="py-20 bg-gradient-to-r from-teal-gradient-dark to-teal-gradient-light text-white relative overflow-hidden"
        style={{
          backgroundImage: "url('/Images/landingpage/get-started.jpg')", // Replace with your own image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Ready to Improve Your Safety Standards?
          </h2>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10">
            Contact us today for a free consultation and discover how we can
            help your business achieve safety excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button
              onClick={handleContactClick}
              className="bg-gradient-to-r from-orange to-orange/90 hover:from-orange/90 hover:to-orange text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation
            </button>

            <button
              onClick={handleContactClick}
              className="border-2 border-white text-white hover:bg-white hover:text-teal-dark px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
            >
              Contact Us Today
            </button>
          </div>

          {/* Optional Metrics Block – remove if not needed */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-orange mb-2">99%</div>
                <p className="text-gray-200">Client Satisfaction</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-300 mb-2">
                  250+
                </div>
                <p className="text-gray-200">Projects Completed</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-300 mb-2">10+</div>
                <p className="text-gray-200">Industries Served</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-300 mb-2">
                  24/7
                </div>
                <p className="text-gray-200">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
