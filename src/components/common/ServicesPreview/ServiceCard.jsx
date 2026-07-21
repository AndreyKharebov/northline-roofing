import { Link } from 'react-router-dom';

import './ServiceCard.css';

function ServiceCard({ service, extended }) {
  const { title, slug, shortDescription, cardImage, cardIcon } = service;

  console.log(shortDescription);

  const serviceUrl = `/services/${slug}`;

  return (
    <article className={`service-card ${extended ? 'extended' : ''}`}>
      <div className='service-card__media'>
        <img
          className='service-card__image'
          src={cardImage.src}
          alt={cardImage.alt}
          loading='lazy'
        />
      </div>

      <div className='service-card__content'>
        <div className='service-card__icon'>
          <img
            className='service-card__icon-image'
            src={cardIcon.src}
            alt=''
            aria-hidden='true'
          />
        </div>

        <h3 className='service-card__title'>
          <Link className='service-card__title-link' to={serviceUrl}>
            {title}
          </Link>
        </h3>

        {extended && (
          <p className='service-card__description'>{shortDescription}</p>
        )}

        <Link
          className='service-card__link'
          to={serviceUrl}
          aria-label={`Learn more about ${title}`}
        >
          Learn More
          <span className='service-card__arrow' aria-hidden='true'>
            →
          </span>
        </Link>
      </div>
    </article>
  );
}

export default ServiceCard;
