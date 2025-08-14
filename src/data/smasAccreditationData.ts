import {
  ClipboardCheck,
  FileText,
  Users,
  Settings,
  Zap,
  Bell,
  RefreshCw,
  CheckCircle,
  TrendingUp,
  Shield,
  Target,
} from 'lucide-react';

export type ServiceItem = {
  icon: any;
  title: string;
  description: string;
};

export const smasServices: ServiceItem[] = [
  {
    icon: ClipboardCheck,
    title: 'Initial Assessment',
    description: 'Comprehensive assessment of your current compliance status',
  },
  {
    icon: FileText,
    title: 'Documentation Preparation',
    description: 'Complete preparation of all required documentation for SMAS submission',
  },
  {
    icon: Users,
    title: 'Staff Training',
    description: 'Training for your team on SMAS requirements and compliance',
  },
  {
    icon: Settings,
    title: 'System Implementation',
    description: 'Implementation of necessary systems and processes',
  },
  {
    icon: Zap,
    title: 'Fast-Track Application',
    description: 'Expedited application process with our expert guidance',
  },
  {
    icon: Bell,
    title: 'Renewal Support',
    description: 'Ongoing support for annual renewals and maintenance',
  },
];

export const smasBenefits = [
  {
    title: 'Enhanced credibility with clients',
    icon: TrendingUp,
    bgColor: 'bg-orange-500',
  },
  {
    title: 'Access to more tender opportunities',
    icon: CheckCircle,
    bgColor: 'bg-teal-500',
  },
  {
    title: 'Simplified pre-qualification process',
    icon: RefreshCw,
    bgColor: 'bg-crimson-pink',
  },
  { 
    title: 'Reduced administrative burden', 
    icon: Users, 
    bgColor: 'bg-orange-500' 
  },
];

export const processSteps = [
  {
    number: '1',
    title: 'Initial Consultation',
    description:
      'We assess your current health and safety arrangements and discuss your specific needs.',
  },
  {
    number: '2',
    title: 'Gap Analysis',
    description:
      'We identify gaps in your current systems against SMAS requirements.',
  },
  {
    number: '3',
    title: 'Documentation Preparation',
    description:
      'We prepare all necessary documentation and evidence for your application.',
  },
  {
    number: '4',
    title: 'Submission & Support',
    description:
      'We submit your application and provide support throughout the assessment process.',
  },
];

export const serviceItems = [
  {
    icon: FileText,
    title: 'Application Completion',
    description:
      'We complete the SMAS registration forms on your behalf together with the submission of supporting documents.',
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
      "We've successfully completed SMAS accreditation for numerous contractors with a high success rate.",
    bgFrom: 'from-[#ED2568]', // primary crimson pink
    bgTo: 'to-[#F9F9F9]',
    iconBg: 'bg-[hsl(var(--destructive))]',
  },
];

export const statsData = [
  { label: 'Success Rate', value: 98, suffix: '%', duration: 1.5 },
  { label: 'Contractors Accredited', value: 300, suffix: '+', duration: 2 },
  { label: 'Expert Support', value: 24, suffix: '/7', duration: 1.8 },
  { label: 'Turnaround Time', value: '', suffix: 'Fast', duration: 0 },
];