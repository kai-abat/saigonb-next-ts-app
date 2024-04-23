import NewMenuForm from '@/components/menu/NewMenuForm';
import { extractNumberFromURLParams } from '@/utils/Helper';
import { fetchCategoriesOnly } from '@/utils/services/MenuAPI';
import { PageProps } from '@/utils/types/Props';

const NewMenuPage = async (props: PageProps) => {
  const { searchParams } = props;

  let { id } = searchParams;
  let menuId = extractNumberFromURLParams(id);
  const categories = await fetchCategoriesOnly();
  return (
    <div className='flex w-full flex-col gap-4'>
      <NewMenuForm categories={categories} id={menuId} />
    </div>
  );
};
export default NewMenuPage;
