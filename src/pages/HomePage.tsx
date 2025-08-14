import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { whyChooseUsData } from '../data/whyChooseUsData';
import { ArrowRight, Phone, FileText, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoSlider from '../components/common/LogoSlider';
import FeatureSlider from '../components/common/FeatureSlider';
import AnimatedAssembly from '../components/common/AnimatedAssembly';
import DynamicWords from "../components/common/DynamicWords.tsx";
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

      <section className="relative min-h-[90vh] bg-[#1C1F2A] text-white overflow-hidden">
        {/* Background Image Layer with Red Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C1F2A] to-[#2A1C22] z-0"></div>
        
        {/* Red-themed background pattern */}
        <div 
          className="absolute inset-0 opacity-[0.05] z-0" 
          style={{
            backgroundImage: `linear-gradient(to right, #ed2568 1px, transparent 1px), linear-gradient(to bottom, #ed2568 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
        
        {/* Animated background circles */}
        <motion.div
          className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-gradient-to-br from-white/30 to-white/10 blur-3xl z-0"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-[5%] w-72 h-72 rounded-full bg-gradient-to-tr from-white/30 to-white/10 blur-3xl z-0"
          animate={{
            scale: [1, 0.8, 1],
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        
        {/* New white waves positioned above the end of Hero section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 overflow-visible z-30">
          {/* White wave 1 */}
          <motion.svg 
            viewBox="0 0 1440 320" 
            className="absolute bottom-0 w-full h-auto"
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0 }}
          >
            <motion.path 
              fill="#ffffff" 
              fillOpacity="1"
              d="M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,138.7C672,117,768,107,864,122.7C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              animate={{
                d: [
                  "M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,138.7C672,117,768,107,864,122.7C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,160L48,170.7C96,181,192,203,288,213.3C384,224,480,224,576,213.3C672,203,768,181,864,186.7C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 8,
                ease: "easeInOut",
                delay: 0
              }}
            />
          </motion.svg>
          
          {/* White wave 2 */}
          <motion.svg 
            viewBox="0 0 1440 320" 
            className="absolute bottom-0 w-full h-auto"
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0 }}
          >
            <motion.path 
              fill="#ffffff" 
              fillOpacity="0.8"
              d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,106.7C672,117,768,171,864,197.3C960,224,1056,224,1152,197.3C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              animate={{
                d: [
                  "M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,106.7C672,117,768,171,864,197.3C960,224,1056,224,1152,197.3C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,154.7C672,160,768,192,864,202.7C960,213,1056,203,1152,186.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 10,
                ease: "easeInOut",
                delay: 0
              }}
            />
          </motion.svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 min-h-[90vh] items-center py-8 sm:py-10 lg:py-12">
            
            {/* Left Content - Text and CTA */}
            <div className="flex flex-col justify-center lg:pr-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="mb-3 mt-0"
              >
                <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#ed2568]/20 to-[#ffc857]/10 text-white font-semibold rounded-full text-sm">
                  UK's Leading Compliance Partner
                </span>
              </motion.div>
              
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Empowering <span className="text-gradient-crimson">
                  Compliance
                </span>
                <br />
                <span className="block mt-1">
                  For <span className="inline-block">
                    <DynamicWords words={["Ambitious Businesses.", "the Modern Era.", "UK Leaders.", "Every Industry."]} />
                  </span>
                </span>
              </motion.h1>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-12 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >


              </motion.div>

              <motion.div
                className="flex items-center gap-2 mt-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
               
               
                <div className="flex space-x-3">
                  <motion.div 
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1C1F2A] border border-white/10 shadow-lg"
                    whileHover={{ y: -3, boxShadow: '0 10px 25px -5px rgba(237, 37, 104, 0.3)' }}
                    transition={{ duration: 0.2 }}
                  >

                   
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Animated Cards */}
            <div className="relative flex items-center justify-center lg:justify-end h-full mt-8 lg:mt-0">
              <div className="relative w-full max-w-lg">
                {/* Animated Cards Stack */}
                <motion.div className="relative h-[400px] sm:h-[450px] md:h-[500px] w-full">
                  {/* Card 1 - ISO Certification */}
                  <motion.div
                    className="absolute top-0 right-0 sm:right-0 w-60 sm:w-64 bg-white rounded-2xl shadow-2xl overflow-hidden border border-white/20"
                    initial={{ opacity: 0, y: 60, rotate: 5 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    whileHover={{ y: -10, rotate: -2, scale: 1.03, transition: { duration: 0.3 } }}
                  >
                    <div className="h-3 bg-gradient-to-r from-[#ed2568] to-[#ff4081]"></div>
                    <div className="p-5">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-[#ed2568]/10 flex items-center justify-center mr-3 shadow-md">
                          <FileText className="w-5 h-5 text-[#ed2568]" />
                        </div>
                        <h3 className="font-bold text-charcoal-navy">ISO Certification</h3>
                      </div>
                      <p className="text-sm text-charcoal-navy/70 mb-3">Streamlined certification process with expert guidance</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-[#ed2568] hover:underline cursor-pointer">Learn more</span>
                        <span className="text-xs font-medium bg-[#ed2568]/10 text-[#ed2568] px-2 py-1 rounded-full shadow-sm">99% Success</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Card 2 - Health & Safety */}
                  <motion.div
                    className="absolute top-[100px] sm:top-[120px] right-[60px] sm:right-[80px] w-60 sm:w-64 bg-white rounded-2xl shadow-2xl overflow-hidden border border-white/20"
                    initial={{ opacity: 0, y: 60, rotate: -5 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    whileHover={{ y: -10, rotate: 2, scale: 1.03, transition: { duration: 0.3 } }}
                  >
                    <div className="h-3 bg-gradient-to-r from-[#ffc857] to-[#ffb74d]"></div>
                    <div className="p-5">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-[#ffc857]/10 flex items-center justify-center mr-3 shadow-md">
                          <Phone className="w-5 h-5 text-[#ffc857]" />
                        </div>
                        <h3 className="font-bold text-charcoal-navy">Health & Safety</h3>
                      </div>
                      <p className="text-sm text-charcoal-navy/70 mb-3">Comprehensive workplace safety solutions</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-[#ffc857] hover:underline cursor-pointer">Learn more</span>
                        <span className="text-xs font-medium bg-[#ffc857]/10 text-[#ffc857] px-2 py-1 rounded-full shadow-sm">UK Compliant</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Card 3 - Compliance Stats */}
                  <motion.div
                    className="absolute top-[200px] sm:top-[240px] right-[20px] sm:right-[30px] w-60 sm:w-64 bg-white rounded-2xl shadow-2xl overflow-hidden border border-white/20"
                    initial={{ opacity: 0, y: 60, rotate: 3 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    whileHover={{ y: -10, rotate: -1, scale: 1.03, transition: { duration: 0.3 } }}
                  >
                    <div className="h-3 bg-gradient-to-r from-[#4a90e2] to-[#81c3fd]"></div>
                    <div className="p-5">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-[#4a90e2]/10 flex items-center justify-center mr-3">
                          <MessageSquare className="w-5 h-5 text-[#4a90e2]" />
                        </div>
                        <h3 className="font-bold text-charcoal-navy">Compliance Stats</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        <div className="bg-gray-50 p-2 rounded-lg text-center">
                          <div className="text-lg font-bold text-[#ed2568]">98%</div>
                          <div className="text-xs text-charcoal-navy/70">Success Rate</div>
                        </div>
                        <div className="bg-gray-50 p-2 rounded-lg text-center">
                          <div className="text-lg font-bold text-[#ffc857]">500+</div>
                          <div className="text-xs text-charcoal-navy/70">Clients</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="text-xs font-medium text-[#4a90e2]">View all statistics</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Removed decorative elements that were causing white effect behind cards */}
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          onClick={() => {
            document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-xs text-white/60 mb-2 font-medium">Scroll to explore</span>
          <svg className="animate-bounce" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="#ED2568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </section>



  
      {/* Services Preview - Framer Motion Version */}
      <section id="services-section" className="py-20 bg-gradient-to-br from-off-white via-pure-white to-soft-lavender-grey/30 relative overflow-hidden">
        {/* Modern Geometric Background Pattern */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Diagonal lines pattern */}
          <motion.div 
            className="absolute inset-0 w-full h-full opacity-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ duration: 1.5 }}
          >
            <div className="w-full h-full" style={{
              backgroundImage: `linear-gradient(135deg, var(--color-crimson-pink) 1px, transparent 1px), 
                               linear-gradient(45deg, var(--color-crimson-pink) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}></div>
          </motion.div>

          {/* Subtle dot pattern */}
          <motion.div 
            className="absolute inset-0 w-full h-full opacity-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            <div className="w-full h-full" style={{
              backgroundImage: `radial-gradient(var(--color-vivid-red) 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}></div>
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
          <div className="absolute top-0 right-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle, rgba(237, 37, 104, 0.3) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        {/* Diagonal accent lines - simplified */}
        <div className="absolute inset-0 z-0 overflow-hidden opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `linear-gradient(45deg, rgba(237, 37, 104, 0.2) 0%, transparent 10%, transparent 90%, rgba(255, 200, 87, 0.2) 100%)`,
          }}></div>
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
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="80" height="80" rx="5" fill="rgba(237, 37, 104, 0.05)" stroke="rgba(237, 37, 104, 0.1)" strokeWidth="0.5"/>
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
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M20,20 L80,20 L80,80 L20,80 Z" transform="rotate(15, 50, 50)" fill="rgba(255, 200, 87, 0.05)" stroke="rgba(255, 200, 87, 0.1)" strokeWidth="0.5"/>
          </svg>
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          {/* Header Section with Citrix-style design */}
          <motion.div
            className="text-center mb-16 relative"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              type: 'spring',
              stiffness: 100,
            }}
          >
            {/* Modern decorative element behind title */}
            <motion.div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 -z-10 opacity-5"
              initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
              whileInView={{ opacity: 0.05, scale: 1, rotate: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.1 }}
            >
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M50,0 L93.3,25 L93.3,75 L50,100 L6.7,75 L6.7,25 Z" fill="rgba(237, 37, 104, 1)" />
              </svg>
            </motion.div>
            
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
              {"Why Choose ".split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.3 + index * 0.03,
                    ease: "easeOut"
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
                {"Citrix".split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.6 + index * 0.05,
                      ease: "easeOut"
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
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
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
            Our Accreditations & Certifications
          </motion.h2>
          <motion.p 
            className="text-lg text-charcoal-navy/70 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Recognized by industry-leading organizations for our commitment to excellence and compliance standards
          </motion.p>
        </div>
        <LogoSlider />
      </section>

      {/* Ready to Get Started Section - Enhanced with Cards */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Animated Smart Waves Overlay with Red Theme */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Primary wave pattern - large waves */}
          <motion.div 
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 1.5 }}
          >
            <svg width="100%" height="100%" viewBox="0 0 1440 400" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="startedWaveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ed2568" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#ff3b5c" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#ed2568" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              <path 
                d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                fill="url(#startedWaveGradient1)"
              />
            </svg>
          </motion.div>

          {/* Secondary wave pattern - medium waves */}
          <motion.div 
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            <svg width="100%" height="100%" viewBox="0 0 1440 400" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="startedWaveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff3b5c" stopOpacity="0.7" />
                  <stop offset="50%" stopColor="#ed2568" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#ff3b5c" stopOpacity="0.7" />
                </linearGradient>
              </defs>
              <path 
                d="M0,256L48,261.3C96,267,192,277,288,277.3C384,277,480,267,576,240C672,213,768,171,864,165.3C960,160,1056,192,1152,213.3C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                fill="url(#startedWaveGradient2)"
              />
            </svg>
          </motion.div>
        </div>
        
        {/* Modern diagonal accent line - top right */}
        <motion.div 
          className="absolute top-0 right-0 w-full h-64 -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="opacity-10">
            <motion.path 
              d="M100,0 L100,100 L0,100" 
              fill="none" 
              stroke="url(#diagonalGradient)" 
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.2 }}
            />
            <defs>
              <linearGradient id="diagonalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ED2568" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#FFC857" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
        
        {/* Modern dot pattern - bottom left */}
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-64 -z-10 opacity-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 10% 90%, rgba(237, 37, 104, 0.2) 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}></div>
        </motion.div>
        
        {/* Animated square element - top right */}
        <motion.div 
          className="absolute top-20 right-20 w-16 h-16 border border-crimson-pink/20 -z-10"
          initial={{ opacity: 0, rotate: 0 }}
          whileInView={{ opacity: 0.5, rotate: 45 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          style={{
            transition: "all 5s ease-in-out",
            animationIterationCount: "infinite"
          }}
        />
        
        {/* Animated square element - bottom left */}
        <motion.div 
          className="absolute bottom-20 left-20 w-12 h-12 border border-warm-amber/20 -z-10"
          initial={{ opacity: 0, rotate: 0 }}
          whileInView={{ opacity: 0.5, rotate: 45 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          animate={{
            y: [0, 10, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          style={{
            transition: "all 6s ease-in-out",
            animationIterationCount: "infinite"
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

          {/* Animated Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Card 1 */}
            <motion.div
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-6 relative">
                <div className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 opacity-5">
                  <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="#ED2568" strokeWidth="0.5">
                    <rect x="2" y="2" width="20" height="20" rx="2" transform="rotate(45 12 12)" />
                  </svg>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-crimson-pink to-vivid-red rounded-md flex items-center justify-center mb-4 text-white">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-charcoal-navy">Free Consultation</h3>
                <p className="text-charcoal-navy/70 mb-4">Schedule a no-obligation call with our experts to discuss your specific needs.</p>
                <motion.div
                  className="text-crimson-pink font-medium flex items-center cursor-pointer group"
                  onClick={() => handleNavClick('contact')}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-6 relative">
                <div className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 opacity-5">
                  <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="#ED2568" strokeWidth="0.5">
                    <rect x="2" y="2" width="20" height="20" rx="2" transform="rotate(45 12 12)" />
                  </svg>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-warm-amber to-amber-500 rounded-md flex items-center justify-center mb-4 text-white">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-charcoal-navy">Custom Solutions</h3>
                <p className="text-charcoal-navy/70 mb-4">Tailored health & safety solutions designed specifically for your business needs.</p>
                <motion.div
                  className="text-crimson-pink font-medium flex items-center cursor-pointer group"
                  onClick={() => handleNavClick('services')}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-6 relative">
                <div className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 opacity-5">
                  <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="#ED2568" strokeWidth="0.5">
                    <rect x="2" y="2" width="20" height="20" rx="2" transform="rotate(45 12 12)" />
                  </svg>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-md flex items-center justify-center mb-4 text-white">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-charcoal-navy">Expert Support</h3>
                <p className="text-charcoal-navy/70 mb-4">Ongoing professional support to ensure your business stays compliant.</p>
                <motion.div
                  className="text-crimson-pink font-medium flex items-center cursor-pointer group"
                  onClick={() => handleNavClick('about')}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  Meet Our Team
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
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