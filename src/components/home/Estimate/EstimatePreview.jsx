import { useState } from 'react';

import SectionHeading from '../../common/SectionHeading/SectionHeading';

import './EstimatePreview.css';

const initialFormData = {
  fullName: '',
  phone: '',
  email: '',
  service: '',
  zipCode: '',
  details: '',
};

function EstimatePreview() {
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

    if (!formData.zipCode.trim()) {
      nextErrors.zipCode = 'Please enter your ZIP code.';
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

    console.log('Estimate form data:', formData);

    setFormData(initialFormData);
    setErrors({});
    setIsSubmitted(true);
  }

  return (
    <section className='estimate-preview section'>
      <div className='container estimate-preview__inner'>
        <div className='estimate-preview__intro'>
          <SectionHeading
            eyebrow='Request an Estimate'
            title='Start Your Project Today'
            description='Tell us about your roofing or exterior project, and our team will contact you to discuss the next steps.'
          />

          <ul className='estimate-preview__benefits'>
            <li>Free project estimate</li>
            <li>No-obligation consultation</li>
            <li>Clear project recommendations</li>
          </ul>
        </div>

        <form className='estimate-form' onSubmit={handleSubmit} noValidate>
          <div className='estimate-form__field'>
            <label htmlFor='fullName'>Full Name</label>

            <input
              id='fullName'
              name='fullName'
              type='text'
              autoComplete='name'
              value={formData.fullName}
              onChange={handleChange}
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            />

            {errors.fullName && (
              <p className='estimate-form__error' id='fullName-error'>
                {errors.fullName}
              </p>
            )}
          </div>

          <div className='estimate-form__field'>
            <label htmlFor='phone'>Phone Number</label>

            <input
              id='phone'
              name='phone'
              type='tel'
              autoComplete='tel'
              value={formData.phone}
              onChange={handleChange}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
            />

            {errors.phone && (
              <p className='estimate-form__error' id='phone-error'>
                {errors.phone}
              </p>
            )}
          </div>

          <div className='estimate-form__field'>
            <label htmlFor='email'>Email Address</label>

            <input
              id='email'
              name='email'
              type='email'
              autoComplete='email'
              value={formData.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />

            {errors.email && (
              <p className='estimate-form__error' id='email-error'>
                {errors.email}
              </p>
            )}
          </div>

          <div className='estimate-form__field'>
            <label htmlFor='service'>Service Needed</label>

            <select
              id='service'
              name='service'
              value={formData.service}
              onChange={handleChange}
              aria-invalid={Boolean(errors.service)}
              aria-describedby={errors.service ? 'service-error' : undefined}
            >
              <option value=''>Select a service</option>
              <option value='roof-replacement'>Roof Replacement</option>
              <option value='roof-repair'>Roof Repair</option>
              <option value='storm-damage'>Storm Damage</option>
              <option value='siding'>Siding</option>
              <option value='gutters'>Gutters</option>
              <option value='windows-skylights'>Windows & Skylights</option>
            </select>

            {errors.service && (
              <p className='estimate-form__error' id='service-error'>
                {errors.service}
              </p>
            )}
          </div>

          <div className='estimate-form__field'>
            <label htmlFor='zipCode'>ZIP Code</label>

            <input
              id='zipCode'
              name='zipCode'
              type='text'
              inputMode='numeric'
              autoComplete='postal-code'
              value={formData.zipCode}
              onChange={handleChange}
              aria-invalid={Boolean(errors.zipCode)}
              aria-describedby={errors.zipCode ? 'zipCode-error' : undefined}
            />

            {errors.zipCode && (
              <p className='estimate-form__error' id='zipCode-error'>
                {errors.zipCode}
              </p>
            )}
          </div>

          <div className='estimate-form__field estimate-form__field--full'>
            <label htmlFor='details'>Project Details</label>

            <textarea
              id='details'
              name='details'
              rows='5'
              value={formData.details}
              onChange={handleChange}
              placeholder='Tell us about your project...'
            />
          </div>

          <button className='estimate-form__submit' type='submit'>
            Request Free Estimate
          </button>

          {isSubmitted && (
            <p className='estimate-form__success' role='status'>
              Thank you. Your request has been recorded for this demo.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default EstimatePreview;
