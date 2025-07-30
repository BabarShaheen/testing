import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '../ui/dropdown-menu';
import { Menu, X, ChevronDown, ChevronRight, Shield, Users, FileText, Building, Phone, Award, Settings } from 'lucide-react';

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
      icon: Settings,
      description: 'Comprehensive consulting solutions',
      children: [
        {
          id: 'safety-adviser',
          label: 'Safety Advisor',
          path: '/services/safety-adviser',
          icon: Shield,
          description: 'Health & safety compliance',
          children: [
            {
              id: 'health-safety',
              label: 'Health and Safety',
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
           icon: Award,
           description: 'Security industry compliance',
           children: [
             {
               id: 'sia-acs',
               label: 'SIA ACS Approved Contractor Scheme',
               path: '/services/sia-acs',
             },
                           {
                id: 'acs-audits',
                label: 'ACS Audit',
                path: '/services/acs-compliance',
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
          icon: Award,
          description: 'International standards compliance',
          badge: 'Most Popular',
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
                  id: 'iso-14001-page',
                  label: 'ISO 14001 EMS',
                  path: '/iso-14001',
                },
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
          icon: Users,
          description: 'Background screening services',
        },
        {
          id: 'pat-testing',
          label: 'PAT Testing',
          path: '/services/pat-testing',
          icon: Shield,
          description: 'Electrical safety testing',
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
          icon: FileText,
          description: 'Comprehensive risk analysis',
        },
        {
          id: 'bafe-certification',
          label: 'BAFE Certification',
          path: '/services/bafe-certification',
          icon: Award,
          description: 'Fire safety certification',
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
          path: '/testimonials',
          icon: Users,
          description: 'Client success stories',
        },
        {
          id: 'policies',
          label: 'Policies',
          path: '/policies',
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
           path: '/careers',
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

  // Recursive component for nested dropdowns
  const NestedDropdownItem: React.FC<{ item: NavigationItem; level?: number }> = ({ item, level = 0 }) => {
    const hasChildren = item.children && item.children.length > 0;

    if (!hasChildren) {
      return (
        <DropdownMenuItem asChild>
          <Link
            to={item.path || '#'}
            className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-teal-light/10 hover:text-teal-dark transition-all duration-200 cursor-pointer"
          >
            {item.icon && <item.icon className="h-4 w-4 text-orange" />}
            <div className="flex-1">
              <div className="font-medium">{item.label}</div>
              {item.description && (
                <div className="text-xs text-gray-500">{item.description}</div>
              )}
            </div>
            {item.badge && (
              <span className="px-2 py-1 text-xs bg-orange/10 text-orange rounded-full">
                {item.badge}
              </span>
            )}
          </Link>
        </DropdownMenuItem>
      );
    }

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <DropdownMenuItem className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-teal-light/10 hover:text-teal-dark transition-all duration-200 cursor-pointer focus:bg-teal-light/10 focus:text-teal-dark">
            <div className="flex items-center gap-3">
              {item.icon && <item.icon className="h-4 w-4 text-orange" />}
              <div className="flex-1">
                <div className="font-medium">{item.label}</div>
                {item.description && (
                  <div className="text-xs text-gray-500">{item.description}</div>
                )}
              </div>
            </div>
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </DropdownMenuItem>
        </DropdownMenuTrigger>
                 <DropdownMenuContent
           side="right"
           align="start"
           className="w-64 bg-white rounded-md shadow-xl border border-gray-200"
           sideOffset={level === 0 ? 0 : -4}
         >
           {item.children?.map((child) => (
             <NestedDropdownItem key={child.id} item={child} level={level + 1} />
           ))}
         </DropdownMenuContent>
      </DropdownMenu>
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
              className="flex-1 flex items-center gap-3 px-4 py-3 text-teal-dark hover:text-orange hover:bg-orange/5 rounded-lg transition-all duration-200"
              onClick={() => setIsMobileOpen(false)}
            >
              {item.icon && <item.icon className="h-4 w-4" />}
              <div>
                <div className="font-medium">{item.label}</div>
                {item.description && (
                  <div className="text-sm text-gray-600">{item.description}</div>
                )}
              </div>
            </Link>
          ) : (
            <button
              onClick={() => handleMobileItemToggle(item.id)}
              className="flex-1 flex items-center gap-3 text-left px-4 py-3 text-teal-dark hover:text-orange hover:bg-orange/5 rounded-lg transition-all duration-200"
            >
              {item.icon && <item.icon className="h-4 w-4" />}
              <div>
                <div className="font-medium">{item.label}</div>
                {item.description && (
                  <div className="text-sm text-gray-600">{item.description}</div>
                )}
              </div>
            </button>
          )}
          {hasChildren && (
            <button
              onClick={() => handleMobileItemToggle(item.id)}
              className="p-2 text-teal-dark hover:text-orange transition-colors duration-200"
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

  return (
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
              <div className="w-10 h-10 bg-gradient-to-br from-teal-dark to-teal-light rounded-lg flex items-center justify-center mr-3 shadow-lg">
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

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationStructure.map((item) => (
                <div key={item.id} className="relative">
                  {item.children ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="nav-link text-teal-dark hover:text-orange px-3 py-2 rounded-md transition-all duration-300 flex items-center font-medium relative overflow-hidden group">
                          <span className="relative z-10 flex items-center gap-2">
                            {item.icon && <item.icon className="h-4 w-4" />}
                            {item.label}
                          </span>
                          <ChevronDown className="ml-1 h-4 w-4 transition-all duration-300" />
                          <div className="absolute inset-0 bg-orange/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </button>
                      </DropdownMenuTrigger>
                                             <DropdownMenuContent
                         align="start"
                         className="w-80 bg-white rounded-md shadow-xl border border-gray-200"
                         sideOffset={8}
                       >
                         <div className="p-2">
                           {item.children?.map((child) => (
                             <NestedDropdownItem key={child.id} item={child} />
                           ))}
                         </div>
                       </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                      to={item.path || '/'}
                      className="nav-link text-teal-dark hover:text-orange px-3 py-2 rounded-md transition-all duration-300 font-medium relative overflow-hidden group flex items-center gap-2"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {item.icon && <item.icon className="h-4 w-4" />}
                        {item.label}
                      </span>
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
              <Button className="bg-gradient-to-r from-orange to-orange/90 hover:from-orange/90 hover:to-orange text-white px-6 py-2 font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="text-teal-dark hover:text-orange transition-colors duration-300 p-2"
            >
              {isMobileOpen ? (
                <X className="h-6 w-6 animate-fade-in" />
              ) : (
                <Menu className="h-6 w-6 animate-fade-in" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileOpen && (
        <div className="lg:hidden animate-slide-in-down">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 max-h-[80vh] overflow-y-auto">
            {navigationStructure.map((item) => renderMobileItem(item))}
            <div className="pt-4 border-t border-gray-200">
              <Link to="/contact">
                <Button
                  className="w-full bg-gradient-to-r from-orange to-orange/90 hover:from-orange/90 hover:to-orange text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => setIsMobileOpen(false)}
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
