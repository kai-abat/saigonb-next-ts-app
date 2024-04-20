'use client';
import { CarouselData } from '@/utils/types/Props';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import React, {
  LegacyRef,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

interface CarouselContextData {
  currentImg: number;
  carouselRef: LegacyRef<HTMLDivElement>;
  carouselSize: { width: number; height: number };
}
export const CarouselContext = createContext<CarouselContextData | undefined>(
  undefined
);

const Carousel = ({
  data,
  children,
  timeInterval = 2000
}: {
  data: string[];
  children: ReactNode;
  timeInterval?: number;
}) => {
  const [autoTranslate, setAutoTranslate] = useState<boolean>(true);
  const [currentImg, setCurrentImg] = useState<number>(0);
  const [carouselSize, setCarouselSize] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const imagesLength = data.length;
  const intervalTimeMS = timeInterval;

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
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    function setCurrentImgInterval() {
      setCurrentImg(prev => getImageIndex(prev + 1));
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
  }, [imagesLength, autoTranslate, intervalTimeMS]);

  function getImageIndex(computedIndex: number): number {
    if (computedIndex < 0) return imagesLength - 1;
    if (computedIndex >= imagesLength) return 0;
    return computedIndex;
  }

  function handlePrevious() {
    setCurrentImg(prev => getImageIndex(prev - 1));
  }

  function handleNext() {
    setCurrentImg(prev => getImageIndex(prev + 1));
  }

  return (
    <CarouselContext.Provider value={{ currentImg, carouselRef, carouselSize }}>
      <section className='w-full'>
        <div
          id='carousel'
          className='relative flex h-full w-full flex-col items-center justify-center overflow-hidden'
        >
          <div
            id='carousel-images'
            className='aspect-square w-full sm:aspect-video lg:aspect-[21/9] '
          >
            {children}
          </div>
          <div
            id='button-prev-wrapper'
            className='absolute left-5 top-1/3 z-10 flex h-[50px] w-[50px] items-center justify-center transition-all duration-500 ease-in-out '
          >
            <Button
              isIconOnly
              className=' bg-transparent '
              onClick={handlePrevious}
            >
              <BsChevronLeft className='h-[30px] w-[30px] fill-stone-500/20 hover:fill-stone-500/90 sm:h-[90px] sm:w-[90px]' />
            </Button>
          </div>
          <div
            id='button-next-wrapper'
            className='absolute right-5 top-1/3 z-10 flex h-[50px] w-[50px] items-center justify-center transition-all duration-500 ease-in-out'
          >
            <Button
              isIconOnly
              size='lg'
              className='h-full w-full bg-transparent'
              onClick={handleNext}
            >
              <BsChevronRight className='h-[30px] w-[30px] fill-stone-500/20 hover:fill-stone-500/90 sm:h-[90px] sm:w-[90px]' />
            </Button>
          </div>
          <div className='absolute bottom-1 left-0 w-full p-4'>
            <div className='flex items-center justify-center gap-x-3'>
              {data.map((v, i) => (
                <div
                  key={i}
                  className={`h-2 w-2 cursor-pointer rounded-full hover:bg-stone-500/90  sm:h-4 sm:w-4
                ${currentImg === i ? 'bg-stone-500/90' : 'bg-stone-500/50'}`}
                  onMouseEnter={e => {
                    setAutoTranslate(false);
                  }}
                  onMouseOut={e => {
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
      </section>
    </CarouselContext.Provider>
  );
};

export default Carousel;
