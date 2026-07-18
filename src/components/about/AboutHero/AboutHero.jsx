import Button from '../../common/Button/Button';

import aboutHeroImage from '../../../assets/images/about-hero.webp';

import './AboutHero.css';

function AboutHero() {
  return (
    <section className='about-hero'>
      <img
        className='about-hero__image'
        src={aboutHeroImage}
        alt=''
        aria-hidden='true'
      />

      <div className='about-hero__overlay' />

      <div className='container about-hero__inner'>
        <div className='about-hero__content'>
          <p className='about-hero__eyebrow'>About Northline</p>

          <h1 className='about-hero__title'>Craftsmanship You Can Trust.</h1>

          <p className='about-hero__description'>
            We provide dependable roofing and exterior services built on quality
            workmanship, honest communication, and respect for every home.
          </p>

          <div className='about-hero__actions'>
            <Button to='/request-estimate'>Get Free Estimate</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
