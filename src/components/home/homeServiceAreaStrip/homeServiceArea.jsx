import './homeServiceArea.css';

const serviceAreas = [
  'Philadelphia',
  'Bucks County',
  'Montgomery County',
  'Delaware County',
  'Chester County',
];

function HomeServiceArea() {
  return (
    <section className='service-area'>
      <div className='container service-area__inner'>
        <div className='service-area__heading'>
          <span className='service-area__line' aria-hidden='true' />

          <h2 className='service-area__title'>
            Proudly Serving Philadelphia &amp; Surrounding Areas
          </h2>

          <span className='service-area__line' aria-hidden='true' />
        </div>

        <ul className='service-area__list'>
          {serviceAreas.map((area) => (
            <li className='service-area__item' key={area}>
              <span className='service-area__pin' aria-hidden='true'>
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12 21C12 21 18 15.5 18 9.5C18 6.18629 15.3137 3.5 12 3.5C8.68629 3.5 6 6.18629 6 9.5C6 15.5 12 21 12 21Z'
                    stroke='currentColor'
                    strokeWidth='1.8'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />

                  <circle
                    cx='12'
                    cy='9.5'
                    r='2'
                    stroke='currentColor'
                    strokeWidth='1.8'
                  />
                </svg>
              </span>

              <span>{area}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default HomeServiceArea;