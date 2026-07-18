import Button from '../../common/Button/Button';

import './ReviewsBottom.css';

const trustItems = [
  'Licensed & Insured',
  'Certified Professionals',
  'Manufacturer Certified',
  'Workmanship Warranty',
];

function ReviewsBottom() {
  return (
    <section className='reviews-bottom'>
      <div className='reviews-bottom__trust'>
        <div className='reviews-bottom__trust-content'>
          <p className='reviews-bottom__eyebrow'>Quality You Can Count On</p>

          <h2 className='reviews-bottom__title'>Licensed. Insured. Trusted.</h2>

          <p className='reviews-bottom__description'>
            We maintain professional standards designed to protect homeowners
            and deliver dependable results.
          </p>

          <ul className='reviews-bottom__trust-list'>
            {trustItems.map((item) => (
              <li key={item}>
                <span aria-hidden='true'>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='reviews-bottom__cta'>
        <div className='reviews-bottom__cta-content'>
          <p className='reviews-bottom__cta-eyebrow'>
            Ready to Start Your Project?
          </p>

          <h2 className='reviews-bottom__cta-title'>
            Let’s Earn Your 5-Star Review
          </h2>

          <p className='reviews-bottom__cta-description'>
            Contact our team for a free estimate and experience the Northline
            difference.
          </p>

          <Button to='/request-estimate'>Get Free Estimate</Button>

          <a className='reviews-bottom__phone' href='tel:+12155550198'>
            Or call <strong>(215) 555-0198</strong>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ReviewsBottom;
