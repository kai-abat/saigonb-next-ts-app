import MenuDetails from "@/components/menu/MenuDetails";
import { fetchAllCategories } from "@/utils/services/MenuAPI";
import { fetchAllMenuClient } from "@/utils/services/MenuClientAPI";

export async function generateStaticParams() {
  const menus = await fetchAllMenuClient();

  if (!menus)
    return [
      {
        menuName: encodeURIComponent("Ca Phe Sua"),
      },
    ];

  const menuNames = menus.map((menu) => {
    return { menuName: encodeURIComponent(menu.name) };
  });
  // console.log("Menu/[category][menuName] generateStaticParams...", menuNames);
  return menuNames;
}

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
