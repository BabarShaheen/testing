import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Shield,
  Users,
  FileText,
  Building,
  Phone,
  Award,
  Flame,
  Settings,
  Zap,
  AlertTriangle,
  Home,
} from 'lucide-react';

interface NavigationItem {
  id: string;
  label: string;
  path?: string;
  children?: NavigationItem[];
  badge?: string;
  icon?: React.ComponentType<{ className?: string }>;
  description?: string;
}

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileExpandedItems, setMobileExpandedItems] = useState<string[]>([]);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const hoverTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(
    null
  );
  const dropdownTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const navigationStructure: NavigationItem[] = [
    {
      id: 'home',
      label: 'Home',
      path: '/',
      icon: Home,
    },
    {
      id: 'services',
      label: 'Services',
      icon: Settings,
      description: 'Comprehensive consulting solutions',
      children: [
        {
          id: 'safety-advisor',
          label: 'Safety Advisor',
          path: '/services/safety-advisor',
          icon: Shield,
          description: 'Health & safety compliance',
          children: [
            {
              id: 'health-safety',
              label: 'Health and Safety',
              path: '/services/safety-advisor/health-safety',
              icon: Shield,
              description: 'Comprehensive safety management',
            },
            {
              id: 'chas-assistance',
              label: 'CHAS Assistance',
              path: '/services/safety-advisor/chas-assistance',
              icon: Award,
              description: 'CHAS accreditation support',
            },
            {
              id: 'smas-accreditation',
              label: 'SMAS Accreditation',
              path: '/services/smas-accreditation',
              icon: Award,
              description: 'SMAS accreditation support',
            },
            {
              id: 'acclaim-accreditation',
              label: 'Acclaim Accreditation',
              path: '/services/acclaim-accreditation',
              icon: Award,
              description: 'Acclaim accreditation support',
            },
            {
              id: 'constructionline-accreditation',
              label: 'Constructionline Accreditation',
              path: '/services/constructionline-accreditation',
              icon: Award,
              description: 'Constructionline accreditation support',
            },
          ],
        },
        {
          id: 'sia-contractor',
          label: 'SIA Contractor (ACS)',
          icon: Award,
          path: '/services/sia-contractor',
          description: 'Security industry compliance',
          children: [
            {
              id: 'acs-audit',
              label: 'ACS Audit',
              path: '/services/sia-contractor/acs-audit',
              icon: FileText,
              description: 'Approved Contractor Scheme audits',
            },
            {
              id: 'acs-eligibility',
              label: 'ACS Eligibility',
              path: '/services/sia-contractor/acs-eligibility',
              icon: Users,
              description: 'Eligibility assessment and support',
            },
          ],
        },
        {
          id: 'iso-certifications',
          label: 'ISO Certifications',
          path: '/services/iso-certifications',
          icon: Award,
          description: 'International standards compliance',
          badge: 'Popular',
          children: [
            {
              id: 'iso-9001',
              label: 'ISO 9001',
              path: '/services/iso-certifications/iso-9001',
              icon: Award,
              description: 'Quality management systems',
              badge: 'Most Popular',
            },
            {
              id: 'iso-14001',
              label: 'ISO 14001',
              path: '/services/iso-certifications/iso-14001',
              icon: Award,
              description: 'Environmental management systems',
            },
            {
              id: 'sia-acs-integration',
              label: 'SIA ACS Integration',
              path: '/services/iso-certifications/sia-acs-integration',
              icon: Settings,
              description: 'Integrated compliance solutions',
            },
            {
              id: 'ohsas-18001',
              label: 'OHSAS 18001',
              path: '/services/iso-certifications/ohsas-18001',
              icon: Shield,
              description: 'Occupational health & safety',
            },
          ],
        },
        {
          id: 'staff-vetting',
          label: 'Staff Vetting (BS7858)',
          path: '/services/staff-vetting',
          icon: Users,
          description: 'Background screening services',
        },
        {
          id: 'pat-testing',
          label: 'PAT Testing',
          path: '/services/pat-testing',
          icon: Zap,
          description: 'Portable appliance testing',
        },
        {
          id: 'risk-assessments',
          label: 'Risk Assessments',
          path: '/services/risk-assessments',
          icon: AlertTriangle,
          description: 'Comprehensive risk analysis',
        },
        {
          id: 'fire-safety',
          label: 'Fire Safety Certification',
          path: '/services/fire-safety',
          icon: Flame,
          description: 'Fire safety compliance',
        },
        {
          id: 'bafe-certification',
          label: 'BAFE Certification',
          path: '/services/bafe-certification',
          icon: Award,
          description: 'Fire safety certification body',
        },
      ],
    },
    {
      id: 'about',
      label: 'About Us',
      icon: Building,
      description: 'Learn about our company',
      children: [
        {
          id: 'accreditation',
          label: 'Accreditation',
          path: '/about/accreditation',
          icon: Users,
          description: 'Client success stories',
        },
        {
          id: 'policies',
          label: 'Policies',
          path: '/about/policies',
          icon: FileText,
          description: 'Company policies and procedures',
        },
        {
          id: 'insurance',
          label: 'Insurance',
          path: '/about/insurance',
          icon: Shield,
          description: 'Insurance coverage details',
        },
        {
          id: 'careers',
          label: 'Careers',
          path: '/about/careers',
          icon: Users,
          description: 'Join our team',
        },
      ],
    },
    {
      id: 'contact',
      label: 'Contact',
      path: '/contact',
      icon: Phone,
    },
  ];

  const handleMobileItemToggle = (itemId: string) => {
    setMobileExpandedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
    setMobileExpandedItems([]);
  };

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  const handleMainItemHover = (itemId: string | null) => {
    // Clear any existing timeouts
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }

    if (itemId) {
      // Immediately show the dropdown
      setHoveredItem(itemId);
      setActiveDropdown(null);
    } else {
      // Add a delay before closing
      hoverTimeoutRef.current = setTimeout(() => {
        setHoveredItem(null);
        setActiveDropdown(null);
      }, 300);
    }
  };

  const handleDropdownHover = (itemId: string | null) => {
    // Clear any existing timeouts
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }

    if (itemId) {
      setActiveDropdown(itemId);
    } else {
      dropdownTimeoutRef.current = setTimeout(() => {
        setActiveDropdown(null);
      }, 200);
    }
  };

  const DropdownItem: React.FC<{
    item: NavigationItem;
    level?: number;
    onItemHover?: (itemId: string | null) => void;
    hoveredSubItem?: string | null;
  }> = ({ item, level = 0, onItemHover, hoveredSubItem }) => {
    const hasChildren = item.children && item.children.length > 0;

    if (!hasChildren) {
      return (
        <Link
          to={item.path || '#'}
          className={`dropdown-item group flex items-center gap-3 px-5 py-4 text-base transition-all duration-300 cursor-pointer rounded-xl mx-2 text-left ${
            isActiveRoute(item.path || '')
              ? 'bg-gradient-to-r from-pink-50/80 to-red-50/80 text-crimson-pink shadow-sm'
              : 'text-charcoal-navy hover:text-crimson-pink hover:bg-gradient-to-r hover:from-gray-50/60 hover:to-pink-50/40'
          }`}
          onClick={closeMobileMenu}
        >
          {item.icon && (
            <item.icon className="h-5 w-5 text-crimson-pink group-hover:text-vivid-red group-hover:scale-110 transition-all duration-300" />
          )}
          <div className="flex-1">
            <div className="font-semibold">{item.label}</div>
            {item.description && (
              <div className="text-sm text-gray-500 mt-1 leading-relaxed">
                {item.description}
              </div>
            )}
          </div>
          {item.badge && (
            <span className="px-3 py-1.5 text-xs bg-gradient-to-r from-warm-amber/20 to-warm-amber/10 text-warm-amber border border-warm-amber/20 rounded-full font-semibold">
              {item.badge}
            </span>
          )}
        </Link>
      );
    }

    return (
      <div
        className="relative group"
        onMouseEnter={() => onItemHover?.(item.id)}
        onMouseLeave={() => onItemHover?.(null)}
      >
        <Link
          to={item.path || '#'}
          className="dropdown-item group flex items-center justify-between px-5 py-4 text-base text-charcoal-navy hover:text-crimson-pink hover:bg-gradient-to-r hover:from-gray-50/60 hover:to-pink-50/40 transition-all duration-300 cursor-pointer rounded-xl mx-2"
          onClick={closeMobileMenu}
        >
          <div className="flex items-center gap-3">
            {item.icon && (
              <item.icon className="h-5 w-5 text-crimson-pink group-hover:text-vivid-red group-hover:scale-110 transition-all duration-300" />
            )}
            <div className="flex-1 text-left">
              <div className="font-semibold">{item.label}</div>
              {item.description && (
                <div className="text-sm text-gray-500 mt-1 leading-relaxed">
                  {item.description}
                </div>
              )}
            </div>
            {item.badge && (
              <span className="px-3 py-1.5 text-xs bg-gradient-to-r from-warm-amber/20 to-warm-amber/10 text-warm-amber border border-warm-amber/20 rounded-full font-semibold mr-3">
                {item.badge}
              </span>
            )}
          </div>
          <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-crimson-pink group-hover:translate-x-1 transition-all duration-300" />
        </Link>

        {hoveredSubItem === item.id && (
          <div
            className="absolute left-full top-0 ml-3 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100/50 py-3 z-50"
            style={{
              boxShadow:
                '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 20px 25px -5px rgba(0, 0, 0, 0.06)',
            }}
            onMouseEnter={() => onItemHover?.(item.id)}
            onMouseLeave={() => onItemHover?.(null)}
          >
            {item.children?.map((child) => (
              <DropdownItem key={child.id} item={child} level={level + 1} />
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderMobileItem = (item: NavigationItem, level: number = 0) => {
    const isExpanded = mobileExpandedItems.includes(item.id);
    const hasChildren = item.children && item.children.length > 0;
    const isActive = isActiveRoute(item.path || '');

    return (
      <div
        key={item.id}
        className={`${level > 0 ? 'ml-6 border-l border-gray-200 pl-4' : ''}`}
      >
        <div className="flex items-center justify-between">
          {item.path ? (
            <Link
              to={item.path}
              className={`flex-1 flex items-center gap-3 px-5 py-4 rounded-xl transition-all duration-300 group text-left ${
                isActive
                  ? 'text-crimson-pink bg-gradient-to-r from-pink-50/80 to-red-50/80 font-semibold'
                  : 'text-charcoal-navy hover:text-crimson-pink hover:bg-gradient-to-r hover:from-gray-50/60 hover:to-pink-50/40'
              }`}
              onClick={closeMobileMenu}
            >
              {item.icon && (
                <item.icon className="h-5 w-5 transition-all duration-300 group-hover:scale-110" />
              )}
              <div className="text-left">
                <div className="font-semibold text-base">{item.label}</div>
                {item.description && (
                  <div className="text-sm text-gray-600 mt-1 leading-relaxed">
                    {item.description}
                  </div>
                )}
              </div>
              {item.badge && (
                <span className="ml-auto px-3 py-1.5 text-xs bg-gradient-to-r from-warm-amber/20 to-warm-amber/10 text-warm-amber border border-warm-amber/20 rounded-full font-semibold">
                  {item.badge}
                </span>
              )}
            </Link>
          ) : (
            <button
              onClick={() => handleMobileItemToggle(item.id)}
              className="flex-1 flex items-center gap-3 text-left px-5 py-4 text-charcoal-navy hover:text-crimson-pink hover:bg-gradient-to-r hover:from-gray-50/60 hover:to-pink-50/40 rounded-xl transition-all duration-300 group"
            >
              {item.icon && (
                <item.icon className="h-5 w-5 transition-all duration-300 group-hover:scale-110" />
              )}
              <div className="text-left">
                <div className="font-semibold text-base">{item.label}</div>
                {item.description && (
                  <div className="text-sm text-gray-600 mt-1 leading-relaxed">
                    {item.description}
                  </div>
                )}
              </div>
              {item.badge && (
                <span className="ml-auto px-3 py-1.5 text-xs bg-gradient-to-r from-warm-amber/20 to-warm-amber/10 text-warm-amber border border-warm-amber/20 rounded-full font-semibold mr-3">
                  {item.badge}
                </span>
              )}
            </button>
          )}
          {hasChildren && (
            <button
              onClick={() => handleMobileItemToggle(item.id)}
              className="p-3 text-charcoal-navy hover:text-crimson-pink hover:bg-gradient-to-r hover:from-gray-50/60 hover:to-pink-50/40 rounded-xl transition-all duration-300"
            >
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
              />
            </button>
          )}
        </div>
        {hasChildren && isExpanded && (
          <div className="mt-2 space-y-1">
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname]);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes dropdownSlideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { transform: scale(0.95); }
          to { transform: scale(1); }
        }
        
        .nav-dropdown {
          animation: dropdownSlideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1), fadeIn 0.3s ease;
          transform-origin: top center;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        .nav-link {
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, var(--crimson-pink), var(--vivid-red));
          border-radius: 1px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateX(-50%);
        }
        
        .nav-link.active::after {
          width: 80%;
        }
        
        .nav-link:hover::after {
          width: 70%;
        }
        
        .nav-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(237, 37, 104, 0.08), rgba(255, 200, 87, 0.08));
          opacity: 0;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease;
          border-radius: 2xl;
          z-index: -1;
        }
        
        .nav-link:hover::before {
          transform: scaleX(1);
          transform-origin: left;
          opacity: 1;
        }
        
        .dropdown-item {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .dropdown-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(237, 37, 104, 0.1), transparent);
          transition: left 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 0;
        }
        
        .dropdown-item:hover::before {
          left: 100%;
        }
        
        .dropdown-item:hover {
          transform: translateX(5px);
        }
        
        .mobile-nav-item {
          transition: all 0.3s ease;
        }
        
        .mobile-nav-item:active {
          transform: scale(0.98);
        }
      `}</style>

      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50'
            : 'bg-white shadow-sm border-b border-gray-200/30'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo - Left side */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center cursor-pointer group">
                <div className="w-16 h-14 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <img
                    src="/citrix-logo_optimized.webp"
                    alt="Citrix Logo"
                    className="w-11 h-11 object-cover drop-shadow-md transition-all duration-300 group-hover:drop-shadow-xl"
                  />
                </div>
                <div className="transition-all duration-300">
                  <div className="text-charcoal-navy font-bold text-2xl tracking-tight group-hover:text-crimson-pink transition-all duration-300 relative overflow-hidden">
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      Citrix
                    </span>
                    <span className="inline-block transition-transform duration-300 delay-75 group-hover:translate-x-1">
                      {' '}
                      Consulting
                    </span>
                  </div>
                  <div className="text-gray-500 text-base font-medium transition-all duration-300 group-hover:text-gray-700">
                    Services Limited
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center justify-center flex-1 max-w-3xl mx-12">
              <div className="flex items-center space-x-8">
                {navigationStructure.map((item) => (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => handleMainItemHover(item.id)}
                    onMouseLeave={() => handleMainItemHover(null)}
                  >
                    {item.children ? (
                      <div>
                        <button
                          className={`nav-link px-8 py-3 rounded-2xl transition-all duration-300 flex items-center font-medium text-base group ${
                            location.pathname.startsWith(`/${item.id}`)
                              ? 'active text-crimson-pink bg-gradient-to-r from-pink-50/50 to-red-50/50'
                              : 'text-charcoal-navy hover:text-crimson-pink hover:bg-gradient-to-r hover:from-gray-50/80 hover:to-pink-50/30'
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            {item.label}
                            <ChevronDown className="h-4 w-4 transition-all duration-300 group-hover:rotate-180" />
                          </span>
                        </button>

                        {hoveredItem === item.id && (
                          <div
                            className="absolute top-full left-0 mt-3 w-96 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100/50 py-4 z-50 nav-dropdown"
                            style={{
                              boxShadow:
                                '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 20px 25px -5px rgba(0, 0, 0, 0.06)',
                            }}
                            onMouseEnter={() => handleMainItemHover(item.id)}
                            onMouseLeave={() => handleMainItemHover(null)}
                          >
                            {item.children?.map((child, index) => (
                              <div
                                key={child.id}
                                style={{
                                  animationDelay: `${index * 0.05}s`,
                                  animation:
                                    'fadeIn 0.3s forwards, scaleIn 0.3s forwards',
                                }}
                              >
                                <DropdownItem
                                  item={child}
                                  onItemHover={handleDropdownHover}
                                  hoveredSubItem={activeDropdown}
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.path || '/'}
                        className={`nav-link px-8 py-3 rounded-2xl transition-all duration-300 font-medium flex items-center gap-2 text-base ${
                          isActiveRoute(item.path || '')
                            ? 'active text-crimson-pink bg-gradient-to-r from-pink-50/50 to-red-50/50'
                            : 'text-charcoal-navy hover:text-crimson-pink hover:bg-gradient-to-r hover:from-gray-50/80 hover:to-pink-50/30'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Login Button - Right side */}
            <div className="hidden lg:flex items-center">
              <a
                href="https://portal.sisqs.co.uk/admin/users/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-crimson-gradient hover:shadow-lg hover:shadow-crimson-pink/25 px-8 py-3.5 font-semibold rounded-2xl transition-all duration-300 text-white border-0 text-base hover:-translate-y-0.5 transform">
                  Login
                </button>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="text-charcoal-navy hover:text-crimson-pink transition-colors duration-300 p-3 rounded-xl hover:bg-gradient-to-r hover:from-gray-50/60 hover:to-pink-50/40"
                aria-label="Toggle mobile menu"
              >
                {isMobileOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50">
            <div className="px-6 pt-6 pb-8 space-y-3 max-h-[80vh] overflow-y-auto">
              {navigationStructure.map((item) => renderMobileItem(item))}
              <div className="pt-6 border-t border-gray-200/50">
                <a
                  href="https://portal.sisqs.co.uk/admin/users/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <button
                    className="w-full font-semibold py-4 rounded-2xl bg-crimson-gradient hover:shadow-lg hover:shadow-crimson-pink/25 text-white transition-all duration-300 text-base transform hover:-translate-y-0.5"
                    onClick={closeMobileMenu}
                  >
                    Login
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
