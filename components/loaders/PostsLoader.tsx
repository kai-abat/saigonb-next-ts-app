import { Skeleton } from '@nextui-org/react';

const PostsLoader = () => {
  return (
    <>
      <Skeleton className='h-[20%] w-full rounded-xl'>
        <div className='h-[20%] w-full  rounded-xl bg-content4'></div>
      </Skeleton>
      <div className='flex h-full w-full gap-x-4'>
        <div className=' h-full w-full flex-1 grow-[2] space-y-3 '>
          <Skeleton className='h-[40%] w-full rounded-xl'>
            <div className='h-[40%] w-full rounded-xl'></div>
          </Skeleton>
          <Skeleton className='h-[20%] w-full rounded-xl'>
            <div className='h-[20%] w-full rounded-xl'></div>
          </Skeleton>
          <Skeleton className='h-[20%] w-full rounded-xl'>
            <div className='h-[20%] w-full rounded-xl'></div>
          </Skeleton>
        </div>

        <Skeleton className=' h-full w-full flex-1 grow overflow-hidden'>
          <div className='h-full w-full'></div>
        </Skeleton>
      </div>
    </>
  );
};
export default PostsLoader;
