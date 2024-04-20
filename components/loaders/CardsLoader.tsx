import { Skeleton } from '@nextui-org/react';

const CardsLoader = () => {
  return (
    <div className='grid h-full w-full grid-cols-2 grid-rows-2 gap-x-4 lg:grid-cols-4 lg:grid-rows-1'>
      <Skeleton className=' h-full w-full rounded-xl'>
        <div className='h-full w-full rounded-xl'></div>
      </Skeleton>
      <Skeleton className=' h-full w-full rounded-xl'>
        <div className='h-full w-full rounded-xl'></div>
      </Skeleton>
      <Skeleton className=' h-full w-full rounded-xl'>
        <div className='h-full w-full rounded-xl'></div>
      </Skeleton>
      <Skeleton className=' h-full w-full rounded-xl'>
        <div className='h-full w-full rounded-xl'></div>
      </Skeleton>
    </div>
  );
};
export default CardsLoader;
