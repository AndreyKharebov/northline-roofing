import './EstimateSteps.css';

const steps = [
  {
    number: '01',
    title: 'We Review Your Request',
    description:
      'Our team reviews the service, property location, and project details you provide.',
  },
  {
    number: '02',
    title: 'We Contact You',
    description:
      'A team member calls or emails you to ask questions and discuss the next step.',
  },
  {
    number: '03',
    title: 'We Schedule an Inspection',
    description:
      'When appropriate, we arrange a convenient time to inspect the property.',
  },
  {
    number: '04',
    title: 'You Receive a Proposal',
    description:
      'We prepare a clear project proposal describing the recommended work.',
  },
];

function EstimateSteps() {
  return (
    <section className='estimate-steps section'>
      <div className='container'>
        <div className='estimate-steps__heading'>
          <p className='estimate-steps__eyebrow'>What Happens Next</p>

          <h2 className='estimate-steps__title'>A Simple Estimate Process</h2>

          <p className='estimate-steps__description'>
            We keep the process clear from your first request through the
            written proposal.
          </p>
        </div>

        <ol className='estimate-steps__grid'>
          {steps.map((step) => (
            <li className='estimate-steps__item' key={step.number}>
              <span className='estimate-steps__number'>{step.number}</span>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default EstimateSteps;
