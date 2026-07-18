import { useMemo, useState } from 'react';

import { projects } from '../../../data/projects';

import ProjectCard from './ProjectCard';

import './ProjectsGallery.css';

const initialVisibleCount = 6;

function ProjectsGallery() {
  const [serviceFilter, setServiceFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

  const locations = useMemo(
    () => [...new Set(projects.map((project) => project.location))],
    [],
  );

  const filteredProjects = projects.filter((project) => {
    const matchesService =
      serviceFilter === 'all' || project.service === serviceFilter;

    const matchesLocation =
      locationFilter === 'all' || project.location === locationFilter;

    return matchesService && matchesLocation;
  });

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMoreProjects = visibleCount < filteredProjects.length;

  function handleServiceChange(event) {
    setServiceFilter(event.target.value);
    setVisibleCount(initialVisibleCount);
  }

  function handleLocationChange(event) {
    setLocationFilter(event.target.value);
    setVisibleCount(initialVisibleCount);
  }

  function handleLoadMore() {
    setVisibleCount((currentCount) => currentCount + 3);
  }

  return (
    <section className='projects-gallery section'>
      <div className='container'>
        <div className='projects-gallery__header'>
          <div className='projects-gallery__intro'>
            <p className='projects-gallery__eyebrow'>Our Projects</p>

            <h2 className='projects-gallery__title'>
              Recent Roofing & Exterior Projects
            </h2>

            <p className='projects-gallery__description'>
              Explore recent work and filter projects by service or location to
              find examples similar to your home.
            </p>
          </div>

          <div className='projects-gallery__filters'>
            <div className='projects-gallery__field'>
              <label htmlFor='project-service'>Service</label>

              <select
                id='project-service'
                value={serviceFilter}
                onChange={handleServiceChange}
              >
                <option value='all'>All Services</option>
                <option value='roof-replacement'>Roof Replacement</option>
                <option value='roof-repair'>Roof Repair</option>
                <option value='storm-damage'>Storm Damage</option>
                <option value='siding'>Siding</option>
                <option value='gutters'>Gutters</option>
                <option value='windows-skylights'>Windows & Skylights</option>
              </select>
            </div>

            <div className='projects-gallery__field'>
              <label htmlFor='project-location'>Location</label>

              <select
                id='project-location'
                value={locationFilter}
                onChange={handleLocationChange}
              >
                <option value='all'>All Locations</option>

                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {visibleProjects.length > 0 ? (
          <div className='projects-gallery__grid'>
            {visibleProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <p className='projects-gallery__empty'>
            No projects match the selected filters.
          </p>
        )}

        {hasMoreProjects && (
          <div className='projects-gallery__load-more'>
            <button
              className='projects-gallery__load-button'
              type='button'
              onClick={handleLoadMore}
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectsGallery;
