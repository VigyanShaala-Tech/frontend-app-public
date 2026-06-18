import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const DIRECTION_OFFSET = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: -40 },
  right: { x: 40 },
};

const ScrollReveal = ({
  children,
  direction = 'up',
  className = '',
  delay = 0,
}) => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' });
  const offset = DIRECTION_OFFSET[direction] || DIRECTION_OFFSET.up;

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offset }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

ScrollReveal.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  className: PropTypes.string,
  delay: PropTypes.number,
};

export default ScrollReveal;
