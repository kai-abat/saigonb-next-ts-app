import ProgressBarDefault from '@/components/loaders/ProgressBarDefault';

const HomePageLoader = () => {
  return (
    <div className='flex h-[80dvh] flex-col items-center justify-center gap-6 p-6 sm:h-[60dvh]'>
      <div>Loading Page...</div>
      <ProgressBarDefault />
    </div>
  );
};
export default HomePageLoader;
