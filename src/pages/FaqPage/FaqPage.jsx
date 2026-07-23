import { ClipboardCheck, ShieldCheck, Receipt, BadgeCheck } from 'lucide-react';

import FaqContent from '../../components/faq/FaqContent/FaqContent';

import PageHero from '../../components/common/PageHero/PageHero';
import TrustStrip from '../../components/common/TrustStrip/TrustStrip';
import ConversionSection from '../../components/common/ConversionSection/ConversionSection';
import ConfigurableForm from '../../components/common/ConfigurableForm/ConfigurableForm';

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

      <ConversionSection
        eyebrow='Request an Estimate'
        title={`We're Here to Help`}
        description={`If you couldn't find the answer you were looking for, contact our team. We'll be happy to answer your questions and provide a free estimate.`}
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

export default FaqPage;
