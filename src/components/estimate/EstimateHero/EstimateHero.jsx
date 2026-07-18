import estimateHeroImage from '../../../assets/images/hero-house.webp';

import './EstimateHero.css';

function EstimateHero() {
  return (
    <section className='estimate-hero'>
      <img
        className='estimate-hero__image'
        src={estimateHeroImage}
        alt=''
        aria-hidden='true'
      />

      <div className='estimate-hero__overlay' />

      <div className='container estimate-hero__inner'>
        <div className='estimate-hero__content'>
          <p className='estimate-hero__eyebrow'>Free Project Estimate</p>

          <h1 className='estimate-hero__title'>Tell Us About Your Project.</h1>

          <p className='estimate-hero__description'>
            Share a few details about your roofing or exterior needs. Our team
            will review your request and contact you to discuss the property and
            next steps.
          </p>

          <ul className='estimate-hero__benefits'>
            <li>
              <span aria-hidden='true'>✓</span>
              Free, no-obligation consultation
            </li>

            <li>
              <span aria-hidden='true'>✓</span>
              Clear project recommendations
            </li>

            <li>
              <span aria-hidden='true'>✓</span>
              Service throughout Greater Philadelphia
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default EstimateHero;
