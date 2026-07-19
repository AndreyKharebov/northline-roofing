import './ServiceTrustStrip.css';

const trustItems = [
  {
    symbol: '✓',
    title: 'Licensed & Insured',
  },
  {
    symbol: '★',
    title: 'Certified Professionals',
  },
  {
    symbol: '⌂',
    title: 'Quality Workmanship',
  },
  {
    symbol: '✓',
    title: 'Workmanship Warranty',
  },
];

function ServiceTrustStrip() {
  return (
    <section
      className='service-trust-strip'
      aria-label='Company qualifications'
    >
      <div className='container service-trust-strip__grid'>
        {trustItems.map((item) => (
          <div className='service-trust-strip__item' key={item.title}>
            <span className='service-trust-strip__icon' aria-hidden='true'>
              {item.symbol}
            </span>

            <strong>{item.title}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceTrustStrip;
