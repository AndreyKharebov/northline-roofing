import Button from '../../common/Button/Button';

import reviewsHeroImage from '../../../assets/images/about-hero.webp';

import './ReviewsHero.css';

function ReviewsHero() {
  return (
    <section className='reviews-hero'>
      <img
        className='reviews-hero__image'
        src={reviewsHeroImage}
        alt=''
        aria-hidden='true'
      />

      <div className='reviews-hero__overlay' />

      <div className='container reviews-hero__inner'>
        <div className='reviews-hero__content'>
          <p className='reviews-hero__eyebrow'>Reviews</p>

          <h1 className='reviews-hero__title'>
            Trusted by Homeowners Across Philadelphia
          </h1>

          <p className='reviews-hero__description'>
            We are proud to deliver dependable roofing and exterior services
            with honest communication, careful workmanship, and results designed
            to last.
          </p>

          <div className='reviews-hero__actions'>
            <Button to='/request-estimate'>Get Free Estimate</Button>

            <Button to='/projects' variant='secondary-light'>
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewsHero;
