import { ComponentProps } from '@/utils/types/Props';

const CommonContainerLoader = ({ children }: ComponentProps) => {
  return (
    <div className='flex h-[350px] w-full flex-col items-start justify-start gap-6 rounded-xl bg-content4 p-6 *:rounded-xl lg:h-[70dvh]'>
      {children}
    </div>
  );
};
export default CommonContainerLoader;
