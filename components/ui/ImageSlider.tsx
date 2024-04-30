'use client';

import { getFallbackImagePath } from '@/utils/Helper';
import { MenuCoverPhoto } from '@/utils/types/Props';
import { Button, Image as ImageUI, cn } from '@nextui-org/react';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import FallbackImage from './FallbackImage';

export function ImageSlider({ images }: { images: MenuCoverPhoto[] }) {
  const [imagesStore, setImagesStore] = useState<MenuCoverPhoto[]>(images);
  const [active, setActive] = useState(images?.at(0)?.image);
  const sliderRef = useRef<HTMLInputElement>(null);

  const handlePrevPress = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 100;
    }
  };
  const handlePrevNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 100;
    }
  };

  return (
    // grid-cols-3
    <div className='flex w-full flex-col items-center justify-center gap-y-2'>
      <div className=' flex max-w-[400px] items-center justify-center'>
        <ImageUI
          as={Image}
          className='aspect-square rounded-md object-cover object-center'
          src={active}
          alt=''
          width={600}
          height={600}
          radius='sm'
          fallbackSrc={<FallbackImage />}
          classNames={{
            wrapper: cn(
              'aspect-square bg-no-repeat bg-center bg-cover w-full h-full '
            )
          }}
        />
      </div>
      <div className='relative flex w-full min-w-[200px] max-w-[400px] shrink items-center justify-center gap-x-1'>
        {images.length > 1 && (
          <Button
            isIconOnly
            variant='light'
            color='primary'
            size='lg'
            fullWidth={true}
            radius='full'
            className='absolute left-0 top-1/4 z-50 h-[50px] focus:z-50 focus:bg-red-600'
            onPress={handlePrevPress}
          >
            <GrPrevious />
          </Button>
        )}
        <div
          ref={sliderRef}
          className='z-20 flex w-full shrink snap-mandatory gap-2 overflow-x-hidden'
        >
          {images &&
            images.map(({ id, image }, index) => (
              <div key={index}>
                <div className='h-[100px] w-[100px] '>
                  <ImageUI
                    as={Image}
                    onClick={() => setActive(image)}
                    src={image}
                    className={`aspect-square cursor-pointer rounded-lg object-cover object-center hover:contrast-100
                  ${active === image ? 'contrast-100' : 'contrast-50'}`}
                    alt='gallery-image'
                    width={150}
                    height={150}
                    radius='sm'
                    fallbackSrc={getFallbackImagePath()}
                    classNames={{
                      wrapper: cn(
                        'aspect-square bg-no-repeat bg-center bg-cover '
                      )
                    }}
                  />
                </div>
              </div>
            ))}
        </div>
        {images.length > 1 && (
          <Button
            isIconOnly
            variant='light'
            color='primary'
            size='lg'
            radius='full'
            className='absolute right-0 top-1/4 z-50 h-[50px]'
            onPress={handlePrevNext}
          >
            <GrNext />
          </Button>
        )}
      </div>

      {/* grid grid-cols-5 gap-4 */}
      {/* <div
        id="slider-nav-buttons"
        className="grid grid-cols-3 bg-red-600 w-ful"
      >
        <Button
          isIconOnly
          variant="light"
          color="primary"
          size="lg"
          radius="full"
          className=""
          onPress={handlePrevPress}
        >
          <GrPrevious />
        </Button>
        <div
          ref={sliderRef}
          className="grid gap-2 grid-flow-col  overflow-x-scroll scroll-p-2 snap-mandatory"
        >
          {images &&
            images.map(({ id, image }, index) => (
              <div key={index}>
                <div className="w-[100px] h-[100px] ">
                  <ImageUI
                    as={Image}
                    onClick={() => setActive(image)}
                    src={image}
                    className={`aspect-square cursor-pointer rounded-lg object-cover object-center hover:contrast-100
                  ${active === image ? "contrast-100" : "contrast-50"}`}
                    alt="gallery-image"
                    width={150}
                    height={150}
                  />
                </div>
              </div>
            ))}
        </div>
        <Button
          isIconOnly
          variant="light"
          color="primary"
          size="lg"
          radius="full"
          className=""
          onPress={handlePrevNext}
        >
          <GrNext />
        </Button>
      </div> */}
      {/* <div
        ref={sliderRef}
        className="relative grid gap-2 grid-flow-col  overflow-x-scroll scroll-p-2 snap-mandatory"
      >
        {images &&
          images.map(({ id, image }, index) => (
            <div key={index}>
              <div className="w-[100px] h-[100px] ">
                <ImageUI
                  as={Image}
                  onClick={() => setActive(image)}
                  src={image}
                  className={`aspect-square cursor-pointer rounded-lg object-cover object-center hover:contrast-100
                  ${active === image ? "contrast-100" : "contrast-50"}`}
                  alt="gallery-image"
                  width={150}
                  height={150}
                />
              </div>
            </div>
          ))}
      </div> */}
    </div>
  );
}

export default ImageSlider;
