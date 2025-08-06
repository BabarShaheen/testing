import { useNavigate } from 'react-router-dom';
import {
  Shield,
  AlertTriangle,
  FileSearch,
  ClipboardCheck,
  Eye,
  Target,
  Users,
  Award,
  ArrowRight,
} from 'lucide-react';
import { Button } from '../../../components/ui/button';
import {
  healthSafetyServices,
  benefitsData,
  accreditationCards,
} from '../../../data/healthSafetyServicesData';
import { AccreditationCard, SectionHeader } from '../../../components/common';

import { motion } from 'framer-motion';

export const AccreditationSection = () => (
  <motion.div
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12"
    initial="hidden"
    whileInView="visible"
    variants={{
      visible: {
        transition: {
          staggerChildren: 0.2,
        },
      },
    }}
    viewport={{ once: true }}
  >
    {accreditationCards.map((card, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: idx * 0.1 }}
        viewport={{ once: true }}
      >
        <AccreditationCard {...card} />
      </motion.div>
    ))}
  </motion.div>
);

const benefitIcons: Record<string, JSX.Element> = {
  Award: <Award className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  Target: <Target className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
};

export function HealthSafetyPage() {
  const navigate = useNavigate();

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Eye':
        return Eye;
      case 'AlertTriangle':
        return AlertTriangle;
      case 'FileSearch':
        return FileSearch;
      case 'ClipboardCheck':
        return ClipboardCheck;
      case 'Award':
        return Award;
      default:
        return Shield;
    }
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleServiceClick = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <div className="min-h-screen">
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1C1F2A] text-white px-6 sm:px-12 lg:px-20">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url('/Images/services/healthandsafety.jpg')",
            filter: 'brightness(0.7)',
          }}
        />

        {/* Content Layer */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          {/* Title */}

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-pure-white block">Comprehensive</span>
            <span className="text-gradient-crimson block">Health & Safety</span>
            <span className="text-pure-white block">Solutions</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-soft-lavender-grey/80 leading-relaxed max-w-2xl">
            Protect your workforce, ensure compliance, and build a culture of
            safety with our expert health and safety services. From risk
            assessments to training programs, we've got you covered.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <button
              onClick={handleContactClick}
              className="bg-gradient-to-r from-[#ED2568] to-[#EE343B] text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:brightness-110 transition-all"
            >
              Get Free Consultation
            </button>

            <button
              onClick={() => navigate('/services')}
              className="border border-white/30 text-white hover:text-pink-300 hover:border-pink-300 px-8 py-3 text-lg rounded-xl transition-all"
            >
              View Our Services
            </button>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100 relative">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-r from-[#ED2568]/10 to-[#EE343B]/10 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={
              <>
                Our <span className="text-crimson-pink">Core Services</span>
              </>
            }
            description="Comprehensive health and safety solutions tailored to your business needs"
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {healthSafetyServices.map((service) => {
              const IconComponent = getIconComponent(service.iconName);
              return (
                <div
                  key={service.id}
                  className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  <div className="bg-gradient-to-br from-[#ED2568]/10 to-[#EE343B]/10 p-6 rounded-b-none flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-[#ED2568]" />
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                    <ul className="text-sm text-gray-500 list-disc list-inside">
                      {service.features?.slice(0, 3).map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>

                    <div className="pt-4 flex gap-4">
                      <button
                        onClick={() => handleServiceClick(service as any)}
                        className="text-sm font-medium text-[#ED2568] hover:underline"
                      >
                        Learn More
                      </button>
                      <button
                        onClick={handleContactClick}
                        className="text-sm font-medium text-white bg-[#ED2568] hover:bg-[#EE343B] px-4 py-2 rounded-lg transition-all"
                      >
                        Get a Quote
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SSIP Accreditation Support Section - Redesigned */}
      <section
        id="ssip-accreditation"
        className="py-24 bg-gradient-to-br from-charcoal-navy via-charcoal-navy to-charcoal-navy/90 relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-navy to-charcoal-navy/80"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, var(--crimson-pink) 2px, transparent 2px), radial-gradient(circle at 80% 50%, var(--warm-amber) 1px, transparent 1px)`,
              backgroundSize: '100px 100px, 80px 80px',
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-pure-white mb-6 leading-tight">
              SSIP Accreditation
              <span className="text-gradient-crimson block mt-2">
                Support Services
              </span>
            </h2>

            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-soft-lavender-grey/80 mb-6 leading-relaxed">
                CHAS, SafeContractor, Acclaim, Achilles, ConstructionLine, SMAS,
                EXOR & Altius
              </p>
              <div className="bg-crimson-pink/10 backdrop-blur-sm border border-crimson-pink/30 rounded-2xl p-6 inline-block">
                <p className="text-lg font-semibold text-crimson-pink">
                  Discounts available for multiple accreditations — Call us:
                  <span className="text-warm-amber font-bold ml-2">
                    +44 (0) 123 456 7890
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Accreditation Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16"
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            viewport={{ once: true }}
          >
            {accreditationCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1,
                  type: 'spring',
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-pure-white/10 backdrop-blur-sm border border-soft-lavender-grey/20 rounded-2xl p-6 hover:bg-pure-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl card-premium relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-crimson-pink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                  {/* Card content - you'll need to customize based on AccreditationCard component */}
                  <div className="relative z-10">
                    {/* Title */}
                    <h3 className="text-lg font-bold text-pure-white mb-2 group-hover:text-crimson-pink transition-colors duration-300">
                      {card.title || `Accreditation ${idx + 1}`}
                    </h3>

                    {/* Description */}
                    <p className="text-soft-lavender-grey/70 text-sm leading-relaxed">
                      {card.description ||
                        'Professional accreditation support and guidance'}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call-to-Action Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-pure-white/10 backdrop-blur-lg border border-soft-lavender-grey/20 rounded-3xl p-10 max-w-5xl mx-auto relative overflow-hidden shadow-2xl">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-pure-white/5 to-transparent rounded-3xl"></div>

              <div className="relative z-10">
                {/* Features highlight */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-pure-white mb-4 flex items-center gap-3">
                      <div className="w-3 h-3 bg-warm-amber rounded-full"></div>
                      Transparent Pricing
                    </h3>
                    <p className="text-soft-lavender-grey/80 leading-relaxed">
                      <strong className="text-pure-white">
                        All packages include honest pricing with no hidden fees.
                      </strong>
                      <br />
                      Our consultants are Chartered or Grad IOSH with NEBOSH &
                      Masters in Occupational Health & Safety.
                    </p>
                  </div>

                  <div className="text-left">
                    <h3 className="text-xl font-bold text-pure-white mb-4 flex items-center gap-3">
                      <div className="w-3 h-3 bg-crimson-pink rounded-full"></div>
                      Advisory Service Included
                    </h3>
                    <p className="text-soft-lavender-grey/80 leading-relaxed">
                      <strong className="text-pure-white">
                        Safety Advisory Service included:
                      </strong>
                      <br />
                      Your own competent H&S advisor for under £1/day.
                    </p>
                  </div>
                </div>

                {/* Main CTA */}
                <div className="pt-6 border-t border-soft-lavender-grey/20">
                  <Button
                    onClick={handleContactClick}
                    className="bg-crimson-gradient hover:bg-vivid-red text-pure-white px-12 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl btn-premium relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Get Accredited Today
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>

                  <p className="text-soft-lavender-grey/60 text-sm mt-4">
                    Start your accreditation journey with industry experts
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-crimson-gradient opacity-20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-warm-amber/30 rounded-full blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Additional Benefits */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={
              <>
                Why Choose Our{' '}
                <span className="text-crimson-pink">
                  Health & Safety Services?
                </span>
              </>
            }
            description="Professional expertise backed by experience, care, and legal compliance"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {benefitsData.map((item, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:border-crimson-pink transition-all duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-gradient-to-tr from-[#ED2568] to-[#EE343B] text-white text-2xl shadow-inner">
                  {benefitIcons[item.icon]}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 group-hover:text-crimson-pink mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
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
            Ready to Comprehense Health & Safety Solutions?
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
