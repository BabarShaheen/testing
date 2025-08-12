export interface HomePageService {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  ctaText: string;
  route: string;
}

export const homePageServices: HomePageService[] = [
  {
    id: 'health-safety',
    title: 'Health & Safety Consulting',
    description:
      'Expert guidance to maintain safe, compliant workplaces tailored to UK regulations.',
    imageSrc: '/Images/landingpage/health-safety.jpeg',
    imageAlt: 'Health & Safety',
    ctaText: 'Learn More',
    route: '/services/safety-advisor/health-safety',
  },
  {
    id: 'iso-9001',
    title: 'ISO 9001 Certification',
    description:
      'Achieve internationally recognized quality standards to enhance credibility and efficiency.',
    imageSrc: '/Images/landingpage/ISO-9001-Certification.jpg',
    imageAlt: 'ISO 9001',
    ctaText: 'Get Certified',
    route: '/services/iso-certifications/iso-9001',
  },
  {
    id: 'sia-acs',
    title: 'SIA ACS Audit Support',
    description:
      'Full support for achieving Approved Contractor Scheme compliance in the security industry.',
    imageSrc: '/Images/landingpage/sia_optimization.webp',
    imageAlt: 'SIA ACS',
    ctaText: 'Start Process',
    route: '/services/sia-contractor',
  },
  {
    id: 'chas-assistance',
    title: 'CHAS Assistance',
    description:
      'We help you attain CHAS accreditation with complete application and compliance support.',
    imageSrc: '/Images/landingpage/chas.jpg',
    imageAlt: 'CHAS Assistance',
    ctaText: 'Apply Now',
    route: '/services/safety-advisor/chas-assistance',
  },
  {
    id: 'pat-testing',
    title: 'PAT Testing',
    description:
      'Ensure workplace electrical safety with reliable, affordable PAT testing services.',
    imageSrc: '/Images/landingpage/pat_optimized.webp',
    imageAlt: 'PAT Testing',
    ctaText: 'View Pricing',
    route: '/services/pat-testing',
  },
  {
    id: 'risk-assessments',
    title: 'Risk Assessments',
    description:
      'Identify and manage workplace hazards with professional risk assessment reports.',
    imageSrc: '/Images/landingpage/risk.jpg',
    imageAlt: 'Risk Assessments',
    ctaText: 'Get a Quote',
    route: '/services/risk-assessments',
  },
];
