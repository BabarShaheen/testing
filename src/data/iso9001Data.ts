import {
  Building,
  FileText,
  Users,
  BadgeCheck,
  Award,
  Shield,
  TrendingUp,
  Target,
  Star,
  Clock,
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
}

export interface Benefit {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
}

export interface Reason {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: 'Site Assessment & Analysis',
    description:
      'Comprehensive on-site evaluation of your current business and support procedures to identify improvement opportunities.',
    icon: Building,
    highlights: [
      'Current process review',
      'Gap analysis',
      'Improvement identification',
    ],
  },
  {
    title: 'Custom System Development',
    description:
      'Creation of tailored ISO 9001 system documentation, fully branded with your company logos and specific business information.',
    icon: FileText,
    highlights: [
      'Tailored documentation',
      'Brand integration',
      'Business-specific procedures',
    ],
  },
  {
    title: 'Training & Implementation',
    description:
      'Comprehensive staff training on procedures and documentation, with agreed timescales for system implementation and form completion.',
    icon: Users,
    highlights: [
      'Staff training programs',
      'Implementation planning',
      'Documentation guidance',
    ],
  },
  {
    title: 'Audit & Certification Support',
    description:
      'Internal audits, pre-assessment evaluations, and attendance during official assessments with 12 months ongoing telephone support.',
    icon: BadgeCheck,
    highlights: ['Internal auditing', 'Pre-assessment', 'Ongoing support'],
  },
];

export const benefits: Benefit[] = [
  {
    icon: Award,
    title: 'Competitive Advantage',
    desc: 'Stand out from competitors with internationally recognized certification that opens doors to new business opportunities.',
    color: 'from-orange to-orange/90',
  },
  {
    icon: Shield,
    title: 'Customer Confidence',
    desc: 'Build trust with clients through demonstrated commitment to quality management and professional business operations.',
    color: 'from-teal-600 to-teal-700',
  },
  {
    icon: TrendingUp,
    title: 'Business Growth',
    desc: 'Access larger contracts with councils, government, and corporate clients who require ISO 9001 certification.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Target,
    title: 'Process Improvement',
    desc: 'Continuously enhance business processes while monitoring and controlling service standards for optimal performance.',
    color: 'from-leaf-green to-green-600',
  },
];

export const whyChooseReasons: Reason[] = [
  {
    title: 'Mandatory Requirement',
    description:
      'Essential for public sector contracts and supplier selection processes',
    icon: FileText,
  },
  {
    title: 'Competitive Edge',
    description:
      'Puts you ahead of non-certified competitors in the marketplace',
    icon: TrendingUp,
  },
  {
    title: 'Professional Recognition',
    description:
      'Demonstrates professional business operations to customers and suppliers',
    icon: Star,
  },
  {
    title: 'Long-term Contracts',
    description:
      'Enables securing of longer-term contracts and business planning',
    icon: Clock,
  },
];
