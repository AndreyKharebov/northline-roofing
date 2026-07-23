function FeatureStep({ item, index, showNumber }) {
  const { icon, title, description } = item;

  return (
    <li className='feature-step'>
      {showNumber && (
        <div className='feature-step__timeline' aria-hidden='true'>
          <span className='feature-step__number'>{index + 1}</span>
        </div>
      )}

      <article className='feature-step__card'>
        {icon && (
          <div className='feature-step__icon' aria-hidden='true'>
            {icon}
          </div>
        )}

        <h3 className='feature-step__title'>{title}</h3>

        <span className='feature-step__divider' aria-hidden='true' />

        {description && (
          <p className='feature-step__description'>{description}</p>
        )}
      </article>
    </li>
  );
}

export default FeatureStep;
