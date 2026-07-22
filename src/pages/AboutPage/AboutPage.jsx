import { Users, MessageSquare, ShieldCheck, MapPinned } from 'lucide-react';

import OurStory from '../../components/about/OurStory/OurStory';
import Team from '../../components/about/Team/Team';
import Values from '../../components/about/Values/Values';

import PageHero from '../../components/common/PageHero/PageHero';
import TrustStrip from '../../components/common/TrustStrip/TrustStrip';
import ConversionSection from '../../components/common/ConversionSection/ConversionSection';
import ConfigurableForm from '../../components/common/ConfigurableForm/ConfigurableForm';

import aboutHero from '../../assets/images/about/about-hero.webp';

const trustItems = [
  { title: 'Experienced Team', Icon: Users },
  { title: 'Honest Communication', Icon: MessageSquare },
  { title: 'Licensed & Insured', Icon: ShieldCheck },
  { title: 'Locally Trusted', Icon: MapPinned },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow='About Northline'
        title='Quality You Can Trust.'
        description='We provide dependable roofing and exterior services built on quality workmanship, honest communication, and respect for every home.'
        image={aboutHero}
        type='white'
        primaryAction={{
          label: 'Get Free Estimate',
          to: '/request-estimate',
        }}
        secondaryAction={{
          label: 'View Our Services',
          to: '/services',
        }}
      />
      <TrustStrip items={trustItems} ariaLabel='About Us' />

      <OurStory />
      <Values />
      <Team />
      <ConversionSection
        eyebrow='Request an Estimate'
        title='Start With a Few Project Details'
        description='Complete the form and a member of our team will contact you to review the project and arrange the next appropriate step.'
        // benefits={[
        //   'Free project estimate',
        //   'No-obligation consultation',
        //   'Clear project recommendations',
        // ]}
        // buttonText='Get Free Estimate'
        // buttonTo='/contact'
        // phone='(215) 555-0198'
        // phoneHref='tel:+12155550198'
        // preferToSpeak
        // emergency
        className='green'
      >
        <ConfigurableForm />
      </ConversionSection>
    </>
  );
}

export default AboutPage;

// <PageHero
//   eyebrow='Roofing Services'
//   title='Roof Replacement'
//   description='A new roof is one of the best ways to protect your home and increase its value. We provide complete roof replacements with high-quality materials and expert installation.'
//   image={servicesHero}
//   type='white'
//   primaryAction={{
//     label: 'Get Free Estimate',
//     to: '/request-estimate',
//   }}
//   secondaryAction={{
//     label: 'View Our Projects',
//     to: '/projects',
//   }}
// />
