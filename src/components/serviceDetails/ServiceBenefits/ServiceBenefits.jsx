import './ServiceBenefits.css';

const benefitSymbols = ['✓', '⌂', '⚒', '★'];

function ServiceBenefits({ benefits }) {
  return (
    <section className='service-benefits'>
      <div className='container'>
        <p className='service-benefits__eyebrow'>Service Benefits</p>

        <div className='service-benefits__grid'>
          {benefits.map((benefit, index) => (
            <article className='service-benefits__card' key={benefit.title}>
              <span className='service-benefits__icon' aria-hidden='true'>
                {benefitSymbols[index] ?? '✓'}
              </span>

              <h3>{benefit.title}</h3>

              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceBenefits;
