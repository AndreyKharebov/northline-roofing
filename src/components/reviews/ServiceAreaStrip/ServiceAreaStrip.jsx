import './ServiceAreaStrip.css';

const areas = [
  'Philadelphia',
  'Bucks County',
  'Montgomery County',
  'Delaware County',
  'Chester County',
];

function ServiceAreaStrip() {
  return (
    <section className='service-area-strip' aria-label='Service areas'>
      <div className='container service-area-strip__inner'>
        <p className='service-area-strip__title'>
          Proudly serving Philadelphia & surrounding areas
        </p>

        <ul className='service-area-strip__list'>
          {areas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ServiceAreaStrip;
