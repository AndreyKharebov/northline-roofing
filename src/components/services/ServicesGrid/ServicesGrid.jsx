import SectionHeading from '../../common/SectionHeading/SectionHeading';

import { services } from '../../../data/services';

import ServiceCard from './ServiceCard';

import './ServicesGrid.css';

function ServicesGrid() {
  return (
    <section className='services-grid-section section'>
      <div className='container'>
        <SectionHeading
          eyebrow='Our Services'
          title='Quality Services, Built to Last'
          description='We offer a full range of exterior services for residential properties. Each project is completed with care, precision, and attention to detail.'
          align='center'
        />

        <div className='services-grid-section__grid'>
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;
