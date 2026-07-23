import SectionHeading from '../SectionHeading/SectionHeading';
import FeatureStep from './FeatureStep';

import { featureStepsData } from './featureStepsData';

import './FeatureSteps.css';

function FeatureSteps({
  eyebrow,
  title,
  description,
  align,
  version = 'process',
  type = '',
}) {
  const content = featureStepsData[version];

  if (!content) {
    console.warn(`FeatureSteps: unknown version "${version}"`);
  }

  const { items, showNumbers, badge, badgeIcon } = content;

  return (
    <section
      className={`feature-steps feature-steps--${version} ${type && `feature-steps--${type}`} section `}
    >
      <div className='container'>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align={align}
        />

        <ol className='feature-steps__list'>
          {items.map((item, index) => (
            <FeatureStep
              key={item.id}
              item={item}
              index={index}
              showNumber={showNumbers}
            />
          ))}
        </ol>

        {badge && (
          <div className='feature-steps__badge'>
            {badgeIcon && (
              <span className='feature-steps__badge-icon' aria-hidden='true'>
                {badgeIcon}
              </span>
            )}
            <span>{badge}</span>
          </div>
        )}
      </div>
    </section>
  );
}

export default FeatureSteps;
