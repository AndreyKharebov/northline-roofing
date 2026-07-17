import { Link } from 'react-router-dom';

import './ServiceCard.css';

function ServiceCard({ service }) {
  return (
    <article className='services-card'>
      <Link
        className='services-card__image-link'
        to={`/services/${service.slug}`}
        aria-label={`Learn more about ${service.title}`}
      >
        <img
          className='services-card__image'
          src={service.image}
          alt={service.title}
        />
      </Link>

      <div className='services-card__content'>
        <div className='services-card__icon' aria-hidden='true'>
          N
        </div>

        <h2 className='services-card__title'>{service.title}</h2>

        <p className='services-card__description'>{service.shortDescription}</p>

        <Link className='services-card__link' to={`/services/${service.slug}`}>
          Learn More
          <span aria-hidden='true'> →</span>
        </Link>
      </div>
    </article>
  );
}

export default ServiceCard;
