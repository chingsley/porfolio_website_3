import React from 'react';
import { IProject } from '../../types/project.types';

interface ProjectRelatedProjectsProps {
  projects: IProject[];
}
const ProjectRelatedProjects: React.FC<ProjectRelatedProjectsProps> = ({ projects }) => {
  return (
    <div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
      <p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
        Other projects
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        {projects.map((project) => {
          return (
            <div className="w-2/3 h-2/3 test">
              <img
                src={project.img}
                className="rounded-xl cursor-pointer"
                alt={project.title}
                key={project.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectRelatedProjects;