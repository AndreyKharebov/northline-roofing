import Hero from '../../components/home/Hero/hero';
import Stats from '../../components/home/Stats/Stats';
import ServicesPreview from '../../components/home/Services/ServicesPreview';
import AboutPreview from '../../components/home/About/AboutPreview';
import ProjectsPreview from '../../components/home/Projects/ProjectsPreview';

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesPreview />
      <AboutPreview />
      <ProjectsPreview />
    </>
  );
}

export default HomePage;
