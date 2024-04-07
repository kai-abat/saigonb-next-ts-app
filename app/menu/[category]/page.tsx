import AddMenuButton from "@/components/menu/AddMenuButton";
import FilterMenu from "@/components/menu/FilterMenu";
import MenuListings from "@/components/menu/MenuListings";
import { fetchAllCategories } from "@/utils/services/MenuAPI";
import { getUserData } from "@/utils/services/UserAPI";
import { CategoryWithMenu } from "@/utils/types/Props";

// Return a list of `params` to populate the [slug] dynamic segment
// export async function generateStaticParams() {
//   const defaultCategories = await fetchAllCategoriesClient();

//   return defaultCategories.map((category) => ({
//     category: category.name,
//   }));
// }

const MenuCategoryPage = async ({
  params,
}: {
  params: { category: string };
}) => {
  const userData = await getUserData();
  const categoriesTbl = await fetchAllCategories();

  if (!categoriesTbl) return;

  const categoryParam = decodeURIComponent(params.category).trim();

  let filteredCategory: CategoryWithMenu[] = [];
  if (categoryParam.toLowerCase() === "all") {
    filteredCategory = [...categoriesTbl];
  } else {
    filteredCategory = categoriesTbl.filter(
      (category) => category.name.toLowerCase() === categoryParam.toLowerCase()
    );
  }

  const categories = categoriesTbl.map((categoryTbl) => categoryTbl.name);
  const defaultCategories = ["all", ...categories];
  return (
    <>
      <FilterMenu
        currentCategory={categoryParam}
        defaultCategories={defaultCategories}
      />
      {userData && <AddMenuButton />}
      <MenuListings categories={filteredCategory} />
    </>
  );
};

export default MenuCategoryPage;
