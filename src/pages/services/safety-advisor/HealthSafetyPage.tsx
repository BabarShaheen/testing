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
} from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { healthSafetyServices } from '../../../data/healthSafetyServicesData';
import {
  ServiceCard,
  AccreditationCard,
  BenefitCard,
  SectionHeader,
} from '../../../components/common';

import { motion } from 'framer-motion';

const accreditationCards = [
  {
    title: 'CHAS Accreditation',
    description: 'Full application and registration help',
    price: '£99.99',
    icon: 'Award' as const,
    color: 'from-[#E5E6F0] to-white',
    pricingDetails: [
      { label: 'Under 5 Employees', price: '£99.99' },
      { label: '5+ Employees', price: '£250' },
    ],
  },
  {
    title: 'SafeContractor',
    description: 'SSIP Application & Registration Support',
    price: '£299.99',
    icon: 'Shield' as const,
    color: 'from-[#F9F9F9] to-white',
  },
  {
    title: 'SMAS WorkSafe',
    description: 'Application assistance with qualified consultant',
    price: '£299.99',
    icon: 'CheckCircle' as const,
    color: 'from-[#FFC857] to-white',
  },
  {
    title: 'ConstructionLine',
    description: 'Full registration help & email/phone support',
    price: '£349.99',
    icon: 'ClipboardCheck' as const,
    color: 'from-[#ED2568] to-[#F9F9F9]',
  },
  {
    title: 'Altius Accreditation',
    description: 'SSIP help with ongoing support',
    price: '£ POA',
    icon: 'Target' as const,
    color: 'from-[#EE343B] to-[#F9F9F9]',
  },
];

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

        {/* Wave Overlay */}
        <svg
          className="absolute bottom-0 left-0 w-full h-40 z-0"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ED2568"
            fillOpacity="0.25"
            d="M0,64L40,90.7C80,117,160,171,240,186.7C320,203,400,181,480,181.3C560,181,640,203,720,224C800,245,880,267,960,240C1040,213,1120,139,1200,106.7C1280,75,1360,85,1400,90.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          />
        </svg>

        {/* Content Layer */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-block bg-pink-600/10 text-pink-300 font-semibold tracking-wide px-5 py-1.5 rounded-full text-sm shadow-md">
            Health & Safety Services
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            Comprehensive Health & Safety Solutions
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
            title="Our Core Services"
            description="Comprehensive health and safety solutions tailored to your business needs"
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {healthSafetyServices.map((service, idx) => {
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

      {/* SSIP Accreditation Support Section */}
      <section
        id="ssip-accreditation"
        className="py-16 bg-[url('/your')] bg-cover bg-fixed bg-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              title="SSIP Accreditation Support"
              description={
                <>
                  CHAS, SafeContractor, Acclaim, Achilles, ConstructionLine,
                  SMAS, EXOR & Altius
                  <br />
                  <strong className="text-[#ED2568]">
                    Discounts available for multiple accreditations — Call us:
                    02071400015
                  </strong>
                </>
              }
            />
          </motion.div>

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

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
              <p className="text-lg text-[#1C1F2A] mb-4">
                <strong className="text-[#1C1F2A]">
                  All packages include honest pricing with no hidden fees.
                </strong>
                <br />
                Our consultants are Chartered or Grad IOSH with NEBOSH & Masters
                in Occupational Health & Safety.
              </p>
              <p className="text-lg text-[#1C1F2A] mb-6">
                <strong className="text-[#1C1F2A]">Also includes:</strong>{' '}
                Safety Advisory Service — Your own competent H&S advisor for
                under £1/day.
              </p>
              <Button
                onClick={handleContactClick}
                className="bg-[#ED2568] hover:bg-[#EE343B] text-white px-8 py-3 text-lg"
              >
                Get Accredited
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Additional Benefits */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why Choose Our Health & Safety Services?"
            description="Professional expertise backed by experience, care, and legal compliance"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                icon: 'Award',
                name: 'Qualified Professionals',
                description:
                  'Experienced, certified safety professionals with proven track records.',
              },
              {
                icon: 'Shield',
                name: 'Legal Compliance',
                description:
                  'Ensures your business stays compliant with all current H&S regulations.',
              },
              {
                icon: 'Target',
                name: 'Tailored Solutions',
                description:
                  'Bespoke consulting, documentation, and systems designed for you.',
              },
              {
                icon: 'Users',
                name: 'Expert Support',
                description:
                  'Ongoing expert help — 24/7 emergency support included.',
              },
            ].map((item, index) => (
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
    </div>
  );
}
