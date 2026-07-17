import Button from '../../common/Button/Button';

import './ServicesHero.css';

function ServicesHero() {
  return (
    <section className='services-hero'>
      <div className='services-hero__overlay'>
        <div className='container services-hero__inner'>
          <div className='services-hero__content'>
            <p className='services-hero__eyebrow'>Our Services</p>

            <h1 className='services-hero__title'>
              Complete Exterior Solutions
            </h1>

            <p className='services-hero__description'>
              From roofing and siding to storm damage repairs and more, we
              deliver quality workmanship and dependable service to protect and
              enhance your home.
            </p>

            <div className='services-hero__actions'>
              <Button to='/request-estimate'>Get Free Estimate</Button>

              <Button to='/projects' variant='secondary-light'>
                View Our Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesHero;
