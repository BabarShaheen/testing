import { Shield, CheckCircle, ArrowRight } from 'lucide-react';
import {
  whyChooseUs,
  processSteps,
  services,
  benefits,
} from '../../../data/siaContractorData';

export default function SiaContractorPage() {
  const handleServiceClick = (serviceId: any) => {
    console.log('Navigate to service:', serviceId);
  };

  const handleContactClick = () => {
    console.log('Navigate to contact');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center bg-[#1C1F2A] text-white px-6 sm:px-12 lg:px-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/Images/services/siaapproved.jpg')", // update the path accordingly
            filter: 'brightness(0.6)',
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
            fillOpacity="0.2"
            d="M0,64L40,90.7C80,117,160,171,240,186.7C320,203,400,181,480,181.3C560,181,640,203,720,224C800,245,880,267,960,240C1040,213,1120,139,1200,106.7C1280,75,1360,85,1400,90.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          />
        </svg>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          {/* Icon Badge */}
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-white/10 rounded-full shadow-lg backdrop-blur-sm">
              <Shield className="h-16 w-16 text-white" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            SIA Approved Contractor Scheme
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            CiTRiX provides a simple and affordable route to SIA ACS
            certification. We are experts in the delivery of QHSE management
            systems tailored to your business.
          </p>

          {/* Highlight Box */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-3xl mx-auto border border-white/10">
            <p className="text-lg font-medium text-white">
              The only recognised scheme to standardise organisations operating
              within the private security sector
            </p>
          </div>

          {/* Buttons (optional, remove if not needed) */}
          {/* <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
          <button className="bg-gradient-to-r from-[#ED2568] to-[#EE343B] text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:brightness-110 transition-all">
            Start Your Journey
          </button>
        </div> */}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-crimson-pink rounded-full">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-crimson-pink mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QMS Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Our QMS Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple three-step process to achieve your SIA ACS certification
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.id}
                  className={`${step.color} p-6 rounded-lg border border-gray-200 relative`}
                >
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-crimson-pink text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
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

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Our SIA ACS Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive services to help you achieve and maintain SIA ACS
              certification
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group cursor-pointer p-6"
                  onClick={() => handleServiceClick(service.id)}
                >
                  <div className="text-center mb-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-crimson-pink rounded-lg group-hover:bg-vivid-red transition-colors">
                        <IconComponent className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-slate-800 group-hover:text-crimson-pink transition-colors">
                        {service.title}
                      </h3>
                      <span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full">
                        {service.badge}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 text-center">
                    {service.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-700 mb-2">
                      Includes:
                    </h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <p className="text-sm text-blue-800 mb-1">Investment:</p>
                    <p className="font-bold text-xl text-crimson-pink">
                      {service.price}
                    </p>
                  </div>

                  <button
                    className="w-full bg-crimson-pink hover:bg-vivid-red text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleServiceClick(service.id);
                    }}
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Advantages of Becoming an SIA Approved Contractor
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your potential clients are increasingly making SIA ACS approval
              mandatory for their security service providers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
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
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About SIA ACS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                About the SIA ACS
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  The SIA ACS (Security Industry Authority Approved Contractor
                  Scheme) is the only recognised scheme to standardise
                  organisations operating within the private security sector.
                </p>
                <p>
                  The standard was designed by members of the security industry
                  in consultation with the Private Security Industry Act 2001.
                  The SIA ACS includes elements of widely recognised business
                  improvement models including ISO 9001 and the European
                  Foundation for Quality Management Excellence Model.
                </p>
                <p>
                  The scheme proves not only your competency in security
                  practices but also demonstrates your continuing investment in
                  improving your operational efficiency.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-lg border border-teal-100">
              <h3 className="text-2xl font-bold text-crimson-pink mb-4">
                Key Facts
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    Only recognised standardisation scheme
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    Based on ISO 9001 standards
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    Industry-designed requirements
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    Voluntary but increasingly mandatory
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-20 bg-crimson-gradient text-white relative overflow-hidden animate-fade-in"
        style={{
          backgroundImage: "url('/Images/landingpage/get-started.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to Become SIA ACS Approved?
          </h2>

          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-10">
            Our solid experience in the field and long list of completed
            projects demonstrate our reliability as a business partner. Together
            we will drive your business development in the right direction.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg transition-all duration-300"
              onClick={handleContactClick}
            >
              Make an Enquiry
            </button>
            <button
              className="border-2 border-white text-white hover:bg-white hover:text-crimson-pink px-8 py-3 rounded-xl text-lg font-semibold transition-all duration-300"
              onClick={handleContactClick}
            >
              Schedule Consultation
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto shadow-md">
            <p className="text-xl font-semibold mb-2">
              Experience! Reliability! Expertise!
            </p>
            <p className="text-gray-100 text-base leading-relaxed">
              Our customers are the reason we're still in business, and our job
              is to serve our customers to the best of our ability.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
