import React from "react";
import Carousel from "./Carousel";
import Image from "next/image";
import localFont from "next/font/local";

const adieu = localFont({
  src: "../public/Adieu-Regular.ttf",
});

const brasley = localFont({
  src: [
    {
      path: "../public/Brasley Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/Brasley Semibold.otf",
      weight: "600",
      style: "normal",
    },
  ],
});

const ServicesCarousel = () => {
  const slides = [
    { title: "Branding", image: "/tgk.png" },
    { title: "Web Design", image: "/dbh.png" },
    { title: "Strategy", image: "/ofc.png" },
    { title: "Social Media", image: "/ujb.png" },
    { title: "Campaigns", image: "/joc.png" },
    { title: "Print", image: "/sfx.png" },
  ];

  return (
    <Carousel
      title={
        <h2 className={`text-3xl text-black font-semibold`}>Our Services</h2>
      }
    >
      {slides.map(({ title, image }) => (
        <div key={title} style={{ minWidth: "390px" }} className="relative">
          <Image
            src={image}
            alt={`${title} Slide`}
            width={390}
            height={330}
            priority
          />
          <div className="top-0 absolute left-0 right-0 bottom-0 bg-black/60 flex justify-center items-center">
            <h1 className={`text-4xl`}>{title}</h1>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default ServicesCarousel;
