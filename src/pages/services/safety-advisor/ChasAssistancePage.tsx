import { useNavigate } from 'react-router-dom';
import {
  CheckCircle,
  Users,
  ArrowRight,
  ExternalLink,
  Building,
} from 'lucide-react';
import {
  chasBenefits,
  smallCompanyRequirements,
  largeCompanyRequirements,
  chasProcessSteps,
  serviceItems,
  statsData,
} from '../../../data/chasData';
import { useEffect, useState, useRef } from 'react';

import { motion, cubicBezier } from 'framer-motion';

type AnimatedCounterProps = {
  target: number;
  suffix?: string;
  duration?: number;
};

const AnimatedCounter = ({
  target,
  suffix = '',
  duration = 2,
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (typeof target !== 'number') return;
    let start = 0;
    const increment = target / (duration * 60); // 60 FPS approximation
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        setCount(target);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span>
      {typeof target === 'number' ? count : ''}
      {suffix}
    </span>
  );
};

export function ChasAssistancePage() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  const aboutRef = useRef<HTMLDivElement | null>(null);

  const handleLearnMoreClick = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Redesigned */}
      <section
        className="relative min-h-screen bg-cover bg-center bg-fixed overflow-hidden"
        style={{ backgroundImage: "url('/Images/services/chas12_optimized.webp')" }}
      >
        {/* Enhanced overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-navy/90 via-charcoal-navy/85 to-charcoal-navy/95"></div>

        {/* Main content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-left">
              {/* Main heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="text-pure-white block">CHAS</span>
                  <span className="text-gradient-crimson block">
                    Assistance &
                  </span>
                  <span className="text-pure-white block">Registration</span>
                </h1>

                {/* Animated underline */}
                <div className="w-25 h-1 bg-crimson-gradient rounded-full animate-pulse"></div>
              </div>

              {/* Description */}
              <p className="text-xl md:text-2xl text-soft-lavender-grey/80 leading-relaxed max-w-2xl">
                Expert guidance for your{' '}
                <span className="text-crimson-pink font-semibold">
                  CHAS (Contractors Health and Safety Assessment Scheme)
                </span>{' '}
                accreditation. We handle the entire process while you focus on
                running your business.
              </p>

              {/* Key benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3 p-4 bg-pure-white/5 backdrop-blur-sm rounded-xl border border-soft-lavender-grey/20">
                  <div className="w-3 h-3 bg-warm-amber rounded-full"></div>
                  <span className="text-pure-white font-medium">
                    Expert Consultation
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-pure-white/5 backdrop-blur-sm rounded-xl border border-soft-lavender-grey/20">
                  <div className="w-3 h-3 bg-crimson-pink rounded-full"></div>
                  <span className="text-pure-white font-medium">
                    Full Process Support
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <button
                  onClick={handleContactClick}
                  className="bg-crimson-gradient hover:bg-vivid-red text-pure-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl btn-premium group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Get Free Quote
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>

                <button
                  onClick={handleLearnMoreClick}
                  className="border-2 border-pure-white/80 text-pure-white hover:bg-pure-white hover:text-charcoal-navy px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:backdrop-blur-none group"
                >
                  <span className="flex items-center justify-center gap-3">
                    Learn More
                    <ExternalLink className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>

            {/* Right Content - Interactive Elements */}
            <div className="relative animate-fade-in-right">
              {/* Floating card */}
              <div className="bg-pure-white/10 backdrop-blur-lg border border-soft-lavender-grey/20 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 card-premium">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-pure-white mb-2">
                      Get Started Today
                    </h3>
                    <p className="text-soft-lavender-grey/70">
                      Simple 3-step process
                    </p>
                  </div>

                  {/* Steps */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-pure-white/5 rounded-xl">
                      <div className="w-8 h-8 bg-crimson-gradient rounded-full flex items-center justify-center text-pure-white font-bold text-sm">
                        1
                      </div>
                      <div>
                        <div className="text-pure-white font-medium">
                          Contact Us
                        </div>
                        <div className="text-soft-lavender-grey/60 text-sm">
                          Free consultation call
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-pure-white/5 rounded-xl">
                      <div className="w-8 h-8 bg-warm-amber rounded-full flex items-center justify-center text-charcoal-navy font-bold text-sm">
                        2
                      </div>
                      <div>
                        <div className="text-pure-white font-medium">
                          Documentation
                        </div>
                        <div className="text-soft-lavender-grey/60 text-sm">
                          We handle all paperwork
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-pure-white/5 rounded-xl">
                      <div className="w-8 h-8 bg-crimson-gradient rounded-full flex items-center justify-center text-pure-white font-bold text-sm">
                        3
                      </div>
                      <div>
                        <div className="text-pure-white font-medium">
                          Get Certified
                        </div>
                        <div className="text-soft-lavender-grey/60 text-sm">
                          CHAS accreditation achieved
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-6 bg-gradient-to-br from-white to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {statsData.map((stat, i) => (
              <motion.div
                key={i}
                className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: cubicBezier(0, 0, 0.2, 1) }}
              >
                <div className="text-4xl font-extrabold text-pink-600 mb-2">
                  {typeof stat.value === 'number' ? (
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                      duration={stat.duration}
                    />
                  ) : (
                    <span>{stat.suffix}</span>
                  )}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About CHAS Section */}
      <section id="about-chas" ref={aboutRef} className="py-6 bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
            {/* Left Column */}
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold tracking-tight mb-6 text-primary">
                About{' '}
                <span className="text-gradient-crimson">
                  CHAS Accreditation
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                <span className="font-medium text-secondary-foreground">
                  CHAS
                </span>{' '}
                is one of the founders of third-party accreditation. When you
                undertake CHAS registration, you’re showing that you meet the{' '}
                <span className="text-crimson-pink font-semibold">
                  industry’s recognised safety standards
                </span>
                .
              </p>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                Accreditation opens doors to{' '}
                <span className="text-crimson-pink font-medium">
                  new opportunities
                </span>
                , builds trust with clients, and ensures your team is protected
                by robust health and safety practices.
              </p>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                Most local authorities—and many private companies{' '}
                <span className="text-crimson-pink font-medium">
                  require CHAS
                </span>{' '}
                registration. Start the process now with our expert guidance.
              </p>
            </div>

            {/* Right Column */}
            <div className="bg-card text-card-foreground p-8 rounded-2xl shadow-xl border border-border animate-fade-in-right">
              <h3 className="text-2xl font-bold text-center mb-6 text-primary">
                Why Choose Our CHAS Service?
              </h3>
              <div className="space-y-5">
                {chasBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 group transition-transform-smooth hover:scale-[1.02]"
                  >
                    <div className="flex-shrink-0 p-3 rounded-lg bg-secondary text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors-smooth">
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors-smooth">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-pure-white text-charcoal-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold tracking-tight mb-6 text-primary">
              CHAS{' '}
              <span className="text-gradient-crimson">
                Accreditation Requirements
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6">
              CHAS registration requires a recognised standard of health and
              safety management and ensures your compliance with
              industry-specific regulations.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Small Companies */}
            <div className="p-8 rounded-2xl border border-soft-lavender-grey bg-soft-lavender-grey/40 animate-fade-in-left">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-crimson-pink rounded-full mr-4">
                  <Users className="h-6 w-6 text-pure-white" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal-navy">
                  Companies with Fewer than 5 Employees
                </h3>
              </div>
              <div className="space-y-4">
                {smallCompanyRequirements.map((requirement, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 group transition-transform duration-200 ease-in-out hover:translate-x-1"
                  >
                    <CheckCircle className="h-5 w-5 text-warm-amber mt-0.5 flex-shrink-0" />
                    <span className="text-charcoal-navy">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Large Companies */}
            <div className="p-8 rounded-2xl border border-soft-lavender-grey bg-soft-lavender-grey/40 animate-fade-in-right">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-crimson-pink rounded-full mr-4">
                  <Building className="h-6 w-6 text-pure-white" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal-navy">
                  Companies with 5 or More Employees
                </h3>
              </div>
              <div className="space-y-4">
                {largeCompanyRequirements.map((requirement, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 group transition-transform duration-200 ease-in-out hover:translate-x-1"
                  >
                    <CheckCircle className="h-5 w-5 text-warm-amber mt-0.5 flex-shrink-0" />
                    <span className="text-charcoal-navy text-sm">
                      {requirement}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-off-white text-charcoal-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold tracking-tight mb-6 text-primary">
              Our CHAS{' '}
              <span className="text-gradient-crimson">
                Registration Process
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6">
              We'll guide you through the process from start to finish until you
              have achieved your CHAS accreditation.
            </p>
          </div>

          {/* Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {chasProcessSteps.map((step, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-crimson-pink text-pure-white rounded-full flex items-center justify-center text-2xl font-bold shadow-md">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-charcoal-navy/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-24 bg-gradient-to-br from-off-white via-pure-white to-soft-lavender-grey/30 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-10 w-40 h-40 bg-crimson-pink/10 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-32 right-16 w-32 h-32 bg-warm-amber/15 rounded-full blur-2xl animate-float"
            style={{ animationDelay: '3s' }}
          ></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-crimson-pink/5 rounded-full blur-xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold tracking-tight mb-6 text-primary">
              Our Comprehensive{' '}
              <span className="text-gradient-crimson ">CHAS Service</span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6">
              As part of our hassle-free and in-depth service, we'll complete
              everything on your behalf.
              <span className="text-crimson-pink font-semibold">
                {' '}
                No stress, no hassle, just results.
              </span>
            </p>

            {/* Stats or highlights */}
            <div className="flex justify-center gap-8 text-center">
              <div className="px-4">
                <div className="text-2xl font-bold text-crimson-pink">100%</div>
                <div className="text-sm text-muted-foreground">
                  Handled for You
                </div>
              </div>
              <div className="px-4 border-l border-soft-lavender-grey">
                <div className="text-2xl font-bold text-warm-amber">Expert</div>
                <div className="text-sm text-muted-foreground">Guidance</div>
              </div>
              <div className="px-4 border-l border-soft-lavender-grey">
                <div className="text-2xl font-bold text-crimson-pink">Fast</div>
                <div className="text-sm text-muted-foreground">Processing</div>
              </div>
            </div>
          </motion.div>

          {/* Service Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100,
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="group cursor-pointer"
              >
                <div className="bg-pure-white/80 backdrop-blur-sm border border-soft-lavender-grey/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 card-premium relative overflow-hidden h-full">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-crimson-pink/5 via-transparent to-warm-amber/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                  <div className="relative z-10">
                    {/* Icon and Title */}
                    <div className="flex items-start mb-6">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-charcoal-navy group-hover:text-crimson-pink transition-colors duration-300 mb-2">
                          {item.title}
                        </h3>
                        <div className="w-15 h-1 bg-gradient-to-r from-crimson-pink to-warm-amber rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed group-hover:text-charcoal-navy/80 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-crimson-pink/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section
        className="py-20 bg-gradient-to-r from-teal-gradient-dark to-teal-gradient-light text-white relative overflow-hidden"
        style={{
          backgroundImage: "url('/Images/landingpage/get-started_optimized.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Start Your CHAS Registration Today
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10">
            Let us handle your CHAS accreditation so you can focus on running
            your business without missing growth opportunities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={handleContactClick}
              className="bg-gradient-to-r from-[#FFC857] to-[#ED2568] hover:from-[#ED2568] hover:to-[#FFC857] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105 group"
            >
              Speak to an Advisor
              <ArrowRight className="ml-2 h-5 w-5 inline transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
