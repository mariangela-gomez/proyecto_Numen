import { motion } from 'framer-motion';

const Navigation = () => {
  const navAnimation = {
    show: {
      transition: {
        staggerChildren: 0.4,
        delayChildren: 3.8,
        ease: "easeInOut"
      }
    }
  };

  const navText = {
    hidden: {
      opacity: 0,
      y: '-10px',
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut"
      }
    }
  };

  return (
    <nav className='nav'>
      <motion.ul variants={navAnimation} initial="hidden" animate="show">
        <motion.li variants={navText}><a href="#">Inicio</a></motion.li>
        <motion.li variants={navText}><a href="#">Clima</a></motion.li>
        <motion.li variants={navText}><a href="#">Nosotras</a></motion.li>
        <motion.li variants={navText}><a href="#">Contacto</a></motion.li>
      </motion.ul>
    </nav>
  );
};

export default Navigation;
