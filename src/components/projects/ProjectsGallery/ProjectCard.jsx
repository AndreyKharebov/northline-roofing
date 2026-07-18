import { Link } from 'react-router-dom';

import './ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <article className='projects-card'>
      <Link
        className='projects-card__media'
        to={`/projects/${project.slug}`}
        aria-label={`View ${project.title} project`}
      >
        <div className='projects-card__image-side'>
          <img
            className='projects-card__image'
            src={project.beforeImage}
            alt={`${project.title} before work`}
          />

          <span className='projects-card__label'>Before</span>
        </div>

        <div className='projects-card__divider'>
          <span aria-hidden='true'>↔</span>
        </div>

        <div className='projects-card__image-side'>
          <img
            className='projects-card__image'
            src={project.afterImage}
            alt={`${project.title} after work`}
          />

          <span className='projects-card__label projects-card__label--right'>
            After
          </span>
        </div>
      </Link>

      <div className='projects-card__content'>
        <h2 className='projects-card__title'>
          <Link to={`/projects/${project.slug}`}>{project.title}</Link>
        </h2>

        <p className='projects-card__location'>{project.location}</p>

        <span className='projects-card__tag'>{project.serviceLabel}</span>
      </div>
    </article>
  );
}

export default ProjectCard;
