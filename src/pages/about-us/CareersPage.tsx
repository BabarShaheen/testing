import {
  MapPin,
  PoundSterling,
  Star,
  CheckCircle,
  Heart,
  Target,
  Zap,
  Gift,
  Phone,
  Building,
  ArrowRight,
  TrendingUp,
  Briefcase,
} from 'lucide-react';

import {
  tasks,
  requirements,
  benefits,
  values,
} from '../../data/about-us/careersData';

export default function CareersPage() {
  const handleApplyClick = () => {
    console.log('Apply for position');
  };

  const handleContactClick = () => {
    console.log('Contact us');
  };

  const handleReadMore = () => {
    document
      .getElementById('main-content')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center bg-[#1C1F2A] text-white px-6 sm:px-12 lg:px-20 overflow-hidden">
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
        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text">
            Join Our
            <br />
            <span className="text-transparent bg-gradient-to-r from-[#ED2568] via-[#EE343B] to-[#FFC857] bg-clip-text">
              Growing Team
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Are you passionate about marketing and diversity? Join our thriving
            health and safety consultancy and shape the future of workplace
            safety.
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Building className="h-12 w-12 text-[#FFC857] mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Full-Time</h3>
              <p className="text-gray-200 text-sm">Permanent Position</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <PoundSterling className="h-12 w-12 text-[#FFC857] mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Competitive</h3>
              <p className="text-gray-200 text-sm">Salary & Benefits</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <TrendingUp className="h-12 w-12 text-[#FFC857] mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Growth</h3>
              <p className="text-gray-200 text-sm">Career Development</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <MapPin className="h-12 w-12 text-[#FFC857] mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">London</h3>
              <p className="text-gray-200 text-sm">Central Location</p>
            </div>
          </div>

          {/* Badge and CTA */}
          <div className="mt-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#ED2568] to-[#EE343B] rounded-full text-white font-medium mb-6 shadow-lg">
              <Briefcase className="h-5 w-5" />
              <span>Marketing Assistant Role</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-gradient-to-r from-[#ED2568] to-[#EE343B] hover:from-[#EE343B] hover:to-[#ED2568] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={handleReadMore}
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </button>
              <button
                className="border-2 border-white text-white hover:bg-white hover:text-[#1C1F2A] px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
                onClick={handleApplyClick}
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div id="main-content">
        {/* Job Introduction Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-[#ED2568] to-[#EE343B] rounded-lg">
                    <Building className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#1C1F2A]">
                    MARKETING ASSISTANT – FULL-TIME
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  <strong>Citrix Consultancy Services (CCS)</strong> is a
                  forward-thinking consultancy that puts inclusion, people, and
                  purpose at the heart of everything we do. We're now expanding
                  our team and looking for a Marketing Assistant who's ready to
                  make an impact.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#F9F9F9] to-[#E5E6F0] rounded-lg hover:shadow-lg transition-all duration-300">
                    <CheckCircle className="h-6 w-6 text-[#ED2568] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#1C1F2A] mb-1">
                        Growing Company
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Join a small but thriving health and safety consultancy
                        with expansion opportunities.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#F9F9F9] to-[#E5E6F0] rounded-lg hover:shadow-lg transition-all duration-300">
                    <CheckCircle className="h-6 w-6 text-[#ED2568] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#1C1F2A] mb-1">
                        Purpose-Driven Work
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Make a real impact in workplace safety while developing
                        your marketing career.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#F9F9F9] to-[#E5E6F0] rounded-lg hover:shadow-lg transition-all duration-300">
                    <CheckCircle className="h-6 w-6 text-[#ED2568] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#1C1F2A] mb-1">
                        Inclusive Culture
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Be part of a company that values diversity and puts
                        people first.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFC857]/20 to-[#ED2568]/20 rounded-2xl transform rotate-3 scale-105"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-2xl border border-[#E5E6F0]">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#FFC857] to-[#ED2568] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Briefcase className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1C1F2A] mb-4">
                      Join Our Team
                    </h3>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-[#F9F9F9] to-[#E5E6F0] rounded-lg">
                        <span className="text-gray-600 text-sm">Salary:</span>
                        <span className="font-bold text-[#ED2568]">
                          £7.80-£8.50/hr
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-[#F9F9F9] to-[#E5E6F0] rounded-lg">
                        <span className="text-gray-600 text-sm">Holiday:</span>
                        <span className="font-semibold text-[#1C1F2A]">
                          23 days
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-[#F9F9F9] to-[#E5E6F0] rounded-lg">
                        <span className="text-gray-600 text-sm">Location:</span>
                        <span className="font-semibold text-[#FFC857]">
                          London
                        </span>
                      </div>
                    </div>
                    <button
                      className="w-full bg-gradient-to-r from-[#ED2568] to-[#EE343B] hover:from-[#EE343B] hover:to-[#ED2568] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg"
                      onClick={handleApplyClick}
                    >
                      Apply for Position
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Do Section */}
        <section className="py-16 bg-gradient-to-br from-[#F9F9F9] to-[#E5E6F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ED2568]/20 to-[#FFC857]/20 rounded-2xl transform rotate-3 scale-105"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#ED2568] to-[#EE343B] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1C1F2A] mb-6">
                      Your Impact
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-[#F9F9F9] to-[#E5E6F0] rounded-lg">
                        <span className="text-gray-600 text-sm">
                          Marketing Campaigns:
                        </span>
                        <span className="font-bold text-[#ED2568] text-sm">
                          Lead & Execute
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-[#F9F9F9] to-[#E5E6F0] rounded-lg">
                        <span className="text-gray-600 text-sm">
                          Content Creation:
                        </span>
                        <span className="font-semibold text-[#1C1F2A] text-sm">
                          Multi-Channel
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-[#F9F9F9] to-[#E5E6F0] rounded-lg">
                        <span className="text-gray-600 text-sm">
                          Event Support:
                        </span>
                        <span className="font-semibold text-[#FFC857] text-sm">
                          Client Focused
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-[#F9F9F9] to-[#E5E6F0] rounded-lg">
                        <span className="text-gray-600 text-sm">
                          Market Research:
                        </span>
                        <span className="font-semibold text-[#ED2568] text-sm">
                          Data-Driven
                        </span>
                      </div>
                    </div>
                    <button
                      className="w-full mt-6 bg-gradient-to-r from-[#FFC857] to-[#ED2568] hover:from-[#ED2568] hover:to-[#FFC857] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg"
                      onClick={handleContactClick}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-[#FFC857] to-[#ED2568] rounded-lg">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#1C1F2A]">
                    WHAT YOU'LL DO
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  As our Marketing Assistant, you'll play a crucial role in
                  developing and executing marketing campaigns that showcase our
                  expertise in health and safety consulting.
                </p>
                <div className="space-y-4">
                  {tasks.slice(0, 4).map((task, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <CheckCircle className="h-6 w-6 text-[#ED2568] mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {task}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Bring Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-[#1C1F2A] to-[#ED2568] rounded-lg">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#1C1F2A]">
                    WHAT YOU BRING
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We're looking for someone passionate about marketing with a
                  desire to make a real impact. Whether you're a recent graduate
                  or have some experience, we want to hear from you.
                </p>
                <div className="space-y-4">
                  {requirements.slice(0, 4).map((requirement, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#F9F9F9] to-[#E5E6F0] rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      <Star className="h-6 w-6 text-[#FFC857] mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {requirement}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1C1F2A]/20 to-[#FFC857]/20 rounded-2xl transform rotate-3 scale-105"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-2xl border border-[#E5E6F0]">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#1C1F2A] to-[#ED2568] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1C1F2A] mb-4">
                      Perfect Fit?
                    </h3>
                    <p className="text-gray-600 mb-6 text-sm">
                      We believe in potential and are looking for someone eager
                      to grow with us in the dynamic world of health and safety
                      marketing.
                    </p>
                    <div className="bg-gradient-to-r from-[#F9F9F9] to-[#E5E6F0] p-4 rounded-lg mb-6 border border-[#ED2568]/20">
                      <p className="text-sm text-[#1C1F2A] font-medium">
                        "Ready to make an impact?"
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        Join our inclusive, purpose-driven team
                      </p>
                    </div>
                    <button
                      className="w-full bg-gradient-to-r from-[#1C1F2A] to-[#ED2568] hover:from-[#ED2568] hover:to-[#1C1F2A] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg"
                      onClick={handleApplyClick}
                    >
                      Submit Application
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gradient-to-br from-[#F9F9F9] to-[#E5E6F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-br from-[#FFC857] to-[#ED2568] rounded-lg">
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
                    <div className="w-12 h-12 bg-gradient-to-br from-[#ED2568] to-[#EE343B] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-[#FFC857] group-hover:to-[#ED2568] transition-all duration-300">
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
                className="bg-gradient-to-r from-[#FFC857] to-[#ED2568] hover:from-[#ED2568] hover:to-[#EE343B] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={handleApplyClick}
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
                    <div className="w-16 h-16 bg-gradient-to-br from-[#FFC857] to-[#ED2568] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
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
            backgroundImage: "url('/Images/landingpage/get-started.jpg')",
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
                className="bg-gradient-to-r from-[#FFC857] to-[#ED2568] hover:from-[#ED2568] hover:to-[#FFC857] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={handleApplyClick}
              >
                Apply Today
                <Briefcase className="ml-2 h-5 w-5 inline" />
              </button>
              <button
                className="border-2 border-white text-white hover:bg-white hover:text-[#1C1F2A] px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
                onClick={handleContactClick}
              >
                Get in Touch
                <Phone className="ml-2 h-5 w-5 inline" />
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#FFC857] mb-2">
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
