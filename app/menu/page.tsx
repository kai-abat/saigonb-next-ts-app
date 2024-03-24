import Printer from "@/components/Printer";
import FilterMenu from "@/components/menu/FilterMenu";
import MenuListings from "@/components/menu/MenuListings";
import { PageProps } from "@/utils/Props";
import {
  fetchAllCategories,
  fetchAllMenu,
} from "@/utils/services/SaigonMenuAPI";

// params - dynamic route example [slug]
// serchParams are the /menu?category=all
const MenuPage = async ({ params }: PageProps) => {
  // const defaultCategories = await fetchAllCategories();
  // const menus = await fetchAllMenu();

  // Initiate both requests in parallel
  // const categoriesData = fetchAllCategories();
  // const menuData = fetchAllMenu();

  // Wait for the promises to resolve
  const categoriesTbl = await fetchAllCategories();

  const categories = categoriesTbl.map((categoryTbl) => categoryTbl.name);
  const defaultCategories = ["all", ...categories];

  return (
    <>
      <FilterMenu currentCategory="all" defaultCategories={defaultCategories} />
      <MenuListings categories={categoriesTbl} />
    </>
  );
};

export default MenuPage;
