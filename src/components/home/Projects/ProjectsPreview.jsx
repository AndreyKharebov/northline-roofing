import SectionHeading from '../../common/SectionHeading/SectionHeading';

import ProjectCard from './ProjectCard';

import { projects } from '../../../data/projects';

import './ProjectsPreview.css';
import Button from '../../common/Button/Button';

function ProjectsPreview() {
  return (
    <section className='projects-preview section'>
      <div className='container'>
        <SectionHeading
          eyebrow='Recent Projects'
          title='Real Projects. Real Results.'
          description='Explore recent roofing and exterior projects completed for homeowners across the Greater Philadelphia area.'
          align='center'
        />

        <div className='projects-preview__list'>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className='projects-preview__action'>
          <Button to='/projects' variant='secondary'>
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ProjectsPreview;
