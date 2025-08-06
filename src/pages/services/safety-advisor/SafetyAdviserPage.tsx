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
      <section className="relative min-h-screen flex items-center justify-start overflow-hidden bg-[#1C1F2A] text-white px-6 sm:px-12 lg:px-20">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url('/Images/services/safety-advisor.jpg')",
            filter: 'brightness(0.6)',
            backgroundAttachment: 'fixed',
          }}
        />

        {/* Content Layer - aligned to left edge */}
        <div className="relative z-10 w-full max-w-2xl text-left space-y-8">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            Expert{' '}
            <span className="text-gradient-crimson">Safety Advisory </span>
            Solutions
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            Ensure your business stays compliant and secure with our
            professional health and safety advisory services. We help you
            maintain the highest industry standards through expert guidance and
            strategic planning.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
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

      {/* Services Grid  */}
      <section className="py-24 bg-gradient-to-br from-off-white via-pure-white to-soft-lavender-grey relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0 bg-soft-lavender-grey/20"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, var(--crimson-pink) 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-6 text-primary">
              Our Health & Safety
              <span className="text-gradient-crimson"> Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6">
              Explore our range of trusted, compliant, and affordable health &
              safety services designed to protect your business and ensure
              regulatory compliance.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <Card
                key={service.id}
                className="bg-pure-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl rounded-2xl transition-all duration-500 group cursor-pointer relative overflow-hidden card-premium"
                onClick={() => handleServiceClick(service.id)}
              >
                {/* Card gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-pure-white via-pure-white to-off-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Floating accent */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-crimson-gradient opacity-20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>

                <CardHeader className="relative z-10 p-6 pb-4">
                  {/* Icon container with enhanced styling */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                      <div className="p-4 bg-crimson-pink/10 rounded-2xl group-hover:bg-crimson-pink/20 transition-all duration-500 group-hover:scale-110">
                        <service.icon className="h-7 w-7 text-crimson-pink group-hover:text-vivid-red transition-colors duration-300" />
                      </div>
                      {/* Floating dot indicator */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-warm-amber rounded-full animate-pulse"></div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg font-bold text-charcoal-navy group-hover:text-crimson-pink transition-colors duration-300 mb-2 leading-tight">
                        {service.title}
                      </CardTitle>
                      <Badge className="bg-warm-amber/10 text-warm-amber text-xs px-3 py-1 rounded-full font-medium border border-warm-amber/20">
                        {service.badge}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10 px-6 pb-6">
                  <CardDescription className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    {service.description}
                  </CardDescription>

                  {/* Enhanced pricing section */}
                  <div className="mb-6 p-4 bg-gradient-to-r from-off-white to-pure-white rounded-xl border border-soft-lavender-grey/50 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-crimson-pink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative">
                      <p className="text-xs text-muted-foreground mb-1 font-medium">
                        Starting from
                      </p>
                      <p className="text-xl font-bold text-crimson-pink group-hover:scale-105 transition-transform duration-300">
                        {service.price}
                      </p>
                    </div>
                  </div>

                  {/* Enhanced CTA button */}
                  <Button
                    className="w-full bg-crimson-gradient hover:bg-vivid-red text-pure-white font-semibold py-3 rounded-xl transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 relative overflow-hidden btn-premium"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleServiceClick(service.id);
                    }}
                  >
                    <span className="relative z-10">Learn More</span>
                    <ArrowRight className="h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-crimson-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </Card>
            ))}
          </div>

          {/* Optional: View All Services CTA */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="px-10 py-3 border-2 border-crimson-pink text-crimson-pink hover:bg-crimson-pink hover:text-pure-white rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
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
            <h2 className="text-4xl font-bold tracking-tight mb-6 text-primary">
              Why Choose Our{' '}
              <span className="text-gradient-crimson">Safety Services?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6">
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
              className="bg-gradient-to-r from-[#FFC857] to-[#ED2568] hover:from-[#ED2568] hover:to-[#FFC857] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105 group"
              onClick={handleContactClick}
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 inline transition-transform group-hover:translate-x-1" />
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
