import {
  Shield,
  FileText,
  Users,
  Phone,
  Mail,
  MapPin,
  Award,
  Lock,
  TrendingUp,
  Eye,
  Heart,
  Clock,
  Target,
} from 'lucide-react';

export interface InsuranceCoverage {
  id: string;
  title: string;
  amount: string;
  description: string;
  icon: any;
  features: string[];
  color: string;
}

export interface CompanyInfo {
  name: string;
  registrationNumber: string;
  address: string;
  phone: string;
  mobile: string;
  email: string;
}

export interface InsuranceBenefit {
  title: string;
  description: string;
  icon: any;
  stats?: {
    value: string;
    label: string;
  };
}

export interface InsuranceService {
  title: string;
  description: string;
  icon: any;
  bgColor: string;
  features: string[];
}

export const insuranceCoverages: InsuranceCoverage[] = [
  {
    id: 'public-liability',
    title: 'Public Liability Insurance',
    amount: '£5,000,000',
    description:
      'Comprehensive protection against third-party claims for injury or property damage during our consultancy services.',
    icon: Shield,
    features: [
      'Third-party injury claims',
      'Property damage protection',
      'Legal defense costs',
      'Nationwide coverage',
      'Professional activities',
    ],
    color: 'from-[#ED2568] to-[#EE343B]',
  },
  {
    id: 'products-liability',
    title: 'Products Liability Insurance',
    amount: '£5,000,000',
    description:
      'Coverage for any claims arising from our consulting advice, recommendations, or delivered solutions.',
    icon: FileText,
    features: [
      'Professional advice coverage',
      'Recommendation protection',
      'Solution delivery claims',
      'Documentation liability',
      'Implementation support',
    ],
    color: 'from-[#FFC857] to-[#ED2568]',
  },
  {
    id: 'employers-liability',
    title: 'Employers Liability Insurance',
    amount: '£10,000,000',
    description:
      'Protection for our employees and contractors working on client sites and projects.',
    icon: Users,
    features: [
      'Employee injury claims',
      'Workplace accident coverage',
      'Contractor protection',
      'On-site work coverage',
      'Legal compliance',
    ],
    color: 'from-[#1C1F2A] to-[#ED2568]',
  },
];

export const companyInfo: CompanyInfo = {
  name: 'CiTRiX Consultancy Services Ltd',
  registrationNumber: 'SC472028',
  address: '272 Bath Street, Glasgow, Scotland, G2 4JR',
  phone: '02085755544',
  mobile: '07446131794',
  email: 'admin@citrix-consulting-limited.co.uk',
};

export const insuranceBenefits: InsuranceBenefit[] = [
  {
    title: 'Complete Protection',
    description:
      'Comprehensive insurance coverage across all aspects of our consultancy services and operations.',
    icon: Shield,
    stats: {
      value: '£20M',
      label: 'Total Coverage',
    },
  },
  {
    title: 'Client Peace of Mind',
    description:
      'Full assurance that your projects are protected against unforeseen circumstances and claims.',
    icon: Heart,
    stats: {
      value: '100%',
      label: 'Client Protection',
    },
  },
  {
    title: 'Legal Compliance',
    description:
      'Meeting all regulatory requirements and industry standards for professional consultancy services.',
    icon: Lock,
    stats: {
      value: '24/7',
      label: 'Coverage Active',
    },
  },
  {
    title: 'Risk Mitigation',
    description:
      'Proactive approach to identifying and mitigating potential risks before they become issues.',
    icon: Target,
    stats: {
      value: '0',
      label: 'Uncovered Claims',
    },
  },
  {
    title: 'Professional Standards',
    description:
      'Maintaining the highest professional standards with appropriate insurance backing.',
    icon: Award,
    stats: {
      value: 'A+',
      label: 'Insurance Rating',
    },
  },
  {
    title: 'Rapid Response',
    description:
      'Quick claim processing and response times to minimize any potential business disruption.',
    icon: Clock,
    stats: {
      value: '24hrs',
      label: 'Response Time',
    },
  },
];

export const insuranceServices: InsuranceService[] = [
  {
    title: 'Certificate Provision',
    description:
      'We provide insurance certificates to clients upon request for project documentation and compliance.',
    icon: FileText,
    bgColor: 'bg-gradient-to-br from-[#ED2568] to-[#EE343B]',
    features: [
      'Instant certificate generation',
      'Digital delivery',
      'Compliance documentation',
      'Project requirements',
    ],
  },
  {
    title: 'Risk Assessment',
    description:
      'Comprehensive risk assessment before project commencement to ensure appropriate coverage.',
    icon: Eye,
    bgColor: 'bg-gradient-to-br from-[#FFC857] to-[#ED2568]',
    features: [
      'Pre-project evaluation',
      'Risk identification',
      'Coverage verification',
      'Mitigation strategies',
    ],
  },
  {
    title: 'Claims Support',
    description:
      'Full support throughout any claims process with dedicated assistance and expert guidance.',
    icon: Users,
    bgColor: 'bg-gradient-to-br from-[#1C1F2A] to-[#ED2568]',
    features: [
      'Dedicated claims handler',
      'Expert guidance',
      'Documentation support',
      'Resolution tracking',
    ],
  },
  {
    title: 'Coverage Updates',
    description:
      'Regular review and updates of insurance coverage to ensure continued adequacy and compliance.',
    icon: TrendingUp,
    bgColor: 'bg-gradient-to-br from-[#ED2568] to-[#FFC857]',
    features: [
      'Annual reviews',
      'Coverage adjustments',
      'Policy updates',
      'Compliance monitoring',
    ],
  },
];

export const whyChooseUs = [
  'Comprehensive insurance coverage exceeding industry standards',
  'Registered limited company with full legal compliance',
  'Professional indemnity protection for all services',
  'Complete client peace of mind and project protection',
  'Regulatory compliance across all operational areas',
  'Immediate certificate provision for project requirements',
  'Expert claims support and rapid response times',
  'Regular coverage reviews and policy updates',
];

export const contactMethods = [
  {
    type: 'Phone',
    icon: Phone,
    label: 'Call us at',
    value: companyInfo.phone,
    action: 'tel:' + companyInfo.phone,
  },
  {
    type: 'Mobile',
    icon: Phone,
    label: 'Mobile contact',
    value: companyInfo.mobile,
    action: 'tel:' + companyInfo.mobile,
  },
  {
    type: 'Email',
    icon: Mail,
    label: 'Email us at',
    value: companyInfo.email,
    action: 'mailto:' + companyInfo.email,
  },
  {
    type: 'Address',
    icon: MapPin,
    label: 'Visit us at',
    value: companyInfo.address,
    action: '#',
  },
];
