import {
  FileText,
  Shield,
  Users,
  AlertTriangle,
  Wrench,
  HardHat,
  Zap,
  Eye,
  Heart,
  Car,
  Flame,
  UserCheck,
  Clock,
  BookOpen,
  CheckCircle,
  Award,
  Target,
  TrendingUp,
  Globe,
  Lock,
} from 'lucide-react';

export interface PolicyDocument {
  id: string;
  name: string;
  icon: any;
  category: string;
  description: string;
  compliance: string[];
}

export interface PolicyService {
  title: string;
  description: string;
  icon: any;
  bgColor: string;
  features: string[];
}

export interface PolicyBenefit {
  title: string;
  description: string;
  icon: any;
  stats?: {
    value: string;
    label: string;
  };
}

export const policyDocuments: PolicyDocument[] = [
  {
    id: 'health-safety-policy',
    name: 'Health & Safety Policy',
    icon: Shield,
    category: 'Core Policies',
    description:
      'Comprehensive health and safety policy framework for your organization',
    compliance: ['HSE Regulations', 'RIDDOR', 'COSHH'],
  },
  {
    id: 'fire-safety-policy',
    name: 'Fire Safety Policy',
    icon: Flame,
    category: 'Safety Policies',
    description:
      'Fire prevention, evacuation procedures and emergency response protocols',
    compliance: ['Fire Safety Order 2005', 'Building Regulations'],
  },
  {
    id: 'lone-working-policy',
    name: 'Lone Working Policy',
    icon: UserCheck,
    category: 'Workplace Safety',
    description: 'Guidelines and procedures for employees working alone',
    compliance: ['HSE Guidance', 'Duty of Care'],
  },
  {
    id: 'manual-handling-policy',
    name: 'Manual Handling Policy',
    icon: Users,
    category: 'Physical Safety',
    description:
      'Safe lifting, carrying and movement of materials and equipment',
    compliance: ['Manual Handling Regulations 1992'],
  },
  {
    id: 'accident-reporting-policy',
    name: 'Accident Reporting Policy',
    icon: AlertTriangle,
    category: 'Incident Management',
    description:
      'Procedures for reporting and investigating workplace accidents',
    compliance: ['RIDDOR 2013', 'Data Protection Act'],
  },
  {
    id: 'ppe-policy',
    name: 'PPE Policy',
    icon: HardHat,
    category: 'Equipment Safety',
    description: 'Personal Protective Equipment selection, use and maintenance',
    compliance: ['PPE Regulations 2002', 'CE Marking'],
  },
  {
    id: 'electrical-safety-policy',
    name: 'Electrical Safety Policy',
    icon: Zap,
    category: 'Technical Safety',
    description: 'Electrical installation, maintenance and safety procedures',
    compliance: ['Electricity at Work Regulations 1989', 'BS 7671'],
  },
  {
    id: 'workplace-transport-policy',
    name: 'Workplace Transport Policy',
    icon: Car,
    category: 'Transport Safety',
    description: 'Vehicle and pedestrian safety in workplace environments',
    compliance: ['HSE Guidance', 'Traffic Management'],
  },
  {
    id: 'display-screen-policy',
    name: 'Display Screen Policy',
    icon: Eye,
    category: 'Ergonomics',
    description: 'DSE assessments and workstation setup guidelines',
    compliance: ['DSE Regulations 1992', 'Ergonomic Standards'],
  },
  {
    id: 'occupational-health-policy',
    name: 'Occupational Health Policy',
    icon: Heart,
    category: 'Health Management',
    description: 'Employee health monitoring and workplace wellness programs',
    compliance: ['Occupational Health Standards', 'GDPR'],
  },
  {
    id: 'maintenance-policy',
    name: 'Maintenance Policy',
    icon: Wrench,
    category: 'Equipment Management',
    description: 'Preventive maintenance schedules and safety procedures',
    compliance: ['LOLER 1998', 'PUWER 1998'],
  },
  {
    id: 'training-policy',
    name: 'Training Policy',
    icon: BookOpen,
    category: 'Development',
    description:
      'Health and safety training requirements and competency management',
    compliance: ['Training Standards', 'Competency Framework'],
  },
];

export const policyServices: PolicyService[] = [
  {
    title: 'Custom Policy Development',
    description:
      'Tailored health and safety policies designed specifically for your industry and workplace requirements.',
    icon: FileText,
    bgColor: 'bg-gradient-to-br from-[#ED2568] to-[#EE343B]',
    features: [
      'Industry-specific content',
      'Legal compliance',
      'Regular updates',
      'Digital formats',
    ],
  },
  {
    title: 'Policy Review & Updates',
    description:
      'Regular review and updating of existing policies to ensure continued compliance and effectiveness.',
    icon: CheckCircle,
    bgColor: 'bg-gradient-to-br from-[#FFC857] to-[#ED2568]',
    features: [
      'Annual reviews',
      'Compliance updates',
      'Gap analysis',
      'Version control',
    ],
  },
  {
    title: 'Implementation Support',
    description:
      'Comprehensive support to help you implement new policies effectively across your organization.',
    icon: Target,
    bgColor: 'bg-gradient-to-br from-[#1C1F2A] to-[#ED2568]',
    features: [
      'Staff training',
      'Communication plans',
      'Monitoring systems',
      'Performance metrics',
    ],
  },
  {
    title: 'Digital Policy Management',
    description:
      'Modern digital solutions for policy distribution, tracking, and management across your workforce.',
    icon: Globe,
    bgColor: 'bg-gradient-to-br from-[#ED2568] to-[#FFC857]',
    features: [
      'Online access',
      'Version control',
      'Read receipts',
      'Mobile compatibility',
    ],
  },
  {
    title: 'Compliance Monitoring',
    description:
      'Ongoing monitoring and reporting to ensure your policies remain compliant with current legislation.',
    icon: TrendingUp,
    bgColor: 'bg-gradient-to-br from-[#FFC857] to-[#EE343B]',
    features: [
      'Regular audits',
      'Compliance reports',
      'Action plans',
      'Continuous improvement',
    ],
  },
  {
    title: 'Expert Consultation',
    description:
      'Access to our team of health and safety experts for guidance and support with policy matters.',
    icon: Award,
    bgColor: 'bg-gradient-to-br from-[#1C1F2A] to-[#FFC857]',
    features: [
      'Expert advice',
      'Best practice guidance',
      'Industry insights',
      '24/7 support',
    ],
  },
];

export const policyBenefits: PolicyBenefit[] = [
  {
    title: 'Legal Compliance',
    description:
      'Ensure your organization meets all current health and safety legislation requirements.',
    icon: Lock,
    stats: {
      value: '100%',
      label: 'Compliance Rate',
    },
  },
  {
    title: 'Risk Reduction',
    description:
      'Significantly reduce workplace risks and potential for accidents through clear policies.',
    icon: Shield,
    stats: {
      value: '75%',
      label: 'Risk Reduction',
    },
  },
  {
    title: 'Cost Savings',
    description:
      'Reduce insurance premiums and potential legal costs through proactive policy management.',
    icon: TrendingUp,
    stats: {
      value: '£50K',
      label: 'Average Savings',
    },
  },
  {
    title: 'Staff Confidence',
    description:
      'Increase employee confidence and satisfaction through clear safety guidelines.',
    icon: Users,
    stats: {
      value: '90%',
      label: 'Staff Satisfaction',
    },
  },
  {
    title: 'Operational Efficiency',
    description:
      'Streamline operations with clear procedures and responsibilities.',
    icon: Clock,
    stats: {
      value: '30%',
      label: 'Efficiency Gain',
    },
  },
  {
    title: 'Reputation Protection',
    description:
      "Protect your company's reputation through demonstrated commitment to safety.",
    icon: Award,
    stats: {
      value: '5★',
      label: 'Safety Rating',
    },
  },
];

export const policyPackages = [
  {
    name: 'Starter Package',
    price: '£850',
    duration: '1-2 weeks',
    policies: 5,
    features: [
      '5 Core Health & Safety Policies',
      'Basic Implementation Guide',
      'Email Support',
      '1 Year Updates',
      'Digital Delivery',
    ],
    popular: false,
    color: 'from-[#1C1F2A] to-[#ED2568]',
  },
  {
    name: 'Professional Package',
    price: '£1,450',
    duration: '2-3 weeks',
    policies: 10,
    features: [
      '10 Comprehensive Policies',
      'Detailed Implementation Support',
      'Phone & Email Support',
      '2 Years Updates',
      'Training Materials Included',
      'Policy Review Session',
    ],
    popular: true,
    color: 'from-[#ED2568] to-[#EE343B]',
  },
  {
    name: 'Enterprise Package',
    price: '£2,250',
    duration: '3-4 weeks',
    policies: 15,
    features: [
      '15+ Custom Policies',
      'Full Implementation Support',
      'Dedicated Account Manager',
      'Unlimited Updates',
      'Staff Training Program',
      'Quarterly Reviews',
      '24/7 Support Hotline',
    ],
    popular: false,
    color: 'from-[#FFC857] to-[#ED2568]',
  },
];

export const contactInfo = {
  phone: '0800 123 4567',
  email: 'policies@company.com',
  address: '123 Safety Street, Business District, City, ABC 123',
};
