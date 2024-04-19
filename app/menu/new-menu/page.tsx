import NewMenuForm from '@/components/menu/NewMenuForm';
import { fetchCategoriesOnly } from '@/utils/services/MenuAPI';

const NewMenuPage = async () => {
  const categories = await fetchCategoriesOnly();
  return (
    <div className='flex w-full flex-col gap-4'>
      <NewMenuForm categories={categories} />
    </div>
  );
};
export default NewMenuPage;
