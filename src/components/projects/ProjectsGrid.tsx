import { FiSearch } from 'react-icons/fi';
import { useProjectsContext } from '../../context/ProjectsContext';
import ProjectSingle from './ProjectCard';
import ProjectsFilter from './ProjectsFilter';

const ProjectsGrid = () => {
  const projectsContext = useProjectsContext()!;
  console.log(projectsContext);
  if (!projectsContext) {
    return <div>Loading...</div>;
  }
  const {
    projects,
    setProjects,
    searchString,
    setSearchString,
    searchProjectsByTitle,
    selectedProject,
    setSelectedProject,
    selectProjectsByCategory,
  } = projectsContext;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
      {projects.map((project) => (
        <ProjectSingle
          {...project}
          key={project.id}
        />
      ))}
    </div>
  );
};

export default ProjectsGrid;