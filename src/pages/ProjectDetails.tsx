import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useProjectsContext } from "../context/ProjectsContext";
import { ProjectGallery, ProjectHeader, ProjectInfo, ProjectRelatedProjects } from "../components";

const ProjectDetails = () => {
  const { id } = useParams();

  const projectsContext = useProjectsContext();
  if (!projectsContext) return <div className="loading">Loading...</div>;

  const { projects } = projectsContext;
  const selectedProject = projects.find(p => p.id === Number(id));
  console.log('selectedProject = ', selectedProject);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.6,
        delay: 0.15,
      }}
      className="container mx-auto mt-5 sm:mt-10"
    >
      <ProjectHeader />
      <ProjectGallery />
      <ProjectInfo />
      <ProjectRelatedProjects />
    </motion.div>
  );
};

export default ProjectDetails;