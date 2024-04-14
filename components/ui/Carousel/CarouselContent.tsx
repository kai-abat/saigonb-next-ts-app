"use client";

import { ReactNode, useContext } from "react";
import { CarouselContext } from "./Carousel";
import { CarouselData } from "@/utils/types/Props";
import Image from "next/image";

const CarouselContent = ({ children }: { children: ReactNode }) => {
  const context = useContext(CarouselContext);
  if (!context) return;
  const { carouselRef, carouselSize, currentImg } = context;
  return (
    <div
      ref={carouselRef}
      style={{
        left: -currentImg * carouselSize.width,
      }}
      className="w-full h-full absolute flex transition-all duration-300 [&>div]:relative [&>div]:shrink-0
      [&>div]:w-full [&>div]:h-full"
    >
      {children}
      {/* {data.map((v, i) => (
        <div key={i}>
          <Image
            key={i}
            className="pointer-events-none"
            alt={v.title}
            src={v.image}
            fill
          />
        </div>
      ))} */}
    </div>
  );
};
export default CarouselContent;
