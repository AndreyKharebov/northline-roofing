import { useState } from 'react';

import './EstimateForm.css';

const initialFormData = {
  fullName: '',
  phone: '',
  email: '',
  preferredContact: 'phone',
  address: '',
  city: '',
  zipCode: '',
  service: '',
  projectTiming: '',
  propertyType: '',
  message: '',
  consent: false,
};

function EstimateForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: type === 'checkbox' ? checked : value,
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
      nextErrors.zipCode = 'Please enter the property ZIP code.';
    }

    if (!formData.service) {
      nextErrors.service = 'Please select a service.';
    }

    if (!formData.propertyType) {
      nextErrors.propertyType = 'Please select a property type.';
    }

    if (!formData.message.trim()) {
      nextErrors.message = 'Please tell us about your project.';
    }

    if (!formData.consent) {
      nextErrors.consent =
        'Please confirm that we may contact you about this request.';
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

    console.log('Estimate request:', formData);

    setFormData(initialFormData);
    setErrors({});
    setIsSubmitted(true);
  }

  return (
    <section className='estimate-form-section section'>
      <div className='container estimate-form-section__inner'>
        <aside className='estimate-form-section__sidebar'>
          <p className='estimate-form-section__eyebrow'>Request an Estimate</p>

          <h2 className='estimate-form-section__title'>
            Start With a Few Project Details
          </h2>

          <p className='estimate-form-section__description'>
            Complete the form and a member of our team will contact you to
            review the project and arrange the next appropriate step.
          </p>

          <div className='estimate-form-section__contact'>
            <p>Prefer to speak with someone?</p>

            <a href='tel:+12155550198'>(215) 555-0198</a>
          </div>

          <div className='estimate-form-section__note'>
            <strong>Emergency roof leak?</strong>

            <p>Call us directly. Do not climb onto a wet or damaged roof.</p>
          </div>
        </aside>

        <form
          className='estimate-request-form'
          onSubmit={handleSubmit}
          noValidate
        >
          <div className='estimate-request-form__heading'>
            <p>Project Information</p>
            <h2>Request Your Free Estimate</h2>
          </div>

          <div className='estimate-request-form__field'>
            <label htmlFor='estimate-full-name'>Full Name</label>

            <input
              id='estimate-full-name'
              name='fullName'
              type='text'
              autoComplete='name'
              value={formData.fullName}
              onChange={handleChange}
              aria-invalid={Boolean(errors.fullName)}
            />

            {errors.fullName && (
              <p className='estimate-request-form__error'>{errors.fullName}</p>
            )}
          </div>

          <div className='estimate-request-form__field'>
            <label htmlFor='estimate-phone'>Phone Number</label>

            <input
              id='estimate-phone'
              name='phone'
              type='tel'
              autoComplete='tel'
              value={formData.phone}
              onChange={handleChange}
              aria-invalid={Boolean(errors.phone)}
            />

            {errors.phone && (
              <p className='estimate-request-form__error'>{errors.phone}</p>
            )}
          </div>

          <div className='estimate-request-form__field'>
            <label htmlFor='estimate-email'>Email Address</label>

            <input
              id='estimate-email'
              name='email'
              type='email'
              autoComplete='email'
              value={formData.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
            />

            {errors.email && (
              <p className='estimate-request-form__error'>{errors.email}</p>
            )}
          </div>

          <div className='estimate-request-form__field'>
            <label htmlFor='preferred-contact'>Preferred Contact Method</label>

            <select
              id='preferred-contact'
              name='preferredContact'
              value={formData.preferredContact}
              onChange={handleChange}
            >
              <option value='phone'>Phone</option>
              <option value='email'>Email</option>
              <option value='text'>Text Message</option>
            </select>
          </div>

          <div className='estimate-request-form__field estimate-request-form__field--full'>
            <label htmlFor='estimate-address'>Property Address</label>

            <input
              id='estimate-address'
              name='address'
              type='text'
              autoComplete='street-address'
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className='estimate-request-form__field'>
            <label htmlFor='estimate-city'>City</label>

            <input
              id='estimate-city'
              name='city'
              type='text'
              autoComplete='address-level2'
              value={formData.city}
              onChange={handleChange}
            />
          </div>

          <div className='estimate-request-form__field'>
            <label htmlFor='estimate-zip'>ZIP Code</label>

            <input
              id='estimate-zip'
              name='zipCode'
              type='text'
              inputMode='numeric'
              autoComplete='postal-code'
              value={formData.zipCode}
              onChange={handleChange}
              aria-invalid={Boolean(errors.zipCode)}
            />

            {errors.zipCode && (
              <p className='estimate-request-form__error'>{errors.zipCode}</p>
            )}
          </div>

          <div className='estimate-request-form__field'>
            <label htmlFor='estimate-service'>Service Needed</label>

            <select
              id='estimate-service'
              name='service'
              value={formData.service}
              onChange={handleChange}
              aria-invalid={Boolean(errors.service)}
            >
              <option value=''>Select a service</option>
              <option value='roof-replacement'>Roof Replacement</option>
              <option value='roof-repair'>Roof Repair</option>
              <option value='storm-damage'>Storm Damage</option>
              <option value='siding'>Siding</option>
              <option value='gutters'>Gutters</option>
              <option value='windows-skylights'>Windows & Skylights</option>
              <option value='multiple-services'>Multiple Services</option>
              <option value='not-sure'>Not Sure Yet</option>
            </select>

            {errors.service && (
              <p className='estimate-request-form__error'>{errors.service}</p>
            )}
          </div>

          <div className='estimate-request-form__field'>
            <label htmlFor='estimate-property-type'>Property Type</label>

            <select
              id='estimate-property-type'
              name='propertyType'
              value={formData.propertyType}
              onChange={handleChange}
              aria-invalid={Boolean(errors.propertyType)}
            >
              <option value=''>Select property type</option>
              <option value='single-family'>Single-Family Home</option>
              <option value='townhouse'>Townhouse</option>
              <option value='multi-family'>Multi-Family Property</option>
              <option value='commercial'>Small Commercial Property</option>
              <option value='other'>Other</option>
            </select>

            {errors.propertyType && (
              <p className='estimate-request-form__error'>
                {errors.propertyType}
              </p>
            )}
          </div>

          <div className='estimate-request-form__field estimate-request-form__field--full'>
            <label htmlFor='estimate-timing'>
              When Are You Planning the Project?
            </label>

            <select
              id='estimate-timing'
              name='projectTiming'
              value={formData.projectTiming}
              onChange={handleChange}
            >
              <option value=''>Select timing</option>
              <option value='urgent'>As Soon as Possible</option>
              <option value='one-month'>Within One Month</option>
              <option value='three-months'>Within Three Months</option>
              <option value='six-months'>Within Six Months</option>
              <option value='researching'>I Am Currently Researching</option>
            </select>
          </div>

          <div className='estimate-request-form__field estimate-request-form__field--full'>
            <label htmlFor='estimate-message'>Project Details</label>

            <textarea
              id='estimate-message'
              name='message'
              rows='6'
              placeholder='Describe the problem, damage, project goals, or anything else we should know...'
              value={formData.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
            />

            {errors.message && (
              <p className='estimate-request-form__error'>{errors.message}</p>
            )}
          </div>

          <div className='estimate-request-form__consent'>
            <label>
              <input
                name='consent'
                type='checkbox'
                checked={formData.consent}
                onChange={handleChange}
              />

              <span>
                I agree that Northline may contact me by phone, email, or text
                regarding this request.
              </span>
            </label>

            {errors.consent && (
              <p className='estimate-request-form__error'>{errors.consent}</p>
            )}
          </div>

          <button className='estimate-request-form__submit' type='submit'>
            Request Free Estimate
          </button>

          <p className='estimate-request-form__privacy'>
            Your information will only be used to respond to your inquiry.
          </p>

          {isSubmitted && (
            <div className='estimate-request-form__success' role='status'>
              <strong>Thank you for your request.</strong>

              <p>
                Your project information has been recorded for this
                demonstration.
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default EstimateForm;
