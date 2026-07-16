import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function toggleMenu() {
    setIsMenuOpen((currentValue) => !currentValue);
  }

  return (
    <header className='site-header'>
      <div className='container site-header__inner'>
        <Link
          className='site-header__logo'
          to='/'
          onClick={closeMenu}
          aria-label='Northline Roofing home'
        >
          <span className='site-header__logo-mark'>N</span>

          <span className='site-header__logo-text'>
            <strong>Northline</strong>
            <small>Roofing & Exteriors</small>
          </span>
        </Link>

        <div className='site-header__actions'>
          <a
            className='site-header__phone'
            href='tel:+12155550198'
            aria-label='Call Northline Roofing'
          >
            Call
          </a>

          <button
            className='site-header__menu-button'
            type='button'
            aria-expanded={isMenuOpen}
            aria-controls='primary-navigation'
            onClick={toggleMenu}
          >
            <span className='sr-only'>
              {isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            </span>

            <span aria-hidden='true'>{isMenuOpen ? 'Close' : 'Menu'}</span>
          </button>
        </div>

        <nav
          id='primary-navigation'
          className={`site-navigation ${
            isMenuOpen ? 'site-navigation--open' : ''
          }`}
          aria-label='Primary navigation'
        >
          <ul className='site-navigation__list'>
            <li>
              <NavLink
                className='site-navigation__link'
                to='/services'
                onClick={closeMenu}
              >
                Services
              </NavLink>
            </li>

            <li>
              <NavLink
                className='site-navigation__link'
                to='/projects'
                onClick={closeMenu}
              >
                Projects
              </NavLink>
            </li>

            <li>
              <NavLink
                className='site-navigation__link'
                to='/about'
                onClick={closeMenu}
              >
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink
                className='site-navigation__link'
                to='/reviews'
                onClick={closeMenu}
              >
                Reviews
              </NavLink>
            </li>

            <li>
              <NavLink
                className='site-navigation__link'
                to='/faq'
                onClick={closeMenu}
              >
                FAQ
              </NavLink>
            </li>

            <li>
              <NavLink
                className='site-navigation__link'
                to='/contact'
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <Link
            className='site-navigation__estimate-link'
            to='/request-estimate'
            onClick={closeMenu}
          >
            Get Free Estimate
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
