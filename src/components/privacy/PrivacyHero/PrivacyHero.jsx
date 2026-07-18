import './PrivacyHero.css';

function PrivacyHero({ eyebrow = 'Privacy', title, description, updatedDate }) {
  return (
    <section className='privacy-hero'>
      <div className='container privacy-hero__inner'>
        <div className='privacy-hero__content'>
          <p className='privacy-hero__eyebrow'>{eyebrow}</p>

          <h1 className='privacy-hero__title'>{title}</h1>

          {description && (
            <p className='privacy-hero__description'>{description}</p>
          )}

          {updatedDate && (
            <p className='privacy-hero__updated'>Last updated: {updatedDate}</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default PrivacyHero;
