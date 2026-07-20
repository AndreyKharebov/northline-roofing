import { Link } from 'react-router-dom';

import './ProjectDetailsHero.css';

function ProjectDetailsHero({ project }) {
  return (
    <section className='project-details-hero'>
      <img
        className='project-details-hero__image'
        src={project.heroImage}
        alt={project.heroImageAlt}
      />

      <div className='project-details-hero__overlay' aria-hidden='true' />

      <div className='container project-details-hero__inner'>
        <div className='project-details-hero__content'>
          <nav
            className='project-details-hero__breadcrumbs'
            aria-label='Breadcrumb'
          >
            <Link to='/'>Home</Link>

            <span aria-hidden='true'>›</span>

            <Link to='/projects'>Projects</Link>

            <span aria-hidden='true'>›</span>

            <span aria-current='page'>{project.title}</span>
          </nav>

          <p className='project-details-hero__eyebrow'>{project.category}</p>

          <h1 className='project-details-hero__title'>{project.title}</h1>

          <p className='project-details-hero__location'>
            <span aria-hidden='true'>●</span>
            {project.location}
          </p>

          <p className='project-details-hero__description'>
            {project.heroDescription}
          </p>

          <div className='project-details-hero__actions'>
            <Link className='button button--primary' to='/request-estimate'>
              Get Free Estimate
            </Link>

            <Link className='button button--outline' to='/projects'>
              View Our Work
            </Link>
          </div>

          {project.rating && (
            <div className='project-details-hero__rating'>
              <span className='project-details-hero__stars' aria-hidden='true'>
                ★★★★★
              </span>

              <span className='sr-only'>
                Rated {project.rating.value} out of 5
              </span>

              <strong>{project.rating.value}</strong>

              <span>({project.rating.reviewsCount})</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectDetailsHero;
