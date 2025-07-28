import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/button';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

interface NavigationItem {
  id: string;
  label: string;
  path?: string;
  children?: NavigationItem[];
  badge?: string;
}

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(
    null
  );
  const [mobileExpandedItems, setMobileExpandedItems] = useState<string[]>([]);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<number | null>(null);
  const location = useLocation();

  const navigationStructure: NavigationItem[] = [
    {
      id: 'home',
      label: 'Home',
      path: '/',
    },
    {
      id: 'services',
      label: 'Services',
      children: [
        {
          id: 'safety-adviser',
          label: 'Safety Adviser',
          path: '/services/safety-adviser',
          children: [
            {
              id: 'health-safety',
              label: 'Health & Safety',
              path: '/services/safety-adviser/health-safety',
              children: [
                {
                  id: 'accreditation-support',
                  label: 'Accreditation Support',
                  path: '/services/safety-adviser/health-safety/accreditation-support',
                },
              ],
            },
            {
              id: 'chas-assistance',
              label: 'CHAS Assistance',
              path: '/services/safety-adviser/chas-assistance',
            },
          ],
        },
        {
          id: 'sia-contractor',
          label: 'SIA Contractor (ACS)',
          path: '/services/sia-contractor',
          children: [
            {
              id: 'acs-audits',
              label: 'ACS Audits',
              path: '/services/sia-contractor/acs-audits',
            },
            {
              id: 'acs-eligibility',
              label: 'ACS Eligibility',
              path: '/services/sia-contractor/acs-eligibility',
            },
          ],
        },
        {
          id: 'iso-certifications',
          label: 'ISO Certifications',
          path: '/services/iso-certifications',
          children: [
            {
              id: 'iso-9001',
              label: 'ISO 9001',
              path: '/services/iso-certifications/iso-9001',
              badge: 'Most Popular',
            },
            {
              id: 'iso-14001',
              label: 'ISO 14001',
              path: '/services/iso-certifications/iso-14001',
              children: [
                {
                  id: 'iso-14001-certification',
                  label: 'Certification',
                  path: '/services/iso-certifications/iso-14001/certification',
                },
                {
                  id: 'sia-acs-integration',
                  label: 'SIA ACS Integration',
                  path: '/services/iso-certifications/iso-14001/sia-acs-integration',
                },
              ],
            },
            {
              id: 'ohsas-18001',
              label: 'OHSAS 18001',
              path: '/services/iso-certifications/ohsas-18001',
              children: [
                {
                  id: 'ohsas-18001-certification',
                  label: 'Certification',
                  path: '/services/iso-certifications/ohsas-18001/certification',
                },
              ],
            },
          ],
        },
        {
          id: 'staff-vetting',
          label: 'Staff Vetting (BS7858)',
          path: '/services/staff-vetting',
        },
        {
          id: 'pat-testing',
          label: 'PAT Testing',
          path: '/services/pat-testing',
          children: [
            {
              id: 'pat-pricing',
              label: 'Pricing',
              path: '/services/pat-testing/pricing',
            },
            {
              id: 'fire-safety',
              label: 'Fire Safety',
              path: '/services/pat-testing/fire-safety',
            },
          ],
        },
        {
          id: 'risk-assessments',
          label: 'Risk Assessments',
          path: '/services/risk-assessments',
        },
        {
          id: 'bafe-certification',
          label: 'BAFE Certification',
          path: '/services/bafe-certification',
        },
      ],
    },
    {
      id: 'about',
      label: 'About Us',
      children: [
        {
          id: 'testimonials',
          label: 'Testimonials',
          path: '/testimonials',
        },
        {
          id: 'policies',
          label: 'Policies',
          path: '/policies',
        },
        {
          id: 'insurance',
          label: 'Insurance',
          path: '/about/insurance',
        },
        {
          id: 'careers',
          label: 'Careers',
          path: '/about/careers',
        },
      ],
    },
    {
      id: 'contact',
      label: 'Contact',
      path: '/contact',
    },
  ];

  const clearHoverTimeout = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  const handleDropdownHover = (dropdown: string) => {
    clearHoverTimeout();
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    }, 200);
  };

  const handleSubDropdownHover = (subDropdown: string) => {
    clearHoverTimeout();
    setActiveSubDropdown(subDropdown);
  };

  const handleSubDropdownLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveSubDropdown(null);
    }, 200);
  };

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleSubDropdownToggle = (subDropdown: string) => {
    setActiveSubDropdown(
      activeSubDropdown === subDropdown ? null : subDropdown
    );
  };

  const handleMobileItemToggle = (itemId: string) => {
    setMobileExpandedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const renderDesktopDropdown = (
    items: NavigationItem[],
    level: number = 0
  ) => {
    return (
      <div className={`py-2 ${level > 0 ? 'pl-4' : ''}`}>
        {items.map((item, index) => (
          <div key={item.id} className="relative">
            {item.children ? (
              <div className="group">
                {item.path ? (
                  // Item has both path and children - make it navigable with sub-dropdown toggle
                  <div className="flex items-center justify-between group/sub">
                    <Link
                      to={item.path}
                      className="dropdown-item flex-1 block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-teal-light/10 hover:text-teal-dark transition-all duration-300 border-b border-gray-50 last:border-b-0 relative overflow-hidden group/item"
                      onClick={(e) => {
                        e.stopPropagation();
                        clearHoverTimeout();
                        setActiveDropdown(null);
                        setActiveSubDropdown(null);
                      }}
                    >
                      <div className="flex items-center">
                        <span className="text-orange mr-2 transition-transform duration-300 group-hover/item:scale-110">
                          •
                        </span>
                        <div>
                          <div className="font-medium">{item.label}</div>
                          {item.badge && (
                            <div className="text-xs text-gray-500">
                              {item.badge}
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                    <div
                      onMouseEnter={() => handleSubDropdownHover(item.id)}
                      onMouseLeave={handleSubDropdownLeave}
                      className="relative"
                    >
                      <button className="dropdown-item p-2 text-gray-400 hover:text-teal-dark transition-colors duration-300">
                        <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover/sub:rotate-90" />
                      </button>
                      {activeSubDropdown === item.id && (
                        <div className="absolute left-full top-0 ml-1 w-64 bg-white rounded-md shadow-xl border border-gray-200 z-50 animate-dropdown">
                          {renderDesktopDropdown(item.children, level + 1)}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  // Item has only children - make it a toggle button
                  <div
                    onMouseEnter={() => handleSubDropdownHover(item.id)}
                    onMouseLeave={handleSubDropdownLeave}
                    className="relative"
                  >
                    <button className="dropdown-item block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-teal-light/10 hover:text-teal-dark transition-all duration-300 border-b border-gray-50 last:border-b-0 relative overflow-hidden group/item">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="text-orange mr-2 transition-transform duration-300 group-hover/item:scale-110">
                            •
                          </span>
                          <div>
                            <div className="font-medium">{item.label}</div>
                            {item.badge && (
                              <div className="text-xs text-gray-500">
                                {item.badge}
                              </div>
                            )}
                          </div>
                        </div>
                        <ChevronRight className="h-4 w-4 text-gray-400 transition-transform duration-300 group-hover/item:rotate-90" />
                      </div>
                    </button>
                    {activeSubDropdown === item.id && (
                      <div className="absolute left-full top-0 ml-1 w-64 bg-white rounded-md shadow-xl border border-gray-200 z-50 animate-dropdown">
                        {renderDesktopDropdown(item.children, level + 1)}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              // Item has no children - simple link
              <Link
                to={item.path || '#'}
                className="dropdown-item block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-teal-light/10 hover:text-teal-dark transition-all duration-300 border-b border-gray-50 last:border-b-0 relative overflow-hidden group"
                onClick={(e) => {
                  e.stopPropagation();
                  clearHoverTimeout();
                  setActiveDropdown(null);
                  setActiveSubDropdown(null);
                }}
              >
                <div className="flex items-center">
                  <span className="text-orange mr-2 transition-transform duration-300 group-hover:scale-110">
                    •
                  </span>
                  <div>
                    <div className="font-medium">{item.label}</div>
                    {item.badge && (
                      <div className="text-xs text-gray-500">{item.badge}</div>
                    )}
                  </div>
                </div>
              </Link>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderMobileItem = (item: NavigationItem, level: number = 0) => {
    const isExpanded = mobileExpandedItems.includes(item.id);
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.id} className={`${level > 0 ? 'ml-4' : ''}`}>
        <div className="flex items-center justify-between">
          {item.path ? (
            <Link
              to={item.path}
              className="flex-1 px-3 py-2 text-teal-dark hover:text-orange hover:bg-orange/10 rounded-md transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ) : (
            <button
              onClick={() => handleMobileItemToggle(item.id)}
              className="flex-1 text-left px-3 py-2 text-teal-dark hover:text-orange hover:bg-orange/10 rounded-md transition-all duration-300"
            >
              {item.label}
            </button>
          )}
          {hasChildren && (
            <button
              onClick={() => handleMobileItemToggle(item.id)}
              className="p-2 text-teal-dark hover:text-orange transition-colors duration-300"
            >
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
              />
            </button>
          )}
        </div>
        {hasChildren && isExpanded && (
          <div className="mt-1 space-y-1">
            {item.children?.map((child) => renderMobileItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const dropdownElement = dropdownRef.current;

      // Only close dropdown if click is completely outside the dropdown area
      if (dropdownElement && !dropdownElement.contains(target)) {
        clearHoverTimeout();
        setActiveDropdown(null);
        setActiveSubDropdown(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        clearHoverTimeout();
        setActiveDropdown(null);
        setActiveSubDropdown(null);
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
      clearHoverTimeout();
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50'
          : 'bg-white shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="flex items-center cursor-pointer transition-all duration-300 hover:scale-105"
              >
                <img
                  src="/citrix_logo.png"
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
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationStructure.map((item) => (
                <div key={item.id} className="relative">
                  {item.children ? (
                    <div className="relative">
                      <button
                        onMouseEnter={() => handleDropdownHover(item.id)}
                        onMouseLeave={handleDropdownLeave}
                        className={`nav-link text-teal-dark hover:text-orange px-3 py-2 rounded-md transition-all duration-300 flex items-center font-medium relative overflow-hidden group ${
                          activeDropdown === item.id ? 'text-orange' : ''
                        }`}
                      >
                        <span className="relative z-10">{item.label}</span>
                        <ChevronDown
                          className={`ml-1 h-4 w-4 transition-all duration-300 ${
                            activeDropdown === item.id ? 'rotate-180' : ''
                          }`}
                        />
                        <div className="absolute inset-0 bg-orange/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      </button>
                      {activeDropdown === item.id && (
                        <div
                          ref={dropdownRef}
                          onMouseEnter={() => handleDropdownHover(item.id)}
                          onMouseLeave={handleDropdownLeave}
                          className="absolute top-full left-0 mt-1 w-80 bg-white rounded-md shadow-xl border border-gray-200 z-50 animate-dropdown"
                        >
                          <div className="py-2">
                            <Link
                              to={item.path || `/services/${item.id}`}
                              className="dropdown-item block w-full text-left px-4 py-3 text-sm font-medium text-teal-dark hover:bg-teal-light/10 hover:text-orange transition-all duration-300 border-b border-gray-100 relative overflow-hidden group"
                              onClick={() => {
                                clearHoverTimeout();
                                setActiveDropdown(null);
                                setActiveSubDropdown(null);
                              }}
                            >
                              <span className="relative z-10">
                                📋 View All {item.label}
                              </span>
                              <div className="absolute inset-0 bg-orange/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </Link>
                            {renderDesktopDropdown(item.children || [])}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path || '/'}
                      className="nav-link text-teal-dark hover:text-orange px-3 py-2 rounded-md transition-all duration-300 font-medium relative overflow-hidden group"
                    >
                      <span className="relative z-10">{item.label}</span>
                      <div className="absolute inset-0 bg-orange/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button className="bg-orange hover:bg-orange/90 text-white px-6 py-2 btn-premium transition-all-smooth">
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
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
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden animate-slide-in-down">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 max-h-[80vh] overflow-y-auto">
            {navigationStructure.map((item) => renderMobileItem(item))}
            <div className="pt-4 border-t border-gray-200">
              <Link to="/contact">
                <Button
                  className="w-full bg-orange hover:bg-orange/90 text-white btn-premium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
