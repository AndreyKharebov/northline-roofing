import { Link } from 'react-router-dom';

import './RelatedServiceProjects.css';

function RelatedServiceProjects({ projects, serviceTitle }) {
  if (!projects.length) {
    return null;
  }

  return (
    <section className='related-service-projects'>
      <p className='related-service-projects__eyebrow'>
        Related {serviceTitle} Projectsg
      </p>
      <div className='related-service-projects__grid'>
        {projects.slice(0, 3).map((project) => (
          <article
            className='related-service-projects__card'
            key={project.slug}
          >
            <img
              src={project.afterImage}
              alt={project.imageAlt ?? project.title}
            />

            <div className='related-service-projects__content'>
              <p className='related-service-projects__location'>
                {project.location}
              </p>

              <h3>{project.title}</h3>

              <p className='related-service-projects__summary'>
                {project.summary}
              </p>

              <Link to={`/projects/${project.slug}`}>
                View Project
                <span aria-hidden='true'> →</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
      <Link className='related-service-projects__all' to='/projects'>
        View All Projects
        <span aria-hidden='true'> →</span>
      </Link>
    </section>
  );
}

export default RelatedServiceProjects;
