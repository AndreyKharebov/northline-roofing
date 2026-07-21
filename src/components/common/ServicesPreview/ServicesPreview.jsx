import { useServicesCards } from '../../../hooks/useServicesCards';

import SectionHeading from '../SectionHeading/SectionHeading';
import Button from '../Button/Button';
import ServiceCard from './ServiceCard';

import './ServicesPreview.css';

function ServicesPreview({
  eyebrow,
  title,
  description,
  align = 'center',
  extended = false,
  type = 'white',
}) {
  const { data: services = [], isPending, isError, error } = useServicesCards();

  return (
    <section
      className={`services-preview ${type === 'green' ? 'services-preview--green' : ''} section`}
    >
      <div className='container'>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align={align}
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
              <ServiceCard
                key={service.slug}
                service={service}
                extended={extended}
              />
            ))}
          </div>
        )}

        {!extended && (
          <div className='services-preview__action'>
            <Button to='/services' variant='secondary'>
              View All Services
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

export default ServicesPreview;
