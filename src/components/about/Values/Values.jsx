import './Values.css';

const values = [
  {
    title: 'Integrity',
    description:
      'We provide honest recommendations, transparent updates, and clear project information.',
  },
  {
    title: 'Craftsmanship',
    description:
      'We take pride in careful preparation, professional installation, and attention to detail.',
  },
  {
    title: 'Communication',
    description:
      'You receive timely updates and straightforward answers from start to finish.',
  },
  {
    title: 'Accountability',
    description:
      'We stand behind our work and complete each project with care and responsibility.',
  },
];

function Values() {
  return (
    <section className='values section'>
      <div className='container'>
        <div className='values__heading'>
          <p className='values__eyebrow'>Our Values</p>

          <h2 className='values__title'>How We Work, Every Day</h2>
        </div>

        <div className='values__grid'>
          {values.map((value, index) => (
            <article className='values__item' key={value.title}>
              <div className='values__icon' aria-hidden='true'>
                {index + 1}
              </div>

              <h3 className='values__item-title'>{value.title}</h3>

              <p className='values__item-description'>{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Values;
