import { useNavigate } from 'react-router-dom';
import {
  CheckCircle,
  Shield,
  Award,
  FileText,
  Users,
  Target,
  Building,
} from 'lucide-react';
import {
  chasBenefits,
  smallCompanyRequirements,
  largeCompanyRequirements,
  chasProcessSteps,
} from '../../../data/chasData';

import { motion } from 'framer-motion';

const serviceItems = [
  {
    icon: FileText,
    title: 'Application Completion',
    description:
      'We complete the CHAS registration forms on your behalf together with the submission of supporting documents.',
    bgFrom: 'from-[#E5E6F0]', // soft-lavender-grey
    bgTo: 'to-[#F9F9F9]', // off-white
    iconBg: 'bg-[hsl(var(--primary))]',
  },
  {
    icon: Shield,
    title: 'Expert Guidance',
    description:
      'Our expert guidance regarding health and safety procedures ensures your application meets all required standards.',
    bgFrom: 'from-[#FFC857]', // warm amber
    bgTo: 'to-[#F9F9F9]',
    iconBg: 'bg-[hsl(var(--accent))]',
  },
  {
    icon: Target,
    title: 'Proven Success',
    description:
      "We've successfully completed CHAS registration for hundreds of contractors with a 100% success rate.",
    bgFrom: 'from-[#ED2568]', // primary crimson pink
    bgTo: 'to-[#F9F9F9]',
    iconBg: 'bg-[hsl(var(--destructive))]',
  },
];
export function ChasAssistancePage() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-16 overflow-hidden"
        style={{ backgroundImage: "url('/chas12.png')" }}
      >
        <div className="absolute inset-0 bg-[#1C1F2A]/80"></div>{' '}
        {/* Charcoal overlay */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-white/10 rounded-full mr-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <span className="text-[#ED2568] font-semibold tracking-wide uppercase">
                  CHAS Accreditation
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                CHAS Assistance & Registration
              </h1>
              <p className="text-xl text-[#F9F9F9]/90 mb-8">
                Expert guidance for your CHAS (Contractors Health and Safety
                Assessment Scheme) accreditation. We handle the entire process
                while you focus on running your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleContactClick}
                  className="bg-[#ED2568] hover:bg-[#EE343B] text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300"
                >
                  Get Free Quote
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-[#ED2568] px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-teal-dark mb-2">
                100%
              </div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-teal-dark mb-2">
                500+
              </div>
              <div className="text-gray-600 font-medium">
                Contractors Accredited
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-teal-dark mb-2">
                24/7
              </div>
              <div className="text-gray-600 font-medium">Expert Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-teal-dark mb-2">
                Fast
              </div>
              <div className="text-gray-600 font-medium">Turnaround Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* About CHAS Section */}
      <section className="py-16 bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold tracking-tight mb-6 text-primary">
                About{' '}
                <span className="text-gradient-crimson">
                  CHAS Accreditation
                </span>
              </h2>
              <p className="text-base mb-4 text-muted-foreground">
                <span className="font-medium text-secondary-foreground">
                  CHAS
                </span>{' '}
                is one of the founders of third-party accreditation. When you
                undertake CHAS registration, you’re showing that you meet the{' '}
                <span className="text-primary font-semibold">
                  industry’s recognised safety standards
                </span>
                .
              </p>
              <p className="text-base mb-4 text-muted-foreground">
                Accreditation opens doors to{' '}
                <span className="text-primary">new opportunities</span>, builds
                trust with clients, and ensures your team is protected by robust
                health and safety practices.
              </p>
              <p className="text-base text-muted-foreground">
                Most local authorities—and many private companies—
                <span className="text-primary font-medium">require CHAS</span>
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
            <h2 className="text-4xl font-bold mb-4 text-crimson-pink">
              CHAS Accreditation Requirements
            </h2>
            <p className="text-lg text-charcoal-navy max-w-2xl mx-auto">
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
            <h2 className="text-4xl font-bold text-crimson-pink mb-4">
              Our CHAS Registration Process
            </h2>
            <p className="text-lg text-charcoal-navy max-w-2xl mx-auto">
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
      <section className="py-16 bg-[hsl(var(--background))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-4">
              Our Comprehensive CHAS Service
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              As part of our hassle-free and in-depth service, we'll complete
              everything on your behalf.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className={`bg-gradient-to-br ${item.bgFrom} ${item.bgTo} p-6 rounded-xl border border-border shadow-sm`}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 ${item.iconBg} rounded-lg mr-4`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[hsl(var(--foreground))]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="relative py-16 sm:py-20 bg-gray-900 text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/Images/landingpage/get-started.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#007E7A]/70 via-[#1E2A3A]/80 to-gray-900/90"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="backdrop-blur-md bg-white/10 border border-white/10 rounded-xl shadow-xl p-6 sm:p-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Start Your CHAS Registration Today
            </h2>
            <p className="text-base sm:text-lg text-gray-200 mb-6 max-w-xl mx-auto">
              Let us handle your CHAS accreditation so you can focus on running
              your business without missing growth opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleContactClick}
                className="bg-gradient-to-r from-orange-500 to-[#F7941E] hover:from-orange-600 hover:to-orange-500 text-white px-6 py-3 text-sm sm:text-base font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                Get Free Quote
              </button>
              <button
                onClick={handleContactClick}
                className="border border-white text-white hover:bg-white hover:text-[#007E7A] px-6 py-3 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300"
              >
                Speak to an Advisor
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
