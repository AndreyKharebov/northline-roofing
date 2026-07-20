import { ShieldCheck, Hammer, Medal, BadgeCheck } from 'lucide-react';

import ServicesCta from '../../components/services/ServicesCta/ServicesCta';
import ServicesGrid from '../../components/services/ServicesGrid/ServicesGrid';

import PageHero from '../../components/common/PageHero/PageHero';
import TrustStrip from '../../components/common/TrustStrip/TrustStrip';

import servicesHero from '../../assets/images/services/services-hero.webp';

const trustItems = [
  { title: 'Licensed & Insured', Icon: ShieldCheck },
  { title: 'Premium Materials', Icon: Hammer },
  { title: 'Certified Professionals', Icon: Medal },
  { title: 'Workmanship Warranty', Icon: BadgeCheck },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow='Roofing Services'
        title='Complete Exterior Solutions'
        description='From roof replacement and repair to siding, gutters, windows, and storm damage restoration, we provide reliable exterior services designed to protect, improve, and enhance your home.'
        image={servicesHero}
        type='white'
        primaryAction={{
          label: 'Get Free Estimate',
          to: '/request-estimate',
        }}
        secondaryAction={{
          label: 'View Our Projects',
          to: '/projects',
        }}
      />
      <TrustStrip items={trustItems} ariaLabel='Service advantages' />

      <ServicesGrid />
      <ServicesCta />
    </>
  );
}

export default ServicesPage;
