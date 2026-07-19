import './ServiceOverview.css';

function ServiceOverview({ overview }) {
  return (
    <section className='service-overview section'>
      <div className='container service-overview__layout'>
        <div className='service-overview__content'>
          <p className='service-overview__eyebrow'>{overview.eyebrow}</p>

          <h2 className='service-overview__title'>{overview.title}</h2>

          <div className='service-overview__paragraphs'>
            {overview.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className='service-overview__highlights'>
          <h3>{overview.highlightsTitle ?? 'What the Service May Include'}</h3>

          <ul>
            {overview.highlights.map((highlight) => (
              <li key={highlight}>
                <span aria-hidden='true'>✓</span>
                <p>{highlight}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ServiceOverview;
