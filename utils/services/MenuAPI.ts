import { cookies } from "next/headers";
import { MENU } from "./TempData";
import { SupaCategory, SupaMenu } from "../types/SupabaseCompProps";
import { Category, CategoryWithMenu, Menu } from "../Props";
import { createServerCompClient } from "../supabase/ServerCompClient";
import { getSupabaseClient } from "../supabase/ClientSupabase";

const extractCategoriesFromDB = (supaCategories: SupaCategory[]) => {
  const category: CategoryWithMenu[] = supaCategories.map((category) =>
    extractCategoryFromDB(category)
  );
  return category;
};

const extractCategoryFromDB = (supaCategory: SupaCategory) => {
  return {
    id: supaCategory.id,
    name: supaCategory.name,
    altName: supaCategory.altName,
    menu: extractMenuFromDB(supaCategory.Menu),
  };
};

const extractMenuFromDB = (supaMenu: SupaMenu[]): Menu[] => {
  const menu: Menu[] = supaMenu.map((item, index) => {
    return {
      id: item.id,
      name: item.name,
      description: item.description,
      isFeatured: item.isFeatured,
      category: item.Category
        ? {
            id: item.Category.id,
            name: item.Category.name,
            altName: item.Category.altName,
          }
        : null,
      price: item.MenuPrice.map((price) => {
        return {
          id: price.id,
          type: price.type,
          size: price.size,
          price: price.price ? price.price : null,
        };
      }),
      coverPhotos: item.MenuCoverPhoto.map((coverPhoto) => {
        return {
          id: coverPhoto.id,
          image: coverPhoto.imageUrl,
        };
      }),
    };
  });
  return menu;
};

export const fetchAllMenu = async (): Promise<Menu[]> => {
  const supabase = createServerCompClient();

  const { data: menuTbl, error } = await supabase
    .from("Menu")
    .select("*, Category(*), MenuCoverPhoto(*), MenuPrice(*)");

  // const { data, error } = await supabase.from("Menu").select("*");
  // Temporary add timeout to show loading indicator
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  // console.log("fetchAllMenu", data);
  if (error) {
    console.log("fetchAllMenu", error);
    throw new Error(error.message);
  }

  return extractMenuFromDB(menuTbl);
};

export const fetchAllCategoriesClient = async (): Promise<
  CategoryWithMenu[]
> => {
  const supabase = getSupabaseClient();
  const { data: categories, error } = await supabase
    .from("Category")
    .select("*, Menu(*, Category(*),MenuCoverPhoto(*), MenuPrice(*))");

  if (error) {
    console.log("fetchAllCategoriesClient", error);
    throw new Error(error.message);
  }

  // await new Promise((resolve) => setTimeout(resolve, 5000));
  return extractCategoriesFromDB(categories);
};

export const fetchAllCategories = async (): Promise<CategoryWithMenu[]> => {
  const supabase = createServerCompClient();

  const { data: categories, error } = await supabase
    .from("Category")
    .select("*, Menu(*, Category(*),MenuCoverPhoto(*), MenuPrice(*))");

  if (error) {
    console.log("fetchAllCategories", error);
    throw new Error(error.message);
  }

  // await new Promise((resolve) => setTimeout(resolve, 5000));
  return extractCategoriesFromDB(categories);
};

export const fetchCategoriesOnly = async (): Promise<Category[]> => {
  const supabase = createServerCompClient();

  const { data: categories, error } = await supabase
    .from("Category")
    .select("id, name, altName");

  if (error) {
    console.log("fetchCategoriesOnly", error);
    throw new Error(error.message);
  }

  // await new Promise((resolve) => setTimeout(resolve, 5000));
  return categories;
};

export const fetchCategoryByName = async (
  name: string
): Promise<CategoryWithMenu> => {
  const supabase = createServerCompClient();

  const { data: category, error } = await supabase
    .from("Category")
    .select("*, Menu(*, Category(*),MenuCoverPhoto(*), MenuPrice(*))")
    .eq("name", name)
    .single();

  if (error) {
    console.log("fetchCategoryByName", error);
    throw new Error(error.message);
  }

  // await new Promise((resolve) => setTimeout(resolve, 5000));
  return extractCategoryFromDB(category);
};

export const fetchFeaturedMenu = async () => {
  return MENU.filter((menu) => menu.isFeatured);
};

export async function fetchMenuById(id: number) {
  return MENU.find((menu) => menu.id === id);
}
