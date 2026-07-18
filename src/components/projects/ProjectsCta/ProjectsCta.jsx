import Button from '../../common/Button/Button';

import './ProjectsCta.css';

function ProjectsCta() {
  return (
    <section className='projects-cta'>
      <div className='container projects-cta__inner'>
        <div className='projects-cta__content'>
          <p className='projects-cta__eyebrow'>Ready to Start Your Project?</p>

          <h2 className='projects-cta__title'>
            Let’s Build Something Great Together
          </h2>

          <p className='projects-cta__description'>
            Request a free estimate and see how Northline can protect and
            enhance your home.
          </p>

          <div className='projects-cta__actions'>
            <Button to='/request-estimate'>Get Free Estimate</Button>

            <a href='tel:+12155550198'>
              Or call <strong>(215) 555-0198</strong>
            </a>
          </div>
        </div>

        <article className='projects-cta__review'>
          <div className='projects-cta__rating' aria-label='5 out of 5 stars'>
            ★★★★★
          </div>

          <blockquote>
            “Northline Roofing did an excellent job on our roof replacement.
            Professional, on time, and the quality is outstanding.”
          </blockquote>

          <p>
            <strong>Sarah M.</strong>
            <span>Philadelphia, PA</span>
          </p>
        </article>
      </div>
    </section>
  );
}

export default ProjectsCta;
