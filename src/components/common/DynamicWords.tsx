import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type DynamicWordsProps = {
  words: string[];
  interval?: number;
  className?: string;
};

const DynamicWords: React.FC<DynamicWordsProps> = ({
  words,
  interval = 2200,
  className = '',
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <span
      className={`relative whitespace-nowrap ${className}`}
      style={{ minWidth: '20ch' }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="text-gradient-crimson"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default DynamicWords;
