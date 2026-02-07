"use client";

import { motion, useMotionValue, animate } from "motion/react";
import Image from "next/image";
import React, {
  Children,
  FC,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

interface CarouselInterface {
  title: React.ReactNode;
  children: React.ReactNode;
}

type Direction = "left" | "right";

const Carousel: FC<CarouselInterface> = ({ title, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);

  const [slideWidth, setSlideWidth] = useState(0);
  const [items, setItems] = useState(Children.toArray(children));

  /* Measure slide width once mounted */
  useLayoutEffect(() => {
    if (!slideRef.current) return;
    setSlideWidth(slideRef.current.offsetWidth + 24); // 24 = gap-6
  }, []);

  const scroll = (direction: Direction) => {
    if (!slideWidth) return;

    if (direction === "right") {
      animate(x, -slideWidth, {
        type: "spring",
        stiffness: 300,
        damping: 30,
        onComplete: () => {
          setItems((prev) => {
            const next = [...prev];
            next.push(next.shift()!); // move first → end
            return next;
          });
          x.set(0);
        },
      });
    }

    if (direction === "left") {
      setItems((prev) => {
        const next = [...prev];
        next.unshift(next.pop()!); // move last → front
        return next;
      });

      x.set(-slideWidth);

      animate(x, 0, {
        type: "spring",
        stiffness: 300,
        damping: 30,
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scroll("right");
    }, 4000);

    return () => clearInterval(interval);
  }, [slideWidth]);

  return (
    <section className="flex bg-white py-16 flex-col overflow-hidden">
      <div className="max-w-400 mx-auto px-8 flex flex-col justify-between w-full mb-8 sm:flex-row">
        {title}

        <div className="flex gap-4 mt-4 sm:mt-0">
          <button onClick={() => scroll("left")}>
            <Image src="/arrow_left.svg" width={40} height={5} alt="Left" />
          </button>
          <button onClick={() => scroll("right")}>
            <Image src="/arrow_right.svg" width={40} height={5} alt="Right" />
          </button>
        </div>
      </div>

      <div ref={containerRef} className="relative overflow-hidden pl-5">
        <motion.div
          className="flex gap-6 cursor-grab active:cursor-grabbing"
          style={{ x }}
          drag="x"
          dragElastic={0.1}
        >
          {items.map((child, i) => (
            <motion.div
              ref={i === 0 ? slideRef : undefined}
              key={i}
              className="shrink-0"
              whileHover={{ scale: 1.03 }}
            >
              {child}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Carousel;
