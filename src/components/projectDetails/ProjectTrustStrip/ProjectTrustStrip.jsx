import './ProjectTrustStrip.css';

const trustItems = [
  {
    id: 1,
    symbol: '✓',
    title: 'Licensed & Insured',
  },
  {
    id: 2,
    symbol: '★',
    title: 'Certified Professionals',
  },
  {
    id: 3,
    symbol: '⌂',
    title: 'Quality Workmanship',
  },
  {
    id: 4,
    symbol: '✓',
    title: 'Workmanship Warranty',
  },
];

function ProjectTrustStrip() {
  return (
    <section
      className='project-trust-strip'
      aria-label='Company qualifications'
    >
      <div className='container project-trust-strip__grid'>
        {trustItems.map((item) => (
          <div className='project-trust-strip__item' key={item.id}>
            <span className='project-trust-strip__icon' aria-hidden='true'>
              {item.symbol}
            </span>

            <strong>{item.title}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectTrustStrip;
