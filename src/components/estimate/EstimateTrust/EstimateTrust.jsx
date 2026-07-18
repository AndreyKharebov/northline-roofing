import './EstimateTrust.css';

const trustItems = [
  'Licensed & Insured',
  'Clear Written Proposals',
  'Quality Materials',
  'Professional Installation',
];

function EstimateTrust() {
  return (
    <section className='estimate-trust'>
      <div className='container estimate-trust__inner'>
        <div className='estimate-trust__content'>
          <p className='estimate-trust__eyebrow'>Plan With Confidence</p>

          <h2 className='estimate-trust__title'>
            Clear Answers Before Work Begins
          </h2>

          <p className='estimate-trust__description'>
            A good estimate should help you understand the property condition,
            recommended work, materials, and next steps.
          </p>
        </div>

        <ul className='estimate-trust__list'>
          {trustItems.map((item) => (
            <li key={item}>
              <span aria-hidden='true'>✓</span>
              {item}
            </li>
          ))}
        </ul>

        <div className='estimate-trust__phone'>
          <p>Questions before submitting?</p>

          <a href='tel:+12155550198'>Call (215) 555-0198</a>
        </div>
      </div>
    </section>
  );
}

export default EstimateTrust;
