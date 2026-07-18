import './FeaturedReviewCard.css';

function FeaturedReviewCard({ review }) {
  return (
    <article className='featured-review-card'>
      <div
        className='featured-review-card__rating'
        aria-label={`${review.rating} out of 5 stars`}
      >
        <span aria-hidden='true'>{'★'.repeat(review.rating)}</span>
      </div>

      <span className='featured-review-card__quote-mark' aria-hidden='true'>
        ”
      </span>

      <blockquote className='featured-review-card__quote'>
        <p>{review.text}</p>
      </blockquote>

      <div className='featured-review-card__bottom'>
        <footer className='featured-review-card__author'>
          <strong>{review.name}</strong>
          <span>{review.location}</span>
        </footer>

        {review.image && (
          <img
            className='featured-review-card__image'
            src={review.image}
            alt={`Completed Northline project near ${review.location}`}
          />
        )}
      </div>
    </article>
  );
}

export default FeaturedReviewCard;
