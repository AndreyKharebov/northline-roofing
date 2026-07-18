import './PrivacyContact.css';

function PrivacyContact() {
  return (
    <section className='privacy-contact'>
      <div className='container privacy-contact__inner'>
        <div className='privacy-contact__content'>
          <p className='privacy-contact__eyebrow'>Privacy Questions</p>

          <h2 className='privacy-contact__title'>Contact Northline Roofing</h2>

          <p className='privacy-contact__description'>
            Contact us if you have questions about this policy or the
            information submitted through this website.
          </p>
        </div>

        <address className='privacy-contact__details'>
          <a href='mailto:info@northlineroofing.com'>
            info@northlineroofing.com
          </a>

          <a href='tel:+12155550198'>(215) 555-0198</a>

          <span>
            1234 Northline Drive
            <br />
            Philadelphia, PA 19154
          </span>
        </address>
      </div>
    </section>
  );
}

export default PrivacyContact;
