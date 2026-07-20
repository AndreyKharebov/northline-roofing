import BusinessHours from '../../components/contact/BusinessHours/BusinessHours';
import ContactCta from '../../components/contact/ContactCta/ContactCta';
import ContactMain from '../../components/contact/ContactMain/ContactMain';
import ServiceArea from '../../components/contact/ServiceArea/ServiceArea';

import PageHero from '../../components/common/PageHero/PageHero';

import contactHero from '../../assets/images/contact/contact-hero.webp';

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

      <ContactMain />
      <ServiceArea />
      <BusinessHours />
      <ContactCta />
    </>
  );
}

export default ContactPage;
