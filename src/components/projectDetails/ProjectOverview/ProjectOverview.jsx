import './ProjectOverview.css';

function ProjectOverview({
  overview,
  projectInfo,
  completedWorkTitle,
  completedWork,
}) {
  return (
    <section className='project-overview section'>
      <div className='container project-overview__layout'>
        <div className='project-overview__left'>
          <div className='project-overview__content'>
            <p className='project-overview__eyebrow'>{overview.eyebrow}</p>

            <h2 className='project-overview__title'>{overview.title}</h2>

            <div className='project-overview__paragraphs'>
              {overview.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <dl className='project-overview__info'>
            {projectInfo.map((item) => (
              <div className='project-overview__info-item' key={item.id}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className='project-overview__work'>
          <p className='project-overview__eyebrow'>{completedWorkTitle}</p>

          <ul className='project-overview__work-list'>
            {completedWork.map((item) => (
              <li key={item.id}>
                <span className='project-overview__check' aria-hidden='true'>
                  ✓
                </span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProjectOverview;
