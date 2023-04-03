import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './css/App.css';
import { AppHeader, ScrollToTop } from './components';
import UseScrollTop from './hooks/useScrollToTop';

const AboutMe = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectSingle = lazy(() => import('./pages/ProjectSingle'));

function App() {
  return (
    <AnimatePresence>
      <div className="bg-secondary-light dark:bg-primary-dark transition duration-300">
        <Router>
          <ScrollToTop />
          <AppHeader />
          <Suspense fallback={""}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="projects" element={<Projects />} />
              <Route path="projects/single-project" element={<ProjectSingle />} />
              <Route path="about" element={<AboutMe />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </Router>
        <UseScrollTop />
      </div>
    </AnimatePresence>
  );
}

export default App;
