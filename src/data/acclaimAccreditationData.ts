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

export const acclaimServices: ServiceItem[] = [
  {
    icon: ClipboardCheck,
    title: 'Compliance Assessment',
    description: 'Thorough assessment of your current compliance status',
  },
  {
    icon: FileText,
    title: 'Documentation Support',
    description: 'Complete preparation of all required documentation for Acclaim submission',
  },
  {
    icon: Users,
    title: 'Competency Development',
    description: 'Development of competency frameworks and evidence',
  },
  {
    icon: Settings,
    title: 'Process Implementation',
    description: 'Implementation of necessary processes to meet Acclaim standards',
  },
  {
    icon: Zap,
    title: 'Expedited Application',
    description: 'Fast-track application process with expert guidance',
  },
  {
    icon: Bell,
    title: 'Ongoing Maintenance',
    description: 'Continuous support for maintaining your accreditation',
  },
];

export const acclaimBenefits = [
  {
    title: 'Increased tender opportunities',
    icon: TrendingUp,
    bgColor: 'bg-orange-500',
  },
  {
    title: 'Enhanced industry reputation',
    icon: CheckCircle,
    bgColor: 'bg-teal-500',
  },
  {
    title: 'Streamlined pre-qualification',
    icon: RefreshCw,
    bgColor: 'bg-crimson-pink',
  },
  { 
    title: 'Improved safety standards', 
    icon: Shield, 
    bgColor: 'bg-orange-500' 
  },
];

export const processSteps = [
  {
    number: '1',
    title: 'Initial Consultation',
    description:
      'We assess your current systems and identify specific requirements for Acclaim accreditation.',
  },
  {
    number: '2',
    title: 'Gap Analysis',
    description:
      'We identify gaps between your current systems and Acclaim requirements.',
  },
  {
    number: '3',
    title: 'Implementation',
    description:
      'We help implement necessary changes and prepare all required documentation.',
  },
  {
    number: '4',
    title: 'Application & Support',
    description:
      'We manage your application and provide support throughout the assessment process.',
  },
];

export const serviceItems = [
  {
    icon: FileText,
    title: 'Complete Application Management',
    description:
      'We handle the entire Acclaim application process from start to finish, ensuring all documentation meets requirements.',
    bgFrom: 'from-[#E5E6F0]', // soft-lavender-grey
    bgTo: 'to-[#F9F9F9]', // off-white
    iconBg: 'bg-[hsl(var(--primary))]',
  },
  {
    icon: Shield,
    title: 'Health & Safety Expertise',
    description:
      'Our health and safety experts ensure your systems meet all Acclaim standards and requirements.',
    bgFrom: 'from-[#FFC857]', // warm amber
    bgTo: 'to-[#F9F9F9]',
    iconBg: 'bg-[hsl(var(--accent))]',
  },
  {
    icon: Target,
    title: 'High Success Rate',
    description:
      "Our proven methodology has helped numerous contractors achieve Acclaim accreditation on their first attempt.",
    bgFrom: 'from-[#ED2568]', // primary crimson pink
    bgTo: 'to-[#F9F9F9]',
    iconBg: 'bg-[hsl(var(--destructive))]',
  },
];

export const statsData = [
  { label: 'Success Rate', value: 97, suffix: '%', duration: 1.5 },
  { label: 'Contractors Accredited', value: 250, suffix: '+', duration: 2 },
  { label: 'Expert Support', value: 24, suffix: '/7', duration: 1.8 },
  { label: 'Turnaround Time', value: '', suffix: 'Efficient', duration: 0 },
];