import { Skeleton } from '@nextui-org/react';
import Typography from '../ui/Typography';

const HeroLoader = () => {
  return (
    <section className='aspect-video w-full overflow-hidden bg-content4 lg:aspect-auto lg:h-[90dvh]'>
      <div className='relative flex h-full w-full'>
        <div className=' z-50 flex shrink grow-[2] basis-3/5 flex-col justify-start gap-y-1 font-playfair_display tracking-wider text-primary *:drop-shadow-md first:mt-5 *:xs:ml-3 sm:gap-y-3 sm:tracking-widest *:sm:ml-8 *:md:ml-12'>
          <Skeleton className='w-max rounded-xl'>
            <Typography
              variant='h1'
              className=' rounded-xl bg-stone-700 text-transparent'
            >
              More Coffee,
            </Typography>
          </Skeleton>
          <Skeleton className='w-max rounded-xl'>
            <Typography
              variant='h1'
              className=' rounded-xl bg-stone-700 px-4 indent-6 text-transparent md:indent-12 '
            >
              More Progress
            </Typography>
          </Skeleton>
        </div>
        <Skeleton className='shrink grow basis-2/5 overflow-hidden rounded-b-[15rem]'>
          <div className='shrink grow basis-2/5 rounded-b-[15rem] bg-stone-700'></div>
        </Skeleton>
        {/* saigon cup */}
        <Skeleton className='absolute bottom-[2%] left-4 z-20 aspect-[3/4] h-[60%] rounded-xl xs:left-5 sm:left-10'>
          <div className='h-full w-full rounded-xl bg-stone-700'></div>
        </Skeleton>
      </div>
    </section>
  );
};
export default HeroLoader;
