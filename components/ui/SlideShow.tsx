'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Images {
  imageUrl: string;
  alt: string;
}

const SlideShow = ({
  images,
  aspectRatio,
  timeInterval = 5000
}: {
  images: Images[];
  aspectRatio?: 'square' | 'video' | '9/16';
  timeInterval?: number;
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex(prevIndex =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, timeInterval);

    return () => clearInterval(interval);
  }, [images, timeInterval]);
  return (
    <div
      id='image-slideshow'
      className='relative h-full w-full overflow-hidden'
    >
      {images.map((item, index) => (
        <Image
          key={index}
          src={item.imageUrl}
          alt={`${index.toString()}_${item.alt}`}
          fill
          className={`absolute left-0 top-0  h-full w-full scale-110 object-cover transition-all  duration-500 ease-in-out
                ${
                  index === activeImageIndex
                    ? 'z-10 -translate-x-0 rotate-0 opacity-100'
                    : 'z-0 -translate-x-4 -rotate-6 opacity-0 '
                }
                
                ${(!aspectRatio || aspectRatio === 'square') && 'aspect-square'}
                ${aspectRatio === '9/16' && 'aspect-[9/16]'}
                ${aspectRatio === 'video' && 'aspect-video'}
                `}
        />
      ))}
    </div>
  );
};
export default SlideShow;
