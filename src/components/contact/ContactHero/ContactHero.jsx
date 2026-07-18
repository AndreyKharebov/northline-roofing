import Button from '../../common/Button/Button';

import contactHeroImage from '../../../assets/images/projects-hero.webp';

import './ContactHero.css';

function ContactHero() {
  return (
    <section className='contact-hero'>
      <img
        className='contact-hero__image'
        src={contactHeroImage}
        alt=''
        aria-hidden='true'
      />

      <div className='contact-hero__overlay' />

      <div className='container contact-hero__inner'>
        <div className='contact-hero__content'>
          <p className='contact-hero__eyebrow'>Contact Northline</p>

          <h1 className='contact-hero__title'>
            Let’s Talk About Your Project.
          </h1>

          <p className='contact-hero__description'>
            Contact our team to discuss roofing, siding, gutters, windows,
            skylights, or storm-related exterior damage throughout Greater
            Philadelphia.
          </p>

          <div className='contact-hero__actions'>
            <Button href='tel:+12155550198'>Call (215) 555-0198</Button>

            <Button href='#contact-form' variant='secondary-light'>
              Send a Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;
