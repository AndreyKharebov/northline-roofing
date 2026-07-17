import Hero from '../../components/home/Hero/hero';
import Stats from '../../components/home/Stats/Stats';
import ServicesPreview from '../../components/home/Services/ServicesPreview';
import AboutPreview from '../../components/home/About/AboutPreview';
import ProjectsPreview from '../../components/home/Projects/ProjectsPreview';
import ProcessPreview from '../../components/home/Process/ProcessPreview';

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesPreview />
      <AboutPreview />
      <ProjectsPreview />
      <ProcessPreview />
    </>
  );
}

export default HomePage;
