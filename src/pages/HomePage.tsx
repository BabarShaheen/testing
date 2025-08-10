import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { whyChooseUsData } from '../data/whyChooseUsData';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

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

        {/* Content - Left Aligned */}
        <div className="relative z-20 h-full flex items-center px-6 sm:px-12 lg:px-24">
          <div className="max-w-4xl">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up">
              Professional{' '}
              <span className="text-gradient-crimson">Compliance</span>{' '}
              <br className="hidden sm:block" />
              Solutions
            </h1>

            {/* Subheading */}
            <p
              className="text-lg sm:text-xl text-off-white/90 mb-8 leading-relaxed max-w-2xl animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              Helping businesses meet legal standards with expert accreditation,
              risk assessment, and compliance services across the UK.
            </p>

            {/* CTA Button */}
            <div
              className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              <Button
                size="lg"
                className="bg-crimson-gradient hover:shadow-lg hover:shadow-crimson-pink/25 text-white px-8 py-4 min-h-[52px] text-base font-medium btn-premium transition-all-smooth hover-lift group"
                onClick={() => handleNavClick('contact')}
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 min-h-[52px] text-base font-medium transition-all-smooth backdrop-blur-sm"
                onClick={() => handleNavClick('services')}
              >
                View Services
              </Button>
            </div>

            {/* Stats/Features */}
            <div
              className="flex flex-wrap gap-8 text-sm animate-fade-in-up"
              style={{ animationDelay: '0.6s' }}
            >
              <div className="flex items-center gap-3 group">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-crimson-pink/20 border border-crimson-pink/30 group-hover:bg-crimson-pink/30 transition-colors">
                  <CheckCircle className="h-4 w-4 text-crimson-pink" />
                </div>
                <span className="text-off-white font-medium">UK Based</span>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-warm-amber/20 border border-warm-amber/30 group-hover:bg-warm-amber/30 transition-colors">
                  <CheckCircle className="h-4 w-4 text-warm-amber" />
                </div>
                <span className="text-off-white font-medium">
                  20+ Years Experience
                </span>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-vivid-red/20 border border-vivid-red/30 group-hover:bg-vivid-red/30 transition-colors">
                  <CheckCircle className="h-4 w-4 text-vivid-red" />
                </div>
                <span className="text-off-white font-medium">
                  98% Client Satisfaction
                </span>
              </div>
            </div>
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
                      src="/Images/landingpage/health-safety.jpeg"
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
                      src="/Images/landingpage/ISO-9001-Certification.jpg"
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
                      src="/Images/landingpage/sia.png"
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
                      src="/Images/landingpage/chas.jpg"
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
                      src="/Images/landingpage/pat.png"
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
                      src="/Images/landingpage/risk.jpg"
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

      <section
        className="relative bg-fixed bg-cover bg-center bg-no-repeat py-24 overflow-hidden"
        style={{
          backgroundImage: "url('/Images/landingpage/why-choose-us.jpg')",
        }}
      >
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-navy/80 via-charcoal-navy/70 to-charcoal-navy/60"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-white z-10">
          {/* Header Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
              duration: 0.8,
              type: 'spring',
              stiffness: 100,
            }}
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
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
              className="text-xl text-soft-lavender-grey max-w-4xl mx-auto leading-relaxed"
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

          {/* Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              staggerChildren: 0.2,
              delayChildren: 0.3,
            }}
          >
            {whyChooseUsData.map((card, idx) => (
              <motion.div
                key={idx}
                className="group relative perspective-1000"
                initial={{
                  opacity: 0,
                  y: 60,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 12,
                  duration: 0.1,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  rotateX: 5,
                }}
              >
                <motion.div
                  className="relative glass border border-white/20 p-8 rounded-2xl overflow-hidden cursor-pointer"
                  style={{ transformStyle: 'preserve-3d' }}
                  whileHover={{
                    boxShadow: '0 25px 50px -12px rgba(237, 37, 104, 0.4)',
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  <div className="relative z-10">
                    {/* Title */}
                    <motion.h3
                      className="text-xl font-bold mb-4 text-white group-hover:text-warm-amber transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      {card.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      className="text-soft-lavender-grey leading-relaxed group-hover:text-white transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      {card.description}
                    </motion.p>
                  </div>

                  {/* Corner accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-16 h-16 bg-crimson-gradient opacity-20 rounded-bl-full"
                    initial={{ scale: 0, rotate: 0 }}
                    whileHover={{ scale: 1, rotate: 180 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              </motion.div>
            ))}
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

      <section
        className="py-20 bg-gradient-to-r from-[#1C1F2A] to-[#ED2568] text-white relative overflow-hidden"
        style={{
          backgroundImage: "url('/Images/landingpage/get-started.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Ready to Get Started?
          </h2>

          <p className="text-xl text-gray-100 max-w-4xl mx-auto mb-10">
            Contact our expert team today for a free consultation and discover
            how we can help your business achieve compliance excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button
              className="bg-gradient-to-r from-[#FFC857] to-[#ED2568] hover:from-[#ED2568] hover:to-[#FFC857] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105 group"
              onClick={() => handleNavClick('contact')}
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 inline transition-transform group-hover:translate-x-1" />
            </button>
            <button
              className="border-2 border-white text-white hover:bg-white hover:text-[#1C1F2A] px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
              onClick={() => handleNavClick('services')}
            >
              View All Services
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-[#FFC857] mb-2">
                  FREE
                </div>
                <p className="text-gray-200">Initial Consultation</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#ED2568] mb-2">
                  24/7
                </div>
                <p className="text-gray-200">Expert Support</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <p className="text-gray-200">Compliance Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
