import React from 'react';
import { motion } from 'framer-motion';

const MountTransition = ({ children, slide = 0, slideUp = 0 }) => {
  return (
    <motion.div exit={{ x: slide, y: slideUp }} initial={{ x: slide, y: slideUp }} animate={{ x: 0, y: 0 }} className={`h-full`}>
      {children}
    </motion.div>
  );
};

export default MountTransition;
