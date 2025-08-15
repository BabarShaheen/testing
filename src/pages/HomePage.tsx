import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { whyChooseUsData } from '../data/whyChooseUsData';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoSlider from '../components/common/LogoSlider';
import FeatureSlider from '../components/common/FeatureSlider';
import DynamicWords from '../components/common/DynamicWords.tsx';
import { PageLoader } from '../components/common/LoadingSpinner';

export function HomePage() {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Check if this is the first visit to the home page
    const hasVisitedBefore = sessionStorage.getItem('hasVisitedHomePage');

    if (!hasVisitedBefore) {
      // First visit - show loading screen
      const timer = setTimeout(() => {
        setLoading(false);
        // Mark that user has visited the home page
        sessionStorage.setItem('hasVisitedHomePage', 'true');
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      // Not first visit - don't show loading screen
      setLoading(false);
    }
  }, []);

  const handleNavClick = (page: string) => {
    navigate(`/${page}`);
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen">
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <PageLoader />
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative min-h-screen bg-[#1C1F2A] text-white overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C1F2A] via-[#252B3A] to-[#ed2568] z-0"></div>

        {/* Animated background pattern - reduced opacity on mobile */}
        <div
          className="absolute inset-0 opacity-[0.02] sm:opacity-[0.03] z-0"
          style={{
            backgroundImage: `linear-gradient(to right, #ed2568 1px, transparent 1px), linear-gradient(to bottom, #ed2568 1px, transparent 1px)`,
            backgroundSize: '40px 40px sm:60px 60px',
          }}
        ></div>

        {/* Floating orbs - adjusted for mobile */}
        <motion.div
          className="absolute top-20 sm:top-32 right-[5%] sm:right-[15%] w-48 h-48 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-[#ed2568]/15 to-[#ffc857]/8 blur-2xl sm:blur-3xl z-0"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 sm:bottom-32 left-[5%] sm:left-[10%] w-40 h-40 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-[#ffc857]/15 to-[#ed2568]/8 blur-2xl sm:blur-3xl z-0"
          animate={{
            scale: [1, 0.8, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 min-h-screen items-center py-8 lg:py-16">
            {/* Left Content */}
            <div className="flex flex-col justify-center order-2 lg:order-1 lg:pr-8 relative z-10 text-center lg:text-left">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6 sm:mb-8 lg:mb-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Empowering{' '}
                <span className="bg-gradient-to-r from-[#ed2568] to-[#ffc857] bg-clip-text text-transparent">
                  Compliance
                </span>
                <br />
                <span className="block mt-2">
                  For <br className="hidden sm:block" />
                  <DynamicWords
                    words={[
                      'Ambitious Businesses',
                      'the Modern Era',
                      'UK Leaders',
                      'Every Industry',
                    ]}
                  />
                </span>
              </motion.h1>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 relative z-20 py-6 lg:py-10 justify-center lg:justify-start"
              >
                <button
                  onClick={() => {
                    const nextSection =
                      document.querySelector('section:nth-of-type(2)') ||
                      document.querySelector('#about') ||
                      document.querySelector('[data-section="about"]');
                    nextSection?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }}
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#ed2568] to-[#ee343b] text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 group text-sm sm:text-base"
                >
                  Learn more about us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => (window.location.href = '/services')}
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#4a90e2] text-white font-semibold rounded-full hover:bg-[#357abd] hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                >
                  Services & capabilities
                </button>
              </motion.div>
            </div>

            {/* RIGHT CONTENT - Mobile-First Layout */}
            <div className="relative order-1 lg:order-2 h-[400px] sm:h-[500px] lg:h-full lg:max-h-[600px] mb-8 lg:mb-0">
              {/* Mobile Layout - Stacked Cards */}
              <div className="block lg:hidden w-full h-full">
                {/* Main large image - Full width on mobile */}
                <motion.div
                  className="w-full h-[45%] rounded-xl overflow-hidden shadow-lg mb-3"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&crop=building"
                    alt="Modern building"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Two cards side by side on mobile */}
                <div className="flex gap-3 h-[25%] mb-3">
                  {/* Sectors card */}
                  <motion.div
                    className="flex-1 rounded-xl overflow-hidden shadow-lg relative"
                    style={{
                      backgroundImage:
                        'url(/Images/services/iso14001_cover_optimized.webp)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div className="absolute bottom-1 left-0 bg-black/60 text-white text-xs font-semibold px-2 py-1 rounded-r-md">
                      12+ Sectors
                    </div>
                  </motion.div>

                  {/* Services card */}
                  <motion.div
                    className="flex-1 rounded-xl shadow-lg relative"
                    style={{
                      backgroundImage: 'url(iso_cover_optimized.webp)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/20"></div>
                    <div className="absolute top-1 right-0 bg-white/90 text-[#1C1F2A] text-xs font-bold px-2 py-1 rounded-l-md shadow-md">
                      15+ Services
                    </div>
                  </motion.div>
                </div>

                {/* Experience banner - Full width */}
                <motion.div
                  className="w-full h-[25%] rounded-xl overflow-hidden flex items-center justify-center bg-cover bg-center px-4 text-white shadow-lg"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=150&fit=crop&crop=nature')",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="text-center">
                    <p className="font-bold text-sm sm:text-base mb-1">
                      Client-first consulting
                    </p>
                    <p className="text-xs sm:text-sm opacity-90">Since 2012</p>
                  </div>
                </motion.div>
              </div>

              {/* Desktop Layout - Original Grid */}
              <div className="hidden lg:block w-full h-full">
                {/* Large building image - Top Left */}
                <motion.div
                  className="absolute top-0 left-0 w-[48%] h-[65%] rounded-xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=600&fit=crop&crop=building"
                    alt="Modern building"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Sectors card - Top Right */}
                <motion.div
                  className="absolute top-0 right-0 w-[48%] h-[30%] rounded-xl overflow-hidden shadow-lg"
                  style={{
                    backgroundImage:
                      'url(/Images/services/iso14001_cover_optimized.webp)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="absolute bottom-2 left-0 bg-black/50 text-white text-sm font-semibold px-3 py-1 rounded-r-md">
                    12+ Sectors
                  </div>
                </motion.div>

                {/* Services card - Middle Right */}
                <motion.div
                  className="absolute top-[35%] right-0 w-[48%] h-[30%] rounded-xl flex flex-col items-center justify-center text-center p-4 shadow-lg"
                  style={{
                    backgroundImage: 'url(iso_cover_optimized.webp)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/20"></div>
                  <div className="absolute top-2 right-0 bg-white/80 text-[#1C1F2A] text-sm font-bold px-3 py-1 rounded-l-md shadow-md">
                    15+ Services
                  </div>
                </motion.div>

                {/* Experience banner - Bottom */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[30%] rounded-xl overflow-hidden flex items-center justify-center bg-cover bg-center p-6 text-white shadow-lg"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=200&fit=crop&crop=nature')",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="text-center">
                    <p className="font-bold text-lg mb-1">
                      Client-first consulting
                    </p>
                    <p className="text-sm opacity-90">Since 2012</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Preview - Framer Motion Version */}
      <section
        id="services-section"
        className="py-20 bg-gradient-to-br from-off-white via-pure-white to-soft-lavender-grey/30 relative overflow-hidden"
      >
        {/* Modern Geometric Background Pattern */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Diagonal lines pattern */}
          <motion.div
            className="absolute inset-0 w-full h-full opacity-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ duration: 1.5 }}
          >
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `linear-gradient(135deg, var(--color-crimson-pink) 1px, transparent 1px), 
                               linear-gradient(45deg, var(--color-crimson-pink) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }}
            ></div>
          </motion.div>

          {/* Subtle dot pattern */}
          <motion.div
            className="absolute inset-0 w-full h-full opacity-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(var(--color-vivid-red) 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
              }}
            ></div>
          </motion.div>

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
        </div>

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
        {/* Modern background elements - optimized for performance */}
        <div className="absolute inset-0 z-0 overflow-hidden opacity-5">
          {/* Dot grid pattern - lighter than hexagonal grid */}
          <div
            className="absolute top-0 right-0 w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(237, 37, 104, 0.3) 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }}
          ></div>
        </div>

        {/* Diagonal accent lines - simplified */}
        <div className="absolute inset-0 z-0 overflow-hidden opacity-5">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(237, 37, 104, 0.2) 0%, transparent 10%, transparent 90%, rgba(255, 200, 87, 0.2) 100%)`,
            }}
          ></div>
        </div>

        {/* Animated elements - reduced number and simplified */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 z-0"
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect
              x="10"
              y="10"
              width="80"
              height="80"
              rx="5"
              fill="rgba(237, 37, 104, 0.05)"
              stroke="rgba(237, 37, 104, 0.1)"
              strokeWidth="0.5"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-20 w-64 h-64 z-0"
          animate={{
            y: [0, 20, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        >
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20,20 L80,20 L80,80 L20,80 Z"
              transform="rotate(15, 50, 50)"
              fill="rgba(255, 200, 87, 0.05)"
              stroke="rgba(255, 200, 87, 0.1)"
              strokeWidth="0.5"
            />
          </svg>
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          {/* Header Section with Citrix-style design */}
          <motion.div
            className="text-center mb-10 relative"
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-charcoal-navy relative inline-block"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                type: 'spring',
                stiffness: 100,
              }}
            >
              {/* Animated text with staggered letters */}
              {'Why Choose '.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: 0.3 + index * 0.03,
                    ease: 'easeOut',
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
              <motion.span
                className="text-gradient-crimson relative inline-block ml-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Animated Citrix text */}
                {'Citrix'.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: 0.6 + index * 0.05,
                      ease: 'easeOut',
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
                {/* Enhanced animated underline with shine effect */}
                <motion.div className="relative h-2 mt-2">
                  <motion.div
                    className="absolute left-0 bottom-0 h-full w-full bg-gradient-to-r from-crimson-pink to-vivid-red rounded-sm"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-white opacity-30 rounded-sm"
                    initial={{ width: '30%', x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  />
                </motion.div>
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-xl text-charcoal-navy/70 max-w-4xl mx-auto leading-relaxed mt-8"
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
      {/*<AnimatedAssembly />*/}

      {/* Logo Slider Section - Above Why Choose Citrix */}
      <section className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-charcoal-navy mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our{' '}
            <span className="text-gradient-crimson">
              Accreditations & Certifications
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-charcoal-navy/70 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Recognized by industry-leading organizations for our commitment to
            excellence and compliance standards
          </motion.p>
        </div>
        <LogoSlider />
      </section>

      {/* Ready to Get Started Section - Enhanced with Cards */}

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
            Ready to Get Started?
          </h2>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10">
            Contact our expert team today for a free consultation and discover
            how we can help your business achieve compliance excellence.
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
                <div className="text-3xl font-bold text-orange mb-2">100%</div>
                <p className="text-gray-200">Compliance Guaranteed</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-300 mb-2">
                  250+
                </div>
                <p className="text-gray-200">Contractors Accredited</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-300 mb-2">
                  FREE
                </div>
                <p className="text-gray-200">Initial Consultation</p>
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
