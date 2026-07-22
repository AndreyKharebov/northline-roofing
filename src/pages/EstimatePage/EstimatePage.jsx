import { ClipboardCheck, ShieldCheck, Receipt, Clock3 } from 'lucide-react';

import EstimateSteps from '../../components/estimate/EstimateSteps/EstimateSteps';

import PageHero from '../../components/common/PageHero/PageHero';
import TrustStrip from '../../components/common/TrustStrip/TrustStrip';
import ConversionSection from '../../components/common/ConversionSection/ConversionSection';
import ConfigurableForm from '../../components/common/ConfigurableForm/ConfigurableForm';

import estimateHero from '../../assets/images/estimate/estimate-hero.webp';

const trustItems = [
  { title: 'Free Estimates', Icon: ClipboardCheck },
  { title: 'Fast Response', Icon: Clock3 },
  { title: 'No Hidden Fees', Icon: Receipt },
  { title: 'Licensed & Insured', Icon: ShieldCheck },
];

function EstimatePage() {
  return (
    <>
      <PageHero
        eyebrow='Free Project Estimate'
        title={`Let's Get Started`}
        description={`Tell us about your project, and we'll reach out to discuss your goals, answer your questions, and schedule your free estimate.`}
        image={estimateHero}
        type='white'
        primaryAction={{
          label: 'View Our Services',
          to: '/services',
        }}
        secondaryAction={{
          label: 'View Our Projects',
          to: '/projects',
        }}
      />
      <TrustStrip items={trustItems} ariaLabel='Estimate Request' />
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
        preferToSpeak
        emergency
        className='white'
      >
        <ConfigurableForm />
      </ConversionSection>
      <EstimateSteps />
    </>
  );
}

export default EstimatePage;
