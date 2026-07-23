import { Users, MessageSquare, ShieldCheck, MapPinned } from 'lucide-react';

import OurStory from '../../components/about/OurStory/OurStory';
import Team from '../../components/about/Team/Team';
import PageHero from '../../components/common/PageHero/PageHero';
import TrustStrip from '../../components/common/TrustStrip/TrustStrip';
import ConversionSection from '../../components/common/ConversionSection/ConversionSection';
import ConfigurableForm from '../../components/common/ConfigurableForm/ConfigurableForm';
import FeatureSteps from '../../components/common/FeatureSteps/FeatureSteps';
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
      <FeatureSteps
        eyebrow='Our Values'
        title='How We Work, Every Day'
        align='center'
        version='values'
        type='green'
      />

      <Team />
      <ConversionSection
        eyebrow='Request an Estimate'
        title='A Team You Can Trust'
        description={`We're committed to honest communication, quality workmanship, and dependable service. Reach out today to discuss your project.`}
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

export default AboutPage;
