import './TrustStrip.css';

const trustItems = [
  {
    title: 'Licensed & Insured',
    symbol: '✓',
  },
  {
    title: 'Certified Professionals',
    symbol: '★',
  },
  {
    title: 'Quality Workmanship',
    symbol: '⌂',
  },
  {
    title: 'Workmanship Warranty',
    symbol: '✓',
  },
];

function TrustStrip() {
  return (
    <section className='faq-trust-strip' aria-label='Company qualifications'>
      <div className='container faq-trust-strip__list'>
        {trustItems.map((item) => (
          <div className='faq-trust-strip__item' key={item.title}>
            <span className='faq-trust-strip__icon' aria-hidden='true'>
              {item.symbol}
            </span>

            <strong>{item.title}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustStrip;
