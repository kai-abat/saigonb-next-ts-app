import FilterMenu from "@/components/menu/FilterMenu";
import MenuListings from "@/components/menu/MenuListings";
import {
  fetchAllCategories,
  fetchAllCategoriesClient,
} from "@/utils/services/SaigonMenuAPI";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const defaultCategories = await fetchAllCategoriesClient();

  return defaultCategories.map((category) => ({
    category: category.name,
  }));
}

const MenuCategoryPage = async ({
  params,
}: {
  params: { category: string };
}) => {
  const categoryParam = decodeURIComponent(params.category).trim();

  const categoriesTbl = await fetchAllCategories();
  const filteredCategory = categoriesTbl.filter(
    (category) => category.name.toLowerCase() === categoryParam.toLowerCase()
  );

  const categories = categoriesTbl.map((categoryTbl) => categoryTbl.name);
  const defaultCategories = ["all", ...categories];
  return (
    <>
      <FilterMenu
        currentCategory={categoryParam}
        defaultCategories={defaultCategories}
      />
      <MenuListings categories={filteredCategory} />
    </>
  );
};

export default MenuCategoryPage;
