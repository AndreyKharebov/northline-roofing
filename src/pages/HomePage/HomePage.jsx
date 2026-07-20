import HomeHero from '../../components/home/homeHero/HomeHero';
import HomeServiceArea from '../../components/home/homeServiceAreaStrip/homeServiceArea';


import ServicesPreview from '../../components/home/Services/ServicesPreview';
import AboutPreview from '../../components/home/About/AboutPreview';
import ProjectsPreview from '../../components/home/Projects/ProjectsPreview';
import ProcessPreview from '../../components/home/Process/ProcessPreview';
import ReviewsPreview from '../../components/home/Reviews/ReviewsPreview';
import FaqPreview from '../../components/home/Faq/FaqPreview';
import EstimatePreview from '../../components/home/Estimate/EstimatePreview';



function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeServiceArea />

      <ServicesPreview />
      <AboutPreview />
      <ProjectsPreview />
      <ProcessPreview />
      <ReviewsPreview />
      <FaqPreview />
      <EstimatePreview />
    </>
  );
}

export default HomePage;
