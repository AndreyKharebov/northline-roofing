import { ClipboardCheck, ShieldCheck, Receipt, BadgeCheck } from 'lucide-react';

import FaqContent from '../../components/faq/FaqContent/FaqContent';
import QuestionForm from '../../components/faq/QuestionForm/QuestionForm';

import PageHero from '../../components/common/PageHero/PageHero';
import TrustStrip from '../../components/common/TrustStrip/TrustStrip';

import faqHero from '../../assets/images/faq/faq-hero.webp';

const trustItems = [
  { title: 'Workmanship Warranty', Icon: BadgeCheck },
  { title: 'Free Estimates', Icon: ClipboardCheck },
  { title: 'Licensed & Insured', Icon: ShieldCheck },
  { title: 'Honest Pricing', Icon: Receipt },
];

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
      <TrustStrip items={trustItems} ariaLabel='FAQ' />

      <FaqContent />
      <QuestionForm />
    </>
  );
}

export default FaqPage;
