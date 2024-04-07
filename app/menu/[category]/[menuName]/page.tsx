import Printer from "@/components/Printer";
import MenuDetails from "@/components/menu/MenuDetails";
import { fetchAllCategories } from "@/utils/services/MenuAPI";

const MenuItemPage = async ({
  params,
}: {
  params: { category: string; menuName: string };
}) => {
  const categoryParam = decodeURIComponent(params.category).trim();

  const menuNameParam = decodeURIComponent(params.menuName).trim();

  const categories = await fetchAllCategories();

  if (!categories) return;

  const category = categories.find(
    (category) => category.name.toLowerCase() === categoryParam.toLowerCase()
  );
  const menuItem = category?.menu.find(
    (menu) => menu.name.toLowerCase() === menuNameParam.toLowerCase()
  );

  return <MenuDetails menuItem={menuItem} />;
};
export default MenuItemPage;
