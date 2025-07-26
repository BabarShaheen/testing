export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  badge: string;
  timeline: string;
  pricing: string;
  features: string[];
  color: string;
  benefits: string[];
  process: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  relatedServices: Array<{
    name: string;
    price: string;
    id: string;
  }>;
  stats: {
    successRate: string;
    clientRating: string;
    avgProjectTime: string;
    clientsServed: string;
  };
}

export const servicesData: Service[] = [
  {
    id: 'iso-9001',
    title: 'ISO 9001 Certification',
    subtitle: 'Quality Management System Certification',
    description: 'Achieve ISO 9001 certification to demonstrate your commitment to quality management and customer satisfaction.',
    iconName: 'Shield',
    badge: 'Most Popular',
    timeline: '6-8 weeks',
    pricing: 'Starting from £2,500',
    features: ['Process optimization', 'Customer satisfaction', 'Continuous improvement', 'International recognition'],
    color: 'bg-blue-50/50 border-teal-light/30',
    benefits: [
      'Improved quality management processes',
      'Enhanced customer satisfaction',
      'Increased operational efficiency',
      'Better risk management',
      'International recognition',
      'Competitive advantage'
    ],
    process: [
      {
        step: 1,
        title: 'Initial Consultation',
        description: 'Free consultation to understand your requirements and assess your current quality management system.'
      },
      {
        step: 2,
        title: 'Gap Analysis',
        description: 'Comprehensive analysis to identify gaps between your current processes and ISO 9001 requirements.'
      },
      {
        step: 3,
        title: 'Documentation',
        description: 'Development of quality manual, procedures, and work instructions tailored to your organization.'
      },
      {
        step: 4,
        title: 'Implementation',
        description: 'Support during implementation phase including staff training and process optimization.'
      },
      {
        step: 5,
        title: 'Internal Audit',
        description: 'Conduct internal audits to ensure compliance and readiness for certification audit.'
      },
      {
        step: 6,
        title: 'Certification',
        description: 'Support during external certification audit and ongoing maintenance of your ISO 9001 system.'
      }
    ],
    relatedServices: [
      { name: 'Environmental Management', price: '£2,800', id: 'environmental-management' },
      { name: 'Health & Safety Consulting', price: '£3,200', id: 'health-safety-consulting' },
      { name: 'Quality Assurance', price: '£2,200', id: 'quality-assurance' }
    ],
    stats: {
      successRate: '98%',
      clientRating: '4.9/5',
      avgProjectTime: '7 weeks',
      clientsServed: '250+'
    }
  },
  {
    id: 'chas-accreditation',
    title: 'CHAS Accreditation',
    subtitle: 'Contractor Health and Safety Assessment Scheme',
    description: 'Obtain CHAS accreditation to demonstrate your health and safety compliance.',
    iconName: 'Award',
    badge: 'Essential',
    timeline: '4-6 weeks',
    pricing: 'Starting from £1,800',
    features: ['Health & safety compliance', 'Tender opportunities', 'Risk reduction', 'Industry recognition'],
    color: 'bg-green-50/50 border-leaf-green/30',
    benefits: [
      'Access to more tender opportunities',
      'Reduced insurance premiums',
      'Improved health and safety standards',
      'Enhanced reputation',
      'Compliance with regulations',
      'Competitive advantage'
    ],
    process: [
      {
        step: 1,
        title: 'Pre-Assessment',
        description: 'Review your current health and safety policies and procedures.'
      },
      {
        step: 2,
        title: 'Documentation Review',
        description: 'Comprehensive review and development of health and safety documentation.'
      },
      {
        step: 3,
        title: 'Policy Development',
        description: 'Creation or improvement of health and safety policies.'
      },
      {
        step: 4,
        title: 'Application Support',
        description: 'Complete support through the CHAS application process.'
      },
      {
        step: 5,
        title: 'Assessment Preparation',
        description: 'Preparation for CHAS assessment including mock assessments.'
      },
      {
        step: 6,
        title: 'Ongoing Support',
        description: 'Continued support for annual reviews and maintenance.'
      }
    ],
    relatedServices: [
      { name: 'Health & Safety Consulting', price: '£150/hour', id: 'health-safety-consulting' },
      { name: 'Fire Risk Assessment', price: '£450', id: 'fire-risk-assessment' },
      { name: 'Risk Management', price: '£1,950', id: 'risk-management' }
    ],
    stats: {
      successRate: '96%',
      clientRating: '4.8/5',
      avgProjectTime: '5 weeks',
      clientsServed: '180+'
    }
  },
  {
    id: 'fire-risk-assessment',
    title: 'Fire Risk Assessment',
    subtitle: 'Comprehensive Fire Safety Compliance',
    description: 'Professional fire risk assessments to ensure compliance with fire safety regulations.',
    iconName: 'FileText',
    badge: 'Required',
    timeline: '1-2 weeks',
    pricing: 'Starting from £450',
    features: ['Legal compliance', 'Risk identification', 'Action plans', 'Regular reviews'],
    color: 'bg-red-50/50 border-orange/30',
    benefits: [
      'Legal compliance with fire safety regulations',
      'Reduced risk of fire incidents',
      'Insurance premium reductions',
      'Enhanced occupant safety',
      'Clear action plans',
      'Professional certification'
    ],
    process: [
      {
        step: 1,
        title: 'Site Survey',
        description: 'Comprehensive survey of your premises to identify fire hazards.'
      },
      {
        step: 2,
        title: 'Risk Analysis',
        description: 'Detailed analysis of identified risks and their potential impact.'
      },
      {
        step: 3,
        title: 'Assessment Report',
        description: 'Comprehensive report detailing findings and recommended actions.'
      },
      {
        step: 4,
        title: 'Action Plan',
        description: 'Prioritized action plan with timelines for addressing issues.'
      },
      {
        step: 5,
        title: 'Implementation Support',
        description: 'Guidance and support during implementation of safety measures.'
      },
      {
        step: 6,
        title: 'Review & Monitoring',
        description: 'Regular reviews and updates to ensure continued compliance.'
      }
    ],
    relatedServices: [
      { name: 'Health & Safety Consulting', price: '£150/hour', id: 'health-safety-consulting' },
      { name: 'Risk Management', price: '£1,950', id: 'risk-management' },
      { name: 'CHAS Accreditation', price: '£1,800', id: 'chas-accreditation' }
    ],
    stats: {
      successRate: '100%',
      clientRating: '4.9/5',
      avgProjectTime: '1.5 weeks',
      clientsServed: '500+'
    }
  },
  {
    id: 'health-safety-consulting',
    title: 'Health & Safety Consulting',
    subtitle: 'Expert Health and Safety Advisory Services',
    description: 'Comprehensive health and safety consulting to protect your workforce and ensure compliance.',
    iconName: 'CheckCircle',
    badge: 'Core Service',
    timeline: 'Ongoing',
    pricing: 'Starting from £150/hour',
    features: ['Risk assessments', 'Policy development', 'Training programs', 'Ongoing support'],
    color: 'bg-orange-50/50 border-orange/30',
    benefits: [
      'Reduced workplace accidents',
      'Lower insurance premiums',
      'Improved employee morale',
      'Legal compliance',
      'Enhanced reputation',
      'Professional support'
    ],
    process: [
      {
        step: 1,
        title: 'Initial Consultation',
        description: 'Assessment of your current health and safety arrangements.'
      },
      {
        step: 2,
        title: 'Risk Assessment',
        description: 'Comprehensive risk assessments across all areas of operations.'
      },
      {
        step: 3,
        title: 'Policy Development',
        description: 'Development of health and safety policies for your business.'
      },
      {
        step: 4,
        title: 'Training Programs',
        description: 'Customized training programs for management and staff.'
      },
      {
        step: 5,
        title: 'Implementation',
        description: 'Support during implementation of health and safety measures.'
      },
      {
        step: 6,
        title: 'Ongoing Support',
        description: 'Continuous support, monitoring, and updates.'
      }
    ],
    relatedServices: [
      { name: 'CHAS Accreditation', price: '£1,800', id: 'chas-accreditation' },
      { name: 'Fire Risk Assessment', price: '£450', id: 'fire-risk-assessment' },
      { name: 'Risk Management', price: '£1,950', id: 'risk-management' }
    ],
    stats: {
      successRate: '97%',
      clientRating: '4.9/5',
      avgProjectTime: 'Ongoing',
      clientsServed: '400+'
    }
  },
  {
    id: 'environmental-management',
    title: 'Environmental Management',
    subtitle: 'ISO 14001 Environmental Management Systems',
    description: 'Implement ISO 14001 environmental management systems to reduce your environmental impact.',
    iconName: 'Leaf',
    badge: 'Sustainable',
    timeline: '8-10 weeks',
    pricing: 'Starting from £2,800',
    features: ['Environmental compliance', 'Waste reduction', 'Energy efficiency', 'Sustainability reporting'],
    color: 'bg-emerald-50/50 border-leaf-green/30',
    benefits: [
      'Reduced environmental impact',
      'Cost savings through efficiency',
      'Enhanced brand reputation',
      'Regulatory compliance',
      'Improved stakeholder relations',
      'Competitive advantage'
    ],
    process: [
      {
        step: 1,
        title: 'Environmental Review',
        description: 'Comprehensive review of your environmental aspects and impacts.'
      },
      {
        step: 2,
        title: 'Gap Analysis',
        description: 'Analysis of current practices against ISO 14001 requirements.'
      },
      {
        step: 3,
        title: 'System Development',
        description: 'Development of environmental management system documentation.'
      },
      {
        step: 4,
        title: 'Implementation',
        description: 'Implementation of environmental management procedures.'
      },
      {
        step: 5,
        title: 'Training & Awareness',
        description: 'Staff training and awareness programs.'
      },
      {
        step: 6,
        title: 'Certification',
        description: 'Support through ISO 14001 certification process.'
      }
    ],
    relatedServices: [
      { name: 'ISO 9001 Certification', price: '£2,500', id: 'iso-9001' },
      { name: 'Health & Safety Consulting', price: '£150/hour', id: 'health-safety-consulting' },
      { name: 'Quality Assurance', price: '£2,200', id: 'quality-assurance' }
    ],
    stats: {
      successRate: '95%',
      clientRating: '4.8/5',
      avgProjectTime: '9 weeks',
      clientsServed: '120+'
    }
  },
  {
    id: 'quality-assurance',
    title: 'Quality Assurance',
    subtitle: 'Comprehensive Quality Management Solutions',
    description: 'Implement comprehensive quality assurance programs to ensure consistent quality standards.',
    iconName: 'Target',
    badge: 'Excellence',
    timeline: '6-8 weeks',
    pricing: 'Starting from £2,200',
    features: ['Quality systems', 'Process control', 'Customer satisfaction', 'Continuous improvement'],
    color: 'bg-indigo-50/50 border-teal-dark/30',
    benefits: [
      'Improved product quality',
      'Enhanced customer satisfaction',
      'Reduced defects and rework',
      'Increased efficiency',
      'Better supplier relationships',
      'Competitive advantage'
    ],
    process: [
      {
        step: 1,
        title: 'Quality Assessment',
        description: 'Assessment of current quality management practices.'
      },
      {
        step: 2,
        title: 'System Design',
        description: 'Design of quality assurance systems for your operations.'
      },
      {
        step: 3,
        title: 'Process Development',
        description: 'Development of quality control processes and procedures.'
      },
      {
        step: 4,
        title: 'Implementation',
        description: 'Implementation of quality assurance systems and training.'
      },
      {
        step: 5,
        title: 'Monitoring & Control',
        description: 'Establishment of monitoring and control systems.'
      },
      {
        step: 6,
        title: 'Continuous Improvement',
        description: 'Ongoing support for continuous improvement initiatives.'
      }
    ],
    relatedServices: [
      { name: 'ISO 9001 Certification', price: '£2,500', id: 'iso-9001' },
      { name: 'Risk Management', price: '£1,950', id: 'risk-management' },
      { name: 'Environmental Management', price: '£2,800', id: 'environmental-management' }
    ],
    stats: {
      successRate: '96%',
      clientRating: '4.9/5',
      avgProjectTime: '7 weeks',
      clientsServed: '200+'
    }
  },
  {
    id: 'risk-management',
    title: 'Risk Management',
    subtitle: 'Comprehensive Business Risk Management',
    description: 'Implement comprehensive risk management solutions to identify, assess, and mitigate business risks.',
    iconName: 'Clock',
    badge: 'Strategic',
    timeline: '4-6 weeks',
    pricing: 'Starting from £1,950',
    features: ['Risk identification', 'Risk assessment', 'Mitigation strategies', 'Monitoring systems'],
    color: 'bg-yellow-50/50 border-orange/30',
    benefits: [
      'Reduced business risks',
      'Better decision making',
      'Improved resilience',
      'Enhanced reputation',
      'Regulatory compliance',
      'Competitive advantage'
    ],
    process: [
      {
        step: 1,
        title: 'Risk Identification',
        description: 'Comprehensive identification of risks across all business areas.'
      },
      {
        step: 2,
        title: 'Risk Assessment',
        description: 'Assessment of identified risks in terms of likelihood and impact.'
      },
      {
        step: 3,
        title: 'Risk Analysis',
        description: 'Detailed analysis of risks and their potential consequences.'
      },
      {
        step: 4,
        title: 'Mitigation Planning',
        description: 'Development of risk mitigation strategies and action plans.'
      },
      {
        step: 5,
        title: 'Implementation',
        description: 'Implementation of risk management measures and controls.'
      },
      {
        step: 6,
        title: 'Monitoring & Review',
        description: 'Ongoing monitoring and review of risk management effectiveness.'
      }
    ],
    relatedServices: [
      { name: 'Health & Safety Consulting', price: '£150/hour', id: 'health-safety-consulting' },
      { name: 'Fire Risk Assessment', price: '£450', id: 'fire-risk-assessment' },
      { name: 'Quality Assurance', price: '£2,200', id: 'quality-assurance' }
    ],
    stats: {
      successRate: '97%',
      clientRating: '4.8/5',
      avgProjectTime: '5 weeks',
      clientsServed: '300+'
    }
  }
];

export const getServiceById = (id: string | null): Service | null => {
  if (!id) return null;
  return servicesData.find(service => service.id === id) || null;
};