import { useState } from 'react';

import './ProjectEstimate.css';

const initialFormData = {
  fullName: '',
  phone: '',
  email: '',
  zipCode: '',
  timing: '',
  message: '',
};

function ProjectEstimateForm({ projectTitle, estimate }) {
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

    console.log('Project estimate request:', {
      ...formData,
      referencedProject: projectTitle,
    });

    setFormData(initialFormData);
    setErrors({});
    setIsSubmitted(true);
  }

  return (
    <section className='project-estimate-form'>
      <div className='container project-estimate-form__layout'>
        <div className='project-estimate-form__content'>
          <p className='project-estimate-form__eyebrow'>
            {estimate?.eyebrow ?? 'Ready to Start Your Project?'}
          </p>

          <h2 className='project-estimate-form__title'>
            {estimate?.title ?? 'Let’s Talk About Your Project'}
          </h2>

          <p className='project-estimate-form__description'>
            {estimate?.description ??
              'Tell us about your property and project goals.'}
          </p>

          <a className='project-estimate-form__call' href='tel:+12155550198'>
            <span aria-hidden='true'>☎</span>
            (215) 555-0198
          </a>
        </div>

        <form
          className='project-estimate-form__form'
          onSubmit={handleSubmit}
          noValidate
        >
          <div className='project-estimate-form__field'>
            <label htmlFor='project-estimate-name'>Full Name</label>

            <input
              id='project-estimate-name'
              name='fullName'
              type='text'
              autoComplete='name'
              placeholder='Full Name'
              value={formData.fullName}
              onChange={handleChange}
              aria-invalid={Boolean(errors.fullName)}
            />

            {errors.fullName && (
              <p className='project-estimate-form__error'>{errors.fullName}</p>
            )}
          </div>

          <div className='project-estimate-form__field'>
            <label htmlFor='project-estimate-phone'>Phone</label>

            <input
              id='project-estimate-phone'
              name='phone'
              type='tel'
              autoComplete='tel'
              placeholder='Phone'
              value={formData.phone}
              onChange={handleChange}
              aria-invalid={Boolean(errors.phone)}
            />

            {errors.phone && (
              <p className='project-estimate-form__error'>{errors.phone}</p>
            )}
          </div>

          <div className='project-estimate-form__field'>
            <label htmlFor='project-estimate-email'>Email Address</label>

            <input
              id='project-estimate-email'
              name='email'
              type='email'
              autoComplete='email'
              placeholder='Email Address'
              value={formData.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
            />

            {errors.email && (
              <p className='project-estimate-form__error'>{errors.email}</p>
            )}
          </div>

          <div className='project-estimate-form__field'>
            <label htmlFor='project-estimate-zip'>ZIP Code</label>

            <input
              id='project-estimate-zip'
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
              <p className='project-estimate-form__error'>{errors.zipCode}</p>
            )}
          </div>

          <div className='project-estimate-form__field'>
            <label htmlFor='project-estimate-timing'>Project Timing</label>

            <select
              id='project-estimate-timing'
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

          <div className='project-estimate-form__field project-estimate-form__field--message'>
            <label htmlFor='project-estimate-message'>Project Details</label>

            <textarea
              id='project-estimate-message'
              name='message'
              rows='5'
              placeholder={
                estimate?.messagePlaceholder ?? 'Tell us about your project'
              }
              value={formData.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
            />

            {errors.message && (
              <p className='project-estimate-form__error'>{errors.message}</p>
            )}
          </div>

          <button className='project-estimate-form__submit' type='submit'>
            Request Free Estimate
          </button>

          {isSubmitted && (
            <p className='project-estimate-form__success' role='status'>
              Thank you. Your request has been recorded.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default ProjectEstimateForm;
