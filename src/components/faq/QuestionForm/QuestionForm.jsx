import { useState } from 'react';

import './QuestionForm.css';

const initialFormData = {
  fullName: '',
  phone: '',
  email: '',
  topic: '',
  question: '',
};

function QuestionForm() {
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

    if (!formData.topic) {
      nextErrors.topic = 'Please select a topic.';
    }

    if (!formData.question.trim()) {
      nextErrors.question = 'Please enter your question.';
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

    console.log('FAQ question form:', formData);

    setFormData(initialFormData);
    setErrors({});
    setIsSubmitted(true);
  }

  return (
    <section className='question-section' id='ask-question'>
      <div className='container question-section__inner'>
        <div className='question-section__content'>
          <p className='question-section__eyebrow'>Still Have Questions?</p>

          <h2 className='question-section__title'>
            Let’s Talk About Your Project
          </h2>

          <p className='question-section__description'>
            Our team is available to provide straightforward answers and help
            you make the right decision for your home.
          </p>
        </div>

        <form className='question-form' onSubmit={handleSubmit} noValidate>
          <div className='question-form__field'>
            <label htmlFor='faq-full-name'>Full Name</label>

            <input
              id='faq-full-name'
              name='fullName'
              type='text'
              autoComplete='name'
              placeholder='Full Name'
              value={formData.fullName}
              onChange={handleChange}
              aria-invalid={Boolean(errors.fullName)}
            />

            {errors.fullName && (
              <p className='question-form__error'>{errors.fullName}</p>
            )}
          </div>

          <div className='question-form__field'>
            <label htmlFor='faq-phone'>Phone</label>

            <input
              id='faq-phone'
              name='phone'
              type='tel'
              autoComplete='tel'
              placeholder='Phone'
              value={formData.phone}
              onChange={handleChange}
              aria-invalid={Boolean(errors.phone)}
            />

            {errors.phone && (
              <p className='question-form__error'>{errors.phone}</p>
            )}
          </div>

          <div className='question-form__field question-form__field--full'>
            <label htmlFor='faq-email'>Email Address</label>

            <input
              id='faq-email'
              name='email'
              type='email'
              autoComplete='email'
              placeholder='Email Address'
              value={formData.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
            />

            {errors.email && (
              <p className='question-form__error'>{errors.email}</p>
            )}
          </div>

          <div className='question-form__field question-form__field--full'>
            <label htmlFor='faq-topic'>How Can We Help?</label>

            <select
              id='faq-topic'
              name='topic'
              value={formData.topic}
              onChange={handleChange}
              aria-invalid={Boolean(errors.topic)}
            >
              <option value=''>How Can We Help?</option>

              <option value='roof-replacement'>Roof Replacement</option>

              <option value='roof-repair'>Roof Repair</option>

              <option value='storm-damage'>Storm Damage</option>

              <option value='siding-gutters'>Siding or Gutters</option>

              <option value='warranty'>Warranty Question</option>

              <option value='other'>Other Question</option>
            </select>

            {errors.topic && (
              <p className='question-form__error'>{errors.topic}</p>
            )}
          </div>

          <div className='question-form__field question-form__field--full'>
            <label htmlFor='faq-question'>Your Question</label>

            <textarea
              id='faq-question'
              name='question'
              rows='5'
              placeholder='Your Question'
              value={formData.question}
              onChange={handleChange}
              aria-invalid={Boolean(errors.question)}
            />

            {errors.question && (
              <p className='question-form__error'>{errors.question}</p>
            )}
          </div>

          <button className='question-form__submit' type='submit'>
            Submit Question
          </button>

          {isSubmitted && (
            <p className='question-form__success' role='status'>
              Thank you. Your question has been recorded for this demo.
            </p>
          )}

          <p className='question-form__phone'>
            or call <a href='tel:+12155550198'>(215) 555-0198</a>
          </p>
        </form>
      </div>
    </section>
  );
}

export default QuestionForm;
