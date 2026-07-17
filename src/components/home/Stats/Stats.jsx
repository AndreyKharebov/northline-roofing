import './Stats.css';

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: 'Licensed', label: 'And Fully Insured' },
  { value: '4.9', label: 'Customer Rating' },
];

function Stats() {
  return (
    <section className='stats' aria-label='Company achievements'>
      <div className='container stats__list'>
        {stats.map((stat) => (
          <div className='stats__item' key={stat.label}>
            <strong className='stats__value'>{stat.value}</strong>
            <span className='stats__label'>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
