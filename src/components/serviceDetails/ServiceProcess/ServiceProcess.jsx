import './ServiceProcess.css';

function ServiceProcess({ process }) {
  return (
    <section className='service-process section'>
      <div className='container'>
        <div className='service-process__heading'>
          <p className='service-process__eyebrow'>Our Process</p>

          <h2 className='service-process__title'>What You Can Expect</h2>
        </div>

        <ol className='service-process__grid'>
          {process.map((step) => (
            <li className='service-process__item' key={step.number}>
              <span className='service-process__number'>{step.number}</span>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default ServiceProcess;
