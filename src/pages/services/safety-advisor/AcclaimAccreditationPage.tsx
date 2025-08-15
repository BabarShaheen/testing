import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';
import { ArrowRight } from 'lucide-react';
import { motion, cubicBezier } from 'framer-motion';
import {
  acclaimServices,
  acclaimBenefits,
  processSteps,
} from '../../../data/acclaimAccreditationData';
import { SectionHeader } from '../../../components/common';

export function AcclaimAccreditationPage() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  // Animation variants

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: cubicBezier(0, 0, 0.2, 1) },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-start overflow-hidden bg-[#1C1F2A] text-white px-6 sm:px-12 lg:px-20">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url('/Images/services/acclaim.webp')",
            filter: 'brightness(0.6)',
            backgroundAttachment: 'fixed',
          }}
        />

        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-20 right-20 w-40 h-40 bg-crimson-pink/5 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: cubicBezier(0.4, 0, 0.2, 1),
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-60 h-60 bg-warm-amber/5 rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: cubicBezier(0.4, 0, 0.2, 1),
            delay: 1,
          }}
        />

        {/* Content Layer - aligned to left edge */}
        <motion.div
          className="relative z-10 w-full max-w-2xl text-left space-y-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Title */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white"
            variants={fadeInUp}
          >
            Acclaim{' '}
            <span className="text-gradient-crimson animate-gradient">
              Accreditation{' '}
            </span>
            Services
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg sm:text-xl text-gray-300 leading-relaxed"
            variants={fadeInUp}
          >
            Achieve Acclaim accreditation with our expert guidance and support.
            We help you navigate the entire process from initial assessment to
            successful certification.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-start gap-4 pt-4"
            variants={fadeInUp}
          >
            <motion.button
              onClick={handleContactClick}
              className="bg-gradient-to-r from-[#ED2568] to-[#EE343B] text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:brightness-110 transition-all hover-lift"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Free Consultation
            </motion.button>

            <motion.button
              onClick={() => navigate('/services')}
              className="border border-white/30 text-white hover:text-pink-300 hover:border-pink-300 px-8 py-3 text-lg rounded-xl transition-all"
              whileHover={{
                scale: 1.05,
                borderColor: 'rgba(236, 72, 153, 0.7)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              View Our Services
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeader
              title={
                <>
                  Acclaim{' '}
                  <span className="text-crimson-pink animate-gradient">
                    Accreditation
                  </span>{' '}
                  Services
                </>
              }
              description="Comprehensive support for achieving Acclaim accreditation"
            />
          </motion.div>

          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {acclaimServices.map((service, index) => (
              <motion.div key={index} variants={cardVariants}>
                <motion.div
                  whileHover={{
                    y: -8,
                    boxShadow:
                      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border border-gray-200 shadow-sm transition-all h-full">
                    <CardHeader className="pb-2">
                      <motion.div
                        className="w-12 h-12 rounded-lg bg-crimson-pink/10 flex items-center justify-center mb-4"
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: 'rgba(237, 37, 104, 0.2)',
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <service.icon className="w-6 h-6 text-crimson-pink" />
                      </motion.div>
                      <CardTitle className="text-xl font-bold">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeader
              title={
                <>
                  Our{' '}
                  <span className="text-crimson-pink animate-gradient">
                    Process
                  </span>
                </>
              }
              description="How we help you achieve Acclaim accreditation"
            />
          </motion.div>

          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={cardVariants}
                custom={index}
              >
                {/* Step number */}
                <motion.div
                  className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-crimson-pink flex items-center justify-center text-white font-bold text-xl shadow-lg z-10"
                  whileHover={{ scale: 1.1 }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    type: 'spring',
                    delay: 0.3 + index * 0.1,
                  }}
                >
                  {step.number}
                </motion.div>

                {/* Step content */}
                <motion.div
                  whileHover={{
                    y: -8,
                    boxShadow:
                      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border border-gray-200 shadow-sm h-full pt-6">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl font-bold">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">
                        {step.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Connector (except for last item) */}
                {index < processSteps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-4 w-8 h-2 bg-crimson-pink/30"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                  >
                    <motion.div
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-crimson-pink rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.2, duration: 0.3 }}
                      whileHover={{ scale: 1.5 }}
                    ></motion.div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeader
              title={
                <>
                  Key{' '}
                  <span className="text-crimson-pink animate-gradient">
                    Benefits
                  </span>
                </>
              }
              description="Why choose Acclaim accreditation for your business"
            />
          </motion.div>

          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {acclaimBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border border-gray-200 shadow-sm transition-all h-full">
                  <CardHeader className="pb-2">
                    <motion.div
                      className={`w-12 h-12 rounded-lg ${benefit.bgColor} flex items-center justify-center mb-4`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <benefit.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl font-bold">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}

      <section
        className="py-20 bg-gradient-to-r from-teal-gradient-dark to-teal-gradient-light text-white relative overflow-hidden"
        style={{
          backgroundImage:
            "url('/Images/landingpage/get-started_optimized.webp')", // Replace with your own image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Ready to achieve Acclaim accreditation?
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
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5 inline transition-transform group-hover:translate-x-1" />
            </button>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-orange mb-2">99%</div>
                <p className="text-gray-200">Success Rate</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-300 mb-2">
                  250+
                </div>
                <p className="text-gray-200">Contractors Accredited</p>
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
