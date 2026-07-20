import FaqContent from '../../components/faq/FaqContent/FaqContent';
import QuestionForm from '../../components/faq/QuestionForm/QuestionForm';
import TrustStrip from '../../components/faq/TrustStrip/TrustStrip';

import PageHero from '../../components/common/PageHero/PageHero';

import faqHero from '../../assets/images/faq/faq-hero.webp';

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow='FAQ'
        title='Everything You Need to Know'
        description='Browse answers to frequently asked questions about our roofing, siding, gutters, windows, and storm damage services throughout Philadelphia and the surrounding areas.'
        image={faqHero}
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

      <TrustStrip />
      <FaqContent />
      <QuestionForm />
    </>
  );
}

export default FaqPage;
