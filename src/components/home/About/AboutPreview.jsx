import aboutHouse from '../../../assets/images/about-house.webp';
import Button from '../../common/Button/Button';

import './AboutPreview.css';

const benefits = [
  {
    title: 'Experienced Professionals',
    description:
      'Our team brings years of practical roofing and exterior experience to every project.',
  },
  {
    title: 'Quality Materials',
    description:
      'We use dependable materials selected for long-term protection and performance.',
  },
  {
    title: 'Clear Communication',
    description:
      'You receive clear updates, straightforward recommendations, and a detailed project scope.',
  },
  {
    title: 'Workmanship Warranty',
    description:
      'Our installation process is supported by a written workmanship warranty.',
  },
];

function AboutPreview() {
  return (
    <section className='about-preview section'>
      <div className='container about-preview__inner'>
        <div className='about-preview__content'>
          <p className='about-preview__eyebrow'>Why Choose Us</p>

          <h2 className='about-preview__title'>
            Built on Quality. Backed by Trust.
          </h2>

          <p className='about-preview__description'>
            We approach every project with careful planning, dependable
            workmanship, and respect for your home.
          </p>
          <ul className='about-preview__benefits'>
            {benefits.map((benefit) => (
              <li className='about-preview__benefit' key={benefit.title}>
                <span className='about-preview__check' aria-hidden='true'>
                  ✓
                </span>
                <div>
                  <h3 className='about-preview__benefit-title'>
                    {benefit.title}
                  </h3>

                  <p className='about-preview__benefit-description'>
                    {benefit.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <Button to='/about' variant='secondary'>
            Learn More About Us
          </Button>
        </div>

        <div className='about-preview__media'>
          <img
            className='about-preview__image'
            src={aboutHouse}
            alt='Professionally completed residential roofing project'
          />
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
