import {
  Search,
  FileText,
  Users,
  Clipboard,
  Eye,
  BadgeCheck,
  Globe,
  Factory,
  Recycle,
  Zap,
  TreePine,
  BarChart3,
  TrendingUp,
  Award,
} from 'lucide-react';

export interface ImplementationStep {
  title: string;
  description: string;
  icon: any;
  highlights: string[];
}

export interface AssessmentPhase {
  phase: string;
  description: string;
  duration: string;
  icon: any;
}

export interface IntegratedSystem {
  system: string;
  focus: string;
  integration: string;
  color: string;
}

export interface EnvironmentalArea {
  icon: any;
  title: string;
  desc: string;
}

export interface MetricImprovement {
  metric: string;
  improvement: string;
}

export interface ResourceLink {
  url: string;
  label: string;
}

export const implementationSteps: ImplementationStep[] = [
  {
    title: 'Environmental Impact Assessment',
    description:
      "Comprehensive evaluation of your organization's environmental footprint and impact across all operations.",
    icon: Search,
    highlights: [
      'Environmental impact analysis',
      'Resource usage assessment',
      'Waste stream identification',
    ],
  },
  {
    title: 'System Boundaries & Documentation',
    description:
      'Define clear environmental management system boundaries and create comprehensive procedure documentation.',
    icon: FileText,
    highlights: [
      'System scope definition',
      'Environmental procedures',
      'Legal requirement mapping',
    ],
  },
  {
    title: 'Implementation & Training',
    description:
      'Full EMS implementation with staff training and environmental awareness programs for sustainable operations.',
    icon: Users,
    highlights: [
      'EMS implementation',
      'Environmental training',
      'Awareness programs',
    ],
  },
  {
    title: 'Audit & Continuous Improvement',
    description:
      'Regular environmental audits and system reviews to maintain effectiveness and drive continuous improvement.',
    icon: Clipboard,
    highlights: [
      'Environmental auditing',
      'Performance monitoring',
      'Continuous improvement',
    ],
  },
];

export const assessmentProcess: AssessmentPhase[] = [
  {
    phase: 'Stage 1 Documentation Review',
    description:
      'Comprehensive review of environmental documentation and procedures against ISO 14001 requirements',
    duration: '2-3 days',
    icon: FileText,
  },
  {
    phase: 'Stage 2 Operational Audit',
    description:
      'On-site verification of environmental practices and operational implementation',
    duration: '2-4 days',
    icon: Eye,
  },
  {
    phase: 'Certification Issued',
    description:
      'ISO 14001 certificate issued upon successful completion of assessment process',
    duration: '1-2 weeks',
    icon: BadgeCheck,
  },
  {
    phase: 'Surveillance Audits',
    description:
      'Regular surveillance visits to ensure ongoing environmental compliance and improvement',
    duration: 'Annually',
    icon: Globe,
  },
];

export const integratedSystems: IntegratedSystem[] = [
  {
    system: 'ISO 14001',
    focus: 'Environmental Management',
    integration: 'Document control, management review',
    color: 'from-[#1BB66E] to-[#007E7A]',
  },
  {
    system: 'ISO 9001',
    focus: 'Quality Management',
    integration: 'Trained personnel, corrective action',
    color: 'from-[#007E7A] to-[#00C4B3]',
  },
];

export const environmentalFocusAreas: EnvironmentalArea[] = [
  {
    icon: Factory,
    title: 'Resource Management',
    desc: 'Efficient use of natural resources',
  },
  {
    icon: Recycle,
    title: 'Waste Treatment',
    desc: 'Proper handling and treatment of waste',
  },
  {
    icon: Zap,
    title: 'Energy Consumption',
    desc: 'Optimization of energy usage',
  },
  {
    icon: TreePine,
    title: 'Environmental Impact',
    desc: 'Minimizing ecological footprint',
  },
];

export const impactReductionMetrics: MetricImprovement[] = [
  { metric: 'Energy Efficiency', improvement: '25%' },
  { metric: 'Waste Reduction', improvement: '40%' },
  { metric: 'Resource Optimization', improvement: '30%' },
  { metric: 'Cost Savings', improvement: '20%' },
];

export const resourceLinks: ResourceLink[] = [
  {
    url: 'https://www.iso.org',
    label: 'www.iso.org',
  },
  {
    url: 'https://www.letsrecycle.com',
    label: 'letsrecycle.com',
  },
  {
    url: 'https://www.environment-agency.gov.uk',
    label: 'environment-agency.gov.uk',
  },
  {
    url: 'https://www.defra.gov.uk',
    label: 'defra.gov.uk',
  },
  {
    url: 'https://www.netregs.gov.uk',
    label: 'netregs.gov.uk',
  },
];

export const heroFeatures = [
  'ISO 14001 Certified',
  'Environmental Excellence',
  'Cost Reduction',
];

export const benefitsData = [
  {
    icon: BarChart3,
    title: 'Systematic Discovery',
    description:
      'Implementing an Environmental Management System provides a systematic way to discover and control the effects your company has on the environment.',
    gradient: 'from-[#1BB66E] to-[#007E7A]',
  },
  {
    icon: TrendingUp,
    title: 'Cost Efficiency',
    description:
      'Cost savings can be made through improved efficiency and productivity, helping to reduce bills and minimize environmental impact simultaneously.',
    gradient: 'from-[#007E7A] to-[#00C4B3]',
  },
  {
    icon: Award,
    title: 'Enhanced Credibility',
    description:
      'Certification proves commitment to improving environmental performance and enhances credibility with customers, stakeholders, and regulatory bodies.',
    gradient: 'from-[#1E2A3A] to-[#007E7A]',
  },
];

export const whyChooseUsData = [
  {
    icon: Users,
    title: 'Friendly & Relevant Audits',
    description:
      'We offer friendly, industry-relevant audits with transparent pricing. Our approach focuses on environmental improvement rather than bureaucratic processes.',
    gradient: 'from-[#F7941E] to-[#1BB66E]',
    bgGradient: 'from-[#F7941E]/10 to-[#F7941E]/20',
    borderColor: 'border-[#F7941E]/30',
  },
  {
    icon: Users, // You might want to change this to a different icon like Briefcase
    title: 'Tailored Pricing',
    description:
      'Prices vary depending on organisation size and industry. We provide tailored quotes after gathering information through questionnaire or consultation.',
    gradient: 'from-[#007E7A] to-[#00C4B3]',
    bgGradient: 'from-[#007E7A]/10 to-[#00C4B3]/20',
    borderColor: 'border-[#007E7A]/30',
  },
  {
    icon: Users, // You might want to change this to Target
    title: 'Ongoing Support',
    description:
      'Comprehensive support is provided between audit stages, ensuring successful implementation and continuous environmental improvement.',
    gradient: 'from-[#1BB66E] to-[#007E7A]',
    bgGradient: 'from-[#1BB66E]/10 to-[#1BB66E]/20',
    borderColor: 'border-[#1BB66E]/30',
  },
];

export const certificationSteps = [
  {
    icon: Search,
    title: 'Gap Analysis (Optional)',
    description:
      'A pre-assessment where we review your current system vs ISO 14001 requirements to identify any gaps.',
    gradient: 'from-[#007E7A] to-[#00C4B3]',
  },
  {
    icon: Clipboard,
    title: 'Formal Assessment (Two Stages)',
    description:
      'Stage 1 checks your readiness; Stage 2 includes full on-site assessment for certification.',
    gradient: 'from-[#1BB66E] to-[#007E7A]',
  },
  {
    icon: Award,
    title: 'Certification & Beyond',
    description:
      'Once certified, you receive a 3-year certificate. A client manager provides ongoing support and improvement check-ins.',
    gradient: 'from-[#F7941E] to-[#1BB66E]',
  },
];

export const certificationProcessDetails = {
  steps: [
    'Stage 1 audit of environmental documentation and procedures',
    'Stage 2 verification of operational environmental practices',
    'Certificate issuance upon successful completion',
  ],
  postCertification: [
    'Surveillance audits continue post-certification',
    'Ongoing compliance monitoring and verification',
    'Continuous environmental performance improvement',
  ],
};

export const downloadInfo = {
  title: 'Download Self-Assessment Questionnaire',
  description:
    "This document has been designed by BSI to illustrate your company's readiness for an ISO 14001 Environmental Management System. Complete it to assess where you are in the process.",
  filePath: '/pdfs/BSI-ISO14001-Assessment-Checklist-UK-EN.pdf',
};
