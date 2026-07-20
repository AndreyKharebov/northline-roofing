import EstimateBenefits from '../../components/estimate/EstimateBenefits/EstimateBenefits';
import EstimateForm from '../../components/estimate/EstimateForm/EstimateForm';
import EstimateSteps from '../../components/estimate/EstimateSteps/EstimateSteps';
import EstimateTrust from '../../components/estimate/EstimateTrust/EstimateTrust';

import PageHero from '../../components/common/PageHero/PageHero';

import estimateHero from '../../assets/images/estimate/estimate-hero.webp';

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

      <EstimateBenefits />
      <EstimateForm />
      <EstimateSteps />
      <EstimateTrust />
    </>
  );
}

export default EstimatePage;

