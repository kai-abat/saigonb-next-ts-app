"use client";

import { Divider } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GiCoffeeBeans, GiCoffeeCup } from "react-icons/gi";
import { IoIosRibbon } from "react-icons/io";
import { RiServiceFill } from "react-icons/ri";

const staticData = [
  {
    label: "Awesome Aroma",
    icon: <GiCoffeeCup className="w-full h-full" />,
    images: "/images/aroma.jpg",
  },
  {
    label: "Supreme Beans",
    icon: <GiCoffeeBeans className="w-full h-full" />,
    images: "/images/beans.jpg",
  },
  {
    label: "High Quality",
    icon: <IoIosRibbon className="w-full h-full" />,
    images: "/images/quality.jpg",
  },
  {
    label: "Friendly Staff",
    icon: <RiServiceFill className="w-full h-full" />,
    images: "/images/good-service.jpg",
  },
];

interface WhyChooseUsPropsType {
  title?: string;
  description?: string;
  data?: {
    label: string;
    icon: JSX.Element;
    images: string;
  }[];
}

const WhyChooseUs = ({
  title = "Why choose our coffee",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel deserunt ea voluptates suscipit impedit quibusdam ipsam officiis fugiat? Recusandae aut qui id veniam itaque nisi ipmet dolor sit lorem vel.",
  data = staticData,
}: WhyChooseUsPropsType) => {
  const [activeImage, setActiveImage] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prevIndex) =>
        prevIndex < data.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [data]);

  function handleActiveImage(index: number) {
    setActiveImage(index);
  }
  return (
    <div className="flex flex-col bg-primary/60 w-full transition-all duration-500 ease-in-out gap-4 p-4 rounded-xl">
      <p className="text-4xl font-semibold drop-shadow-md text-secondary capitalize">
        {title}
      </p>
      <Divider />
      <div className="flex flex-col sm:flex-row sm:justify-around  rounded-xl ">
        <div className="flex flex-col gap-4 justify-center items-center sm:justify-start sm:items-center w-full md:w-96">
          <p>{description}</p>
          <div className="grid grid-cols-2 grid-rows-2 gap-10">
            {data.map((items, index) => {
              return (
                <div
                  key={items.label}
                  className={`flex flex-col items-center justify-center gap-y-1-2 py-3 px-2 cursor-pointer rounded-xl h-24 w-24  hover:bg-primary shadow-lg ${
                    index === activeImage ? "bg-primary" : "bg-content3"
                  }`}
                  onClick={() => handleActiveImage(index)}
                >
                  <div className=" w-6 h-6 lg:w-8 lg:h-8">{items.icon}</div>
                  <p className=" text-content3-foreground text-center text-wrap">
                    {items.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div
          id="image-slideshow"
          className="relative overflow-hidden w-full max-w-80 max-h-80 bg-orange-600 rounded-full"
        >
          {data.map((item, index) => (
            <Image
              key={index}
              src={item.images}
              alt={`${index.toString()}_${item.label}`}
              width={500}
              height={500}
              className={`absolute top-1/2 left-1/2 scale-110  aspect-square w-full  object-cover transition-all duration-500 ease-in-out  -translate-y-1/2
                ${
                  index === activeImage
                    ? "z-10 opacity-100 -translate-x-1/2 rotate-0"
                    : "z-0 opacity-0 -translate-x-2/3 -rotate-6 "
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default WhyChooseUs;
