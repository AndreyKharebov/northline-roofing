import { ShieldCheck, Hammer, Medal, BadgeCheck } from 'lucide-react';

import ServicesCta from '../../components/services/ServicesCta/ServicesCta';

import PageHero from '../../components/common/PageHero/PageHero';
import TrustStrip from '../../components/common/TrustStrip/TrustStrip';
import ServicesPreview from '../../components/common/ServicesPreview/ServicesPreview';

import servicesHero from '../../assets/images/services/services-hero.webp';
import ServiceProcess from '../../components/services/ServiceProcess/ServiceProcess';
import QuestionForm from '../../components/faq/QuestionForm/QuestionForm';

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

      <ServicesPreview
        eyebrow='Our Services'
        title='Quality Services, Built to Last'
        description='We offer a full range of exterior services for residential properties. Each project is completed with care, precision, and attention to detail.'
        extended={true}
      />

      <ServiceProcess />
      <QuestionForm />
    </>
  );
}

export default ServicesPage;
