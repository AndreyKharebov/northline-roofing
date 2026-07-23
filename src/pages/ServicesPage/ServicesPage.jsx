import { ShieldCheck, Hammer, Medal, BadgeCheck } from 'lucide-react';

import PageHero from '../../components/common/PageHero/PageHero';
import TrustStrip from '../../components/common/TrustStrip/TrustStrip';
import ServicesPreview from '../../components/common/ServicesPreview/ServicesPreview';
import ConversionSection from '../../components/common/ConversionSection/ConversionSection';
import ConfigurableForm from '../../components/common/ConfigurableForm/ConfigurableForm';

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

      <ServicesPreview
        eyebrow='Our Services'
        title='Quality Services, Built to Last'
        description='We offer a full range of exterior services for residential properties. Each project is completed with care, precision, and attention to detail.'
        extended={true}
      />
      <ConversionSection
        eyebrow='Request an Estimate'
        title={`Let's Find the Right Solution`}
        description={`Tell us about your roofing or exterior needs, and we'll recommend the best solution for your home with a free estimate.`}
        // benefits={[
        //   'Free project estimate',
        //   'No-obligation consultation',
        //   'Clear project recommendations',
        // ]}
        buttonText='Get Free Estimate'
        buttonTo='/contact'
        phone='(215) 555-0198'
        phoneHref='tel:+12155550198'
        // preferToSpeak
        // emergency
        className='green'
      >
        <ConfigurableForm version='short' />
      </ConversionSection>
    </>
  );
}

export default ServicesPage;
