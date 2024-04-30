import Image from 'next/image';
import SlideShow from './SlideShow';
import heroMainBackgroundImage from '@/public/images/bg/landing-bg.jpg';
import heroSaigonCupImage from '@/public/images/bg/cup-bg.png';
import heroBeansImage from '@/public/images/bg/bg-bot.png';
import Typography from './Typography';
import { fetchHeroSlides } from '@/utils/services/LandingAPI';
import { getFilenames } from '@/utils/Helper';

const slideShowDataFixed = [
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
  const imageUrls = await fetchHeroSlides();
  let slideShowData = slideShowDataFixed;
  if (imageUrls) {
    slideShowData = imageUrls.map(url => {
      const altTxt = getFilenames([url]).at(0) ?? 'slideshow image';
      return { imageUrl: url, alt: altTxt };
    });
  }

  return (
    <section className='aspect-video w-full overflow-hidden bg-stone-800 lg:aspect-auto lg:h-[90dvh]'>
      <div className='relative flex h-full w-full'>
        {/* Slogan */}
        <div className=' z-50 flex shrink grow-[2] basis-3/5 flex-col justify-start gap-y-1 font-playfair_display tracking-wider text-primary *:drop-shadow-md first:mt-5 *:xs:ml-3 sm:gap-y-3 sm:tracking-widest *:sm:ml-8 *:md:ml-12'>
          <Typography variant='h1'>More Coffee,</Typography>
          <Typography variant='h1' className=' indent-6 md:indent-12'>
            More Progress
          </Typography>
        </div>
        {/* Slideshow */}
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
        <div className='absolute -left-4 bottom-[1%] z-40 aspect-square h-[60%] opacity-95 brightness-75 '>
          <Image
            src={heroSaigonCupImage}
            alt='Saigon cup'
            className='aspect-square w-full -rotate-2 object-fill grayscale'
            placeholder='blur'
          />
        </div>
        {/* beans bottom */}
        <div className='absolute bottom-0 left-0 z-20 h-[200px] w-full opacity-30 '>
          <Image
            src={heroBeansImage}
            alt='beans bottom'
            className='h-full w-full object-cover  grayscale'
            placeholder='blur'
            priority
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
