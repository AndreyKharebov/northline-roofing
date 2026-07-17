import Button from '../../common/Button/Button';
import SectionHeading from '../../common/SectionHeading/SectionHeading';

import { reviews } from '../../../data/reviews';

import ReviewCard from './ReviewCard';

import './ReviewsPreview.css';

function ReviewsPreview() {
  return (
    <section className='reviews-preview section'>
      <div className='container'>
        <SectionHeading
          eyebrow='What Homeowners Say'
          title='Trusted by Homeowners Across the Region'
          description='Homeowners choose Northline for clear communication, careful workmanship, and dependable project management.'
          align='center'
        />

        <div className='reviews-preview__list'>
          {reviews.slice(0, 3).map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <div className='reviews-preview__action'>
          <Button to='/reviews' variant='secondary'>
            Read All Reviews
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ReviewsPreview;
