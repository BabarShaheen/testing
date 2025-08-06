export interface HealthSafetyService {
  id: string;
  title: string;
  badge: string;
  color: string;
  iconName: string;
  description: string;
  features: string[];
  pricing: string;
  details: string;
}

export const healthSafetyServices: HealthSafetyService[] = [
  {
    id: 'site-inspections',
    title: 'Site Inspections',
    badge: 'From £125',
    color: 'bg-gradient-to-br from-teal-50 to-blue-50',
    iconName: 'Eye',
    description:
      'Independent safety inspections of your sites with comprehensive reporting and on-site guidance for management teams and operatives.',
    features: [
      'Working environment assessment',
      'Welfare facilities inspection',
      'Plant and equipment evaluation',
      'Documentation review',
      'Bespoke reporting options',
      'Scoring systems available',
      'Toolbox talks included',
      'Site meeting assistance',
    ],
    pricing: 'Starting from £125 plus VAT',
    details:
      'Proactive monitoring proven to reduce accidents on site. Essential part of safety management with tailored reports to your specific requirements.',
  },
  {
    id: 'fire-risk-assessment',
    title: 'Fire Risk Assessment',
    badge: 'Legal Requirement',
    color: 'bg-gradient-to-br from-red-50 to-orange-50',
    iconName: 'AlertTriangle',
    description:
      'Comprehensive fire risk assessments to reduce risk and ensure appropriate prevention and protection arrangements are in place.',
    features: [
      'Legal compliance with RRO 2005',
      'Comprehensive site evaluation',
      'Staff consultation included',
      'Prevention strategy development',
      'Protection arrangements review',
      'Business continuity focus',
      'Experienced qualified professionals',
      'Actionable recommendations',
    ],
    pricing: 'Contact for quote',
    details:
      'Legal requirement under the Regulatory Reform (Fire Safety) Order 2005. Reduces devastating effects of accidental fires on lives, property, and business continuity.',
  },
  {
    id: 'accident-investigations',
    title: 'Accident Investigations',
    badge: 'Independent',
    color: 'bg-gradient-to-br from-yellow-50 to-amber-50',
    iconName: 'FileSearch',
    description:
      'Independent accident and near miss investigations to prevent recurrences and establish causes and contributory factors.',
    features: [
      'Scene preservation guidance',
      'Witness interviews',
      'Injured party consultations',
      'Independent reporting',
      'Recommendations provided',
      'HSE reporting assistance',
      'Multi-party investigations',
      'Immediate response available',
    ],
    pricing: 'Emergency response available',
    details:
      'Essential for preventing similar events. Independent view crucial when multiple parties involved. HSE reporting guidance included.',
  },
];

export const benefitsData = [
  {
    icon: 'Award',
    name: 'Qualified Professionals',
    description:
      'Experienced, certified safety professionals with proven track records.',
  },
  {
    icon: 'Shield',
    name: 'Legal Compliance',
    description:
      'Ensures your business stays compliant with all current H&S regulations.',
  },
  {
    icon: 'Target',
    name: 'Tailored Solutions',
    description:
      'Bespoke consulting, documentation, and systems designed for you.',
  },
  {
    icon: 'Users',
    name: 'Expert Support',
    description: 'Ongoing expert help — 24/7 emergency support included.',
  },
];

export const accreditationCards = [
  {
    title: 'CHAS Accreditation',
    description: 'Full application and registration help',
    price: '£99.99',
    icon: 'Award' as const,
    color: 'from-[#E5E6F0] to-white',
    pricingDetails: [
      { label: 'Under 5 Employees', price: '£99.99' },
      { label: '5+ Employees', price: '£250' },
    ],
  },
  {
    title: 'SafeContractor',
    description: 'SSIP Application & Registration Support',
    price: '£299.99',
    icon: 'Shield' as const,
    color: 'from-[#F9F9F9] to-white',
  },
  {
    title: 'SMAS WorkSafe',
    description: 'Application assistance with qualified consultant',
    price: '£299.99',
    icon: 'CheckCircle' as const,
    color: 'from-[#FFC857] to-white',
  },
  {
    title: 'ConstructionLine',
    description: 'Full registration help & email/phone support',
    price: '£349.99',
    icon: 'ClipboardCheck' as const,
    color: 'from-[#ED2568] to-[#F9F9F9]',
  },
  {
    title: 'Altius Accreditation',
    description: 'SSIP help with ongoing support',
    price: '£ POA',
    icon: 'Target' as const,
    color: 'from-[#EE343B] to-[#F9F9F9]',
  },
];
