import Button from '../../common/Button/Button';

import projectsHero from '../../../assets/images/projects-hero.webp';

import './ProjectsHero.css';

function ProjectsHero() {
  return (
    <section className='projects-hero'>
      <img
        className='projects-hero__image'
        src={projectsHero}
        alt=''
        aria-hidden='true'
      />

      <div className='projects-hero__overlay' />

      <div className='container projects-hero__inner'>
        <div className='projects-hero__content'>
          <p className='projects-hero__eyebrow'>Our Work</p>

          <h1 className='projects-hero__title'>Projects Built to Protect.</h1>

          <p className='projects-hero__description'>
            See how we help homeowners across Greater Philadelphia with roofing
            and exterior solutions delivered with quality, care, and attention
            to detail.
          </p>

          <div className='projects-hero__actions'>
            <Button to='/request-estimate'>Get Free Estimate</Button>

            <Button to='/services' variant='secondary-light'>
              View Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsHero;
