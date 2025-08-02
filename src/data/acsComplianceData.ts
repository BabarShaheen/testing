// data/siaComplianceData.ts
import {
  ClipboardCheck,
  FileText,
  Users,
  Settings,
  Zap,
  Bell,
  Headphones,
} from 'lucide-react';

export type ServiceItem = {
  icon: any;
  title: string;
  description: string;
};

export const complianceServices: ServiceItem[] = [
  {
    icon: ClipboardCheck,
    title: 'Initial Assessment',
    description: 'Assessment of your compliance system',
  },
  {
    icon: FileText,
    title: 'British Standards Integration',
    description: 'Integration of additional British Standards into your system',
  },
  {
    icon: Users,
    title: 'Quality Manager Support',
    description: 'Acting as your Quality Manager, attending AGM meetings',
  },
  {
    icon: Settings,
    title: 'Internal Audits',
    description: 'Internal audits and on-site system reviews',
  },
  {
    icon: Zap,
    title: 'System Updates',
    description: 'Updating systems to match operational and business changes',
  },
  {
    icon: Bell,
    title: 'Monthly Updates',
    description: 'Monthly newsletters and compliance updates',
  },
  {
    icon: FileText,
    title: 'Document Support',
    description: 'Formatting and adding new documents on request',
  },
  {
    icon: Users,
    title: 'Staff Survey Support',
    description: 'Quarterly staff survey and appraisal reporting support',
  },
  {
    icon: Headphones,
    title: 'Ongoing Support',
    description: 'Ongoing telephone and email support for compliance queries',
  },
];
