import { Link } from 'react-router-dom';

import './ServiceHelpCard.css';

function ServiceHelpCard() {
  return (
    <aside className='service-help-card'>
      <p className='service-help-card__eyebrow'>Need More Help?</p>

      <p className='service-help-card__text'>
        Can’t find the answer you’re looking for? Our team is happy to help.
      </p>

      <Link className='service-help-card__button' to='/contact'>
        Contact Us
      </Link>

      <a className='service-help-card__phone' href='tel:+12155550198'>
        <span aria-hidden='true'>☎</span>
        (215) 555-0198
      </a>
    </aside>
  );
}

export default ServiceHelpCard;
