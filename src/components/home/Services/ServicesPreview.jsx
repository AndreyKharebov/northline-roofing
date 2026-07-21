import { useServicesCards } from '../../../hooks/useServicesCards';

import SectionHeading from '../../common/SectionHeading/SectionHeading';
import Button from '../../common/Button/Button';
import ServiceCard from './ServiceCard';

import './ServicesPreview.css';

function ServicesPreview() {
  const { data: services = [], isPending, isError, error } = useServicesCards();

  return (
    <section className='services-preview section'>
      <div className='container'>
        <SectionHeading
          eyebrow='What We Do'
          title='Complete Exterior Solutions'
          description='Professional roofing and exterior services designed to protect your home, improve its appearance, and provide long-term value.'
          align='center'
        />

        {isPending && (
          <p className='services-preview__status'>Loading services...</p>
        )}

        {isError && (
          <p className='services-preview__status services-preview__status--error'>
            {error.message}
          </p>
        )}

        {!isPending && !isError && (
          <div className='services-preview__list'>
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        )}

        <div className='services-preview__action'>
          <Button to='/services' variant='secondary'>
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;
