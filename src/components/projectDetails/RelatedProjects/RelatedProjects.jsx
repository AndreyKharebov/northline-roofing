import { Link } from 'react-router-dom';

import './RelatedProjects.css';

function RelatedProjects({ projects, category }) {
  if (!projects?.length) {
    return null;
  }

  return (
    <section className='related-projects section'>
      <div className='container'>
        <p className='related-projects__eyebrow'>More {category} Projects</p>

        <div className='related-projects__grid'>
          {projects.map((project) => (
            <article className='related-projects__card' key={project.slug}>
              <Link
                className='related-projects__image-link'
                to={`/projects/${project.slug}`}
                aria-label={`View ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={project.imageAlt ?? project.title}
                  loading='lazy'
                />
              </Link>

              <div className='related-projects__content'>
                <h2 className='related-projects__title'>
                  <Link to={`/projects/${project.slug}`}>{project.title}</Link>
                </h2>

                <p className='related-projects__location'>
                  <span aria-hidden='true'>●</span>

                  {project.location}
                </p>

                {project.summary && (
                  <p className='related-projects__summary'>{project.summary}</p>
                )}

                <Link
                  className='related-projects__link'
                  to={`/projects/${project.slug}`}
                  aria-label={`View project: ${project.title}`}
                >
                  View Project
                  <span aria-hidden='true'>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelatedProjects;
