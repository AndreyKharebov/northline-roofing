import { useState } from 'react';

import Button from '../../common/Button/Button';
import SectionHeading from '../../common/SectionHeading/SectionHeading';
import FaqItem from './FaqItem';

import { faqItems } from '../../../data/faq';

import './FaqPreview.css';

function FaqPreview() {
  const [openItemId, setOpenItemId] = useState(null)

  function handleToggle(itemId) {
    setOpenItemId(currentId => 
      currentId === itemId ? null : itemId
    )
  }

  return (
    <section className='faq-preview section'>
      <div className='container faq-preview__inner'>
        <div className='faq-preview__intro'>
          <SectionHeading
            eyebrow='FAQ'
            title='Frequently Asked Questions'
            description='Find answers to common questions about estimates, scheduling, roofing work, warranties, and storm damage.'
          />

          <Button to='/faq' variant='secondary'>
            View All Questions
          </Button>
        </div>

        <div className='faq-preview__list'>
          {faqItems.map((item) => (
            <FaqItem 
              key={item.id}
              item={item}
              isOpen={openItemId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqPreview;
