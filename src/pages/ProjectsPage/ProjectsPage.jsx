import ProjectsCta from '../../components/projects/ProjectsCta/ProjectsCta';
import ProjectsGallery from '../../components/projects/ProjectsGallery/ProjectsGallery';
import ProjectsHero from '../../components/projects/ProjectsHero/ProjectsHero';
import QualityCommitment from '../../components/projects/QualityCommitment/QualityCommitment';

function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGallery />
      <QualityCommitment />
      <ProjectsCta />
    </>
  );
}

export default ProjectsPage;
