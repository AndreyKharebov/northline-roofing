import Button from '../../common/Button/Button';

import teamSmallImage from '../../../assets/images/about-team.webp';

import './Team.css';

function Team() {
  return (
    <section className='team section'>
      <div className='container team__inner'>
        <div className='team__content'>
          <p className='team__eyebrow'>Our Team</p>

          <h2 className='team__title'>
            Experienced Professionals You Can Count On
          </h2>

          <p className='team__description'>
            Our team brings practical experience in roofing and exterior work.
            We are committed to ongoing training, safe work practices, and
            dependable project delivery.
          </p>

          <Button to='/contact'>Meet Our Team</Button>
        </div>

        <div className='team__media'>
          <img
            className='team__image'
            src={teamSmallImage}
            alt='Northline Roofing professionals standing outside a completed home'
          />
        </div>
      </div>
    </section>
  );
}

export default Team;
