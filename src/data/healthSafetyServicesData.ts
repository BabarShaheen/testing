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
  {
    id: 'workplace-audits',
    title: 'Workplace Audits',
    badge: '2-3 Days',
    color: 'bg-gradient-to-br from-green-50 to-emerald-50',
    iconName: 'ClipboardCheck',
    description:
      'Thorough workplace audits providing the best starting point for managing health and safety within your organization.',
    features: [
      'Complete compliance evaluation',
      'Detailed practical advice',
      'Legal compliance assessment',
      'Insurance documentation',
      'Accreditation body evidence',
      'Annual or biennial options',
      'Improvement tracking',
      'Standards enhancement',
    ],
    pricing: '2-3 day comprehensive assessment',
    details:
      'Best starting point for health and safety management. Provides evidence for insurance companies and accreditation bodies of monitoring and review.',
  },
];
