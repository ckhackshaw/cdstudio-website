"use client";

import { motion } from "motion/react";
import { FC, ReactNode } from "react";

type Direction = "up" | "left" | "right" | "fade";

interface AnimateOnScrollProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
}

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 40 },
  left: { x: -40 },
  right: { x: 40 },
  fade: {},
};

const ease = [0.25, 0.1, 0.25, 1] as const;

const AnimateOnScroll: FC<AnimateOnScrollProps> = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className,
}) => {
  const offset = offsets[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;
