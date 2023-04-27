import { useState } from 'react';
import { motion } from 'framer-motion';
import { aboutMe as aboutMeText } from '../data';
import { AboutMeBio } from '../components';


const AboutMe = () => {
  const [aboutMe, setAboutMe] = useState(aboutMeText);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto"
    >
      <AboutMeBio />
    </motion.div>
  );
};

export default AboutMe;