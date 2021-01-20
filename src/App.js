import { motion } from 'framer-motion';
import React from 'react';
import Project from './components/projects/Project';
import { data } from './data/data';

function App() {
  const containerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 0.5,
      },
    },
  };

  const nameVariants = {
    initial: {
      y: '-100vw',
    },
    animate: {
      y: 0,
      originX: 0,
      transition: {
        duration: 1,
        delay: 1.3,
        type: 'spring',
      },
    },
    hover: {
      originX: 0,
      originY: 0,
      scale: 1.3,
      rotate: 5,
      transition: {
        duration: 0.5,
      },
      color: '#424242',
    },
  };

  return (
    <motion.div
      className='App'
      variants={containerVariants}
      initial='initial'
      animate='animate'
    >
      <div className='title'>
        <h1>
          React Apps by{' '}
          <motion.div
            variants={nameVariants}
            initial='initial'
            animate='animate'
            whileHover={{
              originX: 0,
              originY: 0,
              scale: 1.3,
              rotate: 5,
              transition: {
                duration: 0.5,
              },
              color: '#424242',
            }}
          >
            Kurt
          </motion.div>
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
