import Hero from '../../components/home/Hero/Hero';
import ServiceArea from '../../components/home/ServiceAreaStrip/ServiceAreaStrip';
import ServicesPreview from '../../components/common/ServicesPreview/ServicesPreview';


import AboutPreview from '../../components/home/About/AboutPreview';
import ProjectsPreview from '../../components/home/Projects/ProjectsPreview';
import ProcessPreview from '../../components/home/Process/ProcessPreview';
import ReviewsPreview from '../../components/home/Reviews/ReviewsPreview';
import FaqPreview from '../../components/home/Faq/FaqPreview';
import EstimatePreview from '../../components/home/Estimate/EstimatePreview';



function HomePage() {
  return (
    <>
      <Hero />
      <ServiceArea />
      <ServicesPreview 
        eyebrow='What We Do'
        title='Complete Exterior Solutions'
        description='Professional roofing and exterior services designed to protect your home, improve its appearance, and provide long-term value.'
        type='green'
      />

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
