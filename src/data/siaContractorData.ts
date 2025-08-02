import {
  Search,
  Settings,
  Award,
  Shield,
  FileText,
  Target,
  Building,
  Users,
  Star,
  Zap,
  CheckCircle,
} from 'lucide-react';

export interface ProcessStep {
  id: string;
  icon: any;
  title: string;
  description: string;
  color: string;
  step: string;
}

export interface Service {
  id: string;
  icon: any;
  title: string;
  description: string;
  price: string;
  badge: string;
  features: string[];
}

export interface Benefit {
  icon: any;
  title: string;
  description: string;
  bgColor: string;
}

export interface WhyChooseUs {
  icon: any;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: 'gap-analysis',
    icon: Search,
    title: 'Gap Analysis',
    description:
      'Consultant visits your organisation to review and document current processes and procedures, highlighting areas that do not meet Standard requirements.',
    color: 'bg-gradient-to-br from-blue-50 to-indigo-50',
    step: '01',
  },
  {
    id: 'implementation',
    icon: Settings,
    title: 'Implementation',
    description:
      'Make required process or procedural changes as highlighted in the review. QMS provides templates to assist you in this process.',
    color: 'bg-gradient-to-br from-teal-50 to-cyan-50',
    step: '02',
  },
  {
    id: 'certification',
    icon: Award,
    title: 'Certification',
    description:
      'Auditor visits to check that documented processes are being followed and agreed. Once satisfied, you will be awarded your certification.',
    color: 'bg-gradient-to-br from-green-50 to-emerald-50',
    step: '03',
  },
];

export const services: Service[] = [
  {
    id: 'sia-acs-full',
    icon: Shield,
    title: 'Complete SIA ACS Certification',
    description:
      'Full end-to-end SIA ACS certification service including gap analysis, implementation, and certification audit.',
    price: 'From £3,500',
    badge: 'Complete Package',
    features: [
      'Initial gap analysis and review',
      'QMS design and implementation',
      'Documentation templates provided',
      'External certification audit',
      'Ongoing support included',
      'Certificate and plaque included',
    ],
  },
  {
    id: 'gap-analysis-service',
    icon: Search,
    title: 'Gap Analysis & Review',
    description:
      'Comprehensive review of your current processes against SIA ACS requirements with detailed action plan.',
    price: 'From £800',
    badge: 'Assessment',
    features: [
      'On-site consultant visit',
      'Current process documentation',
      'Requirements gap identification',
      'Detailed improvement plan',
      'Implementation roadmap',
      'Follow-up consultation',
    ],
  },
  {
    id: 'certification-audit',
    icon: FileText,
    title: 'Certification Audit',
    description:
      'Professional external audit service to achieve your SIA ACS certification.',
    price: 'From £1,200',
    badge: 'Final Step',
    features: [
      'Independent certification audit',
      'Process compliance verification',
      'Documentation review',
      'Staff interviews',
      'Certification recommendation',
      'Post-audit support',
    ],
  },
];

export const benefits: Benefit[] = [
  {
    icon: Shield,
    title: 'Industry Recognition',
    description:
      'Demonstrates independent assessment against recognised standards with properly trained security personnel.',
    bgColor: 'bg-teal-600',
  },
  {
    icon: Target,
    title: 'Competitive Edge',
    description:
      'Provides competitive advantage and confidence in the service you provide to potential clients.',
    bgColor: 'bg-pink-600',
  },
  {
    icon: Award,
    title: 'SIA Register Entry',
    description:
      'Entry to SIA Register of Approved Contractors, emphasising your status as a top UK security provider.',
    bgColor: 'bg-green-600',
  },
  {
    icon: Building,
    title: 'Professional Display',
    description:
      'Display approved contractor plaque/certificate and add standards to vehicles, social media, and web pages.',
    bgColor: 'bg-blue-600',
  },
  {
    icon: Users,
    title: 'Client Confidence',
    description:
      'Assures customers, partners and employees of your position as an exemplary security service provider.',
    bgColor: 'bg-purple-600',
  },
  {
    icon: Star,
    title: 'Quality Standards',
    description:
      'Based on ISO 9001 and European Foundation for Quality Management Excellence Model principles.',
    bgColor: 'bg-indigo-600',
  },
];

export const whyChooseUs: WhyChooseUs[] = [
  {
    icon: Users,
    title: 'Expert Team',
    description:
      'Team of consultants and auditors nationwide with wealth of business experience.',
  },
  {
    icon: Zap,
    title: 'Affordable Solutions',
    description:
      'Quality product with focus on adding value, not just consuming management time.',
  },
  {
    icon: CheckCircle,
    title: 'Simple Process',
    description:
      'Focus on making certification straightforward and relevant to your business.',
  },
];
