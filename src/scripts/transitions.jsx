import { motion } from 'framer-motion';

const opacityAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      className="page"
      transition={{
        ease: 'easeInOut',
        duration: 0.75,
      }}
      variants={opacityAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
