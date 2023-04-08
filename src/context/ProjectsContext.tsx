import { useState, createContext, Dispatch, SetStateAction, useContext } from 'react';
import { projects as myProjects } from '../data';
import { IProject } from '../data/projects';

interface IProjectsContext {
  projects: IProject[];
  setProjects: Dispatch<SetStateAction<IProject[]>>;
  searchString: string;
  setSearchString: Dispatch<SetStateAction<string>>;
  searchProjectsByTitle: IProject[];
  selectedProject: string;
  setSelectedProject: Dispatch<SetStateAction<string>>;
  selectProjectsByCategory: IProject[];
}
const ProjectsContext = createContext<IProjectsContext | null>(null);

const ProjectsProvider = (props: { children: React.ReactNode; }) => {
  const [projects, setProjects] = useState(myProjects);
  const [searchString, setSearchString] = useState('');
  const [selectedProject, setSelectedProject] = useState('');

  // search projects by title
  const searchProjectsByTitle = projects.filter(item => {
    const result = item.title.toLowerCase()
      .includes(searchString.toLowerCase())
      ? item
      : searchString === ''
        ? item
        : [];

    return result;
  });

  // Seelct projects by project category
  const selectProjectsByCategory = projects.filter(item => {
    const category =
      item.category.charAt(0).toUpperCase() + item.category.slice(1);
    return category.includes(selectedProject);
  });


  return (
    <ProjectsContext.Provider
      value={{
        projects,
        setProjects,
        searchString,
        setSearchString,
        searchProjectsByTitle,
        selectedProject,
        setSelectedProject,
        selectProjectsByCategory,
      }}
    >
      {props.children};
    </ProjectsContext.Provider>
  );
};

export const useProjectsContext = () => {
  return useContext(ProjectsContext);
};

export default ProjectsProvider;