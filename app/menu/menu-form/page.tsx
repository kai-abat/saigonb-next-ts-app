import MenuFormV2 from '@/components/menu/MenuFormV2';
import { extractNumberFromURLParams } from '@/utils/Helper';
import { fetchCategoriesOnly, fetchMenuById } from '@/utils/services/MenuAPI';
import { Menu, PageProps } from '@/utils/types/Props';

const MenuFormPage = async (props: PageProps) => {
  const { searchParams } = props;

  let { id } = searchParams;
  let menuId = extractNumberFromURLParams(id);
  // add fetch menu data here
  let menu: Menu | undefined;
  if (menuId) {
    menu = await fetchMenuById(menuId);
  }

  console.log('MenuFormPage:', menu);
  const categories = await fetchCategoriesOnly();
  return (
    <div className='flex w-full flex-col gap-4'>
      <MenuFormV2 categories={categories} menu={menu} />
    </div>
  );
};
export default MenuFormPage;
