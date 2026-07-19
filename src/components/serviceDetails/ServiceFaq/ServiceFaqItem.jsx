function ServiceFaqItem({ item, index, isOpen, onToggle }) {
  const buttonId = `service-faq-button-${index}`;
  const answerId = `service-faq-answer-${index}`;

  return (
    <article className='service-faq__item'>
      <h3>
        <button
          id={buttonId}
          type='button'
          aria-expanded={isOpen}
          aria-controls={answerId}
          onClick={onToggle}
        >
          <span>{item.question}</span>

          <span className='service-faq__icon' aria-hidden='true'>
            {isOpen ? '−' : '+'}
          </span>
        </button>
      </h3>

      {isOpen && (
        <div
          className='service-faq__answer'
          id={answerId}
          role='region'
          aria-labelledby={buttonId}
        >
          <p>{item.answer}</p>
        </div>
      )}
    </article>
  );
}

export default ServiceFaqItem;
