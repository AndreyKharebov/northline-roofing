import './ProcessStep.css';

function ProcessStep({ step, index }) {
  return (
    <li className='process-step'>
      <div className='process-step__marker'>
        <span className='process-step__number'>{index + 1}</span>
      </div>

      <div className='process-step__content'>
        <h3 className='process-step__title'>{step.title}</h3>

        <p className='process-step__description'>{step.description}</p>
      </div>
    </li>
  );
}

export default ProcessStep;
