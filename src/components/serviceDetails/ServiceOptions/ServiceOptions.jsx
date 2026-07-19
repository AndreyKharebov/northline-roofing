import './ServiceOptions.css';

function ServiceOptions({ options }) {
  if (!options) {
    return null;
  }

  return (
    <section className='service-options section'>
      <div className='container service-options__layout'>
        <div className='service-options__main-image'>
          <img
            src={options.mainImage}
            alt={options.mainImageAlt ?? options.title}
          />
        </div>

        <div className='service-options__content'>
          <p className='service-options__eyebrow'>{options.eyebrow}</p>

          <h2 className='service-options__title'>{options.title}</h2>

          <p className='service-options__description'>{options.description}</p>

          <div className='service-options__grid'>
            {options.items.map((option) => (
              <article className='service-options__card' key={option.title}>
                <img src={option.image} alt={option.imageAlt ?? option.title} />

                <div className='service-options__card-content'>
                  <h3>{option.title}</h3>

                  <p>{option.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceOptions;
