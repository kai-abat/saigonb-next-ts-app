import NewMenuButton from "@/components/menu/NewMenuButton";
import FilterMenu from "@/components/menu/FilterMenu";
import MenuListings from "@/components/menu/MenuListings";
import { fetchAllCategories } from "@/utils/services/MenuAPI";
import { getUserData } from "@/utils/services/UserAPI";
import { CategoryWithMenu } from "@/utils/types/Props";
import { fetchAllCategoriesClient } from "@/utils/services/MenuClientAPI";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const categories = await fetchAllCategoriesClient();

  let defaultCategories = [{ category: "all" }];

  if (!categories) return defaultCategories;

  const categoriesDB = categories.map((category) => {
    return {
      category: encodeURIComponent(category.name),
    };
  });

  defaultCategories = [...defaultCategories, ...categoriesDB];

  // console.log("Menu/[category] generateStaticParams...", defaultCategories);

  return defaultCategories;
}

const MenuCategoryPage = async ({
  params,
}: {
  params: { category: string };
}) => {
  // console.log("MenuCategoryPage: fetching user authenticated...");
  // console.time();
  const userData = await getUserData();
  // console.timeEnd();
  // console.log("MenuCategoryPage: finish getting user authenticated...");
  // console.log("MenuCategoryPage: fetching all categories...");
  // console.time();
  const categoriesTbl = await fetchAllCategories();
  // console.timeEnd();
  // console.log("MenuCategoryPage: finish getting all categories...");

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
  // console.log("FilterMenu: defaultCategories:", defaultCategories);
  return (
    <>
      <FilterMenu
        currentCategory={categoryParam}
        defaultCategories={defaultCategories}
      />
      {userData && <NewMenuButton />}
      <MenuListings categories={filteredCategory} />
    </>
  );
};

export default MenuCategoryPage;
