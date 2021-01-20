import React from 'react';
import './Project.css';
import { Finpal } from '../../imgs';
import { motion } from 'framer-motion';

const Project = ({ name, description, img, link }) => {
  const projectVariants = {
    initial: {
      x: '-100vw',
    },
    animate: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 65,
        duration: 1,
        delay: 1,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className='project'
      variants={projectVariants}
      initial='initial'
      animate='animate'
      whileHover='hover'
    >
      <div className='text'>
        <h2>{name}</h2>
        <p>{description}</p>
        <small>{link}</small>
      </div>
      <div className='img'>
        <img src={Finpal} alt='finpal' />
      </div>
    </motion.div>
  );
};

export default Project;
