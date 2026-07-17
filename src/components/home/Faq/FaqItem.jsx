import './FaqItem.css';

function FaqItem({ item, isOpen, onToggle }) {
  const answerId = `faq-answer-${item.id}`;

  return (
    <article className='faq-item'>
      <h3 className='faq-item__heading'>
        <button
          className='faq-item__button'
          type='button'
          aria-expanded={isOpen}
          aria-controls={answerId}
          onClick={onToggle}
        >
          <span>{item.question}</span>
          <span className='faq-item__icon' aria-hidden='true'>
            {isOpen ? '−' : '+'}
          </span>
        </button>
      </h3>

      {isOpen && (
        <div className='faq-item__answer' id={answerId}>
          <p>{item.answer}</p>
        </div>
      )}
    </article>
  );
}

export default FaqItem;
