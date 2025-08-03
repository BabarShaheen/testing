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
      setActiveDropdown(null); // Reset submenu state
    } else {
      // Add a small delay before closing
      hoverTimeoutRef.current = setTimeout(() => {
        setHoveredItem(null);
        setActiveDropdown(null);
      }, 200);
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
      }, 150);
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
          className={`group flex items-center gap-3 px-4 py-3.5 text-sm transition-all duration-300 cursor-pointer rounded-xl mx-1 text-left relative overflow-hidden ${
            isActiveRoute(item.path || '')
              ? 'bg-gradient-to-r from-pink-50/80 to-amber-50/80 text-pink-700 shadow-sm'
              : 'text-slate-700 hover:text-pink-700'
          }`}
          onClick={closeMobileMenu}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-50/60 to-amber-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
          {item.icon && (
            <item.icon className="relative z-10 h-4 w-4 text-pink-600 group-hover:text-amber-500 group-hover:scale-110 transition-all duration-300" />
          )}
          <div className="relative z-10 flex-1">
            <div className="font-medium text-slate-800 group-hover:text-pink-700 transition-colors duration-300">
              {item.label}
            </div>
            {item.description && (
              <div className="text-xs text-slate-500 group-hover:text-slate-600 transition-colors duration-300 leading-relaxed">
                {item.description}
              </div>
            )}
          </div>
          {item.badge && (
            <span className="relative z-10 px-2.5 py-1 text-xs bg-gradient-to-r from-amber-100 to-amber-50 text-amber-700 rounded-full font-medium shadow-sm border border-amber-200/50">
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
          className="group flex items-center justify-between px-4 py-3.5 text-sm text-slate-700 hover:text-pink-700 transition-all duration-300 cursor-pointer rounded-xl mx-1 relative overflow-hidden"
          onClick={closeMobileMenu}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-50/60 to-amber-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
          <div className="relative z-10 flex items-center gap-3">
            {item.icon && (
              <item.icon className="h-4 w-4 text-pink-600 group-hover:text-amber-500 group-hover:scale-110 transition-all duration-300" />
            )}
            <div className="flex-1 text-left">
              <div className="font-medium text-slate-800 group-hover:text-pink-700 transition-colors duration-300">
                {item.label}
              </div>
              {item.description && (
                <div className="text-xs text-slate-500 group-hover:text-slate-600 transition-colors duration-300 leading-relaxed">
                  {item.description}
                </div>
              )}
            </div>
            {item.badge && (
              <span className="px-2.5 py-1 text-xs bg-gradient-to-r from-amber-100 to-amber-50 text-amber-700 rounded-full font-medium mr-2 shadow-sm border border-amber-200/50">
                {item.badge}
              </span>
            )}
          </div>
          <ChevronRight className="relative z-10 h-4 w-4 text-slate-400 group-hover:text-amber-500 transition-all duration-300 group-hover:translate-x-1" />
        </Link>

        {hoveredSubItem === item.id && (
          <div
            className="absolute left-full top-0 ml-2 w-72 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 py-3 z-50"
            style={{
              boxShadow:
                '0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 20px 25px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(255, 255, 255, 0.2)',
              animation: 'slideInRight 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
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
        className={`${level > 0 ? 'ml-6 border-l border-pink-100 pl-4' : ''}`}
      >
        <div className="flex items-center justify-between">
          {item.path ? (
            <Link
              to={item.path}
              className={`flex-1 flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 group text-left relative overflow-hidden ${
                isActive
                  ? 'text-red-600 bg-gradient-to-r from-red-50/80 to-pink-50/80 font-medium shadow-sm'
                  : 'text-pink-700 hover:text-red-500'
              }`}
              onClick={closeMobileMenu}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r from-red-50/60 to-pink-50/60 rounded-xl transition-opacity duration-300 ${
                  isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
              ></div>
              {item.icon && (
                <item.icon className="relative z-10 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              )}
              <div className="relative z-10 text-left">
                <div className="font-medium">{item.label}</div>
                {item.description && (
                  <div className="text-sm text-slate-600 leading-relaxed mt-0.5">
                    {item.description}
                  </div>
                )}
              </div>
              {item.badge && (
                <span className="relative z-10 ml-auto px-2.5 py-1 text-xs bg-gradient-to-r from-amber-100 to-amber-50 text-amber-700 rounded-full font-medium shadow-sm border border-amber-200/50">
                  {item.badge}
                </span>
              )}
            </Link>
          ) : (
            <button
              onClick={() => handleMobileItemToggle(item.id)}
              className="flex-1 flex items-center gap-3 text-left px-4 py-3.5 text-pink-700 hover:text-red-500 hover:bg-gradient-to-r hover:from-red-50/60 hover:to-pink-50/60 rounded-xl transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-50/60 to-pink-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              {item.icon && (
                <item.icon className="relative z-10 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              )}
              <div className="relative z-10 text-left">
                <div className="font-medium">{item.label}</div>
                {item.description && (
                  <div className="text-sm text-slate-600 leading-relaxed mt-0.5">
                    {item.description}
                  </div>
                )}
              </div>
              {item.badge && (
                <span className="relative z-10 ml-auto px-2.5 py-1 text-xs bg-gradient-to-r from-amber-100 to-amber-50 text-amber-700 rounded-full font-medium mr-2 shadow-sm border border-amber-200/50">
                  {item.badge}
                </span>
              )}
            </button>
          )}
          {hasChildren && (
            <button
              onClick={() => handleMobileItemToggle(item.id)}
              className="p-3 text-pink-700 hover:text-red-500 hover:bg-gradient-to-r hover:from-red-50/60 hover:to-pink-50/60 rounded-lg transition-all duration-300"
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
            style={{ animation: 'slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
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
        :root {
          --crimson-pink: #ED2568;
          --vivid-red: #EE343B;
          --charcoal-navy: #1C1F2A;
          --off-white: #F9F9F9;
          --pure-white: #FFFFFF;
          --soft-lavender-grey: #E5E6F0;
          --warm-amber: #FFC857;
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-15px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-15px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .nav-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .nav-scrollbar::-webkit-scrollbar-track {
          background: linear-gradient(to bottom, var(--off-white), var(--soft-lavender-grey));
          border-radius: 10px;
        }
        
        .nav-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #cbd5e1, #94a3b8);
          border-radius: 10px;
          border: 1px solid var(--soft-lavender-grey);
        }
        
        .nav-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #94a3b8, #64748b);
        }

        .glass-nav {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>

      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? 'glass-nav shadow-xl shadow-slate-200/50'
            : 'bg-white shadow-md shadow-slate-200/30'
        }`}
      >
        <div className=" mx-auto px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center cursor-pointer">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 overflow-hidden">
                  <img
                    src="/citrix_logo.png"
                    alt="Citrix Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-slate-800 font-bold text-xl tracking-tight">
                    Citrix Consulting
                  </div>
                  <div className="text-slate-500 text-sm font-medium">
                    Services Limited
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation - Right Aligned */}
            <div className="hidden lg:flex items-center space-x-2">
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
                        className={`px-6 py-4 rounded-xl transition-all duration-300 flex items-center font-semibold relative overflow-hidden group text-sm ${
                          location.pathname.startsWith(`/${item.id}`)
                            ? 'text-red-600 bg-gradient-to-r from-red-50/60 to-pink-50/60 shadow-sm'
                            : 'text-slate-700 hover:text-pink-700'
                        }`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-50/60 to-amber-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                        <span className="relative z-10 flex items-center gap-2">
                          {item.icon && (
                            <item.icon className="h-4 w-4 group-hover:text-amber-500 transition-colors duration-300" />
                          )}
                          {item.label}
                        </span>
                        <ChevronDown className="relative z-10 ml-2 h-4 w-4 transition-all duration-300 group-hover:rotate-180 group-hover:text-amber-500" />
                      </button>

                      {hoveredItem === item.id && (
                        <div
                          className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 py-3 z-50"
                          style={{
                            boxShadow:
                              '0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 20px 25px -5px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(255, 255, 255, 0.2)',
                            animation:
                              'fadeIn 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
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
                      className={`px-6 py-4 rounded-xl transition-all duration-300 font-semibold relative overflow-hidden group flex items-center gap-2 text-sm ${
                        isActiveRoute(item.path || '')
                          ? 'text-red-600 bg-gradient-to-r from-red-50/60 to-pink-50/60 shadow-sm'
                          : 'text-slate-700 hover:text-pink-700'
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-50/60 to-amber-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      <span className="relative z-10 flex items-center gap-2">
                        {item.icon && (
                          <item.icon className="h-4 w-4 group-hover:text-amber-500 transition-colors duration-300" />
                        )}
                        {item.label}
                      </span>
                    </Link>
                  )}
                </div>
              ))}

              <a
                href="https://portal.sisqs.co.uk/admin/users/login"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-6"
              >
                <Button
                  className="px-8 py-3 font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 text-white"
                  style={{
                    background:
                      'linear-gradient(135deg, var(--crimson-pink) 0%, var(--vivid-red) 100%)',
                    boxShadow:
                      '0 10px 25px -5px rgba(237, 37, 104, 0.25), 0 8px 10px -6px rgba(238, 52, 59, 0.1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      'linear-gradient(135deg, var(--vivid-red) 0%, var(--crimson-pink) 100%)';
                    e.currentTarget.style.boxShadow =
                      '0 20px 40px -10px rgba(237, 37, 104, 0.4), 0 15px 20px -8px rgba(238, 52, 59, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      'linear-gradient(135deg, var(--crimson-pink) 0%, var(--vivid-red) 100%)';
                    e.currentTarget.style.boxShadow =
                      '0 10px 25px -5px rgba(237, 37, 104, 0.25), 0 8px 10px -6px rgba(238, 52, 59, 0.1)';
                  }}
                >
                  Login
                </Button>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="text-slate-700 hover:text-pink-700 transition-colors duration-300 p-2 rounded-xl hover:bg-gradient-to-r hover:from-pink-50/60 hover:to-amber-50/60"
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
            className="lg:hidden bg-white/95 backdrop-blur-sm border-t border-slate-200/50"
            style={{ animation: 'slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
          >
            <div className="px-6 pt-4 pb-6 space-y-2 max-h-[80vh] overflow-y-auto nav-scrollbar">
              {navigationStructure.map((item) => renderMobileItem(item))}
              <div className="pt-6 border-t border-slate-200/50">
                <a
                  href="https://portal.sisqs.co.uk/admin/users/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="w-full font-semibold shadow-lg transition-all duration-300 py-4 rounded-xl text-white"
                    style={{
                      background:
                        'linear-gradient(135deg, var(--crimson-pink) 0%, var(--vivid-red) 100%)',
                      boxShadow:
                        '0 10px 25px -5px rgba(237, 37, 104, 0.25), 0 8px 10px -6px rgba(238, 52, 59, 0.1)',
                    }}
                    onClick={closeMobileMenu}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        'linear-gradient(135deg, var(--vivid-red) 0%, var(--crimson-pink) 100%)';
                      e.currentTarget.style.boxShadow =
                        '0 20px 40px -10px rgba(237, 37, 104, 0.4), 0 15px 20px -8px rgba(238, 52, 59, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        'linear-gradient(135deg, var(--crimson-pink) 0%, var(--vivid-red) 100%)';
                      e.currentTarget.style.boxShadow =
                        '0 10px 25px -5px rgba(237, 37, 104, 0.25), 0 8px 10px -6px rgba(238, 52, 59, 0.1)';
                    }}
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
