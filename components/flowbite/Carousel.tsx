import { Media } from "@/utils/types/Props";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Carousel as FBCarousel } from "flowbite-react";
import Image from "next/image";

const customTheme: CustomFlowbiteTheme["carousel"] = {
  indicators: {
    active: {
      off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
      on: "bg-primary dark:bg-primary",
    },
    base: "h-3 w-3 rounded-full",
    wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
  },
  control: {
    base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-none group-hover:bg-none group-focus:outline-none group-focus:ring-2 dark:bg-none dark:group-hover:bg-none group-focus:ring-white/20 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10 font-extralight",
    icon: "h-5 w-5 text-primary/20 hover:text-primary/80 transition-all duration-600  sm:h-10 sm:w-10 ",
  },
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-sm",
    snap: "snap-x",
  },
  item: {
    base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
    wrapper: {
      off: "w-full flex-shrink-0 transition-all transform cursor-default snap-center",
      on: "w-full flex-shrink-0 transition-all transform cursor-grab snap-center",
    },
  },
};

const Carousel = ({ data }: Media) => {
  return (
    <div id="carousel-container" className=" h-[80dvh]">
      <FBCarousel
        slide={true}
        slideInterval={10000}
        pauseOnHover={true}
        theme={customTheme}
      >
        {data.map((v, i) => (
          <div
            id={v.title + "-container"}
            key={i}
            className="relative shrink-0 w-full h-full"
          >
            <Image
              className="pointer-events-none"
              alt={v.title}
              fill
              src={v.image}
            />
          </div>
        ))}
      </FBCarousel>
    </div>
  );
};

export default Carousel;
