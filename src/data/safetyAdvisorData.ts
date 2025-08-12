import {
  LucideIcon,
  Shield,
  ShieldCheck,
  CheckCircle,
  Users,
  FileText,
  Award,
  ArrowRight,
} from 'lucide-react';

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  badge: string;
}

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

export const benefits: Benefit[] = [
  {
    icon: Shield,
    title: 'Expert Knowledge',
    description:
      'Our qualified safety advisers have extensive experience across various industries.',
    image: '/Images/services/expert1_optimized.webp',
  },
  {
    icon: CheckCircle,
    title: 'Compliance Assurance',
    description:
      'Ensure your business meets all health and safety regulatory requirements.',
    image: '/Images/services/handshake_optimized.webp',
  },
  {
    icon: Users,
    title: 'Workforce Protection',
    description:
      'Protect your employees and create a safe working environment.',
    image: '/Images/services/workforce_optimized.webp',
  },
  {
    icon: FileText,
    title: 'Documentation Support',
    description: 'Comprehensive documentation and policy development services.',
    image: '/Images/services/documentation_optimized.webp',
  },
  {
    icon: Award,
    title: 'Professional Recognition',
    description:
      'Achieve industry recognition and enhance your business reputation.',
    image: '/Images/services/recognition_optimized.webp',
  },
  {
    icon: ArrowRight,
    title: 'Ongoing Support',
    description:
      'Continuous support and monitoring to maintain safety standards.',
    image: '/Images/services/monitoring_optimized.webp',
  },
];

export const services: Service[] = [
  {
    id: 'safety-adviser',
    icon: Shield,
    title: 'Safety Adviser',
    description:
      'Comprehensive health and safety advisory services for your business.',
    price: 'From £150/hour',
    badge: 'Core Service',
  },
  {
    id: 'safety-advisor/health-safety',
    icon: ShieldCheck, // Heroicons or Lucide's safety/security icon
    title: 'Health and Safety',
    description:
      'Comprehensive workplace safety assessments, risk management, and compliance solutions.',
    price: 'From £2,200',
    badge: 'Professional',
  },

  {
    id: 'safety-advisor/chas-assistance',
    icon: Award,
    title: 'CHAS Assistance',
    description: 'Professional assistance to obtain CHAS accreditation.',
    price: 'From £1,800',
    badge: 'Essential',
  },
];
