import Button from '../../common/Button/Button';

import teamWideImage from '../../../assets/images/about-story.webp';

import './OurStory.css';

function OurStory() {
  return (
    <section className='our-story section'>
      <div className='container our-story__inner'>
        <div className='our-story__content'>
          <p className='our-story__eyebrow'>Our Story</p>

          <h2 className='our-story__title'>A Local Team Focused on Quality</h2>

          <p className='our-story__text'>
            Northline Roofing & Exteriors was created to provide homeowners with
            a higher standard of roofing and exterior service.
          </p>

          <p className='our-story__text'>
            We combine dependable materials, careful installation, and clear
            communication to deliver results designed to last.
          </p>

          <p className='our-story__text'>
            From focused repairs to complete exterior improvements, our team
            treats each property with the same level of care.
          </p>

          <Button to='/services'>Learn More About Our Services</Button>
        </div>

        <div className='our-story__media'>
          <img
            className='our-story__image'
            src={teamWideImage}
            alt='Northline Roofing team standing together beside company vehicles'
          />
        </div>
      </div>
    </section>
  );
}

export default OurStory;
