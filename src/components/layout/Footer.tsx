import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUp,
} from 'lucide-react';

const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-blue text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-dark via-orange to-teal-light animate-gradient"></div>
      <div className="absolute top-20 right-10 w-20 h-20 bg-teal-dark/10 rounded-full animate-float"></div>
      <div
        className="absolute bottom-20 left-10 w-16 h-16 bg-orange/10 rounded-full animate-float"
        style={{ animationDelay: '1s' }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="animate-fade-in-up">
            <div className="flex items-center mb-3 sm:mb-4">
              <img
                src="/citrix-logo_optimized.webp"
                alt="Citrix Consulting Services"
                className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 transition-transform duration-300 hover:rotate-12"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 bg-teal-dark rounded-full flex items-center justify-center hidden">
                <span className="text-white font-bold text-xs sm:text-sm">
                  C
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white">
                Citrix Consulting Services
              </h3>
            </div>
            <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm">
              Professional compliance and safety solutions for businesses across
              the UK. Helping you achieve regulatory excellence.
            </p>
            <div className="flex space-x-2 sm:space-x-4">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Instagram, href: '#' },
              ].map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 hover-scale p-1 sm:p-2"
                  asChild
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="h-3 w-3 sm:h-4 sm:w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Quick Links
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About Us' },
                { path: '/services', label: 'Services' },
                { path: '/contact', label: 'Contact' },
              ].map((link, index) => (
                <li
                  key={link.path}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${0.2 + index * 0.05}s` }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-all duration-300 text-left relative overflow-hidden group text-xs sm:text-sm"
                  >
                    <span className="relative z-10">{link.label}</span>
                    <div className="absolute inset-0 bg-orange/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Our Services
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              {[
                {
                  path: '/services/iso-certifications/iso-9001',
                  name: 'ISO 9001 Certification',
                },
                { path: '/about/accreditation', name: 'CHAS Accreditation' },
                {
                  path: '/services/risk-assessments',
                  name: 'Fire Risk Assessment',
                },
                {
                  path: '/services/health-safety-consulting',
                  name: 'Health & Safety',
                },
              ].map((service, index) => (
                <li
                  key={service.path}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${0.3 + index * 0.05}s` }}
                >
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-white transition-all duration-300 text-left relative overflow-hidden group text-xs sm:text-sm"
                  >
                    <span className="relative z-10">{service.name}</span>
                    <div className="absolute inset-0 bg-teal-light/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Contact Info
            </h3>
            <div className="space-y-2 sm:space-y-3">
              {[
                { icon: Mail, text: 'info@citrix-consulting-limited.co.uk' },
                { icon: Phone, text: '+44 20 8575 5544' },
                {
                  icon: MapPin,
                  text: '272 Bath Street, Glasgow, Scotland, Middlesex G2 4JR',
                },
                { icon: Clock, text: 'Mon-Fri: 9AM-6PM' },
              ].map((contact, index) => (
                <div
                  key={index}
                  className="flex items-center animate-fade-in-up hover-lift"
                  style={{ animationDelay: `${0.4 + index * 0.05}s` }}
                >
                  <contact.icon className="h-3 w-3 sm:h-4 sm:w-4 text-orange mr-2 transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-gray-300 text-xs sm:text-sm break-all">
                    {contact.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 relative mt-6 sm:mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div className="md:flex md:items-center md:justify-between">
              <div className="text-xs sm:text-sm text-gray-400 animate-fade-in-up">
                © 2024 Citrix Consulting Services Limited. All rights reserved.
              </div>
              <div
                className="mt-3 md:mt-0 animate-fade-in-up"
                style={{ animationDelay: '0.1s' }}
              >
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                  {[
                    { path: '/policies', label: 'Privacy Policy' },
                    { path: '/policies', label: 'Terms & Conditions' },
                  ].map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className="text-xs sm:text-sm text-gray-400 hover:text-white transition-all duration-300 relative overflow-hidden group"
                    >
                      <span className="relative z-10">{link.label}</span>
                      <div className="absolute inset-0 bg-orange/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 sm:bottom-8 right-4 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-orange hover:bg-orange/90 text-white rounded-full shadow-lg transition-all duration-300 hover-lift z-50 ${
          showScrollTop
            ? 'animate-fade-in-up opacity-100'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5 mx-auto" />
      </button>
    </footer>
  );
};

export default Footer;
