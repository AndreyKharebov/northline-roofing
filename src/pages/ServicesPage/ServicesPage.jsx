import ServicesCta from '../../components/services/ServicesCta/ServicesCta';
import ServicesGrid from '../../components/services/ServicesGrid/ServicesGrid';
import ServicesHero from '../../components/services/ServicesHero/ServicesHero';
import Stats from '../../components/home/Stats/Stats'; // NEED TO MOVE TO COMMON

function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <Stats />
      <ServicesGrid />
      <ServicesCta />
    </>
  );
}

export default ServicesPage;
