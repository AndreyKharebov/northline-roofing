import Hero from '../../components/home/Hero/Hero';
import ServiceArea from '../../components/home/ServiceAreaStrip/ServiceAreaStrip';
import ServicesPreview from '../../components/common/ServicesPreview/ServicesPreview';
import FeatureSteps from '../../components/common/FeatureSteps/FeatureSteps';
import ConversionSection from '../../components/common/ConversionSection/ConversionSection';
import ConfigurableForm from '../../components/common/ConfigurableForm/ConfigurableForm';

import AboutPreview from '../../components/home/About/AboutPreview';
import ProjectsPreview from '../../components/home/Projects/ProjectsPreview';
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
      <FeatureSteps
        eyebrow='Our Process'
        title='Simple. Transparent. Professional.'
        description='A clear process keeps your project organized from the first conversation through the final walkthrough.'
        align='center'
        version='process'
      />
      <ReviewsPreview />
      <FaqPreview />
      <ConversionSection
        eyebrow='Request an Estimate'
        title='Protect Your Home with Confidence'
        description='Whether you need a roof replacement, repairs, or exterior improvements, our team is ready to help. Request your free estimate today.'
        benefits={[
          'Free project estimate',
          'No-obligation consultation',
          'Clear project recommendations',
        ]}
        buttonText='Get Free Estimate'
        buttonTo='/contact'
        phone='(215) 555-0198'
        phoneHref='tel:+12155550198'
        // preferToSpeak
        // emergency
        className='green'
      >
        <ConfigurableForm version='short' />
      </ConversionSection>
    </>
  );
}

export default HomePage;
