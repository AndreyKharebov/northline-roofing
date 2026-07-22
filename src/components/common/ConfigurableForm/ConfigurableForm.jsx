import { useState } from 'react';

import './ConfigurableForm.css';

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

function ConfigurableForm() {
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

    console.log('Form request:', formData);

    setFormData(initialFormData);
    setErrors({});
    setIsSubmitted(true);
  }

  return (
    <form className='configurable-form' onSubmit={handleSubmit} noValidate>
      <div className='configurable-form__heading'>
        <p>Project Information</p>
        <h2>Request Your Free Estimate</h2>
      </div>
      <div className='configurable-form__field'>
        <label htmlFor='form-full-name'>Full Name</label>
        <input
          id='form-full-name'
          name='fullName'
          type='text'
          autoComplete='name'
          value={formData.fullName}
          onChange={handleChange}
          aria-invalid={Boolean(errors.fullName)}
        />

        {errors.fullName && (
          <p className='configurable-form__error'>{errors.fullName}</p>
        )}
      </div>
      <div className='configurable-form__field'>
        <label htmlFor='form-phone'>Phone Number</label>
        <input
          id='form-phone'
          name='phone'
          type='tel'
          autoComplete='tel'
          value={formData.phone}
          onChange={handleChange}
          aria-invalid={Boolean(errors.phone)}
        />

        {errors.phone && (
          <p className='configurable-form__error'>{errors.phone}</p>
        )}
      </div>
      <div className='configurable-form__field'>
        <label htmlFor='form-email'>Email Address</label>
        <input
          id='form-email'
          name='email'
          type='email'
          autoComplete='email'
          value={formData.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email && (
          <p className='configurable-form__error'>{errors.email}</p>
        )}
      </div>
      <div className='configurable-form__field'>
        <label htmlFor='form-preferred-contact'>Preferred Contact Method</label>
        <select
          id='form-preferred-contact'
          name='preferredContact'
          value={formData.preferredContact}
          onChange={handleChange}
        >
          <option value='phone'>Phone</option>
          <option value='email'>Email</option>
          <option value='text'>Text Message</option>
        </select>
      </div>
      <div className='configurable-form__field configurable-form__field--full'>
        <label htmlFor='form-address'>Property Address</label>
        <input
          id='form-address'
          name='address'
          type='text'
          autoComplete='street-address'
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <div className='configurable-form__field'>
        <label htmlFor='form-city'>City</label>
        <input
          id='form-city'
          name='city'
          type='text'
          autoComplete='address-level2'
          value={formData.city}
          onChange={handleChange}
        />
      </div>
      <div className='configurable-form__field'>
        <label htmlFor='form-zip'>Zip Code</label>
        <input
          id='form-zip'
          name='zipCode'
          type='text'
          inputMode='numeric'
          autoComplete='postal-code'
          value={formData.zipCode}
          onChange={handleChange}
          aria-invalid={Boolean(errors.zipCode)}
        />

        {errors.zipCode && (
          <p className='configurable-form__error'>{errors.zipCode}</p>
        )}
      </div>
      <div className='configurable-form__field'>
        <label htmlFor='form-service'>Service Needed</label>
        <select
          id='form-service'
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
          <p className='configurable-form__error'>{errors.service}</p>
        )}
      </div>
      <div className='configurable-form__field'>
        <label htmlFor='form-property-type'>Property Type</label>
        <select
          id='form-property-type'
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
          <p className='configurable-form__error'>{errors.propertyType}</p>
        )}
      </div>
      <div className='configurable-form__field configurable-form__field--full'>
        <label htmlFor='form-timing'>When Are You Planning the Project?</label>
        <select
          id='form-timing'
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
      <div className='configurable-form__field configurable-form__field--full'>
        <label htmlFor='form-message'>Project Details</label>
        <textarea
          id='form-message'
          name='message'
          rows='6'
          placeholder='Describe the problem, damage, project goals, or anything else we should know...'
          value={formData.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && (
          <p className='configurable-form__error'>{errors.message}</p>
        )}
      </div>
      <div className='configurable-form__consent'>
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

      <button className='configurable-form__submit' type='submit'>
        Request Free Estimate
      </button>

      <p className='configurable-form__privacy'>
        Your information will only be used to respond to your inquiry.
      </p>

      {isSubmitted && (
        <div className='configurable-form__success' role='status'>
          <strong>Thank you for your request.</strong>

          <p>
            Your project information has been recorded for this demonstration.
          </p>
        </div>
      )}
    </form>
  );
}

export default ConfigurableForm;
