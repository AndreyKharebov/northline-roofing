import {
  BadgeCheck,
  ClipboardList,
  Hammer,
  Handshake,
  Heart,
  House,
  PhoneCall,
  Scale,
  ShieldCheck,
} from 'lucide-react';

const processSteps = [
  {
    id: 'estimate',
    icon: <PhoneCall />,
    title: 'Request an Estimate',
    description:
      'Tell us about your project and schedule a convenient time to speak with our team.',
  },
  {
    id: 'inspection',
    icon: <House />,
    title: 'On-Site Inspection',
    description:
      'We inspect your property, document visible issues, and assess the scope of work.',
  },
  {
    id: 'proposal',
    icon: <ClipboardList />,
    title: 'Detailed Proposal',
    description:
      'You receive a clear written proposal outlining the work, materials, timeline, and project details.',
  },
  {
    id: 'installation',
    icon: <Hammer />,
    title: 'Expert Installation',
    description:
      'Our crew completes the work with careful preparation, clean installation, and site protection.',
  },
  {
    id: 'walkthrough',
    icon: <ShieldCheck />,
    title: 'Final Walkthrough',
    description:
      'We review the completed project with you and address any remaining questions.',
  },
];

const valuesSteps = [
  {
    id: 'quality',
    icon: <BadgeCheck />,
    title: 'Quality First',
    description:
      'We use dependable materials and proven installation practices.',
  },
  {
    id: 'honesty',
    icon: <Scale />,
    title: 'Honest Guidance',
    description: 'We recommend only the work your property actually needs.',
  },
  {
    id: 'respect',
    icon: <Handshake />,
    title: 'Respect for Your Home',
    description:
      'We protect your property and keep every job site clean and organized.',
  },
  {
    id: 'commitment',
    icon: <Heart />,
    title: 'Customer Commitment',
    description:
      'We communicate clearly and remain available throughout your project.',
  },
];

export const featureStepsData = {
  process: {
    eyebrow: 'Our Process',
    title: 'Simple. Transparent. Professional.',
    description:
      'A clear process keeps your project organized from the first conversation through the final walkthrough.',
    items: processSteps,
    showNumbers: true,
    badge: 'Clear communication. Quality work. Your satisfaction guaranteed.',
    badgeIcon: <ShieldCheck />,
  },
  values: {
    eyebrow: 'Our Values',
    title: 'The Principles Behind Our Work.',
    description:
      'Every project is guided by quality, honesty, and respect for your home.',
    items: valuesSteps,
    showNumbers: false,
    badge: null,
    badgeIcon: null,
  },
};
