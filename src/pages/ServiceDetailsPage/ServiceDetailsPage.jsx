import { useParams } from 'react-router-dom';

import ServiceDetailsHero from '../../components/serviceDetails/ServiceDetailsHero/ServiceDetailsHero';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

import ServiceTrustStrip from '../../components/serviceDetails/ServiceTrustStrip/ServiceTrustStrip';
import ServiceOverview from '../../components/serviceDetails/ServiceOverview/ServiceOverview';
import ServiceBenefits from '../../components/serviceDetails/ServiceBenefits/ServiceBenefits';
import ServiceOptions from '../../components/serviceDetails/ServiceOptions/ServiceOptions';
import ServiceProcess from '../../components/serviceDetails/ServiceProcess/ServiceProcess';
import ServiceSocialProof from '../../components/serviceDetails/ServiceSocialProof/ServiceSocialProof';
import ServiceFaqSection from '../../components/serviceDetails/ServiceFaq/ServiceFaqSection';
import ServiceEstimateForm from '../../components/serviceDetails/ServiceEstimateForm/ServiceEstimateForm';

import { services } from '../../data/services';

function ServiceDetailsPage() {
  const { serviceSlug } = useParams();

  const service = services.find(
    (serviceItem) => serviceItem.slug === serviceSlug,
  );

  if (!service) {
    return <NotFoundPage />;
  }

  return (
    <>
      <ServiceDetailsHero service={service} />
      <ServiceTrustStrip />
      <ServiceOverview overview={service.overview} />
      <ServiceBenefits benefits={service.benefits} />
      <ServiceOptions options={service.options} />
      <ServiceProcess process={service.process} />
      <ServiceSocialProof
        projects={service.relatedProjects}
        serviceTitle={service.title}
        review={service.review}
      />

      <ServiceFaqSection faq={service.faq} />

      <ServiceEstimateForm serviceTitle={service.title} />
      
    </>
  );
}

export default ServiceDetailsPage;
