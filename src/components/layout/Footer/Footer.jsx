import { Link } from 'react-router-dom';

import './Footer.css';

function Footer() {
  return (
    <footer className='site-footer'>
      <div className='container site-footer__content'>
        <div className='site-footer__brand'>
          <Link className='site-footer__logo' to='/'>
            Northline Roofing & Exteriors
          </Link>

          <p>
            Professional roofing and exterior services for homeowners throughout
            the Greater Philadelphia area.
          </p>
        </div>

        <div>
          <h2 className='site-footer__heading'>Services</h2>

          <ul className='site-footer__links'>
            <li>
              <Link to='/services/roof-replacement'>Roof Replacement</Link>
            </li>
            <li>
              <Link to='/services/roof-repair'>Roof Repair</Link>
            </li>
            <li>
              <Link to='/services/storm-damage'>Storm Damage</Link>
            </li>
            <li>
              <Link to='/services/siding'>Siding</Link>
            </li>
            <li>
              <Link to='/services/gutters'>Gutters</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className='site-footer__heading'>Company</h2>

          <ul className='site-footer__links'>
            <li>
              <Link to='/about'>About Us</Link>
            </li>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
            <li>
              <Link to='/reviews'>Reviews</Link>
            </li>
            <li>
              <Link to='/faq'>FAQ</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className='site-footer__heading'>Contact</h2>

          <address className='site-footer__contact'>
            <a href='tel:+12155550198'>(215) 555-0198</a>
            <a href='mailto:info@northlineroofing.com'>
              info@northlineroofing.com
            </a>
            <span>Philadelphia, Pennsylvania</span>
          </address>
        </div>
      </div>

      <div className='site-footer__bottom'>
        <div className='container site-footer__bottom-inner'>
          <p>© 2026 Northline Roofing & Exteriors.</p>

          <div className='site-footer__legal'>
            <Link to='/privacy-policy'>Privacy Policy</Link>
            <Link to='/terms-of-service'>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
