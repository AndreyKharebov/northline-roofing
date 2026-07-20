import ServicesCta from '../../components/services/ServicesCta/ServicesCta';
import ServicesGrid from '../../components/services/ServicesGrid/ServicesGrid';
import Stats from '../../components/home/Stats/Stats'; // NEED TO MOVE TO COMMON
import PageHero from '../../components/common/PageHero/PageHero';

import servicesHero from '../../assets/images/services/services-hero.webp';

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow='Roofing Services'
        title='Complete Exterior Solutions'
        description='From roof replacement and repair to siding, gutters, windows, and storm damage restoration, we provide reliable exterior services designed to protect, improve, and enhance your home.'
        image={servicesHero}
        type='white'
        primaryAction={{
          label: 'Get Free Estimate',
          to: '/request-estimate',
        }}
        secondaryAction={{
          label: 'View Our Projects',
          to: '/projects',
        }}
      />

      <Stats />
      <ServicesGrid />
      <ServicesCta />
    </>
  );
}

export default ServicesPage;
