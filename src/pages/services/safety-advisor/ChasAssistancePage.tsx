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
        style={{ backgroundImage: "url('/chas12.png')" }} // Replace with your actual image path
      >
        <div className="absolute inset-0 bg-slate-900/60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-white/10 rounded-full mr-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <span className="text-orange-300 font-semibold">
                  CHAS Accreditation
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                CHAS Assistance & Registration
              </h1>
              <p className="text-xl text-gray-100 mb-8">
                Expert guidance for your CHAS (Contractors Health and Safety
                Assessment Scheme) accreditation. We handle the entire process
                while you focus on running your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleContactClick}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors"
                >
                  Get Free Quote
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 rounded-lg text-lg font-medium transition-colors">
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                About CHAS Accreditation
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                CHAS is one of the founders of third party accreditation. When
                you undertake CHAS registration, you will be demonstrating that
                you meet the recognised standards required by any organisation
                looking to employ you as a contractor.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                CHAS accreditation is almost certain to open more doors and lead
                to more opportunity – in turn generating more business and
                profit for you, and ensuring your own workforce is protected by
                robust health and safety practice.
              </p>
              <p className="text-lg text-gray-600">
                The majority of local authorities and many organisations will
                insist on CHAS registration for any contractor they employ, so
                start the process today and we'll move your CHAS registration
                forward with our own expert guidance.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                Why Choose Our CHAS Service?
              </h3>
              <div className="space-y-4">
                {chasBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-teal-100 rounded-lg">
                      <benefit.icon className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              CHAS Accreditation Requirements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              CHAS registration requires you to have a recognised standard of
              health and safety management and covers compliance issues
              regarding your field of work.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Small Companies */}
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-600 rounded-full mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">
                  Companies with Fewer than 5 Employees
                </h3>
              </div>
              <div className="space-y-3">
                {smallCompanyRequirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Large Companies */}
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-2xl border border-teal-100">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-teal-600 rounded-full mr-4">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">
                  Companies with 5 or More Employees
                </h3>
              </div>
              <div className="space-y-3">
                {largeCompanyRequirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Our CHAS Registration Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We'll guide you through the process from start to finish until you
              have achieved your CHAS accreditation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {chasProcessSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Our Comprehensive CHAS Service
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              As part of our hassle-free and in-depth service, we'll complete
              everything on your behalf.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-dark-50 to-navy-blue-50 p-6 rounded-xl border border-orange-100">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-teal-600 rounded-lg mr-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">
                  Application Completion
                </h3>
              </div>
              <p className="text-gray-600">
                We complete the CHAS registration forms on your behalf together
                with the submission of supporting documents.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-600 rounded-lg mr-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">
                  Expert Guidance
                </h3>
              </div>
              <p className="text-gray-600">
                Our expert guidance regarding health and safety procedures
                ensures your application meets all required standards.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-600 rounded-lg mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">
                  Proven Success
                </h3>
              </div>
              <p className="text-gray-600">
                We've successfully completed CHAS registration for hundreds of
                contractors with a 100% success rate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-green-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl font-bold mb-4">
            Start Your CHAS Registration Today
          </h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8">
            Don't miss out on business opportunities. Let us handle your CHAS
            accreditation while you focus on what you do best - running your
            business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors"
              onClick={handleContactClick}
            >
              Get Free Quote
            </button>
            <button
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 rounded-lg text-lg font-medium transition-colors"
              onClick={handleContactClick}
            >
              Speak to an Advisor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
