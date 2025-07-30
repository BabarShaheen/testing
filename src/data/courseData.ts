// data/courses.ts

export interface Course {
  id: string;
  title: string;
  description: string;
  outline: string[];
  duration: string;
  businessBenefits: string[];
  delegateBenefits: string[];
  assessment: string;
  certification: string;
  price?: string;
}

export const courses: Course[] = [
  {
    id: 'fire-safety',
    title: 'Fire Safety Certificate',
    description:
      'This fire awareness training course has been designed to give personnel the necessary information, knowledge and training for them to be competent in basic fire safety. The law requires all employed personnel to have adequate fire safety training periodically.',
    outline: [
      'Fire Legislation',
      'Definition of the responsible person / Duties of a competent person',
      'Fire risk assessment – reducing the risk',
      'Basic fire prevention / Chemistry of fire / Classes of fire',
      'Common causes of fire / How fire spreads / Hazard identification',
      'Managing people with special needs in your building',
      'Evacuation procedure / Fire-fighting equipment (hands on)',
      'Co-operation with the emergency services',
      'Dangerous substances and flammable materials',
    ],
    duration: '1/2 Day',
    businessBenefits: [
      'minimise fire risk in the workplace',
      'improve your fire safety culture',
      'develop staff roles in case of a fire emergency',
      'achieve an internationally recognised and respected certification for staff',
      'enhance its reputation within the supply chain.',
    ],
    delegateBenefits: [
      'understand your own responsibilities for fire safety',
      'identify and report on fire hazards',
      'assess workplace fire risks',
      'evacuate effectively in an emergency',
      'identify equipment for fire fighting.',
    ],
    assessment:
      'There is no final assessment. The tutor ensures a thorough understanding has been achieved by questions, answers, discussion and practical scenarios.',
    certification: 'Delegates receive a certificate of attendance',
  },
  {
    id: 'fire-extinguishers',
    title: 'Fire Extinguishers Certificate',
    description:
      'This fire awareness training course has been designed to give personnel the necessary information, knowledge and training for them to be competent in basic fire safety. During this theoretical and practical course you will safely experience the heat and flames from our simulator whilst we teach you to put out a real fire using a range of extinguishers.',
    outline: [
      'Overview of fire safety legislation',
      'Understand fire risk assessment – reducing the risk',
      'Describe basic fire prevention / Chemistry of fire / Classes of fire',
      'Know the common causes of fire / how fire spreads / Hazard Identification',
      'How to manage people with special needs in your building',
      'Recognise and respond to evacuation procedures',
      'Know the different types of fire-fighting equipment',
      'Practical exercises operating extinguishers on live fires',
    ],
    duration: '1/2 Day',
    businessBenefits: [
      'minimise fire risk in the workplace',
      'improve your fire safety culture',
      'develop staff roles in case of a fire emergency',
      'achieve an internationally recognised and respected certification for staff',
      'enhance its reputation within the supply chain.',
    ],
    delegateBenefits: [
      'understand your own responsibilities for fire safety',
      'identify and report on fire hazards',
      'assess workplace fire risks',
      'evacuate effectively in an emergency',
      'identify equipment for fire fighting.',
    ],
    assessment:
      'There is no final assessment. The tutor ensures a thorough understanding has been achieved by questions, answers, discussion and practical scenarios.',
    certification: 'Delegates receive a certificate of attendance',
  },
  {
    id: 'fire-warden',
    title: 'Fire Marshal/Warden Certificate',
    description:
      'This course ensures that your employees are provided with adequate safety training in accordance with the Regulatory Reform (Fire Safety) Order 2005. Protect your business by ensuring staff are trained as fire wardens to comply with legislation.',
    outline: [
      'Introduction to fire safety',
      'Fire precautions/health & safety legislation',
      'General fire prevention measures',
      'Actions to be taken in the event of a fire',
      'Evacuation procedures',
      'Means of escape',
      'Types of alarms and fire detectors',
      'Fire wardens/marshall responsibilities',
      'Calling the fire brigade',
      'Information required when the fire service arrives',
      'Triangle of combustion',
      'Classes of fire and methods of extinction',
      'Operation of fire extinguishers',
      'Basic fire precautions',
      'Fire register and accountability procedures',
    ],
    duration: '1 Day',
    businessBenefits: [
      'minimise fire risk in the workplace',
      'improve your fire safety culture',
      'develop staff roles in case of a fire emergency',
      'achieve an internationally recognised and respected certification for staff',
      'enhance its reputation within the supply chain.',
    ],
    delegateBenefits: [
      'understand your own responsibilities for fire safety',
      'identify and report on fire hazards',
      'assess workplace fire risks',
      'evacuate effectively in an emergency',
      'identify equipment for fire fighting.',
    ],
    assessment:
      'There is no final assessment. The tutor ensures a thorough understanding has been achieved by questions, answers, discussion and practical scenarios.',
    certification: 'Delegates receive a certificate of attendance',
  },
];
