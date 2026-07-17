import SectionHeading from '../../common/SectionHeading/SectionHeading';
import Button from '../../common/Button/Button';

import './ServicesPreview.css';

import { services } from '../../../data/services';
import ServiceCard from './ServiceCard';

function ServicesPreview() {
  return (
    <section className='services-preview section'>
      <div className='container'>
        <SectionHeading
          eyebrow='What We Do'
          title='Complete Exterior Solutions'
          description='Professional roofing and exterior services designed to protect your home, improve its appearance, and provide long-term value.'
          align='center'
        />

        <div className='services-preview__grid'>
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
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
