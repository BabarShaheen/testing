// data.ts
import {
  Search,
  FileText,
  Users,
  Clipboard,
  Eye,
  BadgeCheck,
  Shield,
} from 'lucide-react';

export const implementationSteps = [
  {
    title: 'Health & Safety Evaluation',
    description:
      'Comprehensive assessment of your staff and visitor safety needs, identifying current gaps and improvement opportunities.',
    icon: Search,
    highlights: [
      'Staff safety assessment',
      'Visitor risk evaluation',
      'Gap identification',
    ],
  },
  {
    title: 'System Boundaries & Documentation',
    description:
      'Define clear boundaries for your Health and Safety system and create comprehensive procedure documentation.',
    icon: FileText,
    highlights: [
      'System boundary definition',
      'Procedure documentation',
      'Requirement mapping',
    ],
  },
  {
    title: 'Implementation & Training',
    description:
      'Full system implementation with staff training and ongoing monitoring to ensure compliance and effectiveness.',
    icon: Users,
    highlights: [
      'System implementation',
      'Staff training programs',
      'Compliance monitoring',
    ],
  },
  {
    title: 'Audit & Review Process',
    description:
      'Regular internal audits and system reviews to maintain effectiveness and ensure continuous improvement.',
    icon: Clipboard,
    highlights: [
      'Internal auditing',
      'System reviews',
      'Continuous improvement',
    ],
  },
];

export const assessmentProcess = [
  {
    phase: 'Documentation Review',
    description:
      'Third-party certification body reviews all documentation against OHSAS 18001 requirements',
    duration: '3-5 days',
    icon: FileText,
  },
  {
    phase: 'On-site Audit',
    description:
      'Comprehensive audit to verify records maintenance and documented practice implementation',
    duration: '2-3 days',
    icon: Eye,
  },
  {
    phase: 'Certification Issued',
    description:
      'Certificate of registration issued upon successful completion of audit process',
    duration: '1-2 weeks',
    icon: BadgeCheck,
  },
  {
    phase: 'Ongoing Surveillance',
    description:
      'Annual surveillance visits to ensure system maintenance and continued effectiveness',
    duration: 'Annually',
    icon: Shield,
  },
];

export const jointSystemBenefits = [
  {
    system: 'OHSAS 18001',
    focus: 'Health & Safety Management',
    integration: 'Document control, corrective action',
    color: 'from-teal-500 to-teal-600',
  },
  {
    system: 'ISO 9001',
    focus: 'Quality Management',
    integration: 'Management review, trained personnel',
    color: 'from-blue-500 to-blue-600',
  },
  {
    system: 'ISO 14001',
    focus: 'Environmental Management',
    integration: 'Audit procedures, policy framework',
    color: 'from-green-500 to-green-600',
  },
];
