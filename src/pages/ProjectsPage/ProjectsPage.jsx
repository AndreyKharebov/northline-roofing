import { House, SearchCheck, Hammer, ThumbsUp } from 'lucide-react';

import PageHero from '../../components/common/PageHero/PageHero';

import ProjectsCta from '../../components/projects/ProjectsCta/ProjectsCta';
import ProjectsGallery from '../../components/projects/ProjectsGallery/ProjectsGallery';
import QualityCommitment from '../../components/projects/QualityCommitment/QualityCommitment';

import projectsHero from '../../assets/images/projects/projects-hero.webp';
import TrustStrip from '../../components/common/TrustStrip/TrustStrip';

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
      <QualityCommitment />
      <ProjectsCta />
    </>
  );
}

export default ProjectsPage;
