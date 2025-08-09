import { useState } from 'react';
import {
  CheckCircle,
  ArrowRight,
  Shield,
  Award,
  FlameKindling,
  Target,
  Star,
  Phone,
  Clock,
  BadgeCheck,
  BookOpen,
  ScrollText,
  ChevronDown,
  ChevronUp,
  UserCheck,
  Briefcase,
  GraduationCap,
  FileText,
  Play,
  DollarSign,
} from 'lucide-react';

// Import courses from your data file
import { courses } from '../../data/courseData';

// Course interface
interface Course {
  id: string;
  title: string;
  description: string;
  outline: string[];
  duration: string;
  businessBenefits: string[];
  delegateBenefits: string[];
  assessment: string;
  certification: string;
  price?: string;
}

export default function FireSafetyCertificationPage() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({});

  const handleCourseSelect = (course: Course) => {
    setSelectedCourse(course);
    // Scroll to course details section
    document
      .getElementById('course-details')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    console.log('Navigate to contact');
  };

  const handleEnrollClick = () => {
    console.log('Enroll in course');
  };

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center bg-charcoal-navy text-white px-6 sm:px-12 lg:px-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/Images/services/fire-safety-cover_optimized.jpg')",
            filter: 'brightness(0.4)',
          }}
        />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-crimson-pink/10 to-vivid-red/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-warm-amber/10 to-crimson-pink/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Wave Overlay */}
        <svg
          className="absolute bottom-0 left-0 w-full h-40 z-0"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="var(--crimson-pink)"
            fillOpacity="0.3"
            d="M0,64L40,90.7C80,117,160,171,240,186.7C320,203,400,181,480,181.3C560,181,640,203,720,224C800,245,880,267,960,240C1040,213,1120,139,1200,106.7C1280,75,1360,85,1400,90.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          />
        </svg>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
          {/* Icon Badge */}
          <div className="flex justify-center mb-6">
            <div className="p-6 bg-pure-white/10 rounded-full shadow-2xl backdrop-blur-sm border border-soft-lavender-grey/20">
              <FlameKindling className="h-20 w-20 text-pure-white" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="text-pure-white block">Fire Safety</span>
            <span className="text-gradient-crimson block">Certification</span>
          </h1>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-soft-lavender-grey/80 max-w-4xl mx-auto leading-relaxed">
            Employers are legally required (The Regulatory Reform Fire Safety
            Order 2005) to provide information, instruction and training about
            fire precautions in the workplace.
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-pure-white/10 backdrop-blur-sm rounded-xl p-6 border border-soft-lavender-grey/20 hover:bg-pure-white/20 transition-all duration-300">
              <BadgeCheck className="h-12 w-12 text-warm-amber mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2 text-pure-white">CPD Verified</h3>
              <p className="text-soft-lavender-grey/80 text-sm">Certified Training</p>
            </div>

            <div className="bg-pure-white/10 backdrop-blur-sm rounded-xl p-6 border border-soft-lavender-grey/20 hover:bg-pure-white/20 transition-all duration-300">
              <Clock className="h-12 w-12 text-warm-amber mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2 text-pure-white">Flexible</h3>
              <p className="text-soft-lavender-grey/80 text-sm">Online Learning</p>
            </div>

            <div className="bg-pure-white/10 backdrop-blur-sm rounded-xl p-6 border border-soft-lavender-grey/20 hover:bg-pure-white/20 transition-all duration-300">
              <ScrollText className="h-12 w-12 text-warm-amber mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2 text-pure-white">Professional</h3>
              <p className="text-soft-lavender-grey/80 text-sm">Certification</p>
            </div>

            <div className="bg-pure-white/10 backdrop-blur-sm rounded-xl p-6 border border-soft-lavender-grey/20 hover:bg-pure-white/20 transition-all duration-300">
              <Shield className="h-12 w-12 text-warm-amber mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2 text-pure-white">Legal</h3>
              <p className="text-soft-lavender-grey/80 text-sm">Compliance</p>
            </div>
          </div>

          {/* Badge and CTA */}
          <div className="mt-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-crimson-gradient rounded-full text-pure-white font-medium mb-6 shadow-lg">
              <Award className="h-5 w-5" />
              <span>Industry Leading Training</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-crimson-gradient hover:from-vivid-red hover:to-crimson-pink text-pure-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() =>
                  document
                    .getElementById('courses')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                View Courses
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </button>
              <button
                className="border-2 border-pure-white text-pure-white hover:bg-pure-white hover:text-charcoal-navy px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
                onClick={handleContactClick}
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Selection Section */}
      <section
        id="courses"
        className="py-16 bg-gradient-to-br from-soft-lavender-grey/20 to-pure-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-crimson-gradient rounded-lg">
                <GraduationCap className="h-8 w-8 text-pure-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-charcoal-navy mb-4">
              Choose Your Fire Safety Course
            </h2>
            <p className="text-lg text-charcoal-navy/70 max-w-2xl mx-auto">
              Select from our comprehensive range of fire safety certification
              courses designed to meet your specific training needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className={`bg-pure-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border-2 ${
                  selectedCourse?.id === course.id
                    ? 'border-crimson-pink ring-4 ring-crimson-pink/20'
                    : 'border-soft-lavender-grey/20 hover:border-crimson-pink/50'
                }`}
                onClick={() => handleCourseSelect(course)}
              >
                <div className="text-center mb-4">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${
                      selectedCourse?.id === course.id
                        ? 'bg-crimson-gradient'
                        : 'bg-gradient-to-br from-warm-amber to-crimson-pink'
                    }`}
                  >
                    <FlameKindling className="h-7 w-7 text-pure-white" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-charcoal-navy mb-3 text-center">
                  {course.title}
                </h3>

                <div className="flex items-center justify-center gap-2 mb-3">
                  <BadgeCheck className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-charcoal-navy/70 font-medium">
                    CPD VERIFIED
                  </span>
                </div>

                <p className="text-charcoal-navy/70 text-sm mb-4 leading-relaxed line-clamp-3">
                  {course.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-crimson-pink" />
                    <span className="text-charcoal-navy/70">
                      Duration: {course.duration}
                    </span>
                  </div>
                  {course.price && (
                    <div className="flex items-center gap-2 text-sm">
                      <DollarSign className="h-4 w-4 text-warm-amber" />
                      <span className="text-crimson-pink font-semibold">
                        {course.price}
                      </span>
                    </div>
                  )}
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCourse?.id === course.id
                      ? 'bg-crimson-gradient text-pure-white shadow-lg'
                      : 'bg-gradient-to-r from-charcoal-navy to-crimson-pink hover:from-crimson-pink hover:to-charcoal-navy text-pure-white'
                  }`}
                >
                  {selectedCourse?.id === course.id
                    ? 'Selected'
                    : 'Select Course'}
                </button>
              </div>
            ))}
          </div>

          {selectedCourse && (
            <div className="mt-12 text-center">
              <button
                className="bg-gradient-to-r from-warm-amber to-crimson-pink hover:from-crimson-pink hover:to-warm-amber text-pure-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() =>
                  document
                    .getElementById('course-details')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                View Course Details
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Course Details Section */}
      {selectedCourse && (
        <section id="course-details" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Course Info Card */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <div className="bg-gradient-to-br from-soft-lavender-grey/20 to-pure-white p-8 rounded-2xl shadow-2xl border border-soft-lavender-grey/20">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-crimson-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                        <FlameKindling className="h-10 w-10 text-pure-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-charcoal-navy mb-2">
                        {selectedCourse.title}
                      </h3>
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <BadgeCheck className="h-5 w-5 text-green-600" />
                        <span className="text-sm text-charcoal-navy/70 font-medium">
                          CPD VERIFIED
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center p-3 bg-pure-white rounded-lg shadow-sm">
                        <span className="text-charcoal-navy/70 flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          Duration:
                        </span>
                        <span className="font-semibold text-charcoal-navy">
                          {selectedCourse.duration}
                        </span>
                      </div>
                      {selectedCourse.price && (
                        <div className="flex justify-between items-center p-3 bg-pure-white rounded-lg shadow-sm">
                          <span className="text-charcoal-navy/70 flex items-center gap-2">
                            <DollarSign className="h-4 w-4" />
                            Price:
                          </span>
                          <span className="font-bold text-crimson-pink text-xl">
                            {selectedCourse.price}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between items-center p-3 bg-pure-white rounded-lg shadow-sm">
                        <span className="text-charcoal-navy/70 flex items-center gap-2">
                          <FileText className="h-4 w-4" />
                          Assessment:
                        </span>
                        <span className="font-semibold text-charcoal-navy text-sm">
                          Available
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-pure-white rounded-lg shadow-sm">
                        <span className="text-charcoal-navy/70 flex items-center gap-2">
                          <ScrollText className="h-4 w-4" />
                          Certificate:
                        </span>
                        <span className="font-semibold text-warm-amber text-sm">
                          Included
                        </span>
                      </div>
                    </div>

                    <button
                      className="w-full bg-gradient-to-r from-warm-amber to-crimson-pink hover:from-crimson-pink hover:to-warm-amber text-pure-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg transform hover:scale-105"
                      onClick={handleEnrollClick}
                    >
                      Enroll Now
                      <Play className="ml-2 h-5 w-5 inline" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div className="lg:col-span-2">
                <div className="space-y-8">
                  {/* Course Description */}
                  <div className="bg-gradient-to-r from-soft-lavender-grey/20 to-pure-white p-6 rounded-xl">
                    <h4 className="text-2xl font-bold text-charcoal-navy mb-4 flex items-center gap-3">
                      <BookOpen className="h-6 w-6 text-crimson-pink" />
                      Course Overview
                    </h4>
                    <p className="text-charcoal-navy/80 leading-relaxed text-lg">
                      {selectedCourse.description}
                    </p>
                  </div>

                  {/* Course Outline */}
                  <div className="bg-pure-white p-6 rounded-xl shadow-lg border border-soft-lavender-grey/20">
                    <button
                      className="w-full flex items-center justify-between text-left"
                      onClick={() => toggleSection('outline')}
                    >
                      <h4 className="text-xl font-bold text-charcoal-navy flex items-center gap-3">
                        <Target className="h-6 w-6 text-crimson-pink" />
                        Course Outline
                      </h4>
                      {expandedSections.outline ? (
                        <ChevronUp className="h-5 w-5 text-crimson-pink" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-crimson-pink" />
                      )}
                    </button>

                    {expandedSections.outline && (
                      <div className="mt-4 space-y-3">
                        {selectedCourse.outline.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 p-3 bg-gradient-to-r from-soft-lavender-grey/20 to-pure-white rounded-lg"
                          >
                            <CheckCircle className="h-5 w-5 text-crimson-pink mt-0.5 flex-shrink-0" />
                            <span className="text-charcoal-navy/80">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Business Benefits */}
                  <div className="bg-pure-white p-6 rounded-xl shadow-lg border border-soft-lavender-grey/20">
                    <button
                      className="w-full flex items-center justify-between text-left"
                      onClick={() => toggleSection('business')}
                    >
                      <h4 className="text-xl font-bold text-charcoal-navy flex items-center gap-3">
                        <Briefcase className="h-6 w-6 text-warm-amber" />
                        Top 5 Business Benefits
                      </h4>
                      {expandedSections.business ? (
                        <ChevronUp className="h-5 w-5 text-warm-amber" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-warm-amber" />
                      )}
                    </button>

                    {expandedSections.business && (
                      <div className="mt-4 space-y-3">
                        {selectedCourse.businessBenefits.map(
                          (benefit, index) => (
                            <div
                              key={index}
                              className="flex items-start gap-3 p-3 bg-gradient-to-r from-warm-amber/10 to-crimson-pink/10 rounded-lg"
                            >
                              <Star className="h-5 w-5 text-warm-amber mt-0.5 flex-shrink-0" />
                              <span className="text-charcoal-navy/80">{benefit}</span>
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>

                  {/* Delegate Benefits */}
                  <div className="bg-pure-white p-6 rounded-xl shadow-lg border border-soft-lavender-grey/20">
                    <button
                      className="w-full flex items-center justify-between text-left"
                      onClick={() => toggleSection('delegate')}
                    >
                      <h4 className="text-xl font-bold text-charcoal-navy flex items-center gap-3">
                        <UserCheck className="h-6 w-6 text-vivid-red" />
                        Top 5 Delegate Benefits
                      </h4>
                      {expandedSections.delegate ? (
                        <ChevronUp className="h-5 w-5 text-vivid-red" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-vivid-red" />
                      )}
                    </button>

                    {expandedSections.delegate && (
                      <div className="mt-4 space-y-3">
                        {selectedCourse.delegateBenefits.map(
                          (benefit, index) => (
                            <div
                              key={index}
                              className="flex items-start gap-3 p-3 bg-gradient-to-r from-vivid-red/10 to-warm-amber/10 rounded-lg"
                            >
                              <Award className="h-5 w-5 text-vivid-red mt-0.5 flex-shrink-0" />
                              <span className="text-charcoal-navy/80">{benefit}</span>
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>

                  {/* Assessment & Certification */}
                  <div className="bg-gradient-to-br from-charcoal-navy to-crimson-pink p-6 rounded-xl text-pure-white">
                    <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                      <ScrollText className="h-6 w-6" />
                      Assessment & Certification
                    </h4>
                    <div className="space-y-3">
                      <div className="bg-pure-white/10 p-3 rounded-lg backdrop-blur-sm">
                        <p className="font-medium mb-1">Assessment Method:</p>
                        <p className="text-soft-lavender-grey/80">
                          {selectedCourse.assessment}
                        </p>
                      </div>
                      <div className="bg-pure-white/10 p-3 rounded-lg backdrop-blur-sm">
                        <p className="font-medium mb-1">Certification:</p>
                        <p className="text-soft-lavender-grey/80">
                          {selectedCourse.certification}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      <section
        className="py-20 bg-gradient-to-r from-charcoal-navy to-crimson-pink text-pure-white relative overflow-hidden"
        style={{
          backgroundImage: "url('/Images/landingpage/get-started_optimized.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-pure-white/10 rounded-full shadow-2xl backdrop-blur-sm border border-soft-lavender-grey/20">
              <FlameKindling className="h-12 w-12 text-pure-white" />
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Ready to Get Certified?
          </h2>

          <p className="text-xl text-soft-lavender-grey/80 max-w-4xl mx-auto mb-10">
            Join thousands of professionals who have enhanced their fire safety
            knowledge and compliance with our industry-leading certification
            courses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button
              className="bg-gradient-to-r from-warm-amber to-crimson-pink hover:from-crimson-pink hover:to-warm-amber text-pure-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={handleEnrollClick}
            >
              Start Learning Today
              <GraduationCap className="ml-2 h-5 w-5 inline" />
            </button>
            <button
              className="border-2 border-pure-white text-pure-white hover:bg-pure-white hover:text-charcoal-navy px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
              onClick={handleContactClick}
            >
              Contact Us
              <Phone className="ml-2 h-5 w-5 inline" />
            </button>
          </div>

          <div className="bg-pure-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-warm-amber mb-2">
                  CPD
                </div>
                <p className="text-soft-lavender-grey/80">Verified Training</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-crimson-pink mb-2">
                  1000+
                </div>
                <p className="text-soft-lavender-grey/80">Students Trained</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-pure-white mb-2">100%</div>
                <p className="text-soft-lavender-grey/80">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
