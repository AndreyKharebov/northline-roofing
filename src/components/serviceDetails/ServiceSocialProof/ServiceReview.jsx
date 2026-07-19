import './ServiceReview.css';

function ServiceReview({ review }) {
  if (!review) {
    return null;
  }

  return (
    <aside className='service-review'>
      <p className='service-review__eyebrow'>What Our Clients Say</p>

      <div className='service-review__card'>
        <span className='service-review__quote-mark' aria-hidden='true'>
          “
        </span>

        <blockquote>{review.quote}</blockquote>

        <div className='service-review__stars'>
          <span aria-hidden='true'>{'★'.repeat(review.rating)}</span>

          <span className='sr-only'>Rated {review.rating} out of 5</span>
        </div>

        <strong>{review.name}</strong>

        <span className='service-review__location'>{review.location}</span>
      </div>
    </aside>
  );
}

export default ServiceReview;
