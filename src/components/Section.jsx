import { motion } from 'framer-motion';

const Section = () => {
  const typingContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
      },
    },
  };

  const typingText = {
    hidden: { opacity: 0, y: '-20px' },
    show: {
      opacity: 1,
      y: '0',
      transition: {
        ease: 'easeInOut',
      },
    },
  };

  const explainProduct = {
    hidden: { opacity: 0, y: '-20px' },
    show: {
      opacity: 1,
      y: '0',
      transition: {
        delay: 2.2,
        ease: 'easeInOut',
      },
    },
  };

  const imgProduct1 = {
    hidden: {
      opacity: 0,
      y: '400px',
      width: '80px',
    },
    show: {
      opacity: 1,
      y: 0,
      width: '380px',
      transition: {
        duration: 1,
        delay: 2.5,
        ease: 'easeInOut',
      },
    },
  };

  const imgProduct2 = {
    hidden: {
      opacity: 0,
      y: '400px',
      x: '50px',
      width: '80px',
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      width: '380px',
      transition: {
        duration: 1,
        delay: 3.4,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className='section'>
      <div className='left'>
        <motion.h1 className='text' variants={typingContainer} initial='hidden' animate='show'>
          {Array.from('El Clima').map((word, i) => (
            <motion.span key={i} variants={typingText}>
              {word}
            </motion.span>
          ))}
        </motion.h1>
        <div className='explain-product'>
          <motion.p variants={explainProduct} initial='hidden' animate='show'>
            Obtén información climática en tiempo real de cualquier lugar del mundo con esta aplicación. Mantente al
            tanto de las condiciones meteorológicas actuales estés donde estés, permitiéndote planificar y estar preparado
            para cualquier eventualidad.
          </motion.p>
        </div>
      </div>
      <div className='right'>
        <motion.img
          src='/images/summer.jpg'
          alt='nature'
          className='img1'
          variants={imgProduct1}
          initial='hidden'
          animate='show'
        />
        <motion.img
          src='/images/winter.jpg'
          alt='coffee'
          className='img2'
          variants={imgProduct2}
          initial='hidden'
          animate='show'
        />
      </div>
    </section>
  );
};

export default Section;
