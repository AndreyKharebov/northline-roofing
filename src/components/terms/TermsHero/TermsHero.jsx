import './TermsHero.css';

function TermsHero({ eyebrow = 'Terms', title, description, updatedDate }) {
  return (
    <section className='terms-hero'>
      <div className='container terms-hero__inner'>
        <div className='terms-hero__content'>
          <p className='terms-hero__eyebrow'>{eyebrow}</p>

          <h1 className='terms-hero__title'>{title}</h1>

          {description && (
            <p className='terms-hero__description'>{description}</p>
          )}

          {updatedDate && (
            <p className='terms-hero__updated'>Last updated: {updatedDate}</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default TermsHero;
