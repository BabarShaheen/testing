import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { whyChooseUsData } from '../data/whyChooseUsData';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

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
        style={{ backgroundImage: "url('/hero.jpeg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"></div>

        {/* Floating Elements (optional decorative blobs or shapes) */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float z-10"></div>
        <div
          className="absolute bottom-16 right-16 w-16 h-16 bg-orange/30 rounded-full animate-float z-10"
          style={{ animationDelay: '1s' }}
        ></div>
        <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-teal-light/40 rounded-full animate-pulse z-10"></div>

        {/* Content */}
        <div className="relative z-20 h-full flex items-center justify-center px-6 sm:px-12 lg:px-24">
          <div className="max-w-3xl text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Professional <span className="text-orange">Compliance</span>{' '}
              Solutions
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              Helping businesses meet legal standards with expert accreditation,
              risk assessment, and compliance services across the UK.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button
                size="lg"
                className="bg-orange hover:bg-orange/90 text-white px-6 sm:px-8 py-3 min-h-[44px] text-sm sm:text-base btn-premium transition-all-smooth"
                onClick={() => handleNavClick('contact')}
              >
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Mini Stats */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                UK Based
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                20+ Years Experience
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                98% Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-blue mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional compliance, certification, and safety services to
              protect and empower your business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Health & Safety */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 group">
              <img
                src="/Images/landingpage/health-safety.jpeg"
                alt="Health & Safety"
                className="w-full h-40 object-cover rounded-md mb-4 group-hover:scale-105 transition"
              />
              <h3 className="text-xl font-semibold text-navy-blue group-hover:text-teal-dark mb-2">
                Health & Safety Consulting
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Expert guidance to maintain safe, compliant workplaces tailored
                to UK regulations.
              </p>
              <span className="text-orange font-medium">Learn More →</span>
            </div>

            {/* ISO 9001 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 group">
              <img
                src="/Images/landingpage/ISO-9001-Certification.jpg"
                alt="ISO 9001"
                className="w-full h-40 object-cover rounded-md mb-4 group-hover:scale-105 transition"
              />
              <h3 className="text-xl font-semibold text-navy-blue group-hover:text-teal-dark mb-2">
                ISO 9001 Certification
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Achieve internationally recognized quality standards to enhance
                credibility and efficiency.
              </p>
              <span className="text-orange font-medium">Get Certified →</span>
            </div>

            {/* SIA ACS Audit */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 group">
              <img
                src="/Images/landingpage/sia.png"
                alt="SIA ACS"
                className="w-full h-40 object-cover rounded-md mb-4 group-hover:scale-105 transition"
              />
              <h3 className="text-xl font-semibold text-navy-blue group-hover:text-teal-dark mb-2">
                SIA ACS Audit Support
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Full support for achieving Approved Contractor Scheme compliance
                in the security industry.
              </p>
              <span className="text-orange font-medium">Start Process →</span>
            </div>

            {/* CHAS Assistance */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 group">
              <img
                src="/Images/landingpage/chas.jpg"
                alt="CHAS Assistance"
                className="w-full h-40 object-cover rounded-md mb-4 group-hover:scale-105 transition"
              />
              <h3 className="text-xl font-semibold text-navy-blue group-hover:text-teal-dark mb-2">
                CHAS Assistance
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                We help you attain CHAS accreditation with complete application
                and compliance support.
              </p>
              <span className="text-orange font-medium">Apply Now →</span>
            </div>

            {/* PAT Testing */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 group">
              <img
                src="/Images/landingpage/pat.png"
                alt="PAT Testing"
                className="w-full h-40 object-cover rounded-md mb-4 group-hover:scale-105 transition"
              />
              <h3 className="text-xl font-semibold text-navy-blue group-hover:text-teal-dark mb-2">
                PAT Testing
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Ensure workplace electrical safety with reliable, affordable PAT
                testing services.
              </p>
              <span className="text-orange font-medium">View Pricing →</span>
            </div>

            {/* Risk Assessments */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 group">
              <img
                src="/Images/landingpage/risk.jpg"
                alt="Risk Assessments"
                className="w-full h-40 object-cover rounded-md mb-4 group-hover:scale-105 transition"
              />
              <h3 className="text-xl font-semibold text-navy-blue group-hover:text-teal-dark mb-2">
                Risk Assessments
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Identify and manage workplace hazards with professional risk
                assessment reports.
              </p>
              <span className="text-orange font-medium">Get a Quote →</span>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <Button
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 sm:px-8 py-3 min-h-[44px] text-sm sm:text-base font-semibold transition-all duration-300 shadow-md"
              onClick={() => handleNavClick('services')}
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      <section
        className="relative bg-fixed bg-cover bg-center bg-no-repeat py-24"
        style={{
          backgroundImage: "url('/Images/landingpage/why-choose-us.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50"></div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-orange-400/40 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-white z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-6 shadow-xl mx-auto">
              <i className="fas fa-shield-alt text-2xl text-white"></i>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Citrix
              </span>
            </h2>

            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed text-center">
              We specialize in supporting small to medium businesses with expert
              health & safety consultancy, ensuring compliance without the
              complexity or cost of full-time managers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsData.map((card, idx) => (
              <div
                key={idx}
                className="group relative bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:bg-white/15"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="text-orange-400 text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <i className={card.icon}></i>
                  </div>
                  <div className="inline-block bg-orange-500/20 text-orange-300 text-xs font-semibold px-3 py-1 rounded-full mb-3 border border-orange-500/30">
                    {card.badge}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-orange-300 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-gradient-to-r from-teal-600 to-blue-300 rounded-2xl p-8 text-white">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '20+', label: 'Years Experience' },
              { number: '50+', label: 'Industry Awards' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90 text-sm sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-24 bg-gray-900 text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/Images/landingpage/get-started.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-teal-800/60 via-teal-900/70 to-gray-900/90"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-xl p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Contact our expert team today for a free consultation and discover
              how we can help your business achieve compliance excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 font-semibold shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => handleNavClick('contact')}
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-teal-900 px-6 py-3 font-semibold transition-all duration-300"
                onClick={() => handleNavClick('services')}
              >
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
