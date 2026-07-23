import { useState } from 'react';

import { formVersions } from './fields';

import './ConfigurableForm.css';

function createInitialFormData(fields) {
  return fields.reduce((initialData, field) => {
    initialData[field.name] = field.defaultValue ?? '';

    return initialData;
  }, {});
}

function ConfigurableForm({ version = 'short' }) {
  const config = formVersions[version] ?? formVersions.short;
  const { fields } = config;

  const [formData, setFormData] = useState(() => createInitialFormData(fields));
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
    return fields.reduce((nextErrors, field) => {
      if (!field.required) {
        return nextErrors;
      }

      const value = formData[field.name];

      const isEmpty =
        field.type === 'checkbox' ? !value : !String(value ?? '').trim();

      if (isEmpty) {
        nextErrors[field.name] =
          field.requiredMessage ?? `${field.label} is required.`;
      }

      return nextErrors;
    }, {});
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

    setFormData(createInitialFormData(fields));
    setErrors({});
    setIsSubmitted(true);
  }

  function renderField(field) {
    const id = `form-${field - name}`;
    const error = errors[field.name];

    if (field.type === 'textarea') {
      return (
        <textarea
          id={id}
          name={field.name}
          rows={field.rows ?? 5}
          placeholder={field.placeholder}
          value={formData[field.name]}
          onChange={handleChange}
          aria-invalid={Boolean(error)}
        />
      );
    }

    if (field.type === 'select') {
      return (
        <select
          id={id}
          name={field.name}
          value={formData[field.name]}
          onChange={handleChange}
          aria-invalid={Boolean(error)}
        >
          {field.placeholder && <option value=''>{field.placeholder}</option>}

          {field.options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    }

    if (field.type === 'checkbox') {
      return (
        <div className='configurable-form__consent'>
          <label>
            <input
              id={id}
              name={field.name}
              type='checkbox'
              checked={Boolean(formData[field.name])}
              onChange={handleChange}
              aria-invalid={Boolean(error)}
            />
            <span>{field.checkboxLabel}</span>
          </label>
        </div>
      );
    }

    return (
      <input
        id={id}
        name={field.name}
        type={field.type ?? 'text'}
        placeholder={field.placeholder}
        autoComplete={field.autoComplete}
        inputMode={field.inputMode}
        value={formData[field.name]}
        onChange={handleChange}
        aria-invalid={Boolean(error)}
      />
    );
  }

  return (
    <form className='configurable-form' onSubmit={handleSubmit} noValidate>
      <div className='configurable-form__heading'>
        <p>{config.eyebrow}</p>
        <h2>{config.title}</h2>
      </div>

      {fields.map((field) => {
        const id = `form-${field.name}`;
        const error = errors[field.name];

        return (
          <div
            key={field.name}
            className={[
              'configurable-form__field',
              field.fullWidth ? 'configurable-form__field--full' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {field.type !== 'checkbox' && (
              <label htmlFor={id}>{field.label}</label>
            )}

            {renderField(field)}

            {error && <p className='configurable-form__error'>{error}</p>}
          </div>
        );
      })}

      <button className='configurable-form__submit' type='submit'>
        {config.submitLabel}
      </button>

      <p className='configurable-form__privacy'>
        Your information will only be used to respond to your inquiry.
      </p>

      {isSubmitted && (
        <div className='configurable-form__success' role='status'>
          <strong>{config.successTitle}</strong>
          <p>{config.successMessage}</p>
        </div>
      )}
    </form>
  );
}

export default ConfigurableForm;
