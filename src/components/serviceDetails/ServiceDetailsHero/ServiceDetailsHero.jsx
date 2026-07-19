import { Link } from 'react-router-dom';

import './ServiceDetailsHero.css';

function ServiceDetailsHero({ service }) {
  return (
    <section className='service-details-hero'>
      <img
        className='service-details-hero__image'
        src={service.heroImage}
        alt={`${service.title} service by Northline Roofing`}
      />

      <div className='service-details-hero__overlay' aria-hidden='true' />

      <div className='container service-details-hero__inner'>
        <div className='service-details-hero__content'>
          <nav
            className='service-details-hero__breadcrumbs'
            aria-label='Breadcrumb'
          >
            <Link to='/'>Home</Link>

            <span aria-hidden='true'>›</span>

            <Link to='/services'>Services</Link>

            <span aria-hidden='true'>›</span>

            <span aria-current='page'>{service.title}</span>
          </nav>

          <p className='service-details-hero__eyebrow'>Roofing Services</p>

          <h1 className='service-details-hero__title'>{service.title}</h1>

          <p className='service-details-hero__description'>
            {service.heroDescription}
          </p>

          <div className='service-details-hero__actions'>
            <Link className='button button--primary' to='/request-estimate'>
              Get Free Estimate
            </Link>

            <Link className='button button--outline' to='/projects'>
              View Our Work
            </Link>
          </div>

          {service.rating && (
            <div className='service-details-hero__rating'>
              <span className='service-details-hero__stars' aria-hidden='true'>
                ★★★★★
              </span>

              <span className='sr-only'>
                Rated {service.rating.value} out of 5
              </span>

              <strong>{service.rating.value}</strong>

              <span>({service.rating.reviewsCount})</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ServiceDetailsHero;
