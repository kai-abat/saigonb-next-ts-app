import { createClient } from "../supabase/client";
import { Category, Menu } from "../types/Props";
import { extractMenuFromDB } from "./MenuAPI";

export const fetchAllMenuClient = async (): Promise<Menu[] | undefined> => {
  const supabase = createClient();
  const { data: menuTbl, error } = await supabase
    .from("Menu")
    .select("*, Category(*), MenuCoverPhoto(*), MenuPrice(*)");

  if (!menuTbl) return;

  return await extractMenuFromDB(menuTbl);
};

export const fetchAllCategoriesClient = async (): Promise<
  Category[] | undefined
> => {
  const supabase = createClient();
  const { data: categories, error } = await supabase
    .from("Category")
    .select("*");

  if (!categories) return;

  return categories.map((category) => {
    return {
      id: category.id,
      name: category.name,
      altName: category.altName,
    };
  });
};
