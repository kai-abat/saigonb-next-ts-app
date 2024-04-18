'use client';

import { Divider } from '@nextui-org/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { GiCoffeeBeans, GiCoffeeCup } from 'react-icons/gi';
import { IoIosRibbon } from 'react-icons/io';
import { RiServiceFill } from 'react-icons/ri';
import Title from './Title';

const staticData = [
  {
    label: 'Awesome Aroma',
    icon: <GiCoffeeCup className='h-full w-full' />,
    images: '/images/aroma.jpg'
  },
  {
    label: 'Supreme Beans',
    icon: <GiCoffeeBeans className='h-full w-full' />,
    images: '/images/beans.jpg'
  },
  {
    label: 'High Quality',
    icon: <IoIosRibbon className='h-full w-full' />,
    images: '/images/quality.jpg'
  },
  {
    label: 'Friendly Staff',
    icon: <RiServiceFill className='h-full w-full' />,
    images: '/images/good-service.jpg'
  }
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
  title = 'Why choose our coffee',
  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel deserunt ea voluptates suscipit impedit quibusdam ipsam officiis fugiat? Recusandae aut qui id veniam itaque nisi ipmet dolor sit lorem vel.',
  data = staticData
}: WhyChooseUsPropsType) => {
  const [activeImage, setActiveImage] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage(prevIndex =>
        prevIndex < data.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [data]);

  function handleActiveImage(index: number) {
    setActiveImage(index);
  }
  return (
    <div className='flex w-full flex-col gap-4 rounded-xl bg-primary/60 p-4 transition-all duration-500 ease-in-out'>
      <Title capitalize>{title}</Title>

      <Divider />
      <div
        id='why-choose-us-content'
        className='flex flex-col items-center justify-center gap-y-6 rounded-xl md:flex-row md:justify-around md:gap-x-4 md:gap-y-0 '
      >
        <div
          id='controls'
          className='relative flex shrink grow basis-full flex-col items-center justify-center gap-4 md:items-center md:justify-start'
        >
          <p>{description}</p>
          <div className='grid  grid-cols-4 grid-rows-1 gap-4 lg:gap-x-8'>
            {data.map((items, index) => {
              return (
                <div
                  key={items.label}
                  className={`gap-y-1-2 flex h-24 w-24 cursor-pointer flex-col items-center justify-center rounded-xl px-2 py-3  shadow-lg hover:bg-primary ${
                    index === activeImage ? 'bg-primary' : 'bg-content3'
                  }`}
                  onClick={() => handleActiveImage(index)}
                >
                  <div className=' h-6 w-6 lg:h-8 lg:w-8'>{items.icon}</div>
                  <p className=' text-wrap text-center text-sm font-semibold text-content3-foreground'>
                    {items.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div
          id='image-slideshow'
          className='relative h-[300px] w-[300px] overflow-hidden rounded-full md:order-none md:aspect-square md:max-h-80 md:w-full md:max-w-80'
        >
          {data.map((item, index) => (
            <Image
              key={index}
              src={item.images}
              alt={`${index.toString()}_${item.label}`}
              width={500}
              height={500}
              className={`absolute left-1/2 top-1/2 aspect-square  w-full -translate-y-1/2  scale-110 object-cover transition-all duration-500  ease-in-out
                ${
                  index === activeImage
                    ? 'z-10 -translate-x-1/2 rotate-0 opacity-100'
                    : 'z-0 -translate-x-2/3 -rotate-6 opacity-0 '
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default WhyChooseUs;
