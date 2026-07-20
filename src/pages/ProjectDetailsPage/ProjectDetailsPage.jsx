import { useParams } from 'react-router-dom';

import NotFoundPage from '../NotFoundPage/NotFoundPage';

import ProjectDetailsHero from '../../components/projectDetails/ProjectDetailsHero/ProjectDetailsHero';
import ProjectGallery from '../../components/projectDetails/ProjectGallery/ProjectGallery';
import ProjectOverview from '../../components/projectDetails/ProjectOverview/ProjectOverview';
import ProjectReview from '../../components/projectDetails/ProjectReview/ProjectReview';
import ProjectEstimateForm from '../../components/projectDetails/ProjectEstimate/ProjectEstimate';
import RelatedProjects from '../../components/projectDetails/RelatedProjects/RelatedProjects';

import { projects } from '../../data/projects';
import ProjectTrustStrip from '../../components/projectDetails/ProjectTrustStrip/ProjectTrustStrip';

function ProjectDetailsPage() {
  const { projectSlug } = useParams();

  const project = projects.find(
    (projectItem) => projectItem.slug === projectSlug,
  );

  if (!project) {
    return <NotFoundPage />;
  }

  return (
    <>
      <ProjectDetailsHero project={project} />
      <ProjectTrustStrip />

      <ProjectGallery gallery={project.gallery} />

      <ProjectOverview
        overview={project.overview}
        projectInfo={project.projectInfo}
        completedWorkTitle={project.completedWorkTitle}
        completedWork={project.completedWork}
      />

      <ProjectReview review={project.review} />

      <RelatedProjects
        projects={project.relatedProjects}
        category={project.category}
      />

      <ProjectEstimateForm
        projectTitle={project.title}
        estimate={project.estimate}
      />
    </>
  );
}

export default ProjectDetailsPage;
