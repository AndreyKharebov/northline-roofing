import './FaqAccordionItem.css';

function FaqAccordionItem({ item, isOpen, onToggle }) {
  const answerId = `faq-page-answer-${item.id}`;
  const buttonId = `faq-page-button-${item.id}`;

  return (
    <article className='faq-accordion-item'>
      <h3 className='faq-accordion-item__heading'>
        <button
          className='faq-accordion-item__button'
          id={buttonId}
          type='button'
          aria-expanded={isOpen}
          aria-controls={answerId}
          onClick={onToggle}
        >
          <span>{item.question}</span>

          <span className='faq-accordion-item__icon' aria-hidden='true'>
            {isOpen ? '−' : '+'}
          </span>
        </button>
      </h3>

      {isOpen && (
        <div
          className='faq-accordion-item__answer'
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

export default FaqAccordionItem;
