import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Img from '../img/Img';
import { IProject } from '../../types/project.types';
import Button from '../reusable/Button';

interface IProjectsLIstProps {
  projects: IProject[];
}
const ProjectsList: React.FC<IProjectsLIstProps> = ({ projects }) => {
  return (
    // <Wrapper className="grid row-gap-3 mt-6">
    <Wrapper className="grid row-gap-3 mt-6">
      {projects.map((project) => {
        const { id, title, description, img: image } = project;
        return (
          <motion.article
            key={id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, }}
            transition={{
              ease: 'easeInOut',
              duration: 0.7,
              delay: 0.15,
            }}
          >
            <Img src={image} alt={title} />
            <div className="font-general-medium text-ternary-dark dark:text-ternary-light mb-2">
              <h4 className='text-lg md:text-lg'>{title}</h4>
              <p>{description.substring(0, 150)}...</p>
              <div className="project-links">
                <div className="project-links__left">
                  <Link
                    to={`/products/${id}`}
                    className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-sm sm:text-sm duration-300"
                  >
                    <Button title="Details" />
                  </Link>
                </div>
                <div className="project-links__right">
                  <Link
                    to={`/products/${id}`}
                    className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-sm sm:text-sm duration-300"
                  >
                    <Button title="Go to site" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  article {
    .project-links {
        display: flex;

        &__left,
        &__right {
          display: flex;
        }

        &__left {
          margin-right: 2px;
        }
    }
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
      margin-bottom: 1rem;
    }
  }
  @media (max-width: 992px) {
    article {
      margin-bottom: 2rem;
    }
  }
  @media (max-width: 400px) {
    img {
      width: 100%;
    }
    article {
      .project-links {
        justify-content: center;
      }
    }
  }
`;

export default ProjectsList;
