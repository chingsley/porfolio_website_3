import { IProject } from '../../data/projects';
import ProjectCard from './ProjectCard';

interface IProjectsGridProps {
  projects: IProject[];
}
const ProjectsGrid: React.FC<IProjectsGridProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
      {projects.map((project) => (
        <ProjectCard
          {...project}
          key={project.id}
        />
      ))}
    </div>
  );
};

export default ProjectsGrid;