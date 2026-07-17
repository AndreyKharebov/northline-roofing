import { Link } from 'react-router-dom';

import './ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <article className='project-card'>
      <Link
        className='project-card__image-link'
        to={`/projects/${project.slug}`}
        aria-label={`View ${project.title} project`}
      >
        <div className='project-card__images'>
          <figure className='project-card__image-wrapper'>
            <img
              className='project-card__image'
              src={project.beforeImage}
              alt={`${project.title} before work`}
            />

            <figcaption className='project-card__label'>Before</figcaption>
          </figure>

          <figure className='project-card__image-wrapper'>
            <img
              className='project-card__image'
              src={project.afterImage}
              alt={`${project.title} after work`}
            />

            <figcaption className='project-card__label'>After</figcaption>
          </figure>
        </div>
      </Link>

      <div className='project-card__content'>
        <h3 className='project-card__title'>
          <Link to={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p className='project-card__location'>{project.location}</p>
      </div>
    </article>
  );
}

export default ProjectCard;
