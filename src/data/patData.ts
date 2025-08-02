import {
  Shield,
  CheckCircle,
  Award,
  Clock,
  TrendingUp,
  Users,
  Coffee,
  Plug,
  Wind,
  Wrench,
  Laptop,
  Cog,
} from 'lucide-react';

export type BenefitItem = {
  icon: any;
  title: string;
  description: string;
  bgColor: string;
};

export type ApplianceItem = {
  name: string;
  icon: any;
};

export type TierItem = {
  range: string;
  price: string;
};

export const benefits: BenefitItem[] = [
  {
    icon: Shield,
    title: 'Legal Compliance',
    description:
      'Meet the Electricity at Work Regulations 1989 requirements and protect your business from legal liability.',
    bgColor: 'from-[#007E7A] to-[#00C4B3]',
  },
  {
    icon: CheckCircle,
    title: 'Employee Safety',
    description:
      'Ensure the safety of your employees and prevent electrical accidents in the workplace.',
    bgColor: 'from-[#1BB66E] to-[#007E7A]',
  },
  {
    icon: Award,
    title: 'Professional Certification',
    description:
      'Receive comprehensive certification and computerized records for all tested appliances.',
    bgColor: 'from-[#F7941E] to-[#1BB66E]',
  },
  {
    icon: Clock,
    title: '1 Year Validity',
    description:
      'Each appliance receives a pass/fail sticker valid for up to 12 months for ongoing peace of mind.',
    bgColor: 'from-[#1E2A3A] to-[#007E7A]',
  },
  {
    icon: TrendingUp,
    title: 'Cost-Effective',
    description:
      'Affordable bundle testing options to ensure all appliances are checked efficiently at once.',
    bgColor: 'from-[#00C4B3] to-[#1BB66E]',
  },
  {
    icon: Users,
    title: 'Peace of Mind',
    description:
      'Professional management and high-tech computerized testing equipment for complete confidence.',
    bgColor: 'from-[#007E7A] to-[#F7941E]',
  },
];

export const legislation: string[] = [
  'The Health & Safety at Work Act 1974',
  'The Management of Health & Safety at Work Regulations 1999',
  'The Electricity at Work Regulations 1989',
  'The Workplace (Health, Safety and Welfare) Regulations 1992',
  'The Provision and Use of Work Equipment Regulations 1998',
];

export const appliances: ApplianceItem[] = [
  { name: 'Kettles & Kitchen Equipment', icon: Coffee },
  { name: 'White Goods', icon: Plug },
  { name: 'Vacuum Cleaners', icon: Wind },
  { name: 'Power Tools', icon: Wrench },
  { name: 'Business Equipment', icon: Laptop },
  { name: 'Machinery (110v & 240v)', icon: Cog },
];
export const tier: TierItem[] = [
  { range: '15-50', price: '£1.50' },
  { range: '51-100', price: '£1.35' },
  { range: '101-500', price: '£0.95' },
  { range: '501-1000', price: '£0.80' },
  { range: '1000+', price: '£0.75' },
];
