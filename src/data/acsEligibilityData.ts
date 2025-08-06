import {
  LucideIcon,
  Search,
  FileText,
  Shield,
  Star,
  Target,
  Users,
  Globe,
  Building,
  TrendingUp,
  Award,
  ClipboardCheck,
  Zap,
} from 'lucide-react';

export type ACSProcessStep = {
  step: string;
  description: string;
  icon: LucideIcon;
};

export type HighlightItem = {
  title: string;
  icon: LucideIcon;
  bgColor: string;
};

export type EligibleService = {
  name: string;
  icon: LucideIcon;
};

export const eligibleServices = [
  { name: 'Manned Security Services', icon: Shield },
  { name: 'CCTV Monitoring', icon: Search },
  { name: 'Access Control', icon: Lock },
  { name: 'Mobile Patrols', icon: Users },
  { name: 'Event Security', icon: Star },
  { name: 'Retail Security', icon: Building },
  { name: 'Corporate Security', icon: Globe },
  { name: 'Key Holding Services', icon: FileText },
];

export const acsCertifications = [
  {
    title: 'Enhanced credibility with clients',
    icon: Award,
    bgColor: 'bg-crimson-pink',
  },
  {
    title: 'Competitive advantage in tenders',
    icon: TrendingUp,
    bgColor: 'bg-orange-500',
  },
  {
    title: 'Improved operational efficiency',
    icon: Target,
    bgColor: 'bg-teal-500',
  },
  {
    title: 'Legal compliance assurance',
    icon: Shield,
    bgColor: 'bg-crimson-pink',
  },
  {
    title: 'Access to premium contracts',
    icon: Star,
    bgColor: 'bg-orange-500',
  },
  { title: 'Industry recognition', icon: Building, bgColor: 'bg-teal-500' },
];

export const acsProcessSteps = [
  {
    id: 1,
    step: 'Initial Assessment',
    title: 'Evaluation & Gap Analysis',
    description:
      'We evaluate your current operations and identify areas for improvement to meet ACS standards.',
    icon: ClipboardCheck,
    color: 'bg-gradient-to-br from-blue-50 to-teal-50',
  },
  {
    id: 2,
    step: 'Documentation Development',
    title: 'System Implementation',
    description:
      'Our experts help create and implement the required policies, procedures, and management systems.',
    icon: FileText,
    color: 'bg-gradient-to-br from-purple-50 to-pink-50',
  },
  {
    id: 3,
    step: 'Implementation Support',
    title: 'Training & Support',
    description:
      'We guide you through the implementation process, ensuring all requirements are met effectively.',
    icon: Users,
    color: 'bg-gradient-to-br from-orange-50 to-yellow-50',
  },
  {
    id: 4,
    step: 'Final Review & Submission',
    title: 'Certification Process',
    description:
      'Complete final assessment and submit your application to the SIA for certification approval.',
    icon: Award,
    color: 'bg-gradient-to-br from-green-50 to-emerald-50',
  },
];

export const acsDifferentiators = [
  {
    title: 'Proven track record with 95% success rate',
    icon: Award,
    bgColor: 'bg-crimson-pink',
  },
  {
    title: 'Industry-specific expertise',
    icon: Shield,
    bgColor: 'bg-orange-500',
  },
  {
    title: 'Ongoing support and maintenance',
    icon: Target,
    bgColor: 'bg-teal-500',
  },
  {
    title: 'Cost-effective solutions',
    icon: TrendingUp,
    bgColor: 'bg-crimson-pink',
  },
  {
    title: 'Fast-track certification process',
    icon: Zap,
    bgColor: 'bg-orange-500',
  },
  {
    title: 'Comprehensive training included',
    icon: Star,
    bgColor: 'bg-teal-500',
  },
];

export const acsBenefits = [
  {
    title: 'Official SIA recognition',
    icon: Award,
    bgColor: 'bg-crimson-pink',
  },
  {
    title: 'Access to government contracts',
    icon: Building,
    bgColor: 'bg-teal-500',
  },
  {
    title: 'Enhanced operational standards',
    icon: TrendingUp,
    bgColor: 'bg-crimson-pink',
  },
  {
    title: 'Competitive market advantage',
    icon: Star,
    bgColor: 'bg-orange-500',
  },
];
