import React, { useEffect, useState } from 'react';
import './Project.css';
import { motion } from 'framer-motion';

function Project({ name, description, img, link }) {
  const [imgSrc, setImgSrc] = useState(null);
  console.log(img + '>>' + imgSrc);

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
  });

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
    <a className='projectLink' href={link} target='_blank' rel='no-referrer'>
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
            <a className='link' href={link} target='_blank' rel='no-referrer'>
              {name}
            </a>
          </small>
        </div>
        <div className='img'>
          <img src={imgSrc} alt='finpal' />
        </div>
      </motion.div>
    </a>
  );
}

export default Project;
