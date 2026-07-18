import './ServiceArea.css';

const serviceAreas = [
  'Philadelphia',
  'Bucks County',
  'Montgomery County',
  'Delaware County',
  'Chester County',
  'Bensalem',
  'Newtown',
  'Abington',
  'Media',
  'King of Prussia',
  'West Chester',
  'Norristown',
];

function ServiceArea() {
  return (
    <section className='contact-service-area section'>
      <div className='container contact-service-area__inner'>
        <div className='contact-service-area__map'>
          <div className='contact-service-area__map-content'>
            <span
              className='contact-service-area__map-marker'
              aria-hidden='true'
            >
              ⌖
            </span>

            <strong>Greater Philadelphia</strong>

            <p>Interactive service-area map will be connected here.</p>
          </div>
        </div>

        <div className='contact-service-area__content'>
          <p className='contact-service-area__eyebrow'>Service Area</p>

          <h2 className='contact-service-area__title'>
            Serving Philadelphia and Surrounding Communities
          </h2>

          <p className='contact-service-area__description'>
            We provide residential roofing and exterior services throughout
            Philadelphia and nearby counties.
          </p>

          <ul className='contact-service-area__list'>
            {serviceAreas.map((area) => (
              <li key={area}>
                <span aria-hidden='true'>✓</span>
                {area}
              </li>
            ))}
          </ul>

          <p className='contact-service-area__notice'>
            Don’t see your community listed? Call us to confirm whether your
            property is within our current service area.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ServiceArea;
