import AboutBottom from '../../components/about/AboutBottom/AboutBottom';
import AboutHero from '../../components/about/AboutHero/AboutHero';
import OurStory from '../../components/about/OurStory/OurStory';
import Team from '../../components/about/Team/Team';
import Values from '../../components/about/Values/Values';

function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <Values />
      <Team />
      <AboutBottom />
    </>
  );
}

export default AboutPage;
