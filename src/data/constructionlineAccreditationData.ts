import {
  ClipboardCheck,
  FileText,
  Settings,
  Zap,
  Bell,
  RefreshCw,
  CheckCircle,
  TrendingUp,
  Award,
  Shield,
  Target,
  Building,
} from 'lucide-react';

export type ServiceItem = {
  icon: any;
  title: string;
  description: string;
};

export const constructionlineServices: ServiceItem[] = [
  {
    icon: ClipboardCheck,
    title: 'Initial Assessment',
    description: 'Comprehensive assessment of your current compliance status',
  },
  {
    icon: FileText,
    title: 'Documentation Preparation',
    description: 'Complete preparation of all required documentation for Constructionline submission',
  },
  {
    icon: Building,
    title: 'Level Selection Support',
    description: 'Guidance on selecting the appropriate Constructionline level (Silver, Gold, Platinum)',
  },
  {
    icon: Settings,
    title: 'System Implementation',
    description: 'Implementation of necessary systems and processes to meet requirements',
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

export const constructionlineBenefits = [
  {
    title: 'Access to public sector contracts',
    icon: TrendingUp,
    bgColor: 'bg-orange-500',
  },
  {
    title: 'Enhanced buyer confidence',
    icon: CheckCircle,
    bgColor: 'bg-teal-500',
  },
  {
    title: 'Simplified procurement process',
    icon: RefreshCw,
    bgColor: 'bg-crimson-pink',
  },
  { 
    title: 'Competitive advantage', 
    icon: Award, 
    bgColor: 'bg-orange-500' 
  },
];

export const processSteps = [
  {
    number: '1',
    title: 'Initial Consultation',
    description:
      'We assess your current systems and identify the appropriate Constructionline level for your business.',
  },
  {
    number: '2',
    title: 'Gap Analysis',
    description:
      'We identify gaps between your current systems and Constructionline requirements.',
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
    title: 'Complete Application Management',
    description:
      'We handle the entire Constructionline application process, ensuring all documentation meets requirements.',
    bgFrom: 'from-[#E5E6F0]', // soft-lavender-grey
    bgTo: 'to-[#F9F9F9]', // off-white
    iconBg: 'bg-[hsl(var(--primary))]',
  },
  {
    icon: Shield,
    title: 'Expert Guidance',
    description:
      'Our expert guidance ensures your application meets all Constructionline standards and requirements.',
    bgFrom: 'from-[#FFC857]', // warm amber
    bgTo: 'to-[#F9F9F9]',
    iconBg: 'bg-[hsl(var(--accent))]',
  },
  {
    icon: Target,
    title: 'Proven Success',
    description:
      "We've successfully helped numerous contractors achieve Constructionline accreditation at all levels.",
    bgFrom: 'from-[#ED2568]', // primary crimson pink
    bgTo: 'to-[#F9F9F9]',
    iconBg: 'bg-[hsl(var(--destructive))]',
  },
];

export const statsData = [
  { label: 'Success Rate', value: 96, suffix: '%', duration: 1.5 },
  { label: 'Contractors Accredited', value: 280, suffix: '+', duration: 2 },
  { label: 'Expert Support', value: 24, suffix: '/7', duration: 1.8 },
  { label: 'Turnaround Time', value: '', suffix: 'Efficient', duration: 0 },
];