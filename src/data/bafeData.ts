import {
  ClipboardCheck,
  Eye,
  BadgeCheck,
  Award,
  Globe,
  Shield,
  Target,
  Users,
} from 'lucide-react';

export const consultancySteps = [
  {
    step: 'Step 1',
    title: 'Check Requirements',
    description:
      'Do you have competent systems in place? For this scheme you do not need ISO9001 certification. However, you are required to have robust Quality Management Systems in place. We will help to implement quality management system to support BAFE SP205.',
    icon: ClipboardCheck,
    bgColor: 'bg-orange',
  },
  {
    step: 'Step 2',
    title: 'Audit Compliance',
    description: 'Audit compliance from certification bodies Listed with BAFE.',
    icon: Eye,
    bgColor: 'bg-leaf-green',
  },
  {
    step: 'Step 3',
    title: 'Achieve Certification',
    description:
      'When you have achieved certification, your Certification Body will contact BAFE with your information.',
    icon: BadgeCheck,
    bgColor: 'bg-teal-dark',
  },
  {
    step: 'Step 4',
    title: 'Receive Welcome Pack',
    description:
      'BAFE will then send out a welcome pack including your BAFE certificate. At this point you will be allowed to display the correct BAFE logo that relates to your scheme.',
    icon: Award,
    bgColor: 'bg-navy-blue',
  },
  {
    step: 'Step 5',
    title: 'Website Listing',
    description:
      "Your company will then be added to the BAFE website, which will enable all users searching for Third Party Certified BAFE registered fire protection companies to access your companies' information.",
    icon: Globe,
    bgColor: 'bg-teal-light',
  },
];

export const Benefits = [
  {
    icon: Shield,
    title: 'Legal Compliance',
    description:
      'Meet the legal requirements for competent fire risk assessment provision.',
    bgColor: 'bg-orange',
  },
  {
    icon: Award,
    title: 'Industry Recognition',
    description:
      'Gain official recognition from the leading fire safety certification body.',
    bgColor: 'bg-leaf-green',
  },
  {
    icon: Target,
    title: 'Responsible Person Confidence',
    description: 'Provide assurance to Responsible Persons and Duty Holders.',
    bgColor: 'bg-teal-dark',
  },
  {
    icon: Globe,
    title: 'BAFE Website Listing',
    description:
      'Featured on the official BAFE directory for increased visibility.',
    bgColor: 'bg-orange',
  },
  {
    icon: BadgeCheck,
    title: 'Quality Assurance',
    description: 'Demonstrate technical and quality management capabilities.',
    bgColor: 'bg-leaf-green',
  },
  {
    icon: Users,
    title: 'Market Access',
    description:
      'Access clients who specifically require BAFE-registered providers.',
    bgColor: 'bg-teal-dark',
  },
];
