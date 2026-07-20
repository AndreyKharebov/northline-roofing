import Button from '../../common/Button/Button';

import heroHouse from '../../../assets/images/home/home-hero-house.webp';

import './Hero.css';

function HomeHero() {
  return (
    <section className='hero'>
      <div className='container hero__inner'>
        <div className='hero__content'>
          <div className='hero__eyebrow'>
            <span className='hero__eyebrow-mark' aria-hidden='true' />

            <span>Philadelphia Roofing & Exterior Experts</span>
          </div>

          <h1 className='hero__title'>
            A Stronger Roof.
            <span className='hero__title-accent'> A Safer Home.</span>
          </h1>

          <p className='hero__description'>
            Reliable roofing, siding, gutter, and exterior solutions built to
            protect your home through every season.
          </p>

          <div className='hero__actions'>
            <Button to='/request-estimate'>Get Free Estimate</Button>

            <Button to='/projects' variant='secondary'>
              Explore Our Projects
            </Button>
          </div>

          <ul className='hero__benefits' aria-label='Company benefits'>
            <li className='hero__benefit'>
              <span className='hero__benefit-icon' aria-hidden='true'>
                ✓
              </span>

              <span>Licensed & insured</span>
            </li>

            <li className='hero__benefit'>
              <span className='hero__benefit-icon' aria-hidden='true'>
                ✓
              </span>

              <span>Free inspections</span>
            </li>

            <li className='hero__benefit'>
              <span className='hero__benefit-icon' aria-hidden='true'>
                ✓
              </span>

              <span>Workmanship warranty</span>
            </li>
          </ul>
        </div>

        <div className='hero__media'>
          <div className='hero__image-frame'>
            <img
              className='hero__image'
              src={heroHouse}
              alt='Modern family home with a professionally installed roof'
            />

            <div className='hero__image-shade' aria-hidden='true' />

            <div className='hero__project-card'>
              <span className='hero__project-label'>Recent project</span>

              <strong className='hero__project-title'>
                Complete roof replacement
              </strong>

              <span className='hero__project-location'>
                Philadelphia, Pennsylvania
              </span>
            </div>
          </div>

          <div className='hero__rating-card'>
            <div className='hero__rating-stars' aria-label='Five-star rating'>
              ★★★★★
            </div>

            <p className='hero__rating-text'>
              Trusted by homeowners across the Philadelphia area
            </p>
          </div>

          <div className='hero__experience-card'>
            <strong className='hero__experience-number'>15+</strong>

            <span className='hero__experience-text'>
              Years of roofing experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
