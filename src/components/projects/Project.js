import React from 'react';
import './Project.css';
import { motion } from 'framer-motion';
import {
  finpal,
  spotify,
  spotifyfirst,
  amazon,
  miniprojects,
} from '../../imgs/index';

function Project({ name, description, img, link }) {
  let imgData = {};
  let imgSrc = {};

  if (img === 'finpal') {
    imgSrc = { finpal };
    imgData = imgSrc.finpal;
  } else if (img === 'spotify') {
    imgSrc = { spotify };
    imgData = imgSrc.spotify;
  } else if (img === 'spotifyfirst') {
    imgSrc = { spotifyfirst };
    imgData = imgSrc.spotifyfirst;
  } else if (img === 'amazon') {
    imgSrc = { amazon };
    imgData = imgSrc.amazon;
  } else if (img === 'miniprojects') {
    imgSrc = { miniprojects };
    imgData = imgSrc.miniprojects;
  }

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
    <a className='projectLink' href={link} target='_blank' rel='noreferrer'>
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
          <small>
            Link to app:{' '}
            <a className='link' href={link} target='_blank' rel='noreferrer'>
              {name}
            </a>
          </small>
        </div>
        <div className='img'>
          <img src={imgData} alt='finpal' />
        </div>
      </motion.div>
    </a>
  );
}

export default Project;
