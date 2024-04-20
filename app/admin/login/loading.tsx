import ProgressBarDefault from '@/components/loaders/ProgressBarDefault';

const DefaultLoader = () => {
  return (
    <div className='flex h-[80dvh] flex-col items-center justify-center gap-6 p-6 sm:h-[60dvh]'>
      <div>Loading Sign In Page...</div>
      <ProgressBarDefault />
    </div>
  );
};
export default DefaultLoader;
