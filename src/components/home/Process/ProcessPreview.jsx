import SectionHeading from '../../common/SectionHeading/SectionHeading';

import ProcessStep from './ProcessStep';

import './ProcessPreview.css';

const processSteps = [
  {
    title: 'Request an Estimate',
    description:
      'Tell us about your project and schedule a convenient time to speak with our team.',
  },
  {
    title: 'On-Site Inspection',
    description:
      'We inspect your property, document visible issues, and assess the scope of work.',
  },
  {
    title: 'Detailed Proposal',
    description:
      'You receive a clear written proposal outlining the work, materials, and project details.',
  },
  {
    title: 'Professional Installation',
    description:
      'Our crew completes the work with careful preparation, clean installation, and site protection.',
  },
  {
    title: 'Final Walkthrough',
    description:
      'We review the completed project with you and address any remaining questions.',
  },
];

function ProcessPreview() {
  return (
    <section className='process-preview section'>
      <div className='container'>
        <SectionHeading
          eyebrow='Our Process'
          title='Simple. Transparent. Professional.'
          description='A clear process keeps your project organized from the first conversation through the final walkthrough.'
          align='center'
        />

        <ol className='process-preview__list'>
          {processSteps.map((step, index) => (
            <ProcessStep key={step.title} step={step} index={index} />
          ))}
        </ol>
      </div>
    </section>
  );
}

export default ProcessPreview;
