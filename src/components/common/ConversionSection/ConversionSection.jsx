import Button from '../Button/Button';

import './ConversionSection.css';

function ConversionSection({
  eyebrow,
  title,
  description,
  benefits,
  buttonText,
  buttonTo,
  phone,
  phoneHref,
  preferToSpeak,
  emergency,
  children,
  className = '',
}) {
  const sectionClassName = ['conversion-section', className]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={sectionClassName}>
      <div className='container'>
        <div className='conversion-section__inner'>
          <div className='conversion-section__sidebar'>
            {eyebrow && (
              <p className='conversion-section__eyebrow'>{eyebrow}</p>
            )}

            <h2 className='conversion-section__title'>{title}</h2>

            {description && (
              <p className='conversion-section__description'>{description}</p>
            )}

            {benefits && (
              <ul className='conversion-section__benefits'>
                <li>Free project estimate</li>
                <li>No-obligation consultation</li>
                <li>Clear project recommendations</li>
              </ul>
            )}

            {(buttonText || phone) && (
              <div className='conversion-section__actions'>
                {buttonText && buttonTo && (
                  <Button to={buttonTo}>{buttonText}</Button>
                )}

                {phone && (
                  <p className='conversion-section__phone'>
                    <span>Or call</span>

                    <a href={phoneHref || `tel:${phone}`}>{phone}</a>
                  </p>
                )}
              </div>
            )}

            {preferToSpeak && (
              <div className='conversion-section__contact'>
                <p>Prefer to speak with someone?</p>

                <a href='tel:+12155550198'>(215) 555-0198</a>
              </div>
            )}

            {emergency && (
              <div className='conversion-section__note'>
                <strong>Emergency roof leak?</strong>

                <p>
                  Call us directly. Do not climb onto a wet or damaged roof.
                </p>
              </div>
            )}
          </div>

          {children && (
            <div className='conversion-section__aside'>{children}</div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ConversionSection;
