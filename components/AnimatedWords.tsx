"use client";

import { motion } from "motion/react";
import { FC } from "react";

interface AnimatedWordsProps {
  words: string[];
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
}

const ease = [0.25, 0.1, 0.25, 1] as const;

const AnimatedWords: FC<AnimatedWordsProps> = ({
  words,
  className,
  staggerDelay = 0.15,
  initialDelay = 0,
}) => {
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: initialDelay + i * staggerDelay,
            ease,
          }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

export default AnimatedWords;
