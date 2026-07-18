import { useState } from 'react';

import './ContactMain.css';

const initialFormData = {
  fullName: '',
  phone: '',
  email: '',
  service: '',
  zipCode: '',
  message: '',
};

const contactItems = [
  {
    label: 'Phone',
    value: '(215) 555-0198',
    href: 'tel:+12155550198',
    symbol: '☎',
  },
  {
    label: 'Email',
    value: 'info@northlineroofing.com',
    href: 'mailto:info@northlineroofing.com',
    symbol: '✉',
  },
  {
    label: 'Office',
    value: '1234 Northline Drive, Philadelphia, PA 19154',
    symbol: '⌖',
  },
];

function ContactMain() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: '',
    }));

    setIsSubmitted(false);
  }

  function validateForm() {
    const nextErrors = {};

    if (!formData.fullName.trim()) {
      nextErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = 'Please enter your phone number.';
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    }

    if (!formData.service) {
      nextErrors.service = 'Please select a service.';
    }

    if (!formData.message.trim()) {
      nextErrors.message = 'Please tell us about your project.';
    }

    return nextErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false);
      return;
    }

    console.log('Contact form data:', formData);

    setFormData(initialFormData);
    setErrors({});
    setIsSubmitted(true);
  }

  return (
    <section className='contact-main section'>
      <div className='container contact-main__inner'>
        <div className='contact-main__information'>
          <p className='contact-main__eyebrow'>Get in Touch</p>

          <h2 className='contact-main__title'>Contact Northline Roofing</h2>

          <p className='contact-main__description'>
            Tell us what is happening with your property. Our team will review
            your information and contact you to discuss the next steps.
          </p>

          <address className='contact-main__details'>
            {contactItems.map((item) => (
              <div className='contact-main__detail' key={item.label}>
                <span className='contact-main__detail-icon' aria-hidden='true'>
                  {item.symbol}
                </span>

                <div>
                  <strong>{item.label}</strong>

                  {item.href ? (
                    <a href={item.href}>{item.value}</a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </address>

          <div className='contact-main__response'>
            <strong>Typical response time</strong>

            <p>
              We usually respond during normal business hours within one
              business day.
            </p>
          </div>
        </div>

        <form
          className='contact-form'
          id='contact-form'
          onSubmit={handleSubmit}
          noValidate
        >
          <div className='contact-form__heading'>
            <p className='contact-form__eyebrow'>Request a Consultation</p>

            <h2>Tell Us About Your Project</h2>
          </div>

          <div className='contact-form__field'>
            <label htmlFor='contact-full-name'>Full Name</label>

            <input
              id='contact-full-name'
              name='fullName'
              type='text'
              autoComplete='name'
              value={formData.fullName}
              onChange={handleChange}
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={
                errors.fullName ? 'contact-full-name-error' : undefined
              }
            />

            {errors.fullName && (
              <p className='contact-form__error' id='contact-full-name-error'>
                {errors.fullName}
              </p>
            )}
          </div>

          <div className='contact-form__field'>
            <label htmlFor='contact-phone'>Phone Number</label>

            <input
              id='contact-phone'
              name='phone'
              type='tel'
              autoComplete='tel'
              value={formData.phone}
              onChange={handleChange}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={
                errors.phone ? 'contact-phone-error' : undefined
              }
            />

            {errors.phone && (
              <p className='contact-form__error' id='contact-phone-error'>
                {errors.phone}
              </p>
            )}
          </div>

          <div className='contact-form__field'>
            <label htmlFor='contact-email'>Email Address</label>

            <input
              id='contact-email'
              name='email'
              type='email'
              autoComplete='email'
              value={formData.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={
                errors.email ? 'contact-email-error' : undefined
              }
            />

            {errors.email && (
              <p className='contact-form__error' id='contact-email-error'>
                {errors.email}
              </p>
            )}
          </div>

          <div className='contact-form__field'>
            <label htmlFor='contact-service'>Service Needed</label>

            <select
              id='contact-service'
              name='service'
              value={formData.service}
              onChange={handleChange}
              aria-invalid={Boolean(errors.service)}
              aria-describedby={
                errors.service ? 'contact-service-error' : undefined
              }
            >
              <option value=''>Select a service</option>
              <option value='roof-replacement'>Roof Replacement</option>
              <option value='roof-repair'>Roof Repair</option>
              <option value='storm-damage'>Storm Damage</option>
              <option value='siding'>Siding</option>
              <option value='gutters'>Gutters</option>
              <option value='windows-skylights'>Windows & Skylights</option>
              <option value='other'>Other</option>
            </select>

            {errors.service && (
              <p className='contact-form__error' id='contact-service-error'>
                {errors.service}
              </p>
            )}
          </div>

          <div className='contact-form__field contact-form__field--full'>
            <label htmlFor='contact-zip'>Property ZIP Code</label>

            <input
              id='contact-zip'
              name='zipCode'
              type='text'
              inputMode='numeric'
              autoComplete='postal-code'
              value={formData.zipCode}
              onChange={handleChange}
            />
          </div>

          <div className='contact-form__field contact-form__field--full'>
            <label htmlFor='contact-message'>Project Details</label>

            <textarea
              id='contact-message'
              name='message'
              rows='6'
              placeholder='Tell us about your project...'
              value={formData.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={
                errors.message ? 'contact-message-error' : undefined
              }
            />

            {errors.message && (
              <p className='contact-form__error' id='contact-message-error'>
                {errors.message}
              </p>
            )}
          </div>

          <button className='contact-form__submit' type='submit'>
            Submit Request
          </button>

          {isSubmitted && (
            <p className='contact-form__success' role='status'>
              Thank you. Your message has been recorded for this demo.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactMain;
