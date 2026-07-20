import './ProjectGallery.css';

function ProjectGallery({ gallery }) {
  if (!gallery?.length) {
    return null;
  }

  return (
    <section className='project-gallery section'>
      <div className='container'>
        <p className='project-gallery__eyebrow'>Project Gallery</p>

        <div className='project-gallery__grid'>
          {gallery.map((item, index) => (
            <figure
              className={`project-gallery__item ${
                index === 0 ? 'project-gallery__item--featured' : ''
              }`}
              key={item.id}
            >
              <img
                src={item.image}
                alt={item.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectGallery;
