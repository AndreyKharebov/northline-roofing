import { BadgeCheck, Hammer, Medal, ShieldCheck } from 'lucide-react';

import './TrustStrip.css';

const trustItems = [
  { title: 'Licensed & Insured', Icon: ShieldCheck },
  { title: 'Premium Materials', Icon: Hammer },
  { title: 'Certified Professionals', Icon: Medal },
  { title: 'Workmanship Warranty', Icon: BadgeCheck },
];

function TrustStrip({
  items = trustItems,
  ariaLabel = 'Company qualifications',
  className = '',
}) {
  const trustStripClasses = ['trust-strip', className]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={trustStripClasses} aria-label={ariaLabel}>
      <div className='container trust-strip__container'>
        <div className='trust-strip__list'>
          {items.map(({ title, Icon }) => (
            <div className='trust-strip__item' key={title}>
              <span className='trust-strip__icon' aria-hidden='true'>
                <Icon size={24} strokeWidth={1.7} />
              </span>

              <strong className='trust-strip__title'>{title}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustStrip;

// PROPS
// import { BadgeCheck, Clock3, MapPin, ShieldCheck, } from 'lucide-react';

// const serviceTrustItems = [
//   { title: 'Locally Owned', Icon: MapPin },
//   { title: 'Fast Response', Icon: Clock3 },
//   { title: 'Fully Insured', Icon: ShieldCheck },
//   { title: 'Quality Guaranteed', Icon: BadgeCheck },
// ];

// <TrustStrip
//   items={serviceTrustItems}
//   ariaLabel='Service advantages'
// />
