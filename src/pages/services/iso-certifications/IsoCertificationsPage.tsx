// src/pages/services/IsoCertificationsPage.tsx
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import {
  isoCertifications,
  isoCertificationBenefits,
  certificationProcessSteps,
  jointSystemBenefits,
} from '../../../data/isoCertificationData';

export function IsoCertificationsPage() {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="min-h-screen">
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1C1F2A] text-white px-6 sm:px-12 lg:px-20">
          {/* Background Image Layer */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage: "url('/iso_cover_optimized.webp')",
              filter: 'brightness(0.6)',
            }}
          />

          {/* Content Layer */}
          <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
              ISO Certifications
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Professional ISO certification services for quality, environment,
              and safety management systems — empowering your organization with
              globally recognized standards.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              <button
                onClick={handleContactClick}
                className="bg-gradient-to-r from-[#ED2568] to-[#EE343B] text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:brightness-110 transition-all"
              >
                Get Certified Now
              </button>

              <button
                onClick={() => navigate('/services')}
                className="border border-white/30 text-white hover:text-pink-300 hover:border-pink-300 px-8 py-3 text-lg rounded-xl transition-all"
              >
                View Other Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight mb-2 text-primary">
              Our ISO <span className="text-gradient-crimson">Services</span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Comprehensive ISO certification services designed to help your
              business achieve international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {isoCertifications.map((service) => {
              const ServiceIcon = service.icon;
              return (
                <Card
                  key={service.id}
                  className="hover:shadow-xl transition-all duration-300 border-none bg-gray-50/50 group cursor-pointer"
                  onClick={() => handleServiceClick(service.id)}
                >
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-white rounded-lg group-hover:bg-soft-lavender-grey/10 transition-all duration-300">
                        <ServiceIcon
                          className="h-8 w-8 text-warm-amber"
                          aria-hidden
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <CardTitle className="text-crimson-pink group-hover:text-vivid-red transition-colors">
                        {service.title}
                      </CardTitle>
                      <Badge
                        variant="secondary"
                        className="bg-leaf-green text-white"
                      >
                        {service.badge}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">
                      {service.description}
                    </CardDescription>
                    <div className="mb-4 p-3 bg-white/60 rounded-lg border border-gray-200">
                      <p className="text-sm text-gray-600 mb-1">
                        Starting from:
                      </p>
                      <p className="font-semibold text-crimson-pink">
                        {service.price}
                      </p>
                    </div>

                    <Button
                      className="w-full bg-crimson-pink hover:bg-vivid-red text-white transition-all-smooth"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleServiceClick(service.id);
                      }}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-blue mb-4">
              Benefits of ISO Certification
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Achieve international recognition and improve your business
              processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isoCertificationBenefits.map((item, index) => {
              const BenefitIcon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#ED2568] to-[#EE343B] rounded-full flex items-center justify-center mx-auto mb-4">
                    <BenefitIcon className="w-8 h-8 text-white" aria-hidden />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-blue mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BS OHSAS 18001 */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div
            className="text-center mb-16 animate-fade-up"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-4xl font-extrabold text-navy-blue mb-4">
              Certification to BS OHSAS 18001
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Set the benchmark in occupational health and safety.
            </p>
          </div>

          {/* Description & Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Left Text Block */}
            <div className="space-y-6 text-gray-700 leading-relaxed animate-fade-right">
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-4">
                Raise standards for your staff and customers with a certificate
                in health and safety best practice. BS OHSAS 18001 is the best
                benchmark for occupational health and safety management.
              </p>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-4">
                Achieve certification and you can prioritize staff welfare,
                improve customer satisfaction, and give your company preferred
                supplier status.
              </p>
            </div>

            {/* Right Benefits Card */}
            <div
              className="bg-gray-50 p-8 rounded-2xl shadow-md animate-fade-left"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-semibold text-navy-blue mb-6">
                Key Benefits
              </h3>
              <ul className="space-y-4">
                {[
                  'Improve employee welfare',
                  'Boost customer trust',
                  'Meet legal compliance',
                  'Gain preferred supplier status',
                  'Drive safety-first culture',
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-leaf-green flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Certification Process */}
          <div
            className="bg-gray-50 p-10 rounded-2xl shadow-sm"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-bold text-navy-blue mb-12 text-center">
              Our Certification Process
            </h3>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 h-full w-0.5 bg-crimson-pink z-0" />

              <div className="space-y-10 relative">
                {certificationProcessSteps.map((step, index) => (
                  <div key={index} className="flex items-start relative z-10">
                    {/* Number Badge */}
                    <div className="flex flex-col items-center mr-6">
                      <div className="w-12 h-12 bg-crimson-pink text-white rounded-full flex items-center justify-center font-bold shadow">
                        {index + 1}
                      </div>
                    </div>

                    {/* Card */}
                    <div className="bg-white rounded-xl p-5 shadow hover:shadow-md transition-shadow duration-300 w-full">
                      <h4 className="font-semibold text-navy-blue mb-1">
                        {step.step}
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOINT SYSTEMS */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Combined ISO & OHSAS Systems
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Integrated management systems for maximum efficiency and cost
              benefits
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">
                  Common Elements Integration
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  There are several common elements between these three systems,
                  such as management review, document control, corrective action
                  and the requirement for trained personnel. These can be
                  integrated into a single, joint system.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Management Review',
                    'Document Control',
                    'Corrective Action',
                    'Trained Personnel',
                    'Audit Procedures',
                    'Policy Framework',
                  ].map((element, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg"
                    >
                      <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">
                        {element}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-2xl border border-green-200">
                <h4 className="font-semibold text-slate-800 text-lg mb-4">
                  Integration Benefits
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Reduced duplication of processes and documentation
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Centralized document control system
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Cost benefits for third-party audits
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Streamlined management processes
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                System Integration Overview
              </h3>

              {jointSystemBenefits.map((system, index) => {
                // robust split: prefix = everything except last token, number = last token
                const parts = system.system.split(' ');
                const number = parts[parts.length - 1] ?? '';
                const prefix =
                  parts.slice(0, parts.length - 1).join(' ') ?? parts[0];

                return (
                  <div
                    key={index}
                    className={`iso-system-card ${
                      index === 0
                        ? 'iso-card-primary'
                        : index === 1
                        ? 'iso-card-success'
                        : 'iso-card-warning'
                    } p-6 rounded-2xl text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="system-badge flex-shrink-0">
                        <div className="text-center leading-none">
                          <div className="sb-prefix">{prefix}</div>
                          <div className="sb-number">{number}</div>
                        </div>
                      </div>

                      <div className="flex-1">
                        <h4 className="text-xl font-bold mb-2">
                          {system.system}
                        </h4>
                        <p className="text-white/90 mb-3 font-medium">
                          {system.focus}
                        </p>

                        <div className="iso-integration">
                          <p className="text-sm font-medium">
                            Integration Points:
                          </p>
                          <p className="text-white/90 text-sm">
                            {system.integration}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 bg-crimson-gradient text-white relative overflow-hidden animate-fade-in"
        style={{
          backgroundImage:
            "url('/Images/landingpage/get-started_optimized.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to Achieve ISO Certification?
          </h2>

          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-10">
            Contact us today for a free consultation and discover how we can
            help you achieve ISO certification.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button
              className="bg-gradient-to-r from-warm-amber to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg transition-all duration-300"
              onClick={handleContactClick}
            >
              Get Free Consultation
            </button>
            <button
              className="border-2 border-white text-white hover:bg-white hover:text-crimson-pink px-8 py-3 rounded-xl text-lg font-semibold transition-all duration-300"
              onClick={handleContactClick}
            >
              Contact Us Today
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto shadow-md">
            <p className="text-xl font-semibold mb-2">
              Your ISO Journey Starts Here
            </p>
            <p className="text-gray-100 text-base leading-relaxed">
              With years of experience and a 100% success rate, we’re here to
              guide you through every step of the ISO certification process —
              hassle-free and efficient.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
