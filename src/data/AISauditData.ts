import {
  Search,
  Shield,
  CheckCircle,
  TrendingUp,
  Clock,
  Users,
  FileText,
  Target,
  AlertTriangle,
  Award,
  BookOpen,
  Settings,
  BarChart3,
  Zap,
  Lightbulb,
  Eye,
  Calendar,
  ClipboardCheck,
} from 'lucide-react';

export const heroFeatures = [
  'ISO Standards Compliance',
  'Impartial Expert Auditors',
  'Continuous Improvement Focus',
  'Fixed Fee Structure',
  'Ongoing Support Included',
];

export const auditBenefits = [
  {
    icon: Shield,
    title: 'Compliance Verification',
    description:
      'Verify compliance with ISO standards and ensure processes are properly implemented and maintained throughout your organization.',
  },
  {
    icon: TrendingUp,
    title: 'Performance Improvement',
    description:
      'Identify areas for improvement in efficiency, effectiveness and control to optimize your management system performance.',
  },
  {
    icon: AlertTriangle,
    title: 'Risk Mitigation',
    description:
      'Proactively identify and resolve potential issues before they lead to compliance problems or external non-conformances.',
  },
  {
    icon: Eye,
    title: 'Audit Readiness',
    description:
      'Maintain audit-ready status for external regulatory inspections with continuous monitoring and documentation.',
  },
];

export const auditProcess = [
  {
    icon: Calendar,
    title: 'Planning & Scheduling',
    description:
      'We work with you to develop a comprehensive audit schedule that covers all critical areas of your management system at regular intervals.',
    highlights: [
      'Customized audit calendar',
      'Risk-based planning',
      'Resource allocation',
      'Stakeholder coordination',
    ],
  },
  {
    icon: Search,
    title: 'Comprehensive Assessment',
    description:
      "Our impartial auditors conduct thorough evaluations of your management system's efficiency, effectiveness, and compliance status.",
    highlights: [
      'Process evaluation',
      'Documentation review',
      'Staff interviews',
      'Evidence gathering',
    ],
  },
  {
    icon: FileText,
    title: 'Detailed Reporting',
    description:
      'Receive comprehensive audit reports with clear findings, non-conformances, and actionable recommendations for improvement.',
    highlights: [
      'Detailed findings',
      'Non-conformance tracking',
      'Improvement opportunities',
      'Priority rankings',
    ],
  },
  {
    icon: Target,
    title: 'Follow-up Support',
    description:
      'We provide ongoing support to help implement corrective actions and ensure continuous improvement of your management system.',
    highlights: [
      'Action plan development',
      'Implementation guidance',
      'Progress monitoring',
      'Verification audits',
    ],
  },
];

export const auditTypes = [
  {
    icon: ClipboardCheck,
    title: 'ISO 9001 Quality Audits',
    description:
      'Comprehensive quality management system audits ensuring compliance with ISO 9001 standards.',
    features: [
      'Quality process evaluation',
      'Customer satisfaction assessment',
      'Documentation review',
      'Continuous improvement focus',
    ],
  },
  {
    icon: Shield,
    title: 'ISO 14001 Environmental Audits',
    description:
      'Environmental management system audits to verify environmental compliance and performance.',
    features: [
      'Environmental impact assessment',
      'Legal compliance verification',
      'Resource usage evaluation',
      'Sustainability metrics',
    ],
  },
  {
    icon: Users,
    title: 'ISO 45001 Health & Safety Audits',
    description:
      'Occupational health and safety management system audits for workplace safety compliance.',
    features: [
      'Safety procedure verification',
      'Hazard identification',
      'Incident investigation',
      'Safety culture assessment',
    ],
  },
  {
    icon: BookOpen,
    title: 'Integrated System Audits',
    description:
      'Combined audits for organizations with multiple ISO certifications for maximum efficiency.',
    features: [
      'Multi-standard approach',
      'Resource optimization',
      'Integrated reporting',
      'Streamlined processes',
    ],
  },
];

export const whyChooseUsData = [
  {
    icon: Award,
    title: 'Expert Auditors',
    description:
      'Our team consists of certified and experienced auditors with deep knowledge of various ISO standards and industry best practices.',
  },
  {
    icon: Settings,
    title: 'Impartial Assessment',
    description:
      'We provide completely independent and unbiased audits as required by ISO standards, ensuring objective evaluation of your systems.',
  },
  {
    icon: BarChart3,
    title: 'Actionable Insights',
    description:
      'Our audits go beyond compliance checking to provide valuable insights that drive real business improvements and operational excellence.',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description:
      'We work around your business operations with flexible audit scheduling that minimizes disruption to your daily activities.',
  },
  {
    icon: Zap,
    title: 'Rapid Response',
    description:
      'Quick turnaround times for audit reports and findings, allowing you to address issues promptly and maintain compliance momentum.',
  },
  {
    icon: Lightbulb,
    title: 'Continuous Support',
    description:
      'Ongoing support beyond the audit with guidance on corrective actions, process improvements, and preparation for external audits.',
  },
];

export const auditTimeline = [
  {
    phase: 'Pre-Audit Planning',
    duration: '1-2 Weeks',
    icon: Calendar,
    description:
      'Audit scope definition, scheduling, and preparation of audit documentation and checklists.',
  },
  {
    phase: 'On-Site Audit',
    duration: '1-3 Days',
    icon: Search,
    description:
      'Comprehensive evaluation including interviews, documentation review, and process observation.',
  },
  {
    phase: 'Report Generation',
    duration: '3-5 Days',
    icon: FileText,
    description:
      'Detailed audit report preparation with findings, non-conformances, and improvement recommendations.',
  },
  {
    phase: 'Follow-up Support',
    duration: 'Ongoing',
    icon: Target,
    description:
      'Assistance with corrective action implementation and preparation for next audit cycle.',
  },
];

export const complianceAreas = [
  {
    icon: CheckCircle,
    title: 'Process Compliance',
    desc: 'Verification of process implementation',
  },
  {
    icon: FileText,
    title: 'Documentation Review',
    desc: 'Assessment of procedures and policies',
  },
  {
    icon: Users,
    title: 'Personnel Competency',
    desc: 'Evaluation of staff training and skills',
  },
  {
    icon: BarChart3,
    title: 'Performance Metrics',
    desc: 'Analysis of KPIs and objectives',
  },
  {
    icon: Target,
    title: 'Objective Achievement',
    desc: 'Assessment of goal attainment',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Improvement',
    desc: 'Evaluation of improvement initiatives',
  },
];

export const auditStatistics = [
  {
    metric: 'Non-conformance Detection',
    improvement: '95%',
    description: 'Early identification of potential issues',
  },
  {
    metric: 'Process Efficiency',
    improvement: '25%',
    description: 'Average improvement in operational efficiency',
  },
  {
    metric: 'External Audit Success',
    improvement: '98%',
    description: 'Client success rate in external audits',
  },
  {
    metric: 'Cost Savings',
    improvement: '30%',
    description: 'Average cost reduction from improvements',
  },
];

export const servicePackages = [
  {
    title: 'Essential Audit',
    price: 'From £1,200',
    duration: '1-2 Days',
    features: [
      'Single system audit',
      'Comprehensive report',
      'Non-conformance identification',
      'Basic improvement recommendations',
      '30-day support',
    ],
    popular: false,
  },
  {
    title: 'Comprehensive Audit',
    price: 'From £2,400',
    duration: '2-3 Days',
    features: [
      'Multi-system audit coverage',
      'Detailed gap analysis',
      'Priority action plans',
      'Implementation guidance',
      '90-day ongoing support',
      'Follow-up verification',
    ],
    popular: true,
  },
  {
    title: 'Premium Audit Package',
    price: 'From £3,600',
    duration: '3-5 Days',
    features: [
      'Complete system evaluation',
      'Risk assessment integration',
      'Strategic improvement roadmap',
      'Staff training recommendations',
      '12-month support program',
      'Quarterly check-ins',
      'External audit preparation',
    ],
    popular: false,
  },
];
