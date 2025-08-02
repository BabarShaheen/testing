import {
  LucideIcon,
  Search,
  BadgeCheck,
  BookOpen,
  Briefcase,
  CheckCircle,
  ClipboardList,
  FileText,
  Flag,
  Hand,
  Shield,
  Star,
  Target,
  ThumbsUp,
  Users,
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

export const eligibleServices: EligibleService[] = [
  { name: 'Security Guarding', icon: Shield },
  { name: 'Door Supervision', icon: Users },
  { name: 'CCTV Monitoring', icon: Target },
  { name: 'Keyholding & Alarm Response', icon: ClipboardList },
  { name: 'Cash & Valuables in Transit', icon: Briefcase },
  { name: 'Private Investigations', icon: FileText },
  { name: 'Close Protection', icon: BadgeCheck },
  { name: 'Vehicle Immobilisation (NI only)', icon: Flag },
];

export const acsCertifications: HighlightItem[] = [
  {
    title:
      'Gain a competitive advantage in public and private security contracts',
    icon: Star,
    bgColor: 'bg-orange',
  },
  {
    title: 'Demonstrate compliance with best practices and training standards',
    icon: CheckCircle,
    bgColor: 'bg-teal-dark',
  },
  {
    title: 'Strengthen credibility and customer trust',
    icon: ThumbsUp,
    bgColor: 'bg-blue-500',
  },
  {
    title:
      'Qualify for listing in the official SIA Register of Approved Contractors',
    icon: BookOpen,
    bgColor: 'bg-purple-500',
  },
  {
    title:
      'Permission to display the ACS mark on premises, documents, vehicles, and digital platforms',
    icon: BadgeCheck,
    bgColor: 'bg-leaf-green',
  },
];

export const acsProcessSteps: ACSProcessStep[] = [
  {
    step: 'Gap Analysis',
    description:
      'Our consultants visit your site to assess your current systems and identify any non-compliance with ACS standards.',
    icon: Search,
  },
  {
    step: 'System Implementation',
    description:
      'We help you implement or update your procedures with templates and guidance to align with SIA expectations.',
    icon: FileText,
  },
  {
    step: 'External Certification Audit',
    description:
      'An independent audit confirms your eligibility, followed by certification once compliance is validated.',
    icon: BadgeCheck,
  },
];

export const acsDifferentiators: HighlightItem[] = [
  {
    title: 'Nationwide coverage with experienced auditors and consultants',
    icon: Users,
    bgColor: 'bg-blue-600',
  },
  {
    title: 'Affordable, transparent pricing',
    icon: FileText,
    bgColor: 'bg-orange',
  },
  {
    title: 'Step-by-step guidance throughout the ACS journey',
    icon: ClipboardList,
    bgColor: 'bg-indigo-500',
  },
  {
    title: 'Expertise in QHSE and ISO-aligned systems',
    icon: Hand,
    bgColor: 'bg-teal-500',
  },
];

export const acsBenefits: HighlightItem[] = [
  {
    title: 'Competitive advantage in contracts',
    icon: Star,
    bgColor: 'bg-orange',
  },
  {
    title: 'Official SIA Register listing',
    icon: BookOpen,
    bgColor: 'bg-purple-500',
  },
  {
    title: 'Display ACS mark on materials',
    icon: BadgeCheck,
    bgColor: 'bg-leaf-green',
  },
  {
    title: 'Enhanced credibility and trust',
    icon: ThumbsUp,
    bgColor: 'bg-blue-500',
  },
  {
    title: 'Best practice compliance',
    icon: CheckCircle,
    bgColor: 'bg-teal-dark',
  },
];
