import Printer from "@/components/Printer";
import FilterMenu from "@/components/menu/FilterMenu";
import MenuListings from "@/components/menu/MenuListings";
import { PageProps } from "@/utils/types/Props";
import { fetchAllCategories, fetchAllMenu } from "@/utils/services/MenuAPI";
import AddMenuButton from "@/components/menu/AddMenuButton";
import { getUserData } from "@/utils/services/UserAPI";

// params - dynamic route example [slug]
// serchParams are the /menu?category=all
const MenuPage = async ({ params }: PageProps) => {
  // const defaultCategories = await fetchAllCategories();
  // const menus = await fetchAllMenu();

  // Initiate both requests in parallel
  // const categoriesData = fetchAllCategories();
  // const menuData = fetchAllMenu();
  // const userData = await getUserData();

  // // Wait for the promises to resolve
  // const categoriesTbl = await fetchAllCategories();

  // if (!categoriesTbl) return <p>No menu available</p>;

  // const categories = categoriesTbl.map((categoryTbl) => categoryTbl.name);
  // const defaultCategories = ["all", ...categories];

  // return (
  //   <>
  //     <FilterMenu currentCategory="all" defaultCategories={defaultCategories} />
  //     {userData && <AddMenuButton />}
  //     <MenuListings categories={categoriesTbl} />
  //   </>
  // );

  return <p>/menu page should be redirected to /menu/all</p>;
};

export default MenuPage;
