import './SectionHeading.css';

function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow && <p className='section-heading__eyebrow'>{eyebrow}</p>}
      <h2 className='sectiong-heading__title'>{title}</h2>
      {description && (
        <p className='section-heading__description'>{description}</p>
      )}
    </div>
  );
}

export default SectionHeading;
