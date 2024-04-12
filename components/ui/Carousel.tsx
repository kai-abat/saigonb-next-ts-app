"use client";
import { CarouselData } from "@/utils/types/Props";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Carousel = ({ data }: { data: CarouselData[] }) => {
  const [autoTranslate, setAutoTranslate] = useState(true);
  const [currentImg, setCurrentImg] = useState(0);
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 });
  const carouselRef = useRef(null);
  const imagesLength = data.length;
  const intervalTimeMS = 6000;

  useEffect(() => {
    function getCarouselDimension() {
      if (carouselRef.current) {
        let elem = carouselRef.current as unknown as HTMLDivElement;
        let { width, height } = elem.getBoundingClientRect();
        return { width, height };
      }
      return { width: 0, height: 0 };
    }

    function handleResize() {
      setCarouselSize(getCarouselDimension());
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    function setCurrentImgInterval() {
      setCurrentImg((prev) => getImageIndex(prev + 1));
    }
    function getImageIndex(computedIndex: number): number {
      if (computedIndex < 0) return imagesLength - 1;
      if (computedIndex >= imagesLength) return 0;
      return computedIndex;
    }

    //Implementing the setInterval method
    const interval = setInterval(() => {
      setCurrentImgInterval();
    }, intervalTimeMS);

    if (!autoTranslate) {
      clearInterval(interval);
    }

    //Clearing the interval
    return () => clearInterval(interval);
  }, [imagesLength, autoTranslate]);

  function getImageIndex(computedIndex: number): number {
    if (computedIndex < 0) return imagesLength - 1;
    if (computedIndex >= imagesLength) return 0;
    return computedIndex;
  }

  function handlePrevious() {
    setCurrentImg((prev) => getImageIndex(prev - 1));
  }

  function handleNext() {
    setCurrentImg((prev) => getImageIndex(prev + 1));
  }

  return (
    <div
      id="carousel"
      className="relative flex justify-center flex-col items-center"
    >
      <div
        id="carousel-images"
        className="w-full aspect-square sm:aspect-video lg:aspect-[21/9] object-cover rounded-t-md overflow-hidden relative"
      >
        <div
          ref={carouselRef}
          style={{
            left: -currentImg * carouselSize.width,
          }}
          className="w-full h-full absolute flex transition-all duration-300"
        >
          {data.map((v, i) => (
            <div key={i} className="relative shrink-0 w-full h-full">
              <Image
                className="pointer-events-none"
                alt={v.title}
                src={v.image}
                fill
              />
            </div>
          ))}
        </div>
      </div>
      <div
        id="button-prev-wrapper"
        className="absolute top-1/3 left-5 w-[50px] h-[50px] z-10 "
      >
        <Button
          isIconOnly
          className="w-full h-full bg-transparent"
          onClick={handlePrevious}
        >
          <BsChevronLeft className="h-[30px] w-[30px] sm:h-[90px] sm:w-[90px] fill-primary hover:fill-primary/80" />
        </Button>
      </div>
      <div
        id="button-next-wrapper"
        className="absolute top-1/3 right-5 w-[50px] h-[50px] z-10 "
      >
        <Button
          isIconOnly
          size="lg"
          className="w-full h-full bg-transparent"
          onClick={handleNext}
        >
          <BsChevronRight className="h-[30px] w-[30px] sm:h-[90px] sm:w-[90px] fill-primary hover:fill-primary/80" />
        </Button>
      </div>
      <div className="absolute bottom-1 left-0 w-full p-4">
        <div className="flex gap-x-3 justify-center items-center">
          {data.map((v, i) => (
            <div
              key={i}
              className="rounded-full w-2 h-2 sm:w-5 sm:h-5 bg-primary/60 hover:bg-primary/90 cursor-pointer"
              onMouseEnter={(e) => {
                setAutoTranslate(false);
              }}
              onMouseOut={(e) => {
                setAutoTranslate(true);
              }}
              onClick={() => {
                setCurrentImg(i);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Carousel;

{
  /* <div id="carousel-buttons" className="flex justify-center mt-3">
<button
  disabled={currentImg == 0}
  onClick={() => setCurrentImg((prev) => prev - 1)}
  className={`border px-4 py-2 font-bold ${
    currentImg == 0 && "opacity-50"
  }`}
>
  {"<"}
</button>
<button
  disabled={currentImg == data.length - 1}
  className={`border px-4 py-2 font-bold ${
    currentImg == data.length - 1 && "opacity-50"
  }`}
  onClick={() => setCurrentImg((prev) => prev + 1)}
>
  {">"}
</button>
</div> */
}
