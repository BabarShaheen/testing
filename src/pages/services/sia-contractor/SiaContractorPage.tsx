import { CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';
import {
  whyChooseUs,
  processSteps,
  services,
  benefits,
} from '../../../data/siaContractorData';
import { motion } from 'framer-motion';
export default function SiaContractorPage() {
  const handleServiceClick = (serviceId: any) => {
    console.log('Navigate to service:', serviceId);
  };

  const handleContactClick = () => {
    console.log('Navigate to contact');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center bg-charcoal-navy text-pure-white overflow-hidden">
        {/* Background Image with Enhanced Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/Images/services/Cover1.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-navy/90 via-charcoal-navy/85 to-charcoal-navy/95 z-10"></div>

        {/* Main Content Container */}
        <div className="relative z-30 w-full px-6 sm:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Content - Text */}
              <div className="space-y-8 animate-fade-in-left">
                {/* Main Heading - Left Aligned */}
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight text-left">
                    <span className="text-pure-white block">SIA Approved</span>
                    <span className="text-gradient-crimson block">
                      Contractor
                    </span>
                    <span className="text-pure-white block">Scheme</span>
                  </h1>

                  {/* Animated underline */}
                  <div className="w-24 h-1 bg-crimson-gradient rounded-full animate-pulse"></div>
                </div>

                {/* Description - Left Aligned */}
                <p className="text-xl md:text-2xl text-soft-lavender-grey/80 leading-relaxed max-w-3xl text-left">
                  CiTRiX provides a simple and affordable route to{' '}
                  <span className="text-crimson-pink font-semibold">
                    SIA ACS certification
                  </span>
                  . We are experts in the delivery of QHSE management systems
                  tailored to your business.
                </p>

                {/* Highlight Box - Left Aligned */}
                <div className="bg-pure-white/10 backdrop-blur-lg border border-soft-lavender-grey/20 rounded-2xl p-6 max-w-4xl shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-warm-amber rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg font-semibold text-pure-white leading-relaxed">
                      The only recognised scheme to standardise organisations
                      operating within the private security sector
                    </p>
                  </div>
                </div>

                {/* CTA Buttons - Left Aligned */}
                <div className="flex flex-col sm:flex-row gap-6 pt-4">
                  <button className="bg-crimson-gradient hover:bg-vivid-red text-pure-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl btn-premium group relative overflow-hidden">
                    <span className="relative z-10 flex items-center gap-3">
                      Get SIA Certified
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>

                  <button className="border-2 border-pure-white/80 text-pure-white hover:bg-pure-white hover:text-charcoal-navy px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:backdrop-blur-none group">
                    <span className="flex items-center gap-3">
                      Learn More
                      <ExternalLink className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About SIA ACS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-6 text-primary">
                About The <span className="text-gradient-crimson">SIA ACS</span>
              </h2>

              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-4">
                The{' '}
                <span className="text-gradient-crimson">
                  SIA ACS (Approved Contractor Scheme)
                </span>{' '}
                is the UK’s recognised standard for quality and compliance in
                the private security sector.
              </p>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-4">
                Developed in line with the Private Security Industry Act 2001,
                it incorporates best practices from ISO 9001 and other business
                improvement models.
              </p>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-4">
                ACS accreditation shows your commitment to high standards,
                continuous improvement, and operational excellence.
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
                    Only recognised standardisation scheme
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    Based on ISO 9001 standards
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    Industry-designed requirements
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    Voluntary but increasingly mandatory
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-crimson-pink rounded-full">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-crimson-pink mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SIA ACS Services Section - Redesigned */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section - Original Styling */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight mb-2 text-primary">
              Our SIA ACS{' '}
              <span className="text-gradient-crimson">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Comprehensive services to help you achieve and maintain SIA ACS
              certification
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                    type: 'spring',
                    stiffness: 100,
                  }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() => handleServiceClick(service.id)}
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 card-premium relative overflow-hidden p-6 h-full">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-crimson-pink/5 via-transparent to-warm-amber/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>

                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-crimson-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-lg"></div>

                    <div className="relative z-10">
                      {/* Icon and Title Section */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                        className="text-center mb-6"
                      >
                        <div className="flex justify-center mb-4">
                          <div className="p-3 bg-crimson-pink rounded-lg group-hover:bg-vivid-red group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                            <IconComponent className="h-10 w-10 text-white" />
                          </div>
                        </div>

                        <div className="flex items-center justify-center gap-2 mb-2">
                          <h3 className="text-xl font-bold text-slate-800 group-hover:text-crimson-pink transition-colors duration-300">
                            {service.title}
                          </h3>
                          <span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full">
                            {service.badge}
                          </span>
                        </div>
                      </motion.div>

                      {/* Description */}
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                        viewport={{ once: true }}
                        className="text-gray-600 mb-4 text-center"
                      >
                        {service.description}
                      </motion.p>

                      {/* Features List */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                        className="mb-4"
                      >
                        <h4 className="font-semibold text-slate-700 mb-2">
                          Includes:
                        </h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <motion.li
                              key={featureIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.4,
                                delay: index * 0.1 + 0.6 + featureIndex * 0.1,
                              }}
                              viewport={{ once: true }}
                              className="flex items-center text-sm text-gray-600"
                            >
                              <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>

                      {/* Pricing Section */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
                        viewport={{ once: true }}
                        className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100 relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-crimson-pink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10">
                          <p className="text-sm text-blue-800 mb-1">
                            Investment:
                          </p>
                          <p className="font-bold text-xl text-crimson-pink group-hover:scale-105 transition-transform duration-300">
                            {service.price}
                          </p>
                        </div>
                      </motion.div>

                      {/* CTA Button */}
                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.8 }}
                        viewport={{ once: true }}
                        className="w-full bg-crimson-pink hover:bg-vivid-red text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 transform group-hover:scale-105 btn-premium flex items-center justify-center gap-2 relative overflow-hidden"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleServiceClick(service.id);
                        }}
                      >
                        <span className="relative z-10">Learn More</span>
                        <ArrowRight className="h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                      </motion.button>
                    </div>

                    {/* Corner decoration */}
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-crimson-pink/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight mb-4 text-primary">
              Advantages of Becoming an{' '}
              <span className="text-gradient-crimson">
                SIA Approved Contractor
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Your potential clients are increasingly making SIA ACS approval
              mandatory for their security service providers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
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
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QMS Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight mb-2 text-primary">
              Our <span className="text-gradient-crimson">QMS Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Simple three-step process to achieve your SIA ACS certification
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.id}
                  className={`${step.color} p-6 rounded-lg border border-gray-200 relative`}
                >
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-crimson-pink text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-white/80 rounded-lg">
                      <IconComponent className="h-10 w-10 text-crimson-pink" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-crimson-pink mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-20 bg-crimson-gradient text-white relative overflow-hidden animate-fade-in"
        style={{
          backgroundImage: "url('/Images/landingpage/get-started.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to Become SIA ACS Approved?
          </h2>

          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-10">
            Our solid experience in the field and long list of completed
            projects demonstrate our reliability as a business partner. Together
            we will drive your business development in the right direction.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg transition-all duration-300"
              onClick={handleContactClick}
            >
              Make an Enquiry
            </button>
            <button
              className="border-2 border-white text-white hover:bg-white hover:text-crimson-pink px-8 py-3 rounded-xl text-lg font-semibold transition-all duration-300"
              onClick={handleContactClick}
            >
              Schedule Consultation
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto shadow-md">
            <p className="text-xl font-semibold mb-2">
              Experience! Reliability! Expertise!
            </p>
            <p className="text-gray-100 text-base leading-relaxed">
              Our customers are the reason we're still in business, and our job
              is to serve our customers to the best of our ability.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
