import { FiSearch } from 'react-icons/fi';
import { ProjectsFilter, ProjectsGrid, ProjectsList, ViewTypeSwitcher } from "../components";
import { useProjectsContext } from "../context/ProjectsContext";
import { useSettingsContext } from '../context/SettingsContext';


const Projects = () => {
  const projectsContext = useProjectsContext();
  const settingsContext = useSettingsContext();

  console.log(projectsContext);
  if (!projectsContext) return <div>Loading...</div>;
  if (!settingsContext) return <div>Loading...</div>;

  const {
    projects,
    // setProjects,
    // searchString,
    setSearchString,
    // searchProjectsByTitle,
    // selectedProject,
    // setSelectedProject,
    // selectProjectsByCategory,
  } = projectsContext;

  const { viewType } = settingsContext;

  return (
    <div className="container mx-auto">

      <section className="py-5 sm:py-10 mt-5 sm:mt-10">
        <div className="text-center">
          <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
            Projects portfolio
          </p>
        </div>

        <div className="mt-10 sm:mt-16">
          <div
            className="
                        flex
                        justify-between
                        border-b border-primary-light
                        dark:border-secondary-dark
                        pb-3
                        gap-3
                        "
          >
            <div className="flex justify-between gap-2">
              <span
                className="hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer"
              >
                <FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5"></FiSearch>
              </span>
              <input
                onChange={(e) => {
                  setSearchString(e.target.value);
                }}
                className="font-general-medium pl-3 pr-1 sm:px-4 py-2 border  border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                id="name"
                name="name"
                type="search"
                required
                placeholder="Search Projects"
                aria-label="Name"
              />
              <ViewTypeSwitcher />
            </div>

            <ProjectsFilter />
          </div>
        </div>

        {viewType === 'grid' ? <ProjectsGrid projects={projects} /> : <ProjectsList projects={projects} />}
      </section>
    </div>
  );
};

export default Projects;