import ServiceHelpCard from './ServiceHelpCard';
import ServiceFaq from './ServiceFaq';

import './ServiceFaqSection.css';

function ServiceFaqSection({ faq }) {
  if (!faq?.length) {
    return null;
  }

  return (
    <section className='service-faq-section section'>
      <div className='container service-faq-section__layout'>
        <ServiceHelpCard />

        <ServiceFaq faq={faq} />
      </div>
    </section>
  );
}

export default ServiceFaqSection;
