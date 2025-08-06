import {
  Award,
  TrendingUp,
  Shield,
  Building,
  FileText,
  Target,
} from 'lucide-react';

export interface Benefit {
  icon: React.ElementType;
  title: string;
  description: string;
}

export const chasBenefits: Benefit[] = [
  {
    icon: Award,
    title: 'Third Party Accreditation',
    description:
      'CHAS is one of the founders of third party accreditation, providing recognized standards.',
  },
  {
    icon: TrendingUp,
    title: 'More Business Opportunities',
    description:
      'CHAS accreditation opens doors and leads to more contracts and profit generation.',
  },
  {
    icon: Shield,
    title: 'Workforce Protection',
    description:
      'Ensure your workforce is protected by robust health and safety practices.',
  },
  {
    icon: Building,
    title: 'Local Authority Compliance',
    description:
      'Most local authorities and organizations require CHAS registration for contractors.',
  },
];

export const smallCompanyRequirements: string[] = [
  'Health & Safety Arrangements',
  'Health & Safety Training',
  'Risk assessments and COSHH Assessments',
  'Method Statements',
  'Asbestos Awareness Training & Management',
  'Contractor Management & Competence Assessment',
  'Manual Handling Assessments',
  'Access to Competent H&S Advice',
];

export const largeCompanyRequirements: string[] = [
  'Health & Safety Policy and Arrangements',
  'Risk Assessments & Method Statements (including COSHH)',
  'Health & Safety Training (including Asbestos Awareness)',
  'Employee Consultation & Health Surveillance',
  'First Aid & Fire Emergency Procedures',
  'Display Screen Equipment & Manual Handling Assessments',
  'Work Equipment Safety (including Inspections & Maintenance)',
  'Electrical Safety & PAT Testing',
  'Personal Protective Equipment (PPE)',
  'Accident Reporting & Investigation Procedures',
  'Competent Health and Safety Advisor Access',
  'Contractor Management & Competency Checks',
  'Workplace Safety Inspections & Audits',
  'Monitoring, Review & Continuous Improvement',
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const chasProcessSteps: ProcessStep[] = [
  {
    number: '1',
    title: 'Initial Consultation',
    description:
      'We assess your current health and safety arrangements and discuss your specific needs.',
  },
  {
    number: '2',
    title: 'Documentation Review',
    description:
      'We review existing policies, procedures, and documentation to identify gaps.',
  },
  {
    number: '3',
    title: 'Application Preparation',
    description:
      'We complete the CHAS registration forms and prepare all supporting documents.',
  },
  {
    number: '4',
    title: 'Submission & Support',
    description:
      'We submit your application and provide ongoing support throughout the process.',
  },
];
export const serviceItems = [
  {
    icon: FileText,
    title: 'Application Completion',
    description:
      'We complete the CHAS registration forms on your behalf together with the submission of supporting documents.',
    bgFrom: 'from-[#E5E6F0]', // soft-lavender-grey
    bgTo: 'to-[#F9F9F9]', // off-white
    iconBg: 'bg-[hsl(var(--primary))]',
  },
  {
    icon: Shield,
    title: 'Expert Guidance',
    description:
      'Our expert guidance regarding health and safety procedures ensures your application meets all required standards.',
    bgFrom: 'from-[#FFC857]', // warm amber
    bgTo: 'to-[#F9F9F9]',
    iconBg: 'bg-[hsl(var(--accent))]',
  },
  {
    icon: Target,
    title: 'Proven Success',
    description:
      "We've successfully completed CHAS registration for hundreds of contractors with a 100% success rate.",
    bgFrom: 'from-[#ED2568]', // primary crimson pink
    bgTo: 'to-[#F9F9F9]',
    iconBg: 'bg-[hsl(var(--destructive))]',
  },
];

export const statsData = [
  { label: 'Success Rate', value: 100, suffix: '%', duration: 1.5 },
  { label: 'Contractors Accredited', value: 500, suffix: '+', duration: 2 },
  { label: 'Expert Support', value: 24, suffix: '/7', duration: 1.8 },
  { label: 'Turnaround Time', value: '', suffix: 'Fast', duration: 0 },
];
