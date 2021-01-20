import React, { createElement, useEffect, useState } from 'react';
import './Project.css';
import { motion } from 'framer-motion';
import finpal from '../../imgs/finpal.jpg';
import spotify from '../../imgs/spotify.jpg';
import amazon from '../../imgs/amazon.jpg';
import spotifyfirst from '../../imgs/spotifyfirst.jpg';
import miniprojects from '../../imgs/miniprojects.jpg';

function Project({ name, description, img, link }) {
  const [imgSrc, setImgSrc] = useState(null);
  console.log(finpal);

  useEffect(() => {
    if (img === 'finpal') {
      setImgSrc('/static/media/finpal.ddf4f35c.jpg');
    } else if (img === 'spotify') {
      setImgSrc('/static/media/spotify.6e067b8d.jpg');
    } else if (img === 'spotifyfirst') {
      setImgSrc('/static/media/spotifyfirst.4bf9192f.jpg');
    } else if (img === 'amazon') {
      setImgSrc('/static/media/amazon.e319170f.jpg');
    } else if (img === 'miniprojects') {
      setImgSrc('/static/media/miniprojects.699f4ace.jpg');
    }
  }, []);

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
        <img src={imgSrc} alt='finpal' />
      </div>
    </motion.div>
  );
}

export default Project;
