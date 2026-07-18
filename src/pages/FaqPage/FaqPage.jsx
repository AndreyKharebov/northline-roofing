import FaqContent from '../../components/faq/FaqContent/FaqContent';
import FaqHero from '../../components/faq/FaqHero/FaqHero';
import QuestionForm from '../../components/faq/QuestionForm/QuestionForm';
import TrustStrip from '../../components/faq/TrustStrip/TrustStrip';

function FaqPage() {
  return (
    <>
      <FaqHero />
      <TrustStrip />
      <FaqContent />
      <QuestionForm />
    </>
  );
}

export default FaqPage;
