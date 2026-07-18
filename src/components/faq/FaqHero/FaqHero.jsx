import Button from '../../common/Button/Button';

import faqHeroImage from '../../../assets/images/about-hero.webp';

import './FaqHero.css';

function FaqHero() {
  return (
    <section className='faq-hero'>
      <img
        className='faq-hero__image'
        src={faqHeroImage}
        alt=''
        aria-hidden='true'
      />

      <div className='faq-hero__overlay' />

      <div className='container faq-hero__inner'>
        <div className='faq-hero__content'>
          <p className='faq-hero__eyebrow'>FAQ</p>

          <h1 className='faq-hero__title'>Answers to Common Questions.</h1>

          <p className='faq-hero__description'>
            Everything you need to know about our roofing and exterior services
            across Philadelphia and the surrounding areas.
          </p>

          <div className='faq-hero__actions'>
            <Button to='/request-estimate'>Get Free Estimate</Button>

            <Button to='/projects' variant='secondary'>
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqHero;
