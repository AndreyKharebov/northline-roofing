import { Link } from 'react-router-dom';

import './ServiceCard.css';

function ServiceCard({ service }) {
  return (
    <article className='service-card'>
      <div className='service-card__icon' aria-hidden='true'>N</div>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__description">{service.shortDescription}</p>
      <Link 
        className='service-card__link'
        to={`/services/${service.slug}`}>
          Learn More
          <span aria-hidden="true"> →</span>
      </Link>
    </article>
  );
}

export default ServiceCard;
