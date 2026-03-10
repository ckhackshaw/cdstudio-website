"use client";

import { motion } from "motion/react";
import { FC, ReactNode } from "react";

interface AnimatedHeroProps {
  heading: ReactNode;
  video: ReactNode;
  tagline: ReactNode;
}

const ease = [0.25, 0.1, 0.25, 1] as const;

const AnimatedHero: FC<AnimatedHeroProps> = ({ heading, video, tagline }) => {
  return (
    <section className="max-w-400 mx-auto px-8">
      {/* Headline — fade from left */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease, delay: 0.9 }}
      >
        {heading}
      </motion.div>

      <div className="flex flex-col items-center">
        {/* Video */}
        <motion.div className="w-full flex justify-center">{video}</motion.div>

        {/* Tagline — fade up with longer delay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2, ease }}
        >
          {tagline}
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedHero;
