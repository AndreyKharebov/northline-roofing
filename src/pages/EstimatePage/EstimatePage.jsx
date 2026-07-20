import { ClipboardCheck, ShieldCheck, Receipt, Clock3 } from 'lucide-react';

import EstimateForm from '../../components/estimate/EstimateForm/EstimateForm';
import EstimateSteps from '../../components/estimate/EstimateSteps/EstimateSteps';
import EstimateTrust from '../../components/estimate/EstimateTrust/EstimateTrust';

import PageHero from '../../components/common/PageHero/PageHero';
import TrustStrip from '../../components/common/TrustStrip/TrustStrip';

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
      <EstimateForm />
      <EstimateSteps />
      <EstimateTrust />
    </>
  );
}

export default EstimatePage;
