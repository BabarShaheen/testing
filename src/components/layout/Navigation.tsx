import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/button';
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

  // Add timeout refs to prevent premature closing
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
          id: 'testimonials',
          label: 'Testimonials',
          path: '/about/testimonials',
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

  // Enhanced hover handlers with delays
  const handleMainItemHover = (itemId: string | null) => {
    // Clear any existing timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }

    if (itemId) {
      setHoveredItem(itemId);
    } else {
      // Add a small delay before closing to prevent accidental closes
      hoverTimeoutRef.current = setTimeout(() => {
        setHoveredItem(null);
        setActiveDropdown(null);
      }, 150);
    }
  };

  const handleDropdownHover = (itemId: string | null) => {
    // Clear any existing timeout
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }

    if (itemId) {
      setActiveDropdown(itemId);
    } else {
      // Add delay for submenu closing
      dropdownTimeoutRef.current = setTimeout(() => {
        setActiveDropdown(null);
      }, 100);
    }
  };

  // Desktop dropdown item component
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
          className={`flex items-center gap-3 px-4 py-3 text-sm transition-all duration-300 cursor-pointer rounded-lg mx-1 group text-left ${
            isActiveRoute(item.path || '')
              ? 'bg-gradient-to-r from-teal-100 to-orange-100 text-teal-700'
              : 'text-gray-700 hover:bg-gradient-to-r hover:from-teal-50 hover:to-orange-50 hover:text-teal-700'
          }`}
          onClick={closeMobileMenu}
        >
          {item.icon && (
            <item.icon className="h-4 w-4 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
          )}
          <div className="flex-1">
            <div className="font-medium group-hover:text-teal-700 transition-colors duration-300">
              {item.label}
            </div>
            {item.description && (
              <div className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                {item.description}
              </div>
            )}
          </div>
          {item.badge && (
            <span className="px-2 py-1 text-xs bg-orange-100 text-orange-600 rounded-full font-medium shadow-sm">
              {item.badge}
            </span>
          )}
        </Link>
      );
    }

    // ✅ Parent with children: clickable + dropdown
    return (
      <div
        className="relative group"
        onMouseEnter={() => onItemHover?.(item.id)}
        onMouseLeave={() => onItemHover?.(null)}
      >
        <Link
          to={item.path || '#'}
          className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-teal-50 hover:to-orange-50 hover:text-teal-700 transition-all duration-300 cursor-pointer rounded-lg mx-1 group"
          onClick={closeMobileMenu}
        >
          <div className="flex items-center gap-3">
            {item.icon && (
              <item.icon className="h-4 w-4 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
            )}
            <div className="flex-1 text-left">
              <div className="font-medium group-hover:text-teal-700 transition-colors duration-300">
                {item.label}
              </div>
              {item.description && (
                <div className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                  {item.description}
                </div>
              )}
            </div>
            {item.badge && (
              <span className="px-2 py-1 text-xs bg-orange-100 text-orange-600 rounded-full font-medium mr-2 shadow-sm">
                {item.badge}
              </span>
            )}
          </div>
          <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-orange-500 transition-all duration-300 group-hover:translate-x-1" />
        </Link>

        {/* Submenu */}
        {hoveredSubItem === item.id && (
          <div
            className="absolute left-full top-0 ml-1 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50"
            style={{
              boxShadow:
                '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              animation: 'slideInRight 0.2s ease-out',
            }}
            onMouseEnter={() => onItemHover?.(item.id)}
            onMouseLeave={() => onItemHover?.(null)}
          >
            <div className="p-2">
              {item.children?.map((child) => (
                <DropdownItem key={child.id} item={child} level={level + 1} />
              ))}
            </div>
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
        className={`${level > 0 ? 'ml-4 border-l-2 border-teal-100 pl-4' : ''}`}
      >
        <div className="flex items-center justify-between">
          {item.path ? (
            <Link
              to={item.path}
              className={`flex-1 flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group text-left ${
                isActive
                  ? 'text-orange-600 bg-gradient-to-r from-orange-50 to-teal-50 font-medium'
                  : 'text-teal-700 hover:text-orange-500 hover:bg-gradient-to-r hover:from-orange-50 hover:to-teal-50'
              }`}
              onClick={closeMobileMenu}
            >
              {item.icon && (
                <item.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              )}
              <div className="text-left">
                <div className="font-medium">{item.label}</div>
                {item.description && (
                  <div className="text-sm text-gray-600">
                    {item.description}
                  </div>
                )}
              </div>
              {item.badge && (
                <span className="ml-auto px-2 py-1 text-xs bg-orange-100 text-orange-600 rounded-full font-medium">
                  {item.badge}
                </span>
              )}
            </Link>
          ) : (
            <button
              onClick={() => handleMobileItemToggle(item.id)}
              className="flex-1 flex items-center gap-3 text-left px-4 py-3 text-teal-700 hover:text-orange-500 hover:bg-gradient-to-r hover:from-orange-50 hover:to-teal-50 rounded-lg transition-all duration-300 group"
            >
              {item.icon && (
                <item.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              )}
              <div className="text-left">
                <div className="font-medium">{item.label}</div>
                {item.description && (
                  <div className="text-sm text-gray-600">
                    {item.description}
                  </div>
                )}
              </div>
              {item.badge && (
                <span className="ml-auto px-2 py-1 text-xs bg-orange-100 text-orange-600 rounded-full font-medium mr-2">
                  {item.badge}
                </span>
              )}
            </button>
          )}
          {hasChildren && (
            <button
              onClick={() => handleMobileItemToggle(item.id)}
              className="p-2 text-teal-700 hover:text-orange-500 transition-colors duration-300"
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
          <div
            className="mt-2 space-y-1"
            style={{ animation: 'slideDown 0.3s ease-out' }}
          >
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

  // Close mobile menu when route changes
  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname]);

  // Cleanup timeouts on unmount
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
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideDown {
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
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Custom scrollbar for mobile menu */
        .nav-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        
        .nav-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        
        .nav-scrollbar::-webkit-scrollbar-thumb {
          background: #94a3b8;
          border-radius: 2px;
        }
        
        .nav-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #64748b;
        }
      `}</style>

      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50'
            : 'bg-white shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                to="/"
                className="flex items-center cursor-pointer transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-3 shadow-lg overflow-hidden">
                  <img
                    src="/citrix_logo.png" // <-- Change this to your actual logo path
                    alt="Citrix Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-teal-700 font-bold text-lg transition-colors duration-300 hover:text-teal-600">
                    Citrix Consulting
                  </div>
                  <div className="text-gray-600 text-sm transition-colors duration-300 hover:text-gray-700">
                    Services Limited
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-4">
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
                          className={`px-3 py-2 rounded-md transition-all duration-300 flex items-center font-medium relative overflow-hidden group ${
                            location.pathname.startsWith(`/${item.id}`)
                              ? 'text-orange-600'
                              : 'text-teal-700 hover:text-orange-500'
                          }`}
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            {item.icon && <item.icon className="h-4 w-4" />}
                            {item.label}
                          </span>
                          <ChevronDown className="ml-1 h-4 w-4 transition-all duration-300 group-hover:rotate-180" />
                          <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-teal-50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-md"></div>
                        </button>

                        {hoveredItem === item.id && (
                          <div
                            className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50"
                            style={{
                              boxShadow:
                                '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                              animation: 'fadeIn 0.2s ease-out',
                            }}
                            onMouseEnter={() => handleMainItemHover(item.id)}
                            onMouseLeave={() => handleMainItemHover(null)}
                          >
                            <div className="p-2">
                              {item.children?.map((child) => (
                                <DropdownItem
                                  key={child.id}
                                  item={child}
                                  onItemHover={handleDropdownHover}
                                  hoveredSubItem={activeDropdown}
                                />
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.path || '/'}
                        className={`px-3 py-2 rounded-md transition-all duration-300 font-medium relative overflow-hidden group flex items-center gap-2 ${
                          isActiveRoute(item.path || '')
                            ? 'text-orange-600 bg-gradient-to-r from-orange-50 to-teal-50'
                            : 'text-teal-700 hover:text-orange-500'
                        }`}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          {item.icon && <item.icon className="h-4 w-4" />}
                          {item.label}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-teal-50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-md"></div>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-orange to-orange/90 hover:from-orange/90 hover:to-orange text-white px-6 py-2 font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                  Get a Quote
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="text-teal-700 hover:text-orange-500 transition-colors duration-300 p-2"
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
          <div
            className="lg:hidden"
            style={{ animation: 'slideDown 0.3s ease-out' }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 max-h-[80vh] overflow-y-auto nav-scrollbar">
              {navigationStructure.map((item) => renderMobileItem(item))}
              <div className="pt-4 border-t border-gray-200 px-2">
                <Link to="/contact">
                  <button
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 py-3 rounded-lg"
                    onClick={closeMobileMenu}
                  >
                    Get a Quote
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
