"use client";

import Image from "next/image";
import { useState } from "react";
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
    label: "Best Customer Service",
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
  const [activeImage, setActiveImage] = useState<string | undefined>(
    data.at(0)?.images
  );

  function handleActiveImage(image: string) {
    setActiveImage(image);
  }
  return (
    <div className="flex gap-4 p-4 rounded-xl transition-all duration-500 ease-in-out">
      <div className="flex flex-col gap-4 justify-start items-start w-3/4">
        <p className="text-4xl font-semibold drop-shadow-md text-primary">
          {title}
        </p>
        <p>{description}</p>
        <div className="grid grid-cols-2 grid-rows-2 gap-10">
          {data.map((items, index) => {
            return (
              <div
                key={items.label}
                className={`flex flex-col items-center justify-center gap-4 p-3 cursor-pointer rounded-xl  hover:bg-primary shadow-lg ${
                  items.images === activeImage ? "bg-primary" : "bg-content3"
                }`}
                onClick={() => handleActiveImage(items.images)}
              >
                <div className=" w-12 h-12">{items.icon}</div>
                <p className=" text-content3-foreground text-center">
                  {items.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {typeof activeImage === "string" && (
        <div className="overflow-hidden aspect-square w-full relative flex justify-center items-center">
          <div className=" absolute w-full h-full backdrop-blur-lg bg-primary/20 z-20"></div>
          <Image
            src={activeImage}
            alt="active image"
            width={300}
            height={300}
            className=" absolute aspect-square w-full object-cover z-0 backdrop-blur-xl"
          />
          <Image
            src={activeImage}
            alt="active image"
            width={300}
            height={300}
            className=" absolute z-30 aspect-square w-full max-w-[85%] object-cover before:opacity-40 after:opacity-100 rounded-md "
          />
        </div>
      )}
    </div>
  );
};
export default WhyChooseUs;
