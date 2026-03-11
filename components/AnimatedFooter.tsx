"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { FC } from "react";

const ease = [0.25, 0.1, 0.25, 1] as const;

const AnimatedFooter: FC = () => {
  return (
    <div className="flex items-baseline max-w-400 mx-auto px-8 py-16 flex-col md:flex-row gap-4 md:justify-between">
      {/* LEFT COLUMN */}
      <div>
        {/* Logo + socials row */}
        <motion.div
          className="flex items-end gap-6 mb-6 flex-col md:flex-row lg:gap-16 md:pb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0, ease }}
        >
          <div className="w-30">
            <Image
              src="/logo.png"
              alt="CD Studio Logo"
              width={120}
              height={36}
              priority
            />
          </div>
          <div className="gap-8 flex font-brasley">
            <a
              target="_blank"
              href="https://www.linkedin.com/company/cdstudiodesign/"
              className="inline-flex items-center justify-center text-sm border px-3 py-1 rounded-full transition-all duration-300 hover:bg-foreground hover:text-background hover:scale-105"
            >
              <span>LinkedIn</span>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/cdstudiodesign/"
              className="inline-flex items-center justify-center text-sm border px-3 py-1 rounded-full transition-all duration-300 hover:bg-foreground hover:text-background hover:scale-105"
            >
              <span>Instagram</span>
            </a>
          </div>
        </motion.div>

        {/* Email row */}
        <motion.div
          className="flex items-baseline gap-4 text-1xl lg:text-2xl flex-col md:flex-row lg:gap-16 md:pb-6 font-adieu"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.15, ease }}
        >
          <div className="w-30">
            <h3>Email us</h3>
          </div>
          <div>
            <a
              target="_blank"
              href="mailto:hello@cdstudio.design"
              className="relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:bg-current after:origin-right after:scale-x-0 hover:after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-350 after:ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            >
              hello@cdstudio.design
            </a>
          </div>
        </motion.div>
      </div>

      {/* RIGHT COLUMN — Our Services */}
      <div>
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
        >
          <h3 className="text-[20px] font-brasley">Our Services</h3>
        </motion.div>
        <div className="flex gap-4 flex-col md:flex-row md:gap-12">
          <div>
            <motion.h5
              className="mb-2 font-semibold font-brasley text-xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.45, ease }}
            >
              Branding
            </motion.h5>
            <ul className="[&>li]:before:content-['>'] [&>li]:before:mr-2">
              {[
                "Design",
                "Strategy & Direction",
                "Guidelines",
                "Packaging",
              ].map((item, i) => (
                <motion.li
                  key={item}
                  className="text-xs mb-2 font-brasley"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: 0.55 + i * 0.08, ease }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <motion.h5
              className="mb-2 font-semibold font-brasley text-xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.87, ease }}
            >
              Digital
            </motion.h5>
            <ul className="[&>li]:before:content-['>'] [&>li]:before:mr-2">
              {[
                "Web Design & Development",
                "App Design & Development",
                "Social Media Management",
                "Website Management",
                "SEO",
              ].map((item, i) => (
                <motion.li
                  key={item}
                  className="text-xs mb-2 font-brasley"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: 0.97 + i * 0.08, ease }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <motion.h5
              className="mb-2 font-semibold font-brasley text-xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 1.37, ease }}
            >
              Consultancy
            </motion.h5>
            <ul className="[&>li]:before:content-['>'] [&>li]:before:mr-2">
              {[
                "Advisory Support",
                "Market Strategy",
                "Growth Roadmapping",
                "Social & Cultural Impact",
                "Inclusive Positioning",
              ].map((item, i) => (
                <motion.li
                  key={item}
                  className="text-xs mb-2 font-brasley"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: 1.47 + i * 0.08, ease }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedFooter;
