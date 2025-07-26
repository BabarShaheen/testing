import { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavigationProps {
  onNavigate?: (page: string, serviceId?: string) => void;
}

export function Navigation({ onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const services = [
    { id: 'iso-9001', name: 'ISO 9001 Certification', badge: 'Most Popular' },
    { id: 'chas-accreditation', name: 'CHAS Accreditation', badge: 'Essential' },
    { id: 'fire-risk-assessment', name: 'Fire Risk Assessment', badge: 'Required' },
    { id: 'health-safety-consulting', name: 'Health & Safety Consulting', badge: 'Core Service' },
    { id: 'environmental-management', name: 'Environmental Management', badge: 'Sustainable' },
    { id: 'quality-assurance', name: 'Quality Assurance', badge: 'Excellence' },
    { id: 'risk-management', name: 'Risk Management', badge: 'Strategic' }
  ];

  const handleNavClick = (page: string, serviceId?: string) => {
    if (onNavigate) {
      onNavigate(page, serviceId);
    }
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
        : 'bg-white shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div 
                className="flex items-center cursor-pointer transition-all duration-300 hover:scale-105" 
                onClick={() => handleNavClick('home')}
              >
                <img 
                  src="/logo.png" 
                  alt="Citrix Consulting Services" 
                  className="w-10 h-10 mr-3 transition-transform duration-300 hover:rotate-12"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="w-10 h-10 mr-3 bg-teal-dark rounded-full flex items-center justify-center hidden">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <div>
                  <div className="text-teal-dark font-bold text-lg transition-colors duration-300 hover:text-teal-light">
                    Citrix Consulting
                  </div>
                  <div className="text-navy-blue text-sm transition-colors duration-300 hover:text-gray-600">
                    Services Limited
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button 
                onClick={() => handleNavClick('home')}
                className="nav-link text-teal-dark hover:text-orange px-3 py-2 rounded-md transition-all duration-300 font-medium relative overflow-hidden group"
              >
                <span className="relative z-10">Home</span>
                <div className="absolute inset-0 bg-orange/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
              
              {/* Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => handleDropdownToggle('services')}
                  className={`nav-link text-teal-dark hover:text-orange px-3 py-2 rounded-md transition-all duration-300 flex items-center font-medium relative overflow-hidden group ${
                    activeDropdown === 'services' ? 'text-orange' : ''
                  }`}
                >
                  <span className="relative z-10">Services</span>
                  <ChevronDown className={`ml-1 h-4 w-4 transition-all duration-300 ${
                    activeDropdown === 'services' ? 'rotate-180' : ''
                  }`} />
                  <div className="absolute inset-0 bg-orange/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-md shadow-xl border border-gray-200 z-50 animate-dropdown">
                    <div className="py-2">
                      <button
                        onClick={() => handleNavClick('services')}
                        className="block w-full text-left px-4 py-3 text-sm font-medium text-teal-dark hover:bg-teal-light/10 hover:text-orange transition-all duration-300 border-b border-gray-100 relative overflow-hidden group"
                      >
                        <span className="relative z-10">📋 View All Services</span>
                        <div className="absolute inset-0 bg-orange/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      </button>
                      <div className="py-1">
                        {services.map((service, index) => (
                          <button
                            key={service.id}
                            onClick={() => handleNavClick('service-detail', service.id)}
                            className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-teal-light/10 hover:text-teal-dark transition-all duration-300 border-b border-gray-50 last:border-b-0 relative overflow-hidden group animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.05}s` }}
                          >
                            <div className="flex items-center">
                              <span className="text-orange mr-2 transition-transform duration-300 group-hover:scale-110">•</span>
                              <div>
                                <div className="font-medium">{service.name}</div>
                                <div className="text-xs text-gray-500">{service.badge}</div>
                              </div>
                            </div>
                            <div className="absolute inset-0 bg-teal-light/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {[
                { page: 'about', label: 'About Us' },
                { page: 'testimonials', label: 'Testimonials' },
                { page: 'policies', label: 'Policies' },
                { page: 'jobs', label: 'Jobs' }
              ].map((item) => (
                <button 
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className="nav-link text-teal-dark hover:text-orange px-3 py-2 rounded-md transition-all duration-300 font-medium relative overflow-hidden group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-orange/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-orange hover:bg-orange/90 text-white px-6 py-2 btn-premium transition-all-smooth"
              onClick={() => handleNavClick('contact')}
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-teal-dark hover:text-orange transition-colors duration-300 p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 animate-fade-in" />
              ) : (
                <Menu className="h-6 w-6 animate-fade-in" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-in-down">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <button
                onClick={() => handleNavClick('home')}
                className="block w-full text-left px-3 py-2 text-teal-dark hover:text-orange hover:bg-orange/10 rounded-md transition-all duration-300"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('services')}
                className="block w-full text-left px-3 py-2 text-teal-dark hover:text-orange hover:bg-orange/10 rounded-md transition-all duration-300"
              >
                Services
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className="block w-full text-left px-3 py-2 text-teal-dark hover:text-orange hover:bg-orange/10 rounded-md transition-all duration-300"
              >
                About Us
              </button>
              <button
                onClick={() => handleNavClick('testimonials')}
                className="block w-full text-left px-3 py-2 text-teal-dark hover:text-orange hover:bg-orange/10 rounded-md transition-all duration-300"
              >
                Testimonials
              </button>
              <button
                onClick={() => handleNavClick('policies')}
                className="block w-full text-left px-3 py-2 text-teal-dark hover:text-orange hover:bg-orange/10 rounded-md transition-all duration-300"
              >
                Policies
              </button>
              <button
                onClick={() => handleNavClick('jobs')}
                className="block w-full text-left px-3 py-2 text-teal-dark hover:text-orange hover:bg-orange/10 rounded-md transition-all duration-300"
              >
                Jobs
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="block w-full text-left px-3 py-2 text-teal-dark hover:text-orange hover:bg-orange/10 rounded-md transition-all duration-300"
              >
                Contact
              </button>
              <div className="pt-2">
                <Button 
                  className="w-full bg-orange hover:bg-orange/90 text-white btn-premium"
                  onClick={() => handleNavClick('contact')}
                >
                  Get a Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}