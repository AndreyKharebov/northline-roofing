import Button from '../../common/Button/Button';

import { reviews } from '../../../data/reviews';

import FeaturedReviewCard from './FeaturedReviewCard';

import './FeaturedReviews.css';

function FeaturedReviews() {
  const featuredReviews = reviews.filter((review) => review.featured);

  return (
    <section className='featured-reviews section'>
      <div className='container'>
        <div className='featured-reviews__heading'>
          <p className='featured-reviews__eyebrow'>Featured Reviews</p>

          <h2 className='featured-reviews__title'>
            What Our Customers Are Saying
          </h2>
        </div>

        <div className='featured-reviews__grid'>
          {featuredReviews.map((review) => (
            <FeaturedReviewCard key={review.id} review={review} />
          ))}
        </div>

        <div className='featured-reviews__action'>
          <Button href='#all-reviews' variant='secondary'>
            View More Reviews
          </Button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedReviews;
