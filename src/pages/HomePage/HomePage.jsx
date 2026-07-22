import Hero from '../../components/home/Hero/Hero';
import ServiceArea from '../../components/home/ServiceAreaStrip/ServiceAreaStrip';
import ServicesPreview from '../../components/common/ServicesPreview/ServicesPreview';
import ConversionSection from '../../components/common/ConversionSection/ConversionSection';
import ConfigurableForm from '../../components/common/ConfigurableForm/ConfigurableForm';

import AboutPreview from '../../components/home/About/AboutPreview';
import ProjectsPreview from '../../components/home/Projects/ProjectsPreview';
import ProcessPreview from '../../components/home/Process/ProcessPreview';
import ReviewsPreview from '../../components/home/Reviews/ReviewsPreview';
import FaqPreview from '../../components/home/Faq/FaqPreview';

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
      <ConversionSection
        eyebrow='Request an Estimate'
        title='Start Your Project Today'
        description='Tell us about your roofing or exterior project, and our team will contact you to discuss the next steps.'
        benefits={[
          'Free project estimate',
          'No-obligation consultation',
          'Clear project recommendations',
        ]}
        // buttonText='Get Free Estimate'
        // buttonTo='/contact'
        // phone='(215) 555-0198'
        // phoneHref='tel:+12155550198'
        // preferToSpeak
        // emergency
        className='green'
      >
        <ConfigurableForm />
      </ConversionSection>
    </>
  );
}

export default HomePage;
