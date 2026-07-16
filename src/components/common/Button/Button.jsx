import { Link } from 'react-router-dom';

import './Button.css';

function Button({
  children,
  to,
  href,
  variant = 'primary', // secondary
  className = '',
  ...restProps
}) {
  const buttonClassName = `button button--${variant} ${className}`.trim();

  if (to) {
    return (
      <Link className={buttonClassName} to={to} {...restProps}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={buttonClassName} href={href} {...restProps}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClassName} type='button' {...restProps}>
      {children}
    </button>
  );
}

export default Button;
