import EstimateBenefits from '../../components/estimate/EstimateBenefits/EstimateBenefits';
import EstimateForm from '../../components/estimate/EstimateForm/EstimateForm';
import EstimateHero from '../../components/estimate/EstimateHero/EstimateHero';
import EstimateSteps from '../../components/estimate/EstimateSteps/EstimateSteps';
import EstimateTrust from '../../components/estimate/EstimateTrust/EstimateTrust';

function EstimatePage() {
  return (
    <>
      <EstimateHero />
      <EstimateBenefits />
      <EstimateForm />
      <EstimateSteps />
      <EstimateTrust />
    </>
  );
}

export default EstimatePage;
