import SectionHeading from '../../common/SectionHeading/SectionHeading';

import './ServiceProcess.css';

const processSteps = [
  {
    number: '01',
    title: 'Schedule an Inspection',
    description:
      'Contact us to schedule a convenient inspection. We’ll assess your needs and answer your questions.',
    icon: (
      <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        aria-hidden='true'
      >
        <rect x='3' y='5' width='18' height='16' rx='2' />
        <path d='M16 3v4M8 3v4M3 10h18' />
        <path d='M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01' />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Get a Clear Estimate',
    description:
      'You’ll receive a detailed, upfront estimate with recommendations tailored to your home.',
    icon: (
      <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        aria-hidden='true'
      >
        <rect x='5' y='3' width='14' height='18' rx='2' />
        <path d='M9 3.5h6v3H9zM8 10h8M8 14h8M8 18h5' />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Complete the Project',
    description:
      'Our team gets to work and completes the project with care, quality, and a final walkthrough.',
    icon: (
      <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        aria-hidden='true'
      >
        <path d='m3 11 9-8 9 8' />
        <path d='M5 10v10h14V10' />
        <path d='m9 14 2 2 4-4' />
      </svg>
    ),
  },
];

function ServiceProcess() {
  return (
    <section className='service-process section'>
      <div className='container'>
        <SectionHeading
          eyebrow='Our Process'
          title='A Simple Process, From Start to Finish'
          align='center'
        />

        <div className='service-process__list'>
          {processSteps.map((step, index) => (
            <article className='service-process__step' key={step.number}>
              <div className='service-process__visual'>
                <span className='service-process__number'>{step.number}</span>

                <div className='service-process__icon'>{step.icon}</div>

                {index < processSteps.length - 1 && (
                  <div
                    className='service-process__connector'
                    aria-hidden='true'
                  />
                )}
              </div>

              <div className='service-process__content'>
                <h3 className='service-process__step-title'>{step.title}</h3>

                <p className='service-process__description'>
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceProcess;
