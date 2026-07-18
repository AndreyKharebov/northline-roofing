import './EstimateBenefits.css';

const benefits = [
  {
    symbol: '✓',
    title: 'Free Estimate',
    description: 'No charge and no obligation.',
  },
  {
    symbol: '⌂',
    title: 'Property-Focused Advice',
    description: 'Recommendations based on your home.',
  },
  {
    symbol: '☎',
    title: 'Prompt Follow-Up',
    description: 'A team member will contact you.',
  },
  {
    symbol: '★',
    title: 'Professional Service',
    description: 'Clear communication from the start.',
  },
];

function EstimateBenefits() {
  return (
    <section className='estimate-benefits' aria-label='Estimate benefits'>
      <div className='container estimate-benefits__grid'>
        {benefits.map((benefit) => (
          <article className='estimate-benefits__item' key={benefit.title}>
            <span className='estimate-benefits__icon' aria-hidden='true'>
              {benefit.symbol}
            </span>

            <div>
              <h2>{benefit.title}</h2>
              <p>{benefit.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default EstimateBenefits;
