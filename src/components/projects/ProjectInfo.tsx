import { useContext } from 'react';
import { IProject } from '../../types/project.types';
import SocialShare from './SocialShare';


interface IProjectInfoProps {
  projectInfo: IProject["projectInfo"];
}
const ProjectInfo: React.FC<IProjectInfoProps> = (props) => {
  const projectInfo = props.projectInfo || {};
  const client = projectInfo.client || {};
  return (
    <div className="block sm:flex gap-0 sm:gap-10 mt-14">
      <div className="w-full sm:w-1/3 text-left">
        {/* Single project client details */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
            About Client
          </p>
          <ul className="leading-loose">
            {Object.keys(client).map(
              (info, idx) => {
                return (
                  <li
                    className="font-general-regular text-ternary-dark dark:text-ternary-light"
                    key={idx}
                  >
                    <span>{info}: </span>
                    <a
                      href="https://stoman.me"
                      className={
                        info === 'Website' ||
                          info === 'Phone'
                          ? 'hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
                          : ''
                      }
                      aria-label="Project Website and Phone"
                    >
                      {client[info as keyof typeof client]}
                    </a>
                  </li>
                );
              }
            )}
          </ul>
        </div>

        {/* Single project objectives */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            Objective
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {projectInfo.objective}
          </p>
        </div>

        {/* Single project technologies */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            Tools & Technologies
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {projectInfo.technologies?.join(
              ', '
            )}
          </p>
        </div>

        {/* Single project social sharing */}
        <div>
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            Share This
          </p>
          <div className="flex items-center gap-3 mt-5">
            <SocialShare />
          </div>
        </div>
      </div>

      {/*  Single project right section */}
      <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
        <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
          Challenge / About the project
        </p>
        <p className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light">
          {projectInfo.challenge}
        </p>
      </div>
    </div>
  );
};

export default ProjectInfo;
