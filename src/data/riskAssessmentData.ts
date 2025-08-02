import {
  LucideIcon,
  Laptop,
  AlertTriangle,
  UserCheck,
  FlameKindling,
  Settings,
  Users,
  Wrench,
  Hammer,
  Beaker,
  Construction,
  Volume2,
  Heart,
  Shield,
  Award,
  FileText,
  CheckCircle,
  Search,
} from 'lucide-react';

export type SpecificAssessment = {
  name: string;
  icon: LucideIcon;
};

export type AssessmentService = {
  icon: LucideIcon;
  title: string;
  description: string;
  bgColor: string;
};

export const specificAssessments: SpecificAssessment[] = [
  { name: 'Display Screen Equipment', icon: Laptop },
  { name: 'Hazardous Substances', icon: AlertTriangle },
  { name: 'Lone Working', icon: UserCheck },
  { name: 'Fire Safety', icon: FlameKindling },
  { name: 'Work Equipment', icon: Settings },
  { name: 'Management of Contractors', icon: Users },
  { name: 'Maintenance Activities', icon: Wrench },
  { name: 'Manual Handling', icon: Hammer },
  { name: 'Laboratory Safety', icon: Beaker },
  { name: 'Construction Safety', icon: Construction },
  { name: 'Noise', icon: Volume2 },
  { name: 'First Aid', icon: Heart },
];

export const assessmentServices: AssessmentService[] = [
  {
    icon: Shield,
    title: 'Legal Compliance',
    description:
      'Ensure compliance with health and safety regulations and statutory requirements.',
    bgColor: 'bg-orange',
  },
  {
    icon: Award,
    title: 'Fixed Price Guarantee',
    description: 'No hidden extras - transparent pricing you can trust.',
    bgColor: 'bg-leaf-green',
  },
  {
    icon: Users,
    title: 'Free Staff Training',
    description:
      'Complimentary online staff training included with assessments.',
    bgColor: 'bg-teal-dark',
  },
  {
    icon: FileText,
    title: 'Comprehensive Reports',
    description:
      'Detailed reports with prioritized action plans and recommendations.',
    bgColor: 'bg-purple-500',
  },
  {
    icon: CheckCircle,
    title: 'Nationwide Coverage',
    description:
      'Professional services available across the entire United Kingdom.',
    bgColor: 'bg-blue-500',
  },
  {
    icon: Search,
    title: 'Expert Investigation',
    description: 'Skilled consultants with extensive industry experience.',
    bgColor: 'bg-indigo-500',
  },
];
