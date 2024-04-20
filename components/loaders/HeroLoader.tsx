import { Skeleton } from '@nextui-org/react';

const HeroLoader = () => {
  return (
    <section className='h-[300px] w-full overflow-hidden bg-stone-800 sm:h-[400px] lg:h-[90dvh] '>
      <div className='relative flex h-full w-full'>
        <div className=' z-50 shrink grow-[2] basis-3/5'>
          <div className=' -mt-24 flex h-full w-full flex-col items-center justify-center gap-3 font-playfair_display sm:gap-y-4 md:-mt-24 md:gap-y-6 lg:-mt-32 [&_p]:text-xl [&_p]:text-primary sm:[&_p]:text-3xl md:[&_p]:text-4xl lg:[&_p]:text-6xl '>
            <Skeleton className='h-max w-max'>
              <p className='-ml-10 bg-stone-700 indent-6 sm:-ml-32 md:-ml-40 '>
                More Coffee,
              </p>
            </Skeleton>
            <p className='ml-10'>More Progress</p>
          </div>
        </div>
        <Skeleton className='shrink grow basis-2/5 overflow-hidden rounded-b-[15rem]'>
          <div className='shrink grow basis-2/5 overflow-hidden rounded-b-[15rem] bg-secondary'>
            {/* <SlideShow images={slideShowData} aspectRatio='9/16' /> */}
          </div>
        </Skeleton>
      </div>
    </section>
  );
};
export default HeroLoader;
