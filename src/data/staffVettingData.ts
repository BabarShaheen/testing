import {
  ShieldCheck,
  Briefcase,
  AlertTriangle,
  FileText,
  Users,
  Shield,
  Clock,
  Award,
  Building,
  UserCheck,
  Star,
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export type VettingFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
};

export type RequirementItem = {
  item: string;
  icon: LucideIcon;
};

export type Achievement = {
  title: string;
  desc: string;
  icon: LucideIcon;
};

export type ScreeningProcessStep = {
  title: string;
  desc: string;
  step: string;
};

export type ProcessingTime = {
  service: string;
  time: string;
  color: string;
};

export type Advantage = {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
};

export type ScreenedPerson = {
  title: string;
  desc: string;
  color: string;
};

export type TierItem = {
  range: string;
  price: string;
};

export const vettingFeatures: VettingFeature[] = [
  {
    title: 'Education & Identity Verification',
    description:
      'Complete education background checks and thorough confirmation of personal details including name, address, date of birth, and right to work status. Includes SIA licence verification and comprehensive 5-10 year career history validation.',
    icon: ShieldCheck,
    highlights: [
      'Education verification',
      'Identity confirmation',
      'SIA licence check',
      'Career history',
    ],
  },
  {
    title: 'Financial & Gap Analysis',
    description:
      'Detailed career gap verification for periods over 31 days, written character references, and comprehensive public record checks covering CCJs, insolvency, bankruptcy, IVAs, directorships and address links.',
    icon: Briefcase,
    highlights: [
      'Gap verification',
      'Character references',
      'Financial records',
      'Public record check',
    ],
  },
  {
    title: 'Criminal Record Screening',
    description:
      'For non-licensed personnel: Basic criminal record disclosure or ACPO checks, financial sanction list verification, and complete certificate of screening with full audit file upon completion.',
    icon: AlertTriangle,
    highlights: [
      'Criminal record check',
      'ACPO verification',
      'Sanctions screening',
      'Audit certification',
    ],
  },
];

export const screeningRequirements: RequirementItem[] = [
  { item: 'Government-issued photo ID and proof of address', icon: FileText },
  { item: 'Professional and personal character references', icon: Users },
  {
    item: 'Police record clearance and financial status verification',
    icon: Shield,
  },
  {
    item: 'Complete work history documentation (5 years minimum)',
    icon: Clock,
  },
  { item: 'Educational certificates and qualifications', icon: Award },
  { item: 'Visa and work permits (for foreign nationals)', icon: Building },
];

export const screeningAchievements: Achievement[] = [
  {
    title: 'Identity Verification',
    desc: 'Confirms true identity and current address details',
    icon: UserCheck,
  },
  {
    title: 'Reference Validation',
    desc: 'Verifies solid references and financial stability',
    icon: Star,
  },
  {
    title: 'Clean Record Confirmation',
    desc: 'Ensures no criminal background or red flags',
    icon: Shield,
  },
  {
    title: 'Career History Check',
    desc: 'Validates complete 5-year employment history',
    icon: Clock,
  },
];

export const vettingpackage: string[] = [
  'Education & employment history verification (5-10 years)',
  'Right to work & identity confirmation',
  'Criminal record disclosure & ACPO checks',
  'Character reference validation',
  'Financial stability & sanctions screening',
  'SIA licence verification (where applicable)',
  'Complete audit file & screening certificate',
];

export const screened: ScreenedPerson[] = [
  {
    title: 'Leadership & Ownership',
    desc: 'Directors, owners, shareholders with >10% stake',
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Operations Team',
    desc: 'Managers, security installers, service technicians',
    color: 'from-teal-500 to-teal-600',
  },
  {
    title: 'Administrative Staff',
    desc: 'Office supervisors and staff accessing sensitive records',
    color: 'from-green-500 to-green-600',
  },
];

export const exempt: string[] = [
  'Cable layers and installation electricians',
  'General contractors and joiners',
  'Delivery and logistics personnel',
  'Accounts/wages staff (without system access)',
  'External maintenance contractors',
  'Temporary construction workers',
];

export const screeningprocess: ScreeningProcessStep[] = [
  {
    title: 'Pre-Employment Screening',
    desc: 'All screening completed before employment begins to ensure full regulatory compliance',
    step: '1',
  },
  {
    title: 'Temporary Authorization',
    desc: 'Basic checks enable temporary employment while comprehensive screening is completed',
    step: '2',
  },
  {
    title: 'Document Verification',
    desc: 'Advanced UV and technical verification prevents fraudulent documentation acceptance',
    step: '3',
  },
  {
    title: 'Secure Data Handling',
    desc: 'All screening data maintained confidentially in full compliance with data protection regulations',
    step: '4',
  },
];

export const processingtime: ProcessingTime[] = [
  {
    service: 'Basic Identity Checks',
    time: '1-2 days',
    color: 'from-green-400 to-green-500',
  },
  {
    service: 'Criminal Record Screening',
    time: '3-5 days',
    color: 'from-yellow-400 to-orange-400',
  },
  {
    service: 'Employment History Verification',
    time: '5-7 days',
    color: 'from-blue-400 to-blue-500',
  },
  {
    service: 'Complete BS7858 Package',
    time: '7-10 days',
    color: 'from-purple-400 to-purple-500',
  },
];

export const advantages: Advantage[] = [
  {
    icon: Shield,
    title: 'Enhanced Security',
    desc: 'Significantly reduce operational risks while strengthening stakeholder trust through verified personnel.',
    color: 'from-orange to-orange/90',
  },
  {
    icon: FileText,
    title: 'Legal Compliance',
    desc: 'Meet all regulatory requirements and SIA standards with comprehensive documentation and audit trails.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Award,
    title: 'Professional Integrity',
    desc: 'Demonstrate unwavering commitment to quality, ethics, and professional excellence in security services.',
    color: 'from-purple-500 to-purple-600',
  },
];
