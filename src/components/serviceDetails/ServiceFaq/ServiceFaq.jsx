import { useState } from "react";

import ServiceFaqItem from "./ServiceFaqItem";

import "./ServiceFaq.css";

function ServiceFaq({ faq }) {
  const [openItemIndex, setOpenItemIndex] = useState(0);

  function handleToggle(index) {
    setOpenItemIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  }

  return (
    <div className="service-faq">
      <p className="service-faq__eyebrow">
        Frequently Asked Questions
      </p>

      <div className="service-faq__accordion">
        {faq.map((item, index) => (
          <ServiceFaqItem
            key={item.question}
            item={item}
            index={index}
            isOpen={openItemIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ServiceFaq;