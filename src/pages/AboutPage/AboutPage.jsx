import AboutBottom from '../../components/about/AboutBottom/AboutBottom';
import OurStory from '../../components/about/OurStory/OurStory';
import Team from '../../components/about/Team/Team';
import Values from '../../components/about/Values/Values';

import PageHero from '../../components/common/PageHero/PageHero';

import aboutHero from '../../assets/images/about/about-hero.webp';

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow='About Northline'
        title='Quality You Can Trust.'
        description='We provide dependable roofing and exterior services built on quality workmanship, honest communication, and respect for every home.'
        image={aboutHero}
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
      <OurStory />
      <Values />
      <Team />
      <AboutBottom />
    </>
  );
}

export default AboutPage;

// <PageHero
//   eyebrow='Roofing Services'
//   title='Roof Replacement'
//   description='A new roof is one of the best ways to protect your home and increase its value. We provide complete roof replacements with high-quality materials and expert installation.'
//   image={servicesHero}
//   type='white'
//   primaryAction={{
//     label: 'Get Free Estimate',
//     to: '/request-estimate',
//   }}
//   secondaryAction={{
//     label: 'View Our Projects',
//     to: '/projects',
//   }}
// />
