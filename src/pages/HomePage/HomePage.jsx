import Hero from '../../components/home/Hero/hero';
import Stats from '../../components/home/Stats/Stats';
import ServicesPreview from '../../components/home/Services/ServicesPreview';
import AboutPreview from '../../components/home/About/AboutPreview';

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesPreview />
      <AboutPreview />
    </>
  );
}

export default HomePage;
