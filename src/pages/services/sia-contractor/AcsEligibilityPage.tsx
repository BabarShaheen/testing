import {
  Shield,
  Award,
  Building,
  ClipboardCheck,
  CheckCircle,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

import {
  eligibleServices,
  acsCertifications,
  acsProcessSteps,
  acsDifferentiators,
  acsBenefits,
} from '../../../data/acsEligibilityData';

const AcsEligibilityPage = () => {
  const handleContactClick = () => {
    console.log('Navigate to contact');
  };

  const handleServiceClick = (serviceId: any) => {
    console.log('Navigate to service:', serviceId);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center bg-charcoal-navy text-pure-white px-6 sm:px-12 lg:px-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/Images/services/acs_elig_optimized.webp')",
            filter: 'brightness(0.6)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl text-left space-y-10">
              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="text-pure-white">SIA ACS </span>
                <span className="text-gradient-crimson">Eligibility</span>
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-soft-lavender-grey/80 leading-relaxed">
                The official standard designed to regulate and improve private
                security providers in the UK. Set the recognized benchmark for
                operational excellence and legal compliance.
              </p>

              {/* Highlight Box */}
              <div className="bg-pure-white/10 backdrop-blur-sm rounded-lg p-4 border border-soft-lavender-grey/20">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-warm-amber rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg font-medium text-pure-white">
                    We make eligibility and certification as simple as possible
                    with expert guidance every step of the way.
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <button className="bg-crimson-gradient hover:bg-vivid-red text-pure-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl group relative overflow-hidden">
                  <span className="relative z-10 flex items-center gap-3">
                    Check Your Eligibility
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>

                <button className="border-2 border-pure-white/80 text-pure-white hover:bg-pure-white hover:text-charcoal-navy px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:backdrop-blur-none group">
                  <span className="flex items-center gap-3">
                    Learn More
                    <ExternalLink className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About SIA ACS */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-crimson-pink rounded-full">
                  <Building className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-crimson-pink mb-2">
                Official Standard
              </h3>
              <p className="text-gray-600">
                The only recognised scheme to standardise organisations
                operating within the private security sector
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-crimson-pink rounded-full">
                  <Shield className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-crimson-pink mb-2">
                Legal Compliance
              </h3>
              <p className="text-gray-600">
                Administered under the Private Security Industry Act 2001 for
                operational excellence
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-crimson-pink rounded-full">
                  <Award className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-crimson-pink mb-2">
                Industry Recognition
              </h3>
              <p className="text-gray-600">
                Sets the recognized benchmark for security service providers
                across the UK
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is Eligible */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-800 mb-4">
              Who Is Eligible for{' '}
              <span className="text-crimson-pink">SIA ACS</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Security service providers across various sectors can apply for
              ACS approval.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {eligibleServices.map((service, index) => (
              <div
                key={index}
                onClick={() => handleServiceClick(service.name)}
                className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-crimson-pink transition-all duration-300 cursor-pointer"
              >
                <h3 className="text-center text-lg font-semibold text-slate-800 group-hover:text-crimson-pink transition-colors">
                  {service.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-14 text-center">
            <p className="text-md text-gray-600 max-w-3xl mx-auto">
              All eligible businesses must comply with standards covering
              operations, training, and personnel management to qualify for ACS
              accreditation.
            </p>
          </div>
        </div>
      </section>

      {/* Why Pursue ACS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Why Pursue ACS Certification?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transform your business with industry-recognized certification
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {acsCertifications.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 ${benefit.bgColor} rounded-lg flex-shrink-0`}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Essential for staying competitive in today's security
                        industry
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our ACS Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Our ACS Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple four-step process to achieve your SIA ACS certification
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {acsProcessSteps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.id}
                  className={`${step.color} p-6 rounded-lg border border-gray-200 relative`}
                >
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-crimson-pink text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.id}
                  </div>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-white/80 rounded-lg">
                      <IconComponent className="h-10 w-10 text-crimson-pink" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-crimson-pink mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our unique approach to ACS certification sets us apart from the
              competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {acsDifferentiators.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 ${benefit.bgColor} rounded-lg flex-shrink-0`}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Delivering exceptional results for our clients
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits and Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Benefits */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Advantages of Becoming an SIA Approved Contractor
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                Your potential clients are increasingly making SIA ACS approval
                mandatory for their security service providers
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {acsBenefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-3 ${benefit.bgColor} rounded-lg flex-shrink-0`}
                        >
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-slate-800 mb-2">
                            {benefit.title}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            Essential for business growth and industry
                            recognition
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact Sidebar */}
            <div className="space-y-6">
              {/* Eligibility Check */}
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-lg border border-teal-100">
                <div className="flex items-center gap-3 mb-4">
                  <ClipboardCheck className="w-6 h-6 text-crimson-pink" />
                  <h3 className="text-xl font-semibold text-slate-800">
                    Eligibility Check
                  </h3>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-crimson-pink mb-2">
                    Free
                  </div>
                  <p className="text-gray-700 mb-4">
                    Initial eligibility assessment and consultation
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">
                      No obligation required
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-20 bg-crimson-gradient text-white relative overflow-hidden animate-fade-in"
        style={{
          backgroundImage: "url('/Images/landingpage/get-started_optimized.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Start Your ACS Journey Today
          </h2>

          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-10">
            Join hundreds of security companies who have achieved SIA ACS
            approval with our expert guidance. Transform your business
            credibility and unlock new opportunities in the security sector.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg transition-all duration-300"
              onClick={handleContactClick}
            >
              Get Started Now
            </button>
            <button
              className="border-2 border-white text-white hover:bg-white hover:text-crimson-pink px-8 py-3 rounded-xl text-lg font-semibold transition-all duration-300"
              onClick={handleContactClick}
            >
              Free Eligibility Check
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto shadow-md">
            <p className="text-xl font-semibold mb-2">
              95% Success Rate • Expert Guidance • Proven Results
            </p>
            <p className="text-gray-100 text-base leading-relaxed">
              Our track record speaks for itself - we've helped hundreds of
              security companies achieve ACS certification with our proven
              methodology.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcsEligibilityPage;
