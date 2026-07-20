import './ProjectReview.css';

function ProjectReview({ review }) {
  if (!review) {
    return null;
  }

  return (
    <section className='project-review section'>
      <div className='container project-review__card'>
        <img
          className='project-review__image'
          src={review.image}
          alt={review.imageAlt}
          loading='lazy'
        />

        <div className='project-review__overlay' aria-hidden='true' />

        <div className='project-review__content'>
          <span className='project-review__quote-mark' aria-hidden='true'>
            “
          </span>

          <blockquote>{review.quote}</blockquote>

          <div className='project-review__stars'>
            <span aria-hidden='true'>{'★'.repeat(review.rating)}</span>

            <span className='sr-only'>Rated {review.rating} out of 5</span>
          </div>

          <strong>{review.name}</strong>

          <span className='project-review__location'>{review.location}</span>
        </div>
      </div>
    </section>
  );
}

export default ProjectReview;
