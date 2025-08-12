import { useNavigate } from 'react-router-dom';
import {
  CheckCircle,
  Shield,
  Award,
  FileText,
  Users,
  Leaf,
  Target,
  Clock,
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { SectionHeader, ServiceCard } from '../components/common';

export function ServicesPage() {
  const navigate = useNavigate();

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Shield':
        return Shield;
      case 'Award':
        return Award;
      case 'FileText':
        return FileText;
      case 'Users':
        return Users;
      case 'CheckCircle':
        return CheckCircle;
      case 'Leaf':
        return Leaf;
      case 'Target':
        return Target;
      case 'Clock':
        return Clock;
      default:
        return Shield;
    }
  };

  const handleServiceClick = (serviceId: string) => {
    if (serviceId === 'accreditation-support') {
      navigate('/about/accreditation');
    } else {
      navigate(`/services/${serviceId}`);
    }
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-grid');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-off-white dark:bg-charcoal-navy text-charcoal-navy dark:text-off-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#ED2568] via-[#F03570] to-[#FF4B2B] text-pure-white overflow-hidden">
        {/* Single subtle blurred circle in vivid red for depth */}
        <div className="absolute -bottom-28 -right-28 w-96 h-96 rounded-full bg-vivid-red opacity-12 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg text-pure-white">
                Protect your people. Grow your business.
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-pure-white/90 max-w-2xl">
                Comprehensive compliance and safety solutions designed to help
                your business meet regulatory requirements and achieve
                operational excellence.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={scrollToServices}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-crimson-pink font-semibold shadow hover:scale-105 transition-transform duration-200"
                >
                  Explore Services
                </button>

                <button
                  onClick={handleContactClick}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/30 text-pure-white font-medium hover:bg-white/10 transition"
                >
                  Contact Us Today
                </button>
              </div>

              <p className="mt-6 text-sm text-pure-white/80 max-w-xl mx-auto lg:mx-0">
                Start with a free consultation — we'll tailor a compliance plan
                for your business and help you achieve CHAS and other recognised
                accreditations.
              </p>
            </div>

            {/* Decorative info card for larger screens (no icons) */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm text-pure-white">
                <h3 className="text-lg font-semibold mb-3">Trusted outcomes</h3>
                <ul className="space-y-2 text-sm text-pure-white/90">
                  <li>Industry recognised accreditation support</li>
                  <li>Local authority & private-sector compliance</li>
                  <li>Expert-led training, audits & documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Wave with subtle smooth curve */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg
            className="relative block w-full h-24"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96 C480,192 960,0 1440,96 L1440,120 L0,120 Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section
        id="services-grid"
        className="py-16 bg-off-white dark:bg-charcoal-navy transition-colors-smooth"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => {
              const IconComponent = getIconComponent(service.iconName);
              return (
                <div
                  key={service.id}
                  className="hover-lift hover-glow transition-all-smooth"
                >
                  <ServiceCard
                    {...service}
                    iconComponent={IconComponent}
                    onLearnMore={() => handleServiceClick(service.id)}
                    onGetQuote={handleContactClick}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-off-white dark:bg-charcoal-navy transition-colors-smooth">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Additional Services"
            description="We also provide specialized consulting services tailored to your specific industry needs"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              {
                name: 'Construction Safety',
                desc: 'Specialized safety consulting for construction projects',
              },
              {
                name: 'Food Safety',
                desc: 'HACCP and food safety management systems',
              },
              {
                name: 'Data Protection',
                desc: 'GDPR compliance and data protection audits',
              },
              {
                name: 'Training Programs',
                desc: 'Customized training for your staff and management',
              },
              {
                name: 'Compliance Audits',
                desc: 'Regular compliance audits and assessments',
              },
              {
                name: 'Emergency Planning',
                desc: 'Business continuity and emergency response planning',
              },
            ].map((additional, index) => (
              <div
                key={index}
                className="bg-white dark:bg-charcoal-navy border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 shadow-sm hover-lift hover-glow transition-all-smooth"
              >
                <h3 className="font-semibold text-crimson-pink mb-2">
                  {additional.name}
                </h3>
                <p className="text-charcoal-navy/70 dark:text-off-white/70 text-sm">
                  {additional.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        className="py-20 bg-gradient-to-r from-[#1C1F2A] to-[#ED2568] text-white relative overflow-hidden"
        style={{
          backgroundImage:
            "url('/Images/landingpage/get-started_optimized.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Need a Custom Solution?
          </h2>

          <p className="text-xl text-gray-100 max-w-4xl mx-auto mb-10">
            Our expert team can create a tailored compliance solution
            specifically for your business needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button
              className="bg-gradient-to-r from-[#ED2568] to-[#EE343B] hover:from-[#EE343B] hover:to-[#ED2568] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={() => navigate('/contact')}
            >
              Contact Us Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
