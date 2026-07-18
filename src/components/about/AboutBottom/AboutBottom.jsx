import Button from '../../common/Button/Button';

import './AboutBottom.css';

const commitments = [
  'Quality Materials',
  'Skilled Crew',
  'Strong Warranties',
  'Clean Worksites',
];

function AboutBottom() {
  return (
    <section className='about-bottom'>
      <div className='about-bottom__commitment'>
        <div className='about-bottom__overlay' />

        <div className='about-bottom__commitment-content'>
          <p className='about-bottom__eyebrow'>Our Commitment</p>

          <h2 className='about-bottom__title'>Built to Protect and Last</h2>

          <p className='about-bottom__description'>
            We use dependable materials, follow proven processes, and deliver
            lasting results that help protect your home.
          </p>

          <ul className='about-bottom__list'>
            {commitments.map((item) => (
              <li key={item}>
                <span aria-hidden='true'>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='about-bottom__cta'>
        <div className='about-bottom__cta-content'>
          <p className='about-bottom__cta-eyebrow'>
            Ready to Improve Your Home?
          </p>

          <h2 className='about-bottom__cta-title'>
            Let’s Discuss Your Project
          </h2>

          <p className='about-bottom__cta-description'>
            Contact our team for a free estimate and learn how we can protect
            and improve your home.
          </p>

          <Button to='/request-estimate'>Get Free Estimate</Button>

          <a className='about-bottom__phone' href='tel:+12155550198'>
            Or call <strong>(215) 555-0198</strong>
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutBottom;
