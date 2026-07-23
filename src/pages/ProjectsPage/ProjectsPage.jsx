import { House, SearchCheck, Hammer, ThumbsUp } from 'lucide-react';

import PageHero from '../../components/common/PageHero/PageHero';
import TrustStrip from '../../components/common/TrustStrip/TrustStrip';
import ConversionSection from '../../components/common/ConversionSection/ConversionSection';
import ConfigurableForm from '../../components/common/ConfigurableForm/ConfigurableForm';
import ProjectsGallery from '../../components/projects/ProjectsGallery/ProjectsGallery';

import projectsHero from '../../assets/images/projects/projects-hero.webp';

const trustItems = [
  { title: '500+ Completed Projects', Icon: House },
  { title: 'Attention to Detail', Icon: SearchCheck },
  { title: 'Quality Craftsmanship', Icon: Hammer },
  { title: '4.9 Customer Satisfaction', Icon: ThumbsUp },
];

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow='Our Projects'
        title='Projects Built to Protect.'
        description='See how we help homeowners across Greater Philadelphia with roofing and exterior solutions delivered with quality, care, and attention to detail.'
        image={projectsHero}
        type='white'
        primaryAction={{
          label: 'Get Free Estimate',
          to: '/request-estimate',
        }}
        secondaryAction={{
          label: 'View Our Services',
          to: '/services',
        }}
      />
      <TrustStrip items={trustItems} ariaLabel='Our Projects' />
      <ProjectsGallery />
      <ConversionSection
        eyebrow='Request an Estimate'
        title='Ready to Start Your Project?'
        description={`Inspired by our recent work? Contact our team to discuss your project and receive a free, no-obligation estimate.`}
        // benefits={[
        //   'Free project estimate',
        //   'No-obligation consultation',
        //   'Clear project recommendations',
        // ]}
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

export default ProjectsPage;
