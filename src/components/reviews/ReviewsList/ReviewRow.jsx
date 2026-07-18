import './ReviewRow.css';

function ReviewRow({ review }) {
  const initial = review.name.charAt(0);

  return (
    <article className='review-row'>
      <div className='review-row__avatar' aria-hidden='true'>
        {initial}
      </div>

      <div className='review-row__author'>
        <strong>{review.name}</strong>
        <span>{review.location}</span>
      </div>

      <div
        className='review-row__rating'
        aria-label={`${review.rating} out of 5 stars`}
      >
        <span aria-hidden='true'>{'★'.repeat(review.rating)}</span>
      </div>

      <p className='review-row__text'>{review.text}</p>

      <div
        className={`review-row__source review-row__source--${review.source}`}
        aria-label={`${review.source} review`}
      >
        {review.source === 'google' ? 'G' : 'f'}
      </div>
    </article>
  );
}

export default ReviewRow;
