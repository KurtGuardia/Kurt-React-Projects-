import { motion } from 'framer-motion';
import React from 'react';
import Project from './components/projects/Project';
import { data } from './data/data';

function App() {
  return (
    <motion.div
      className='App'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className='title'>
        <h1>
          React Apps by <span>Kurt</span>
        </h1>
        <p>
          This is a list of some of the most important ReactJS proyects I've
          covered so far. Along with the description there is the link to each
          one of them. The oldest the simplest.
        </p>
      </div>
      <div className='container'>
        {data &&
          data.map((project, index) => {
            return <Project {...project} key={index} />;
          })}
      </div>
    </motion.div>
  );
}

export default App;
