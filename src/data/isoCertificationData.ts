// isoCertificationData.ts
import {
  Award,
  CheckCircle,
  Shield,
  Leaf,
  ArrowRight,
  Users,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ISOCertificationService {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  badge: string;
}
export interface BenefitItem {
  icon: LucideIcon;
  title: string;
  description: string;
  bgColor: string;
}

export const isoCertifications: ISOCertificationService[] = [
  {
    id: 'iso-certifications',
    icon: Award,
    title: 'ISO Certifications',
    description:
      'Comprehensive ISO certification services for quality, environment, and safety management.',
    price: 'From £2,500',
    badge: 'International',
  },
  {
    id: 'iso-9001',
    icon: Shield,
    title: 'ISO 9001',
    description:
      'Quality Management System certification for operational excellence.',
    price: 'From £2,500',
    badge: 'Most Popular',
  },
  {
    id: 'iso-14001',
    icon: Leaf,
    title: 'ISO 14001',
    description:
      'Environmental Management System certification for sustainability.',
    price: 'From £2,800',
    badge: 'Sustainable',
  },
  {
    id: 'ohsas-18001',
    icon: Shield,
    title: 'OHSAS 18001',
    description:
      'Occupational Health and Safety Management System certification.',
    price: 'From £2,600',
    badge: 'Safety',
  },
];
// isoCertificationData.ts

export const isoCertificationBenefits: BenefitItem[] = [
  {
    icon: Award,
    title: 'International Recognition',
    description:
      'Gain international recognition and credibility in your industry.',
    bgColor: 'bg-orange',
  },
  {
    icon: CheckCircle,
    title: 'Improved Processes',
    description:
      'Streamline and improve your business processes and efficiency.',
    bgColor: 'bg-leaf-green',
  },
  {
    icon: Shield,
    title: 'Enhanced Credibility',
    description: 'Build trust and credibility with customers and stakeholders.',
    bgColor: 'bg-teal-dark',
  },
  {
    icon: ArrowRight,
    title: 'Competitive Advantage',
    description: 'Gain a competitive advantage in your market.',
    bgColor: 'bg-purple-500',
  },
  {
    icon: Users,
    title: 'Customer Confidence',
    description: 'Increase customer confidence and satisfaction.',
    bgColor: 'bg-blue-500',
  },
  {
    icon: Leaf,
    title: 'Operational Efficiency',
    description: 'Improve operational efficiency and reduce costs.',
    bgColor: 'bg-indigo-500',
  },
];

export const certificationProcessSteps = [
  {
    step: 'Step 1 – Gap Analysis (Optional)',
    description:
      'We review your current occupational health and safety system and highlight areas needing improvement.',
  },
  {
    step: 'Step 2 – Formal Assessment',
    description:
      'Stage 1: Review documentation & preparedness. Stage 2: Assess the implementation of procedures.',
  },
  {
    step: 'Step 3 – Certification & Beyond',
    description:
      'Receive your 3-year BS OHSAS 18001 certificate and ongoing improvement support from our client manager.',
  },
];
