import './ReviewCard.css';

function ReviewCard({ review }) {
  return (
    <article className='review-card'>
      <div
        className='review-card__rating'
        aria-label={`${review.rating} out of 5 stars`}
      >
        {Array.from({ length: review.rating }).map((_, index) => (
          <span key={index} aria-hidden='true'>
            ★
          </span>
        ))}
      </div>

      <blockquote className='review-card__quote'>
        <p>{review.text}</p>
      </blockquote>

      <footer className='review-card__footer'>
        <strong className='review-card__name'>{review.name}</strong>

        <span className='review-card__location'>{review.location}</span>
      </footer>
    </article>
  );
}

export default ReviewCard;
