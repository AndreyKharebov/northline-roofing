import Button from '../../common/Button/Button';

import './ContactCta.css';

function ContactCta() {
  return (
    <section className='contact-cta'>
      <div className='container contact-cta__inner'>
        <div className='contact-cta__content'>
          <p className='contact-cta__eyebrow'>Ready to Get Started?</p>

          <h2 className='contact-cta__title'>Request Your Free Estimate</h2>

          <p className='contact-cta__description'>
            Tell us about your property and let our team help you plan the next
            step.
          </p>
        </div>

        <div className='contact-cta__actions'>
          <Button to='/request-estimate'>Get Free Estimate</Button>

          <a href='tel:+12155550198'>
            Or call <strong>(215) 555-0198</strong>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactCta;
