import { ClipboardCheck, ShieldCheck, BadgeCheck, Clock3 } from 'lucide-react';

import BusinessHours from '../../components/contact/BusinessHours/BusinessHours';
import ContactMain from '../../components/contact/ContactMain/ContactMain';
import ServiceArea from '../../components/contact/ServiceArea/ServiceArea';

import PageHero from '../../components/common/PageHero/PageHero';
import TrustStrip from '../../components/common/TrustStrip/TrustStrip';

import contactHero from '../../assets/images/contact/contact-hero.webp';

const trustItems = [
  { title: 'Free Estimates', Icon: ClipboardCheck },
  { title: 'Fast Response', Icon: Clock3 },
  { title: 'Licensed & Insured', Icon: ShieldCheck },
  { title: 'Workmanship Warranty', Icon: BadgeCheck },
];

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow='Contact Northline'
        title={`We're Ready When You Are`}
        description={`Tell us about your project, and we'll help you find the right solution for your home. From roofing and siding to gutters, windows, skylights, and storm damage restoration, we're just a message away.`}
        image={contactHero}
        type='white'
        primaryAction={{
          label: 'Call (215) 555-0198',
          href: 'tel:+12155550198',
        }}
        secondaryAction={{
          label: 'Send a Message',
          href: '#contact-form',
        }}
      />
      <TrustStrip items={trustItems} ariaLabel='Contact Us' />

      <ContactMain />
      <ServiceArea />
      <BusinessHours />
    </>
  );
}

export default ContactPage;
