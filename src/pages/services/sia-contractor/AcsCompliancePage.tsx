import { useNavigate } from 'react-router-dom';
import {
  CheckCircle,
  Target,
  Building,
  Users,
  Settings,
  ExternalLink,
  ArrowRight,
} from 'lucide-react';
import { motion } from 'framer-motion';
import {
  complianceServices,
  complianceBenefits,
} from '../../../data/acsComplianceData';

const AcsCompliancePage = () => {
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center bg-charcoal-navy text-pure-white px-6 sm:px-12 lg:px-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/Images/services/Cover2_optimized.webp')",
            filter: 'brightness(0.6)',
          }}
        />

        {/* Content - Left Side */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl space-y-8">
              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="text-pure-white">SIA </span>
                <span className="text-gradient-crimson ">ACS</span>
                <span className="text-pure-white block">Compliacne</span>
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-soft-lavender-grey/80 leading-relaxed">
                Providing a Quality System and Ongoing Consultancy. We don't
                just get you certified, We help you stay certified.
              </p>

              {/* Highlight Box */}
              <div className="bg-pure-white/10 backdrop-blur-sm rounded-lg p-4 border border-soft-lavender-grey/20">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-warm-amber rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg font-medium text-pure-white">
                    Long-term support after your ACS accreditation with remote
                    or onsite assistance tailored to your needs
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <button
                  onClick={handleContactClick}
                  className="bg-crimson-gradient hover:bg-vivid-red text-pure-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl btn-premium group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Get SIA Certified
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>

                <button
                  onClick={handleContactClick}
                  className="border-2 border-pure-white/80 text-pure-white hover:bg-pure-white hover:text-charcoal-navy px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:backdrop-blur-none group"
                >
                  <span className="flex items-center gap-3">
                    Learn More
                    <ExternalLink className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why It Matters */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-6 text-primary">
                Why Ongoing{' '}
                <span className="text-gradient-crimson">
                  Compliance Matters
                </span>
              </h2>

              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-4">
                Keeping your system current not only ensures compliance but
                builds confidence with customers and makes annual assessments
                smoother.
              </p>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-4">
                The security industry is constantly evolving with new
                regulations, standards, and best practices. Our ongoing
                compliance service ensures you stay ahead of these changes.
              </p>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-4">
                With our expert support, you can focus on growing your business
                while we handle the complex compliance requirements.
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-lg border border-teal-100">
              <h3 className="text-2xl font-bold text-crimson-pink mb-4">
                Key Facts
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    Continuous compliance monitoring
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    Regular system updates and improvements
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    Expert audit preparation support
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    Flexible remote or onsite service
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Introduction Section */}
      <section className="mb-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-crimson-pink rounded-full">
                  <Building className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-crimson-pink mb-2">
                Ongoing Support
              </h3>
              <p className="text-gray-600">
                We don't just get you certified — we help you stay certified
                with continuous support
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-crimson-pink rounded-full">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-crimson-pink mb-2">
                Expert Guidance
              </h3>
              <p className="text-gray-600">
                Long-term support to maintain up-to-date systems and prepare for
                upcoming audits
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-crimson-pink rounded-full">
                  <Settings className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-crimson-pink mb-2">
                Flexible Service
              </h3>
              <p className="text-gray-600">
                Our support can be remote or onsite, tailored to your specific
                business needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Our ACS Compliance Service Includes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 80, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
              duration: 0.8,
              type: 'spring',
              stiffness: 100,
              damping: 15,
            }}
          >
            <motion.h2
              className="text-4xl font-bold tracking-tight mb-4 text-primary"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              What Our{' '}
              <motion.span
                className="text-gradient-crimson"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, type: 'spring' }}
              >
                ACS Compliance Service{' '}
              </motion.span>
              Includes
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Comprehensive ongoing support to ensure your ACS certification
              remains valid and effective
            </motion.p>
          </motion.div>

          {/* Services Grid with Enhanced Design */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceServices.map((service, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{
                    opacity: 0,
                    y: isEven ? 60 : -60,
                    rotate: isEven ? -5 : 5,
                    scale: 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    rotate: 0,
                    scale: 1,
                  }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                    type: 'spring',
                    stiffness: 100,
                    damping: 12,
                  }}
                  whileHover={{
                    y: -12,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Card */}
                  <motion.div
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden"
                    initial={{ borderRadius: '0px' }}
                    whileInView={{ borderRadius: '12px' }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  >
                    {/* Gradient Accent */}
                    <motion.div
                      className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-crimson-pink to-vivid-red"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                    />

                    {/* Title */}
                    <motion.h3
                      className="text-lg font-bold text-slate-800 text-center mb-3 group-hover:text-crimson-pink transition-colors duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                    >
                      {service.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      className="text-gray-600 text-sm text-center leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                    >
                      {service.description}
                    </motion.p>

                    {/* Hover Effect Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-crimson-pink/5 to-vivid-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                    {/* Animated Border Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-crimson-pink/20"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA Section */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md border border-gray-200">
              <div className="w-3 h-3 bg-crimson-pink rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-700">
                All services include ongoing support and consultation
              </span>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Benefits and Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Benefits */}
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold tracking-tight mb-2  text-primary">
                <span className="text-gradient-crimson">Benefits</span> of Our
                Compliance Service
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                Our comprehensive compliance service ensures your ACS
                certification remains valid while you focus on your core
                business
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {complianceBenefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-3 ${benefit.bgColor} rounded-lg flex-shrink-0`}
                        >
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-slate-800 mb-2">
                            {benefit.title}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            Essential for maintaining your competitive edge in
                            the security industry
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact Sidebar */}
            <div className="space-y-6">
              {/* Service Features */}
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-lg border border-teal-100">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-crimson-pink" />
                  <h3 className="text-xl font-semibold text-slate-800">
                    Service Features
                  </h3>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-crimson-pink mb-2">
                    Flexible
                  </div>
                  <p className="text-gray-700 mb-4">
                    Remote or onsite support tailored to your needs
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">
                      Customized service plans
                    </span>
                  </div>
                </div>
              </div>

              {/* Additional Support */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-semibold text-slate-800 mb-3">
                  Additional Support
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    24/7 compliance helpline
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    Quarterly system reviews
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    Training program updates
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    Regulatory change alerts
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section
        className="py-20 bg-crimson-gradient text-white relative overflow-hidden animate-fade-in"
        style={{
          backgroundImage:
            "url('/Images/landingpage/get-started_optimized.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Maintain Your ACS Certification
          </h2>

          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-10">
            Don't let compliance become a burden. Our ongoing support service
            ensures your ACS certification remains valid while you focus on what
            matters most - growing your security business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg transition-all duration-300"
              onClick={handleContactClick}
            >
              Start Compliance Support
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto shadow-md">
            <p className="text-xl font-semibold mb-2">
              Expert Support • Continuous Monitoring • Peace of Mind
            </p>
            <p className="text-gray-100 text-base leading-relaxed">
              Let us handle the complex compliance requirements while you focus
              on delivering exceptional security services to your clients.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcsCompliancePage;
