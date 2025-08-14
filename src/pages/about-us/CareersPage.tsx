import {
  
  CheckCircle,
  Heart,
  Gift,
  Phone,
  ArrowRight,
  Briefcase,
} from 'lucide-react';

import {
  // tasks,
  // requirements,
  benefits,
  values,
} from '../../data/about-us/careersData';

import { useNavigate } from 'react-router-dom';

export default function CareersPage() {
  const navigate = useNavigate();

  const handleReadMore = () => {
    document
      .getElementById('main-content')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-start bg-[#1C1F2A] text-white px-6 sm:px-12 lg:px-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
            filter: 'brightness(0.4)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto flex w-full">
          <div className="w-full max-w-2xl text-left space-y-8">
            {/* Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text">
              Join Our
              <br />
              <span className="text-transparent bg-gradient-to-r from-[#ED2568] via-[#EE343B] to-[#ED2568] bg-clip-text">
                Growing Team
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl sm:text-2xl text-gray-200 max-w-2xl leading-relaxed">
              Are you passionate about marketing and diversity? Join our thriving
              health and safety consultancy and shape the future of workplace
              safety.
            </p>

            {/* CTA Buttons */}
            <div className="mt-12">
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="bg-gradient-to-r from-[#ED2568] to-[#EE343B] hover:from-[#EE343B] hover:to-[#ED2568] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center"
                  onClick={handleReadMore}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </button>
                <button
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1C1F2A] px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
                  onClick={() => navigate('/contact')}
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div id="main-content">
        {/* No Job Openings Section */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div className="p-3 bg-gradient-to-br from-[#ED2568] to-[#EE343B] rounded-lg mb-6">
              <Briefcase className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1F2A] mb-4 text-center">
              No Job Openings Currently Available
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed text-center max-w-2xl">
              We appreciate your interest in joining our team! While there are no job vacancies at this time, we’re always excited to connect with talented individuals. Please check back soon or&nbsp;
              <span
                className="underline cursor-pointer text-[#ED2568] hover:text-[#EE343B] transition"
                onClick={() => navigate('/contact')}
              >
                contact us
              </span>
              &nbsp;to express your interest in future opportunities.
            </p>
            <button
              className="bg-gradient-to-r from-[#ED2568] to-[#EE343B] hover:from-[#EE343B] hover:to-[#ED2568] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={() => navigate('/contact')}
            >
              Get in Touch
              <Phone className="ml-2 h-5 w-5 inline" />
            </button>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gradient-to-br from-[#F9F9F9] to-[#E5E6F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-br from-[#ED2568] to-[#EE343B] rounded-lg">
                  <Gift className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-[#1C1F2A] mb-4">
                WHAT WE OFFER
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
                We believe in taking care of our team members with competitive
                benefits, growth opportunities, and a supportive work
                environment that helps you thrive both personally and
                professionally.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer border border-[#E5E6F0]"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#ED2568] to-[#EE343B] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-[#EE343B] group-hover:to-[#ED2568] transition-all duration-300">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-[#1C1F2A] transition-colors">
                      {benefit}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                className="bg-gradient-to-r from-[#ED2568] to-[#EE343B] hover:from-[#EE343B] hover:to-[#ED2568] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => navigate('/contact')}
              >
                Join Our Team
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </button>
            </div>
          </div>
        </section>

        {/* Company Values Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-br from-[#ED2568] to-[#EE343B] rounded-lg">
                  <Heart className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-[#1C1F2A] mb-4">
                Our Values Drive Everything We Do
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                At CCS, our values aren't just words on a wall – they're the
                foundation of how we work, grow, and succeed together.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#F9F9F9] to-[#E5E6F0] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#ED2568] to-[#EE343B] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="h-7 w-7 text-white" />
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm group-hover:text-[#1C1F2A] transition-colors font-medium">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section
          className="py-20 bg-gradient-to-r from-[#1C1F2A] to-[#ED2568] text-white relative overflow-hidden"
          style={{
            backgroundImage: "url('/Images/landingpage/get-started_optimized.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
              Ready to Start Your Journey?
            </h2>

            <p className="text-xl text-gray-100 max-w-4xl mx-auto mb-10">
              Take the next step in your marketing career and join a team that
              values inclusion, innovation, and making a real difference in
              workplace safety.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <button
                className="bg-gradient-to-r from-[#ED2568] to-[#EE343B] hover:from-[#EE343B] hover:to-[#ED2568] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => navigate('/contact')}
              >
                Apply Today
                <Briefcase className="ml-2 h-5 w-5 inline" />
              </button>
              <button
                className="border-2 border-white text-white hover:bg-white hover:text-[#1C1F2A] px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
                onClick={() => navigate('/contact')}
              >
                Get in Touch
                <Phone className="ml-2 h-5 w-5 inline" />
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#ED2568] mb-2">
                    Growing
                  </div>
                  <p className="text-gray-200">Company Culture</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#ED2568] mb-2">
                    £7.80-£8.50
                  </div>
                  <p className="text-gray-200">Per Hour</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">
                    London
                  </div>
                  <p className="text-gray-200">Central Location</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
