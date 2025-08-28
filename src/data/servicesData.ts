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
  // SMAS Accreditation Service
  {
    id: 'smas-accreditation',
    title: 'SMAS Accreditation',
    subtitle: 'Safety Management Advisory Services',
    description:
      'Professional support to achieve SMAS accreditation and demonstrate your health and safety compliance.',
    iconName: 'Award',
    badge: 'Essential',
    timeline: '4-6 weeks',
    pricing: 'Starting from £1,800',
    features: [
      'Health & safety compliance',
      'Tender opportunities',
      'Risk reduction',
      'Industry recognition',
    ],
    color: 'bg-green-50/50 border-leaf-green/30',
    benefits: [
      'Access to more tender opportunities',
      'Reduced insurance premiums',
      'Improved health and safety standards',
      'Enhanced reputation',
      'Compliance with regulations',
      'Competitive advantage',
    ],
    process: [
      {
        step: 1,
        title: 'Pre-Assessment',
        description:
          'Review your current health and safety policies and procedures.',
      },
      {
        step: 2,
        title: 'Documentation Review',
        description:
          'Comprehensive review and development of health and safety documentation.',
      },
      {
        step: 3,
        title: 'Policy Development',
        description: 'Creation or improvement of health and safety policies.',
      },
      {
        step: 4,
        title: 'Application Support',
        description: 'Complete support through the SMAS application process.',
      },
      {
        step: 5,
        title: 'Assessment Preparation',
        description:
          'Preparation for SMAS assessment including mock assessments.',
      },
      {
        step: 6,
        title: 'Ongoing Support',
        description: 'Continued support for annual reviews and maintenance.',
      },
    ],
    relatedServices: [
      { name: 'Safety Adviser', price: '£150/hour', id: 'safety-adviser' },
      {
        name: 'Accreditation Support',
        price: '£2,200',
        id: 'accreditation-support',
      },
      { name: 'Risk Assessments', price: '£450', id: 'risk-assessments' },
    ],
    stats: {
      successRate: '96%',
      clientRating: '4.8/5',
      avgProjectTime: '5 weeks',
      clientsServed: '180+',
    },
  },
  // Acclaim Accreditation Service
  {
    id: 'acclaim-accreditation',
    title: 'Acclaim Accreditation',
    subtitle: 'Acclaim Accreditation Services',
    description:
      'Professional support to achieve Acclaim accreditation and demonstrate your health and safety compliance.',
    iconName: 'Award',
    badge: 'Essential',
    timeline: '4-6 weeks',
    pricing: 'Starting from £1,800',
    features: [
      'Health & safety compliance',
      'Tender opportunities',
      'Risk reduction',
      'Industry recognition',
    ],
    color: 'bg-blue-50/50 border-blue/30',
    benefits: [
      'Access to more tender opportunities',
      'Reduced insurance premiums',
      'Improved health and safety standards',
      'Enhanced reputation',
      'Compliance with regulations',
      'Competitive advantage',
    ],
    process: [
      {
        step: 1,
        title: 'Pre-Assessment',
        description:
          'Review your current health and safety policies and procedures.',
      },
      {
        step: 2,
        title: 'Documentation Review',
        description:
          'Comprehensive review and development of health and safety documentation.',
      },
      {
        step: 3,
        title: 'Policy Development',
        description: 'Creation or improvement of health and safety policies.',
      },
      {
        step: 4,
        title: 'Application Support',
        description:
          'Complete support through the Acclaim application process.',
      },
      {
        step: 5,
        title: 'Assessment Preparation',
        description:
          'Preparation for Acclaim assessment including mock assessments.',
      },
      {
        step: 6,
        title: 'Ongoing Support',
        description: 'Continued support for annual reviews and maintenance.',
      },
    ],
    relatedServices: [
      { name: 'Safety Adviser', price: '£150/hour', id: 'safety-adviser' },
      {
        name: 'Accreditation Support',
        price: '£2,200',
        id: 'accreditation-support',
      },
      { name: 'Risk Assessments', price: '£450', id: 'risk-assessments' },
    ],
    stats: {
      successRate: '95%',
      clientRating: '4.7/5',
      avgProjectTime: '5 weeks',
      clientsServed: '150+',
    },
  },
  // Constructionline Accreditation Service
  {
    id: 'constructionline-accreditation',
    title: 'Constructionline Accreditation',
    subtitle: 'Constructionline Accreditation Services',
    description:
      'Professional support to achieve Constructionline accreditation and demonstrate your compliance with industry standards.',
    iconName: 'Award',
    badge: 'Essential',
    timeline: '4-6 weeks',
    pricing: 'Starting from £1,800',
    features: [
      'Industry compliance',
      'Tender opportunities',
      'Risk reduction',
      'Industry recognition',
    ],
    color: 'bg-purple-50/50 border-purple/30',
    benefits: [
      'Access to more tender opportunities',
      'Reduced insurance premiums',
      'Improved industry standards',
      'Enhanced reputation',
      'Compliance with regulations',
      'Competitive advantage',
    ],
    process: [
      {
        step: 1,
        title: 'Pre-Assessment',
        description: 'Review your current policies and procedures.',
      },
      {
        step: 2,
        title: 'Documentation Review',
        description:
          'Comprehensive review and development of required documentation.',
      },
      {
        step: 3,
        title: 'Policy Development',
        description: 'Creation or improvement of necessary policies.',
      },
      {
        step: 4,
        title: 'Application Support',
        description:
          'Complete support through the Constructionline application process.',
      },
      {
        step: 5,
        title: 'Assessment Preparation',
        description:
          'Preparation for Constructionline assessment including mock assessments.',
      },
      {
        step: 6,
        title: 'Ongoing Support',
        description: 'Continued support for annual reviews and maintenance.',
      },
    ],
    relatedServices: [
      { name: 'Safety Adviser', price: '£150/hour', id: 'safety-adviser' },
      {
        name: 'Accreditation Support',
        price: '£2,200',
        id: 'accreditation-support',
      },
      { name: 'Risk Assessments', price: '£450', id: 'risk-assessments' },
    ],
    stats: {
      successRate: '94%',
      clientRating: '4.7/5',
      avgProjectTime: '5 weeks',
      clientsServed: '120+',
    },
  },
  // Safety Adviser Services
  {
    id: 'safety-adviser',
    title: 'Safety Adviser',
    subtitle: 'Comprehensive Health & Safety Advisory Services',
    description:
      'Professional safety advisory services to ensure your business meets all health and safety requirements.',
    iconName: 'Shield',
    badge: 'Core Service',
    timeline: 'Ongoing',
    pricing: 'Starting from £150/hour',
    features: [
      'Health & Safety compliance',
      'Risk assessments',
      'Policy development',
      'Training programs',
    ],
    color: 'bg-blue-50/50 border-teal-light/30',
    benefits: [
      'Reduced workplace accidents',
      'Lower insurance premiums',
      'Legal compliance',
      'Enhanced reputation',
      'Professional support',
      'Competitive advantage',
    ],
    process: [
      {
        step: 1,
        title: 'Initial Consultation',
        description:
          'Assessment of your current health and safety arrangements.',
      },
      {
        step: 2,
        title: 'Risk Assessment',
        description:
          'Comprehensive risk assessments across all areas of operations.',
      },
      {
        step: 3,
        title: 'Policy Development',
        description:
          'Development of health and safety policies for your business.',
      },
      {
        step: 4,
        title: 'Training Programs',
        description: 'Customized training programs for management and staff.',
      },
      {
        step: 5,
        title: 'Implementation',
        description:
          'Support during implementation of health and safety measures.',
      },
      {
        step: 6,
        title: 'Ongoing Support',
        description: 'Continuous support, monitoring, and updates.',
      },
    ],
    relatedServices: [
      { name: 'CHAS Assistance', price: '£1,800', id: 'chas-assistance' },
      {
        name: 'Accreditation Support',
        price: '£2,200',
        id: 'accreditation-support',
      },
      { name: 'Risk Assessments', price: '£450', id: 'risk-assessments' },
    ],
    stats: {
      successRate: '97%',
      clientRating: '4.9/5',
      avgProjectTime: 'Ongoing',
      clientsServed: '400+',
    },
  },
  {
    id: 'safety-advisor/chas-assistance',
    title: 'CHAS Assistance',
    subtitle: 'Contractor Health and Safety Assessment Scheme',
    description:
      'Professional assistance to obtain CHAS accreditation and demonstrate your health and safety compliance.',
    iconName: 'Award',
    badge: 'Essential',
    timeline: '4-6 weeks',
    pricing: 'Starting from £1,800',
    features: [
      'Health & safety compliance',
      'Tender opportunities',
      'Risk reduction',
      'Industry recognition',
    ],
    color: 'bg-green-50/50 border-leaf-green/30',
    benefits: [
      'Access to more tender opportunities',
      'Reduced insurance premiums',
      'Improved health and safety standards',
      'Enhanced reputation',
      'Compliance with regulations',
      'Competitive advantage',
    ],
    process: [
      {
        step: 1,
        title: 'Pre-Assessment',
        description:
          'Review your current health and safety policies and procedures.',
      },
      {
        step: 2,
        title: 'Documentation Review',
        description:
          'Comprehensive review and development of health and safety documentation.',
      },
      {
        step: 3,
        title: 'Policy Development',
        description: 'Creation or improvement of health and safety policies.',
      },
      {
        step: 4,
        title: 'Application Support',
        description: 'Complete support through the CHAS application process.',
      },
      {
        step: 5,
        title: 'Assessment Preparation',
        description:
          'Preparation for CHAS assessment including mock assessments.',
      },
      {
        step: 6,
        title: 'Ongoing Support',
        description: 'Continued support for annual reviews and maintenance.',
      },
    ],
    relatedServices: [
      { name: 'Safety Adviser', price: '£150/hour', id: 'safety-adviser' },
      {
        name: 'Accreditation Support',
        price: '£2,200',
        id: 'accreditation-support',
      },
      { name: 'Risk Assessments', price: '£450', id: 'risk-assessments' },
    ],
    stats: {
      successRate: '96%',
      clientRating: '4.8/5',
      avgProjectTime: '5 weeks',
      clientsServed: '180+',
    },
  },
  {
    id: 'accreditation-support',
    title: 'Accreditation Support',
    subtitle: 'Professional Accreditation Services',
    description:
      'Comprehensive support for various industry accreditations and certifications.',
    iconName: 'CheckCircle',
    badge: 'Professional',
    timeline: '6-8 weeks',
    pricing: 'Starting from £2,200',
    features: [
      'Industry accreditations',
      'Documentation support',
      'Assessment preparation',
      'Ongoing maintenance',
    ],
    color: 'bg-purple-50/50 border-purple/30',
    benefits: [
      'Industry recognition',
      'Enhanced credibility',
      'Access to new markets',
      'Improved processes',
      'Competitive advantage',
      'Professional support',
    ],
    process: [
      {
        step: 1,
        title: 'Initial Assessment',
        description:
          'Assessment of your current position and accreditation requirements.',
      },
      {
        step: 2,
        title: 'Gap Analysis',
        description:
          'Identification of gaps between current practices and accreditation standards.',
      },
      {
        step: 3,
        title: 'Documentation Development',
        description: 'Development of required documentation and procedures.',
      },
      {
        step: 4,
        title: 'Implementation Support',
        description: 'Support during implementation of required changes.',
      },
      {
        step: 5,
        title: 'Assessment Preparation',
        description: 'Preparation for accreditation assessment.',
      },
      {
        step: 6,
        title: 'Ongoing Support',
        description: 'Continued support for maintenance and renewal.',
      },
    ],
    relatedServices: [
      { name: 'Safety Adviser', price: '£150/hour', id: 'safety-adviser' },
      { name: 'CHAS Assistance', price: '£1,800', id: 'chas-assistance' },
      { name: 'ISO Certifications', price: '£2,500', id: 'iso-certifications' },
    ],
    stats: {
      successRate: '95%',
      clientRating: '4.9/5',
      avgProjectTime: '7 weeks',
      clientsServed: '150+',
    },
  },

  // SIA Contractor Services
  {
    id: 'sia-contractor',
    title: 'SIA Contractor (ACS)',
    subtitle: 'Security Industry Authority Approved Contractor Scheme',
    description:
      'Professional support to achieve and maintain SIA ACS accreditation for security contractors.',
    iconName: 'Shield',
    badge: 'Specialized',
    timeline: '8-12 weeks',
    pricing: 'Starting from £3,500',
    features: [
      'SIA compliance',
      'ACS accreditation',
      'Quality management',
      'Ongoing support',
    ],
    color: 'bg-indigo-50/50 border-indigo/30',
    benefits: [
      'SIA compliance',
      'Enhanced credibility',
      'Access to premium contracts',
      'Improved quality standards',
      'Professional recognition',
      'Competitive advantage',
    ],
    process: [
      {
        step: 1,
        title: 'Initial Consultation',
        description:
          'Assessment of your current SIA compliance and ACS requirements.',
      },
      {
        step: 2,
        title: 'Gap Analysis',
        description:
          'Comprehensive analysis of gaps in SIA compliance and ACS standards.',
      },
      {
        step: 3,
        title: 'System Development',
        description:
          'Development of quality management systems for ACS compliance.',
      },
      {
        step: 4,
        title: 'Documentation',
        description: 'Creation of required documentation and procedures.',
      },
      {
        step: 5,
        title: 'Assessment Preparation',
        description: 'Preparation for SIA ACS assessment.',
      },
      {
        step: 6,
        title: 'Ongoing Support',
        description: 'Continued support for maintenance and renewal.',
      },
    ],
    relatedServices: [
      { name: 'ACS Audits', price: '£1,200', id: 'acs-audits' },
      { name: 'ACS Eligibility', price: '£800', id: 'acs-eligibility' },
      { name: 'ISO Certifications', price: '£2,500', id: 'iso-certifications' },
    ],
    stats: {
      successRate: '94%',
      clientRating: '4.8/5',
      avgProjectTime: '10 weeks',
      clientsServed: '80+',
    },
  },
  {
    id: 'sia-contractor/acs-audit',
    title: 'ACS Audits',
    subtitle: 'SIA ACS Audit Services',
    description:
      'Professional audit services to ensure compliance with SIA ACS standards.',
    iconName: 'FileText',
    badge: 'Required',
    timeline: '2-4 weeks',
    pricing: 'Starting from £1,200',
    features: [
      'ACS compliance audit',
      'Quality assessment',
      'Action planning',
      'Follow-up support',
    ],
    color: 'bg-blue-50/50 border-blue/30',
    benefits: [
      'ACS compliance verification',
      'Quality improvement',
      'Risk identification',
      'Professional certification',
      'Enhanced reputation',
      'Ongoing support',
    ],
    process: [
      {
        step: 1,
        title: 'Pre-Audit Review',
        description: 'Review of current documentation and processes.',
      },
      {
        step: 2,
        title: 'On-Site Audit',
        description:
          'Comprehensive on-site audit of operations and procedures.',
      },
      {
        step: 3,
        title: 'Documentation Review',
        description: 'Review of all required documentation and records.',
      },
      {
        step: 4,
        title: 'Findings Report',
        description: 'Detailed report of findings and recommendations.',
      },
      {
        step: 5,
        title: 'Action Planning',
        description: 'Development of action plans to address findings.',
      },
      {
        step: 6,
        title: 'Follow-up Support',
        description: 'Support during implementation of corrective actions.',
      },
    ],
    relatedServices: [
      { name: 'SIA Contractor (ACS)', price: '£3,500', id: 'sia-contractor' },
      { name: 'ACS Eligibility', price: '£800', id: 'acs-eligibility' },
      { name: 'ISO Certifications', price: '£2,500', id: 'iso-certifications' },
    ],
    stats: {
      successRate: '98%',
      clientRating: '4.9/5',
      avgProjectTime: '3 weeks',
      clientsServed: '120+',
    },
  },
  {
    id: 'sia-contractor/acs-eligibility',
    title: 'ACS Eligibility',
    subtitle: 'SIA ACS Eligibility Assessment',
    description:
      'Assessment of your eligibility for SIA ACS accreditation and guidance on requirements.',
    iconName: 'CheckCircle',
    badge: 'Assessment',
    timeline: '1-2 weeks',
    pricing: 'Starting from £800',
    features: [
      'Eligibility assessment',
      'Requirements review',
      'Gap analysis',
      'Action planning',
    ],
    color: 'bg-green-50/50 border-green/30',
    benefits: [
      'Clear understanding of requirements',
      'Eligibility confirmation',
      'Action planning',
      'Cost-effective approach',
      'Professional guidance',
      'Time savings',
    ],
    process: [
      {
        step: 1,
        title: 'Initial Review',
        description:
          'Review of your current business operations and structure.',
      },
      {
        step: 2,
        title: 'Eligibility Assessment',
        description: 'Assessment of eligibility against ACS requirements.',
      },
      {
        step: 3,
        title: 'Gap Analysis',
        description: 'Identification of gaps in meeting ACS requirements.',
      },
      {
        step: 4,
        title: 'Requirements Review',
        description: 'Detailed review of all ACS requirements and standards.',
      },
      {
        step: 5,
        title: 'Action Planning',
        description: 'Development of action plan to meet requirements.',
      },
      {
        step: 6,
        title: 'Guidance Report',
        description:
          'Comprehensive report with recommendations and next steps.',
      },
    ],
    relatedServices: [
      { name: 'SIA Contractor (ACS)', price: '£3,500', id: 'sia-contractor' },
      { name: 'ACS Audits', price: '£1,200', id: 'acs-audits' },
      { name: 'ISO Certifications', price: '£2,500', id: 'iso-certifications' },
    ],
    stats: {
      successRate: '100%',
      clientRating: '4.9/5',
      avgProjectTime: '1.5 weeks',
      clientsServed: '200+',
    },
  },
  {
    id: 'ais-annual-internal-audits',
    title: 'AIS Annual Internal System Audits',
    subtitle: 'Annual Internal Security System Audits',
    description:
      'Comprehensive annual internal audits to ensure ongoing compliance with security standards and operational excellence.',
    iconName: 'Shield',
    badge: 'Annual',
    timeline: '3-5 weeks',
    pricing: 'Starting from £2,200',
    features: [
      'Comprehensive system review',
      'Risk assessment analysis',
      'Compliance verification',
      'Process optimization',
      'Annual certification',
      'Management reporting',
    ],
    color: 'bg-green-50/50 border-green/30',
    benefits: [
      'Continuous compliance assurance',
      'Risk mitigation',
      'Operational improvements',
      'Regulatory alignment',
      'Cost optimization',
      'Enhanced security posture',
      'Stakeholder confidence',
      'Insurance compliance',
    ],
    process: [
      {
        step: 1,
        title: 'Audit Planning',
        description:
          'Comprehensive planning and scope definition for the annual audit cycle.',
      },
      {
        step: 2,
        title: 'Documentation Review',
        description:
          'Thorough review of all security policies, procedures, and documentation.',
      },
      {
        step: 3,
        title: 'System Assessment',
        description:
          'Technical evaluation of security systems, controls, and infrastructure.',
      },
      {
        step: 4,
        title: 'Process Evaluation',
        description:
          'Assessment of operational processes and staff compliance procedures.',
      },
      {
        step: 5,
        title: 'Risk Analysis',
        description:
          'Identification and evaluation of security risks and vulnerabilities.',
      },
      {
        step: 6,
        title: 'Findings & Recommendations',
        description:
          'Comprehensive report with findings, recommendations, and action plans.',
      },
      {
        step: 7,
        title: 'Implementation Support',
        description:
          'Ongoing support for implementing recommended improvements.',
      },
      {
        step: 8,
        title: 'Follow-up Review',
        description:
          'Follow-up assessment to verify implementation of corrective actions.',
      },
    ],
    relatedServices: [
      { name: 'SIA Contractor (ACS)', price: '£3,500', id: 'sia-contractor' },
      { name: 'ACS Audits', price: '£1,200', id: 'sia-contractor/acs-audit' },
      { name: 'ISO Certifications', price: '£2,500', id: 'iso-certifications' },
      { name: 'Risk Assessment', price: '£800', id: 'risk-assessment' },
    ],
    stats: {
      successRate: '99%',
      clientRating: '4.8/5',
      avgProjectTime: '4 weeks',
      clientsServed: '85+',
    },
  },

  // ISO Certifications
  {
    id: 'iso-certifications',
    title: 'ISO Certifications',
    subtitle: 'Comprehensive ISO Certification Services',
    description:
      'Professional ISO certification services for quality, environment, and safety management systems.',
    iconName: 'Award',
    badge: 'International',
    timeline: '6-12 weeks',
    pricing: 'Starting from £2,500',
    features: ['ISO 9001', 'ISO 14001', 'OHSAS 18001', 'Integrated systems'],
    color: 'bg-yellow-50/50 border-yellow/30',
    benefits: [
      'International recognition',
      'Improved processes',
      'Enhanced credibility',
      'Competitive advantage',
      'Customer confidence',
      'Operational efficiency',
    ],
    process: [
      {
        step: 1,
        title: 'Initial Consultation',
        description: 'Assessment of your requirements and current systems.',
      },
      {
        step: 2,
        title: 'Gap Analysis',
        description: 'Comprehensive gap analysis against ISO requirements.',
      },
      {
        step: 3,
        title: 'System Development',
        description: 'Development of management system documentation.',
      },
      {
        step: 4,
        title: 'Implementation',
        description: 'Support during implementation of systems.',
      },
      {
        step: 5,
        title: 'Internal Audit',
        description: 'Conduct internal audits to ensure readiness.',
      },
      {
        step: 6,
        title: 'Certification',
        description: 'Support during external certification audit.',
      },
    ],
    relatedServices: [
      { name: 'ISO 9001', price: '£2,500', id: 'iso-9001' },
      { name: 'ISO 14001', price: '£2,800', id: 'iso-14001' },
      { name: 'OHSAS 18001', price: '£2,600', id: 'ohsas-18001' },
    ],
    stats: {
      successRate: '98%',
      clientRating: '4.9/5',
      avgProjectTime: '8 weeks',
      clientsServed: '300+',
    },
  },
  {
    id: 'iso-certifications/iso-9001',
    title: 'ISO 9001',
    subtitle: 'Quality Management System Certification',
    description:
      'Achieve ISO 9001 certification to demonstrate your commitment to quality management and customer satisfaction.',
    iconName: 'Shield',
    badge: 'Most Popular',
    timeline: '6-8 weeks',
    pricing: 'Starting from £2,500',
    features: [
      'Process optimization',
      'Customer satisfaction',
      'Continuous improvement',
      'International recognition',
    ],
    color: 'bg-blue-50/50 border-teal-light/30',
    benefits: [
      'Improved quality management processes',
      'Enhanced customer satisfaction',
      'Increased operational efficiency',
      'Better risk management',
      'International recognition',
      'Competitive advantage',
    ],
    process: [
      {
        step: 1,
        title: 'Initial Consultation',
        description:
          'Free consultation to understand your requirements and assess your current quality management system.',
      },
      {
        step: 2,
        title: 'Gap Analysis',
        description:
          'Comprehensive analysis to identify gaps between your current processes and ISO 9001 requirements.',
      },
      {
        step: 3,
        title: 'Documentation',
        description:
          'Development of quality manual, procedures, and work instructions tailored to your organization.',
      },
      {
        step: 4,
        title: 'Implementation',
        description:
          'Support during implementation phase including staff training and process optimization.',
      },
      {
        step: 5,
        title: 'Internal Audit',
        description:
          'Conduct internal audits to ensure compliance and readiness for certification audit.',
      },
      {
        step: 6,
        title: 'Certification',
        description:
          'Support during external certification audit and ongoing maintenance of your ISO 9001 system.',
      },
    ],
    relatedServices: [
      { name: 'ISO 14001', price: '£2,800', id: 'iso-14001' },
      { name: 'OHSAS 18001', price: '£2,600', id: 'ohsas-18001' },
      { name: 'Quality Assurance', price: '£2,200', id: 'quality-assurance' },
    ],
    stats: {
      successRate: '98%',
      clientRating: '4.9/5',
      avgProjectTime: '7 weeks',
      clientsServed: '250+',
    },
  },
  {
    id: 'iso-certifications/iso-14001',
    title: 'ISO 14001',
    subtitle: 'Environmental Management System Certification',
    description:
      'Implement ISO 14001 environmental management systems to reduce your environmental impact and achieve sustainability goals.',
    iconName: 'Leaf',
    badge: 'Sustainable',
    timeline: '8-10 weeks',
    pricing: 'Starting from £2,800',
    features: [
      'Environmental compliance',
      'Waste reduction',
      'Energy efficiency',
      'Sustainability reporting',
    ],
    color: 'bg-emerald-50/50 border-leaf-green/30',
    benefits: [
      'Reduced environmental impact',
      'Cost savings through efficiency',
      'Enhanced brand reputation',
      'Regulatory compliance',
      'Improved stakeholder relations',
      'Competitive advantage',
    ],
    process: [
      {
        step: 1,
        title: 'Environmental Review',
        description:
          'Comprehensive review of your environmental aspects and impacts.',
      },
      {
        step: 2,
        title: 'Gap Analysis',
        description:
          'Analysis of current practices against ISO 14001 requirements.',
      },
      {
        step: 3,
        title: 'System Development',
        description:
          'Development of environmental management system documentation.',
      },
      {
        step: 4,
        title: 'Implementation',
        description: 'Implementation of environmental management procedures.',
      },
      {
        step: 5,
        title: 'Training & Awareness',
        description: 'Staff training and awareness programs.',
      },
      {
        step: 6,
        title: 'Certification',
        description: 'Support through ISO 14001 certification process.',
      },
    ],
    relatedServices: [
      { name: 'ISO 9001', price: '£2,500', id: 'iso-9001' },
      { name: 'OHSAS 18001', price: '£2,600', id: 'ohsas-18001' },
      {
        name: 'Environmental Management',
        price: '£2,800',
        id: 'environmental-management',
      },
    ],
    stats: {
      successRate: '95%',
      clientRating: '4.8/5',
      avgProjectTime: '9 weeks',
      clientsServed: '120+',
    },
  },
  {
    id: 'iso-certifications/iso-27001',
    title: 'ISO 27001',
    subtitle: 'Information Security Management System Certification',
    description:
      'Implement ISO 27001 information security management systems to protect your data assets and ensure cybersecurity compliance.',
    iconName: 'Shield',
    badge: 'Secure',
    timeline: '10-12 weeks',
    pricing: 'Starting from £3,200',
    features: [
      'Data protection',
      'Risk management',
      'Incident response',
      'Security compliance',
    ],
    color: 'bg-blue-50/50 border-blue-500/30',
    benefits: [
      'Enhanced data security',
      'Reduced security risks',
      'Regulatory compliance',
      'Customer trust and confidence',
      'Competitive advantage',
      'Business continuity',
    ],
    process: [
      {
        step: 1,
        title: 'Security Assessment',
        description:
          'Comprehensive assessment of current information security posture.',
      },
      {
        step: 2,
        title: 'Risk Analysis',
        description:
          'Identification and analysis of information security risks.',
      },
      {
        step: 3,
        title: 'ISMS Development',
        description:
          'Development of Information Security Management System documentation.',
      },
      {
        step: 4,
        title: 'Controls Implementation',
        description: 'Implementation of security controls and procedures.',
      },
      {
        step: 5,
        title: 'Training & Awareness',
        description: 'Security awareness training for all personnel.',
      },
      {
        step: 6,
        title: 'Certification',
        description: 'Support through ISO 27001 certification process.',
      },
    ],
    relatedServices: [
      { name: 'ISO 9001', price: '£2,500', id: 'iso-9001' },
      { name: 'GDPR Compliance', price: '£2,800', id: 'gdpr-compliance' },
      {
        name: 'Cybersecurity Assessment',
        price: '£3,000',
        id: 'cybersecurity-assessment',
      },
    ],
    stats: {
      successRate: '92%',
      clientRating: '4.9/5',
      avgProjectTime: '11 weeks',
      clientsServed: '85+',
    },
  },

  {
    id: 'iso-certifications/iso-45001',
    title: 'ISO 45001',
    subtitle: 'Occupational Health and Safety Management System Certification',
    description:
      'Implement ISO 45001 occupational health and safety management systems to protect your workforce and ensure workplace safety.',
    iconName: 'HardHat',
    badge: 'Safety First',
    timeline: '8-10 weeks',
    pricing: 'Starting from £2,900',
    features: [
      'Workplace safety',
      'Hazard identification',
      'Incident prevention',
      'Legal compliance',
    ],
    color: 'bg-orange-50/50 border-orange-500/30',
    benefits: [
      'Reduced workplace accidents',
      'Lower insurance costs',
      'Enhanced employee morale',
      'Legal compliance',
      'Improved productivity',
      'Better reputation',
    ],
    process: [
      {
        step: 1,
        title: 'Safety Review',
        description:
          'Comprehensive review of current health and safety practices.',
      },
      {
        step: 2,
        title: 'Hazard Assessment',
        description:
          'Identification and assessment of workplace hazards and risks.',
      },
      {
        step: 3,
        title: 'System Development',
        description:
          'Development of occupational health and safety management system.',
      },
      {
        step: 4,
        title: 'Implementation',
        description: 'Implementation of safety procedures and controls.',
      },
      {
        step: 5,
        title: 'Training Programs',
        description: 'Health and safety training for all employees.',
      },
      {
        step: 6,
        title: 'Certification',
        description: 'Support through ISO 45001 certification process.',
      },
    ],
    relatedServices: [
      { name: 'ISO 9001', price: '£2,500', id: 'iso-9001' },
      { name: 'ISO 14001', price: '£2,800', id: 'iso-14001' },
      {
        name: 'Safety Training',
        price: '£1,500',
        id: 'safety-training',
      },
    ],
    stats: {
      successRate: '94%',
      clientRating: '4.7/5',
      avgProjectTime: '9 weeks',
      clientsServed: '95+',
    },
  },
  {
    id: 'iso-certifications/ohsas-18001',
    title: 'OHSAS 18001',
    subtitle: 'Occupational Health and Safety Management System',
    description:
      'Implement OHSAS 18001 occupational health and safety management systems to protect your workforce.',
    iconName: 'Shield',
    badge: 'Safety',
    timeline: '8-10 weeks',
    pricing: 'Starting from £2,600',
    features: [
      'Workplace safety',
      'Risk management',
      'Compliance',
      'Employee protection',
    ],
    color: 'bg-red-50/50 border-red/30',
    benefits: [
      'Improved workplace safety',
      'Reduced accidents and incidents',
      'Lower insurance costs',
      'Enhanced employee morale',
      'Regulatory compliance',
      'Professional recognition',
    ],
    process: [
      {
        step: 1,
        title: 'Safety Assessment',
        description:
          'Comprehensive assessment of current health and safety practices.',
      },
      {
        step: 2,
        title: 'Risk Analysis',
        description:
          'Identification and analysis of workplace hazards and risks.',
      },
      {
        step: 3,
        title: 'System Development',
        description:
          'Development of occupational health and safety management system.',
      },
      {
        step: 4,
        title: 'Implementation',
        description: 'Implementation of safety procedures and controls.',
      },
      {
        step: 5,
        title: 'Training & Awareness',
        description: 'Staff training on health and safety procedures.',
      },
      {
        step: 6,
        title: 'Certification',
        description: 'Support through OHSAS 18001 certification process.',
      },
    ],
    relatedServices: [
      { name: 'ISO 9001', price: '£2,500', id: 'iso-9001' },
      { name: 'ISO 14001', price: '£2,800', id: 'iso-14001' },
      { name: 'Safety Adviser', price: '£150/hour', id: 'safety-adviser' },
    ],
    stats: {
      successRate: '96%',
      clientRating: '4.9/5',
      avgProjectTime: '9 weeks',
      clientsServed: '100+',
    },
  },

  // Other Services
  {
    id: 'staff-vetting',
    title: 'Staff Vetting (BS7858)',
    subtitle: 'Professional Staff Vetting Services',
    description:
      'Comprehensive staff vetting services compliant with BS7858 standards for security industry personnel.',
    iconName: 'Users',
    badge: 'Compliance',
    timeline: '2-4 weeks',
    pricing: 'Starting from £150 per person',
    features: [
      'BS7858 compliance',
      'Background checks',
      'Reference verification',
      'Criminal record checks',
    ],
    color: 'bg-purple-50/50 border-purple/30',
    benefits: [
      'BS7858 compliance',
      'Enhanced security',
      'Risk reduction',
      'Professional standards',
      'Legal compliance',
      'Peace of mind',
    ],
    process: [
      {
        step: 1,
        title: 'Initial Consultation',
        description:
          'Assessment of your vetting requirements and BS7858 compliance needs.',
      },
      {
        step: 2,
        title: 'Documentation Review',
        description: 'Review of required documentation and consent forms.',
      },
      {
        step: 3,
        title: 'Background Checks',
        description: 'Comprehensive background checks and verification.',
      },
      {
        step: 4,
        title: 'Reference Verification',
        description: 'Verification of employment and character references.',
      },
      {
        step: 5,
        title: 'Criminal Record Check',
        description: 'Enhanced DBS checks and criminal record verification.',
      },
      {
        step: 6,
        title: 'Final Report',
        description: 'Comprehensive vetting report with recommendations.',
      },
    ],
    relatedServices: [
      { name: 'SIA Contractor (ACS)', price: '£3,500', id: 'sia-contractor' },
      { name: 'Risk Assessments', price: '£450', id: 'risk-assessments' },
      { name: 'Safety Adviser', price: '£150/hour', id: 'safety-adviser' },
    ],
    stats: {
      successRate: '99%',
      clientRating: '4.9/5',
      avgProjectTime: '3 weeks',
      clientsServed: '500+',
    },
  },
  {
    id: 'pat-testing',
    title: 'PAT Testing',
    subtitle: 'Portable Appliance Testing Services',
    description:
      'Professional PAT testing services to ensure electrical safety compliance in your workplace.',
    iconName: 'CheckCircle',
    badge: 'Safety',
    timeline: '1-3 days',
    pricing: 'Starting from £3 per item',
    features: [
      'Electrical safety',
      'Compliance testing',
      'Documentation',
      'Regular maintenance',
    ],
    color: 'bg-orange-50/50 border-orange/30',
    benefits: [
      'Electrical safety compliance',
      'Reduced fire risk',
      'Insurance compliance',
      'Professional certification',
      'Peace of mind',
      'Cost-effective testing',
    ],
    process: [
      {
        step: 1,
        title: 'Initial Assessment',
        description:
          'Assessment of your PAT testing requirements and schedule.',
      },
      {
        step: 2,
        title: 'Equipment Inventory',
        description:
          'Comprehensive inventory of all portable electrical equipment.',
      },
      {
        step: 3,
        title: 'Testing Schedule',
        description: 'Development of testing schedule and procedures.',
      },
      {
        step: 4,
        title: 'On-Site Testing',
        description: 'Professional on-site PAT testing of all equipment.',
      },
      {
        step: 5,
        title: 'Documentation',
        description: 'Comprehensive documentation and certification.',
      },
      {
        step: 6,
        title: 'Ongoing Support',
        description: 'Regular testing schedules and maintenance support.',
      },
    ],
    relatedServices: [
      { name: 'Fire Safety', price: '£450', id: 'fire-safety' },
      { name: 'Risk Assessments', price: '£450', id: 'risk-assessments' },
      { name: 'Safety Adviser', price: '£150/hour', id: 'safety-adviser' },
    ],
    stats: {
      successRate: '100%',
      clientRating: '4.9/5',
      avgProjectTime: '2 days',
      clientsServed: '1000+',
    },
  },
  {
    id: 'risk-assessments',
    title: 'Risk Assessments',
    subtitle: 'Comprehensive Risk Assessment Services',
    description:
      'Professional risk assessment services to identify, evaluate, and control risks in your workplace.',
    iconName: 'FileText',
    badge: 'Required',
    timeline: '1-2 weeks',
    pricing: 'Starting from £450',
    features: [
      'Risk identification',
      'Risk evaluation',
      'Control measures',
      'Action planning',
    ],
    color: 'bg-yellow-50/50 border-yellow/30',
    benefits: [
      'Legal compliance',
      'Risk reduction',
      'Improved safety',
      'Cost savings',
      'Professional certification',
      'Peace of mind',
    ],
    process: [
      {
        step: 1,
        title: 'Site Survey',
        description: 'Comprehensive survey of your workplace and operations.',
      },
      {
        step: 2,
        title: 'Risk Identification',
        description: 'Identification of all potential hazards and risks.',
      },
      {
        step: 3,
        title: 'Risk Evaluation',
        description: 'Evaluation of risks in terms of likelihood and severity.',
      },
      {
        step: 4,
        title: 'Control Measures',
        description: 'Development of appropriate control measures.',
      },
      {
        step: 5,
        title: 'Action Planning',
        description: 'Prioritized action plan with timelines.',
      },
      {
        step: 6,
        title: 'Review & Monitoring',
        description: 'Regular reviews and updates of risk assessments.',
      },
    ],
    relatedServices: [
      { name: 'Safety Adviser', price: '£150/hour', id: 'safety-adviser' },
      {
        name: 'Fire Risk Assessment',
        price: '£450',
        id: 'fire-risk-assessment',
      },
      { name: 'PAT Testing', price: '£3 per item', id: 'pat-testing' },
    ],
    stats: {
      successRate: '100%',
      clientRating: '4.9/5',
      avgProjectTime: '1.5 weeks',
      clientsServed: '800+',
    },
  },
  {
    id: 'fire-safety',
    title: 'Fire Safety Certification',
    subtitle: 'Workplace Fire Safety Training & Certification',
    description:
      'Comprehensive fire safety training and certification to meet legal requirements under The Regulatory Reform Fire Safety Order 2005.',
    iconName: 'Flame',
    badge: 'Legal Requirement',
    timeline: '1-2 weeks',
    pricing: 'Starting from £450',
    features: [
      'Fire safety awareness training',
      'Emergency evacuation procedures',
      'Fire risk assessment basics',
      'Equipment usage training',
      'Legal compliance certification',
      'Workplace-specific guidance',
    ],
    color: 'bg-red-50/50 border-red/30',
    benefits: [
      'Legal compliance assurance',
      'Employee safety enhancement',
      'Risk reduction',
      'Insurance compliance',
      'Emergency preparedness',
      'Liability protection',
      'Workplace confidence',
      'Regulatory alignment',
    ],
    process: [
      {
        step: 1,
        title: 'Needs Assessment',
        description:
          'Evaluation of workplace fire safety requirements and current provisions.',
      },
      {
        step: 2,
        title: 'Training Program Design',
        description:
          'Customized training program development based on workplace specifics.',
      },
      {
        step: 3,
        title: 'Fire Safety Training',
        description:
          'Comprehensive training covering fire prevention, detection, and response.',
      },
      {
        step: 4,
        title: 'Emergency Procedures',
        description:
          'Training on evacuation procedures and emergency response protocols.',
      },
      {
        step: 5,
        title: 'Equipment Training',
        description:
          'Hands-on training with fire safety equipment and extinguishers.',
      },
      {
        step: 6,
        title: 'Assessment & Certification',
        description:
          'Knowledge assessment and issuance of fire safety certificates.',
      },
      {
        step: 7,
        title: 'Documentation',
        description:
          'Provision of training records and compliance documentation.',
      },
      {
        step: 8,
        title: 'Refresher Planning',
        description:
          'Scheduling of future refresher training and ongoing support.',
      },
    ],
    relatedServices: [
      {
        name: 'Health & Safety Training',
        price: '£600',
        id: 'health-safety-training',
      },
      { name: 'Risk Assessment', price: '£800', id: 'risk-assessment' },
      { name: 'Emergency Planning', price: '£900', id: 'emergency-planning' },
      { name: 'Compliance Audits', price: '£1,200', id: 'compliance-audits' },
    ],
    stats: {
      successRate: '100%',
      clientRating: '4.9/5',
      avgProjectTime: '10 days',
      clientsServed: '200+',
    },
  },
  {
    id: 'bafe-certification',
    title: 'BAFE Certification',
    subtitle: 'British Approvals for Fire Equipment',
    description:
      'Professional BAFE certification services for fire safety equipment and services.',
    iconName: 'Shield',
    badge: 'Specialized',
    timeline: '6-8 weeks',
    pricing: 'Starting from £2,800',
    features: [
      'Fire safety compliance',
      'Equipment certification',
      'Service certification',
      'Ongoing support',
    ],
    color: 'bg-red-50/50 border-red/30',
    benefits: [
      'Fire safety compliance',
      'Enhanced credibility',
      'Competitive advantage',
      'Professional recognition',
      'Quality assurance',
      'Customer confidence',
    ],
    process: [
      {
        step: 1,
        title: 'Initial Assessment',
        description:
          'Assessment of your current fire safety equipment and services.',
      },
      {
        step: 2,
        title: 'Gap Analysis',
        description:
          'Analysis of gaps against BAFE certification requirements.',
      },
      {
        step: 3,
        title: 'System Development',
        description:
          'Development of quality management systems for BAFE compliance.',
      },
      {
        step: 4,
        title: 'Documentation',
        description: 'Creation of required documentation and procedures.',
      },
      {
        step: 5,
        title: 'Assessment Preparation',
        description: 'Preparation for BAFE assessment and audit.',
      },
      {
        step: 6,
        title: 'Certification',
        description: 'Support during BAFE certification process.',
      },
    ],
    relatedServices: [
      {
        name: 'Fire Risk Assessment',
        price: '£450',
        id: 'fire-risk-assessment',
      },
      { name: 'PAT Testing', price: '£3 per item', id: 'pat-testing' },
      { name: 'Safety Adviser', price: '£150/hour', id: 'safety-adviser' },
    ],
    stats: {
      successRate: '92%',
      clientRating: '4.8/5',
      avgProjectTime: '7 weeks',
      clientsServed: '60+',
    },
  },
];

export const getServiceById = (id: string | null): Service | null => {
  if (!id) return null;
  return servicesData.find((service) => service.id === id) || null;
};
