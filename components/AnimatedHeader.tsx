"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { FC } from "react";
import AnimatedWords from "./AnimatedWords";

const ease = [0.25, 0.1, 0.25, 1] as const;

const AnimatedHeader: FC = () => {
  return (
    <div className="flex flex-col items-baseline max-w-400 justify-between mx-auto px-8 py-8 sm:flex-row">
      <div className="flex flex-col sm:flex-row items-baseline">
        {/* Logo — first in, fade from left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0, ease }}
        >
          <Image
            src="/logo.svg"
            alt="CD Studio Logo"
            width={170}
            height={50}
            className="mr-20 mb-2 sm:mb-0"
            priority
          />
        </motion.div>

        {/* Words — stagger after logo */}
        <AnimatedWords
          words={["Digital.", "Branding.", "Agency."]}
          className="text-xl font-inter"
          staggerDelay={0.15}
          initialDelay={0.25}
        />
      </div>

      {/* Contact — last in header, fade from left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.7, ease }}
      >
        <button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="text-xl font-inter relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:bg-current after:origin-right after:scale-x-0 hover:after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-350 after:ease-[cubic-bezier(0.25,0.1,0.25,1)] cursor-pointer"
        >
          Contact
        </button>
      </motion.div>
    </div>
  );
};

export default AnimatedHeader;
