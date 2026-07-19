import RelatedServiceProjects from './RelatedServiceProjects';
import ServiceReview from './ServiceReview';

import './ServiceSocialProof.css';

function ServiceSocialProof({ projects, serviceTitle, review }) {
  if (!projects.length && !review) {
    return null;
  }

  return (
    <section className='service-social-proof section'>
      <div className='container service-social-proof__layout'>
        <RelatedServiceProjects
          projects={projects}
          serviceTitle={serviceTitle}
        />

        <ServiceReview review={review} />
      </div>
    </section>
  );
}

export default ServiceSocialProof;
