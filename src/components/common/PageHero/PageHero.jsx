import { useId } from 'react';

import './PageHero.css';
import Button from '../Button/Button';

function PageHero({
  eyebrow,
  title,
  description,
  image,
  type = 'white', // white, green, minimal
  size = 'default',
  primaryAction,
  secondaryAction,
  // children,
}) {
  const titleId = useId();

  const isMinimal = type === 'minimal';
  const hasImage = Boolean(image) && !isMinimal;

  const heroClasses = [
    'page-hero',
    `page-hero--${type}`,
    `page-hero--${size}`,
    !hasImage ? 'page-hero--without-image' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const imageStyle = hasImage
    ? { backgroundImage: `url("${image}")` }
    : undefined;

  return (
    <section className={heroClasses} aria-labelledby={titleId}>
      <div className='container page-hero__container'>
        <div className='page-hero__layout'>
          <div className='page-hero__content'>
            {eyebrow && <p className='page-hero__eyebrow'>{eyebrow}</p>}

            <h1 id={titleId} className='page-hero__title'>
              {title}
            </h1>

            {description && (
              <p className='page-hero__description'>{description}</p>
            )}

            {primaryAction || secondaryAction ? (
              <div className='page-hero__actions'>
                {primaryAction && (
                  <Button
                    to={primaryAction.to}
                    href={primaryAction.href}
                    variant={type === 'white' ? 'primary' : 'primary-light'}
                  >
                    {primaryAction.label}
                  </Button>
                )}
                {secondaryAction && (
                  <Button
                    to={secondaryAction.to}
                    href={secondaryAction.href}
                    variant={type === 'white' ? 'secondary' : 'secondary-light'}
                  >
                    {secondaryAction.label}
                  </Button>
                )}
              </div>
            ) : (
              ''
            )}
          </div>

          {hasImage && (
            <div className='page-hero__media'>
              <div className='page-hero__media-background' aria-hidden='true' />

              <div
                className='page-hero__image'
                style={imageStyle}
                aria-hidden='true'
              />

              <div className='page-hero__dots' aria-hidden='true'>
                {Array.from({ length: 16 }, (_, index) => (
                  <span key={index} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default PageHero;
