import BusinessHours from '../../components/contact/BusinessHours/BusinessHours';
import ContactCta from '../../components/contact/ContactCta/ContactCta';
import ContactHero from '../../components/contact/ContactHero/ContactHero';
import ContactMain from '../../components/contact/ContactMain/ContactMain';
import ServiceArea from '../../components/contact/ServiceArea/ServiceArea';

function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactMain />
      <ServiceArea />
      <BusinessHours />
      <ContactCta />
    </>
  );
}

export default ContactPage;
