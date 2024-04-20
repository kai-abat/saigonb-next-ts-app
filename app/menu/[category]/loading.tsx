import ProgressBarDefault from '@/components/loaders/ProgressBarDefault';

const MenuLoader = () => {
  return (
    <div className='flex h-[80dvh] flex-col items-center justify-center gap-6 p-6 sm:h-[60dvh]'>
      <div>Loading menu...</div>
      <ProgressBarDefault />
    </div>
  );
};
export default MenuLoader;
