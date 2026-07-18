import './QualityCommitment.css';

const qualityItems = [
  {
    title: 'Quality Materials',
    description:
      'We use dependable products selected for long-term performance.',
  },
  {
    title: 'Experienced Team',
    description:
      'Our team brings years of hands-on experience to every project.',
  },
  {
    title: 'Clear Communication',
    description:
      'You receive updates and straightforward answers at every stage.',
  },
  {
    title: 'Strong Warranties',
    description: 'Our work is supported by written warranty coverage.',
  },
];

function QualityCommitment() {
  return (
    <section className='quality-commitment section'>
      <div className='container quality-commitment__inner'>
        <div className='quality-commitment__intro'>
          <p className='quality-commitment__eyebrow'>Our Commitment</p>

          <h2 className='quality-commitment__title'>Quality in Every Detail</h2>

          <p className='quality-commitment__description'>
            We combine quality materials, skilled workmanship, and clear
            communication to create lasting results.
          </p>
        </div>

        <div className='quality-commitment__list'>
          {qualityItems.map((item, index) => (
            <article className='quality-commitment__item' key={item.title}>
              <div className='quality-commitment__icon' aria-hidden='true'>
                {index + 1}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QualityCommitment;
