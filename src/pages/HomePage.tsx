import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { whyChooseUsData } from '../data/whyChooseUsData';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import LogoSlider from '../components/common/LogoSlider';
import FeatureSlider from '../components/common/FeatureSlider';
import AnimatedAssembly from '../components/common/AnimatedAssembly';

export function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Component mounted successfully
  }, []);

  const handleNavClick = (page: string) => {
    navigate(`/${page}`);
  };

  return (
    <div className="min-h-screen">
      <section
        className="relative h-[90vh] w-full bg-cover bg-center bg-no-repeat text-white overflow-hidden"
        style={{ backgroundImage: "url('/test-cover1.webp')" }}
      >
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-navy/90 via-charcoal-navy/70 to-transparent z-10"></div>

        {/* Animated Background Elements */}
        <motion.div 
          className="absolute top-20 right-20 w-72 h-72 bg-crimson-pink/10 rounded-full blur-3xl z-5"
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 0.6, 0.4],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-96 h-96 bg-warm-amber/10 rounded-full blur-3xl z-5"
          animate={{
            y: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Content - Left Aligned */}
        <div className="relative z-20 h-full flex items-center px-6 sm:px-12 lg:px-24">
          <div className="max-w-4xl">
            {/* Main Heading */}
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Professional{' '}
              </motion.span>
              <motion.span 
                className="text-gradient-crimson relative inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                Compliance
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-crimson-gradient rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                />
              </motion.span>{' '}
              <br className="hidden sm:block" />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Solutions
              </motion.span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-lg sm:text-xl text-off-white/90 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Helping businesses meet legal standards with expert accreditation,
              risk assessment, and compliance services across the UK.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  className="bg-crimson-gradient hover:shadow-lg hover:shadow-crimson-pink/25 text-white px-8 py-4 min-h-[52px] text-base font-medium transition-all duration-300 group relative overflow-hidden"
                  onClick={() => handleNavClick('contact')}
                >
                  <span className="relative z-10 flex items-center">
                    Get Started Today
                    <motion.span
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.span>
                  </span>
                  
                  {/* Button shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.7 }}
                  />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 min-h-[52px] text-base font-medium transition-all duration-300 backdrop-blur-sm"
                  onClick={() => handleNavClick('services')}
                >
                  View Services
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats/Features */}
            <motion.div
              className="flex flex-wrap gap-8 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.div 
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-crimson-pink/20 border border-crimson-pink/30 group-hover:bg-crimson-pink/30 transition-colors">
                  <CheckCircle className="h-4 w-4 text-crimson-pink" />
                </div>
                <span className="text-off-white font-medium">UK Based</span>
              </motion.div>

              <motion.div 
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-warm-amber/20 border border-warm-amber/30 group-hover:bg-warm-amber/30 transition-colors">
                  <CheckCircle className="h-4 w-4 text-warm-amber" />
                </div>
                <span className="text-off-white font-medium">
                  20+ Years Experience
                </span>
              </motion.div>

              <motion.div 
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-vivid-red/20 border border-vivid-red/30 group-hover:bg-vivid-red/30 transition-colors">
                  <CheckCircle className="h-4 w-4 text-vivid-red" />
                </div>
                <span className="text-off-white font-medium">
                  98% Client Satisfaction
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Services Preview - Framer Motion Version */}
      <section className="py-20 bg-gradient-to-br from-off-white via-pure-white to-soft-lavender-grey/30 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 bg-crimson-pink/5 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-40 h-40 bg-warm-amber/5 rounded-full blur-3xl"
          animate={{
            y: [0, 15, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-20 h-20 bg-vivid-red/5 rounded-full blur-2xl"
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.h2
              className="text-4xl sm:text-5xl font-bold text-charcoal-navy mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Our <span className="text-gradient-crimson">Premium</span>{' '}
              Services
            </motion.h2>

            <motion.p
              className="text-lg text-charcoal-navy/70 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Professional compliance, certification, and safety services to
              protect and empower your business with cutting-edge solutions.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Health & Safety */}
            <Link to="/services/safety-advisor/health-safety">
              <motion.div
                className="group"
                initial={{ opacity: 0, y: 60, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                whileHover={{
                  y: -8,
                  rotateX: 2,
                  transition: { duration: 0.3, ease: 'easeOut' },
                }}
              >
                <motion.div
                  className="bg-pure-white rounded-2xl shadow-lg p-6 relative overflow-hidden"
                  whileHover={{
                    boxShadow: '0 25px 50px -12px rgba(237, 37, 104, 0.15)',
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div
                    className="relative overflow-hidden rounded-xl mb-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.img
                      src="/Images/landingpage/health-safety_optimized.webp"
                      alt="Health & Safety"
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-charcoal-navy/20 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  <motion.h3
                    className="text-xl font-bold text-charcoal-navy mb-3 transition-colors group-hover:text-crimson-pink"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Health & Safety Consulting
                  </motion.h3>

                  <p className="text-charcoal-navy/70 text-sm mb-6 leading-relaxed">
                    Expert guidance to maintain safe, compliant workplaces
                    tailored to UK regulations with comprehensive risk
                    management.
                  </p>

                  <motion.div
                    className="flex items-center text-crimson-pink font-semibold cursor-pointer group-hover:text-vivid-red transition-colors"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>Learn More</span>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </Link>

            {/* ISO 9001 */}
            <Link to="/services/iso-certifications/iso-9001">
              <motion.div
                className="group"
                initial={{ opacity: 0, y: 60, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                whileHover={{
                  y: -8,
                  rotateX: 2,
                  transition: { duration: 0.3, ease: 'easeOut' },
                }}
              >
                <motion.div
                  className="bg-pure-white rounded-2xl shadow-lg p-6 relative overflow-hidden"
                  whileHover={{
                    boxShadow: '0 25px 50px -12px rgba(255, 200, 87, 0.15)',
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div
                    className="relative overflow-hidden rounded-xl mb-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.img
                      src="/Images/landingpage/ISO-9001-Certification_optimized.webp"
                      alt="ISO 9001"
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-charcoal-navy/20 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  <motion.h3
                    className="text-xl font-bold text-charcoal-navy mb-3 transition-colors group-hover:text-crimson-pink"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    ISO 9001 Certification
                  </motion.h3>

                  <p className="text-charcoal-navy/70 text-sm mb-6 leading-relaxed">
                    Achieve internationally recognized quality standards to
                    enhance credibility, efficiency, and competitive advantage.
                  </p>

                  <motion.div
                    className="flex items-center text-crimson-pink font-semibold cursor-pointer group-hover:text-vivid-red transition-colors"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>Get Certified</span>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </Link>

            {/* SIA ACS Audit */}
            <Link to="/services/sia-contractor/acs-audit">
              <motion.div
                className="group"
                initial={{ opacity: 0, y: 60, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                whileHover={{
                  y: -8,
                  rotateX: 2,
                  transition: { duration: 0.3, ease: 'easeOut' },
                }}
              >
                <motion.div
                  className="bg-pure-white rounded-2xl shadow-lg p-6 relative overflow-hidden"
                  whileHover={{
                    boxShadow: '0 25px 50px -12px rgba(238, 52, 59, 0.15)',
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div
                    className="relative overflow-hidden rounded-xl mb-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.img
                      src="/Images/landingpage/sia_optimized.webp"
                      alt="SIA ACS"
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-charcoal-navy/20 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  <motion.h3
                    className="text-xl font-bold text-charcoal-navy mb-3 transition-colors group-hover:text-crimson-pink"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    SIA ACS Audit Support
                  </motion.h3>

                  <p className="text-charcoal-navy/70 text-sm mb-6 leading-relaxed">
                    Full support for achieving Approved Contractor Scheme
                    compliance in the security industry with expert guidance.
                  </p>

                  <motion.div
                    className="flex items-center text-crimson-pink font-semibold cursor-pointer group-hover:text-vivid-red transition-colors"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>Start Process</span>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </Link>

            {/* CHAS Assistance */}
            <Link to="/services/safety-advisor/chas-assistance">
              <motion.div
                className="group"
                initial={{ opacity: 0, y: 60, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                whileHover={{
                  y: -8,
                  rotateX: 2,
                  transition: { duration: 0.3, ease: 'easeOut' },
                }}
              >
                <motion.div
                  className="bg-pure-white rounded-2xl shadow-lg p-6 relative overflow-hidden"
                  whileHover={{
                    boxShadow: '0 25px 50px -12px rgba(237, 37, 104, 0.15)',
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div
                    className="relative overflow-hidden rounded-xl mb-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.img
                      src="/Images/landingpage/chas_optimized.webp"
                      alt="CHAS Assistance"
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-charcoal-navy/20 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  <motion.h3
                    className="text-xl font-bold text-charcoal-navy mb-3 transition-colors group-hover:text-crimson-pink"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    CHAS Assistance
                  </motion.h3>

                  <p className="text-charcoal-navy/70 text-sm mb-6 leading-relaxed">
                    We help you attain CHAS accreditation with complete
                    application and compliance support for construction
                    projects.
                  </p>

                  <motion.div
                    className="flex items-center text-crimson-pink font-semibold cursor-pointer group-hover:text-vivid-red transition-colors"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>Apply Now</span>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </Link>

            {/* PAT Testing */}
            <Link to="/services/pat-testing">
              <motion.div
                className="group"
                initial={{ opacity: 0, y: 60, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                whileHover={{
                  y: -8,
                  rotateX: 2,
                  transition: { duration: 0.3, ease: 'easeOut' },
                }}
              >
                <motion.div
                  className="bg-pure-white rounded-2xl shadow-lg p-6 relative overflow-hidden"
                  whileHover={{
                    boxShadow: '0 25px 50px -12px rgba(255, 200, 87, 0.15)',
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div
                    className="relative overflow-hidden rounded-xl mb-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.img
                      src="/Images/landingpage/pat_optimized.webp"
                      alt="PAT Testing"
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-charcoal-navy/20 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  <motion.h3
                    className="text-xl font-bold text-charcoal-navy mb-3 transition-colors group-hover:text-crimson-pink"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    PAT Testing
                  </motion.h3>

                  <p className="text-charcoal-navy/70 text-sm mb-6 leading-relaxed">
                    Ensure workplace electrical safety with reliable, affordable
                    PAT testing services and comprehensive reporting.
                  </p>

                  <motion.div
                    className="flex items-center text-crimson-pink font-semibold cursor-pointer group-hover:text-vivid-red transition-colors"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>View Pricing</span>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </Link>

            {/* Risk Assessments */}
            <Link to="/services/risk-assessments">
              <motion.div
                className="group"
                initial={{ opacity: 0, y: 60, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
                whileHover={{
                  y: -8,
                  rotateX: 2,
                  transition: { duration: 0.3, ease: 'easeOut' },
                }}
              >
                <motion.div
                  className="bg-pure-white rounded-2xl shadow-lg p-6 relative overflow-hidden"
                  whileHover={{
                    boxShadow: '0 25px 50px -12px rgba(238, 52, 59, 0.15)',
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div
                    className="relative overflow-hidden rounded-xl mb-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.img
                      src="/Images/landingpage/risk_optimized.webp"
                      alt="Risk Assessments"
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-charcoal-navy/20 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  <motion.h3
                    className="text-xl font-bold text-charcoal-navy mb-3 transition-colors group-hover:text-crimson-pink"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Risk Assessments
                  </motion.h3>

                  <p className="text-charcoal-navy/70 text-sm mb-6 leading-relaxed">
                    Identify and manage workplace hazards with professional risk
                    assessment reports and actionable recommendations.
                  </p>

                  <motion.div
                    className="flex items-center text-crimson-pink font-semibold cursor-pointer group-hover:text-vivid-red transition-colors"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>Get a Quote</span>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </Link>
          </div>

          {/* CTA Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="relative inline-block">
              <motion.button
                className="bg-crimson-gradient text-white px-10 py-4 min-h-[56px] text-lg font-semibold rounded-lg relative overflow-hidden group"
                onClick={() => handleNavClick('services')}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(237, 37, 104, 0.3)',
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <motion.span
                  className="relative z-10 flex items-center"
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  View All Services
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </motion.div>
                </motion.span>

                {/* Button shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.7 }}
                />
              </motion.button>
            </div>

            {/* Additional CTA Text */}
            <motion.p
              className="mt-4 text-charcoal-navy/60 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Discover how we can help your business achieve compliance
              excellence
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-20 right-20 w-96 h-96 bg-crimson-pink/5 rounded-full blur-3xl z-0"
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-96 h-96 bg-warm-amber/5 rounded-full blur-3xl z-0"
          animate={{
            y: [0, 30, 0],
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          {/* Header Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              type: 'spring',
              stiffness: 100,
            }}
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-charcoal-navy"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: 'spring',
                stiffness: 120,
              }}
            >
              Why Choose{' '}
              <motion.span
                className="text-gradient-crimson relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Citrix
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-crimson-gradient rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-xl text-charcoal-navy/70 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: 'easeOut',
              }}
            >
              We specialize in supporting small to medium businesses with expert
              health & safety consultancy, ensuring compliance without the
              complexity or cost of full-time managers.
            </motion.p>
          </motion.div>

          {/* Feature Slider */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: 'easeOut',
            }}
          >
            <FeatureSlider features={whyChooseUsData} />
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              type: 'spring',
              stiffness: 100,
            }}
          ></motion.div>
        </div>
      </section>

      {/* Animated Assembly Section */}
      <AnimatedAssembly />

      {/* Logo Slider Section - Above Why Choose Citrix */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-charcoal-navy mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Trusted By Leading Organizations
          </motion.h2>
          <motion.p 
            className="text-lg text-charcoal-navy/70 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We work with businesses of all sizes across the UK to ensure compliance excellence
          </motion.p>
        </div>
        <LogoSlider />
      </section>

      {/* Ready to Get Started Section - Enhanced with Cards */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-crimson-pink/5 rounded-full blur-3xl z-0"
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-96 h-96 bg-warm-amber/5 rounded-full blur-3xl z-0"
          animate={{
            y: [0, 30, 0],
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 text-charcoal-navy"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to Get Started?
            </motion.h2>

            <motion.p 
              className="text-xl text-charcoal-navy/70 max-w-4xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Contact our expert team today for a free consultation and discover
              how we can help your business achieve compliance excellence.
            </motion.p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-crimson-gradient hover:shadow-lg hover:shadow-crimson-pink/25 text-white px-8 py-4 min-h-[56px] text-lg font-semibold relative overflow-hidden group"
                onClick={() => handleNavClick('contact')}
              >
                <span className="relative z-10 flex items-center">
                  Get Free Consultation
                  <motion.span
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.span>
                </span>
                
                {/* Button shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.7 }}
                />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-charcoal-navy/30 text-charcoal-navy hover:bg-charcoal-navy/5 hover:border-charcoal-navy/50 px-8 py-4 min-h-[56px] text-lg font-semibold transition-all duration-300"
                onClick={() => handleNavClick('services')}
              >
                View All Services
              </Button>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8 text-center relative overflow-hidden group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 25px 50px -12px rgba(238, 52, 59, 0.25)',
              }}
            >
              <motion.div
                className="w-16 h-16 bg-warm-amber/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-warm-amber/20 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              >
                <span className="text-2xl font-bold text-warm-amber">FREE</span>
              </motion.div>
              <motion.h3 
                className="text-xl font-bold text-charcoal-navy mb-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Initial Consultation
              </motion.h3>
              <p className="text-charcoal-navy/70 text-sm">No obligation assessment of your compliance needs</p>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute top-0 right-0 w-24 h-24 bg-warm-amber/10 rounded-bl-full -z-10"
                whileHover={{ scale: 1.2, rotate: 45 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8 text-center relative overflow-hidden group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 25px 50px -12px rgba(238, 52, 59, 0.25)',
              }}
            >
              <motion.div
                className="w-16 h-16 bg-crimson-pink/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-crimson-pink/20 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              >
                <span className="text-2xl font-bold text-crimson-pink">24/7</span>
              </motion.div>
              <motion.h3 
                className="text-xl font-bold text-charcoal-navy mb-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Expert Support
              </motion.h3>
              <p className="text-charcoal-navy/70 text-sm">Dedicated assistance whenever you need it</p>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute top-0 right-0 w-24 h-24 bg-crimson-pink/10 rounded-bl-full -z-10"
                whileHover={{ scale: 1.2, rotate: 45 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8 text-center relative overflow-hidden group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 25px 50px -12px rgba(238, 52, 59, 0.25)',
              }}
            >
              <motion.div
                className="w-16 h-16 bg-vivid-red/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-vivid-red/20 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              >
                <span className="text-2xl font-bold text-vivid-red">100%</span>
              </motion.div>
              <motion.h3 
                className="text-xl font-bold text-charcoal-navy mb-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Compliance Guaranteed
              </motion.h3>
              <p className="text-charcoal-navy/70 text-sm">We ensure your business meets all requirements</p>
              
              {/* Decorative elements */}
              <motion.div 
                 className="absolute top-0 right-0 w-24 h-24 bg-vivid-red/10 rounded-bl-full -z-10"
                 whileHover={{ scale: 1.2, rotate: 45 }}
                 transition={{ duration: 0.5 }}
               />
             </motion.div>
           </div>
         </div>
      </section>
    </div>
  );
}