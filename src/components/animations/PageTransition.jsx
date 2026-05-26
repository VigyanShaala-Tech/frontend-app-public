import React from 'react';
import PropTypes from 'prop-types';
import { motion, useReducedMotion } from 'framer-motion';

export const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

export const pageTransition = {
  type: 'tween',
  ease: [0.25, 0.1, 0.25, 1],
  duration: 0.4,
};

const PageTransition = ({ children }) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className="page-transition">{children}</div>;
  }

  return (
    <motion.div
      className="page-transition"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTransition;
