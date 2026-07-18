import { useState } from 'react';

import { faqItems } from '../../../data/faq';

import FaqAccordionItem from './FaqAccordionItem';

import './FaqContent.css';

function FaqContent() {
  const [openItemId, setOpenItemId] = useState(faqItems[0]?.id ?? null);

  function handleToggle(itemId) {
    setOpenItemId((currentId) => (currentId === itemId ? null : itemId));
  }

  return (
    <section className='faq-content section'>
      <div className='container faq-content__inner'>
        <aside className='faq-content__sidebar'>
          <p className='faq-content__sidebar-eyebrow'>Need More Help?</p>

          <h2 className='faq-content__sidebar-title'>
            Can’t Find Your Answer?
          </h2>

          <p className='faq-content__sidebar-text'>
            Our team is available to answer questions about your roof, exterior,
            estimate, or upcoming project.
          </p>

          <a className='faq-content__contact-link' href='#ask-question'>
            Contact Us
          </a>

          <a className='faq-content__phone' href='tel:+12155550198'>
            <span aria-hidden='true'>☎</span>
            (215) 555-0198
          </a>
        </aside>

        <div className='faq-content__main'>
          <p className='faq-content__eyebrow'>Frequently Asked Questions</p>

          <div className='faq-content__accordion'>
            {faqItems.map((item) => (
              <FaqAccordionItem
                key={item.id}
                item={item}
                isOpen={openItemId === item.id}
                onToggle={() => handleToggle(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqContent;
