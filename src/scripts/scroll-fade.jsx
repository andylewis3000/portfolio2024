import { motion } from 'framer-motion';

const ScrollFade = (children) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 1,
        },
      }}
      viewPort={{
        once: true,
        amount: 'some',
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFade;
