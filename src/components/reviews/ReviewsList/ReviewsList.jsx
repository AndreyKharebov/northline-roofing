import { reviews } from '../../../data/reviews';

import ReviewRow from './ReviewRow';

import './ReviewsList.css';

function ReviewsList() {
  const regularReviews = reviews.filter((review) => !review.featured);

  return (
    <section className='reviews-list section' id='all-reviews'>
      <div className='container'>
        <h2 className='reviews-list__title'>More Reviews From Homeowners</h2>

        <div className='reviews-list__items'>
          {regularReviews.map((review) => (
            <ReviewRow key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewsList;
