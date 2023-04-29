import { motion } from 'framer-motion';
import { AboutClients, AboutCounter, AboutMeBio } from '../components';


const AboutMe = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto"
      >
        <AboutMeBio />
      </motion.div>

      {/** Counter without paddings */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <AboutCounter />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto"
      >
        <AboutClients />
      </motion.div>
    </>
  );
};

export default AboutMe;