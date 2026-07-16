import Button from '../../common/Button/Button';

import heroHouse from '../../../assets/images/hero-house.webp';

import './Hero.css';

function Hero() {
  return (
    <section className='hero'>
      <div className='container hero__inner'>
        <div className='hero__content'>
          <p className='hero__eyebrow'>Trusted Roofing Professionals</p>

          <h1 className='hero__title'>Protecting What Matters Most</h1>

          <p className='hero__description'>
            Professional roofing and exterior services for homeowners throughout
            Philadelphia and the surrounding communities.
          </p>

          <div className='hero__actions'>
            <Button to='/request-estimate'>Get Free Estimate</Button>

            <Button to='/projects' variant='secondary'>
              View Our Work
            </Button>
          </div>
        </div>

        <div className='hero__media'>
          <img
            className='hero__image'
            src={heroHouse}
            alt='Modern family home with a professionally installed roof'
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
