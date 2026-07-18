import { Link } from 'react-router-dom';

import './TermsContact.css';

function TermsContact() {
  return (
    <section className='terms-contact'>
      <div className='container terms-contact__inner'>
        <div className='terms-contact__content'>
          <p className='terms-contact__eyebrow'>Questions About These Terms?</p>

          <h2 className='terms-contact__title'>Contact Northline Roofing</h2>

          <p className='terms-contact__description'>
            Contact us if you have questions about these terms or the use of
            this website.
          </p>
        </div>

        <div className='terms-contact__details'>
          <a href='mailto:info@northlineroofing.com'>
            info@northlineroofing.com
          </a>

          <a href='tel:+12155550198'>(215) 555-0198</a>

          <Link to='/contact'>Contact Page</Link>
        </div>
      </div>
    </section>
  );
}

export default TermsContact;
