import Button from '../../common/Button/Button';

import './ServicesCta.css';

function ServicesCta() {
  return (
    <section className='services-cta'>
      <div className='container services-cta__inner'>
        <div className='services-cta__content'>
          <p className='services-cta__eyebrow'>Ready to Get Started?</p>

          <h2 className='services-cta__title'>
            Request Your Free Estimate Today
          </h2>

          <p className='services-cta__description'>
            Tell us about your project and our team will contact you to discuss
            the next steps.
          </p>
        </div>

        <div className='services-cta__actions'>
          <Button to='/request-estimate'>Get Free Estimate</Button>

          <a className='services-cta__phone' href='tel:+12155550198'>
            Or call (215) 555-0198
          </a>
        </div>
      </div>
    </section>
  );
}

export default ServicesCta;
