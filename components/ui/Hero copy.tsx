import Image from 'next/image';
import SlideShow from './SlideShow';
import heroMainBackgroundImage from '@/public/images/bg/landing-bg.jpg';
import heroSaigonCupImage from '@/public/images/bg/cup-bg.png';
import heroBeansImage from '@/public/images/bg/bg-bot.png';
import { fetchLoadingTimeout } from '@/utils/services/PageLoadingAPI';

const slideShowData = [
  { imageUrl: '/images/hero/1.jpg', alt: 'alt1' },
  { imageUrl: '/images/hero/2.jpg', alt: 'alt2' },
  { imageUrl: '/images/hero/3.jpg', alt: 'alt3' },
  { imageUrl: '/images/hero/4.jpg', alt: 'alt4' },
  { imageUrl: '/images/hero/5.jpg', alt: 'alt5' },
  { imageUrl: '/images/hero/6.jpg', alt: 'alt6' },
  { imageUrl: '/images/hero/7.jpg', alt: 'alt7' },
  { imageUrl: '/images/hero/8.jpg', alt: 'alt8' }
];

const Hero = async () => {
  await fetchLoadingTimeout(10000);
  return (
    <section className='h-[300px] w-full overflow-hidden bg-stone-800 sm:h-[400px] lg:h-[90dvh] '>
      <div className='relative flex h-full w-full'>
        <div className=' z-50 shrink grow-[2] basis-3/5'>
          <div className=' -mt-24 flex h-full w-full flex-col items-center justify-center gap-3 font-playfair_display sm:gap-y-4 md:-mt-24 md:gap-y-6 lg:-mt-32 [&_p]:text-xl [&_p]:text-primary sm:[&_p]:text-3xl md:[&_p]:text-4xl lg:[&_p]:text-6xl '>
            <p className='-ml-10 sm:-ml-32 md:-ml-40 '>More Coffee,</p>
            <p className='ml-10'>More Progress</p>
          </div>
        </div>
        <div className=' z-50 shrink grow basis-2/5 overflow-hidden rounded-b-[15rem] bg-secondary'>
          <SlideShow images={slideShowData} aspectRatio='9/16' />
        </div>
        {/* rough wall background */}
        <div className='z-10v absolute left-0 top-0 h-full w-full opacity-20'>
          <Image
            src={heroMainBackgroundImage}
            alt='background landing'
            className='h-full w-full object-cover '
            placeholder='blur'
            priority
          />
        </div>
        {/* saigon cup */}
        <div className='absolute bottom-[12%] left-0 z-40 aspect-square w-44 opacity-95 brightness-75 sm:bottom-[3%] sm:w-56 md:w-64 lg:w-80 '>
          <Image
            src={heroSaigonCupImage}
            alt='Saigon cup'
            className='aspect-square w-full -rotate-2  object-fill grayscale'
            placeholder='blur'
          />
        </div>
        {/* beans bottom */}
        <div className='absolute bottom-0 left-0 z-20 h-[200px] w-full opacity-30 '>
          <Image
            src={heroBeansImage}
            alt='beans bottom'
            className='h-full w-full object-fill  grayscale'
            placeholder='blur'
            priority
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
