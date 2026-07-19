import { useState } from 'react';

import './ServiceEstimateForm.css';

const initialFormData = {
  fullName: '',
  phone: '',
  email: '',
  zipCode: '',
  timing: '',
  message: '',
};

function ServiceEstimateForm({ serviceTitle }) {
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

    if (!formData.zipCode.trim()) {
      nextErrors.zipCode = 'Please enter your ZIP code.';
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

    console.log('Service estimate request:', {
      ...formData,
      service: serviceTitle,
    });

    setFormData(initialFormData);
    setErrors({});
    setIsSubmitted(true);
  }

  return (
    <section className='service-estimate-form'>
      <div className='container service-estimate-form__layout'>
        <div className='service-estimate-form__content'>
          <p className='service-estimate-form__eyebrow'>
            Request a {serviceTitle} Estimate
          </p>

          <h2 className='service-estimate-form__title'>
            Let’s Talk About Your Project
          </h2>

          <p className='service-estimate-form__description'>
            Tell us about your project and we’ll provide a free, no-obligation
            estimate.
          </p>
        </div>

        <form
          className='service-estimate-form__form'
          onSubmit={handleSubmit}
          noValidate
        >
          <div className='service-estimate-form__field'>
            <label htmlFor='service-estimate-name'>Full Name</label>

            <input
              id='service-estimate-name'
              name='fullName'
              type='text'
              autoComplete='name'
              placeholder='Full Name'
              value={formData.fullName}
              onChange={handleChange}
              aria-invalid={Boolean(errors.fullName)}
            />

            {errors.fullName && (
              <p className='service-estimate-form__error'>{errors.fullName}</p>
            )}
          </div>

          <div className='service-estimate-form__field'>
            <label htmlFor='service-estimate-phone'>Phone</label>

            <input
              id='service-estimate-phone'
              name='phone'
              type='tel'
              autoComplete='tel'
              placeholder='Phone'
              value={formData.phone}
              onChange={handleChange}
              aria-invalid={Boolean(errors.phone)}
            />

            {errors.phone && (
              <p className='service-estimate-form__error'>{errors.phone}</p>
            )}
          </div>

          <div className='service-estimate-form__field'>
            <label htmlFor='service-estimate-email'>Email Address</label>

            <input
              id='service-estimate-email'
              name='email'
              type='email'
              autoComplete='email'
              placeholder='Email Address'
              value={formData.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
            />

            {errors.email && (
              <p className='service-estimate-form__error'>{errors.email}</p>
            )}
          </div>

          <div className='service-estimate-form__field'>
            <label htmlFor='service-estimate-zip'>ZIP Code</label>

            <input
              id='service-estimate-zip'
              name='zipCode'
              type='text'
              inputMode='numeric'
              autoComplete='postal-code'
              placeholder='ZIP Code'
              value={formData.zipCode}
              onChange={handleChange}
              aria-invalid={Boolean(errors.zipCode)}
            />

            {errors.zipCode && (
              <p className='service-estimate-form__error'>{errors.zipCode}</p>
            )}
          </div>

          <div className='service-estimate-form__field'>
            <label htmlFor='service-estimate-timing'>Project Timing</label>

            <select
              id='service-estimate-timing'
              name='timing'
              value={formData.timing}
              onChange={handleChange}
            >
              <option value=''>When are you planning to start?</option>

              <option value='urgent'>As Soon as Possible</option>

              <option value='one-month'>Within One Month</option>

              <option value='three-months'>Within Three Months</option>

              <option value='researching'>Currently Researching</option>
            </select>
          </div>

          <div className='service-estimate-form__field service-estimate-form__field--message'>
            <label htmlFor='service-estimate-message'>Project Details</label>

            <textarea
              id='service-estimate-message'
              name='message'
              rows='5'
              placeholder='Tell us about your project'
              value={formData.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
            />

            {errors.message && (
              <p className='service-estimate-form__error'>{errors.message}</p>
            )}
          </div>

          <button className='service-estimate-form__submit' type='submit'>
            Request Free Estimate
          </button>

          {isSubmitted && (
            <p className='service-estimate-form__success' role='status'>
              Thank you. Your estimate request has been recorded.
            </p>
          )}

          <p className='service-estimate-form__phone'>
            or call <a href='tel:+12155550198'>(215) 555-0198</a>
          </p>
        </form>
      </div>
    </section>
  );
}

export default ServiceEstimateForm;
